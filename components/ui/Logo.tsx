import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { siteConfig } from "@/lib/utils/site-config";

/**
 * The single place the site logo is rendered (Navbar + Footer).
 *
 * The official OSSF logo has not been supplied yet, so this renders the
 * interim text mark (red tile + "OSSF"). When the official file arrives:
 *   1. Add it to /public/brand/ (transparent SVG preferred, see its README).
 *   2. Set OFFICIAL_LOGO below to its path and real pixel dimensions.
 * Navbar and Footer pick it up automatically — no other component changes.
 */
const OFFICIAL_LOGO: { src: string; width: number; height: number } | null = null;

export function Logo({
  variant = "nav",
  className,
}: {
  /** "nav" also shows the company name under "OSSF" on ≥ sm screens. */
  variant?: "nav" | "footer";
  className?: string;
}) {
  if (OFFICIAL_LOGO) {
    return (
      <Image
        src={OFFICIAL_LOGO.src}
        width={OFFICIAL_LOGO.width}
        height={OFFICIAL_LOGO.height}
        alt={siteConfig.name}
        priority={variant === "nav"}
        className={cn("h-10 w-auto", className)}
      />
    );
  }

  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent-500">
        <ShieldCheck className="h-5 w-5 text-white" aria-hidden="true" />
      </span>
      {variant === "nav" ? (
        <span className="flex flex-col leading-tight">
          <span className="text-sm font-bold tracking-wide">{siteConfig.shortName}</span>
          <span className="hidden whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.14em] text-white/60 sm:block">
            {siteConfig.name}
          </span>
        </span>
      ) : (
        <span className="text-sm font-bold tracking-wide">{siteConfig.shortName}</span>
      )}
    </span>
  );
}
