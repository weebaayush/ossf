// Sectors from the client's updated company profile (03-10-2026), plus
// Government Organisations from the original OSSF profile.
//
// Each sector has a one-line summary (shown on the closed card), a short
// account of OSSF's role there, the work typically provided and the services
// it draws on. The detail is assembled from the service scope in the company
// profile (see lib/data/services.ts); it does not add new claims. Approved by
// OSSF on 21-11-2026.

export type Industry = {
  slug: string;
  title: string;
  /** One-line summary shown on the closed card and in metadata. */
  description: string;
  /** What OSSF does at this kind of site, in two or three sentences. */
  role: string;
  /** Work typically provided at this kind of site. */
  provides: string[];
  /** Slugs from lib/data/services.ts that this sector usually takes. */
  services: string[];
};

export const industries: Industry[] = [
  {
    slug: "manufacturing-industries",
    title: "Manufacturing Industries",
    description:
      "Gate and material movement control, perimeter patrols, shop-floor housekeeping and skilled manpower for the plant.",
    role: "At a factory our guards control the gate and record every vehicle and consignment that enters or leaves. They patrol the perimeter and plant areas on a schedule. Alongside security we keep the shop floor clean and supply technicians and helpers for maintenance and daily operations.",
    provides: [
      "Gate control with visitor, vehicle and material registers",
      "Scheduled patrols of the perimeter and plant areas",
      "CCTV monitoring from the security cabin",
      "Fire and safety first response",
      "Industrial and shop-floor housekeeping",
      "Electricians, machine operators and maintenance technicians",
      "Helpers, loaders and packers",
    ],
    services: [
      "security-services",
      "housekeeping-and-soft-services",
      "technical-and-non-technical-manpower",
      "surveillance-and-risk-assessment",
    ],
  },
  {
    slug: "corporate-offices",
    title: "Corporate Offices",
    description:
      "Reception and lobby guards, visitor access control, office housekeeping and pantry staff.",
    role: "In an office our guards are posted at the reception and entrances, where they check and register visitors before letting them in. Housekeeping staff keep workspaces, washrooms and pantries clean to an agreed schedule, and we provide pantry staff and office assistants where needed.",
    provides: [
      "Guards at reception, lobbies and entrances",
      "Visitor registers and access control",
      "CCTV monitoring",
      "Corporate office housekeeping",
      "Pantry and tea services",
      "Office assistants and facility support staff",
      "Daily occurrence reports",
    ],
    services: [
      "security-services",
      "housekeeping-and-soft-services",
      "technical-and-non-technical-manpower",
    ],
  },
  {
    slug: "it-parks",
    title: "IT Parks",
    description:
      "Access control, visitor management and round-the-clock guarding for campuses with heavy movement of people and vehicles.",
    role: "IT parks have people and vehicles moving in and out at all hours. Our guards manage the gates, register visitors and vehicles, and patrol the campus in every shift. A supervisor on site takes charge of the team and coordinates with the park's facility staff.",
    provides: [
      "Gate control for employees, visitors and vehicles",
      "Security supervisors for on-site command",
      "Scheduled patrolling of the campus",
      "CCTV monitoring from the security cabin",
      "Cover on all days, including public holidays",
      "Coordination with Police and Fire Brigade in an emergency",
      "Housekeeping for common areas",
    ],
    services: [
      "security-services",
      "housekeeping-and-soft-services",
      "surveillance-and-risk-assessment",
    ],
  },
  {
    slug: "residential-complexes",
    title: "Residential Complexes",
    description:
      "Gate staff, visitor and delivery registers, night patrols and housekeeping for housing societies and gated complexes.",
    role: "In a housing society our guards staff the gate, record visitors, deliveries and vehicles, and patrol the premises at night. We also provide housekeeping for common areas, and electricians, plumbers and valet drivers where the society needs them. The managing committee deals with one OSSF contact for all of it.",
    provides: [
      "Gate staff with visitor, delivery and vehicle registers",
      "Night patrols of the premises",
      "CCTV monitoring from the security cabin",
      "Housekeeping for lobbies, staircases and common areas",
      "Waste collection and segregation",
      "Electricians and plumbers",
      "Valet drivers",
    ],
    services: [
      "security-services",
      "housekeeping-and-soft-services",
      "valet-driver-services",
      "technical-and-non-technical-manpower",
    ],
  },
  {
    slug: "hospitals",
    title: "Hospitals",
    description:
      "Guards for entrances, wards and visitor management, and housekeeping teams that follow hospital hygiene routines.",
    role: "In a hospital our guards manage entrances and visitors, keep restricted areas clear and respond first if there is a fire or safety incident. Housekeeping teams work to the hospital's hygiene routines and handle waste collection and segregation.",
    provides: [
      "Guards at entrances, wards and restricted areas",
      "Visitor management",
      "Fire and safety first response",
      "Coordination with Police and Fire Brigade in an emergency",
      "Housekeeping to the hospital's hygiene routines",
      "Waste collection and segregation",
      "Facility support staff",
    ],
    services: [
      "security-services",
      "housekeeping-and-soft-services",
      "technical-and-non-technical-manpower",
    ],
  },
  {
    slug: "educational-institutions",
    title: "Educational Institutions",
    description:
      "Campus access control, visitor checks and supervision at drop-off and pick-up times.",
    role: "At schools and colleges our guards control who enters the campus, check and register visitors, and supervise the gate at drop-off and pick-up times. They patrol the campus during and after hours, and we provide housekeeping for classrooms and common areas.",
    provides: [
      "Access control at campus gates",
      "Visitor checks and registers",
      "Gate supervision at drop-off and pick-up times",
      "Patrolling of the campus",
      "CCTV monitoring",
      "Housekeeping for classrooms and common areas",
    ],
    services: ["security-services", "housekeeping-and-soft-services"],
  },
  {
    slug: "hotels-and-hospitality",
    title: "Hotels & Hospitality",
    description:
      "Guest-facing security, valet drivers and housekeeping support for hotels, banquet halls and restaurants.",
    role: "At hotels, banquet halls and restaurants our staff deal directly with guests. Guards look after entrances and the premises, valet drivers park and return guest vehicles, and for functions we deploy bouncers, guards and supervisors for the duration of the event.",
    provides: [
      "Guards at entrances and guest areas",
      "Valet drivers for hotels, banquet halls and restaurants",
      "Bouncers and guards for functions and events",
      "Crowd and queue management",
      "CCTV monitoring",
      "Housekeeping support",
    ],
    services: [
      "security-services",
      "valet-driver-services",
      "event-and-exhibition-security",
      "housekeeping-and-soft-services",
    ],
  },
  {
    slug: "retail-and-shopping-malls",
    title: "Retail & Shopping Malls",
    description:
      "Entry checks, crowd management and loss prevention for showrooms and malls, with housekeeping for high-footfall areas.",
    role: "In malls and showrooms our guards check entry points, manage crowds and queues during busy hours and watch for theft. Housekeeping teams keep high-footfall areas clean through the day.",
    provides: [
      "Entry checks at doors and gates",
      "Crowd and queue management",
      "Loss prevention on the shop floor",
      "CCTV monitoring",
      "Fire and safety support",
      "Housekeeping for high-footfall areas",
    ],
    services: [
      "security-services",
      "housekeeping-and-soft-services",
      "surveillance-and-risk-assessment",
    ],
  },
  {
    slug: "warehousing-and-logistics",
    title: "Warehousing & Logistics",
    description:
      "Inward and outward checks, vehicle and seal verification, patrols, and loaders and packers.",
    role: "At warehouses our guards check and record every inward and outward movement, verify vehicles and seals, and patrol the premises. We also supply loaders and packers for the warehouse's own operations.",
    provides: [
      "Inward and outward checks with material registers",
      "Vehicle and seal verification",
      "Scheduled patrols of the premises",
      "CCTV monitoring from the security cabin",
      "Surprise inspections and night audits",
      "Loaders and packers",
    ],
    services: [
      "security-services",
      "technical-and-non-technical-manpower",
      "surveillance-and-risk-assessment",
    ],
  },
  {
    slug: "construction-sites",
    title: "Construction Sites",
    description:
      "Guarding against theft of material and equipment, controlled entry for workers and vehicles, and manpower as the project grows.",
    role: "On a construction site our guards protect material and equipment from theft and control the entry of workers and vehicles. Our supervisors check the site at night. As the project grows we add guards and supply helpers and skilled manpower.",
    provides: [
      "Guarding of material and equipment",
      "Entry control for workers and vehicles, with registers",
      "Night patrols",
      "Surprise inspections and night audits",
      "Site risk assessment",
      "Helpers and skilled manpower",
    ],
    services: [
      "security-services",
      "surveillance-and-risk-assessment",
      "technical-and-non-technical-manpower",
    ],
  },
  {
    slug: "government-organizations",
    title: "Government Organisations",
    description:
      "Documented deployment that meets the compliance and reporting requirements of government establishments.",
    role: "Government establishments need every deployment to be on record. We deploy police-verified staff, keep daily occurrence reports and written shift handovers, and maintain the PF, ESIC and other statutory records for the staff, which are available for audit.",
    provides: [
      "Armed and unarmed security guards",
      "Police-verified personnel",
      "Daily occurrence reports and documented shift handovers",
      "Statutory records available for audit",
      "Gate control with visitor and vehicle registers",
      "Housekeeping",
    ],
    services: ["security-services", "housekeeping-and-soft-services"],
  },
];
