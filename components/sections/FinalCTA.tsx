import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { formatPhone, siteConfig, telHref } from "@/lib/utils/site-config";

export function FinalCTA({
  secondary,
}: {
  /** Optional next step in the visitor journey, shown as a quiet text link. */
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="bg-band py-14 text-white md:py-16">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Tell us about your site</h2>
            <p className="mt-3 text-base leading-relaxed text-white/80">
              Share the location, the services you need and the number of staff or shifts. We will
              visit if needed and send a proposal. There is no charge for the quote.
            </p>
            {secondary ? (
              <Link
                href={secondary.href}
                className="link-underline mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white"
              >
                {secondary.label}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            ) : null}
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
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
  );
}
