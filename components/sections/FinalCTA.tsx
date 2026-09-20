import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/utils/site-config";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 md:py-24">
      <div className="absolute inset-0 bg-navy-radial" aria-hidden="true" />
      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Looking for reliable security or facility management support?
            </h2>
            <p className="mt-3 text-sm text-white/65">
              Tell us about your site and requirements — we&apos;ll respond with a
              tailored proposal.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/request-a-quote" size="lg">
              Request a Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-white/75 hover:text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
