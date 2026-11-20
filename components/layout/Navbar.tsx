"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { primaryNav } from "@/lib/data/nav";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";
import { formatPhone, siteConfig, telHref } from "@/lib/utils/site-config";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-panel/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] w-full max-w-[78rem] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label={`${siteConfig.name} home`}
        >
          <Logo variant="nav" />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
          {primaryNav.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "link-underline whitespace-nowrap text-[0.9375rem] font-medium transition-colors",
                  active ? "text-ink after:w-full" : "text-ink-muted hover:text-ink"
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 xl:flex">
          <a
            href={telHref(siteConfig.phone)}
            className="inline-flex items-center gap-2 whitespace-nowrap text-[0.9375rem] font-semibold text-ink hover:text-brand"
          >
            <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
            <span className="sr-only">Call </span>
            {formatPhone(siteConfig.phone)}
          </a>
          <Button href="/request-a-quote">Request a quote</Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-controls="mobile-menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-line bg-panel px-5 pb-6 pt-2 sm:px-8 xl:hidden"
        >
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {primaryNav.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "border-b border-line py-3.5 text-base font-medium",
                    active ? "text-ink" : "text-ink-muted hover:text-ink"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <Button href="/request-a-quote" className="mt-5 w-full">
            Request a quote
          </Button>
          <a
            href={telHref(siteConfig.phone)}
            className="mt-4 flex items-center justify-center gap-2 text-base font-semibold text-ink"
          >
            <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
            <span className="sr-only">Call </span>
            {formatPhone(siteConfig.phone)}
          </a>
        </div>
      ) : null}
    </header>
  );
}
