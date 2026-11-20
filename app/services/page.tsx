import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { services } from "@/lib/data/services";
import { buildMetadata } from "@/lib/utils/seo";
import { imageSlots, serviceImages } from "@/lib/data/images";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export const metadata: Metadata = buildMetadata({
  title: "Security & Facility Management Services",
  description:
    "OSSF services: security guards, event and exhibition security, housekeeping and soft services, valet drivers, technical and non-technical manpower, and surveillance support.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Security, housekeeping and manpower from one agency"
        description="Verified, trained and supervised staff for your premises. Take one service or combine several under a single contract."
        image={imageSlots.servicesHero}
      />

      <div className="bg-page">
        <Container>
          {services.map((service) => {
            const image = serviceImages[service.slug];
            return (
              <section
                key={service.slug}
                id={service.slug}
                className="grid scroll-mt-24 grid-cols-1 gap-8 border-b border-line py-14 last:border-b-0 md:py-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14"
              >
                {image ? (
                  <PlaceholderImage
                    {...image}
                    ratio="aspect-[4/3]"
                    sizes="(min-width: 1024px) 36vw, 100vw"
                  />
                ) : null}
                <div>
                  <h2 className="text-2xl font-bold sm:text-3xl">{service.title}</h2>
                  <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-ink-muted">
                    {service.description}
                  </p>
                  <h3 className="mt-7 text-sm font-bold text-ink">What is included</h3>
                  <ul className="marker-list mt-3 grid grid-cols-1 gap-x-8 gap-y-2.5 text-[0.9375rem] text-ink-muted sm:grid-cols-2">
                    {service.capabilities.map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="link-underline mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
                  >
                    Full details: how we deliver {service.title.toLowerCase()}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </section>
            );
          })}
        </Container>
      </div>

      <FinalCTA secondary={{ href: "/industries", label: "Sectors we work in" }} />
    </>
  );
}
