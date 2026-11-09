import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/data/company";

/**
 * Frequently asked questions. Uses native <details>/<summary>, so it works
 * without JavaScript and is keyboard accessible. Also emits FAQPage structured
 * data so search engines can show the answers.
 */
export function FAQ({ tone = "light" }: { tone?: "light" | "subtle" }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <Section tone={tone}>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <SectionHeading
          eyebrow="FAQs"
          title="Questions clients ask before hiring us"
          description="Straight answers to what matters when choosing an agency. Can't find yours? Call or email us."
        />
        <div className="divide-y divide-surface-border border-y border-surface-border">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-semibold text-navy-950 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronDown
                  className="mt-1 h-4 w-4 shrink-0 text-accent-500 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
