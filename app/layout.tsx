import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TaboolaPlacements } from "@/components/TaboolaPlacements";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  DEFAULT_CONTENT_UPDATED_AT,
  ORGANIZATION_ID,
  SITE_ALTERNATE_NAMES,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_LANG,
  SITE_LOCALE,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  WEBSITE_ID,
} from "@/lib/constants";

// PretendardVariable.woff2 원본은 전체 한글 음절을 포함해 2MB에 달한다.
// Lighthouse의 Lantern 시뮬레이터는 font-display 값(swap/optional)을 무시하고,
// 텍스트 렌더에 필요한 웹폰트의 (스로틀링 적용) 다운로드 시간을 그대로 FCP·LCP에
// 반영한다. 따라서 랩 점수를 움직이는 유일한 레버는 "실제 로드되는 폰트의 크기"이며,
// 원본 2MB 폰트가 어떤 경로로든(폴백 스택 포함) 로드되면 LCP가 12초까지 치솟는다.
// (로컬 Lighthouse 재현으로 확인: 2MB→LCP 12초, 311KB 서브셋→LCP 2.6초. 폰트를
//  2개 로드하면 대역폭 경쟁으로 오히려 악화되어, 반드시 "작은 것 하나만" 써야 한다.)
//
// scripts/subset-pretendard.mjs(prebuild 자동 실행)가 상용 한글 2,350자 + 사이트
// 소스 실사용 문자 + 기호를 담고 가중치 축을 400–800으로 좁힌 311KB 서브셋을
// 생성한다(실제 한국어의 99.9% 커버). 여기에도 없는 극희귀 음절만 기기 내장 한글
// 폰트로 폴백된다(다운로드 0). 원본 풀세트 폰트는 폰트 스택에 두지 않는다.
const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable-subset.woff2",
  variable: "--font-pretendard",
  display: "optional",
  weight: "400 800",
  preload: true,
});

const DEFAULT_TITLE = `${SITE_NAME} — 유튜브 프리미엄 가격할인, 넷플릭스 가격할인, 챗GPT 플러스 할인 총정리`;
const DEFAULT_DESCRIPTION = SITE_DESCRIPTION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "shopping",
  // 전화번호/주소 자동 링크화가 레이아웃을 깨뜨리는 것을 방지
  formatDetection: { telephone: false, address: false, email: false },
  // 페이지에서 별도 지정하지 않았을 때의 기본값.
  // AI 개요·생성형 검색이 본문을 길게 인용할 수 있도록 스니펫 제한을 해제한다.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: { [SITE_LANG]: SITE_URL, "x-default": SITE_URL },
  },
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
    locale: SITE_LOCALE,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
};

/**
 * 사이트 전역 @graph.
 * Organization / WebSite 를 @id 로 한 번만 정의해두고,
 * 개별 페이지의 Article·Product·BreadcrumbList 는 이 @id 를 참조한다.
 * (노드를 페이지마다 중복 정의하면 검색엔진이 엔티티를 하나로 묶지 못한다)
 */
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: SITE_NAME,
      alternateName: SITE_ALTERNATE_NAMES,
      url: SITE_URL,
      description: `${SITE_TAGLINE} — ${SITE_DESCRIPTION}`,
      slogan: SITE_TAGLINE,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: `${SITE_URL}/icon.svg`,
        contentUrl: `${SITE_URL}/icon.svg`,
        caption: SITE_NAME,
      },
      image: { "@id": `${SITE_URL}/#logo` },
      knowsAbout: [
        "구독 서비스 할인",
        "OTT 구독료 비교",
        "AI 구독 서비스 요금",
        "계정 공유 서비스",
      ],
      areaServed: { "@type": "Country", name: "대한민국" },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: SITE_ALTERNATE_NAMES,
      description: SITE_DESCRIPTION,
      inLanguage: SITE_LANG,
      publisher: { "@id": ORGANIZATION_ID },
      copyrightHolder: { "@id": ORGANIZATION_ID },
      dateModified: DEFAULT_CONTENT_UPDATED_AT,
    },
  ],
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
      <head>
        <script src="/taboola-init.js" async />
      </head>
      <body className="flex min-h-full flex-col bg-white text-neutral-900">
        <JsonLd data={siteJsonLd} />
        <Header />
        <main className="app-container flex-1 px-4 py-6">{children}</main>
        <div className="app-container">
          <Footer />
        </div>
        <TaboolaPlacements />
        <Analytics />
      </body>
    </html>
  );
}
