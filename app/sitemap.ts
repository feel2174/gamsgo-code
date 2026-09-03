import type { MetadataRoute } from "next";
import { SITE_URL, getContentUpdatedAt } from "@/lib/constants";
import { listPostIdsForSitemap } from "@/lib/community/store";

/**
 * priority/changeFrequency 는 구글이 사실상 무시하지만 네이버·다음 등
 * 다른 크롤러는 참고하므로 실제 갱신 주기에 맞춰 유지한다.
 * lastModified 에 new Date() 를 넣으면 매 배포마다 전체 URL이 "방금 수정됨"이
 * 되어 신선도 신호가 무의미해지므로, 콘텐츠 검수일 상수를 사용한다.
 */
const staticPaths: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { path: "", priority: 1, changeFrequency: "daily" },
  { path: "/youtube-premium-discount", priority: 0.9, changeFrequency: "weekly" },
  { path: "/youtube-premium-bypass", priority: 0.9, changeFrequency: "weekly" },
  { path: "/netflix-discount", priority: 0.9, changeFrequency: "weekly" },
  { path: "/chatgpt-plus-discount", priority: 0.9, changeFrequency: "weekly" },
  { path: "/price-comparison", priority: 0.9, changeFrequency: "weekly" },
  { path: "/gamsgo-review", priority: 0.8, changeFrequency: "weekly" },
  { path: "/gamsgo-scam-check", priority: 0.8, changeFrequency: "monthly" },
  { path: "/ai-subscription-discount", priority: 0.8, changeFrequency: "weekly" },
  { path: "/gamsgo-alternatives", priority: 0.7, changeFrequency: "monthly" },
  { path: "/community", priority: 0.7, changeFrequency: "daily" },
  { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(getContentUpdatedAt(path)),
      changeFrequency,
      priority,
    })
  );

  const posts = await listPostIdsForSitemap();
  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/community/${post.id}`,
    lastModified: new Date(post.createdAt),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
