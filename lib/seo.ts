import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}): Metadata {
  const { title, description, path, noIndex } = opts;
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    ...(noIndex && { robots: { index: false, follow: true } }),
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "ko_KR",
      type: "article",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
