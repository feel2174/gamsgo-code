import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TaboolaPlacements } from "@/components/TaboolaPlacements";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/constants";

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
      <head>
        <Script
          id="taboola-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function () {
    var PUBLISHER_ID = 'zucca-network';
    var PAGE_TYPE    = 'article';

    var LOADER_URL         = '//cdn.taboola.com/libtrc/' + PUBLISHER_ID + '/loader.js';
    var LOADER_PRIVACY_URL = '//static.tblcontent.com/libtrc/' + PUBLISHER_ID + '/loader.privacy.js';
    var PIXEL_URL          = 'https://static.qovani.com/libtrc/tr5?type=pixel&publisher=' + PUBLISHER_ID;
    var SCRIPT_ID          = 'tb_loader_script';

    window._taboola = window._taboola || [];

    var pageTypePush = {};
    pageTypePush[PAGE_TYPE] = 'auto';
    _taboola.push(pageTypePush);

    new Image().src = PIXEL_URL;

    var firstScript = document.getElementsByTagName('script')[0];

    function injectLoader(id, src, fallbackSrc) {
        if (document.getElementById(id)) return;
        var s = document.createElement('script');
        s.async = true;
        s.src   = src;
        s.id    = id;
        if (fallbackSrc) {
            s.onerror = function () {
                if (s.parentNode) s.parentNode.removeChild(s);
                injectLoader(SCRIPT_ID + '_fb', fallbackSrc, null);
            };
        }
        firstScript.parentNode.insertBefore(s, firstScript);
    }

    injectLoader(SCRIPT_ID, LOADER_URL, LOADER_PRIVACY_URL);

    if (window.performance && typeof window.performance.mark === 'function') {
        window.performance.mark('tbl_ic');
    }
})();
            `,
          }}
        />
      </head>
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
        <TaboolaPlacements />
        <Analytics />
      </body>
    </html>
  );
}
