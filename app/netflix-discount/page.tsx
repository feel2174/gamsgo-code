import Link from "next/link";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { PriceTable } from "@/components/PriceTable";
import { FaqAccordion } from "@/components/FaqAccordion";
import { AnswerSummary } from "@/components/AnswerSummary";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { ProductJsonLd } from "@/components/seo/ProductJsonLd";
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";
import { HowToJsonLd } from "@/components/seo/HowToJsonLd";
import { TrustBadges } from "@/components/TrustBadges";
import { buildMetadata } from "@/lib/seo";
import { getServiceById, OBJECTION_FAQS } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "넷플릭스 가격할인, 월 5천원대로 4K 프리미엄 보는 법",
  description:
    "넷플릭스 가격할인 정보 총정리. 프리미엄 정가 월 17,000원을 겜스고로 월 5,000원대에 VPN 없이 이용하는 방법을 정리했습니다.",
  path: "/netflix-discount",
  keywords: [
    "넷플릭스 가격할인",
    "넷플릭스 싸게 보는법",
    "넷플릭스 프리미엄 할인",
    "넷플릭스 4K 저렴하게",
    "겜스고 넷플릭스",
    "넷플릭스 계정 공유",
  ],
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
      <ArticleJsonLd
        headline="넷플릭스 가격할인, 월 5천원대로 4K 프리미엄 보는법"
        description="넷플릭스 프리미엄 정가 월 17,000원을 겜스고 구독 공유로 월 5,000원대에 VPN 없이 이용하는 방법."
        path="/netflix-discount"
        about={["넷플릭스", "OTT 구독료 할인", "구독 공유"]}
        mentions={["Netflix", "Netflix Premium", "겜스고", "GamsGo"]}
      />
      {service.gamsgoPriceKRW && (
        <ProductJsonLd
          name="넷플릭스 프리미엄 (겜스고 할인가)"
          description="겜스고를 통해 이용하는 넷플릭스 프리미엄 4K UHD 구독"
          priceKRW={service.gamsgoPriceKRW}
          category="OTT"
          path="/netflix-discount"
        />
      )}
      <HowToJsonLd
        name="넷플릭스 4K 프리미엄 월 5천원대 할인 구독 신청 방법"
        description="VPN이나 우회 없이 넷플릭스 프리미엄 4K 계정을 월 5,000원대에 안전하게 구독하는 4단계 방법"
        path="/netflix-discount"
        estimatedCostKRW={service.gamsgoPriceKRW}
        totalTime="PT3M"
        steps={[
          {
            name: "겜스고 제휴 할인 페이지 접속",
            text: "겜스고코드 공식 제휴 링크로 겜스고 홈페이지에 접속합니다.",
          },
          {
            name: "넷플릭스 프리미엄 플랜 및 이용 기간 선택",
            text: "넷플릭스 4K UHD 1개 프로필 공유 플랜을 선택하고 구독 기간을 지정합니다.",
          },
          {
            name: "할인 코드 확인 및 간편 결제",
            text: "자동 적용된 추가 할인 혜택을 확인한 후 국내 간편결제(카카오페이/토스/카드)로 결제합니다.",
          },
          {
            name: "계정 정보 확인 후 넷플릭스 공식 앱 로그인",
            text: "결제 즉시 '나의 구독' 메뉴에 전용 프로필 번호와 비밀번호가 표시되며, 공식 넷플릭스 앱에 그대로 로그인하여 4K 화질로 시청합니다.",
          },
        ]}
      />
      <header className="flex flex-col gap-3">
        <DisclosureBanner />
        <h1 className="text-2xl font-extrabold leading-snug">
          넷플릭스 가격할인, 월 5천원대로 4K 프리미엄 보는 법
        </h1>
        <p className="text-md text-neutral-500">
          정가로 내면 매달 17,000원, 겜스고면 5,000원대. 1년이면 14만원 이상
          차이나요.
        </p>
        <TrustBadges />
        <AnswerSummary
          path="/netflix-discount"
          answer="넷플릭스 프리미엄 정가는 월 17,000원(스탠다드 13,500원, 광고형 7,000원)이지만, 구독 공유 플랫폼 겜스고를 이용하면 월 5,000원대로 같은 프리미엄 등급을 볼 수 있습니다. VPN이나 우회 접속 없이 넷플릭스 공식 앱·사이트에 그대로 로그인하는 방식이라 4K UHD, HDR, 돌비 애트모스까지 동일하게 지원됩니다."
          facts={[
            "공식 요금: 프리미엄 월 17,000원 / 스탠다드 13,500원 / 광고형 7,000원",
            "겜스고 요금: 월 5,000원대 (최대 70% 할인)",
            "연간 절약액: 약 14만원 이상",
            "VPN·우회 프로그램 불필요, 공식 앱 그대로 사용",
            "화질: 4K UHD·HDR·돌비 비전·돌비 애트모스 지원",
          ]}
        />
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">넷플릭스 요금제 vs 겜스고가</h2>
        <PriceTable rows={[service]} />
        <AffiliateCTA label="월 5,000원대로 지금 보기" />
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">이용 방법</h2>
        <p className="text-md text-neutral-700">
          별도 앱 설치 없이 기존 넷플릭스 웹사이트나 앱에서 전달받은 계정
          정보로 로그인하면 바로 이용할 수 있습니다. 결제 즉시 계정 정보가
          발송되는 자동 발송 시스템을 사용합니다.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">자주 묻는 질문</h2>
        <FaqAccordion items={faqs} path="/netflix-discount" />
      </section>

      <section className="flex flex-col gap-3">
        <p className="text-md text-neutral-500">
          유튜브 프리미엄 할인 정보도 궁금하다면{" "}
          <Link href="/youtube-premium-discount" className="text-rose-600 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400">
            유튜브 프리미엄 가격할인 총정리
          </Link>
          를, 전체 서비스 가격 비교는{" "}
          <Link href="/price-comparison" className="text-rose-600 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400">
            구독료 전체 가격 비교
          </Link>
          에서, 실제 이용 후기는{" "}
          <Link href="/community" className="text-rose-600 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400">
            찐후기 게시판
          </Link>
          에서 확인하세요.
        </p>
        <AffiliateCTA label="넷플릭스 최대 70% 할인받기" />
      </section>
    </article>
  );
}
