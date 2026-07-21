import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/constants";

const pretendard = localFont({
  src: "../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — 유튜브 프리미엄 가격할인, 넷플릭스 가격할인 총정리`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "유튜브 프리미엄 가격할인, 넷플릭스 가격할인, 챗GPT 플러스 할인까지 — 정가 대비 최대 70% 저렴하게 구독하는 법과 실제 이용자 익명 후기를 한곳에 모았습니다.",
  verification: {
    other: {
      "naver-site-verification": "c9f34b179e94c1dfd5cbb648cf335ea0981f6bbd",
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_TAGLINE,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-neutral-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        <main className="mx-auto w-full max-w-[420px] flex-1 px-4 py-6">
          {children}
        </main>
        <div className="mx-auto w-full max-w-[420px]">
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
