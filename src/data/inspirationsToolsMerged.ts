export const inspirations = [ ...ancien contenu adapté... ];
export const resources = [ ... ];
export const tools = [ ... ];
export const communities = [ ... ];

// src/data/inspirationsToolsMerged.ts

export type Media = {
  type?: 'audio' | 'video';
  src?: string;       // URL vers un média court (≤30–45s)
  preview?: string;   // image d’aperçu éventuelle
  durationSec?: number;
};

export type BaseItem = {
  id: string;
  title: string;
  subtitle?: string;
  logo?: string;      // URL (SVG/PNG, carré si possible)
  link?: string;      // lien principal (site, post, page)
  excerpt?: string;   // court teasing / description
  comment?: string;   // ton avis / insight personnel
  media?: Media;      // court média (play/pause manuel)
  tags?: string[];
};

/** —————————————————————
 *  COMMUNAUTÉS (onglet 1)
 *  ————————————————————— */
export const communities: BaseItem[] = [
  {
    id: 'lennys-paris',
    title: "Lenny’s Newsletter • Paris",
    subtitle: 'Product & Growth community (Paris meetups)',
    logo: '/img/logos/lennys.svg',
    link: 'https://www.lennysnewsletter.com/',
    excerpt: 'Conversations concrètes autour de discovery, AI, go-to-market et growth.',
    comment: "Je co-anime des échanges orientés impact business. Idéal pour confronter des use cases réels.",
    tags: ['Product', 'Growth', 'Community'],
  },
  {
    id: 'the-ai-collective',
    title: 'The AI Collective',
    subtitle: 'Builders • Agents • Evaluations',
    logo: '/img/logos/ai-collective.png',
    link: 'https://www.theaicollective.co/',
    excerpt: 'Échanges pratiques sur les agents, l’évaluation et les workflows.',
    comment: "M’a aidé à structurer mes workflows d’évaluation et de ‘LLM as a judge’.",
    tags: ['AI', 'Agents', 'Evals'],
  },
  {
    id: 'join-lion',
    title: 'Join Lion / Promptathon',
    subtitle: 'Communauté produit & innovation',
    logo: '/img/logos/join-lion.png',
    link: 'https://www.joinlion.co/',
    excerpt: 'Culture du prototypage rapide et des hackathons.',
    comment: "Le Promptathon a accéléré ma capacité à livrer un MVP en 1h–2h.",
    tags: ['Hackathon', 'Prototype'],
  },
  {
    id: 'maestro-alumni',
    title: 'Maestro • Alumni',
    subtitle: 'Product Management intensive',
    logo: '/img/logos/maestro.svg',
    link: 'https://maestro.mariaschools.com/',
    excerpt: 'Réseau d’anciens pour retours d’expérience 0→1 et go-to-market.',
    comment: "Sparring partners utiles pour challenger discovery et scope MVP.",
    tags: ['PM', '0→1'],
  },
  {
    id: 'matrice',
    title: 'Matrice / Écosystème',
    subtitle: 'Entrepreneuriat & innovation',
    logo: '/img/logos/matrice.png',
    link: 'https://matrice.io/',
    excerpt: 'Projets hybrides tech/société, avec ancrage terrain.',
    tags: ['Community', 'Design'],
  },
];

/** —————————————————————
 *  INSPIRATIONS (onglet 2)
 *  ————————————————————— */
export const inspirations: BaseItem[] = [
  {
    id: 'unreasonable-hospitality',
    title: 'Unreasonable Hospitality',
    subtitle: 'Will Guidara — Hospitality as a product advantage',
    logo: '/img/logos/unreasonable.png',
    link: 'https://www.unreasonablehospitality.com/',
    excerpt: 'Comment l’hospitalité radicale devient un différenciateur produit.',
    comment: "M’a poussé à intégrer des ‘micro-moments’ de considération dans l’UX.",
    tags: ['Experience', 'Delight'],
    // media: { type: 'audio', src: '/media/unreasonable-clip-28s.mp3', durationSec: 28 },
  },
  {
    id: 'not-boring-software',
    title: 'Not Boring Software',
    subtitle: 'Designs ludiques, tangibles, premium',
    logo: '/img/logos/notboring.png',
    link: 'https://www.notboring.software/',
    excerpt: 'Exemples d’interactions tactiles et d’un “feel” premium.',
    comment: "Référence pour la matérialité et la sensation d’interface.",
    tags: ['Design', 'Interaction'],
  },
  {
    id: 'fh-design',
    title: 'fh.design',
    subtitle: 'Lisibilité radicale, vertical flow',
    logo: '/img/logos/fh.svg',
    link: 'https://fh.design/',
    excerpt: 'Clarté visuelle extrême et hiérarchie typographique exemplaire.',
    tags: ['Typography', 'Layout'],
  },
  {
    id: 'product-delight',
    title: 'Product Delight',
    subtitle: 'Curated product details',
    logo: '/img/logos/product-delight.png',
    link: 'https://productdelight.carrd.co/',
    excerpt: 'Petits détails qui créent une disproportion de valeur perçue.',
    tags: ['Delight', 'UX'],
  },
  {
    id: 'stratechery',
    title: 'Stratechery',
    subtitle: 'Ben Thompson — business & strategy',
    logo: '/img/logos/stratechery.svg',
    link: 'https://stratechery.com/',
    excerpt: 'Analyses claires des modèles économiques et mouvements industriels.',
    tags: ['Strategy'],
  },
];

