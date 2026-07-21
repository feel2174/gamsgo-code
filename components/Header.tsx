import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-neutral-200 bg-white/90 backdrop-blur dark:border-neutral-800 dark:bg-black/90">
      <div className="mx-auto flex w-full max-w-[420px] items-center justify-between px-4 py-3">
        <Link href="/" className="text-base font-bold">
          {SITE_NAME}
        </Link>
      </div>
    </header>
  );
}
