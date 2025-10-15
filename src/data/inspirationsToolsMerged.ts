// src/data/inspirationsToolsMerged.ts

export type Media = {
  type?: 'audio' | 'video';
  src?: string;
  preview?: string;
  durationSec?: number;
};

export type BaseItem = {
  id: string;
  title: string;
  subtitle?: string;
  logo?: string;
  link?: string;
  excerpt?: string;
  comment?: string;
  media?: Media;
  tags?: string[];
};

// -------------------- COMMUNITIES --------------------
export const communities: BaseItem[] = [
  {
    id: 'lennys-paris',
    title: "Lenny's Newsletter • Paris",
    subtitle: 'Product & Growth meetups',
    logo: '/img/logos/lennys.svg',
    link: 'https://www.lennysnewsletter.com/',
    excerpt: 'Conversations concrètes autour de discovery, AI, go-to-market et growth.',
    comment: 'J’y co-anime des échanges orientés impact business.',
    tags: ['Product', 'Growth', 'Community']
  },
  {
    id: 'the-ai-collective',
    title: 'The AI Collective',
    subtitle: 'Builders • Agents • Evaluations',
    logo: '/img/logos/ai-collective.png',
    link: 'https://www.theaicollective.co/',
    excerpt: 'Echanges pratiques sur les agents, l’évaluation et les workflows.',
    comment: "Structure mes workflows d’évaluation et de LLM-as-a-judge.",
    tags: ['AI', 'Agents', 'Evals']
  },
  {
    id: 'join-lion',
    title: 'Join Lion / Promptathon',
    subtitle: 'Communauté produit & innovation',
    logo: '/img/logos/join-lion.png',
    link: 'https://www.joinlion.co/',
    excerpt: 'Culture du prototypage rapide et des hackathons.',
    tags: ['Hackathon', 'Prototype']
  }
];

// -------------------- INSPIRATIONS --------------------
export const inspirations: BaseItem[] = [
  {
    id: 'unreasonable-hospitality',
    title: 'Unreasonable Hospitality',
    subtitle: 'Hospitality as a product advantage',
    logo: '/img/logos/unreasonable.png',
    link: 'https://www.unreasonablehospitality.com/',
    excerpt: "Comment l’hospitalité radicale devient un différenciateur produit.",
    comment: 'Mincro-moments de considération intégrés dans l’UX.',
    tags: ['Experience', 'Delight']
  },
  {
    id: 'fh-design',
    title: 'fh.design',
    subtitle: 'Lisibilité radicale, vertical flow',
    logo: '/img/logos/fh.svg',
    link: 'https://fh.design/',
    excerpt: 'Clarté visuelle et hiérarchie typographique.',
    tags: ['Typography', 'Layout']
  },
  {
    id: 'product-delight',
    title: 'Product Delight',
    subtitle: 'Curated product details',
    logo: '/img/logos/product-delight.png',
    link: 'https://productdelight.carrd.co/',
    excerpt: 'Petits détails qui créent une disproportion de valeur perçue.',
    tags: ['Delight', 'UX']
  }
];

// -------------------- RESOURCES --------------------
export const resources: BaseItem[] = [
  {
    id: 'lennys-newsletter',
    title: "Lenny's Newsletter",
    subtitle: 'PM frameworks, case studies',
    logo: '/img/logos/lennys.svg',
    link: 'https://www.lennysnewsletter.com/',
    excerpt: 'Playbooks concrets sur discovery, PMF, growth et org design.',
    tags: ['PM', 'Growth']
  },
  {
    id: 'first-round-review',
    title: 'First Round Review',
    subtitle: "Operators' insights",
    logo: '/img/logos/first-round.svg',
    link: 'https://review.firstround.com/',
    excerpt: 'Retours terrain de leaders produit, design, data.',
    tags: ['Operations', 'Leadership']
  },
  {
    id: 'laws-of-ux',
    title: 'Laws of UX',
    subtitle: 'Psychology × Interface design',
    logo: '/img/logos/lawsofux.svg',
    link: 'https://lawsofux.com/',
    excerpt: 'Principes psychologiques transposés en heuristiques UI/UX.',
    tags: ['UX', 'Psychology']
  }
];

// -------------------- TOOLS --------------------
export const tools: (BaseItem & {
  homepage?: string;
  referral?: string;
  usedIn?: string[];
})[] = [
  {
    id: 'lovable',
    title: 'Lovable',
    subtitle: 'Builder IA (React + Tailwind)',
    logo: '/img/logos/lovable.svg',
    homepage: 'https://lovable.dev/',
    excerpt: 'Accélère la mise en page et l’itération UI.',
    comment: 'Base du portfolio actuel.',
    tags: ['Builder', 'UI'],
    usedIn: ['Portfolio']
  },
  {
    id: 'vercel',
    title: 'Vercel',
    subtitle: 'Hosting & previews',
    logo: '/img/logos/vercel.svg',
    homepage: 'https://vercel.com/',
    excerpt: 'Déploiements rapides, previews par PR.',
    tags: ['Infra'],
    usedIn: ['Portfolio', 'Agents']
  },
  {
    id: 'supabase',
    title: 'Supabase',
    subtitle: 'DB + Auth + Storage',
    logo: '/img/logos/supabase.svg',
    homepage: 'https://supabase.com/',
    excerpt: 'Tables Resources/Tools/Inspirations.',
    tags: ['Data', 'Auth'],
    usedIn: ['Portfolio']
  }
];
