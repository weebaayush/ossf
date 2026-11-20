// Service lineup from the client's updated company profile (03-10-2026), with
// the surveillance and supervision scope from the original OSSF profile.
// Copy uses only facts from the profiles and states plainly what is provided.
// The order here is the order shown on the homepage and the Services page.
//
// Each service also has its own page at /services/<slug>. The extra fields
// below (`need`, `delivery`, `faqs`) feed that page. They restate the profile:
// verification, training, supervision, replacement, reporting and statutory
// compliance. Wording approved by OSSF on 21-11-2026; do not add
// figures, response times or equipment that the client has not confirmed.

export type ServiceFaq = { question: string; answer: string };

export type Service = {
  slug: string;
  title: string;
  /** One line for lists and cards. */
  shortDescription: string;
  /** Opening paragraph of the service section and page. */
  description: string;
  /** What a client usually needs from this service. */
  need: string;
  /** What is included. */
  capabilities: string[];
  /** How OSSF delivers the service, in order. */
  delivery: string[];
  faqs: ServiceFaq[];
  /** Search title and description for the service page. */
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "security-services",
    title: "Security Services",
    shortDescription:
      "Armed and unarmed guards and supervisors for gates, lobbies, perimeters and plant areas.",
    description:
      "We provide armed and unarmed guards and site supervisors for gates, lobbies, perimeters and plant areas. Guards are verified and trained before they are posted, then briefed on the post orders for your site. Our supervisors check on them during the day and at night.",
    need: "Most clients come to us with the same concerns: guards who are absent or change every few weeks, nobody checking the night shift, and no record of who entered the premises. A security contract works when the people are verified, the posts are defined in writing and someone from the agency inspects regularly.",
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
    delivery: [
      "We visit the site, note the entry points and weak areas, and propose the number of guards, shifts and posts.",
      "Guards are police verified and trained in duties, discipline, emergency response and fire safety basics before deployment.",
      "Each guard is briefed on the post orders for your site and reports in full uniform.",
      "Our supervisors make regular visits, surprise checks and night audits.",
      "If a guard is absent or unsuitable, we send a replacement immediately.",
    ],
    faqs: [
      {
        question: "Do you provide both armed and unarmed guards?",
        answer:
          "Yes. We provide armed and unarmed guards, and security supervisors where a site needs someone in charge of the team.",
      },
      {
        question: "Can guards be arranged for different shifts?",
        answer:
          "Yes. Shifts are planned for each site after a visit, including night shifts and round-the-clock cover on all days of the year.",
      },
      {
        question: "How do we know the guards are doing their job?",
        answer:
          "Guards keep an occurrence register and hand over in writing at each shift change. Our supervisors visit regularly and carry out surprise checks and night audits.",
      },
    ],
    seoTitle: "Security Guard Services",
    seoDescription:
      "Armed and unarmed security guards and supervisors from a PSARA-licensed agency. Police-verified, trained personnel with gate control, patrolling, daily reporting and supervisor checks.",
  },
  {
    slug: "event-and-exhibition-security",
    title: "Event & Exhibition Security",
    shortDescription:
      "Bouncers, guards and supervisors for entry checks and crowd management at events.",
    description:
      "For events and exhibitions we plan entry points, guest flow and staff positions with the organiser beforehand. On the day we deploy bouncers, guards and supervisors from the time the gates open until the venue is cleared.",
    need: "An event brings a large number of people into a venue for a few hours. The organiser needs entry to be orderly, passes to be checked, restricted areas to stay restricted and a team that knows what to do if something goes wrong.",
    capabilities: [
      "Bouncers for entry and VIP areas",
      "Armed and unarmed guards",
      "Event security supervisors",
      "Entry, ticket and pass checks",
      "Crowd and queue management",
      "CCTV monitoring",
      "Fire and safety support",
    ],
    delivery: [
      "We go through the venue layout, expected attendance and schedule with the organiser.",
      "Entry points, queues, restricted areas and staff positions are agreed before the event.",
      "Bouncers, guards and supervisors report before the gates open and are briefed on their positions.",
      "A supervisor stays in charge of the team until the venue is cleared.",
    ],
    faqs: [
      {
        question: "What kinds of events do you cover?",
        answer:
          "Corporate events, exhibitions, private functions and public gatherings. Tell us the venue, date and expected attendance and we will propose the team.",
      },
      {
        question: "How far in advance should we book?",
        answer:
          "As early as you can, so that the entry plan and staff positions can be agreed with you before the day. Call us if your event is at short notice.",
      },
    ],
    seoTitle: "Event & Exhibition Security Services",
    seoDescription:
      "Bouncers, security guards and supervisors for events and exhibitions. Entry and pass checks, crowd and queue management, and a supervisor in charge throughout.",
  },
  {
    slug: "housekeeping-and-soft-services",
    title: "Housekeeping & Soft Services",
    shortDescription:
      "Housekeeping teams for offices, factories and societies, working to an agreed schedule.",
    description:
      "Housekeeping staff for offices, factories and housing societies, working to a cleaning schedule agreed with you. A supervisor checks washrooms, corridors, pantries and shop floors against that schedule.",
    need: "Housekeeping fails quietly: staff who do not turn up, areas that get skipped, and nobody checking. Clients need a fixed schedule, enough people to cover absences and a supervisor who inspects the work.",
    capabilities: [
      "Corporate office housekeeping",
      "Industrial and shop-floor housekeeping",
      "Periodic deep cleaning",
      "Pantry and tea services",
      "Waste collection and segregation",
    ],
    delivery: [
      "We visit the premises and agree the areas, frequency and timings of cleaning with you.",
      "Staff are police verified and briefed on the schedule for your site.",
      "A supervisor checks the work against the schedule.",
      "Absent staff are replaced so that the schedule is not missed.",
    ],
    faqs: [
      {
        question: "Do you provide housekeeping for housing societies?",
        answer:
          "Yes. We provide housekeeping staff for offices, factories and housing societies, including common areas, staircases and lobbies.",
      },
      {
        question: "Can housekeeping be taken together with security?",
        answer:
          "Yes. Many clients take both under one contract, with one invoice and one point of contact.",
      },
    ],
    seoTitle: "Housekeeping & Soft Services",
    seoDescription:
      "Housekeeping staff for offices, factories and housing societies: daily cleaning to an agreed schedule, deep cleaning, pantry services and waste segregation, checked by a supervisor.",
  },
  {
    slug: "valet-driver-services",
    title: "Valet Driver Services",
    shortDescription:
      "Experienced valet drivers for hotels, banquet halls, restaurants and events.",
    description:
      "Experienced valet drivers for hotels, banquet halls, restaurants and events. They receive guests, park and return vehicles with care, and keep the driveway clear during busy hours.",
    need: "Guests judge a venue by how their arrival is handled. The venue needs drivers who are careful with vehicles, polite with guests and able to keep the entrance moving when many cars arrive together.",
    capabilities: [
      "Hotels and banquet halls",
      "Restaurants",
      "Corporate events",
      "Residential complexes",
      "Commercial establishments",
    ],
    delivery: [
      "We look at the driveway, the parking area and your busy hours, and propose the number of drivers.",
      "Drivers are police verified and report in uniform.",
      "Drivers receive guests, park the vehicles and return them on request.",
      "If a driver is absent or unsuitable, we send a replacement.",
    ],
    faqs: [
      {
        question: "Do you provide valet drivers for a single event?",
        answer:
          "Yes. We provide valet drivers for corporate events and functions as well as on regular contract for hotels, restaurants and residential complexes.",
      },
    ],
    seoTitle: "Valet Driver Services",
    seoDescription:
      "Experienced valet drivers for hotels, banquet halls, restaurants, residential complexes and events, on regular contract or for a single function.",
  },
  {
    slug: "technical-and-non-technical-manpower",
    title: "Technical & Non-Technical Manpower",
    shortDescription:
      "Electricians, plumbers, HVAC technicians, operators, helpers, loaders and office support.",
    description:
      "Skilled technicians and support staff supplied on contract. We handle their payroll and statutory compliance, and replace anyone who does not meet your requirement.",
    need: "When a site is short of an electrician, an operator or a few helpers, work slows down. Hiring and managing such staff directly also means handling their payroll, PF and ESIC. Clients want the people without the administration.",
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
    delivery: [
      "You tell us the roles, numbers and shift timings you need.",
      "We select staff for those roles and complete their police verification.",
      "The staff work under your day-to-day instructions; OSSF remains their employer.",
      "We pay their wages and make the PF, ESIC and other statutory contributions.",
      "Anyone who does not meet your requirement is replaced.",
    ],
    faqs: [
      {
        question: "Who is the employer of the staff you supply?",
        answer:
          "OSSF is. We pay their wages and make the PF, ESIC and other statutory contributions. The records are available for your audits as principal employer.",
      },
      {
        question: "Can we take only a few staff, for example two helpers?",
        answer: "Yes. Tell us the roles and numbers you need and we will send a proposal.",
      },
    ],
    seoTitle: "Technical & Non-Technical Manpower Services",
    seoDescription:
      "Contract manpower: electricians, plumbers, HVAC and maintenance technicians, machine operators, helpers, loaders and office support, with payroll and statutory compliance handled by OSSF.",
  },
  {
    slug: "surveillance-and-risk-assessment",
    title: "Surveillance & Risk Assessment",
    shortDescription:
      "CCTV and alarm monitoring support, and a site survey that identifies weak points.",
    description:
      "We walk your site to identify weak points, advise on camera and alarm coverage, and plan the guard posts around it. Guards monitor CCTV from the security cabin, and our supervisors carry out surprise inspections and night audits.",
    need: "Cameras record an incident; they do not prevent one unless someone is watching and the guards know how to respond. Clients need to know where their premises are exposed and how guards and cameras should cover those points together.",
    capabilities: [
      "CCTV and alarm monitoring",
      "Site risk assessment",
      "Security planning and consulting",
      "Checks on doors, windows, electrical points and fire equipment",
      "Surprise inspections and night audits",
    ],
    delivery: [
      "We walk the premises and list the entry points, blind spots and other weak areas.",
      "We advise on camera and alarm coverage and plan the guard posts around it.",
      "Guards monitor the CCTV from the security cabin and act on what they see.",
      "Our supervisors carry out surprise inspections and night audits.",
    ],
    faqs: [
      {
        question: "Do you install CCTV cameras?",
        answer:
          "Our service covers monitoring by guards and advice on camera and alarm coverage. Please ask us about installation for your site.",
      },
    ],
    seoTitle: "Surveillance & Site Risk Assessment",
    seoDescription:
      "CCTV and alarm monitoring by trained guards, site risk assessment, security planning, surprise inspections and night audits.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
