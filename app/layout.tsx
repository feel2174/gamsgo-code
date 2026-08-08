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
  // PretendardVariable.woff2는 전체 한글 음절을 포함해 2MB에 달함.
  // "swap"은 폴백으로 즉시 페인트되지만, 텍스트 요소의 LCP 기록 시점은
  // 크롬이 웹폰트 로딩 완료까지 미루기 때문에 저속 회선에서 LCP가 10초+로
  // 치솟는 원인이 된다. "optional"은 짧은 대기(~100ms) 후 폰트가 준비되지
  // 않으면 그 로드에서는 폴백을 그대로 최종 렌더로 확정해 LCP를 지연시키지
  // 않는다. 폰트는 백그라운드에서 계속 받아 캐시되므로 다음 페이지 이동부터는
  // 정상적으로 Pretendard가 표시된다.
  display: "optional",
  weight: "45 920",
});

const DEFAULT_TITLE = `${SITE_NAME} — 유튜브 프리미엄 가격할인, 넷플릭스 가격할인, 챗GPT 플러스 할인 총정리`;
const DEFAULT_DESCRIPTION =
  "유튜브 프리미엄·넷플릭스·챗GPT 플러스를 정가 대비 최대 70% 할인받는 법과 실제 이용자 익명 후기를 한곳에 모았습니다.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  verification: {
    google: "w1N7lAB3qFnHio7RQDdSX05UNv-RskM89O1HvldhnJQ",
    other: {
      "naver-site-verification": "435632b08e0edbdaeaa006bc4cf33f31f3e73d3f",
    },
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
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
        <main className="app-container flex-1 px-4 py-6">{children}</main>
        <div className="app-container">
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
