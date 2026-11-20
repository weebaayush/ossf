import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroSlideshow } from "@/components/sections/HeroSlideshow";
import { formatPhone, siteConfig, telHref } from "@/lib/utils/site-config";
import { homeHeroSlides } from "@/lib/data/images";

const facts = [
  { value: String(siteConfig.foundingYear), label: "Year established" },
  { value: "PSARA", label: "Licensed security agency" },
  { value: siteConfig.clientCount, label: "Clients served" },
  { value: "24 × 365", label: "Operations, holidays included" },
];

export function Hero() {
  return (
    <section className="bg-panel">
      <Container className="grid grid-cols-1 gap-10 pb-12 pt-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-14 lg:pb-16 lg:pt-16">
        <div>
          <p className="text-sm font-semibold text-brand">
            Security and integrated facility management
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl">
            Security and facility management for businesses and residential communities
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
            {siteConfig.name} provides security guards, housekeeping and support manpower to
            organisations and housing societies. Our staff are police verified, trained before
            deployment and supervised on site.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button href="/request-a-quote" size="lg">
              Request a quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <a
              href={telHref(siteConfig.phone)}
              className="inline-flex items-center gap-2 text-base font-semibold text-ink hover:text-brand"
            >
              <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
              <span className="sr-only">Call </span>
              {formatPhone(siteConfig.phone)}
            </a>
          </div>
        </div>

        <HeroSlideshow slides={homeHeroSlides} />
      </Container>

      <Container>
        <dl className="grid grid-cols-2 border-t border-line lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="py-6 pr-6 lg:py-8">
              <dd className="font-display text-2xl font-bold text-ink [font-stretch:108%] sm:text-3xl">
                {fact.value}
              </dd>
              <dt className="mt-1 text-sm text-ink-muted">{fact.label}</dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
