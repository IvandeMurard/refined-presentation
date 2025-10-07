import { cn } from "@/lib/utils"; // ou remplace par simple concat si tu n'as pas cn

export type WorkCardProps = {
  image: string;          // visuel immersif
  category: string;       // "CASE STUDY — FINTECH"
  title: string;          // titre fort
  subtitle?: string;      // 1 ligne
  badge?: string;         // "FinTech" / "AI/ML"...
  onClick?: () => void;   // ouvre ta modale existante OU navigation
  href?: string;          // alternative: lien direct
  className?: string;
};

export default function WorkCard({
  image,
  category,
  title,
  subtitle,
  badge,
  onClick,
  href,
  className,
}: WorkCardProps) {
  const Tag: any = href ? "a" : "button";
  const tagProps = href ? { href } : { type: "button", onClick };

  return (
    <Tag
      {...tagProps}
      className={cn(
        "group relative block w-full overflow-hidden rounded-token border border-border bg-card text-left shadow-overlay",
        "transition-all duration-300 will-change-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-brand",
        className
      )}
    >
      {/* Image immersive */}
      <div className="relative aspect-[3/4] w-full">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {/* Overlay: en mobile toujours visible, en desktop au hover */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-95 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Teaser texte (bottom-left) */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-4 md:p-5">
        <p className="text-[11px] uppercase tracking-wide text-white/80">
          {category}
        </p>
        <h3 className="mt-1 line-clamp-2 text-[22px] font-extrabold leading-tight text-white drop-shadow">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-1 line-clamp-2 text-sm text-white/80">
            {subtitle}
          </p>
        )}

        {/* Badge (token contact) */}
        {badge && (
          <span className="mt-3 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium shadow-sm"
                style={{ backgroundColor: "hsl(var(--contact))", color: "hsl(var(--contact-foreground))" }}>
            {badge}
          </span>
        )}
      </div>
    </Tag>
  );
}

// --- SIDE PROJECTS (nouveaux) ---
{
  image: "/img/projects/agents-eval/mdreza-jalali-unsplash.jpg",
  category: "SIDE PROJECT – EVALUATION AGENTS",
  title: "Construire des agents d’évaluation spécialisés",
  subtitle: "De l’idée au blueprint réutilisable",
  badge: "Agents & Evaluation",
  modal: {
    // logo: "/images/logos/…", // optionnel
    title: "Évaluer mieux, plus vite, à grande échelle",
    subtitle: "De l’architecture de run à un blueprint d’agent réutilisable",
    bullets: [
      "Schéma Supabase (runs, issues, recommendations, metrics + view run_dashboard)",
      "Workflow n8n E2E : Create Run → Add Issues/Recommendations → Close Run",
      "LLM-as-a-Judge + score composite avec quality-gate ≥80%",
      "Blueprint réutilisable (UX, data-quality, prompt-robustness…)",
      "Pré-prod : webhooks, retries, logs, notifications Slack",
    ],
    cta: { label: "Découvrir le blueprint", href: "/work/agents-evaluation" },
  },
},
{
  image: "/images/projects/spotify-mood/cover.webp", // placeholder à créer si besoin
  category: "SIDE PROJECT – SERVICE / EXPERIENCE DESIGN",
  title: "Guides musicaux pilotés par la valence",
  subtitle: "Du signal audio à l’action bien-être",
  badge: "Experience",
  modal: {
    title: "Transformer l’écoute en parcours d’humeur",
    subtitle: "Prototype d’expérience “valence → action”",
    bullets: [
      "Cartographie valence/arousal → recommandations d’actions",
      "Flow chart contextualisé + micro-délices visuels",
      "Modes individuel/social (jam locale)",
      "Safety by design : opt-in, transparence, contrôle",
      "Prochaines étapes : wireframes + tests qualis",
    ],
    cta: { label: "Voir le wireframe", href: "/work/spotify-valence-journeys" },
  },
},
{
  image: "/images/projects/on-air/cover.webp", // placeholder à créer si besoin
  category: "SIDE PROJECT – PRODUCT MANAGEMENT",
  title: "On Air — studio collaboratif en direct",
  subtitle: "Paroles + mélodie/tablature en temps réel",
  badge: "Product",
  modal: {
    title: "Créer, transcrire et partager… en temps réel",
    subtitle: "Rooms live → restitution synchronisée",
    bullets: [
      "Rooms collaboratives (WebRTC) à faible latence",
      "Transcription live: paroles + mélodie/tablature",
      "Time-codes, chapitrage, exports courts",
      "Partage via lien public + permissions",
      "Roadmap: V1 capture → V2 édition → V3 packs créatifs",
    ],
    cta: { label: "Concept & roadmap", href: "/work/on-air" },
  },
},
