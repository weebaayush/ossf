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
    <>
      <section className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-band-deep lg:min-h-[640px]">
        <HeroSlideshow slides={homeHeroSlides} />
        {/* Logo-blue tint so the white text stays readable over any photo:
            even across the photo on phones, fading out to the right on wide
            screens so the photo stays bright. */}
        <div
          className="absolute inset-0 bg-band-deep/75 lg:bg-transparent lg:bg-gradient-to-r lg:from-band-deep/90 lg:via-band-deep/60 lg:to-band-deep/0"
          aria-hidden="true"
        />

        <Container className="relative z-10 py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-signal">
              Security and integrated facility management
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
              Security and facility management for businesses and residential communities
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90">
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
                className="inline-flex items-center gap-2 text-base font-semibold text-white hover:underline"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">Call </span>
                {formatPhone(siteConfig.phone)}
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-panel" aria-label="Company facts">
        <Container>
          <dl className="grid grid-cols-2 lg:grid-cols-4">
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
    </>
  );
}
