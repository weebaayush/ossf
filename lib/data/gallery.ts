// Gallery page (/gallery): photo slots, grouped by category.
//
// HOW TO ADD A PHOTO
//   1. Save the image in /public/images/gallery/ with the `file` name below
//      (landscape 4:3 works best, e.g. 1600×1200, as .webp or .jpg).
//   2. Set that slot's `src` to "/images/gallery/<file>".
//   Slots without `src` are hidden from the page (and so are categories with
//   no photos yet), so the gallery never shows empty placeholders.
//
// AI-GENERATED IMAGES: every photo here is AI-generated (Gamma, Canva, the
// client-supplied set in OSSF-AI-Generated-Photos.pdf, 02-11-2026, and crops
// of client-supplied poster images, 09-11-2026). While
// `galleryIsIllustrative` is true, the page states that the images are
// illustrative, so visitors are not led to think they show real OSSF staff
// or sites. Set it to false only once every image is a real OSSF photo.
// Prompts for further images: docs/gallery-prompts.md.

export const galleryIsIllustrative = true;

export type GalleryCategory =
  "security" | "fire-safety" | "housekeeping" | "gardening" | "drivers" | "technical";

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: "security", label: "Security" },
  { id: "fire-safety", label: "Fire Safety Training" },
  { id: "housekeeping", label: "Housekeeping" },
  { id: "gardening", label: "Gardening" },
  { id: "drivers", label: "Drivers" },
  { id: "technical", label: "Technical Services" },
];

export type GalleryItem = {
  /** File name to save in /public/images/gallery/. */
  file: string;
  /** Set to "/images/gallery/<file>" once the image is added. */
  src?: string;
  category: GalleryCategory;
  title: string;
  /** Describes what the image shows (also used as alt text). */
  alt: string;
};

/** Every slot, including ones still waiting for a photo. */
export const gallerySlots: GalleryItem[] = [
  {
    file: "16-security-team.webp",
    src: "/images/gallery/16-security-team.webp",
    category: "security",
    title: "Security team",
    alt: "A team of uniformed security guards standing with their supervisor outside a corporate building",
  },
  {
    file: "01-security-guard-training.webp",
    src: "/images/gallery/01-security-guard-training.webp",
    category: "security",
    title: "Classroom training session",
    alt: "Security guards in uniform attending a classroom training session led by an instructor",
  },
  {
    file: "24-self-defence-training.webp",
    src: "/images/gallery/24-self-defence-training.webp",
    category: "security",
    title: "Self-defence and first aid training",
    alt: "Trainer addressing seated security guards in front of self-defence, fire safety and first aid training posters",
  },
  {
    file: "25-duty-briefing.webp",
    src: "/images/gallery/25-duty-briefing.webp",
    category: "security",
    title: "Duty briefing",
    alt: "Supervisor briefing security guards beside a board listing training modules",
  },
  {
    file: "23-client-consultation.webp",
    src: "/images/gallery/23-client-consultation.webp",
    category: "security",
    title: "Planning a deployment with a client",
    alt: "OSSF managers in blazers discussing a security plan at a meeting table",
  },
  {
    file: "02-security-grooming-inspection.webp",
    category: "security",
    title: "Uniform and grooming inspection",
    alt: "Supervisor inspecting the uniform and grooming of a line of security guards",
  },
  {
    file: "03-security-drill.webp",
    category: "security",
    title: "Morning drill and discipline",
    alt: "Security guards standing in formation during a morning drill in a residential compound",
  },
  {
    file: "18-mall-security.webp",
    src: "/images/gallery/18-mall-security.webp",
    category: "security",
    title: "Retail and mall security",
    alt: "Woman security guard with a walkie-talkie on duty in a busy shopping mall",
  },
  {
    file: "26-mall-entrance-security.webp",
    src: "/images/gallery/26-mall-entrance-security.webp",
    category: "security",
    title: "Mall entrance security",
    alt: "Security guard with a walkie-talkie standing at the glass entrance of a shopping mall",
  },
  {
    file: "19-hospital-security.webp",
    src: "/images/gallery/19-hospital-security.webp",
    category: "security",
    title: "Hospital security",
    alt: "Security guard greeting an elderly patient in a wheelchair and his family in a hospital lobby",
  },
  {
    file: "20-campus-patrol.webp",
    src: "/images/gallery/20-campus-patrol.webp",
    category: "security",
    title: "Campus patrolling",
    alt: "Two security guards on patrol in an IT park, one checking in at a patrol point",
  },
  {
    file: "21-fire-drill-training.webp",
    src: "/images/gallery/21-fire-drill-training.webp",
    category: "fire-safety",
    title: "Fire drill training",
    alt: "Security guard putting out a training fire with an extinguisher while the team and trainer watch",
  },
  {
    file: "04-fire-safety-training.webp",
    category: "fire-safety",
    title: "Fire extinguisher training",
    alt: "Trainer demonstrating how to use a fire extinguisher to security staff",
  },
  {
    file: "05-fire-mock-drill.webp",
    category: "fire-safety",
    title: "Evacuation mock drill",
    alt: "Security guards guiding office staff to an assembly point during an evacuation drill",
  },
  {
    file: "06-housekeeping-office.webp",
    category: "housekeeping",
    title: "Office housekeeping",
    alt: "Housekeeping staff cleaning desks and glass partitions in a modern office",
  },
  {
    file: "07-housekeeping-deep-cleaning.webp",
    src: "/images/gallery/07-housekeeping-deep-cleaning.webp",
    category: "housekeeping",
    title: "Deep cleaning",
    alt: "Housekeeping staff deep-cleaning a corridor floor with a scrubbing machine and mop",
  },
  {
    file: "08-gardener-landscaping.webp",
    src: "/images/gallery/08-gardener-landscaping.webp",
    category: "gardening",
    title: "Garden maintenance",
    alt: "Gardener trimming hedges in a residential society garden with apartment towers behind",
  },
  {
    file: "17-executive-arrival.webp",
    src: "/images/gallery/17-executive-arrival.webp",
    category: "drivers",
    title: "Chauffeur and valet service",
    alt: "Staff in suits opening a car door for a guest at a hotel entrance",
  },
  {
    file: "12-electrician.webp",
    src: "/images/gallery/12-electrician.webp",
    category: "technical",
    title: "Electrical maintenance",
    alt: "Electrician in a helmet and gloves working on an electrical distribution panel",
  },
];

/** Slots that have a photo — the only ones shown on the page. */
export const galleryItems: GalleryItem[] = gallerySlots.filter((item) => Boolean(item.src));
