import {
  OG_IMAGE_HEIGHT,
  OG_IMAGE_URL,
  OG_IMAGE_WIDTH,
  ORGANIZATION_ID,
  SITE_LANG,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
  getContentUpdatedAt,
} from "@/lib/constants";
import { JsonLd } from "./JsonLd";

export interface ArticleJsonLdProps {
  headline: string;
  description: string;
  path: string;
  /** 이 글이 다루는 주제 엔티티. AI 검색이 문서를 주제와 연결하는 데 쓴다 */
  about?: string[];
  /** 문서에 실제로 등장하는 고유명사(브랜드·서비스명) */
  mentions?: string[];
  datePublished?: string;
  dateModified?: string;
  /** CollectionPage(목록형) / WebPage(단일 문서) 구분 */
  pageType?: "WebPage" | "CollectionPage" | "AboutPage" | "FAQPage";
  /** 음성 비서·AI 개요가 우선 읽을 영역의 CSS 선택자 */
  speakableSelectors?: string[];
}

/**
 * 페이지 단위 Article + WebPage @graph.
 *
 * - dateModified: 신선도 신호. AI 개요/생성형 검색이 최신 문서를 우선 인용한다.
 * - author/publisher: 루트 레이아웃의 Organization 노드를 @id 로 참조해 엔티티를 통합.
 * - speakable: 답변 엔진이 페이지의 요약 문단을 먼저 집어가도록 지정.
 * - isPartOf/breadcrumb: 사이트 구조 안에서의 위치를 명시.
 */
export function ArticleJsonLd({
  headline,
  description,
  path,
  about,
  mentions,
  datePublished,
  dateModified,
  pageType = "WebPage",
  speakableSelectors = [".seo-answer", "h1"],
}: ArticleJsonLdProps) {
  const url = `${SITE_URL}${path}`;
  const modified = dateModified ?? getContentUpdatedAt(path);
  const published = datePublished ?? modified;

  const image = {
    "@type": "ImageObject",
    "@id": `${url}#primaryimage`,
    url: OG_IMAGE_URL,
    contentUrl: OG_IMAGE_URL,
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
  };

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": pageType,
            "@id": `${url}#webpage`,
            url,
            name: headline,
            description,
            inLanguage: SITE_LANG,
            isPartOf: { "@id": WEBSITE_ID },
            about: { "@id": ORGANIZATION_ID },
            primaryImageOfPage: { "@id": `${url}#primaryimage` },
            datePublished: published,
            dateModified: modified,
            breadcrumb: { "@id": `${url}#breadcrumb` },
            potentialAction: {
              "@type": "ReadAction",
              target: [url],
            },
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: speakableSelectors,
            },
          },
          {
            "@type": "Article",
            "@id": `${url}#article`,
            headline,
            description,
            inLanguage: SITE_LANG,
            isPartOf: { "@id": `${url}#webpage` },
            mainEntityOfPage: { "@id": `${url}#webpage` },
            image,
            datePublished: published,
            dateModified: modified,
            author: { "@id": ORGANIZATION_ID },
            publisher: { "@id": ORGANIZATION_ID },
            copyrightHolder: { "@id": ORGANIZATION_ID },
            copyrightYear: Number(published.slice(0, 4)),
            ...(about?.length && {
              about: about.map((name) => ({ "@type": "Thing", name })),
            }),
            ...(mentions?.length && {
              mentions: mentions.map((name) => ({ "@type": "Thing", name })),
            }),
            // 제휴 링크가 포함된 콘텐츠임을 구조화 데이터로도 명시 (E-E-A-T 투명성)
            creditText: SITE_NAME,
            isAccessibleForFree: true,
          },
        ],
      }}
    />
  );
}
