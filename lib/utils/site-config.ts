// Central place for company facts used across metadata, footer, contact page and
// structured data. Sourced from the client-supplied OSSF Company Profile
// (confirmed 20-09-2026). Values still marked CLIENT CONFIRMATION REQUIRED are
// the few remaining gaps - replace once the client confirms them.

export const siteConfig = {
  name: "Om Shiv Security Force",
  shortName: "OSSF",
  tagline: "Security & Integrated Facility Management Services",
  description:
    "PSARA-licensed security and integrated facility management company, established in 2002. Police-verified security guards, event security, housekeeping, valet drivers and technical manpower for residential communities, offices, factories, hospitals and commercial establishments.",
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

  // Number used for the WhatsApp links (10 digits). Set to the primary mobile
  // number; OSSF to confirm that this number is on WhatsApp, or supply another.
  whatsapp: "9768104769",

  // Security operations run 24x365 (company profile). Office enquiry hours
  // confirmed by the client 26-09-2026 as 10am-6pm, 6 days a week; the days
  // were not named, so Monday-Saturday is assumed - correct here if different.
  businessHours: {
    operations: "24 hours, 365 days a year",
    officeEnquiries: "10 am to 6 pm, Monday to Saturday",
  },

  // Confirmed by client (03-10-2026): established 2002. (An earlier confirmation
  // on 20-09-2026 said 2017; the client has since corrected it to 2002.)
  foundingYear: 2002,

  // Client count shown in stats and copy (client-confirmed 06-10-2026).
  clientCount: "200+",

  // Areas named in the company profile. Used for structured data only.
  serviceAreas: ["Thane", "Mumbai", "Navi Mumbai", "Maharashtra", "Goa", "Gujarat", "Daman"],

  // How coverage is described in site copy. The brand is not tied to one
  // city: state where OSSF currently works and invite enquiries from
  // elsewhere. Do not claim nationwide or pan-India coverage unless OSSF
  // confirms it.
  coverage: "Maharashtra, Goa, Gujarat and Daman",
} as const;

export const CLIENT_CONFIRM = "[CLIENT CONFIRMATION REQUIRED]";

/** Dialable tel: href for a 10-digit Indian mobile number from siteConfig. */
export function telHref(phone: string): string {
  return `tel:+91${phone.replace(/\D/g, "").slice(-10)}`;
}

/** Display form of a 10-digit Indian mobile number: "+91 97681 04769". */
export function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "").slice(-10);
  return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
}

/** Click-to-chat link for the OSSF WhatsApp number, with an opening line typed in. */
export function whatsappHref(
  message = "Hello, I would like a quotation for security or facility services."
): string {
  const digits = siteConfig.whatsapp.replace(/\D/g, "").slice(-10);
  return `https://wa.me/91${digits}?text=${encodeURIComponent(message)}`;
}
