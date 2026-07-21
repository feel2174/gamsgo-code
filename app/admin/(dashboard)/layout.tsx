import { logoutAction } from "../actions";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1020px] flex-col gap-6 px-4 py-6">
      <header className="flex items-center justify-between border-b border-neutral-200 pb-4">
        <h1 className="text-xl font-extrabold">짠구독 관리자</h1>
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
