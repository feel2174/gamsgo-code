"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_MAX_AGE_SECONDS,
  createSessionToken,
  verifyPassword,
} from "@/lib/admin/auth";
import {
  adminDeleteComment,
  adminDeletePost,
  adminSetCommentStatus,
  adminSetPostStatus,
} from "@/lib/admin/store";

export interface LoginState {
  error?: string;
}

export async function loginAction(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const password = formData.get("password");
  if (typeof password !== "string" || password.length === 0) {
    return { error: "비밀번호를 입력해주세요." };
  }
  if (!verifyPassword(password)) {
    return { error: "비밀번호가 올바르지 않습니다." };
  }

  const token = await createSessionToken();
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: ADMIN_SESSION_MAX_AGE_SECONDS,
  });

  redirect("/admin");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_SESSION_COOKIE);
  redirect("/admin/login");
}

export async function hidePostAction(postId: string) {
  await adminSetPostStatus(postId, "hidden");
  revalidatePath("/admin");
  revalidatePath("/community");
  revalidatePath("/");
}

export async function unhidePostAction(postId: string) {
  await adminSetPostStatus(postId, "visible");
  revalidatePath("/admin");
  revalidatePath("/community");
  revalidatePath("/");
}

export async function deletePostAction(postId: string) {
  await adminDeletePost(postId);
  revalidatePath("/admin");
  revalidatePath("/community");
  revalidatePath("/");
}

export async function hideCommentAction(commentId: string, postId: string) {
  await adminSetCommentStatus(commentId, "hidden");
  revalidatePath("/admin");
  revalidatePath(`/community/${postId}`);
}

export async function unhideCommentAction(commentId: string, postId: string) {
  await adminSetCommentStatus(commentId, "visible");
  revalidatePath("/admin");
  revalidatePath(`/community/${postId}`);
}

export async function deleteCommentAction(commentId: string, postId: string) {
  await adminDeleteComment(commentId);
  revalidatePath("/admin");
  revalidatePath(`/community/${postId}`);
}
