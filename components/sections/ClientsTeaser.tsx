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

      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {clientNames.slice(0, 8).map((client) => (
          <div
            key={client.name}
            className="flex aspect-[3/2] items-center justify-center rounded-lg border border-surface-border bg-surface-subtle px-4 text-center"
          >
            <span className="text-sm font-semibold text-navy-700">
              {client.name}
            </span>
          </div>
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
