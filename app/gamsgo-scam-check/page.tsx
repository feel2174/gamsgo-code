import Link from "next/link";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { FaqAccordion } from "@/components/FaqAccordion";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { TrustBadges } from "@/components/TrustBadges";
import { buildMetadata } from "@/lib/seo";
import { OBJECTION_FAQS, PLATFORM_TRUST_FACTS } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "겜스고 사기 아니에요? 논란과 팩트체크 총정리",
  description:
    "겜스고 사기라는 말, 디시·클리앙에서도 나온 이야기예요. 실제로 어떤 논란이 있었는지, 겜스고가 왜 사기가 아니라고 보는지 근거와 함께, 그래도 조심해야 할 점까지 정직하게 정리했습니다.",
  path: "/gamsgo-scam-check",
});

const controversies = [
  {
    title: "유튜브 프리미엄 가족 요금제 계정이 막힌 사례",
    body: "구글이 가족 요금제 구성원의 실거주지 확인을 강화하면서, 공유 계정 특성상 위치 기반 보안 정책에 걸려 계정이 정지되거나 가족 그룹에서 빠지는 경우가 보고된 적이 있습니다.",
  },
  {
    title: "환불이 늦거나 일부만 됐다는 불만",
    body: "디시인사이드·클리앙 등 온라인 커뮤니티에는 환불 처리가 늦었다거나, 결제한 금액의 일부만 돌려받았다는 후기가 올라온 적이 있습니다.",
  },
  {
    title: "언론에서 다룬 계정 공유 피해 신고",
    body: "2024년 한 매체는 OTT 계정 공유 서비스 관련 피해 신고 사례를 보도하며 겜스고를 함께 언급하기도 했습니다. 계정 공유 방식 자체가 갖는 구조적 리스크를 보여주는 사례입니다.",
  },
];

const cautions = [
  {
    title: "겜스고는 넷플릭스·챗GPT 같은 회사가 직접 운영하는 게 아니에요.",
    body: "공유 계정을 중개하는 플랫폼이지, 각 서비스의 공식 대리점이 아닙니다. 이 구조 자체를 이해하고 시작하는 게 중요해요.",
  },
  {
    title: "가끔 계정이 바뀔 수 있어요.",
    body: "그때 이전 대화 기록이나 재생목록이 안 넘어올 수 있습니다. 중요한 건 따로 저장해 두세요.",
  },
  {
    title: "민감한 개인정보·업무 자료는 넣지 마세요.",
    body: "남과 나눠 쓰는 계정이라, 회사 기밀이나 민감한 자료는 본인 명의로 만든 개인 계정에서 다루는 게 안전해요.",
  },
  {
    title: "가격이 고정이 아니에요.",
    body: "환율과 프로모션에 따라 오르내립니다. 결제 화면에 뜬 금액을 한 번 더 확인하세요.",
  },
];

const faqs = [
  ...OBJECTION_FAQS,
  {
    question: "겜스고 먹튀인가요? 결제하면 계정을 아예 안 주는 경우도 있나요?",
    answer:
      "겜스고는 결제 후 자동화 시스템으로 즉시 계정 정보를 발송하는 구조라, '결제만 받고 잠적'하는 전형적인 먹튀 구조와는 다릅니다. 다만 공유 계정 특성상 이용 중 문제가 생길 수 있는데, 이 경우 24시간 이내 환불 보장 정책으로 대응하고 있습니다.",
  },
  {
    question: "겜스고에서 계정이 정지되면 어떻게 하나요?",
    answer:
      "이용 제한이나 정지 안내 메일을 받았다면 해당 화면을 캡처해 두고, 겜스고 고객센터에 문의서를 접수하면 됩니다. 사실 확인 후 계정 재발급이나 환불 등 보상 절차가 진행됩니다.",
  },
  {
    question: "겜스고가 신분증이나 얼굴 사진을 요구하나요?",
    answer:
      "결제 수단 본인 확인 목적으로 추가 인증을 요구하는 경우가 있을 수 있습니다. 다만 결제·본인 확인과 무관하게 과도한 개인정보를 요구한다면 정상적인 절차가 맞는지 겜스고 고객센터를 통해 반드시 재확인하는 것이 안전합니다.",
  },
  {
    question: "겜스고 가입하려면 어떻게 하나요? 결제수단은요?",
    answer:
      "회원가입 후 원하는 서비스를 선택하고, 국내 카드 등 다양한 결제수단으로 결제하면 됩니다. 해외결제가 막힌 카드는 실패할 수 있으니 카드사 앱에서 '해외 이용 허용'을 먼저 설정해 두는 걸 추천해요.",
  },
];

