import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { recruitmentSteps } from "@/lib/data/company";

/** How OSSF selects, verifies, trains and supervises personnel. */
export function RecruitmentProcess({ tone = "light" }: { tone?: "light" | "subtle" }) {
  return (
    <Section tone={tone}>
      <SectionHeading
        eyebrow="Recruitment & Training"
        title="How a guard earns a place on your site"
        description="Every guard, housekeeper and technician goes through the same steps before reaching you, and stays supervised after."
      />
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {recruitmentSteps.map((step, index) => (
          <RevealOnScroll key={step.title} delay={index * 50}>
            <div className="relative h-full rounded-xl border border-surface-border bg-white p-6 shadow-soft">
              <span className="absolute right-5 top-5 font-display text-3xl font-bold text-navy-100">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-950">
                <step.icon className="h-5 w-5 text-accent-500" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-navy-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
