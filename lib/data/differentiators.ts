import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  GraduationCap,
  Medal,
  RefreshCw,
  Moon,
  ClipboardList,
  FileCheck2,
  Clock,
  HeartPulse,
  Shirt,
  HandHeart,
  Siren,
  Settings2,
} from "lucide-react";

export type Differentiator = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// Operational commitments, drawn from the company profile. Order matters: the
// homepage shows the first 8 and the About page the first 6, so the points
// clients weigh most when choosing an agency come first.
export const differentiators: Differentiator[] = [
  {
    icon: BadgeCheck,
    title: "Police Verified",
    description: "Every person we deploy is police verified before reaching your site.",
  },
  {
    icon: GraduationCap,
    title: "Trained Before Deployment",
    description:
      "Duties, discipline, emergency response and fire safety basics, plus a briefing on your site.",
  },
  {
    icon: Medal,
    title: "Ex-Servicemen on the Team",
    description: "Retired defence personnel bring discipline and leadership to our guarding teams.",
  },
  {
    icon: RefreshCw,
    title: "Immediate Replacement",
    description: "If someone is absent or not the right fit, a replacement is sent without delay.",
  },
  {
    icon: Moon,
    title: "Supervised Day and Night",
    description: "Supervisors make regular visits, surprise checks and night audits.",
  },
  {
    icon: ClipboardList,
    title: "Daily Reporting",
    description: "Occurrence registers and shift handovers keep you informed about your site.",
  },
  {
    icon: FileCheck2,
    title: "Fully Compliant",
    description:
      "PSARA licensed, with PF, ESIC and every statutory registration in place, so you are never exposed.",
  },
  {
    icon: Clock,
    title: "24×365 Operations",
    description: "Round-the-clock cover, including Sundays, festivals and public holidays.",
  },
  {
    icon: HeartPulse,
    title: "Fit and Alert",
    description: "Personnel are assessed for physical fitness, medical soundness and alertness.",
  },
  {
    icon: Shirt,
    title: "Uniformed and Well Groomed",
    description: "Complete, clean uniforms and a professional bearing on every shift.",
  },
  {
    icon: HandHeart,
    title: "Honest and Punctual",
    description: "Selected for integrity and managed for punctuality, shift after shift.",
  },
  {
    icon: Siren,
    title: "Ready for Emergencies",
    description:
      "Trained to act on fire, medical and security incidents and alert the right authorities.",
  },
  {
    icon: Settings2,
    title: "Planned Around Your Site",
    description:
      "Headcount, shifts and post orders designed for your premises, not copied from a template.",
  },
];
