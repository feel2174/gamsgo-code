import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const paths = [
  "",
  "/youtube-premium-discount",
  "/netflix-discount",
  "/chatgpt-plus-discount",
  "/gamsgo-review",
  "/price-comparison",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
