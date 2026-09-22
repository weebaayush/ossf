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

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {clientNames.map((client, index) => (
            <RevealOnScroll key={client.name} delay={(index % 8) * 30}>
              <div className="flex h-full min-h-[88px] items-center justify-center rounded-lg border border-surface-border bg-white px-4 text-center transition-colors hover:border-navy-400/40">
                <span className="text-sm font-semibold text-navy-800">
                  {client.name}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-ink-muted">
          {clientShowcaseNote}
        </p>
      </Section>

      <FinalCTA />
    </>
  );
}
