import Link from "next/link";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { PriceTable } from "@/components/PriceTable";
import { FaqAccordion } from "@/components/FaqAccordion";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ProductJsonLd } from "@/components/seo/ProductJsonLd";
import { buildMetadata } from "@/lib/seo";
import { getServiceById } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "넷플릭스 가격할인 총정리, 월 5천원대로 보는법 (2026)",
  description:
    "넷플릭스 가격할인 정보 총정리. 프리미엄 정가 월 17,000원을 겜스고로 월 5,000원대에 VPN 없이 이용하는 방법을 정리했습니다.",
  path: "/netflix-discount",
});

const faqs = [
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
  {
    question: "겜스고 넷플릭스 계정은 안전한가요?",
    answer:
      "구독 공유 방식은 넷플릭스 약관과 배치될 수 있는 회색지대 서비스입니다. 다만 결제 후 즉시 발송, 24시간 고객지원 등 이용 편의를 제공하며 자세한 내용은 겜스고 후기 페이지에서 확인할 수 있습니다.",
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
          정가 대비 최대 70% 저렴하게, VPN 없이 넷플릭스 프리미엄 화질을 그대로
          즐기는 방법입니다.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">넷플릭스 요금제 vs 겜스고가</h2>
        <PriceTable rows={[service]} />
        <AffiliateCTA label="넷플릭스 특가 확인하기" />
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
          에서 확인하세요.
        </p>
        <AffiliateCTA label="넷플릭스 최대 70% 할인받기" />
      </section>
    </article>
  );
}
