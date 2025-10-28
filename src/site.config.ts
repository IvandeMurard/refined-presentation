// src/site.config.ts
export const SITE = {
  name: "Ivan de Murard",
  tagline: "Zero-to-One Product Manager",
} as const;

// Centralisation des URL sociales (facilement éditables)
export const SOCIAL_LINKS = {
  mail: {
    label: "Email",
    href: "mailto:ivandemurard@gmail.com",
  },
  calendar: {
    label: "Calendar",
    href: "https://cal.com/ivandemurard/30min?",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ivandemurard/",
  },
  whatsapp: {
    label: "WhatsApp",
    href: "https://wa.me/33767677953",
  },
  x: {
    label: "X (Twitter)",
    href: "https://x.com/ivanmurard",
  },
} as const;

export type SocialKey = keyof typeof SOCIAL_LINKS;
