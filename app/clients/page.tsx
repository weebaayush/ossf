import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { clientLogoSlots, clientShowcaseNote } from "@/lib/data/clients";
import { buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Clients",
  description:
    "OSSF supports 100+ client relationships across industrial, corporate, residential, hospitality and institutional sectors.",
  path: "/clients",
});

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="A growing base of client relationships"
        description="OSSF's internal company profile references 100+ client relationships across sectors. This page will show a curated, client-approved selection as approvals come through."
      />

      <Section tone="light">
        <SectionHeading
          eyebrow="Client Showcase"
          title="Approved client logos will appear here"
          description={clientShowcaseNote}
          align="center"
          className="mx-auto"
        />

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {clientLogoSlots.map((_, index) => (
            <div
              key={index}
              className="flex aspect-[3/2] items-center justify-center rounded-lg border border-dashed border-surface-border bg-surface-subtle text-ink-soft"
              aria-hidden="true"
            >
              <Building2 className="h-6 w-6" />
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-lg text-center text-xs text-ink-soft">
          No client names or logos have been published without explicit
          approval. Contact us if you&apos;d like your organization featured
          here.
        </p>
      </Section>

      <FinalCTA />
    </>
  );
}
