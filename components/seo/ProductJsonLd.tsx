import { GAMSGO_AFFILIATE_URL, SITE_URL } from "@/lib/constants";

export function ProductJsonLd({
  name,
  description,
  priceKRW,
  path,
  aggregateRating,
}: {
  name: string;
  description: string;
  priceKRW?: number;
  path: string;
  aggregateRating?: { ratingValue: number; reviewCount: number };
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    brand: {
      "@type": "Brand",
      name: "겜스고",
    },
    url: `${SITE_URL}${path}`,
    ...(priceKRW && {
      offers: {
        "@type": "Offer",
        price: priceKRW,
        priceCurrency: "KRW",
        url: GAMSGO_AFFILIATE_URL,
        availability: "https://schema.org/InStock",
      },
    }),
    ...(aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
