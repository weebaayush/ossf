import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { services } from "@/lib/data/services";
import { buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "OSSF service overview: security services, electronic surveillance consultation, security consulting, facility support, office management support and supervision & inspections.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Security & facility management services"
        description="Detailed service categories covering the full scope of OSSF's operational offering — deployed and tailored to each client site."
      />

      {services.map((service, index) => (
        <Section
          key={service.slug}
          id={service.slug}
          tone={index % 2 === 0 ? "light" : "subtle"}
          className="scroll-mt-24"
        >
          <RevealOnScroll>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-950">
                  <service.icon className="h-6 w-6 text-accent-500" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-navy-950 sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>
              </div>
              <div className="rounded-xl border border-surface-border bg-white p-6">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                  What this covers
                </h3>
                <ul className="mt-4 space-y-3">
                  {service.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-2.5 text-sm text-ink-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </Section>
      ))}

      <FinalCTA />
    </>
  );
}
