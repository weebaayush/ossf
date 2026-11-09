import type { LucideIcon } from "lucide-react";
import { ShieldCheck, Ticket, SprayCan, CarFront, Wrench, Cctv } from "lucide-react";

// Service lineup from the client's updated company profile (03-10-2026), with
// the surveillance and supervision scope from the original OSSF profile.
// Copy rewritten 02-11-2026 to lead with the client's problem and the outcome,
// using only facts from the profiles. The first service is shown as the
// "Core Offering" card on the homepage.

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  description: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    slug: "security-services",
    icon: ShieldCheck,
    title: "Security Services",
    shortDescription:
      "Police-verified guards and supervisors who control access, patrol on schedule and report every shift.",
    description:
      "A guard at your gate is both your first impression and your first line of defence. Ours are selected, verified and trained before they reach your site, then briefed on its specific post orders. Supervisors check on them by day and by night, so the standard you see in the first week is the standard you get in the first year.",
    capabilities: [
      "Armed and unarmed security guards",
      "Security supervisors for on-site command",
      "Gate control with visitor, vehicle and material registers",
      "Scheduled patrolling of the entire premises",
      "CCTV monitoring from the security cabin",
      "Fire and safety first response",
      "Coordination with Police and Fire Brigade in an emergency",
      "Daily occurrence reports and documented shift handovers",
    ],
  },
  {
    slug: "event-and-exhibition-security",
    icon: Ticket,
    title: "Event & Exhibition Security",
    shortDescription:
      "Bouncers, guards and supervisors who keep entry smooth and crowds calm at events and exhibitions.",
    description:
      "An event gets one chance to go right. We plan entry points, guest flow and staff positions with you in advance, then deploy a team that keeps queues moving, restricted areas closed and guests at ease from the moment gates open until the last vehicle leaves.",
    capabilities: [
      "Bouncers for entry and VIP areas",
      "Armed and unarmed guards",
      "Event security supervisors",
      "Entry, ticket and pass checks",
      "Crowd and queue management",
      "CCTV monitoring",
      "Fire and safety support",
    ],
  },
  {
    slug: "housekeeping-and-soft-services",
    icon: SprayCan,
    title: "Housekeeping & Soft Services",
    shortDescription:
      "Trained housekeeping teams that keep offices, factories and societies clean on a fixed, checked schedule.",
    description:
      "Clean premises tell visitors, staff and residents that a place is well run. Our housekeeping staff follow an agreed cleaning schedule and supervisors check the work, so washrooms, corridors, pantries and shop floors stay presentable every day, not just before an inspection.",
    capabilities: [
      "Corporate office housekeeping",
      "Industrial and shop-floor housekeeping",
      "Periodic deep cleaning",
      "Pantry and tea services",
      "Waste collection and segregation",
    ],
  },
  {
    slug: "valet-driver-services",
    icon: CarFront,
    title: "Valet Driver Services",
    shortDescription:
      "Courteous, experienced valet drivers who handle guest vehicles with care at hotels, restaurants and events.",
    description:
      "Valet staff are often the first and last people your guests meet. Ours are well presented, polite and careful behind the wheel. They park and return vehicles safely and keep your driveway clear during the busiest hours.",
    capabilities: [
      "Hotels and banquet halls",
      "Restaurants",
      "Corporate events",
      "Residential complexes",
      "Commercial establishments",
    ],
  },
  {
    slug: "technical-and-non-technical-manpower",
    icon: Wrench,
    title: "Technical & Non-Technical Manpower",
    shortDescription:
      "Skilled and semi-skilled staff, from electricians and technicians to helpers, loaders and office support.",
    description:
      "When maintenance or daily operations are short of hands, work stops. We supply skilled technicians and dependable support staff on contract, take care of their payroll and statutory compliance, and replace anyone who does not meet your standard.",
    capabilities: [
      "Electricians",
      "Plumbers",
      "HVAC technicians",
      "Machine operators",
      "Maintenance technicians",
      "Helpers and office assistants",
      "Loaders and packers",
      "Facility support staff",
    ],
  },
  {
    slug: "surveillance-and-risk-assessment",
    icon: Cctv,
    title: "Surveillance & Risk Assessment",
    shortDescription:
      "CCTV and alarm monitoring support, plus a site risk assessment that shows where you are exposed.",
    description:
      "Cameras only help if someone is watching and the guards on the ground know how to respond. We walk your site to find its weak points, advise on camera and alarm coverage, and plan guard posts around them, so technology and people work as one system.",
    capabilities: [
      "CCTV and alarm monitoring",
      "Site risk assessment",
      "Security planning and consulting",
      "Checks on doors, windows, electrical points and fire equipment",
      "Surprise inspections and night audits",
    ],
  },
];
