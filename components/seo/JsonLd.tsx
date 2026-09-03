/**
 * JSON-LD를 안전하게 렌더링하는 공용 컴포넌트.
 *
 * JSON.stringify 결과를 그대로 <script>에 넣으면 커뮤니티 글처럼
 * 사용자가 입력한 문자열에 "</script>"가 들어왔을 때 스크립트 블록을
 * 탈출할 수 있다. Next.js 문서 권장대로 "<"를 유니코드 이스케이프한다.
 */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
