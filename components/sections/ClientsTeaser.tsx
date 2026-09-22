import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { clientNames } from "@/lib/data/clients";
import { ArrowRight } from "lucide-react";

export function ClientsTeaser() {
  return (
    <Section tone="light">
      <SectionHeading
        eyebrow="Trusted By"
        title="A growing base of client relationships"
        description="OSSF supports 100+ client relationships across sectors, including the organizations below."
        align="center"
      />

      <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-baseline justify-center gap-x-8 gap-y-5 border-y border-surface-border py-10">
        {clientNames.slice(0, 14).map((client) => (
          <span
            key={client.name}
            className="font-display text-lg font-semibold text-navy-300 transition-colors hover:text-navy-950 sm:text-xl"
          >
            {client.name}
          </span>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button href="/clients" variant="secondary">
          View Our Clients
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </Section>
  );
}
