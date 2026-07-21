import Link from "next/link";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { ServicePriceCards } from "@/components/ServicePriceCards";
import { FaqAccordion } from "@/components/FaqAccordion";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { TrustBadges } from "@/components/TrustBadges";
import { buildMetadata } from "@/lib/seo";
import { OBJECTION_FAQS } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "구독료 가격 비교, 유튜브·넷플릭스·챗GPT 가격할인 총정리",
  description:
    "유튜브 프리미엄 가격할인, 넷플릭스 가격할인, 챗GPT Plus 등 겜스고에서 판매하는 전체 구독 서비스의 정가와 할인가를 한 번에 비교했습니다.",
  path: "/price-comparison",
});

const faqs = [
  ...OBJECTION_FAQS,
  {
    question: "이 가격 진짜 맞아요? 어떻게 이렇게 싸게 파는 거예요?",
    answer:
      "겜스고는 가족 요금제나 대량 구매 혜택을 여러 명이 나눠 쓰는 구조로 가격을 낮춥니다. 개인이 정가로 혼자 결제하는 것과 결과물은 동일하지만, 비용만 나눠 내는 방식이라 이 정도 할인이 가능한 거예요.",
  },
  {
    question: "구독료 가격 비교, 어떤 서비스가 가장 많이 할인되나요?",
    answer:
      "유튜브 프리미엄과 넷플릭스가 겜스고에서 최대 70% 할인으로 가장 큰 폭의 절약 효과를 보여줍니다. 챗GPT Plus 등 AI 구독도 50% 이상 저렴하게 이용할 수 있습니다.",
  },
  {
    question: "AI 툴이나 게임 구독도 할인되나요?",
    answer:
      "네, 겜스고는 젠스파크·제미나이·클로드 같은 AI 툴부터 PlayStation Plus·Xbox Game Pass 같은 게임 구독까지 100여 개 서비스를 취급합니다. 실시간 특가는 겜스고 페이지에서 바로 확인할 수 있습니다.",
  },
];

export default function PriceComparisonPage() {
  return (
    <article className="flex flex-col gap-8">
      <BreadcrumbJsonLd
        items={[
          { name: "홈", path: "/" },
          { name: "구독료 가격 비교", path: "/price-comparison" },
        ]}
      />
      <header className="flex flex-col gap-3">
        <DisclosureBanner />
        <h1 className="text-2xl font-extrabold leading-snug">
          구독료 가격 비교, 내가 새는 돈부터 확인하세요
        </h1>
        <p className="text-md text-neutral-500">
          정가로 다 내고 있다면 지금도 매달 그대로 새는 돈이에요. 서비스별로
          얼마나 차이나는지 카드로 한눈에 비교해보세요.
        </p>
        <TrustBadges />
      </header>

      <ServicePriceCards />

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">서비스별 자세히 보기</h2>
        <ul className="flex flex-col gap-1 text-md">
          <li>
            <Link
              href="/youtube-premium-discount"
              className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400"
            >
              유튜브 프리미엄 가격할인 총정리 →
            </Link>
          </li>
          <li>
            <Link
              href="/netflix-discount"
              className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400"
            >
              넷플릭스 가격할인 총정리 →
            </Link>
          </li>
          <li>
            <Link
              href="/chatgpt-plus-discount"
              className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400"
            >
              챗GPT 플러스 가격할인 →
            </Link>
          </li>
          <li>
            <Link
              href="/gamsgo-review"
              className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400"
            >
              겜스고 후기 및 안전성 →
            </Link>
          </li>
          <li>
            <Link
              href="/community"
              className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400"
            >
              찐후기 게시판에서 실제 이용 후기 보기 →
            </Link>
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">자주 묻는 질문</h2>
        <FaqAccordion items={faqs} />
      </section>
    </article>
  );
}
