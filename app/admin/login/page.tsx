import { LoginForm } from "@/components/admin/LoginForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "관리자 로그인",
  description: "관리자 로그인 페이지입니다.",
  path: "/admin/login",
  noIndex: true,
});

export default function AdminLoginPage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[420px] flex-col justify-center gap-6 px-4">
      <header className="flex flex-col gap-1 text-center">
        <h1 className="text-xl font-extrabold">관리자 로그인</h1>
        <p className="text-sm text-neutral-500">
          게시글·댓글 관리 페이지입니다.
        </p>
      </header>
      <LoginForm />
    </div>
  );
}
