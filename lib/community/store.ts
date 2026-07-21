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
