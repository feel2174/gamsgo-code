"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  adjustCommentHearts,
  adjustPostHearts,
  createComment,
  createPost,
  listPostsPage,
} from "@/lib/community/store";
import {
  COMMUNITY_POST_TYPES,
  COMMUNITY_SERVICE_CATEGORIES,
  type CommunityPostType,
  type CommunityServiceCategory,
} from "@/lib/community/types";

export async function createPostAction(formData: FormData) {
  const serviceCategory = formData.get("serviceCategory");
  const postType = formData.get("postType");
  const rating = formData.get("rating");
  const title = formData.get("title");
  const content = formData.get("content");

  if (typeof title !== "string" || title.trim().length < 2) {
    throw new Error("제목을 2자 이상 입력해주세요.");
  }
  if (typeof content !== "string" || content.trim().length < 5) {
    throw new Error("내용을 5자 이상 입력해주세요.");
  }

  const safeServiceCategory: CommunityServiceCategory =
    COMMUNITY_SERVICE_CATEGORIES.includes(
      serviceCategory as CommunityServiceCategory
    )
      ? (serviceCategory as CommunityServiceCategory)
      : "기타 AI/OTT";

  const safePostType: CommunityPostType = COMMUNITY_POST_TYPES.includes(
    postType as CommunityPostType
  )
    ? (postType as CommunityPostType)
    : "정보";

  const parsedRating = Number(rating);
  const isHalfStep = Number.isInteger(parsedRating * 2);
  const safeRating =
    isHalfStep && parsedRating >= 0.5 && parsedRating <= 5
      ? parsedRating
      : 5;

  const post = await createPost({
    serviceCategory: safeServiceCategory,
    postType: safePostType,
    rating: safeRating,
    title: title.trim(),
    content: content.trim(),
  });

  revalidatePath("/community");
  revalidatePath("/");
  redirect(`/community/${post.id}`);
}

export async function createCommentAction(postId: string, formData: FormData) {
  const content = formData.get("content");
  if (typeof content !== "string" || content.trim().length < 1) {
    return;
  }
  await createComment(postId, content.trim());
  revalidatePath(`/community/${postId}`);
}

export async function heartPostAction(postId: string, delta: 1 | -1) {
  const next = await adjustPostHearts(postId, delta);
  revalidatePath("/community");
  revalidatePath("/");
  revalidatePath(`/community/${postId}`);
  return next;
}

export async function loadMorePostsAction(offset: number) {
  return listPostsPage(offset, 6);
}

export async function heartCommentAction(
  postId: string,
  commentId: string,
  delta: 1 | -1
) {
  const next = await adjustCommentHearts(postId, commentId, delta);
  revalidatePath(`/community/${postId}`);
  return next;
}
