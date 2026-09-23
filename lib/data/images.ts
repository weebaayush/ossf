// Single registry of every photography slot on the site.
//
// IMPORTANT — what these photos are:
// No OSSF photography has been supplied yet. The slots below use licensed
// stock photographs from Unsplash purely as background/atmosphere. They do NOT
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

const UNSPLASH_LICENSE = "Unsplash License (free commercial use, no attribution required) — https://unsplash.com/license";

export const imageSlots = {
  // Full-bleed background behind the homepage headline — decorative.
  homeHero: {
    label: "Hero photograph",
    src: "https://images.unsplash.com/photo-1778598781431-292f23cd7e79?rect=0,560,4926,2724&w=2400&q=80&fm=jpg",
    alt: "",
    credit: {
      source: "Unsplash",
      pageUrl: "https://unsplash.com/photos/modern-dark-office-building-with-many-windows-JUdN1-BssnY",
      photographer: "Mariia Filonenko",
      photographerUrl: "https://unsplash.com/@fsmari",
      license: UNSPLASH_LICENSE,
    },
  },
  homeAbout: {
    label: "Interior photograph",
    src: "https://images.unsplash.com/photo-1764539780901-0a13bf4f4182?w=1600&q=80&fm=jpg",
    alt: "Dimly lit modern office corridor with a polished floor and glass doors",
    credit: {
      source: "Unsplash",
      pageUrl: "https://unsplash.com/photos/dark-modern-hallway-with-reflective-floor-and-windows-G8EdTmFZ138",
      photographer: "Igor Saikin",
      photographerUrl: "https://unsplash.com/@alteredpoint",
      license: UNSPLASH_LICENSE,
    },
  },
  homeFlagshipService: {
    label: "Security services photograph",
    src: "https://images.unsplash.com/photo-1680714246510-94d1055e4a8b?w=1600&q=80&fm=jpg",
    alt: "Person in a reflective uniform jacket standing watch outside a building at night",
    // Keeps the figure's head and shoulders in frame in the short, wide card crop.
    objectPosition: "50% 30%",
    credit: {
      source: "Unsplash",
      pageUrl: "https://unsplash.com/photos/a-man-standing-on-a-sidewalk-in-front-of-a-building-wQ4Ae4uxfvM",
      photographer: "Ben Wicks",
      photographerUrl: "https://unsplash.com/@profwicks",
      license: UNSPLASH_LICENSE,
    },
  },
  aboutHero: {
    label: "Industrial site photograph",
    // Right edge cropped out to exclude a vehicle with third-party lettering.
    src: "https://images.unsplash.com/photo-1730651626256-7d1ef80ea1e6?rect=0,0,3800,2832&w=1600&q=80&fm=jpg",
    alt: "Fenced industrial facility and entrance gate lit by a street lamp at night",
    credit: {
      source: "Unsplash",
      pageUrl: "https://unsplash.com/photos/a-street-at-night-with-a-fence-and-a-building-in-the-background-nhxNv2xfatw",
      photographer: "Patrick von der Wehd",
      photographerUrl: "https://unsplash.com/@patrick_von_der_wehd",
      license: UNSPLASH_LICENSE,
    },
  },
  aboutOperations: {
    label: "Surveillance photograph",
    src: "https://images.unsplash.com/photo-1481597262637-0545b18186ea?w=1600&q=80&fm=jpg",
    alt: "Ceiling-mounted surveillance camera beside a strip light",
    credit: {
      source: "Unsplash",
      pageUrl: "https://unsplash.com/photos/white-security-camera-B0--kMa8BgU",
      photographer: "Alex Knight",
      photographerUrl: "https://unsplash.com/@agk42",
      license: UNSPLASH_LICENSE,
    },
  },
  servicesHero: {
    label: "CCTV photograph",
    src: "https://images.unsplash.com/photo-1563920443079-783e5c786b83?w=1600&q=80&fm=jpg",
    alt: "Two CCTV cameras mounted on a dark ribbed building facade",
    credit: {
      source: "Unsplash",
      pageUrl: "https://unsplash.com/photos/two-grey-cctv-cameras-BW0d0IllW8E",
      photographer: "Miłosz Klinowski",
      photographerUrl: "https://unsplash.com/@speedoshots",
      license: UNSPLASH_LICENSE,
    },
  },
} satisfies Record<string, ImageSlot>;
