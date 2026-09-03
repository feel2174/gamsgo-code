import { SITE_LANG, SITE_URL } from "@/lib/constants";
import { JsonLd } from "./seo/JsonLd";

export interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({
  items,
  /** 이 FAQ가 속한 페이지 경로. @id 로 페이지 노드와 연결한다 */
  path,
}: {
  items: FaqItem[];
  path?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(path && {
      "@id": `${SITE_URL}${path}#faq`,
      mainEntityOfPage: { "@id": `${SITE_URL}${path}#webpage` },
    }),
    inLanguage: SITE_LANG,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col gap-2">
      <JsonLd data={jsonLd} />
      {items.map((item) => (
        <details
          key={item.question}
          className="group overflow-hidden rounded-lg border border-neutral-200 transition-colors duration-150 open:border-rose-200 open:bg-rose-50/30"
        >
          {/*
            summary/details 안의 답변 텍스트는 접혀 있어도 DOM에 그대로 존재하므로
            크롤러와 AI 답변 엔진이 본문으로 읽어간다.
            질문은 h3로 감싸 문서 개요(heading outline)에도 노출한다.
          */}
          <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-2 px-4 py-3 font-medium marker:content-none">
            <h3 className="text-md font-medium">{item.question}</h3>
            <span className="shrink-0 text-neutral-500 transition-transform duration-200 group-open:rotate-45 group-open:text-rose-600">
              +
            </span>
          </summary>
          <p className="px-4 pb-3 text-md leading-relaxed text-neutral-600">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
