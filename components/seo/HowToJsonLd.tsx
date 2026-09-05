import { ORGANIZATION_ID, SITE_LANG, SITE_URL } from "@/lib/constants";
import { JsonLd } from "./JsonLd";

export interface HowToStepItem {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

export interface HowToJsonLdProps {
  name: string;
  description: string;
  path: string;
  steps: HowToStepItem[];
  totalTime?: string; // e.g. "PT3M" (3분)
  estimatedCostKRW?: number;
}

export function HowToJsonLd({
  name,
  description,
  path,
  steps,
  totalTime = "PT3M",
  estimatedCostKRW,
}: HowToJsonLdProps) {
  const url = `${SITE_URL}${path}`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "HowTo",
        "@id": `${url}#howto`,
        name,
        description,
        inLanguage: SITE_LANG,
        mainEntityOfPage: { "@id": `${url}#webpage` },
        totalTime,
        ...(estimatedCostKRW && {
          estimatedCost: {
            "@type": "MonetaryAmount",
            currency: "KRW",
            value: estimatedCostKRW,
          },
        }),
        step: steps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.name,
          text: step.text,
          url: step.url ? `${SITE_URL}${step.url}` : `${url}#step-${index + 1}`,
          ...(step.image && { image: step.image }),
        })),
        author: { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
      }}
    />
  );
}
