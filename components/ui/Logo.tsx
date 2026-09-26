import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { siteConfig } from "@/lib/utils/site-config";

/**
 * The single place the site logo is rendered (Navbar + Footer).
 *
 * Official OSSF logo (approved by the client, supplied 26-09-2026). The
 * original file is public/brand/ossf-logo-original.png (500×500, on the brand
 * blue). The files used here are cut from it with the blue background made
 * transparent — nothing redrawn or recoloured:
 *   • ossf-mark.png           — the square mark
 *   • ossf-wordmark.png       — "OM SHIV / SECURITY FORCE"
 *   • ossf-logo-stacked.png   — mark + name + tagline, as in the original
 * For a sharper header on high-density screens, re-export these from the
 * design file at 2–3× size (or as SVG) with a transparent background and
 * update the width/height values below.
 */
const MARK = { src: "/brand/ossf-mark.png", width: 90, height: 89 };
const WORDMARK = { src: "/brand/ossf-wordmark.png", width: 306, height: 61 };
const STACKED = { src: "/brand/ossf-logo-stacked.png", width: 306, height: 212 };

export function Logo({
  variant = "nav",
  className,
}: {
  /** "nav": mark + name side by side. "footer": the full stacked logo with tagline. */
  variant?: "nav" | "footer";
  className?: string;
}) {
  if (variant === "footer") {
    return (
      <Image
        src={STACKED.src}
        width={STACKED.width}
        height={STACKED.height}
        alt={siteConfig.name}
        className={cn("h-auto w-40", className)}
      />
    );
  }

  return (
    <span className={cn("flex items-center gap-3", className)}>
      <Image
        src={MARK.src}
        width={MARK.width}
        height={MARK.height}
        alt=""
        priority
        className="h-10 w-10"
      />
      <Image
        src={WORDMARK.src}
        width={WORDMARK.width}
        height={WORDMARK.height}
        alt={siteConfig.name}
        priority
        className="h-7 w-auto"
      />
    </span>
  );
}
