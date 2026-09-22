import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { clientNames, clientShowcaseNote } from "@/lib/data/clients";
import { buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Clients",
  description:
    "OSSF supports 100+ client relationships across industrial, corporate, residential, hospitality and institutional sectors, including Lodha, Runwal Realty, KIMS Hospitals and more.",
  path: "/clients",
});

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="A growing base of client relationships"
        description="A selection of the organizations OSSF works with, drawn from our company profile."
      />

      <Section tone="light">
        <SectionHeading
          eyebrow="Client Showcase"
          title="Organizations we work with"
          align="center"
          className="mx-auto"
        />

        <RevealOnScroll className="mx-auto mt-12 flex max-w-5xl flex-wrap items-baseline justify-center gap-x-10 gap-y-6 border-y border-surface-border py-12">
          {clientNames.map((client) => (
            <span
              key={client.name}
              className="font-display text-xl font-semibold text-navy-300 transition-colors hover:text-navy-950 sm:text-2xl"
            >
              {client.name}
            </span>
          ))}
        </RevealOnScroll>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-ink-muted">
          {clientShowcaseNote}
        </p>
      </Section>

      <FinalCTA />
    </>
  );
}
