import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  Radio,
  ClipboardList,
  Building2,
  Users,
  FileSearch,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  description: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    slug: "security-services",
    icon: ShieldCheck,
    title: "Security Services",
    shortDescription:
      "Trained, police-verified personnel deployed for guarding, patrolling and access control.",
    description:
      "Uniformed security personnel deployed to protect people, premises and operations — covering guarding, patrolling, access control and day-to-day site discipline under documented reporting.",
    capabilities: [
      "Security personnel deployment",
      "Patrolling",
      "Access control",
      "Crowd management",
      "Emergency response",
      "Daily occurrence and shift handover reporting",
    ],
  },
  {
    slug: "electronic-surveillance-consultation",
    icon: Radio,
    title: "Electronic Surveillance Consultation",
    shortDescription:
      "Consultation on CCTV and alarm monitoring to complement on-ground personnel.",
    description:
      "Advisory support on electronic surveillance — including CCTV and alarm monitoring — so technology and trained personnel work together as one coordinated security layer.",
    capabilities: [
      "CCTV monitoring coordination",
      "Alarm monitoring coordination",
      "Surveillance planning consultation",
    ],
  },
  {
    slug: "security-consulting",
    icon: FileSearch,
    title: "Security Consulting & Risk Assessment",
    shortDescription:
      "Site-specific risk assessment and security planning for your operations.",
    description:
      "Consultation and risk assessment services to help organizations understand exposure and design a security approach appropriate to their site, sector and operating hours.",
    capabilities: [
      "Risk assessment services",
      "Security consulting",
      "Site-specific planning",
    ],
  },
  {
    slug: "facility-support-services",
    icon: Building2,
    title: "Facility Support Services",
    shortDescription:
      "Facility-related support that keeps day-to-day operations running smoothly.",
    description:
      "Facility support services designed to work alongside security operations, helping client premises run smoothly under a single point of accountability.",
    capabilities: ["Facility support services", "Office management support"],
  },
  {
    slug: "office-management-support",
    icon: ClipboardList,
    title: "Office Management Support",
    shortDescription:
      "Operational support that keeps front-of-house and facility functions organized.",
    description:
      "Support functions that help maintain an organized, professional environment at client offices and facilities, coordinated with the on-site security team.",
    capabilities: ["Office management support", "Operational coordination"],
  },
  {
    slug: "supervision-and-inspections",
    icon: Users,
    title: "Supervision & Inspections",
    shortDescription:
      "Regular supervision, surprise inspections and night audits across deployed sites.",
    description:
      "Ongoing oversight of deployed personnel through regular supervision, surprise inspections, vigilance checks and night audits — with immediate manpower replacement when needed.",
    capabilities: [
      "Regular supervision and inspections",
      "Surprise inspections",
      "Night audits",
      "Vigilance inspections",
      "Immediate manpower replacement",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
