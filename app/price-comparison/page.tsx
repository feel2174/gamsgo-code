import Link from "next/link";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { PriceTable } from "@/components/PriceTable";
import { buildMetadata } from "@/lib/seo";
import { SERVICE_PRICES } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "구독료 전체 가격 비교 (유튜브·넷플릭스·챗GPT 등)",
  description:
    "유튜브 프리미엄, 넷플릭스, 챗GPT Plus, 디즈니플러스, 스포티파이 정가와 겜스고 할인가를 한 번에 비교했습니다.",
  path: "/price-comparison",
});

export default function PriceComparisonPage() {
  return (
    <article className="flex flex-col gap-8">
      <header className="flex flex-col gap-3">
        <DisclosureBanner />
        <h1 className="text-2xl font-extrabold leading-snug">
          구독료 전체 가격 비교, 정가 vs 겜스고가
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          OTT부터 AI 서비스까지, 겜스고에서 얼마나 저렴해지는지 한눈에
          비교해보세요.
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
            <Link href="/youtube-premium-discount" className="underline">
              유튜브 프리미엄 가격할인 총정리 →
            </Link>
          </li>
          <li>
            <Link href="/netflix-discount" className="underline">
              넷플릭스 싸게 보는법 →
            </Link>
          </li>
          <li>
            <Link href="/chatgpt-plus-discount" className="underline">
              챗GPT 플러스 가격할인 →
            </Link>
          </li>
          <li>
            <Link href="/gamsgo-review" className="underline">
              겜스고 후기 및 안전성 →
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
