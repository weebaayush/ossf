// Clients shown on the homepage "Trusted By" section and the /clients page.
//
// Names and logos come from the "client showcase" pages of the client-supplied
// OSSF Company Profile (confirmed 20-09-2026) — the corporate/institutional
// names OSSF itself presents to prospects as a logo wall. Logo files are the
// clients' own official logos, taken from each client's official website
// (identified against the logos in the company profile) — see
// docs/image-sources.md. Where no official source could be found, the logo
// comes from the company profile itself; where neither exists, the client
// appears as a name card.
//
// Further logos and the list of residential societies come from the OSSF
// presentation (Om_Shiv_Security_Force_Presentation.pptx, 09-11-2026), which
// OSSF asked to have shown in full. Only society names are published (no
// addresses). Where a client appears in both sources, the higher-quality
// logo already on the site is kept, so no client is listed twice.
//
// CLIENT CONFIRMATION REQUIRED:
//  • OSSF should confirm each client is comfortable with its logo appearing on
//    OSSF's website. To remove a logo, delete its `logo` field (the client
//    then shows as a name card) or remove the entry entirely.
//  • `category` powers the filter on /clients. It was assigned from each
//    client's name/logo (the profile does not group clients by sector) —
//    OSSF should check it. Clients whose sector isn't evident from the
//    profile are under "Commercial & Others".

export type ClientCategory =
  "real-estate" | "healthcare" | "education" | "industrial" | "commercial";

export const clientCategories: { id: ClientCategory; label: string }[] = [
  { id: "real-estate", label: "Real Estate & Builders" },
  { id: "healthcare", label: "Healthcare" },
  { id: "education", label: "Education" },
  { id: "industrial", label: "Industrial & Infrastructure" },
  { id: "commercial", label: "Commercial & Others" },
];

export type ClientLogo = {
  src: string;
  /** Intrinsic pixel size of the file (used for aspect ratio, no layout shift). */
  width: number;
  height: number;
};

export type Client = {
  name: string;
  category: ClientCategory;
  logo?: ClientLogo;
};

