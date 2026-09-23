import type { Metadata } from "next";
import { siteConfig } from "./site-config";

/** Social share image (1200×630 PNG). Replace the file with a branded photo-based
 *  version once real photography is approved — no code change needed. */
export const ogImage = {
  url: "/images/og-image.png",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — ${siteConfig.tagline}`,
};

/**
 * Routes whose content is still awaiting client approval. The Terms and
 * Privacy pages now contain a basic drafted policy, but OSSF has not yet
 * approved the wording, so they stay `noindex` and out of the sitemap. They
 * remain reachable from the footer and are linked from the site. Remove a
 * route from this list once OSSF approves its content.
 */
export const noIndexRoutes = ["/privacy-policy", "/terms-of-service"];

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string;
  /** Use the title as-is instead of applying the "%s | OSSF" template. */
  absoluteTitle?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: BuildMetadataArgs): Metadata {
  const url = `${siteConfig.url}${path}`;
  const socialTitle = absoluteTitle ? title : `${title} | ${siteConfig.shortName}`;
  const noIndex = noIndexRoutes.includes(path);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [ogImage.url],
    },
  };
}
