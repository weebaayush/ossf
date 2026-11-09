import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { industries } from "@/lib/data/industries";
import { buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve",
  description:
    "OSSF serves manufacturing industries, corporate offices, IT parks, residential complexes, hospitals, educational institutions, hotels, shopping malls, warehouses, construction sites and government organizations.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Security planned for how your sector works"
        description="A factory gate, a hospital lobby and a society entrance each carry different risks. We staff and brief every site for the risks it actually faces."
      />

      <Section tone="light">
        <div className="divide-y divide-surface-border border-y border-surface-border">
          {industries.map((industry, index) => (
            <RevealOnScroll key={industry.slug} delay={(index % 6) * 40}>
              <div className="group flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:gap-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-950 transition-colors duration-300 group-hover:bg-accent-500">
                  <industry.icon
                    className="h-5 w-5 text-accent-500 transition-colors duration-300 group-hover:text-white"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-base font-semibold text-navy-950">{industry.title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted sm:max-w-2xl">
                    {industry.description}
                  </p>
                </div>
                <span className="hidden shrink-0 font-mono text-xs text-navy-200 sm:block">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <FinalCTA secondary={{ href: "/why-ossf", label: "Why organizations choose OSSF" }} />
    </>
  );
}
