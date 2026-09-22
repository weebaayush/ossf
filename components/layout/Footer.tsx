import Link from "next/link";
import { ShieldCheck, Phone, Mail, MapPin } from "lucide-react";
import { primaryNav } from "@/lib/data/nav";
import { services } from "@/lib/data/services";
import { siteConfig } from "@/lib/utils/site-config";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-800 bg-navy-950 text-white/70">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent-500">
                <ShieldCheck className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <span className="text-sm font-bold tracking-wide">OSSF</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Navigation</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {primaryNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-underline hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/compliance" className="link-underline hover:text-white">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 6).map((service) => (
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
            <h3 className="text-sm font-semibold text-white">Contact</h3>
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
                  {siteConfig.phone} / {siteConfig.phoneSecondary}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                <span>{siteConfig.email}</span>
              </li>
            </ul>
            <Link
              href="/request-a-quote"
              className="link-underline mt-4 inline-block text-sm font-semibold text-white"
            >
              Request a Quote →
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Om Shiv Security Force. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
