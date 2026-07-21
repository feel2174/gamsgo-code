import Link from "next/link";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { PriceTable } from "@/components/PriceTable";
import { FaqAccordion } from "@/components/FaqAccordion";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { buildMetadata } from "@/lib/seo";
import { SERVICE_PRICES } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "구독료 가격 비교, 유튜브·넷플릭스·챗GPT 가격할인 총정리",
  description:
    "유튜브 프리미엄 가격할인, 넷플릭스 가격할인, 챗GPT Plus, 디즈니플러스, 스포티파이 정가와 겜스고 할인가를 한 번에 비교했습니다.",
  path: "/price-comparison",
});

const faqs = [
  {
    question: "구독료 가격 비교, 어떤 서비스가 가장 많이 할인되나요?",
    answer:
      "유튜브 프리미엄과 넷플릭스가 겜스고에서 최대 70% 할인으로 가장 큰 폭의 절약 효과를 보여줍니다. 챗GPT Plus 등 AI 구독도 50% 이상 저렴하게 이용할 수 있습니다.",
  },
  {
    question: "디즈니플러스, 스포티파이도 할인되나요?",
    answer:
      "네, 겜스고는 디즈니플러스·스포티파이를 포함해 100여 개 구독 서비스를 취급합니다. 실시간 특가는 겜스고 페이지에서 바로 확인할 수 있습니다.",
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
          구독료 가격 비교, 정가 vs 겜스고가
        </h1>
        <p className="text-sm text-neutral-500">
          유튜브 프리미엄 가격할인, 넷플릭스 가격할인부터 AI 서비스까지, 겜스고에서
          얼마나 저렴해지는지 한눈에 비교해보세요.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <PriceTable rows={SERVICE_PRICES} />
        <AffiliateCTA label="전체 특가 겜스고에서 확인하기" />
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">서비스별 자세히 보기</h2>
        <ul className="flex flex-col gap-1 text-sm">
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
        </ul>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">자주 묻는 질문</h2>
        <FaqAccordion items={faqs} />
      </section>
    </article>
  );
}
