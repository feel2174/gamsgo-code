import {
  GAMSGO_AFFILIATE_URL,
  OG_IMAGE_URL,
  SERVICE_PRICES,
  SITE_LANG,
  SITE_URL,
  type ServicePrice,
} from "@/lib/constants";
import { JsonLd } from "./JsonLd";

/**
 * 전체 구독 서비스 카탈로그를 ItemList + Product 로 노출한다.
 *
 * "넷플릭스 얼마?" 같은 질의에 AI 답변 엔진이 표를 그대로 읽어가는 대신
 * 구조화된 항목으로 집어갈 수 있게 하는 것이 목적이다.
 * 확정 가격(gamsgoPriceKRW)이 없는 서비스는 offers 를 붙이지 않는다 —
 * 근사치를 Offer 로 올리면 구글 상품 정책 위반이 된다.
 */
function toProduct(service: ServicePrice, path: string) {
  const url = service.href ? `${SITE_URL}${service.href}` : `${SITE_URL}${path}`;

  return {
    "@type": "Product",
    "@id": `${url}#product-${service.id}`,
    name: `${service.name}${service.englishName ? ` (${service.englishName})` : ""}`,
    description: `공식 ${service.officialPrice} → 겜스고 ${service.gamsgoPrice}. ${service.features.join(", ")}`,
    category: service.category,
    image: OG_IMAGE_URL,
    url,
    brand: { "@type": "Brand", name: service.englishName ?? service.name },
    ...(service.gamsgoPriceKRW && {
      offers: {
        "@type": "Offer",
        price: service.gamsgoPriceKRW,
        priceCurrency: "KRW",
        url: GAMSGO_AFFILIATE_URL,
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "겜스고" },
      },
    }),
  };
}

export function ServiceItemListJsonLd({
  path,
  services = SERVICE_PRICES,
  name,
}: {
  path: string;
  services?: ServicePrice[];
  name: string;
}) {
  const url = `${SITE_URL}${path}`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": `${url}#itemlist`,
        name,
        inLanguage: SITE_LANG,
        mainEntityOfPage: { "@id": `${url}#webpage` },
        numberOfItems: services.length,
        itemListOrder: "https://schema.org/ItemListOrderDescending",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: toProduct(service, path),
        })),
      }}
    />
  );
}
