import {
  GAMSGO_AFFILIATE_URL,
  OG_IMAGE_URL,
  ORGANIZATION_ID,
  SITE_LANG,
  SITE_URL,
} from "@/lib/constants";
import { JsonLd } from "./JsonLd";

/**
 * 겜스고를 통해 이용하는 구독은 물리 배송이 없는 디지털 상품이다.
 * 결제 후 즉시 계정/초대링크가 발송되고("배송비 0·즉시 발송"), 24시간 환불 보장
 * 정책이 실제로 운영된다. Google 상품 리치 결과가 요구하는 shippingDetails·
 * hasMerchantReturnPolicy 를 이 실제 정책 그대로 표현한다.
 */
const DIGITAL_SHIPPING_DETAILS = {
  "@type": "OfferShippingDetails",
  shippingRate: {
    "@type": "MonetaryAmount",
    value: 0,
    currency: "KRW",
  },
  shippingDestination: {
    "@type": "DefinedRegion",
    addressCountry: "KR",
  },
  deliveryTime: {
    "@type": "ShippingDeliveryTime",
    handlingTime: {
      "@type": "QuantitativeValue",
      minValue: 0,
      maxValue: 0,
      unitCode: "DAY",
    },
    transitTime: {
      "@type": "QuantitativeValue",
      minValue: 0,
      maxValue: 1,
      unitCode: "DAY",
    },
  },
};

const MERCHANT_RETURN_POLICY = {
  "@type": "MerchantReturnPolicy",
  applicableCountry: "KR",
  returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
  merchantReturnDays: 1,
  returnMethod: "https://schema.org/ReturnByMail",
  returnFees: "https://schema.org/FreeReturn",
};

/** Offer.priceValidUntil 이 없으면 구글이 가격을 만료된 것으로 처리한다. 오늘로부터 90일. */
function priceValidUntil(): string {
  const d = new Date();
  d.setDate(d.getDate() + 90);
  return d.toISOString().slice(0, 10);
}

export interface ProductReview {
  author: string;
  /** 별점 0.5~5.0 */
  ratingValue: number;
  body: string;
  datePublished: string;
  name?: string;
}

export function ProductJsonLd({
  name,
  description,
  priceKRW,
  path,
  category,
  image = OG_IMAGE_URL,
  aggregateRating,
  reviews,
}: {
  name: string;
  description: string;
  priceKRW?: number;
  path: string;
  /** OTT / AI / 음악 등. 구글 상품 이해도와 카테고리 매칭에 쓰인다 */
  category?: string;
  /** 상품 리치 결과 필수 항목. 기본값은 사이트 동적 OG 이미지 */
  image?: string;
  aggregateRating?: { ratingValue: number; reviewCount: number };
  /**
   * 실제 이용자 후기. Google 정책상 페이지에 실제로 노출되는 진짜 후기만 넣어야
   * 하므로, 지어낸 값이 아닌 커뮤니티 게시판 실제 데이터를 전달할 것.
   */
  reviews?: ProductReview[];
}) {
  const url = `${SITE_URL}${path}`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${url}#product`,
        name,
        description,
        inLanguage: SITE_LANG,
        image: [image],
        brand: {
          "@type": "Brand",
          name: "겜스고",
          url: "https://www.gamsgo.com",
        },
        url,
        mainEntityOfPage: { "@id": `${url}#webpage` },
        ...(category && { category }),
        ...(priceKRW && {
          offers: {
            "@type": "Offer",
            "@id": `${url}#offer`,
            price: priceKRW,
            priceCurrency: "KRW",
            priceValidUntil: priceValidUntil(),
            url: GAMSGO_AFFILIATE_URL,
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
            seller: {
              "@type": "Organization",
              name: "겜스고",
              url: "https://www.gamsgo.com",
            },
            eligibleRegion: { "@type": "Country", name: "대한민국" },
            shippingDetails: DIGITAL_SHIPPING_DETAILS,
            hasMerchantReturnPolicy: MERCHANT_RETURN_POLICY,
          },
        }),
        ...(aggregateRating && {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: aggregateRating.ratingValue,
            reviewCount: aggregateRating.reviewCount,
            bestRating: 5,
            worstRating: 1,
          },
        }),
        ...(reviews &&
          reviews.length > 0 && {
            review: reviews.map((r) => ({
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: r.ratingValue,
                bestRating: 5,
              },
              author: { "@type": "Person", name: r.author },
              datePublished: r.datePublished,
              reviewBody: r.body,
              ...(r.name && { name: r.name }),
            })),
          }),
        subjectOf: { "@id": ORGANIZATION_ID },
      }}
    />
  );
}
