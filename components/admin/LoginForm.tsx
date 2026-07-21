"use client";

import { useActionState } from "react";
import { loginAction, type LoginState } from "@/app/admin/actions";

const initialState: LoginState = {};

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(
    loginAction,
    initialState
  );

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <input
        type="password"
        name="password"
        required
        autoFocus
        placeholder="관리자 비밀번호"
        className="rounded-lg border border-neutral-200 px-3 py-2.5 text-sm outline-none transition-colors focus:border-neutral-900"
      />
      {state.error && (
        <p className="text-sm font-medium text-red-500">{state.error}</p>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="rounded-xl bg-neutral-900 px-4 py-3 text-sm font-bold text-white transition-transform duration-150 active:scale-[0.98] disabled:opacity-60"
      >
        {isPending ? "확인 중..." : "로그인"}
      </button>
    </form>
  );
}