/** —————————————————————
 *  RESOURCES (onglet 3)
 *  ————————————————————— */
export const resources: BaseItem[] = [
  {
    id: 'lennys-newsletter',
    title: "Lenny’s Newsletter",
    subtitle: 'PM frameworks, case studies',
    logo: '/img/logos/lennys.svg',
    link: 'https://www.lennysnewsletter.com/',
    excerpt: 'Playbooks concrets sur discovery, PMF, growth et org design.',
    tags: ['PM', 'Growth'],
  },
  {
    id: 'first-round-review',
    title: 'First Round Review',
    subtitle: 'VC-backed operators’ insights',
    logo: '/img/logos/first-round.svg',
    link: 'https://review.firstround.com/',
    excerpt: 'Retours terrain de leaders produit, design, data.',
    tags: ['Operations', 'Leadership'],
  },
  {
    id: 'laws-of-ux',
    title: 'Laws of UX',
    subtitle: 'Psychology × Interface design',
    logo: '/img/logos/lawsofux.svg',
    link: 'https://lawsofux.com/',
    excerpt: 'Principes psychologiques transposés en heuristiques UI/UX.',
    tags: ['UX', 'Psychology'],
  },
  {
    id: 'craftwork-curated-portfolios',
    title: 'Craftwork — Curated Portfolios',
    subtitle: 'Curation de sites portfolio',
    logo: '/img/logos/craftwork.svg',
    link: 'https://craftwork.design/curated/websites/portfolio',
    excerpt: 'Référentiel de styles pour cadrer DA et cartes.',
    tags: ['Inspiration', 'UI Gallery'],
  },
  {
    id: 'julie-zhuo',
    title: 'Julie Zhuo — The Year of the Looking Glass',
    subtitle: 'Design leadership & management',
    logo: '/img/logos/julie-zhuo.png',
    link: 'https://medium.com/the-year-of-the-looking-glass',
    excerpt: 'Clarté sur la progression designer/PM et la prise de décision.',
    tags: ['Leadership', 'Design'],
  },
];

/** —————————————————————
 *  OUTILS (onglet 4)
 *  ————————————————————— */
export const tools: (BaseItem & {
  homepage?: string;
  referral?: string;
  usedIn?: string[];
})[] = [
  {
    id: 'lovable',
    title: 'Lovable',
    subtitle: 'Builder avec IA (React + Tailwind)',
    logo: '/img/logos/lovable.svg',
    homepage: 'https://lovable.dev/',
    excerpt: 'Accélère la mise en page et l’itération UI.',
    comment: "Base du portfolio actuel (sections, prompts, harmonisation).",
    tags: ['Builder', 'UI'],
    usedIn: ['Portfolio'],
  },
  {
    id: 'vercel',
    title: 'Vercel',
    subtitle: 'Hosting & previews',
    logo: '/img/logos/vercel.svg',
    homepage: 'https://vercel.com/',
    excerpt: 'Déploiements rapides, previews par PR.',
    tags: ['Infra'],
    usedIn: ['Portfolio', 'Agents'],
  },
  {
    id: 'supabase',
    title: 'Supabase',
    subtitle: 'DB + Auth + Storage',
    logo: '/img/logos/supabase.svg',
    homepage: 'https://supabase.com/',
    excerpt: 'Tables Resources/Tools/Inspirations, dashboards d’évals.',
    tags: ['Data', 'Auth'],
    usedIn: ['Agents Eval', 'Portfolio'],
  },
  {
    id: 'n8n',
    title: 'n8n',
    subtitle: 'Automation & workflows',
    logo: '/img/logos/n8n.svg',
    homepage: 'https://n8n.io/',
    excerpt: 'Pipelines d’évaluation, cron + Slack summaries.',
    tags: ['Automation', 'Agents'],
    usedIn: ['Agents Eval'],
  },
  {
    id: 'make',
    title: 'Make',
    subtitle: 'Automation no-code',
    logo: '/img/logos/make.png',
    homepage: 'https://www.make.com/',
    excerpt: 'Génération de posts, intégrations rapides.',
    tags: ['Automation'],
    usedIn: ['Growth automations'],
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS',
    subtitle: 'Design system utilitaire',
    logo: '/img/logos/tailwind.svg',
    homepage: 'https://tailwindcss.com/',
    excerpt: 'Cohérence typographique & spacing unifiés.',
    tags: ['Design System'],
    usedIn: ['Portfolio'],
  },
  {
    id: 'framer-motion',
    title: 'Framer Motion',
    subtitle: 'Animations sobres',
    logo: '/img/logos/framer-motion.svg',
    homepage: 'https://www.framer.com/motion/',
    excerpt: 'Utilisé uniquement pour l’expansion inline.',
    tags: ['Animation'],
    usedIn: ['Portfolio'],
  },
  {
    id: 'rive',
    title: 'Rive',
    subtitle: 'Animations vectorielles',
    logo: '/img/logos/rive.svg',
    homepage: 'https://rive.app/',
    excerpt: 'Placeholders animés et micro-interactions.',
    tags: ['Motion', 'Vector'],
    usedIn: ['Experiments'],
  },
];
