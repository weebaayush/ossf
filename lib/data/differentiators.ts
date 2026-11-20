export type Differentiator = {
  title: string;
  description: string;
};

// How OSSF runs a deployment, drawn from the company profile. Order matters:
// the homepage and the About page show the first 6, so the points clients
// weigh most when choosing an agency come first.
export const differentiators: Differentiator[] = [
  {
    title: "Police verification",
    description:
      "Every guard, housekeeper and technician is police verified before their first shift.",
  },
  {
    title: "Training before deployment",
    description:
      "Duties, discipline, emergency response and fire safety basics, then a briefing on the post orders for your site.",
  },
  {
    title: "Day and night supervision",
    description:
      "Our supervisors visit sites regularly and carry out surprise checks and night audits.",
  },
  {
    title: "Immediate replacement",
    description:
      "If a staff member is absent or is not suited to the site, we send a replacement immediately.",
  },
  {
    title: "Statutory compliance",
    description:
      "We hold a PSARA licence and pay PF, ESIC and other statutory dues for the staff we deploy.",
  },
  {
    title: "Daily reporting",
    description:
      "Guards keep an occurrence register and hand over in writing at every shift change.",
  },
  {
    title: "Ex-servicemen",
    description: "Our guarding teams include retired defence personnel.",
  },
  {
    title: "24 × 365 cover",
    description:
      "Cover runs every day of the year, including Sundays, festivals and public holidays.",
  },
  {
    title: "Fitness checks",
    description:
      "Personnel are checked for physical fitness and medical soundness before deployment.",
  },
  {
    title: "Uniform and grooming",
    description: "Staff report for duty in full, clean uniform.",
  },
  {
    title: "Honesty and punctuality",
    description: "Staff are selected for honesty and held to their reporting times.",
  },
  {
    title: "Emergency response",
    description:
      "Guards are trained to respond to fire, medical and security incidents and to alert the police or fire brigade.",
  },
  {
    title: "Site-specific planning",
    description: "Headcount, shifts and post orders are worked out for each site after a visit.",
  },
];
