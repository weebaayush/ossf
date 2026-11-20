import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { recruitmentSteps } from "@/lib/data/company";

/** How OSSF selects, verifies, trains and supervises personnel. */
export function RecruitmentProcess({ tone = "light" }: { tone?: "light" | "subtle" }) {
  return (
    <Section tone={tone}>
      <SectionHeading
        title="Recruitment and training"
        description="Every guard, housekeeper and technician goes through the same steps before reaching a site, and stays under supervision afterwards."
      />
      <ol className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {recruitmentSteps.map((step, index) => (
          <li key={step.title}>
            <span
              className="flex h-8 w-8 items-center justify-center bg-signal font-display text-sm font-bold text-signal-ink"
              aria-hidden="true"
            >
              {index + 1}
            </span>
            <h3 className="mt-4 text-base font-bold">{step.title}</h3>
            <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-muted">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
