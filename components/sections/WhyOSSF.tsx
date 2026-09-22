import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils/cn";
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

      <div className="mt-12 grid grid-cols-1 border-t border-surface-border sm:grid-cols-2">
        {items.map((item, index) => (
          <RevealOnScroll
            key={item.title}
            delay={index * 30}
            className={cn(
              "border-b border-surface-border py-5",
              index % 2 === 0 ? "sm:pr-8" : "sm:border-l sm:border-surface-border sm:pl-8"
            )}
          >
            <div className="flex items-start gap-4">
              <span className="pt-0.5 font-mono text-xs text-navy-200">
                {String(index + 1).padStart(2, "0")}
              </span>
              <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
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