/** Display order: company-profile showcase order, logo clients first. */
export const clients: Client[] = [
  {
    name: "Lodha",
    category: "real-estate",
    logo: { src: "/images/clients/lodha.webp", width: 548, height: 80 },
  },
  {
    name: "Kalpataru",
    category: "real-estate",
    logo: { src: "/images/clients/kalpataru.svg", width: 455, height: 90 },
  },
  {
    name: "KIMS Hospitals",
    category: "healthcare",
    logo: { src: "/images/clients/kims-hospitals.webp", width: 280, height: 120 },
  },
  {
    name: "Runwal Realty",
    category: "real-estate",
    logo: { src: "/images/clients/runwal-realty.svg", width: 101, height: 131 },
  },
  {
    name: "Marathon Realty Advisors",
    category: "real-estate",
    logo: { src: "/images/clients/marathon-realty-advisors.webp", width: 280, height: 131 },
  },
  {
    name: "B and R Bridge & Roof Co. (India) Ltd.",
    category: "industrial",
    logo: { src: "/images/clients/b-and-r-bridge-roof.webp", width: 120, height: 150 },
  },
  {
    name: "Puraniks",
    category: "real-estate",
    logo: { src: "/images/clients/puraniks.webp", width: 280, height: 54 },
  },
  {
    name: "Roma Builders & Promoters",
    category: "real-estate",
    logo: { src: "/images/clients/roma-builders.webp", width: 137, height: 140 },
  },
  {
    name: "Sudhir",
    category: "industrial",
    logo: { src: "/images/clients/sudhir.webp", width: 346, height: 76 },
  },
  // Not in the company profile's logo pages — logo taken from the official
  // site of the organisation with this name. CLIENT CONFIRMATION REQUIRED:
  // OSSF to confirm it is the same client.
  {
    name: "The Blue Roof Club",
    category: "commercial",
    logo: { src: "/images/clients/the-blue-roof-club.webp", width: 203, height: 140 },
  },
  {
    name: "New Horizon School",
    category: "education",
    logo: { src: "/images/clients/new-horizon-school.webp", width: 142, height: 140 },
  },
  // Logo source URLs for the four clients below were supplied by the site
  // owner (26-09-2026); see docs/image-sources.md. The Systematic logo is
  // white, so it sits on a navy tile. "Ehta" in the company profile is a
  // typo for Ekta.
  {
    name: "Systematic Group of Companies",
    category: "commercial",
    logo: { src: "/images/clients/systematic-group.webp", width: 236, height: 78 },
  },
  {
    name: "Woodstock School",
    category: "education",
    logo: { src: "/images/clients/woodstock-school.webp", width: 141, height: 141 },
  },
  {
    name: "LA Homes Estates",
    category: "real-estate",
    logo: { src: "/images/clients/la-homes-estates.webp", width: 426, height: 141 },
  },
  {
    name: "Ekta Realtors Builders & Developers",
    category: "real-estate",
    logo: { src: "/images/clients/ekta-world.webp", width: 412, height: 133 },
  },
  // No official website/logo file could be found for the clients below, so
  // their logos are taken from the OSSF company profile's client-showcase
  // page (cleaned up and enlarged 2x). They are lower resolution than the
  // official logos above. CLIENT CONFIRMATION REQUIRED: replace each with the
  // client's original logo file (SVG / high-res PNG) when OSSF obtains it.
  {
    name: "Sharma Realty",
    category: "real-estate",
    logo: { src: "/images/clients/sharma-realty.webp", width: 290, height: 182 },
  },
  {
    name: "Sairaj Builders And Developers",
    category: "real-estate",
    logo: { src: "/images/clients/sairaj-builders.webp", width: 376, height: 338 },
  },
  {
    name: "Sai Balaji Enterprises",
    category: "commercial",
    logo: { src: "/images/clients/sai-balaji-enterprises.webp", width: 372, height: 338 },
  },
  {
    name: "Shree Balaji Properties and Builders",
    category: "real-estate",
    logo: { src: "/images/clients/shree-balaji-properties.webp", width: 286, height: 206 },
  },
  {
    name: "Kaya Enterprises",
    category: "commercial",
    logo: { src: "/images/clients/kaya-enterprises.webp", width: 416, height: 348 },
  },
  {
    name: "Gaurav Promoters and Builder",
    category: "real-estate",
    logo: { src: "/images/clients/gaurav-promoters.webp", width: 342, height: 344 },
  },
  // Logos below are taken from the OSSF presentation's client slides
  // (09-11-2026), trimmed and converted to WebP. CLIENT CONFIRMATION REQUIRED:
  // several were evidently sourced by web image search and may belong to a
  // different company with the same name (see docs/image-sources.md).
  // Waldorf and Clayton are housing societies (confirmed 10-11-2026), so they
  // appear only in `residentialSocieties`, not here.
  {
    name: "Venus Nirvana",
    category: "real-estate",
    logo: { src: "/images/clients/venus-nirvana.webp", width: 238, height: 275 },
  },
  {
    name: "Vee Gee & Associates",
    category: "commercial",
    logo: { src: "/images/clients/vee-gee-associates.webp", width: 268, height: 268 },
  },
  {
    name: "House of Hiranandani",
    category: "real-estate",
    logo: { src: "/images/clients/house-of-hiranandani.webp", width: 338, height: 198 },
  },
  {
    name: "Insignia",
    category: "real-estate",
    logo: { src: "/images/clients/insignia.webp", width: 600, height: 184 },
  },
  {
    name: "Agile Commercial Real Estate",
    category: "real-estate",
    logo: { src: "/images/clients/agile-commercial-real-estate.webp", width: 243, height: 176 },
  },
  {
    name: "Squarefeet Group",
    category: "real-estate",
    logo: { src: "/images/clients/squarefeet-group.webp", width: 140, height: 104 },
  },
  {
    name: "Kalpataru Immensa, Kolshet",
    category: "real-estate",
    logo: { src: "/images/clients/kalpataru-immensa.webp", width: 572, height: 222 },
  },
  {
    name: "Omkareshwar Properties",
    category: "real-estate",
    logo: { src: "/images/clients/omkareshwar-properties.webp", width: 225, height: 225 },
  },
  {
    name: "Magnum Group",
    category: "real-estate",
    logo: { src: "/images/clients/magnum-group.webp", width: 534, height: 300 },
  },
  {
    name: "Charms Group & RRC",
    category: "real-estate",
    logo: { src: "/images/clients/charms-group-rrc.webp", width: 441, height: 168 },
  },
  {
    name: "Anant Square",
    category: "real-estate",
    logo: { src: "/images/clients/anant-square.webp", width: 218, height: 35 },
  },
  {
    name: "Laukik Lifestyles",
    category: "real-estate",
    logo: { src: "/images/clients/laukik-lifestyles.webp", width: 226, height: 40 },
  },
  {
    name: "SBSL",
    category: "real-estate",
    logo: { src: "/images/clients/sbsl.webp", width: 247, height: 154 },
  },
  {
    name: "Sai Tapaswi Builders",
    category: "real-estate",
    logo: { src: "/images/clients/sai-tapaswi-builders.webp", width: 371, height: 151 },
  },
  {
    name: "Luxora Realty",
    category: "real-estate",
    logo: { src: "/images/clients/luxora-realty.webp", width: 338, height: 300 },
  },
  {
    name: "Eternia Residences",
    category: "real-estate",
    logo: { src: "/images/clients/eternia-residences.webp", width: 600, height: 258 },
  },
  {
    name: "Skycon",
    category: "real-estate",
    logo: { src: "/images/clients/skycon.webp", width: 324, height: 106 },
  },
  {
    name: "Balaji Annex",
    category: "real-estate",
    logo: { src: "/images/clients/balaji-annex.webp", width: 591, height: 138 },
  },
  {
    name: "Siddhivinayak Builders & Developers",
    category: "real-estate",
    logo: { src: "/images/clients/siddhivinayak-builders.webp", width: 300, height: 300 },
  },
  {
    name: "Balaji Builders & Developers",
    category: "real-estate",
    logo: { src: "/images/clients/balaji-builders.webp", width: 295, height: 300 },
  },
  {
    name: "GLEG",
    category: "commercial",
    logo: { src: "/images/clients/gleg.webp", width: 196, height: 196 },
  },
  {
    name: "Petrox",
    category: "industrial",
    logo: { src: "/images/clients/petrox.webp", width: 206, height: 62 },
  },
];

