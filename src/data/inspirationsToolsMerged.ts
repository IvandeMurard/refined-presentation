export const inspirations = [ ...ancien contenu adapté... ];
export const resources = [ ... ];
export const tools = [ ... ];
export const communities = [ ... ];

export type Media = {
  type?: 'audio' | 'video';
  src?: string;
  preview?: string; // image éventuelle
  durationSec?: number;
};

export type BaseItem = {
  id: string;
  title: string;
  subtitle?: string;
  logo?: string;  // URL logo carré
  link?: string;  // lien principal
  excerpt?: string; // court teasing
  comment?: string; // ton avis
  media?: Media;    // court média optionnel
  tags?: string[];
};

// Onglets
export const communities: BaseItem[] = [];
export const inspirations: BaseItem[] = [];
export const resources: BaseItem[] = [];
export const tools: (BaseItem & {
  homepage?: string;
  referral?: string;
  usedIn?: string[]; // side-projects pertinents
})[] = [];
