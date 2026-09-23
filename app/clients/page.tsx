import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { clientShowcaseNote } from "@/lib/data/clients";
import { ClientDirectory } from "@/components/sections/ClientDirectory";
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
          title="Our clientele"
          description="Organizations across real estate, healthcare, education, industry and commerce that OSSF provides security and facility services to."
          align="center"
          className="mx-auto"
        />

        <div className="mx-auto mt-10 max-w-6xl">
          <ClientDirectory />
        </div>

        <p className="mx-auto mt-12 max-w-xl text-center text-sm leading-relaxed text-ink-muted">
          {clientShowcaseNote}
        </p>
      </Section>

      <FinalCTA secondary={{ href: "/services", label: "Explore our services" }} />
    </>
  );
}
