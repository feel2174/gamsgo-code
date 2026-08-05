import Link from "next/link";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { AiServicePriceGrid, type AiServicePrice } from "@/components/AiServicePriceGrid";
import { DisclosureBanner } from "@/components/DisclosureBanner";
import { FaqAccordion } from "@/components/FaqAccordion";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { TrustBadges } from "@/components/TrustBadges";
import { buildMetadata } from "@/lib/seo";
import { OBJECTION_FAQS } from "@/lib/constants";
import { SERVICE_ICONS } from "@/lib/serviceIcons";

export const metadata = buildMetadata({
  title: "AI 구독료 비교, 챗GPT·제미나이·클로드 반값에 쓰는 법",
  description:
    "챗GPT Plus, 제미나이, 퍼플렉시티, 그록, 클로드, 젠스파크까지 AI 구독료를 겜스고에서 얼마나 아낄 수 있는지, 왜 이렇게 싼지 이유까지 정리했습니다.",
  path: "/ai-subscription-discount",
});

const freeVsPaid = [
  {
    title: "긴 글을 한 번에 못 써요",
    free: "몇 문단 쓰다 끊기고, 이어 쓰라고 하면 앞을 까먹어요",
    paid: "블로그 글 한 편을 끝까지 흐름 유지하며 씁니다",
  },
  {
    title: "똑똑한 모델을 못 써요",
    free: "가벼운 모델로 바뀌고, 사람 몰리면 기다려야 해요",
    paid: "제일 좋은 모델을 언제든, 횟수 걱정 없이",
  },
  {
    title: "파일을 못 올려요",
    free: "대부분 글자만. 자료는 직접 복붙해야 해요",
    paid: "PDF·엑셀·사진 던지면 읽고 정리해줍니다",
  },
];

const whyCheapReasons = [
  {
    title: "원래 여러 명이 쓰는 요금제가 있어요",
    body: "대부분의 AI 서비스에는 팀·가족 단위로 쓰는 요금제가 있습니다. 인원이 늘수록 1인당 값은 싸지죠.",
  },
  {
    title: "겜스고가 그 자리를 모아서 팝니다",
    body: "혼자 정가를 다 내는 대신, 나눈 만큼만 냅니다. 그래서 반값, 많게는 5분의 1까지 떨어져요.",
  },
  {
    title: "계정은 결제하면 바로 나와요",
    body: "따로 세팅할 게 없습니다. 문제가 생기면 겜스고 고객센터에서 처리해 주고요.",
  },
  {
    title: "그래도 왜 하필 겜스고냐면",
    body: "같은 방식의 계정 공유는 단톡방·카페에서도 구할 수 있어요. 하지만 그런 곳은 결제 후 계정이 안 오거나, 며칠 만에 끊겨도 하소연할 곳이 없죠. 겜스고는 150개국 1,000만 명이 쓰는 만큼 검증된 판매자만 거래하고, 문제가 생기면 24시간 안에 환불까지 보장합니다. 같은 반값이라도 뒤탈이 없는 쪽을 고르는 게 겜스고를 쓰는 이유예요.",
  },
];

const cautions = [
  {
    title: "AI 회사가 직접 운영하는 공식 판매처는 아니에요",
    body: "겜스고는 여러 명이 나눠 쓰는 요금제 자리를 연결해주는 중개 플랫폼이에요. 그래서 이만큼 저렴하게 쓸 수 있는 거고요.",
  },
  {
    title: "계정이 한 번씩 바뀔 수도 있어요",
    body: "그럴 땐 이전 대화 기록이 유지 안 될 수 있으니, 중요한 내용은 따로 저장해두면 마음이 편해요.",
  },
  {
    title: "민감한 자료는 개인 계정에서 다루는 걸 추천해요",
    body: "여럿이 나눠 쓰는 계정이다 보니, 회사 기밀처럼 민감한 자료는 본인 이름으로 만든 계정에서 다루는 게 더 안심돼요.",
  },
  {
    title: "가격은 시세처럼 조금씩 움직여요",
    body: "환율이나 프로모션에 따라 달라질 수 있어요. 결제 화면에 뜬 최종 금액만 한 번 확인하면 충분해요.",
  },
];

