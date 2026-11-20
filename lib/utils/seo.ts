import type { Metadata } from "next";
import { siteConfig } from "./site-config";

/** Social share image (1200×630 PNG, official logo on the brand blue). To change it,
 *  replace the file - no code change needed. */
export const ogImage = {
  url: "/images/og-image.png",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} | ${siteConfig.tagline}`,
};

/**
 * Routes kept out of search results and the sitemap (`noindex`). Add a route
 * here while its content is awaiting client approval. Empty since OSSF
 * approved the Privacy Policy and Terms on 21-11-2026.
 */
export const noIndexRoutes: string[] = [];

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
