import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { galleryIsIllustrative } from "@/lib/data/gallery";
import { buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Gallery",
  description:
    "Photos of the work behind OSSF services: security guard training, patrolling and hospital and mall security, fire safety drills, housekeeping, gardening, drivers and technical maintenance.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Training and work on site"
        description="Security, fire safety, housekeeping, gardening, driving and technical services. Use the filters to browse by category."
      />

      <Section tone="light">
        <GalleryGrid />

        {galleryIsIllustrative ? (
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Images on this page are illustrative and represent the type of services and training we
            provide.
          </p>
        ) : null}
      </Section>

      <FinalCTA secondary={{ href: "/services", label: "See our services" }} />
    </>
  );
}
