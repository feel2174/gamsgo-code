import type { Metadata } from "next";
import Link from "next/link";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { TrustBadges } from "@/components/TrustBadges";
import { ServicePriceCards } from "@/components/ServicePriceCards";
import { DiscountHeroBox } from "@/components/home/DiscountHeroBox";
import { ServiceLogoStrip } from "@/components/home/ServiceLogoStrip";
import { FeedPostCard } from "@/components/community/FeedPostCard";
import { AnswerSummary } from "@/components/AnswerSummary";
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";
import { ServiceItemListJsonLd } from "@/components/seo/ServiceItemListJsonLd";
import { SERVICE_PRICES, SITE_TAGLINE, SITE_URL } from "@/lib/constants";
import { listPostsPage } from "@/lib/community/store";

// 홈은 layout의 기본 title·description·OG를 그대로 상속받되(콘텐츠 페이지와 달리
// buildMetadata를 쓰지 않음), 자기참조 canonical만 명시해 도메인 중복 색인을 방어한다.
export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

/** 상단 점프링크 내비 — 온페이지 섹션으로 스크롤(헤더 키워드 내비와 차별화) */
const JUMP_LINKS = [
  { href: "#price", label: "가격비교" },
  { href: "#reviews", label: "찐후기" },
  { href: "#guides", label: "할인가이드" },
];

export const revalidate = 30;

const guides = [
  {
    href: "/youtube-premium-discount",
    title: "유튜브 프리미엄 가격할인",
    desc: "정가로 내고 계셨다면 매달 8,000원 날린 거예요",
  },
  {
    href: "/netflix-discount",
    title: "넷플릭스 가격할인",
    desc: "4K 프리미엄 그대로, 정가와 만원 넘게 차이나요",
  },
  {
    href: "/chatgpt-plus-discount",
    title: "챗GPT 플러스 가격할인",
    desc: "AI 구독료도 반값 이하, 안 바꿀 이유가 없어요",
  },
  {
    href: "/ai-subscription-discount",
    title: "AI 구독료 비교 (챗GPT·제미나이·클로드)",
    desc: "왜 이렇게 싼지, 결제 전에 뭘 알아야 하는지 한 번에 정리",
  },
  {
    href: "/price-comparison",
    title: "구독료 전체 가격 비교",
    desc: "내가 쓰는 서비스, 지금 얼마나 손해보고 있는지 확인",
  },
  {
    href: "/gamsgo-review",
    title: "겜스고 후기 및 안전성",
    desc: "사기 아니냐고요? 3,674명 후기로 직접 확인하세요",
  },
  {
    href: "/gamsgo-scam-check",
    title: "겜스고 사기 아니에요? 팩트체크",
    desc: "디시·클리앙 논란까지 숨기지 않고 정리했어요",
  },
  {
    href: "/gamsgo-alternatives",
    title: "겜스고 대안 비교",
    desc: "피클플러스·고잉버스·고스플릿과 뭐가 다른지 확인",
  },
];

