import type { Metadata } from "next";
import { Info } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
        eyebrow="Gallery"
        title="A closer look at the work we do"
        description="Training, grooming and daily duty across security, fire safety, housekeeping, gardening, driving and technical services."
      />

      <Section tone="light">
        <SectionHeading
          eyebrow="Photo Gallery"
          title="Training, grooming and on-site work"
          description="Browse by category to see the kind of work our teams do every day."
          align="center"
          className="mx-auto"
        />
        <div className="mt-10">
          <GalleryGrid />
        </div>

        {galleryIsIllustrative ? (
          <p className="mx-auto mt-10 flex max-w-2xl items-start justify-center gap-2 text-center text-xs leading-relaxed text-ink-soft">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            Images on this page are illustrative and represent the type of services and training we
            provide.
          </p>
        ) : null}
      </Section>

      <FinalCTA secondary={{ href: "/services", label: "Explore our services" }} />
    </>
  );
}
