import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ClientLogoWall } from "@/components/sections/ClientLogoWall";
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

      <ClientLogoWall limit={8} className="mt-12" />

      <div className="mt-10 flex justify-center">
        <Button href="/clients" variant="secondary">
          View Our Clients
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>
    </Section>
  );
}
