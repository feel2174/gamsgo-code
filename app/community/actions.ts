"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  createComment,
  createPost,
  heartComment,
  heartPost,
} from "@/lib/community/store";
import { COMMUNITY_CATEGORIES, type CommunityCategory } from "@/lib/community/types";

export async function createPostAction(formData: FormData) {
  const category = formData.get("category");
  const title = formData.get("title");
  const content = formData.get("content");

  if (typeof title !== "string" || title.trim().length < 2) {
    throw new Error("제목을 2자 이상 입력해주세요.");
  }
  if (typeof content !== "string" || content.trim().length < 5) {
    throw new Error("내용을 5자 이상 입력해주세요.");
  }
  const safeCategory: CommunityCategory = COMMUNITY_CATEGORIES.includes(
    category as CommunityCategory
  )
    ? (category as CommunityCategory)
    : "자유";

  const post = createPost({
    category: safeCategory,
    title: title.trim(),
    content: content.trim(),
  });

  revalidatePath("/community");
  redirect(`/community/${post.id}`);
}

export async function createCommentAction(postId: string, formData: FormData) {
  const content = formData.get("content");
  if (typeof content !== "string" || content.trim().length < 1) {
    return;
  }
  createComment(postId, content.trim());
  revalidatePath(`/community/${postId}`);
}

export async function heartPostAction(postId: string) {
  const next = heartPost(postId);
  revalidatePath("/community");
  revalidatePath(`/community/${postId}`);
  return next;
}

export async function heartCommentAction(postId: string, commentId: string) {
  const next = heartComment(postId, commentId);
  revalidatePath(`/community/${postId}`);
  return next;
}
