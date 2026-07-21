"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DisclosureBanner } from "./DisclosureBanner";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="mt-10 flex flex-col gap-3 border-t border-neutral-200 px-4 py-6">
      <DisclosureBanner />
      <p className="text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} {SITE_NAME}. 모든 콘텐츠는 단순 리뷰 및
        정보 제공 목적이며, 가격 정보는 변동될 수 있으니 정확한 가격은
        겜스고에서 실시간으로 확인하세요.
      </p>
      <Link
        href="/disclaimer"
        className="text-center text-xs text-neutral-400 underline decoration-neutral-300 underline-offset-2 transition-colors hover:text-neutral-600"
      >
        면책조항 자세히 보기
      </Link>
    </footer>
  );
}
