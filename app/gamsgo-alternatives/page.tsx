import Link from "next/link";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { FaqAccordion } from "@/components/FaqAccordion";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { TrustBadges } from "@/components/TrustBadges";
import { buildMetadata } from "@/lib/seo";
import { PICKLEPLUS_AFFILIATE_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "겜스고 대안 비교, 피클플러스·고잉버스·고스플릿과 뭐가 다른가",
  description:
    "겜스고 말고 다른 구독 공유 사이트도 궁금하시다면. 피클플러스, 고잉버스, 고스플릿과 서비스 범위·국내 OTT 지원·강점을 겜스고와 비교했습니다.",
  path: "/gamsgo-alternatives",
});

const platforms = [
  {
    name: "겜스고 (GamsGo)",
    highlight: true,
    tagline: "AI·OTT·게임 100여 개, 가장 폭넓은 라인업",
    scope: "넷플릭스·유튜브 프리미엄 등 해외 OTT + 챗GPT·클로드·제미나이 등 AI 툴 + 게임 구독까지 100여 개",
    domesticOtt: "티빙·웨이브 같은 국내 OTT는 지원하지 않음",
    strength: "6년 이상 운영된 정식 법인, Trustpilot 4.0, PCI DSS·GDPR 인증, 24시간 환불 보장",
    bestFor: "AI 구독료까지 한 번에 아끼고 싶은 사람, 해외 OTT 위주로 쓰는 사람",
  },
  {
    name: "피클플러스",
    href: PICKLEPLUS_AFFILIATE_URL,
    tagline: "국내 OTT까지 챙기는 올인원형",
    scope: "넷플릭스·웨이브·왓챠·라프텔·티빙·디즈니플러스 + 유튜브 프리미엄·네이버플러스 멤버십·애플뮤직·듀오링고",
    domesticOtt: "티빙·웨이브·왓챠 등 국내 OTT까지 폭넓게 지원",
    strength: "국내 서비스와 라프텔 같은 애니메이션 특화 OTT까지 묶어서 제공",
    bestFor: "국내 OTT와 네이버플러스 멤버십까지 한 번에 아끼고 싶은 사람",
  },
  {
    name: "고잉버스 (GoingBus)",
    tagline: "동시 다중 구독 관리에 특화",
    scope: "넷플릭스·디즈니플러스·스포티파이·유튜브·챗GPT Plus·크런치롤·타이달 등",
    domesticOtt: "국내 OTT 지원 정보는 확인되지 않음",
    strength: "한 계정으로 최대 5개 서비스까지 동시 구독 관리, 다단계 인증 등 보안 절차 안내",
    bestFor: "여러 구독을 한 번에 묶어 관리하고 싶은 사람",
  },
  {
    name: "고스플릿 (GoSplit)",
    tagline: "내 계정을 나눠 쓰는 방식",
    scope: "이미 보유한 개인 계정을 다른 이용자와 나눠 비용을 분담하는 코스트-스플릿 구조",
    domesticOtt: "국내 OTT를 포함하는 경우가 있음 (겜스고 대비 차별점)",
    strength: "이미 계정이 있거나, 공유 과정에 직접 참여하고 싶은 사람에게 적합",
    bestFor: "내 계정으로 직접 나눠 쓰고 싶은 사람, 국내 OTT가 꼭 필요한 사람",
  },
];

const faqs = [
  {
    question: "겜스고에서 티빙이나 웨이브도 되나요?",
    answer:
      "아쉽게도 아직은 지원하지 않아요. 겜스고는 넷플릭스·유튜브 프리미엄 등 해외 OTT와 AI 툴 위주로 서비스를 제공하고 있거든요. 대신 챗GPT·클로드 같은 AI 구독료까지 한 번에 아끼고 싶다면 겜스고가 딱이고, 티빙·웨이브 같은 국내 OTT까지 함께 챙기고 싶다면 피클플러스나 고스플릿 쪽을 같이 확인해보는 걸 추천해요.",
  },
  {
    question: "고스플릿이 겜스고랑 뭐가 다른가요?",
    answer:
      "겜스고는 겜스고가 미리 마련해둔 계정을 빠르게 받아 쓰는 구조이고, 고스플릿은 이용자가 자신의 계정을 다른 사람과 나눠 쓰며 비용을 분담하는 구조에 가깝습니다. 빠르고 간편하게 시작하고 싶다면 겜스고, 이미 계정이 있거나 직접 관리에 참여하고 싶다면 고스플릿이 더 맞을 수 있어요.",
  },
  {
    question: "AI 구독료 할인은 겜스고가 제일 폭넓은가요?",
    answer:
      "비교 대상 중에서는 겜스고가 챗GPT, 클로드, 제미나이, 퍼플렉시티, 그록, 젠스파크 등 AI 툴 라인업을 가장 폭넓게 취급합니다. 피클플러스·고잉버스는 OTT·생활 서비스 중심이라 AI 구독 범위는 상대적으로 제한적인 것으로 알려져 있어요.",
  },
  {
    question: "결국 뭘 골라야 하나요?",
    answer:
      "AI 구독료까지 함께 아끼고 싶거나 해외 OTT 위주로 쓴다면 겜스고, 티빙·웨이브 같은 국내 OTT가 꼭 필요하다면 피클플러스나 고스플릿을 함께 알아보는 걸 추천합니다. 서비스마다 취급 목록과 가격은 수시로 바뀌니 결제 전 실시간 가격을 확인하는 게 안전해요.",
  },
];

