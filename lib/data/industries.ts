import type { LucideIcon } from "lucide-react";
import {
  Factory,
  Building2,
  Laptop,
  Home,
  HeartPulse,
  GraduationCap,
  Hotel,
  ShoppingBag,
  Warehouse,
  HardHat,
  Landmark,
} from "lucide-react";

// Descriptions rewritten 02-11-2026 around each sector's main concern.
// Sectors revised 03-10-2026 from the client's updated company profile, plus
// Government Organizations from the original OSSF profile. Order matters for
// the homepage bento grid: index 0 is the large tile, indices 3 and 7 are wide.

export type Industry = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const industries: Industry[] = [
  {
    slug: "manufacturing-industries",
    icon: Factory,
    title: "Manufacturing Industries",
    description:
      "Gate and material movement control, perimeter patrols, industrial housekeeping and skilled hands for the plant, so production is never held up by security or staffing gaps.",
  },
  {
    slug: "corporate-offices",
    icon: Building2,
    title: "Corporate Offices",
    description:
      "Well-presented guards at reception, controlled visitor access, spotless workspaces and reliable pantry and office support that reflect well on your business.",
  },
  {
    slug: "it-parks",
    icon: Laptop,
    title: "IT Parks",
    description:
      "Access control, visitor management and round-the-clock cover for campuses where hundreds of people and vehicles move in and out every hour.",
  },
  {
    slug: "residential-complexes",
    icon: Home,
    title: "Residential Complexes",
    description:
      "Courteous gate staff, proper visitor and delivery registers, night patrols and housekeeping that give residents peace of mind and committees one less worry.",
  },
  {
    slug: "hospitals",
    icon: HeartPulse,
    title: "Hospitals",
    description:
      "Calm, disciplined guards who manage visitors and emergencies with sensitivity, and housekeeping teams that understand hygiene matters most here.",
  },
  {
    slug: "educational-institutions",
    icon: GraduationCap,
    title: "Educational Institutions",
    description:
      "Campus access control, visitor checks and safe drop-off and pick-up, so parents can trust that students are protected through the day.",
  },
  {
    slug: "hotels-and-hospitality",
    icon: Hotel,
    title: "Hotels & Hospitality",
    description:
      "Discreet, guest-friendly security, courteous valet drivers and housekeeping support that protect your guests without spoiling their experience.",
  },
  {
    slug: "retail-and-shopping-malls",
    icon: ShoppingBag,
    title: "Retail & Shopping Malls",
    description:
      "Crowd management, entry checks and loss prevention for showrooms and malls, with housekeeping that keeps high-footfall spaces presentable.",
  },
  {
    slug: "warehousing-and-logistics",
    icon: Warehouse,
    title: "Warehousing & Logistics",
    description:
      "Inward and outward checks, vehicle and seal verification, patrols and dependable loaders and packers to keep stock safe and moving.",
  },
  {
    slug: "construction-sites",
    icon: HardHat,
    title: "Construction Sites",
    description:
      "Site security against theft of material and equipment, controlled entry for workers and vehicles, and manpower support as the project grows.",
  },
  {
    slug: "government-organizations",
    icon: Landmark,
    title: "Government Organizations",
    description:
      "Disciplined, fully documented deployment that meets the compliance and reporting requirements of government establishments.",
  },
];
