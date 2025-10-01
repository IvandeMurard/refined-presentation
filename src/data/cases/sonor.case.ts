// src/data/cases/sonor.case.ts
export type CaseMeta = {
  id: string;
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  logo?: string;
  bullets?: string[];
  ctaHref: string;
};

export const sonorCase: CaseMeta = {
  id: "sonor",
  slug: "sonor",
  category: "CASE STUDY — SONOR",
  title: "Réduire la pollution sonore avec l’open data",
  subtitle: "De l’idée à un SaaS incubé par la Banque des Territoires",
  badge: "Open Data",
  image: "/img/work/sonor.jpg",
  logo: "/img/logos/sonor.svg",
  bullets: [
    "30+ entretiens parties prenantes",
    "3 POCs avec collectivités",
    "€20k financements",
    "Cartographie + pipeline data",
  ],
  ctaHref: "/Sonor",
};
