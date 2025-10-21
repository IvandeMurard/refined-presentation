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
  image: "/img/image-banniere-sonor.jpg",
  logo: "/img/logo_sonor.png",
  bullets: [
    "20+ entretiens parties prenantes",
    "€20k financements",
    "Accompagné par La Banque des Territoires"
  ],
  ctaHref: "/case-study/sonor",
};
