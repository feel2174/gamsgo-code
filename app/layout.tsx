import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/constants";

// PretendardVariable.woff2 원본은 전체 한글 음절을 포함해 2MB에 달한다.
// Lighthouse의 Lantern 시뮬레이터는 font-display 값과 무관하게 폰트 리소스의
// (스로틀링 적용) 다운로드 시간을 그대로 텍스트 LCP 렌더 지연으로 계산하므로,
// display만 바꿔서는 랩 점수가 개선되지 않는다 — 실제로 파일 크기를 줄여야 한다.
// scripts/subset-pretendard.mjs(prebuild에서 자동 실행)가 app/components/lib
// 소스에 실제로 쓰인 문자만 추려 143KiB 서브셋을 생성한다. 이 서브셋을 프리로드
// 1순위로 쓰고, 서브셋에 없는 글자(커뮤니티 사용자 글의 희귀 음절 등)를 위해
// 원본 풀세트 폰트를 비프리로드 폴백으로 뒤에 둔다 — 브라우저는 글리프 단위로
// 폴백하므로 커버되지 않는 글자만 필요할 때 큰 파일을 지연 로드한다.
const pretendardSubset = localFont({
  src: "../assets/fonts/PretendardVariable-subset.woff2",
  variable: "--font-pretendard-subset",
  display: "optional",
  weight: "45 920",
  preload: true,
});

const pretendardFull = localFont({
  src: "../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-pretendard-full",
  display: "swap",
  weight: "45 920",
  preload: false,
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
      className={`${pretendardSubset.variable} ${pretendardFull.variable} h-full antialiased`}
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
