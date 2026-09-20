import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { industries } from "@/lib/data/industries";

export function IndustriesGrid() {
  return (
    <Section tone="navy" className="bg-navy-radial">
      <SectionHeading
        eyebrow="Sectors We Serve"
        title="Industries relying on OSSF"
        description="Deployment approaches adapted to the operating realities of each sector."
        tone="light"
      />

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {industries.map((industry, index) => (
          <RevealOnScroll key={industry.slug} delay={index * 40}>
            <div className="group h-full rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-accent-500/40 hover:bg-white/[0.06]">
              <industry.icon
                className="h-5 w-5 text-accent-500"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-sm font-semibold text-white">
                {industry.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-white/55">
                {industry.description}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
