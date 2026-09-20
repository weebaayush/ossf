import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  Receipt,
  Landmark,
  Users2,
  HeartHandshake,
  Percent,
  Store,
} from "lucide-react";

export type ComplianceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// Categories only — no registration/license numbers are published until the
// client explicitly approves showing them as public website content.
export const complianceItems: ComplianceItem[] = [
  {
    icon: ShieldCheck,
    title: "PSARA License",
    description:
      "Operating under the Private Security Agencies (Regulation) Act licensing framework.",
  },
  {
    icon: Receipt,
    title: "GST Registered",
    description: "Registered under India's Goods and Services Tax regime.",
  },
  {
    icon: Landmark,
    title: "UDYAM Registered",
    description: "Registered under the UDYAM (MSME) framework.",
  },
  {
    icon: Users2,
    title: "PF / EPF Compliant",
    description: "Provident Fund contributions managed in line with statutory requirements.",
  },
  {
    icon: HeartHandshake,
    title: "ESIC Compliant",
    description: "Employee State Insurance coverage maintained for eligible personnel.",
  },
  {
    icon: Percent,
    title: "Professional Tax",
    description: "Professional Tax obligations maintained as per state regulation.",
  },
  {
    icon: Store,
    title: "Shops & Establishment",
    description: "Registered under the applicable Shops & Establishment Act.",
  },
];
