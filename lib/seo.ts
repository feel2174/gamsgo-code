import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const { title, description, path } = opts;
  const url = `${SITE_URL}${path}`;

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    alternates: { canonical: url },
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
