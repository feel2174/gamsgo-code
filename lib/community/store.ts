import { cache } from "react";
import { createServiceClient } from "@/lib/supabase/server";
import { generateNickname } from "./nickname";
import type {
  CommunityComment,
  CommunityPost,
  CommunityPostType,
  CommunityServiceCategory,
} from "./types";

interface PostRow {
  id: string;
  service_category: string;
  post_type: CommunityPostType;
  rating: number | string;
  nickname: string;
  title: string;
  content: string;
  hearts: number;
  status: "visible" | "hidden";
  created_at: string;
  comments?: CommentRow[];
}

interface PostRowWithCommentCount extends Omit<PostRow, "comments"> {
  comments?: { count: number }[];
}

interface CommentRow {
  id: string;
  post_id: string;
  nickname: string;
  content: string;
  hearts: number;
  status: "visible" | "hidden";
  created_at: string;
}

function mapComment(row: CommentRow): CommunityComment {
  return {
    id: row.id,
    nickname: row.nickname,
    content: row.content,
    hearts: row.hearts,
    status: row.status,
    createdAt: row.created_at,
  };
}

function mapPostSummary(row: PostRowWithCommentCount): CommunityPost {
  return {
    id: row.id,
    serviceCategory: row.service_category,
    postType: row.post_type,
    rating: Number(row.rating),
    nickname: row.nickname,
    title: row.title,
    content: row.content,
    hearts: row.hearts,
    status: row.status,
    createdAt: row.created_at,
    commentCount: row.comments?.[0]?.count ?? 0,
    comments: [],
  };
}

function mapPostDetail(row: PostRow, comments: CommunityComment[]): CommunityPost {
  return {
    id: row.id,
    serviceCategory: row.service_category,
    postType: row.post_type,
    rating: Number(row.rating),
    nickname: row.nickname,
    title: row.title,
    content: row.content,
    hearts: row.hearts,
    status: row.status,
    createdAt: row.created_at,
    commentCount: comments.length,
    comments,
  };
}

function sortedVisibleComments(rows: CommentRow[] | undefined): CommunityComment[] {
  return (rows ?? [])
    .filter((c) => c.status === "visible")
    .sort(
      (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    )
    .map(mapComment);
}

/** 사이트맵용 초경량 조회 — id/작성일만 */
export async function listPostIdsForSitemap(): Promise<
  { id: string; createdAt: string }[]
> {
  const supabase = createServiceClient();
  const { data, error } = await supabase
    .from("posts")
    .select("id, created_at")
    .eq("status", "visible")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data as { id: string; created_at: string }[]).map((row) => ({
    id: row.id,
    createdAt: row.created_at,
  }));
}

/**
 * 목록/피드용 경량 조회. 댓글은 개수만 가져와 페이로드와 응답 시간을 줄임
 * (숨김 댓글도 개수에 포함될 수 있음 — 상세 페이지에서만 정확한 공개 댓글 수를 보여줌)
 */
export async function listPostsPage(
  offset: number,
  limit: number
): Promise<{ posts: CommunityPost[]; nextOffset: number; hasMore: boolean }> {
  const supabase = createServiceClient();
  const { data, error, count } = await supabase
    .from("posts")
    .select("*, comments(count)", { count: "exact" })
    .eq("status", "visible")
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);
  if (error) throw error;

  const posts = (data as PostRowWithCommentCount[]).map(mapPostSummary);
  const nextOffset = offset + posts.length;
  const total = count ?? nextOffset;
  return { posts, nextOffset, hasMore: nextOffset < total };
}

/**
 * 겜스고 후기 페이지의 구조화 데이터(Review)·노출 섹션용 실제 후기 조회.
 * 별점이 있는 '후기' 타입 공개 글만 최신순으로 가져온다. 실패 시 빈 배열을
 * 돌려주어 마케팅 페이지 렌더링이 Supabase 장애에 영향받지 않게 한다.
 */
