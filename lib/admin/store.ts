import { createServiceClient } from "@/lib/supabase/server";
import type { CommunityComment, CommunityPost, ModerationStatus } from "@/lib/community/types";

interface PostRow {
  id: string;
  service_category: string;
  post_type: "후기" | "정보";
  rating: number | string;
  nickname: string;
  title: string;
  content: string;
  hearts: number;
  status: ModerationStatus;
  created_at: string;
  comments?: CommentRow[];
}

interface CommentRow {
  id: string;
  post_id: string;
  nickname: string;
  content: string;
  hearts: number;
  status: ModerationStatus;
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

function mapPost(row: PostRow): CommunityPost {
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
    comments: (row.comments ?? [])
      .sort(
        (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      )
      .map(mapComment),
  };
}

/** 관리자 대시보드용: 숨김 처리된 글도 포함해 전부 조회 */
export async function adminListPosts(): Promise<CommunityPost[]> {
  const supabase = createServiceClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*, comments(*)")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data as PostRow[]).map(mapPost);
}

export async function adminSetPostStatus(
  postId: string,
  status: ModerationStatus
): Promise<void> {
  const supabase = createServiceClient();
  const { error } = await supabase
    .from("posts")
    .update({ status })
    .eq("id", postId);
  if (error) throw error;
}

export async function adminDeletePost(postId: string): Promise<void> {
  const supabase = createServiceClient();
  const { error } = await supabase.from("posts").delete().eq("id", postId);
  if (error) throw error;
}

export async function adminSetCommentStatus(
  commentId: string,
  status: ModerationStatus
): Promise<void> {
  const supabase = createServiceClient();
  const { error } = await supabase
    .from("comments")
    .update({ status })
    .eq("id", commentId);
  if (error) throw error;
}

export async function adminDeleteComment(commentId: string): Promise<void> {
  const supabase = createServiceClient();
  const { error } = await supabase
    .from("comments")
    .delete()
    .eq("id", commentId);
  if (error) throw error;
}