export default function GamsgoScamCheckPage() {
  return (
    <article className="flex flex-col gap-8">
      <BreadcrumbJsonLd
        items={[
          { name: "홈", path: "/" },
          { name: "겜스고 사기 아니에요?", path: "/gamsgo-scam-check" },
        ]}
      />
      <header className="flex flex-col gap-3">
        <DisclosureBanner />
        <h1 className="text-2xl font-extrabold leading-snug">
          겜스고 사기 아니에요? 논란과 팩트체크 총정리
        </h1>
        <p className="text-md text-neutral-500">
          &apos;겜스고 사기&apos;라고 검색해 보셨다면, 디시·클리앙에 그런 글이 있는
          것도 사실이에요. 좋은 얘기만 하는 대신 논란과 근거를 있는 그대로
          정리했습니다.
        </p>
        <TrustBadges />
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">실제로 어떤 논란이 있었나요?</h2>
        <p className="text-md text-neutral-500">
          없다고 하면 거짓말이겠죠. 온라인에서 실제로 나왔던 이야기들이에요.
        </p>
        <div className="flex flex-col gap-3">
          {controversies.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-neutral-200 bg-white p-4"
            >
              <p className="mb-1 font-bold">{c.title}</p>
              <p className="text-sm text-neutral-600">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">
          그런데도 사기는 아니라고 보는 이유
        </h2>
        <p className="text-md text-neutral-500">
          논란이 있다는 것과 사기라는 건 다릅니다. 겜스고가 내세우는 근거는
          이렇습니다.
        </p>
        <div className="flex flex-col gap-3">
          {PLATFORM_TRUST_FACTS.map((fact) => (
            <div
              key={fact.label}
              className="flex gap-3 rounded-2xl border border-neutral-200 bg-white p-4"
            >
              <span aria-hidden className="shrink-0 text-lg text-rose-500">
                ✓
              </span>
              <div className="flex flex-col gap-1">
                <p className="font-bold">{fact.label}</p>
                <p className="text-sm text-neutral-600">{fact.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-neutral-500">
          여기에 결제 즉시 계정이 발송되는 자동화 시스템과, 문제가 생기면
          24시간 안에 환불받을 수 있는 정책까지 더해져 있어요. 진짜 먹튀
          사이트라면 이 정도의 구조와 인증을 유지하기 어렵습니다.
        </p>
        <AffiliateCTA label="겜스고 직접 확인해보기" />
      </section>

      <section className="flex flex-col gap-3 rounded-2xl border border-amber-100 bg-amber-50/40 p-4">
        <p className="text-sm font-bold text-rose-500">
          그래서 오히려 이런 것까지 미리 알려드려요
        </p>
        <h2 className="text-lg font-bold">결제 전에 이건 알고 가세요</h2>
        <p className="text-sm text-neutral-500">
          정말 사기를 치려는 곳이라면 굳이 이런 주의사항까지 먼저 알려주지
          않겠죠. 그래도 아셔야 할 건 아셔야 해요.
        </p>
        <ul className="flex flex-col gap-3">
          {cautions.map((c) => (
            <li key={c.title} className="flex gap-2 text-sm">
              <span aria-hidden className="shrink-0 text-amber-500">
                !
              </span>
              <p className="text-neutral-700">
                <span className="font-bold">{c.title}</span> {c.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">자주 묻는 질문</h2>
        <FaqAccordion items={faqs} />
      </section>

      <section className="flex flex-col gap-3">
        <p className="text-md text-neutral-500">
          장단점을 더 자세히 보고 싶다면{" "}
          <Link
            href="/gamsgo-review"
            className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400"
          >
            겜스고 후기 총정리
          </Link>
          를, 비슷한 다른 서비스와 비교해보고 싶다면{" "}
          <Link
            href="/gamsgo-alternatives"
            className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400"
          >
            겜스고 대안 비교
          </Link>
          를, 실제 이용 후기는{" "}
          <Link
            href="/community"
            className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400"
          >
            찐후기 게시판
          </Link>
          에서 확인하세요.
        </p>
        <AffiliateCTA label="가입 없이 가격만 먼저 보기" />
      </section>
    </article>
  );
}
