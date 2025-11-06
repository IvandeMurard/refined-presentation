// src/data/experience.ts
export type ExperienceItem = {
  title: string;
  company: string;
  companyUrl?: string;
  year?: string;
  description: string;
  details?: string[];   // pour l'expand inline
  links?: { label: string; href: string }[];
};

export const experiences: ExperienceItem[] = [
  {
    title: "Consultant IT Project Manager",
    company: "DOMUSVI",
    companyUrl: "https://www.domusvi.com/",
    year: "2024",
    description:
      "Delivered a SaaS business tool solution, leading 0→1 conception with various stakeholders",
    details: [
      "Scope: health, CRM, leasing, catering",
      "Discovery → MVP → onboarding (POC validated, MVP adopted)",
      "Coordinated SaaS vendor + IT + business + legal",
    ],
    // links: [{ label: "Case note", href: "/notes/domusvi" }],
  },
  {
    title: "Consultant Data Project Manager",
    company: "BOUYGUES TELECOM",
    companyUrl: "https://www.corporate.bouyguestelecom.fr/",
    year: "2023",
    description:
      "Led invoice recovery from data aggregation to +40% recovered",
    details: [
      "Cross-team dashboard (IT, finance, sales, leadership)",
      "Prioritization flow for collections",
      "Result: dashboard adopted, +40% recovered",
    ],
  },
  {
    title: "Data Project Manager",
    company: "HUWISE",
    companyUrl: "https://www.data.gouv.fr/organizations/huwise/",
    year: "2022",
    description:
      "Accompanied and led 20 cities and metropolises in building their open data portals",
    details: [
      "Portfolio: 22 public sector customers across EU",
      "Training, usage KPIs follow-up, 0 churn on scope",
      "Launched 2 new city portals, increased data volume",
    ],
  },
  {
    title: "Co-founder",
    company: "SONOR",
    companyUrl: "https://sonor.dorik.io/",
    year: "2020",
    description:
      "Open-data SaaS to help cities reduce noise pollution",
    details: [
      "Team of 4 with Matrice Incubator & Banque des Territoires",
      "Discovery, PRD, backlog; led a dev/data-scientist",
      "2 public grants (€20k), prototype delivered",
    ],
  },
];
