import { SITE_URL } from "@/lib/constants";
import { JsonLd } from "./JsonLd";

export interface BreadcrumbEntry {
  name: string;
  path: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbEntry[] }) {
  const last = items[items.length - 1];

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}${last?.path ?? "/"}#breadcrumb`,
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${SITE_URL}${item.path}`,
        })),
      }}
    />
  );
}