export const listRecentReviews = cache(
  async (limit: number): Promise<CommunityPost[]> => {
    try {
      const supabase = createServiceClient();
      const { data, error } = await supabase
        .from("posts")
        .select("*, comments(count)")
        .eq("status", "visible")
        .eq("post_type", "후기")
        .gt("rating", 0)
        .order("created_at", { ascending: false })
        .limit(limit);
      if (error || !data) return [];
      return (data as PostRowWithCommentCount[]).map(mapPostSummary);
    } catch {
      return [];
    }
  }
);

/**
 * 겜스고 후기 페이지의 구조화 데이터(AggregateRating)·노출 배지용 실제 집계.
 * 별점이 있는 공개 '후기'(rating > 0)의 평균 별점과 개수를 실제 데이터로 계산한다.
 * Google 리뷰 스니펫 정책·사이트 정책상 조작된 값이 아닌 진짜 커뮤니티 데이터만
 * 구조화 데이터에 넣어야 하므로, 후기가 하나도 없으면 null을 돌려 aggregateRating
 * 자체를 생략한다(마케팅 페이지 렌더링은 Supabase 장애에 영향받지 않도록 try/catch).
 */
export const getReviewAggregate = cache(
  async (): Promise<{ ratingValue: number; reviewCount: number } | null> => {
    try {
      const supabase = createServiceClient();
      const { data, error } = await supabase
        .from("posts")
        .select("rating")
        .eq("status", "visible")
        .eq("post_type", "후기")
        .gt("rating", 0);
      if (error || !data || data.length === 0) return null;
      const ratings = (data as { rating: number | string }[]).map((r) =>
        Number(r.rating)
      );
      const sum = ratings.reduce((acc, r) => acc + r, 0);
      return {
        // 소수 첫째 자리까지 반올림(예: 4.63 → 4.6)
        ratingValue: Math.round((sum / ratings.length) * 10) / 10,
        reviewCount: ratings.length,
      };
    } catch {
      return null;
    }
  }
);

export const getPost = cache(
  async (id: string): Promise<CommunityPost | undefined> => {
    const supabase = createServiceClient();
    const { data, error } = await supabase
      .from("posts")
      .select("*, comments(*)")
      .eq("id", id)
      .eq("status", "visible")
      .maybeSingle();
    if (error || !data) return undefined;
    const row = data as PostRow;
    return mapPostDetail(row, sortedVisibleComments(row.comments));
  }
);

export async function createPost(input: {
  serviceCategory: CommunityServiceCategory;
  postType: CommunityPostType;
  rating: number;
  title: string;
  content: string;
}): Promise<CommunityPost> {
  const supabase = createServiceClient();
  const { data, error } = await supabase
    .from("posts")
    .insert({
      service_category: input.serviceCategory,
      post_type: input.postType,
      rating: input.rating,
      nickname: generateNickname(),
      title: input.title,
      content: input.content,
    })
    .select()
    .single();
  if (error) throw error;
  return mapPostDetail(data as PostRow, []);
}

export async function createComment(
  postId: string,
  content: string
): Promise<CommunityComment | undefined> {
  const supabase = createServiceClient();
  const { data, error } = await supabase
    .from("comments")
    .insert({
      post_id: postId,
      nickname: generateNickname(),
      content,
    })
    .select()
    .single();
  if (error) return undefined;
  return mapComment(data as CommentRow);
}

export async function adjustPostHearts(
  postId: string,
  delta: 1 | -1
): Promise<number | undefined> {
  const supabase = createServiceClient();
  const { data, error } = await supabase.rpc("adjust_post_hearts", {
    p_id: postId,
    delta,
  });
  if (error) return undefined;
  return data as number;
}

export async function adjustCommentHearts(
  postId: string,
  commentId: string,
  delta: 1 | -1
): Promise<number | undefined> {
  const supabase = createServiceClient();
  const { data, error } = await supabase.rpc("adjust_comment_hearts", {
    c_id: commentId,
    delta,
  });
  if (error) return undefined;
  return data as number;
}
