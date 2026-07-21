export interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col gap-2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {items.map((item) => (
        <details
          key={item.question}
          className="group overflow-hidden rounded-lg border border-neutral-200 transition-colors duration-150 open:border-rose-200 open:bg-rose-50/30"
        >
          <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-2 px-4 py-3 font-medium marker:content-none">
            {item.question}
            <span className="shrink-0 text-neutral-400 transition-transform duration-200 group-open:rotate-45 group-open:text-rose-500">
              +
            </span>
          </summary>
          <p className="px-4 pb-3 text-md leading-relaxed text-neutral-600">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
