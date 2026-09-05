import Link from "next/link";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { PriceTable } from "@/components/PriceTable";
import { FaqAccordion } from "@/components/FaqAccordion";
import { AnswerSummary } from "@/components/AnswerSummary";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";
import { ProductJsonLd } from "@/components/seo/ProductJsonLd";
import { HowToJsonLd } from "@/components/seo/HowToJsonLd";
import { TrustBadges } from "@/components/TrustBadges";
import { buildMetadata } from "@/lib/seo";
import { getServiceById, OBJECTION_FAQS } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "챗GPT 플러스 가격할인, AI 구독료도 절반 이하로",
  description:
    "ChatGPT Plus 정가 월 $20를 겜스고로 절반 이하로 이용하는 방법과 주의사항을 정리했습니다.",
  path: "/chatgpt-plus-discount",
  keywords: [
    "챗GPT 플러스 할인",
    "ChatGPT Plus 할인",
    "챗지피티 플러스 싸게",
    "챗GPT 구독료",
    "AI 구독료 할인",
    "겜스고 챗GPT",
  ],
});

const faqs = [
  ...OBJECTION_FAQS,
  {
    question: "챗GPT 플러스 가격할인, 얼마나 저렴해지나요?",
    answer:
      "공식 요금은 월 $20(약 2.8만원)이며, 겜스고를 통하면 정가 대비 50% 이상 저렴하게 이용할 수 있습니다. 정확한 실시간 특가는 겜스고 페이지에서 확인하는 것이 정확합니다.",
  },
  {
    question: "기능 제한이 있나요?",
    answer:
      "GPT-4급 모델 이용, 코드 생성, 이미지 생성 등 ChatGPT Plus의 핵심 기능을 동일하게 사용할 수 있습니다.",
  },
  {
    question: "Claude 같은 다른 AI 구독도 할인되나요?",
    answer:
      "네, 겜스고는 ChatGPT Plus 외에도 Claude, Midjourney, Canva 등 다양한 AI 구독 서비스를 할인가로 제공합니다.",
  },
];

export default function ChatgptPlusDiscountPage() {
  const service = getServiceById("chatgpt-plus");

  return (
    <article className="flex flex-col gap-8">
      <BreadcrumbJsonLd
        items={[
          { name: "홈", path: "/" },
          { name: "챗GPT 플러스 가격할인", path: "/chatgpt-plus-discount" },
        ]}
      />
      <ArticleJsonLd
        headline="챗GPT 플러스 가격할인, AI 구독료도 절반 이하로"
        description="ChatGPT Plus 정가 월 $20를 겜스고 구독 공유로 절반 이하에 이용하는 방법과 주의사항."
        path="/chatgpt-plus-discount"
        about={["ChatGPT Plus", "AI 구독료 할인", "구독 공유"]}
        mentions={["ChatGPT", "OpenAI", "Claude", "Midjourney", "겜스고", "GamsGo"]}
      />
      <ProductJsonLd
        name="챗GPT Plus (겜스고 할인가)"
        description="겜스고를 통해 이용하는 ChatGPT Plus 구독. 정가 대비 50% 이상 할인"
        category="AI"
        path="/chatgpt-plus-discount"
      />
      <HowToJsonLd
        name="챗GPT 플러스 50% 이상 할인 구독 신청 방법"
        description="ChatGPT Plus(정가 월 $20)를 겜스고를 통해 반값 이하로 이용하는 4단계 방법"
        path="/chatgpt-plus-discount"
        totalTime="PT3M"
        steps={[
          {
            name: "겜스고 제휴 할인 페이지 접속",
            text: "겜스고코드 할인 링크로 접속하여 챗GPT Plus 할인 페이지로 이동합니다.",
          },
          {
            name: "ChatGPT Plus 상품 및 기간 선택",
            text: "원하는 기간(1개월/3개월/12개월 등)을 선택합니다.",
          },
          {
            name: "할인 코드 적용 후 간편 결제",
            text: "프로모션 할인이 적용된 최종 금액을 확인하고 카카오페이/신용카드로 결제합니다.",
          },
          {
            name: "계정 확인 후 GPT-4o 및 이미지 생성 기능 즉시 이용",
            text: "결제 완료 후 발급된 계정 정보로 로그인하여 Plus 전용 최신 모델과 기능을 제한 없이 이용합니다.",
          },
        ]}
      />
      <header className="flex flex-col gap-3">
        <DisclosureBanner />
        <h1 className="text-2xl font-extrabold leading-snug">
          챗GPT 플러스 가격할인, AI 구독료도 절반 이하로
        </h1>
        <p className="text-md text-neutral-500">
          정가 $20(약 2.8만원), 매달 그대로 내고 계셨다면 절반 이상을 놓치고
          있는 거예요.
        </p>
        <TrustBadges />
        <AnswerSummary
          path="/chatgpt-plus-discount"
          answer="ChatGPT Plus 공식 요금은 월 $20(약 2.8만원)입니다. 구독 공유 플랫폼 겜스고를 이용하면 정가 대비 50% 이상 저렴하게 쓸 수 있고, 최신 모델·이미지 생성·코드 인터프리터 등 Plus 핵심 기능은 그대로 사용할 수 있습니다. AI 구독 특가는 자주 바뀌므로 결제 전 겜스고 페이지에서 실시간 가격을 확인하는 편이 정확합니다."
          facts={[
            "공식 요금: 월 $20 (약 2.8만원)",
            "겜스고 요금: 정가 대비 50% 이상 할인 (실시간 변동)",
            "이용 가능 기능: 최신 모델, 이미지 생성, 코드 인터프리터",
            "Claude·미드저니·캔바 등 다른 AI 구독도 동일 방식으로 할인",
          ]}
        />
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">정가 vs 겜스고가</h2>
        <PriceTable rows={[service]} />
        <p className="text-xs text-neutral-500">
          * AI 구독 특가는 환율/공급 상황에 따라 자주 바뀌므로 정확한 금액은
          아래 버튼에서 실시간으로 확인하세요.
        </p>
        <AffiliateCTA label="챗GPT 플러스 반값에 시작하기" />
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">이용 방법</h2>
        <p className="text-md text-neutral-700">
          계정 충전 또는 초대 방식으로 ChatGPT Plus 혜택을 적용받을 수 있으며,
          결제 후 안내에 따라 짧은 시간 내에 이용을 시작할 수 있습니다.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">자주 묻는 질문</h2>
        <FaqAccordion items={faqs} path="/chatgpt-plus-discount" />
      </section>

      <section className="flex flex-col gap-3">
        <p className="text-md text-neutral-500">
          OTT 구독료 할인도 궁금하다면{" "}
          <Link href="/youtube-premium-discount" className="text-rose-600 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400">
            유튜브 프리미엄
          </Link>{" "}
          또는{" "}
          <Link href="/netflix-discount" className="text-rose-600 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400">
            넷플릭스
          </Link>{" "}
          할인 정보를, 전체 비교는{" "}
          <Link href="/price-comparison" className="text-rose-600 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400">
            구독료 전체 가격 비교
          </Link>
          에서, 실제 이용 후기는{" "}
          <Link href="/community" className="text-rose-600 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400">
            찐후기 게시판
          </Link>
          에서 확인하세요.
        </p>
        <AffiliateCTA label="챗GPT 플러스 할인받기" />
      </section>
    </article>
  );
}
