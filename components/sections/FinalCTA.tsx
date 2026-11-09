import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig, telHref } from "@/lib/utils/site-config";

export function FinalCTA({
  secondary,
}: {
  /** Optional next step in the visitor journey, shown as a quiet text link. */
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="surface-dark surface-strong relative overflow-hidden bg-navy-950 py-20 md:py-24">
      <div className="absolute inset-0 bg-navy-radial" aria-hidden="true" />
      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Ready for a security partner you can rely on?
            </h2>
            <p className="mt-3 text-sm text-white/65">
              Tell us about your site. We&apos;ll plan the right staffing and send a clear,
              no-obligation proposal.
            </p>
            {secondary ? (
              <Link
                href={secondary.href}
                className="link-underline mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white"
              >
                {secondary.label}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            ) : null}
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button href="/request-a-quote" size="lg">
              Get a Free Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <a
              href={telHref(siteConfig.phone)}
              className="inline-flex items-center gap-2 text-sm font-medium text-white/75 hover:text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">Call </span>
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
