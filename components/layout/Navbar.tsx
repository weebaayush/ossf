"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { primaryNav } from "@/lib/data/nav";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const solid = scrolled || open;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "bg-navy-950/95 shadow-lifted backdrop-blur-sm"
          : "bg-gradient-to-b from-navy-950/70 to-transparent"
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-8xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-white"
          aria-label="OSSF — Om Shiv Security Force home"
        >
          <Logo variant="nav" />
        </Link>

        <nav
          className="hidden items-center gap-5 lg:flex xl:gap-8"
          aria-label="Primary navigation"
        >
          {primaryNav.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "link-underline whitespace-nowrap text-sm font-medium transition-colors",
                  active ? "text-white after:w-full" : "text-white/75 hover:text-white"
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/request-a-quote" size="md" className="whitespace-nowrap">
            Request a Quote
          </Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-controls="mobile-menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white lg:hidden"
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
          className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-white/10 bg-navy-950 px-5 pb-6 pt-2 sm:px-8 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {primaryNav.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center rounded-md border-l-2 px-3 py-3 text-base font-medium hover:bg-white/5 hover:text-white",
                    active
                      ? "border-accent-500 bg-white/[0.04] text-white"
                      : "border-transparent text-white/80"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <Button href="/request-a-quote" className="mt-4 w-full">
            Request a Quote
          </Button>
        </div>
      ) : null}
    </header>
  );
}
