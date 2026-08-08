"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SITE_NAME, TOP_KEYWORDS } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/price-comparison", label: "손해계산기" },
  { href: "/community", label: "찐후기" },
];

export function Header() {
  const pathname = usePathname();
  const keywordScrollRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = keywordScrollRef.current;
    if (!el) return;

    let rafId = 0;
    const updateScrollState = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setCanScrollLeft(el.scrollLeft > 4);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
      });
    };

    updateScrollState();
    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);
    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  if (pathname?.startsWith("/admin")) return null;

  const scrollKeywordsBy = (delta: number) => {
    keywordScrollRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-10 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="app-container flex items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-2xl font-extrabold tracking-tight text-neutral-900 transition-opacity hover:opacity-70 md:text-3xl"
        >
          <span aria-hidden>🐷</span>
          {SITE_NAME}
        </Link>
        <nav className="flex items-center gap-4" aria-label="주요 메뉴">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-neutral-500 transition-colors hover:text-neutral-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <nav
        aria-label="인기 검색 키워드"
        className="border-t border-neutral-100"
      >
        <div className="app-container relative">
          {canScrollLeft && (
            <button
              type="button"
              aria-label="키워드 왼쪽으로 스크롤"
              onClick={() => scrollKeywordsBy(-160)}
              className="absolute left-0 top-0 z-10 hidden h-full items-center bg-gradient-to-r from-white via-white/90 to-transparent pl-2 pr-4 text-neutral-500 transition-colors hover:text-rose-600 md:flex"
            >
              ‹
            </button>
          )}
          <ul
            ref={keywordScrollRef}
            onWheel={(e) => {
              if (e.deltaY === 0) return;
              e.currentTarget.scrollLeft += e.deltaY;
              e.preventDefault();
            }}
            className="scrollbar-hide flex snap-x gap-2 overflow-x-auto px-4 py-2.5"
          >
            {TOP_KEYWORDS.map((keyword) => {
              const isActive = pathname === keyword.href;
              return (
                <li key={keyword.href} className="snap-start">
                  <Link
                    href={keyword.href}
                    className={`block shrink-0 whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                      isActive
                        ? "border-rose-300 bg-rose-50 text-rose-600"
                        : "border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600"
                    }`}
                  >
                    {keyword.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          {canScrollRight && (
            <button
              type="button"
              aria-label="키워드 오른쪽으로 스크롤"
              onClick={() => scrollKeywordsBy(160)}
              className="absolute right-0 top-0 z-10 hidden h-full items-center bg-gradient-to-l from-white via-white/90 to-transparent pl-4 pr-2 text-neutral-500 transition-colors hover:text-rose-600 md:flex"
            >
              ›
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
