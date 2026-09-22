import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/lib/utils/site-config";

const atAGlance = [
  { label: "Founded", value: String(siteConfig.foundingYear) },
  { label: "Licence", value: "PSARA" },
  { label: "Coverage", value: `${siteConfig.serviceAreas.length} States & Regions` },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-navy-950">
      {/* Background: swap for real photography at /images/hero/ (see PlaceholderImage usage) */}
      <PlaceholderImage label="Hero image — OSSF site photography" fill rounded={false} />
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
      <div className="absolute inset-0 bg-navy-radial" aria-hidden="true" />

      <Container className="relative z-10 pb-20 pt-40 sm:pb-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.8fr)] lg:items-end">
          <div>
            <Badge tone="dark" className="mb-6">
              PSARA Licensed · Established {siteConfig.foundingYear}
            </Badge>
            <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
              Security and facility management, run with operational discipline.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Om Shiv Security Force deploys trained, police-verified
              personnel — including ex-servicemen — across industrial,
              corporate, residential and institutional sites in Maharashtra,
              Mumbai, Thane, Goa, Gujarat and Daman.
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
          </div>

          <div className="hidden rounded-2xl border border-white/15 bg-navy-950/80 p-7 lg:block">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              At a Glance
            </span>
            <dl className="mt-5 divide-y divide-white/10">
              {atAGlance.map((item) => (
                <div key={item.label} className="flex items-baseline justify-between py-3.5 first:pt-0 last:pb-0">
                  <dt className="text-sm text-white/60">{item.label}</dt>
                  <dd className="text-lg font-semibold text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
