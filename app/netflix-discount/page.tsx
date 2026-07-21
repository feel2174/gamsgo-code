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
  title: "넷플릭스 가격할인 총정리, 월 5천원대로 보는법 (2026)",
  description:
    "넷플릭스 가격할인 정보 총정리. 프리미엄 정가 월 17,000원을 겜스고로 월 5,000원대에 VPN 없이 이용하는 방법을 정리했습니다.",
  path: "/netflix-discount",
});

const faqs = [
  ...OBJECTION_FAQS,
  {
    question: "넷플릭스 가격할인, VPN이 필요한가요?",
    answer:
      "겜스고를 이용하면 별도 VPN 설치나 우회 접속 없이 기존 넷플릭스 사이트/앱에 그대로 로그인해서 이용할 수 있습니다.",
  },
  {
    question: "화질이나 기능에 차이가 있나요?",
    answer:
      "겜스고에서 제공하는 계정은 넷플릭스 공식 프리미엄 등급으로, 4K UHD·HDR·돌비 비전·돌비 애트모스까지 공식 구독과 동일한 수준으로 지원됩니다.",
  },
];

export default function NetflixDiscountPage() {
  const service = getServiceById("netflix");

  return (
    <article className="flex flex-col gap-8">
      <BreadcrumbJsonLd
        items={[
          { name: "홈", path: "/" },
          { name: "넷플릭스 가격할인", path: "/netflix-discount" },
        ]}
      />
      {service.gamsgoPriceKRW && (
        <ProductJsonLd
          name="넷플릭스 프리미엄 (겜스고 할인가)"
          description="겜스고를 통해 이용하는 넷플릭스 프리미엄 4K UHD 구독"
          priceKRW={service.gamsgoPriceKRW}
          path="/netflix-discount"
        />
      )}
      <header className="flex flex-col gap-3">
        <DisclosureBanner />
        <h1 className="text-2xl font-extrabold leading-snug">
          넷플릭스 가격할인, 월 5천원대로 4K 프리미엄 보는법
        </h1>
        <p className="text-sm text-neutral-500">
          정가로 내면 매달 17,000원, 겜스고면 5,000원대. 1년이면 14만원 이상
          차이나요.
        </p>
        <TrustBadges />
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">넷플릭스 요금제 vs 겜스고가</h2>
        <PriceTable rows={[service]} />
        <AffiliateCTA label="월 5,000원대로 지금 보기" />
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">이용 방법</h2>
        <p className="text-sm leading-relaxed text-neutral-700">
          별도 앱 설치 없이 기존 넷플릭스 웹사이트나 앱에서 전달받은 계정
          정보로 로그인하면 바로 이용할 수 있습니다. 결제 즉시 계정 정보가
          발송되는 자동 발송 시스템을 사용합니다.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">자주 묻는 질문</h2>
        <FaqAccordion items={faqs} />
      </section>

      <section className="flex flex-col gap-3">
        <p className="text-sm text-neutral-500">
          유튜브 프리미엄 할인 정보도 궁금하다면{" "}
          <Link href="/youtube-premium-discount" className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400">
            유튜브 프리미엄 가격할인 총정리
          </Link>
          를, 전체 서비스 가격 비교는{" "}
          <Link href="/price-comparison" className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400">
            구독료 전체 가격 비교
          </Link>
          에서, 실제 이용 후기는{" "}
          <Link href="/community" className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400">
            찐후기 게시판
          </Link>
          에서 확인하세요.
        </p>
        <AffiliateCTA label="넷플릭스 최대 70% 할인받기" />
      </section>
    </article>
  );
}
