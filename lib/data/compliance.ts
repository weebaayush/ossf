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

export type ComplianceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  // Registration/licence number as provided in the client-supplied company
  // profile (confirmed 20-09-2026) — approved for public display.
  value: string;
};

export const complianceItems: ComplianceItem[] = [
  {
    icon: ShieldCheck,
    title: "PSARA Licence",
    description:
      "Licensed under the Private Security Agencies (Regulation) Act to operate as a security agency.",
    value: "PSA/L/35/MH/2022/APR/3/1799",
  },
  {
    icon: Receipt,
    title: "GSTIN",
    description: "Registered under India's Goods and Services Tax regime.",
    value: "27GOIPS7068G1Z8",
  },
  {
    icon: Landmark,
    title: "UDYAM Registration",
    description: "Registered under the UDYAM (MSME) framework.",
    value: "UDYAM-MH-33-0512445",
  },
  {
    icon: Users2,
    title: "PF / EPF Registration",
    description: "Provident Fund contributions managed in line with statutory requirements.",
    value: "THTHA1627467000",
  },
  {
    icon: HeartHandshake,
    title: "ESIC Registration",
    description: "Employee State Insurance coverage maintained for eligible personnel.",
    value: "34000358510001018",
  },
  {
    icon: Percent,
    title: "Professional Tax Registration",
    description: "Professional Tax obligations maintained as per Maharashtra state regulation.",
    value: "27175246827",
  },
  {
    icon: Store,
    title: "Shops & Establishment",
    description: "Registered under the applicable Shops & Establishment Act.",
    value: "Registered",
  },
  {
    icon: Banknote,
    title: "Labour Welfare Fund",
    description: "Registered contributor to the state Labour Welfare Fund.",
    value: "THTHAO00067",
  },
  {
    icon: Fingerprint,
    title: "PAN",
    description: "Permanent Account Number issued by the Income Tax Department.",
    value: "GOIPS7068G",
  },
];
