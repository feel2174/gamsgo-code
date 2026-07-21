import Link from "next/link";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { PriceTable } from "@/components/PriceTable";
import { FaqAccordion } from "@/components/FaqAccordion";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ProductJsonLd } from "@/components/seo/ProductJsonLd";
import { TrustBadges } from "@/components/TrustBadges";
import { buildMetadata } from "@/lib/seo";
import { getServiceById, OBJECTION_FAQS } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "유튜브 프리미엄 가격할인 총정리, 월 6,900원대 (2026년 최신)",
  description:
    "유튜브 프리미엄 가격할인 정보 총정리. 정가 월 14,900원을 겜스고로 최대 70% 할인받아 월 6,900원대에 이용하는 방법, 이용 방식, 주의사항까지 정리했습니다.",
  path: "/youtube-premium-discount",
});

const faqs = [
  ...OBJECTION_FAQS,
  {
    question: "유튜브 프리미엄 가격할인, 겜스고에서 얼마나 저렴한가요?",
    answer:
      "공식 요금은 월 14,900원(연 178,800원)이지만 겜스고 특가는 연 82,800원 수준으로, 월 환산 시 6,900원대까지 낮아집니다. 최대 70% 할인 효과입니다.",
  },
  {
    question: "겜스고 유튜브 프리미엄은 어떤 방식으로 이용하나요?",
    answer:
      "이메일 초대 링크를 통해 본인 계정에 프리미엄 혜택을 적용하는 개인 충전 방식과, 가족 그룹 1개 프로필을 공유하는 방식 중 선택할 수 있습니다. 공식 계정과 기능 차이는 없습니다.",
  },
  {
    question: "결제 후 바로 사용할 수 있나요?",
    answer:
      "결제 후 즉시 발송되며 대부분 몇 분 내로 이용을 시작할 수 있습니다. 24시간 환불 보장이 제공됩니다.",
  },
  {
    question: "모든 기기에서 사용 가능한가요?",
    answer:
      "스마트폰, 태블릿, PC, 스마트TV, 스트리밍 기기, 콘솔 등 유튜브 프리미엄을 지원하는 모든 기기에서 동일하게 사용할 수 있습니다.",
  },
];

export default function YoutubePremiumDiscountPage() {
  const service = getServiceById("youtube-premium");

  return (
    <article className="flex flex-col gap-8">
      <BreadcrumbJsonLd
        items={[
          { name: "홈", path: "/" },
          { name: "유튜브 프리미엄 가격할인", path: "/youtube-premium-discount" },
        ]}
      />
      {service.gamsgoPriceKRW && (
        <ProductJsonLd
          name="유튜브 프리미엄 (겜스고 할인가)"
          description="겜스고를 통해 이용하는 유튜브 프리미엄 개인/가족 공유 구독"
          priceKRW={service.gamsgoPriceKRW}
          path="/youtube-premium-discount"
        />
      )}
      <header className="flex flex-col gap-3">
        <DisclosureBanner />
        <h1 className="text-2xl font-extrabold leading-snug">
          유튜브 프리미엄 가격할인, 최대 70% 저렴하게 구독하는 법
        </h1>
        <p className="text-sm text-neutral-500">
          정가로 내면 연 178,800원, 겜스고면 연 82,800원. 그 차액 96,000원은
          그냥 버리는 돈이에요.
        </p>
        <TrustBadges />
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">정가 vs 겜스고 특가</h2>
        <PriceTable rows={[service]} />
        <AffiliateCTA label="월 6,900원으로 지금 바꾸기" />
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">왜 이렇게 저렴한가요?</h2>
        <p className="text-sm leading-relaxed text-neutral-700">
          겜스고는 유튜브 프리미엄 가족 요금제나 대량 구매 혜택을 활용해 개인
          사용자에게 나눠 제공하는 구독 공유 중개 플랫폼입니다. 이메일 초대
          방식으로 본인 계정에 프리미엄 혜택이 그대로 적용되기 때문에, 광고
          제거·백그라운드 재생·유튜브 뮤직 등 공식 프리미엄과 기능 차이가
          없습니다.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">이용 방법 (3단계)</h2>
        <ol className="flex flex-col gap-2 text-sm text-neutral-700">
          <li>
            <span className="font-semibold">1. 상품 선택 —</span> 개인 충전형
            또는 가족 공유형 중 원하는 방식을 선택합니다.
          </li>
          <li>
            <span className="font-semibold">2. 결제 —</span> 결제 완료 후 이메일
            초대 링크가 즉시 발송됩니다.
          </li>
          <li>
            <span className="font-semibold">3. 초대 수락 —</span> 본인 구글
            계정으로 초대를 수락하면 바로 프리미엄이 적용됩니다.
          </li>
        </ol>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">혹시 모를 상황도 이렇게 대비돼있어요</h2>
        <p className="text-sm leading-relaxed text-neutral-700">
          구독 공유 방식은 유튜브 공식 약관과는 별개로 운영되는 서비스라 정책이
          바뀔 가능성은 있어요. 그래서 문제가 생기면 24시간 고객센터가 바로
          대응하고, 계정 재공유만 지키면 대부분 문제없이 이용하고 있습니다.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">자주 묻는 질문</h2>
        <FaqAccordion items={faqs} />
      </section>

      <section className="flex flex-col gap-3">
        <p className="text-sm text-neutral-500">
          겜스고 자체의 안전성과 후기가 궁금하다면{" "}
          <Link href="/gamsgo-review" className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400">
            겜스고 후기 및 안전성 총정리
          </Link>
          를 참고하세요. 다른 구독 서비스 가격도 함께 보려면{" "}
          <Link href="/price-comparison" className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400">
            구독료 전체 가격 비교
          </Link>
          페이지를, 실제 이용자들의 생생한 후기는{" "}
          <Link href="/community" className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400">
            찐후기 게시판
          </Link>
          에서 확인하세요.
        </p>
        <AffiliateCTA label="유튜브 프리미엄 최대 70% 할인받기" />
      </section>
    </article>
  );
}
