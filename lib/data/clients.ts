// Client names sourced from the "client showcase" pages of the client-supplied
// OSSF Company Profile (confirmed 20-09-2026) — the corporate/institutional
// names OSSF itself presents to prospects as a logo wall, so treated as
// approved for public display.
//
// The company profile separately lists 100+ individual residential
// societies/buildings under service (with full addresses). That granular list
// is not published here — it reads as security-sensitive for those
// societies (which building uses which security vendor) and wasn't presented
// as public-facing collateral the way this logo-wall tier was. It remains
// available internally and the note below points visitors to ask directly,
// matching the company profile's own line: "Client references and
// appreciation letters are available upon request."

export type ClientName = {
  name: string;
};

export const clientNames: ClientName[] = [
  { name: "Lodha" },
  { name: "Marathon Realty Advisors" },
  { name: "Sharma Realty" },
  { name: "Kalpataru" },
  { name: "Sairaj Builders And Developers" },
  { name: "Runwal Realty" },
  { name: "KIMS Hospitals" },
  { name: "B and R Bridge & Roof Co. (India) Ltd." },
  { name: "Sai Balaji Enterprises" },
  { name: "Shree Balaji Properties and Builders" },
  { name: "Roma Builders & Promoters" },
  { name: "Puraniks" },
  { name: "Sudhir" },
  { name: "Kaya Enterprises" },
  { name: "Waldorf" },
  { name: "Gaurav Promoters and Builder" },
  { name: "Systematic Group of Companies" },
  { name: "Vee Gee & Associates" },
  { name: "The Blue Roof Club" },
  { name: "New Horizon School" },
  { name: "Woodstock School" },
  { name: "LA Homes Estates" },
  { name: "Ehta Realtors Builders & Developers" },
  { name: "Venus Nirvana" },
];

export const clientShowcaseNote =
  "OSSF also secures 100+ residential societies and commercial premises across Thane, Mumbai, Navi Mumbai and surrounding regions. Client references and appreciation letters are available on request.";
