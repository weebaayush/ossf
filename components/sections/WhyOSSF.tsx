import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { differentiators } from "@/lib/data/differentiators";
import { imageSlots } from "@/lib/data/images";

/**
 * How OSSF runs a deployment. On the homepage: the first six points beside a
 * photo. With `showAll` (the Why OSSF page): every point in two columns.
 */
export function WhyOSSF({ showAll = false }: { showAll?: boolean }) {
  if (showAll) {
    return (
      <Section tone="light">
        <SectionHeading
          title="How we run a deployment"
          description="The same practices apply on every site, whichever service you take."
        />
        <dl className="mt-10 grid grid-cols-1 gap-x-12 sm:grid-cols-2">
          {differentiators.map((item) => (
            <div key={item.title} className="border-t border-line py-5">
              <dt className="text-base font-bold text-ink">{item.title}</dt>
              <dd className="mt-1 text-[0.9375rem] leading-relaxed text-ink-muted">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </Section>
    );
  }

  return (
    <Section tone="subtle">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <SectionHeading
            title="How we run a site"
            description="Staff on a site are only as good as their verification, training and supervision. These are the practices we follow on every deployment."
          />
          <PlaceholderImage {...imageSlots.homeAbout} ratio="aspect-[4/3]" className="mt-8" />
        </div>

        <div>
          <dl>
            {differentiators.slice(0, 6).map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-1 gap-1 border-t border-line py-5 first:border-t-0 first:pt-0 sm:grid-cols-[13rem_1fr] sm:gap-6"
              >
                <dt className="text-base font-bold text-ink">{item.title}</dt>
                <dd className="text-[0.9375rem] leading-relaxed text-ink-muted">
                  {item.description}
                </dd>
              </div>
            ))}
          </dl>
          <Link
            href="/why-ossf"
            className="link-underline mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
          >
            Recruitment, training and supervision in detail
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