export default async function Home() {
  const { posts: reviewPosts } = await listPostsPage(0, 10);

  return (
    <div className="flex flex-col gap-8">
      <ArticleJsonLd
        headline="유튜브·넷플릭스·챗GPT 구독료, 정가 대비 최대 70% 할인"
        description="유튜브 프리미엄·넷플릭스·챗GPT Plus를 비롯한 구독 서비스의 정가와 할인가 비교, 그리고 실제 이용자 후기를 모은 사이트."
        path=""
        pageType="CollectionPage"
        about={["구독료 절약", "OTT 구독 할인", "AI 구독 할인"]}
        mentions={["YouTube Premium", "Netflix", "ChatGPT Plus", "겜스고", "GamsGo"]}
      />
      <ServiceItemListJsonLd
        path=""
        name="주요 구독 서비스 정가·할인가"
        services={SERVICE_PRICES.filter((s) => s.href)}
      />
      <section className="animate-fade-up flex flex-col gap-4 text-center">
        <p className="text-sm font-bold text-rose-600">{SITE_TAGLINE}</p>
        <h1 className="text-2xl font-extrabold leading-snug md:text-3xl">
          유튜브·넷플릭스·챗GPT 구독료,
          <br />
          정가 대비 최대 70% 할인
        </h1>

        <DiscountHeroBox />

        <TrustBadges />

        <nav
          aria-label="바로가기"
          className="flex flex-wrap justify-center gap-2"
        >
          {JUMP_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1.5 text-xs font-semibold text-neutral-600 transition-colors hover:border-rose-300 hover:bg-rose-50 hover:text-rose-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ServiceLogoStrip />

        <div className="text-left">
          <AnswerSummary
            path=""
            answer="유튜브 프리미엄·넷플릭스·챗GPT Plus를 정가로 각각 결제하면 연간 40만원가량이 나갑니다. 구독 공유 플랫폼 겜스고를 이용하면 같은 서비스를 최대 70% 저렴하게 쓸 수 있고, 별도 앱이나 우회 프로그램 없이 공식 앱·사이트에 그대로 로그인하는 방식이라 기능과 화질은 정가 결제와 동일합니다."
            facts={[
              "유튜브 프리미엄: 월 14,900원 → 월 환산 약 6,900원",
              "넷플릭스 프리미엄: 월 17,000원 → 월 5,000원대",
              "챗GPT Plus: 월 $20 → 정가 대비 50% 이상 할인",
              "150개국 1,000만 명 이용, 평점 4.8/5.0 (3,674건)",
              "결제 후 즉시 발송 · 24시간 환불 보장",
            ]}
          />
        </div>
      </section>

      <section
        id="price"
        className="animate-fade-up flex scroll-mt-24 flex-col gap-3"
        style={{ animationDelay: "80ms" }}
      >
        <h2 className="text-lg font-bold">지금 얼마나 새고 있는지 확인해보세요</h2>
        <ServicePriceCards
          serviceIds={["youtube-premium", "netflix", "chatgpt-plus", "spotify"]}
        />
        <Link
          href="/price-comparison"
          className="block rounded-xl border border-neutral-200 bg-white px-4 py-3 text-center text-sm font-bold text-neutral-700 transition-colors hover:border-rose-300 hover:text-rose-600"
        >
          전체 서비스 가격 비교 더보기 →
        </Link>
      </section>

      <section
        id="reviews"
        className="animate-fade-up flex scroll-mt-24 flex-col gap-3"
        style={{ animationDelay: "140ms" }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">사기인지 아닌지, 찐후기부터 보세요</h2>
        </div>
        <p className="text-md text-neutral-500">
          가입 없이도 실제 이용 후기를 바로 확인할 수 있어요. 스크롤만
          내리면 됩니다.
        </p>
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {reviewPosts.map((post) => (
            <FeedPostCard key={post.id} post={post} />
          ))}
        </ul>
        <Link
          href="/community"
          className="block rounded-xl border border-neutral-200 bg-white px-4 py-3 text-center text-sm font-bold text-neutral-700 transition-colors hover:border-rose-300 hover:text-rose-600"
        >
          찐후기 더보기 →
        </Link>
        <Link
          href="/community/new"
          className="rounded-xl border border-dashed border-neutral-300 px-4 py-3 text-center text-sm font-semibold text-neutral-500 transition-colors hover:border-rose-300 hover:text-rose-600"
        >
          3초면 끝, 나도 후기 남기기 ✍️
        </Link>
      </section>

      <section
        id="guides"
        className="animate-fade-up flex scroll-mt-24 flex-col gap-3"
        style={{ animationDelay: "200ms" }}
      >
        <h2 className="text-lg font-bold">다들 이렇게 아끼고 있었더라고요</h2>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="rounded-xl border border-neutral-200 bg-white px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-rose-300 hover:shadow-sm active:translate-y-0"
            >
              <p className="font-semibold">{g.title}</p>
              <p className="text-md text-neutral-500">{g.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <AffiliateCTA label="더 늦기 전에 구독료 아끼기" />
    </div>
  );
}
