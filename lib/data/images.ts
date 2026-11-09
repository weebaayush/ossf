// Single registry of every photography slot on the site.
// Photos refreshed 06-10-2026 to brighter, daytime images at the client's request.
//
// IMPORTANT — what these photos are:
// No real OSSF photography has been supplied yet. Slots with a local
// /images/gallery/ path use AI-generated images of Indian staff (see
// lib/data/gallery.ts); the rest use licensed Unsplash stock photographs purely
// as background/atmosphere. None of them
// show OSSF employees, guards, offices, clients, sites or projects, so:
//   • never caption them as "our team", "our guards", "our facility", etc.;
//   • keep alt text neutral (describe what is literally in the photo).
// Full source/licence records: docs/image-sources.md.
//
// Swapping in client-approved OSSF photography later:
//   1. Put the file in /public/images/<folder>/ (see public/images/README.md).
//   2. Replace that slot's `src`, `alt` and `credit` below.
// Layout, aspect ratio and cropping stay the same — no component changes.
// Removing `src` falls back to the labelled placeholder panel.
//
// Remote Unsplash URLs are served through next/image (see `images.remotePatterns`
// in next.config.mjs). The `rect` query parameter pre-crops a photo where
// needed (e.g. to keep flags or third-party signage out of frame); `w` caps the
// size next/image downloads from the CDN.

export type ImageCredit = {
  source: "Unsplash";
  /** Photo page on the source site. */
  pageUrl: string;
  photographer: string;
  photographerUrl: string;
  license: string;
};

export type ImageSlot = {
  /** Internal label shown inside the placeholder panel when no `src` is set. */
  label: string;
  /** Local path under /public or an allowed remote URL. Undefined = placeholder. */
  src?: string;
  /**
   * Alt text describing what the photo literally shows. Use "" for purely
   * decorative backgrounds (e.g. behind the hero headline).
   */
  alt: string;
  /** CSS object-position for the crop focal point, e.g. "50% 30%". Default: center. */
  objectPosition?: string;
  credit?: ImageCredit;
};

export const imageSlots = {
  // Full-bleed background behind the homepage headline — decorative.
  homeHero: {
    label: "Hero photograph",
    src: "/images/hero/home-hero-building.webp",
    alt: "",
    objectPosition: "65% 50%",
  },
  homeAbout: {
    label: "Training photograph",
    src: "/images/gallery/21-fire-drill-training.webp",
    alt: "Security team watching a guard put out a training fire with an extinguisher",
  },
  homeFlagshipService: {
    label: "Security services photograph",
    src: "/images/gallery/19-hospital-security.webp",
    alt: "Security guard greeting an elderly patient and his family in a hospital lobby",
    objectPosition: "50% 35%",
  },
  aboutHero: {
    label: "Team photograph",
    src: "/images/gallery/16-security-team.webp",
    alt: "A team of uniformed security guards with their supervisor outside a corporate building",
    objectPosition: "50% 60%",
  },
  aboutOperations: {
    label: "Training photograph",
    src: "/images/gallery/01-security-guard-training.webp",
    alt: "Security guards in uniform attending a classroom training session",
  },
  servicesHero: {
    label: "Office building photograph",
    src: "/images/services/services-hero-building.webp",
    alt: "Modern office building entrance with a security cabin and landscaped driveway",
  },
} satisfies Record<string, ImageSlot>;

/**
 * One photo per service, keyed by the service `slug` in lib/data/services.ts.
 * Shown on the /services page. A service without an entry shows no photo.
 */
export const serviceImages: Record<string, ImageSlot> = {
  "security-services": {
    label: "Security guard photograph",
    src: "/images/gallery/20-campus-patrol.webp",
    alt: "Two security guards patrolling an IT park campus",
  },
  "event-and-exhibition-security": {
    label: "Crowd security photograph",
    src: "/images/gallery/26-mall-entrance-security.webp",
    alt: "Security guard with a walkie-talkie standing at the glass entrance of a busy shopping mall",
    objectPosition: "40% 40%",
  },
  "housekeeping-and-soft-services": {
    label: "Housekeeping photograph",
    src: "/images/gallery/07-housekeeping-deep-cleaning.webp",
    alt: "Housekeeping staff deep-cleaning a corridor floor with a scrubbing machine",
  },
  "valet-driver-services": {
    label: "Valet photograph",
    src: "/images/gallery/17-executive-arrival.webp",
    alt: "Staff in suits opening a car door for a guest at a hotel entrance",
    objectPosition: "60% 50%",
  },
  "technical-and-non-technical-manpower": {
    label: "Manpower photograph",
    src: "/images/gallery/12-electrician.webp",
    alt: "Electrician in a helmet and gloves working on an electrical panel",
  },
  "surveillance-and-risk-assessment": {
    label: "CCTV photograph",
    src: "/images/services/surveillance-control-room.webp",
    alt: "Two security guards monitoring CCTV camera feeds in a security control room",
    objectPosition: "45% 50%",
  },
};
