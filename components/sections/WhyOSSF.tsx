import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { differentiators } from "@/lib/data/differentiators";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function WhyOSSF({ showAll = false }: { showAll?: boolean }) {
  const items = showAll ? differentiators : differentiators.slice(0, 8);

  return (
    <Section tone="light">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Why OSSF"
          title="Verified operational differentiators"
          description="What we commit to on every deployment — not marketing claims, but operational standards drawn directly from how OSSF runs."
        />
        {!showAll ? (
          <Button href="/why-ossf" variant="ghost" className="hidden shrink-0 sm:inline-flex">
            See full list
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        ) : null}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <RevealOnScroll key={item.title} delay={index * 40}>
            <div className="flex gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-50">
                <item.icon className="h-4 w-4 text-accent-600" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-navy-950">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {!showAll ? (
        <Button href="/why-ossf" variant="ghost" className="mt-8 sm:hidden">
          See full list
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      ) : null}
    </Section>
  );
}
