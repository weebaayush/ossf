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
// The company profile separately lists 100+ individual residential
// societies/buildings under service (with full addresses). That granular list
// is not published here — it reads as security-sensitive for those
// societies (which building uses which security vendor) and wasn't presented
// as public-facing collateral the way this logo-wall tier was. The note below
// points visitors to ask directly, matching the company profile's own line:
// "Client references and appreciation letters are available upon request."
//
// CLIENT CONFIRMATION REQUIRED:
//  • OSSF should confirm each client is comfortable with its logo appearing on
//    OSSF's website. To remove a logo, delete its `logo` field (the client
//    then shows as a name card) or remove the entry entirely.
//  • `category` powers the filter on /clients. It was assigned from each
//    client's name/logo (the profile does not group clients by sector) —
//    OSSF should check it. Clients whose sector isn't evident from the
//    profile are under "Commercial & Others".

export type ClientCategory = "real-estate" | "healthcare" | "education" | "industrial" | "commercial";

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
  { name: "Lodha", category: "real-estate", logo: { src: "/images/clients/lodha.svg", width: 299, height: 47 } },
  { name: "Kalpataru", category: "real-estate", logo: { src: "/images/clients/kalpataru.svg", width: 455, height: 90 } },
  { name: "KIMS Hospitals", category: "healthcare", logo: { src: "/images/clients/kims-hospitals.webp", width: 280, height: 120 } },
  { name: "Runwal Realty", category: "real-estate", logo: { src: "/images/clients/runwal-realty.svg", width: 101, height: 131 } },
  { name: "Marathon Realty Advisors", category: "real-estate", logo: { src: "/images/clients/marathon-realty-advisors.webp", width: 280, height: 131 } },
  { name: "B and R Bridge & Roof Co. (India) Ltd.", category: "industrial", logo: { src: "/images/clients/b-and-r-bridge-roof.webp", width: 120, height: 150 } },
  { name: "Puraniks", category: "real-estate", logo: { src: "/images/clients/puraniks.webp", width: 280, height: 54 } },
  { name: "Roma Builders & Promoters", category: "real-estate", logo: { src: "/images/clients/roma-builders.webp", width: 137, height: 140 } },
  { name: "Sudhir", category: "industrial", logo: { src: "/images/clients/sudhir.webp", width: 346, height: 76 } },
  // Not in the company profile's logo pages — logo taken from the official
  // site of the organisation with this name. CLIENT CONFIRMATION REQUIRED:
  // OSSF to confirm it is the same client.
  { name: "The Blue Roof Club", category: "commercial", logo: { src: "/images/clients/the-blue-roof-club.webp", width: 203, height: 140 } },
  { name: "New Horizon School", category: "education", logo: { src: "/images/clients/new-horizon-school.webp", width: 142, height: 140 } },
  // No official website/logo file could be found for the clients below, so
  // their logos are taken from the OSSF company profile's client-showcase
  // page (cleaned up and enlarged 2x). They are lower resolution than the
  // official logos above. CLIENT CONFIRMATION REQUIRED: replace each with the
  // client's original logo file (SVG / high-res PNG) when OSSF obtains it.
  { name: "Sharma Realty", category: "real-estate", logo: { src: "/images/clients/sharma-realty.webp", width: 290, height: 182 } },
  { name: "Sairaj Builders And Developers", category: "real-estate", logo: { src: "/images/clients/sairaj-builders.webp", width: 376, height: 338 } },
  { name: "Sai Balaji Enterprises", category: "commercial", logo: { src: "/images/clients/sai-balaji-enterprises.webp", width: 372, height: 338 } },
  { name: "Shree Balaji Properties and Builders", category: "real-estate", logo: { src: "/images/clients/shree-balaji-properties.webp", width: 286, height: 206 } },
  { name: "Kaya Enterprises", category: "commercial", logo: { src: "/images/clients/kaya-enterprises.webp", width: 416, height: 348 } },
  { name: "Gaurav Promoters and Builder", category: "real-estate", logo: { src: "/images/clients/gaurav-promoters.webp", width: 342, height: 344 } },
  // No official logo file could be verified for the clients below, so they
  // appear as name cards. Add `logo` once OSSF obtains the original files.
  { name: "Waldorf", category: "commercial" },
  { name: "Systematic Group of Companies", category: "commercial" },
  { name: "Vee Gee & Associates", category: "commercial" },
  { name: "Woodstock School", category: "education" },
  { name: "LA Homes Estates", category: "real-estate" },
  { name: "Ehta Realtors Builders & Developers", category: "real-estate" },
  { name: "Venus Nirvana", category: "real-estate" },
];

/** Clients that have a logo, in display order (used by the homepage teaser). */
export const logoClients = clients.filter(
  (client): client is Client & { logo: ClientLogo } => Boolean(client.logo)
);

export const clientShowcaseNote =
  "OSSF also secures 100+ residential societies and commercial premises across Thane, Mumbai, Navi Mumbai and surrounding regions. Client references and appreciation letters are available on request.";