/** Clients that have a logo, in display order (used by the homepage teaser). */
export const logoClients = clients.filter((client): client is Client & { logo: ClientLogo } =>
  Boolean(client.logo)
);

/**
 * Residential co-operative housing societies OSSF serves, as listed in the
 * OSSF presentation (slides 18-19), in its order. Names are as spelt there;
 * "Co-operative Housing Society" is dropped from each (the section heading
 * says it). CLIENT CONFIRMATION REQUIRED: check spellings such as
 * "Woodstok", "Princenton", "Willocrest" and "Velly Tower". "Waldraff" in
 * the presentation is Waldorf (confirmed 10-11-2026).
 */
export const residentialSocieties: string[] = [
  "Athena",
  "Astra",
  "Brentford",
  "Crown",
  "Spenta",
  "Carlton",
  "Carrara",
  "Ashwini",
  "Clayton",
  "Green Wood",
  "Paramount",
  "Hillspring",
  "Sarita",
  "Villa Grand",
  "Woodstok",
  "Ashar Enclave",
  "Willocrest",
  "Hawara City",
  "Rosa Gardenia",
  "Rosa Bella",
  "Princenton",
  "Kenora",
  "Spen",
  "Ritu Tower",
  "Cassia",
  "Phoenix",
  "Neelkanth Green Iris",
  "Tiara",
  "Vinus Sky City",
  "Natasa Enclave",
  "Solitaire",
  "Cosmos Hawaiian",
  "Tulsi Rai Vihar",
  "Lodha Tiara",
  "Waldorf",
  "Marathon Nextown",
  "Eagleridge",
  "Queensgate",
  "Gangid Galaxy",
  "Om Residency",
  "Balaji Shivam",
  "Velly Tower",
  "Devi Darshan",
  "Titanium Tower",
  "Vijay Vatika",
  "Sonal Laxmi Apartment",
  "La Homes",
  "Tokyo Bay",
  "Anthurium Everest",
  "Shree Saket",
  "Vishant",
  "Edenwood Fed",
];

export const clientShowcaseNote =
  "OSSF serves 200+ clients across Thane, Mumbai, Navi Mumbai and surrounding regions, including the residential societies listed below. Client references and appreciation letters are available on request.";
