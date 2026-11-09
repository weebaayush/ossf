import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { imageSlots } from "@/lib/data/images";

const points = [
  "Police-verified, trained personnel, including ex-servicemen",
  "Immediate replacement whenever a staff member is absent or unsuitable",
  "Surprise inspections and night audits by our own supervisors",
  "PSARA licensed, with PF, ESIC and all statutory compliance handled by us",
];

export function AboutIntro() {
  return (
    <Section tone="light">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <RevealOnScroll>
          <PlaceholderImage {...imageSlots.homeAbout} ratio="aspect-[5/4]" />
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <SectionHeading
            eyebrow="Who We Are"
            title="One accountable partner for security, upkeep and manpower"
            description="Most sites juggle a security agency, a housekeeping contractor and a manpower supplier, then chase all three when something slips. OSSF brings these services under one contract, one point of contact and one standard of discipline, and has done so for over two decades."
          />
          <ul className="mt-7 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-ink-muted">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent-500"
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>
          <Button href="/about" variant="secondary" className="mt-8">
            More About OSSF
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
