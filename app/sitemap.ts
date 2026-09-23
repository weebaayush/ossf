import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/utils/site-config";
import { noIndexRoutes } from "@/lib/utils/seo";

const routes = [
  "",
  "/about",
  "/services",
  "/industries",
  "/why-ossf",
  "/clients",
  "/compliance",
  "/contact",
  "/request-a-quote",
  "/privacy-policy",
  "/terms-of-service",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes
    .filter((route) => !noIndexRoutes.includes(route))
    .map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.7,
    }));
}
