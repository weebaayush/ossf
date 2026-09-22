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

      <div className="relative mt-16">
        <div
          className="absolute left-[14px] right-[14px] top-[15px] hidden h-px bg-surface-border lg:block"
          aria-hidden="true"
        />
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <RevealOnScroll key={step.number} delay={index * 70}>
              <div className="relative">
                <div className="relative z-10 hidden h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-accent-500 bg-surface-subtle lg:flex">
                  <span className="h-2 w-2 rounded-full bg-accent-500" aria-hidden="true" />
                </div>
                <span className="mt-4 block font-display text-4xl font-bold text-navy-100 lg:mt-5">
                  {step.number}
                </span>
                <h3 className="mt-3 text-base font-semibold text-navy-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </Section>
  );
}
