import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-navy-950">
      {/* Background: swap for real photography at /images/hero/ (see PlaceholderImage usage) */}
      <PlaceholderImage label="Hero image — OSSF site photography" fill rounded={false} />
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
      <div className="absolute inset-0 bg-navy-radial" aria-hidden="true" />

      <Container className="relative z-10 pb-20 pt-40 sm:pb-24">
        <Badge tone="dark" className="mb-6">
          Professional Security &amp; Facility Management
        </Badge>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
          Protecting people, property and business operations.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
          OSSF delivers trained, disciplined security and facility management
          professionals for organizations across Maharashtra — built on
          verification, supervision and dependable service delivery.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button href="/request-a-quote" size="lg">
            Request a Quote
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button href="/services" variant="outline-light" size="lg">
            Explore Services
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
