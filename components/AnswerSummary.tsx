import { formatKoreanDate, getContentUpdatedAt } from "@/lib/constants";

/**
 * 답변 우선(answer-first) 요약 블록.
 *
 * AI 개요·ChatGPT·퍼플렉시티 같은 답변 엔진은 페이지 상단의 자기완결적인
 * 한 문단을 그대로 인용하는 경향이 있다. `.seo-answer` 클래스는 JSON-LD의
 * speakable cssSelector 와 짝을 이룬다.
 */
export function AnswerSummary({
  answer,
  facts,
  path,
}: {
  /** 검색 질의에 대한 직접적인 답 한 문단(40~60단어 권장) */
  answer: string;
  /** 인용하기 좋은 핵심 수치·사실 목록 */
  facts?: string[];
  /** 최종 업데이트일 표기에 사용 */
  path?: string;
}) {
  const updatedAt = path ? getContentUpdatedAt(path) : undefined;

  return (
    <section
      aria-label="핵심 요약"
      className="seo-answer flex flex-col gap-2 rounded-xl border border-rose-100 bg-rose-50/40 px-4 py-3"
    >
      <p className="text-xs font-bold tracking-wide text-rose-500">한눈에 정리</p>
      <p className="text-md leading-relaxed text-neutral-700">{answer}</p>
      {facts && facts.length > 0 && (
        <ul className="flex flex-col gap-1 text-md text-neutral-600">
          {facts.map((fact) => (
            <li key={fact} className="flex gap-2">
              <span aria-hidden="true" className="text-rose-400">
                ·
              </span>
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      )}
      {updatedAt && (
        <p className="text-xs text-neutral-400">
          최종 업데이트{" "}
          <time dateTime={updatedAt}>{formatKoreanDate(updatedAt)}</time>
        </p>
      )}
    </section>
  );
}
