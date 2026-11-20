import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { services } from "@/lib/data/services";
import { serviceImages } from "@/lib/data/images";

export function ServicesGrid() {
  return (
    <Section tone="light">
      <SectionHeading
        title="Services"
        description="Take one service, or combine several under one contract with a single invoice and point of contact."
      />

      <ul className="mt-10 grid grid-cols-1 gap-x-12 md:grid-cols-2">
        {services.map((service) => {
          const image = serviceImages[service.slug];
          return (
            <li key={service.slug} className="border-t border-line">
              <Link
                href={`/services/${service.slug}`}
                className="group flex items-start gap-5 py-6"
              >
                {image ? (
                  <PlaceholderImage
                    {...image}
                    ratio="aspect-[4/3]"
                    className="w-28 shrink-0 rounded-md sm:w-36"
                    sizes="144px"
                  />
                ) : null}
                <div className="min-w-0">
                  <h3 className="text-lg font-bold group-hover:text-brand">{service.title}</h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-muted">
                    {service.shortDescription}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      <Link
        href="/services"
        className="link-underline mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
      >
        What each service includes
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </Link>
    </Section>
  );
}
