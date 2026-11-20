// Registrations OSSF holds. Per the client's instruction (03-10-2026),
// registration and licence numbers (GSTIN, PAN, PSARA licence no., UDYAM,
// PF, ESIC, PT, LWF) must NOT be published on the website - only the names of
// the registrations are shown. Numbers and certificate copies are shared with
// clients on request. Do not add a number field back here.

export type ComplianceItem = {
  title: string;
  description: string;
};

export const complianceItems: ComplianceItem[] = [
  {
    title: "PSARA Licence",
    description:
      "Licensed under the Private Security Agencies (Regulation) Act to operate as a private security agency.",
  },
  {
    title: "Shops & Establishment",
    description: "Registered under the Maharashtra Shops & Establishments Act.",
  },
  {
    title: "EPFO Registration",
    description:
      "Provident Fund contributions managed for eligible employees as per statutory rules.",
  },
  {
    title: "ESIC Registration",
    description: "Employees' State Insurance coverage maintained for eligible personnel.",
  },
  {
    title: "Labour Welfare Fund",
    description: "Registered contributor to the Maharashtra Labour Welfare Fund.",
  },
  {
    title: "Professional Tax",
    description: "Professional Tax obligations maintained as per Maharashtra state regulations.",
  },
  {
    title: "GST Registration",
    description: "Registered under India's Goods and Services Tax regime.",
  },
  {
    title: "UDYAM (MSME) Registration",
    description: "Registered as an enterprise under the UDYAM (MSME) framework.",
  },
  {
    title: "PAN Registration",
    description: "Holds a Permanent Account Number issued by the Income Tax Department.",
  },
];
