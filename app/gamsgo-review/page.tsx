import Link from "next/link";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { FaqAccordion } from "@/components/FaqAccordion";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ProductJsonLd } from "@/components/seo/ProductJsonLd";
import { TrustBadges } from "@/components/TrustBadges";
import { buildMetadata } from "@/lib/seo";
import { PLATFORM_TRUST_FACTS } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "겜스고 후기, 안전성부터 장단점까지 솔직 정리",
  description:
    "겜스고 이용 전 꼭 알아야 할 안전성, 장단점, 실제 이용자 평점을 솔직하게 정리했습니다.",
  path: "/gamsgo-review",
});

const faqs = [
  {
    question: "겜스고 안전한가요?",
    answer:
      "겜스고는 전 세계 150개국 1,000만 명 이상이 이용 중이며 4.8/5.0(3,674건) 평점을 받고 있어요. 구독 계정을 나눠 쓰는 방식이라 각 서비스 공식 약관과는 조금 다른 '회색지대'에 속하긴 하지만, 그래도 수백만 명이 별 탈 없이 쓰고 있고 정책이 바뀌더라도 환불·재발급으로 대응해주는 만큼 부담 없이 시작해볼 만해요.",
  },
  {
    question: "겜스고는 합법인가요?",
    answer:
      "서비스 자체가 불법은 아니에요. 다만 일부 OTT·AI 서비스의 약관과는 맞지 않는 부분이 있어 '회색지대'로 보는 시각이 있는 정도예요. 이 정도만 알고 시작하면 크게 걱정할 일은 아니에요.",
  },
  {
    question: "겜스고의 단점은 무엇인가요?",
    answer:
      "공유 계정 특성상 서비스 정책 변경 시 이용이 중단될 수 있고, 공식 채널이 아니므로 문제 발생 시 겜스고 고객지원에 의존해야 합니다. 대신 24시간 한국어 고객지원과 환불 보장으로 리스크를 보완하고 있습니다.",
  },
  {
    question: "결제하면 얼마나 빨리 이용할 수 있나요?",
    answer:
      "초고속 즉시 발송 시스템을 통해 결제 후 대부분 몇 분 내로 계정 정보 또는 초대 링크를 받아 바로 이용할 수 있습니다.",
  },
];

export default function GamsgoReviewPage() {
  return (
    <article className="flex flex-col gap-8">
      <BreadcrumbJsonLd
        items={[
          { name: "홈", path: "/" },
          { name: "겜스고 후기", path: "/gamsgo-review" },
        ]}
      />
      <ProductJsonLd
        name="겜스고 (GamsGo)"
        description="넷플릭스, 유튜브 프리미엄 등 OTT·AI 구독 서비스를 최대 85% 할인가로 제공하는 구독 공유 중개 플랫폼"
        path="/gamsgo-review"
        aggregateRating={{ ratingValue: 4.8, reviewCount: 3674 }}
      />
      <header className="flex flex-col gap-3">
        <DisclosureBanner />
        <h1 className="text-2xl font-extrabold leading-snug">
          겜스고 후기, 안전성부터 장단점까지 솔직 정리
        </h1>
        <p className="text-md text-neutral-500">
          공식이 아니라고 다 위험한 건 아니에요. 가입 전 꼭 확인해야 할
          겜스고의 신뢰도, 장점, 단점을 있는 그대로 정리했습니다.
        </p>
        <TrustBadges />
      </header>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">겜스고란?</h2>
        <p className="text-md text-neutral-700">
          겜스고(GamsGo)는 넷플릭스, 유튜브 프리미엄 등 OTT 스트리밍부터
          ChatGPT, Claude 같은 AI 서비스, 게임 구독까지 100여 개 프리미엄
          구독 서비스를 최대 85% 할인가로 제공하는 구독 공유 중개 플랫폼입니다.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">장점</h2>
        <ul className="flex flex-col gap-1 text-md text-neutral-700">
          <li>· 전 세계 150개국 1,000만 명 이상 이용, 평점 4.8/5.0(3,674건)</li>
          <li>· 결제 후 즉시 발송되는 자동화 시스템</li>
          <li>· 24시간 한국어 고객지원</li>
          <li>· 24시간 환불 보장 정책</li>
        </ul>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">신뢰할 수 있는 근거</h2>
        <ul className="flex flex-col gap-1 text-md text-neutral-700">
          {PLATFORM_TRUST_FACTS.map((fact) => (
            <li key={fact.label}>
              · <span className="font-semibold">{fact.label}</span> —{" "}
              {fact.detail}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">단점 및 주의사항</h2>
        <ul className="flex flex-col gap-1 text-md text-neutral-700">
          <li>· 각 서비스 공식 약관과는 조금 다른, '회색지대'에 가까운 방식이에요</li>
          <li>· 원 서비스 정책이 바뀌면 이용이 잠시 중단될 수 있어요 (그럴 땐 재발급·환불로 대응해줘요)</li>
          <li>· 받은 계정을 제3자와 다시 나눠 쓰는 재공유는 지원하지 않아요</li>
        </ul>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">자주 묻는 질문</h2>
        <FaqAccordion items={faqs} />
      </section>

      <section className="flex flex-col gap-3">
        <p className="text-md text-neutral-500">
          구체적인 서비스별 가격이 궁금하다면{" "}
          <Link href="/youtube-premium-discount" className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400">
            유튜브 프리미엄
          </Link>
          ,{" "}
          <Link href="/netflix-discount" className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400">
            넷플릭스
          </Link>
          ,{" "}
          <Link href="/chatgpt-plus-discount" className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400">
            챗GPT 플러스
          </Link>{" "}
          할인 페이지를 확인해보세요. 실제로 써본 사람들의 생생한 이야기는{" "}
          <Link href="/community" className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400">
            찐후기 게시판
          </Link>
          에서 볼 수 있어요.
        </p>
        <AffiliateCTA label="가입 없이 가격만 먼저 보기" />
      </section>
    </article>
  );
}
