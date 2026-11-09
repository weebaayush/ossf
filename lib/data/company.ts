import type { LucideIcon } from "lucide-react";
import {
  Target,
  Eye,
  Scale,
  ShieldCheck,
  Award,
  Handshake,
  ClipboardCheck,
  HeartHandshake,
  UserSearch,
  BadgeCheck,
  HeartPulse,
  GraduationCap,
  MapPin,
  RefreshCw,
} from "lucide-react";
import { siteConfig } from "@/lib/utils/site-config";

// Company-level content: mission, vision, values, recruitment & training, FAQs.
// Written 06-10-2026 and rewritten 02-11-2026 after reviewing comparable Indian
// security & facility management companies, using only facts from the OSSF company profiles (police
// verification, training, ex-servicemen, supervision, 24×365, PSARA, service
// areas). Do not add figures (headcount, guards deployed, certifications)
// unless the client confirms them.

export const mission = {
  icon: Target,
  title: "Our Mission",
  text: "To keep people, property and premises safe with trained, disciplined and closely supervised staff, and to be the vendor our clients never have to chase.",
};

export const vision = {
  icon: Eye,
  title: "Our Vision",
  text: "To be the security and facility management partner that organizations across Maharashtra and beyond recommend first, because our people turn up, stay alert and do the job right.",
};

export type Value = { icon: LucideIcon; title: string; description: string };

export const coreValues: Value[] = [
  {
    icon: Scale,
    title: "Integrity",
    description: "Straight answers, honest billing and full statutory compliance.",
  },
  {
    icon: ShieldCheck,
    title: "Discipline",
    description: "Punctual, well-groomed and alert on every shift, not only on inspection day.",
  },
  {
    icon: Award,
    title: "Professionalism",
    description: "People who know their duties and carry them out without being reminded.",
  },
  {
    icon: ClipboardCheck,
    title: "Accountability",
    description: "One point of contact who owns every issue until it is resolved.",
  },
  {
    icon: Handshake,
    title: "Client First",
    description: "Service shaped around your site, your instructions and your feedback.",
  },
  {
    icon: HeartHandshake,
    title: "Safety First",
    description: "Protecting people and property comes before everything else.",
  },
];

export type ProcessStepWithIcon = { icon: LucideIcon; title: string; description: string };

/** How OSSF selects, trains and manages personnel before and after deployment. */
export const recruitmentSteps: ProcessStepWithIcon[] = [
  {
    icon: UserSearch,
    title: "Careful Selection",
    description:
      "Candidates are screened for attitude, background and suitability. For security posts we also recruit ex-servicemen.",
  },
  {
    icon: BadgeCheck,
    title: "Police Verification",
    description: "No one joins a site until their police verification is complete.",
  },
  {
    icon: HeartPulse,
    title: "Fitness Check",
    description: "Personnel must be physically fit, medically sound and mentally alert.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description:
      "Duties, discipline, emergency response and fire safety basics, followed by a briefing on your site's instructions.",
  },
  {
    icon: MapPin,
    title: "Deployment & Supervision",
    description:
      "Staff report in full uniform and are checked through regular visits, surprise inspections and night audits.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Support",
    description:
      "Performance is reviewed regularly, and anyone absent or unsuitable is replaced immediately.",
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Is Om Shiv Security Force a licensed security agency?",
    answer:
      "Yes. OSSF is licensed under the Private Security Agencies (Regulation) Act (PSARA) and holds every statutory registration a security agency needs, including EPFO, ESIC, Professional Tax, GST and Shops & Establishment. Copies are shared with clients on request.",
  },
  {
    question: "Are your guards police verified and trained?",
    answer:
      "Yes. Every person we deploy is police verified and trained in their duties, discipline, emergency response and fire safety basics before reaching your site. Our security team also includes ex-servicemen.",
  },
  {
    question: "Who is responsible for PF, ESIC and wages?",
    answer:
      "We are. OSSF employs the staff, pays their wages and handles PF, ESIC and other statutory contributions. Records are available for your audits, so your organization is not left exposed as the principal employer.",
  },
  {
    question: "What happens if a guard is absent or not performing?",
    answer:
      "We send a replacement immediately. If someone is not the right fit for your site, tell your OSSF point of contact and we will change the staff member, no lengthy process needed.",
  },
  {
    question: "How do you make sure guards stay alert, especially at night?",
    answer:
      "Our supervisors make regular site visits, surprise inspections and night audits. Guards maintain occurrence registers and shift handovers, so lapses are caught and corrected quickly.",
  },
  {
    question: "Can we hire more than one service from you?",
    answer:
      "Yes, and many clients do. Security, housekeeping, valet drivers and technical or support manpower can be combined under one contract, with one invoice and one point of contact.",
  },
  {
    question: "Which areas do you serve?",
    answer: `We are based in ${siteConfig.address.locality} and serve clients across ${siteConfig.serviceAreas.join(", ")}.`,
  },
  {
    question: "How do I get a quotation?",
    answer:
      "Fill in the Request a Quote form or call us. Tell us your site location, the services you need and the number of staff or shifts, and we will visit if needed and send a proposal tailored to your site.",
  },
];