export default function GamsgoAlternativesPage() {
  return (
    <article className="flex flex-col gap-8">
      <BreadcrumbJsonLd
        items={[
          { name: "홈", path: "/" },
          { name: "겜스고 대안 비교", path: "/gamsgo-alternatives" },
        ]}
      />
      <header className="flex flex-col gap-3">
        <DisclosureBanner />
        <h1 className="text-2xl font-extrabold leading-snug">
          겜스고 대안 비교, 피클플러스·고잉버스·고스플릿과 뭐가 다른가
        </h1>
        <p className="text-md text-neutral-500">
          구독 공유 중개 플랫폼이 겜스고 하나만 있는 건 아니에요. 서비스
          범위부터 국내 OTT 지원까지 비교했습니다.
        </p>
        <TrustBadges />
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">한눈에 비교</h2>
        <div className="flex flex-col gap-3">
          {platforms.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border bg-white p-4 ${
                p.highlight
                  ? "border-rose-300 shadow-sm shadow-rose-100"
                  : "border-neutral-200"
              }`}
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className="font-bold text-rose-600 underline decoration-rose-200 underline-offset-2 transition-colors hover:text-rose-500 hover:decoration-rose-400"
                  >
                    {p.name}
                  </a>
                ) : (
                  <p className="font-bold">{p.name}</p>
                )}
                {p.highlight && (
                  <span className="rounded-full bg-rose-50 px-2 py-0.5 text-[11px] font-bold text-rose-500">
                    이 사이트
                  </span>
                )}
              </div>
              <p className="mb-3 text-sm font-semibold text-neutral-600">
                {p.tagline}
              </p>
              <dl className="flex flex-col gap-2 text-sm">
                <div>
                  <dt className="font-bold text-neutral-500">서비스 범위</dt>
                  <dd className="text-neutral-700">{p.scope}</dd>
                </div>
                <div>
                  <dt className="font-bold text-neutral-500">국내 OTT</dt>
                  <dd className="text-neutral-700">{p.domesticOtt}</dd>
                </div>
                <div>
                  <dt className="font-bold text-neutral-500">강점</dt>
                  <dd className="text-neutral-700">{p.strength}</dd>
                </div>
                <div>
                  <dt className="font-bold text-neutral-500">이런 분께</dt>
                  <dd className="text-neutral-700">{p.bestFor}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
        <p className="text-xs text-neutral-400">
          각 서비스의 취급 목록과 정책은 수시로 바뀔 수 있어 결제 전 공식
          페이지에서 실시간으로 확인하는 걸 추천합니다.
        </p>
        <AffiliateCTA label="겜스고 실시간 가격 확인하기" />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">자주 묻는 질문</h2>
        <FaqAccordion items={faqs} />
      </section>

      <section className="flex flex-col gap-3">
        <p className="text-md text-neutral-500">
          겜스고 사기 논란이 궁금하다면{" "}
          <Link
            href="/gamsgo-scam-check"
            className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400"
          >
            겜스고 사기 아니에요? 팩트체크
          </Link>
          를, 장단점을 더 보고 싶다면{" "}
          <Link
            href="/gamsgo-review"
            className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400"
          >
            겜스고 후기 총정리
          </Link>
          를, 서비스별 가격은{" "}
          <Link
            href="/price-comparison"
            className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400"
          >
            구독료 전체 가격 비교
          </Link>
          에서 확인하세요.
        </p>
        <AffiliateCTA label="가입 없이 가격만 먼저 보기" />
      </section>
    </article>
  );
}
