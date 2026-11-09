import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  Receipt,
  Landmark,
  Users2,
  HeartHandshake,
  Percent,
  Store,
  Fingerprint,
  Banknote,
} from "lucide-react";

// Registrations OSSF holds. Per the client's instruction (03-10-2026),
// registration and licence numbers (GSTIN, PAN, PSARA licence no., UDYAM,
// PF, ESIC, PT, LWF) must NOT be published on the website — only the names of
// the registrations are shown. Numbers and certificate copies are shared with
// clients on request. Do not add a number field back here.

export type ComplianceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const complianceItems: ComplianceItem[] = [
  {
    icon: ShieldCheck,
    title: "PSARA Licence",
    description:
      "Licensed under the Private Security Agencies (Regulation) Act to operate as a private security agency.",
  },
  {
    icon: Store,
    title: "Shops & Establishment",
    description: "Registered under the Maharashtra Shops & Establishments Act.",
  },
  {
    icon: Users2,
    title: "EPFO Registration",
    description:
      "Provident Fund contributions managed for eligible employees as per statutory rules.",
  },
  {
    icon: HeartHandshake,
    title: "ESIC Registration",
    description: "Employees' State Insurance coverage maintained for eligible personnel.",
  },
  {
    icon: Banknote,
    title: "Labour Welfare Fund",
    description: "Registered contributor to the Maharashtra Labour Welfare Fund.",
  },
  {
    icon: Percent,
    title: "Professional Tax",
    description: "Professional Tax obligations maintained as per Maharashtra state regulations.",
  },
  {
    icon: Receipt,
    title: "GST Registration",
    description: "Registered under India's Goods and Services Tax regime.",
  },
  {
    icon: Landmark,
    title: "UDYAM (MSME) Registration",
    description: "Registered as an enterprise under the UDYAM (MSME) framework.",
  },
  {
    icon: Fingerprint,
    title: "PAN Registration",
    description: "Holds a Permanent Account Number issued by the Income Tax Department.",
  },
];
