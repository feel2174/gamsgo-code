import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  getContentUpdatedAt,
} from "@/lib/constants";
import { listPostsPage } from "@/lib/community/store";

export const revalidate = 60; // 1분마다 캐시 갱신

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

interface StaticFeedItem {
  path: string;
  title: string;
  description: string;
  category: string;
}

const STATIC_ITEMS: StaticFeedItem[] = [
  {
    path: "",
    title: `${SITE_NAME} — 유튜브 프리미엄·넷플릭스·챗GPT 플러스 할인 모음`,
    description: SITE_DESCRIPTION,
    category: "구독할인",
  },
  {
    path: "/youtube-premium-discount",
    title: "유튜브 프리미엄 가격할인, 월 6,900원대로 최대 70% 저렴하게 구독하는 법",
    description:
      "유튜브 프리미엄 정가 월 14,900원을 겜스고로 최대 70% 할인받아 월 6,900원대에 이용하는 방법과 이용 방식, 주의사항 정리.",
    category: "OTT",
  },
  {
    path: "/youtube-premium-bypass",
    title: "유튜브 프리미엄 우회 막힘 대안 및 가장 안전한 할인 구독법",
    description:
      "터키·인도·아르헨티나 유튜브 프리미엄 VPN 우회 결제 막힘 및 계정 정지 위험 없는 안전한 구독 공유 할인 가이드.",
    category: "OTT",
  },
  {
    path: "/netflix-discount",
    title: "넷플릭스 가격할인, 월 5,000원대로 4K 프리미엄 저렴하게 구독하는 법",
    description:
      "넷플릭스 프리미엄(4K UHD) 요금제를 겜스고를 통해 월 5,000원대에 안전하게 구독하는 방법과 프로필 공유 팁.",
    category: "OTT",
  },
  {
    path: "/chatgpt-plus-discount",
    title: "챗GPT 플러스 가격할인, 월 1만원대로 반값 이상 절약하는 법",
    description:
      "OpenAI ChatGPT Plus(월 $20)를 겜스고를 통해 반값 이상 할인받아 이용하는 방법 및 장단점 비교.",
    category: "AI",
  },
  {
    path: "/ai-subscription-discount",
    title: "AI 구독 서비스 요금 할인 비교 (챗GPT·클로드·제미나이·퍼플렉시티)",
    description:
      "주요 AI 도구(ChatGPT Plus, Claude Pro, Gemini Advanced, Perplexity Pro) 가격 비교 및 할인 구독 꿀팁.",
    category: "AI",
  },
  {
    path: "/price-comparison",
    title: "구독 서비스 가격비교 총정리 — OTT, AI, 음악, 소프트웨어",
    description:
      "유튜브, 넷플릭스, 챗GPT, 디즈니+, 스포티파이 등 40여 개 구독 서비스의 공식 가격과 겜스고 할인가 비교.",
    category: "가격비교",
  },
  {
    path: "/gamsgo-review",
    title: "겜스고 솔직 이용 후기 및 1년 사용 장단점 총정리",
    description:
      "실제 겜스고 이용자들의 후기와 장단점, 환불 보장 정책, 실사용자가 밝히는 솔직한 평가.",
    category: "후기",
  },
  {
    path: "/gamsgo-scam-check",
    title: "겜스고 사기 논란 팩트체크 — 안전한 이유 4가지",
    description:
      "겜스고 불법 논란, 사기 위험, 정지 가능성 등에 대한 객관적인 팩트체크와 24시간 환불 정책 분석.",
    category: "팩트체크",
  },
  {
    path: "/gamsgo-alternatives",
    title: "겜스고 vs 피클플러스 vs 고잉버스 구독 공유 플랫폼 비교",
    description:
      "대표적인 계정 공유 플랫폼(겜스고, 피클플러스, 고잉버스)의 가격, 지원 서비스, 장단점 완벽 비교.",
    category: "비교",
  },
  {
    path: "/community",
    title: "겜스고코드 커뮤니티 — 실사용자 익명 후기 & 질문답변",
    description:
      "광고 없는 실제 이용자들의 솔직한 이용 후기와 팁을 확인하고 의견을 나눠보세요.",
    category: "커뮤니티",
  },
];

export async function GET() {
  const now = new Date().toUTCString();

  // 커뮤니티 최신 게시글 30개 조회 (장애 발생 시 빈 배열로 폴백)
  let communityItems: {
    title: string;
    link: string;
    description: string;
    pubDate: string;
    category: string;
  }[] = [];

  try {
    const { posts } = await listPostsPage(0, 30);
    communityItems = posts.map((post) => ({
      title: post.title,
      link: `${SITE_URL}/community/${post.id}`,
      description:
        post.content.length > 200
          ? `${post.content.slice(0, 200)}...`
          : post.content,
      pubDate: new Date(post.createdAt).toUTCString(),
      category: post.serviceCategory || "커뮤니티",
    }));
  } catch {
    // Supabase 오류 발생 시에도 정적 가이드 피드는 정상 제공
    communityItems = [];
  }

  const staticXmlItems = STATIC_ITEMS.map((item) => {
    const pubDate = new Date(getContentUpdatedAt(item.path)).toUTCString();
    const link = `${SITE_URL}${item.path}`;
    return `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${link}</link>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${pubDate}</pubDate>
      <guid isPermaLink="true">${link}</guid>
      <category>${escapeXml(item.category)}</category>
      <author>help@gamsgocode.co.kr (${escapeXml(SITE_NAME)})</author>
    </item>`;
  }).join("\n");

  const communityXmlItems = communityItems
    .map((item) => {
      return `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.link}</link>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.pubDate}</pubDate>
      <guid isPermaLink="true">${item.link}</guid>
      <category>${escapeXml(item.category)}</category>
      <author>help@gamsgocode.co.kr (${escapeXml(SITE_NAME)})</author>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>ko</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${staticXmlItems}
${communityXmlItems}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=60, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
