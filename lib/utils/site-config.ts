// Central place for company facts used across metadata, footer, contact page and
// structured data. Sourced from the client-supplied OSSF Company Profile
// (confirmed 20-09-2026). Values still marked CLIENT CONFIRMATION REQUIRED are
// the few remaining gaps — replace once the client confirms them.

export const siteConfig = {
  name: "Om Shiv Security Force",
  shortName: "OSSF",
  tagline: "Professional Security & Facility Management",
  description:
    "Om Shiv Security Force (OSSF) is a professionally managed security services organization established in 2017, providing security and facility management services to industrial units, corporate offices, residential complexes, hotels, hospitals, warehouses and institutions across Maharashtra, Mumbai, Thane, Goa, Gujarat, Daman and surrounding regions.",
  url: "https://omshivsecurityforce.in",

  address: {
    line1: "Kris Korner Commercial Plaza, Shop No. 21/22, 2nd Floor",
    line2: "Anand Nagar, Ghodbunder Road",
    locality: "Thane West",
    region: "Maharashtra",
    postalCode: "400615",
    country: "IN",
  },

  // Two mobile numbers given in the company profile; first is treated as primary.
  phone: "9768104769",
  phoneSecondary: "7977314691",
  email: "info@omshivsecurityforce.in",

  // Company profile confirms 24x365 security operations; a separate office
  // enquiry/reception window was not specified.
  businessHours:
    "Security operations: 24 Hours × 365 Days. Office enquiries: [CLIENT CONFIRMATION REQUIRED]",

  // Confirmed by client (20-09-2026): established 2017. The "Trusted Since 2002" /
  // "10 Years" phrasing elsewhere in the source material was a typo and is not used.
  foundingYear: 2017,
  foundingYearConfirmed: true,

  serviceAreas: ["Thane", "Mumbai", "Navi Mumbai", "Maharashtra", "Goa", "Gujarat", "Daman"],
} as const;

export const CLIENT_CONFIRM = "[CLIENT CONFIRMATION REQUIRED]";
