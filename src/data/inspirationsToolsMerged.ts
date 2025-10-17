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
    id: 'join-lion',
    title: 'LION',
    subtitle: 'Communauté IA & entrepreneuriat',
    logo: '/img/join_lion_le_promptathon Hackathon.png',
    link: 'https://www.joinlion.co/',
    excerpt: 'Apprendre à apprendre et entreprendre.',
    comment: 'Alumni',
    tags: ['Hackathon', 'IA', 'Entrepreneuriat']
  },
  {
  id: 'maestro',
    title: 'MAESTRO',
    subtitle: 'Communauté produit & innovation',
    logo: '/img/maestro.png',
    link: 'https://maestro.mariaschools.com/',
    excerpt: 'Apprentissage continu autour du product management.',
    comment: 'Alumni',
    tags: ['Product Management', 'No Code']
  },
  {
    id: 'paatch',
    title: "Paatch",
    subtitle: 'Product & Growth meetups',
    logo: '/img/paatch.png',
    link: 'https://www.paatch.io/',
    excerpt: 'Ateliers pour découvrir et prototyper avec de nouveaux outils IA.',
    comment: 'Participation à deux événements portant sur Manus et Make.',
    tags: ['Product', 'IA', 'Community', 'Hackathons']
  },
  {
    id: 'lennys-paris',
    title: "Lenny's Newsletter • Paris",
    subtitle: 'Product management meetups',
    logo: '/img/lenny_newsletter_logo.PNG',
    link: 'https://www.lennysnewsletter.com/',
    excerpt: 'Partage de bonnes pratiques sur le product management',
    comment: 'Organisation dun meet-up en octobre 2025.',
    tags: ['Product', 'Growth', 'Community', 'IA', 'Go-to-Market']
  },
  {
    id: 'the-ai-collective',
    title: 'The AI Collective',
    subtitle: 'Hackathons thématiques',
    logo: '/img/theaicollective.png',
    link: 'https://www.aicollective.com/',
    excerpt: 'Hackathons pour découvrir outils et pratiques.',
    comment: "J'ai participé à deux événements : Windsurf, Blackbox AI.",
    tags: ['AI', 'Hackathons', 'Product Builder']
  },
];

// -------------------- INSPIRATIONS --------------------
export const inspirations: BaseItem[] = [
  {
    id: 'unreasonable-hospitality',
    title: 'Unreasonable Hospitality',
    subtitle: 'Hospitality as a product advantage',
    logo: '/img/unreasonable_hospitality.png',
    link: 'https://www.unreasonablehospitality.com/',
    excerpt: "If a stumble at the end of a meal can undo all the goodwill a restaurant has earned in the three hours preceeding it, then a gorgeous, gracious gesture at the end can have the opposite effect.",
    comment: 'Ce livre ma plu par les retours dexpériences terrains et concrets partagés, appliquables au product management.',
    tags: ['Experience', 'Hospitality', 'User Experience', 'Design']
  },
  {
    id: 'general-magic',
    title: 'General Magic',
    subtitle: 'Documentaire, Vision produit',
    logo: '/img/general-magic.png',
    link: 'https://www.generalmagicthemovie.com/',
    excerpt: '"We are trying to make something people love, we need it to be like your watch, your glasses".',
    comment: 'Un film étonnant, captivant, et bien rythmé mettant en avant lengagement et la fantastique vision produit de lequipe',
    tags: ['Product Management', 'Product Vision', 'Innovation']
  },
 ];

// -------------------- RESOURCES --------------------
export const resources: BaseItem[] = [
  {
    id: 'product-delight',
    title: 'Product Delight',
    subtitle: 'How to bring products to life',
    logo: '/img/product-delight.png',
    link: 'https://nesrinechanguel.substack.com/',
    excerpt: 'To convert motivators into actionable insights, reframe them using "How might we…" questions.',
    comment: 'Les retours dexpériences concrets, et les liens réalisables entre product management et hospitalité sont très intéressants',
    tags: ['Delight', 'UX', 'Product Design', 'Hospitality']
  },
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
    id: 'notion',
    title: 'Notion',
    subtitle: 'Notion',
    logo: '/img/notion-icon.png',
    homepage: 'https://notion.com',
    excerpt: 'Espace de travail',
    comment: 'Une bonne documentation est la fondation essentielle de tous bons projets',
    tags: ['Documentation'],
    usedIn: ['Documentation', 'Knowledge Management']
  },
  {
    id: 'supabase',
    title: 'Supabase',
    subtitle: 'DB + Auth + Storage',
    logo: '/img/supabase-icon.png',
    homepage: 'https://supabase.com/',
    excerpt: 'Tables Resources/Tools/Inspirations.',
    comment: 'Outil de stockage des données du portfolio et des side-projects',
    tags: ['Data', 'Auth'],
    usedIn: ['Portfolio']
  }
];
