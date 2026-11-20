import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Plus } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { getService, services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import { serviceImages } from "@/lib/data/images";
import { buildMetadata } from "@/lib/utils/seo";
import { siteConfig } from "@/lib/utils/site-config";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: Props): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return buildMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
  });
}

export default function ServicePage({ params }: Props) {
  const service = getService(params.slug);
  if (!service) notFound();

  const sectors = industries.filter((industry) => industry.services.includes(service.slug));
  const otherServices = services.filter((other) => other.slug !== service.slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.seoDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
      provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title={service.title}
        description={service.description}
        image={serviceImages[service.slug]}
      />

      <Section tone="light">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">What clients need</h2>
            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-ink-muted">
              {service.need}
            </p>

            <h2 className="mt-12 text-2xl font-bold sm:text-3xl">What is included</h2>
            <ul className="marker-list mt-5 space-y-2.5 text-base text-ink-muted">
              {service.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">How we deliver it</h2>
            <ol className="mt-5 space-y-5">
              {service.delivery.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center bg-signal font-display text-sm font-bold text-signal-ink"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <p className="pt-0.5 text-base leading-relaxed text-ink-muted">{step}</p>
                </li>
              ))}
            </ol>
            <Button href="/request-a-quote" className="mt-8">
              Request a quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="subtle">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Sectors that take this service</h2>
            <ul className="marker-list mt-5 space-y-2.5 text-base">
              {sectors.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={`/industries#${industry.slug}`}
                    className="link-underline font-semibold text-ink hover:text-brand"
                  >
                    {industry.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Questions about this service</h2>
            <div className="mt-5 divide-y divide-line border-y border-line">
              {service.faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-bold text-ink [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <Plus
                      className="mt-1 h-4 w-4 shrink-0 text-ink-soft transition-transform duration-200 group-open:rotate-45"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="mt-3 max-w-[65ch] text-[0.9375rem] leading-relaxed text-ink-muted">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
            <p className="mt-5 text-sm text-ink-muted">
              How we verify, train and supervise staff is set out on the{" "}
              <Link href="/why-ossf" className="font-semibold text-brand underline">
                Why OSSF
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="light" className="py-12 md:py-16">
        <h2 className="text-xl font-bold sm:text-2xl">Other services</h2>
        <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-base">
          {otherServices.map((other) => (
            <li key={other.slug}>
              <Link
                href={`/services/${other.slug}`}
                className="link-underline font-semibold text-brand"
              >
                {other.title}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <FinalCTA secondary={{ href: "/services", label: "All services" }} />
    </>
  );
}
