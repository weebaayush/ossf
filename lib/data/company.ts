import { siteConfig } from "@/lib/utils/site-config";

// Company-level content: mission, vision, values, recruitment & training, FAQs.
// Uses only facts from the OSSF company profiles (police verification,
// training, ex-servicemen, supervision, 24x365, PSARA, service areas). Do not
// add figures (headcount, guards deployed, certifications) unless the client
// confirms them. Keep the wording plain: say what OSSF does, not how it feels.

export const mission =
  "To keep people, property and premises safe with trained, disciplined and closely supervised staff.";

export const vision =
  "To be the security and facility management company that clients recommend to each other.";

export type Value = { title: string; description: string };

export const coreValues: Value[] = [
  {
    title: "Integrity",
    description: "Honest billing and full statutory compliance.",
  },
  {
    title: "Discipline",
    description: "Punctual, properly turned out and alert on every shift.",
  },
  {
    title: "Professionalism",
    description: "Staff who know their duties and carry them out without reminders.",
  },
  {
    title: "Accountability",
    description: "One point of contact who stays with an issue until it is closed.",
  },
  {
    title: "Client first",
    description: "Service planned around your site, your instructions and your feedback.",
  },
  {
    title: "Safety first",
    description: "The safety of people and property comes before everything else.",
  },
];

export type RecruitmentStep = { title: string; description: string };

/** How OSSF selects, trains and manages personnel before and after deployment. */
export const recruitmentSteps: RecruitmentStep[] = [
  {
    title: "Selection",
    description:
      "Candidates are screened for background, attitude and suitability for the post. For security duties we also recruit ex-servicemen.",
  },
  {
    title: "Police verification",
    description: "Nobody is sent to a site until their police verification is complete.",
  },
  {
    title: "Fitness check",
    description: "Personnel must be physically fit, medically sound and alert.",
  },
  {
    title: "Training",
    description:
      "Duties, discipline, emergency response and fire safety basics, followed by a briefing on the instructions for your site.",
  },
  {
    title: "Deployment and supervision",
    description:
      "Staff report in full uniform. Supervisors check on them through regular visits, surprise inspections and night audits.",
  },
  {
    title: "Review and replacement",
    description:
      "Performance is reviewed regularly. Anyone who is absent or unsuitable is replaced immediately.",
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Is Om Shiv Security Force a licensed security agency?",
    answer:
      "Yes. OSSF is licensed under the Private Security Agencies (Regulation) Act (PSARA) and holds the statutory registrations a security agency needs, including EPFO, ESIC, Professional Tax, GST and Shops & Establishment. Copies are shared with clients on request.",
  },
  {
    question: "Are your guards police verified and trained?",
    answer:
      "Yes. Every person we deploy is police verified and trained in their duties, discipline, emergency response and fire safety basics before reaching your site. Our security team also includes ex-servicemen.",
  },
  {
    question: "Who is responsible for PF, ESIC and wages?",
    answer:
      "We are. OSSF employs the staff, pays their wages and makes the PF, ESIC and other statutory contributions. The records are available for your audits as principal employer.",
  },
  {
    question: "What happens if a guard is absent or not performing?",
    answer:
      "We send a replacement immediately. If someone is not suited to your site, tell your OSSF contact and we will change the staff member.",
  },
  {
    question: "How do you make sure guards stay alert, especially at night?",
    answer:
      "Our supervisors make regular site visits, surprise inspections and night audits. Guards maintain an occurrence register and hand over in writing at each shift change, so lapses are noticed and corrected.",
  },
  {
    question: "Can we hire more than one service from you?",
    answer:
      "Yes, and many clients do. Security, housekeeping, valet drivers and technical or support manpower can be taken under one contract, with one invoice and one point of contact.",
  },
  {
    question: "What types of premises do you work at?",
    answer:
      "Housing societies and residential complexes, corporate offices, IT parks, factories, warehouses, hospitals, schools and colleges, hotels, malls, construction sites and government establishments.",
  },
  {
    question: "Can guards be arranged for different shifts?",
    answer:
      "Yes. Shifts are planned for each site after a visit, including night shifts and round-the-clock cover on all days of the year.",
  },
  {
    question: "How does a housing society hire security from OSSF?",
    answer:
      "The managing committee contacts us with the society's location, the number of gates and towers and the cover it wants. We visit, propose the number of guards and shifts and send a quotation for the committee to consider.",
  },
  {
    question: "Which areas do you serve?",
    answer: `We currently work for clients in ${siteConfig.coverage}. If your site is elsewhere, contact us and we will tell you whether we can staff it.`,
  },
  {
    question: "How do I get a quotation?",
    answer:
      "Fill in the quote request form or call us. Tell us the site location, the services you need and the number of staff or shifts. We visit the site if needed and send a proposal for it.",
  },
];
