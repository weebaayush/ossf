import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  GraduationCap,
  UserCheck,
  HeartPulse,
  Brain,
  Shirt,
  Clock,
  HandHeart,
  Siren,
  ClipboardCheck,
  ShieldCheck,
  Settings2,
  Medal,
} from "lucide-react";

export type Differentiator = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// Verified operational differentiators, drawn directly from the company profile.
export const differentiators: Differentiator[] = [
  {
    icon: BadgeCheck,
    title: "Police Verified",
    description: "Every deployed personnel undergoes police verification.",
  },
  {
    icon: GraduationCap,
    title: "Professionally Trained",
    description: "Personnel are trained for the operational demands of each site.",
  },
  {
    icon: Medal,
    title: "Ex-Servicemen Personnel",
    description: "Our workforce includes personnel from the retired defence services.",
  },
  {
    icon: UserCheck,
    title: "Disciplined & Well Groomed",
    description: "Discipline and presentation are maintained as a standard, not an exception.",
  },
  {
    icon: HeartPulse,
    title: "Physically Fit & Medically Sound",
    description: "Personnel are assessed for physical fitness and medical soundness.",
  },
  {
    icon: Brain,
    title: "Mentally Alert",
    description: "Alertness is treated as a core requirement of the role, not an add-on.",
  },
  {
    icon: Shirt,
    title: "Properly Uniformed",
    description: "Consistent, professional uniform standards across every deployment.",
  },
  {
    icon: Clock,
    title: "Punctual & Dependable",
    description: "Shift discipline and dependability are core to how OSSF operates.",
  },
  {
    icon: HandHeart,
    title: "Honest & Dedicated",
    description: "Personnel are selected and managed for integrity and dedication.",
  },
  {
    icon: Siren,
    title: "Capable of Handling Emergencies",
    description: "Personnel are prepared to respond appropriately in emergency situations.",
  },
  {
    icon: ClipboardCheck,
    title: "Committed to Client Instructions",
    description: "Deployment follows client instructions and OSSF company policy alike.",
  },
  {
    icon: ShieldCheck,
    title: "24×365 Operational Capability",
    description: "Security and facility support operate around the clock, every day of the year.",
  },
  {
    icon: Settings2,
    title: "Customized Security Solutions",
    description: "Deployment plans are tailored to each site rather than applied generically.",
  },
];
