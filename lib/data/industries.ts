import type { LucideIcon } from "lucide-react";
import {
  Factory,
  Building2,
  Home,
  Store,
  Hotel,
  HardHat,
  GraduationCap,
  HeartPulse,
  Warehouse,
  ShoppingBag,
  Landmark,
} from "lucide-react";

export type Industry = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const industries: Industry[] = [
  {
    slug: "industrial-units",
    icon: Factory,
    title: "Industrial Units",
    description:
      "Perimeter security, access control and shift-based deployment for manufacturing and industrial sites.",
  },
  {
    slug: "corporate-offices",
    icon: Building2,
    title: "Corporate Offices",
    description:
      "Front-desk-appropriate, professionally presented personnel for corporate premises and business parks.",
  },
  {
    slug: "residential-complexes",
    icon: Home,
    title: "Residential Complexes",
    description:
      "Gate management, visitor control and patrolling for housing societies and gated communities.",
  },
  {
    slug: "commercial-establishments",
    icon: Store,
    title: "Commercial Establishments",
    description:
      "Deployment tailored to retail and commercial premises operating hours and footfall patterns.",
  },
  {
    slug: "hotels",
    icon: Hotel,
    title: "Hotels",
    description:
      "Guest-facing discipline and professional presentation combined with access control for hospitality properties.",
  },
  {
    slug: "construction-sites",
    icon: HardHat,
    title: "Construction Sites",
    description:
      "Site security and access control across active construction and project sites.",
  },
  {
    slug: "educational-institutions",
    icon: GraduationCap,
    title: "Educational Institutions",
    description:
      "Campus access control and visitor management appropriate for schools and educational campuses.",
  },
  {
    slug: "hospitals",
    icon: HeartPulse,
    title: "Hospitals",
    description:
      "Disciplined, calm deployment suited to healthcare facility access points and patient-sensitive areas.",
  },
  {
    slug: "warehouses",
    icon: Warehouse,
    title: "Warehouses",
    description:
      "Access control and patrolling for warehousing and logistics facilities.",
  },
  {
    slug: "shopping-complexes",
    icon: ShoppingBag,
    title: "Shopping Complexes",
    description:
      "Crowd management and access control for shopping complexes and high-footfall commercial spaces.",
  },
  {
    slug: "government-organizations",
    icon: Landmark,
    title: "Government Organizations",
    description:
      "Deployment aligned to statutory compliance requirements for government establishments.",
  },
];
