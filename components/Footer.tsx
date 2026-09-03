"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DisclosureBanner } from "./DisclosureBanner";
import { SITE_NAME, TOP_KEYWORDS } from "@/lib/constants";

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="mt-10 flex flex-col gap-4 border-t border-neutral-200 px-4 py-6">
      <DisclosureBanner />

      {/*
        모든 주요 페이지로 향하는 사이트 전역 링크.
        어느 페이지에서 크롤러가 들어오든 한 번의 클릭으로 전체 문서에
        도달할 수 있게 해 크롤링 깊이를 줄이고 내부 링크를 고르게 분배한다.
      */}
      <nav aria-label="전체 문서" className="flex flex-col gap-2">
        <p className="text-xs font-bold text-neutral-500">전체 문서</p>
        <ul className="flex flex-wrap gap-x-3 gap-y-1.5">
          {TOP_KEYWORDS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-xs text-neutral-500 transition-colors hover:text-rose-500"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/disclaimer"
              className="text-xs text-neutral-500 transition-colors hover:text-rose-500"
            >
              면책조항
            </Link>
          </li>
        </ul>
      </nav>

      <p className="text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} {SITE_NAME}. 모든 콘텐츠는 단순 리뷰 및
        정보 제공 목적이며, 가격 정보는 변동될 수 있으니 정확한 가격은
        겜스고에서 실시간으로 확인하세요.
      </p>
    </footer>
  );
}
