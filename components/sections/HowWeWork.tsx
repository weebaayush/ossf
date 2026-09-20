import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { processSteps } from "@/lib/data/process";

export function HowWeWork() {
  return (
    <Section tone="subtle">
      <SectionHeading
        eyebrow="How We Work"
        title="A structured five-step operating process"
        description="From understanding your site to continuous improvement — the same process behind every OSSF deployment."
      />

      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {processSteps.map((step, index) => (
          <RevealOnScroll key={step.number} delay={index * 70}>
            <div className="relative">
              <span className="font-display text-4xl font-bold text-navy-100">
                {step.number}
              </span>
              <h3 className="mt-3 text-base font-semibold text-navy-950">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {step.description}
              </p>
              {index < processSteps.length - 1 ? (
                <span
                  className="absolute right-[-1rem] top-4 hidden h-px w-8 bg-surface-border lg:block"
                  aria-hidden="true"
                />
              ) : null}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
