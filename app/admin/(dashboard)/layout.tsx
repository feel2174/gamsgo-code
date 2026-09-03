import { logoutAction } from "../actions";
import { buildMetadata } from "@/lib/seo";

// robots.txt 로도 막고 있지만, 외부 링크로 유입될 경우를 대비해 메타로도 색인을 차단
export const metadata = buildMetadata({
  title: "관리자",
  description: "관리자 전용 페이지입니다.",
  path: "/admin",
  noIndex: true,
});

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1020px] flex-col gap-6 px-4 py-6">
      <header className="flex items-center justify-between border-b border-neutral-200 pb-4">
        <h1 className="text-xl font-extrabold">겜스고코드 관리자</h1>
        <form action={logoutAction}>
          <button
            type="submit"
            className="text-sm font-semibold text-neutral-500 transition-colors hover:text-neutral-900"
          >
            로그아웃
          </button>
        </form>
      </header>
      {children}
    </div>
  );
}
