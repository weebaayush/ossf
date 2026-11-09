import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ClientLogoWall } from "@/components/sections/ClientLogoWall";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/utils/site-config";

export function ClientsTeaser() {
  return (
    <Section tone="light">
      <SectionHeading
        eyebrow="Our Clients"
        title="Trusted by developers, hospitals, schools and businesses"
        description={`${siteConfig.clientCount} organizations rely on OSSF, including the names below.`}
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
