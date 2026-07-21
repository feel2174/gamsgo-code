import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { listPostIdsForSitemap } from "@/lib/community/store";

const staticPaths = [
  "",
  "/youtube-premium-discount",
  "/netflix-discount",
  "/chatgpt-plus-discount",
  "/gamsgo-review",
  "/price-comparison",
  "/community",
  "/disclaimer",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/disclaimer" ? 0.3 : path === "" ? 1 : 0.8,
  }));

  const posts = await listPostIdsForSitemap();
  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/community/${post.id}`,
    lastModified: new Date(post.createdAt),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
