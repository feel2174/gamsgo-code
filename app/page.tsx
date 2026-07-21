import Link from "next/link";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { PriceTable } from "@/components/PriceTable";
import { SERVICE_PRICES } from "@/lib/constants";

const guides = [
  {
    href: "/youtube-premium-discount",
    title: "유튜브 프리미엄 가격할인",
    desc: "월 14,900원 → 최대 70% 저렴하게 이용하는 법",
  },
  {
    href: "/netflix-discount",
    title: "넷플릭스 싸게 보는법",
    desc: "4K 프리미엄 화질을 월 5천원대로",
  },
  {
    href: "/chatgpt-plus-discount",
    title: "챗GPT 플러스 가격할인",
    desc: "AI 구독료도 절반 이하로 줄이는 방법",
  },
  {
    href: "/price-comparison",
    title: "구독료 전체 가격 비교",
    desc: "OTT·AI 서비스 정가 vs 겜스고가 한눈에",
  },
  {
    href: "/gamsgo-review",
    title: "겜스고 후기 및 안전성",
    desc: "믿고 써도 되는지, 장단점까지 솔직 정리",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-3 text-center">
        <h1 className="text-2xl font-extrabold leading-snug">
          구독료, 최대 70%까지
          <br />
          아끼는 방법
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          유튜브 프리미엄, 넷플릭스, 챗GPT Plus까지 — 겜스고로 구독료를 절약하는
          방법을 정리했습니다.
        </p>
        <AffiliateCTA label="겜스고 특가 바로가기" />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">이런 정보를 찾고 계셨죠?</h2>
        <div className="flex flex-col gap-2">
          {guides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="rounded-xl border border-neutral-200 px-4 py-3 transition-colors hover:border-red-400 dark:border-neutral-800"
            >
              <p className="font-semibold">{g.title}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {g.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">지금 바로 비교해보세요</h2>
        <PriceTable rows={SERVICE_PRICES} />
      </section>

      <AffiliateCTA label="겜스고에서 구독료 절약 시작하기" />
    </div>
  );
}
