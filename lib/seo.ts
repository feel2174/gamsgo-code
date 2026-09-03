import type { Metadata } from "next";
import {
  OG_IMAGE_HEIGHT,
  OG_IMAGE_URL,
  OG_IMAGE_WIDTH,
  SITE_LANG,
  SITE_LOCALE,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  getContentUpdatedAt,
} from "./constants";

/**
 * 루트 app/opengraph-image.tsx 는 하위 라우트가 openGraph 를 직접 선언하는 순간
 * 상속되지 않는다(빌드 결과에서 og:image 자체가 사라진다). 그래서 모든 페이지가
 * 같은 대표 이미지를 명시적으로 달아준다. 이미지가 없으면 SNS 공유 카드가 비고,
 * max-image-preview:large 지시자도 쓸 이미지가 없어진다.
 */
const OG_IMAGE = {
  url: OG_IMAGE_URL,
  width: OG_IMAGE_WIDTH,
  height: OG_IMAGE_HEIGHT,
  alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
};

export interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  /** 페이지 고유 키워드. 전역 키워드(SITE_KEYWORDS)와 합쳐진다 */
  keywords?: string[];
  /** 목록/허브 성격의 페이지는 "website", 가이드·후기 글은 "article" */
  ogType?: "website" | "article";
  /** ISO 날짜(YYYY-MM-DD). 생략 시 CONTENT_UPDATED_AT에서 조회 */
  publishedTime?: string;
  modifiedTime?: string;
}

/**
 * 페이지 메타데이터 생성기.
 *
 * 검색 결과 스니펫/이미지 미리보기 제한을 해제하는 googleBot 지시자를 기본 포함한다.
 * (max-snippet:-1, max-image-preview:large) — AI 개요·생성형 검색이 본문을 길게
 * 인용할 수 있게 해주는 신호라 GEO 관점에서 중요하다.
 */
export function buildMetadata(opts: BuildMetadataOptions): Metadata {
  const {
    title,
    description,
    path,
    noIndex,
    keywords,
    ogType = "article",
    publishedTime,
    modifiedTime,
  } = opts;

  const url = `${SITE_URL}${path}`;
  const updatedAt = modifiedTime ?? getContentUpdatedAt(path);

  return {
    title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: {
      canonical: url,
      languages: {
        [SITE_LANG]: url,
        "x-default": url,
      },
    },
    robots: noIndex
      ? { index: false, follow: true, googleBot: { index: false, follow: true } }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      type: ogType,
      images: [OG_IMAGE],
      ...(ogType === "article"
        ? {
            publishedTime: publishedTime ?? updatedAt,
            modifiedTime: updatedAt,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