const aiServices: AiServicePrice[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    tagline: "글쓰기, 요약, 아이디어 뭐든 다",
    badge: "제일 무난",
    icon: SERVICE_ICONS["chatgpt-plus"],
    officialPriceKRW: 30000,
    gamsgoPriceKRW: 7123,
  },
  {
    id: "gemini",
    name: "Gemini",
    tagline: "구글 문서·지메일이랑 붙어서 편함",
    badge: "제일 쌈",
    icon: SERVICE_ICONS["gemini"],
    officialPriceKRW: 29000,
    gamsgoPriceKRW: 3205,
  },
  {
    id: "perplexity",
    name: "Perplexity",
    tagline: "출처까지 보여주는 자료조사용",
    badge: "검색 특화",
    icon: SERVICE_ICONS["perplexity"],
    officialPriceKRW: 29000,
    gamsgoPriceKRW: 5826,
  },
  {
    id: "grok",
    name: "Grok",
    tagline: "실시간 X(트위터) 글까지 읽어요",
    badge: "할인 최대",
    icon: SERVICE_ICONS["grok"],
    officialPriceKRW: 43000,
    gamsgoPriceKRW: 8789,
  },
  {
    id: "claude",
    name: "Claude",
    tagline: "긴 글, 자연스러운 한국어, 코딩",
    badge: "글·코딩",
    icon: SERVICE_ICONS["claude"],
    officialPriceKRW: 30000,
    gamsgoPriceKRW: 14958,
  },
  {
    id: "genspark",
    name: "Genspark",
    tagline: "PPT·리포트를 통째로 만들어줘요",
    badge: "알아서 해줌",
    icon: SERVICE_ICONS["genspark"],
    officialPriceKRW: 36000,
    gamsgoPriceKRW: 25628,
  },
];

const faqs = [
  ...OBJECTION_FAQS,
  {
    question: "그록(Grok)이나 젠스파크도 겜스고에서 살 수 있나요?",
    answer:
      "네, 챗GPT·제미나이·퍼플렉시티 같은 대중적인 AI 툴뿐 아니라 그록, 젠스파크, 미드저니 같은 서비스도 겜스고에서 할인가로 취급합니다. 실시간 재고와 특가는 겜스고 페이지에서 바로 확인할 수 있어요.",
  },
  {
    question: "AI 구독료가 왜 이렇게 싼 건지 다시 설명해 주세요",
    answer:
      "AI 서비스 대부분에 여러 명이 나눠 쓰는 팀·가족 요금제가 있고, 겜스고는 그 자리를 모아서 파는 구조입니다. 혼자 정가를 다 내는 대신 나눈 만큼만 내기 때문에 반값에서 많게는 5분의 1까지 저렴해지는 거예요.",
  },
  {
    question: "비슷한 걸 단톡방이나 카페에서 구하는 것과 뭐가 다른가요?",
    answer:
      "개인 간 거래는 결제 후 계정을 안 주거나 며칠 만에 끊겨도 환불받을 곳이 없는 경우가 많습니다. 겜스고는 150개국 1,000만 명 이상이 이용 중이고 평점 4.8(3,674건)인 만큼 검증된 판매자와 거래하며, 문제가 생기면 24시간 안에 환불을 보장해요.",
  },
];

