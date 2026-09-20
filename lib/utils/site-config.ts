// Central place for company facts used across metadata, footer, contact page and
// structured data. Values marked CLIENT CONFIRMATION REQUIRED are placeholders —
// replace once the client confirms the real figure.

export const siteConfig = {
  name: "Om Shiv Security Force",
  shortName: "OSSF",
  tagline: "Professional Security & Facility Management",
  description:
    "Om Shiv Security Force (OSSF) provides professional security and facility management services to industrial units, corporate offices, residential complexes, hotels, hospitals, warehouses and institutions across Maharashtra.",
  url: "https://omshivsecurityforce.in",

  // TODO(client): confirm registered office address for Contact page + footer + JSON-LD.
  address: {
    line1: "[CLIENT CONFIRMATION REQUIRED — Registered office address]",
    locality: "Thane",
    region: "Maharashtra",
    country: "IN",
  },

  // TODO(client): confirm public phone number(s).
  phone: "[CLIENT CONFIRMATION REQUIRED — Phone number]",
  // TODO(client): confirm public business email.
  email: "[CLIENT CONFIRMATION REQUIRED — Business email]",

  // TODO(client): confirm business hours, or state 24x7 operations desk explicitly.
  businessHours: "[CLIENT CONFIRMATION REQUIRED — Business hours]",

  // Founding year is contradictory in source material (2017 vs "Trusted Since 2002").
  // Intentionally not surfaced anywhere until the client confirms which is correct.
  foundingYearConfirmed: false,

  serviceAreas: ["Thane", "Mumbai", "Navi Mumbai", "Maharashtra"],
} as const;

export const CLIENT_CONFIRM = "[CLIENT CONFIRMATION REQUIRED]";
