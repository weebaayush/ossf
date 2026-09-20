import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { clientLogoSlots } from "@/lib/data/clients";
import { ArrowRight, Building2 } from "lucide-react";

export function ClientsTeaser() {
  return (
    <Section tone="light">
      <SectionHeading
        eyebrow="Trusted By"
        title="A growing base of client relationships"
        description="OSSF supports 100+ client relationships across sectors. A curated, client-approved selection is shown here as approvals come through."
        align="center"
      />

      <div className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        {clientLogoSlots.slice(0, 6).map((_, index) => (
          <div
            key={index}
            className="flex aspect-[3/2] items-center justify-center rounded-lg border border-dashed border-surface-border bg-surface-subtle text-ink-soft"
            aria-hidden="true"
          >
            <Building2 className="h-5 w-5" />
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