export default function AiSubscriptionDiscountPage() {
  return (
    <article className="flex flex-col gap-8">
      <BreadcrumbJsonLd
        items={[
          { name: "홈", path: "/" },
          { name: "AI 구독료 비교", path: "/ai-subscription-discount" },
        ]}
      />
      <header className="flex flex-col gap-3">
        <DisclosureBanner />
        <h1 className="text-2xl font-extrabold leading-snug">
          챗GPT·제미나이·클로드, AI 구독료도 정가로 내면 손해예요
        </h1>
        <p className="text-md text-neutral-500">
          똑같은 AI 구독을 누구는 3만원 내고, 누구는 3천원대에 씁니다. 왜 이렇게
          차이가 나는지, 결제 전에 뭘 알아야 하는지 순서대로 정리했어요.
        </p>
        <TrustBadges />
      </header>

      <section className="flex flex-col gap-3">
        <p className="text-sm font-bold text-rose-500">잠깐, 그 전에</p>
        <h2 className="text-lg font-bold">유료 쓰면 뭐가 달라지나요?</h2>
        <p className="text-md text-neutral-500">
          무료로도 되는데 왜 돈을 내냐고요? 이 세 가지가 제일 크게 달라요.
        </p>
        <div className="flex flex-col gap-3">
          {freeVsPaid.map((row) => (
            <div
              key={row.title}
              className="rounded-2xl border border-neutral-200 bg-white p-4"
            >
              <p className="mb-3 font-bold">{row.title}</p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="rounded-xl bg-neutral-50 p-3">
                  <p className="mb-1 text-xs font-bold text-neutral-400">
                    무료
                  </p>
                  <p className="text-sm text-neutral-600">{row.free}</p>
                </div>
                <div className="rounded-xl bg-rose-50 p-3">
                  <p className="mb-1 text-xs font-bold text-rose-500">유료</p>
                  <p className="text-sm font-semibold text-rose-700">
                    {row.paid}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <p className="text-sm font-bold text-rose-500">궁금하시죠</p>
        <h2 className="text-lg font-bold">
          왜 이렇게 싼가요? 이상한 거 아닌가요?
        </h2>
        <p className="text-md text-neutral-500">
          넷플릭스 계정 나눠 쓰는 거, 해보셨죠? 그거랑 똑같은 구조인데, 겜스고를
          굳이 써야 하는 이유까지 짚어볼게요.
        </p>
        <div className="flex flex-col gap-3">
          {whyCheapReasons.map((reason, i) => (
            <div
              key={reason.title}
              className="flex gap-3 rounded-2xl border border-neutral-200 bg-white p-4"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rose-500 text-sm font-extrabold text-white">
                {i + 1}
              </span>
              <div className="flex flex-col gap-1">
                <p className="font-bold">{reason.title}</p>
                <p className="text-sm text-neutral-600">{reason.body}</p>
              </div>
            </div>
          ))}
        </div>
        <AffiliateCTA label="겜스고에서 AI 구독료 확인하기" />
      </section>

      <section className="flex flex-col gap-3 rounded-2xl border border-amber-100 bg-amber-50/40 p-4">
        <p className="text-sm font-bold text-rose-500">좋은 얘기만 하면 광고죠</p>
        <h2 className="text-lg font-bold">결제 전에 이건 알고 가세요</h2>
        <p className="text-sm text-neutral-500">
          미리 알아두면 당황할 일 없이 편하게 쓸 수 있는 것들이에요.
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
        <p className="text-sm font-bold text-rose-500">전체 가격</p>
        <h2 className="text-lg font-bold">진단 없이 바로 고르고 싶다면</h2>
        <p className="text-md text-neutral-500">
          전부 한 달 기준이에요. 눌러서 실제 가격을 확인해 보세요.
        </p>
        <AiServicePriceGrid services={aiServices} />
        <p className="text-xs text-neutral-400">
          가격 확인일 2026.08.04 · 환율과 프로모션에 따라 달라질 수 있어요.
          &apos;원래 가격&apos;은 각 서비스 공식 월 요금의 원화 환산 기준입니다.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">자주 묻는 질문</h2>
        <FaqAccordion items={faqs} />
      </section>

      <section className="flex flex-col gap-3">
        <p className="text-md text-neutral-500">
          OTT 구독료 할인도 궁금하다면{" "}
          <Link
            href="/youtube-premium-discount"
            className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400"
          >
            유튜브 프리미엄
          </Link>{" "}
          또는{" "}
          <Link
            href="/netflix-discount"
            className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400"
          >
            넷플릭스
          </Link>{" "}
          할인 정보를, 챗GPT Plus만 자세히 보려면{" "}
          <Link
            href="/chatgpt-plus-discount"
            className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400"
          >
            챗GPT 플러스 가격할인
          </Link>{" "}
          페이지를, 실제 이용 후기는{" "}
          <Link
            href="/community"
            className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400"
          >
            찐후기 게시판
          </Link>
          에서 확인하세요.
        </p>
        <AffiliateCTA label="AI 구독료 반값에 시작하기" />
      </section>
    </article>
  );
}
