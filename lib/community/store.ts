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

function mapPost(row: PostRow, comments: CommunityComment[]): CommunityPost {
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

export async function listPosts(): Promise<CommunityPost[]> {
  const supabase = createServiceClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*, comments(*)")
    .eq("status", "visible")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data as PostRow[]).map((row) =>
    mapPost(row, sortedVisibleComments(row.comments))
  );
}

export async function listPostsPage(
  offset: number,
  limit: number
): Promise<{ posts: CommunityPost[]; nextOffset: number; hasMore: boolean }> {
  const supabase = createServiceClient();
  const { data, error, count } = await supabase
    .from("posts")
    .select("*, comments(*)", { count: "exact" })
    .eq("status", "visible")
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);
  if (error) throw error;

  const posts = (data as PostRow[]).map((row) =>
    mapPost(row, sortedVisibleComments(row.comments))
  );
  const nextOffset = offset + posts.length;
  const total = count ?? nextOffset;
  return { posts, nextOffset, hasMore: nextOffset < total };
}

export async function getPost(id: string): Promise<CommunityPost | undefined> {
  const supabase = createServiceClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*, comments(*)")
    .eq("id", id)
    .eq("status", "visible")
    .maybeSingle();
  if (error || !data) return undefined;
  const row = data as PostRow;
  return mapPost(row, sortedVisibleComments(row.comments));
}

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
  return mapPost(data as PostRow, []);
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
