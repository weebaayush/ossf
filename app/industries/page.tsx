import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { industries } from "@/lib/data/industries";
import { buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industries",
  description:
    "OSSF supports industrial units, corporate offices, residential complexes, hotels, hospitals, warehouses, educational institutions, shopping complexes and government organizations.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sector-specific security & facility support"
        description="Every sector operates differently. OSSF adapts deployment, shift structure and supervision to how each site actually runs."
      />

      <Section tone="light">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <RevealOnScroll key={industry.slug} delay={(index % 6) * 50}>
              <div className="h-full rounded-xl border border-surface-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-950">
                  <industry.icon className="h-5 w-5 text-accent-500" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-base font-semibold text-navy-950">
                  {industry.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {industry.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
