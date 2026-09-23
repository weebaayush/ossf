import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { footerNav } from "@/lib/data/nav";
import { services } from "@/lib/data/services";
import { siteConfig, telHref } from "@/lib/utils/site-config";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-800 bg-navy-950 text-white/70">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="flex w-fit items-center gap-2.5 text-white"
              aria-label="OSSF — Om Shiv Security Force home"
            >
              <Logo variant="footer" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {siteConfig.name} — PSARA-licensed security and facility
              management services, established {siteConfig.foundingYear} in
              Thane.
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
                    href={`/services#${service.slug}`}
                    className="link-underline hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                <span>
                  {siteConfig.address.line1}, {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.locality}, {siteConfig.address.region}{" "}
                  {siteConfig.address.postalCode}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                <span>
                  <a href={telHref(siteConfig.phone)} className="hover:text-white">
                    {siteConfig.phone}
                  </a>
                  {" / "}
                  <a href={telHref(siteConfig.phoneSecondary)} className="hover:text-white">
                    {siteConfig.phoneSecondary}
                  </a>
                </span>
              </li>
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="break-all hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <Link
              href="/request-a-quote"
              className="link-underline mt-5 inline-block text-sm font-semibold text-white"
            >
              Request a Quote <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
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
