import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { footerNav } from "@/lib/data/nav";
import { services } from "@/lib/data/services";
import { formatPhone, siteConfig, telHref } from "@/lib/utils/site-config";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-band-deep text-white/75">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1.1fr_1.3fr]">
          <div>
            <Link href="/" className="block w-fit" aria-label={`${siteConfig.name} home`}>
              <Logo variant="footer" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              PSARA-licensed security and integrated facility management company, established in{" "}
              {siteConfig.foundingYear}.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Company</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-underline hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Services</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="link-underline hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Office</h2>
            <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed">
              <p>
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
                <br />
                {siteConfig.address.locality}, {siteConfig.address.region}{" "}
                {siteConfig.address.postalCode}
              </p>
              <p>
                <a href={telHref(siteConfig.phone)} className="text-white hover:underline">
                  {formatPhone(siteConfig.phone)}
                </a>
                <br />
                <a href={telHref(siteConfig.phoneSecondary)} className="text-white hover:underline">
                  {formatPhone(siteConfig.phoneSecondary)}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all text-white hover:underline"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>Office hours: {siteConfig.businessHours.officeEnquiries}</p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
