import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { complianceItems } from "@/lib/data/compliance";
import { buildMetadata } from "@/lib/utils/seo";
import { Info } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Compliance",
  description:
    "OSSF operates under statutory compliance frameworks including PSARA licensing, GST, UDYAM, PF/EPF, ESIC, Professional Tax and Shops & Establishment registration.",
  path: "/compliance",
});

export default function CompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Compliance"
        title="Statutory compliance & licensing"
        description="A private security agency's compliance posture is foundational to how it can legally operate. Here's the framework OSSF operates under, as provided in our company registration documentation."
      />

      <Section tone="light">
        <SectionHeading
          eyebrow="Framework"
          title="Registrations & licences"
          description="Registration numbers below are as filed with the respective authorities. Full certificate copies are available to clients on request."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {complianceItems.map((item, index) => (
            <RevealOnScroll key={item.title} delay={(index % 6) * 50}>
              <div className="flex h-full flex-col gap-3 rounded-xl border border-surface-border bg-white p-6">
                <item.icon className="h-6 w-6 text-accent-500" aria-hidden="true" />
                <h2 className="text-sm font-semibold text-navy-950">
                  {item.title}
                </h2>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
                <p className="mt-auto pt-2 font-mono text-xs tracking-tight text-accent-600">
                  {item.value}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-10 flex items-start gap-3 rounded-xl border border-accent-100 bg-accent-50 p-5">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-accent-800">
            Scanned certificate copies are not published on the website but
            are available to prospective and existing clients on request —
            contact us via the details on our{" "}
            <a href="/contact" className="font-semibold underline">
              Contact page
            </a>
            .
          </p>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
