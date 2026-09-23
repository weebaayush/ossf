import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { imageSlots } from "@/lib/data/images";

const points = [
  "Police-verified, professionally trained personnel",
  "24×365 operational support",
  "Regular supervision, inspections and night audits",
  "Customized deployment for each client site",
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
            eyebrow="About OSSF"
            title="A disciplined, accountable approach to security and facility management"
            description="Om Shiv Security Force provides security and facility management services across industrial, corporate, residential, institutional and commercial sectors — built around trained personnel, structured supervision and dependable reporting."
          />
          <ul className="mt-7 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-ink-muted">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
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
