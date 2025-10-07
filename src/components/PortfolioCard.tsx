import React, { useState } from "react";
import { Plus } from "lucide-react";

type PortfolioCardProps = {
  id: string;
  kicker: string; // ex: "SIDE PROJECT – EVALUATION AGENTS"
  title: string; // ex: "Construire des agents d’évaluation spécialisés"
  tagline: string; // ex: "De l’idée au blueprint réutilisable"
  chip?: string; // ex: "Agents & Evaluation"
  image: string; // /images/...
  alt?: string; // accessibilité ✅
  ctaLabel?: string; // ex: "Découvrir le blueprint"
  onClick?: () => void;
  className?: string;
};

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  id,
  kicker,
  title,
  tagline,
  chip,
  image,
  alt = "",
  ctaLabel = "Lire le case study",
  onClick,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      key={id}
      tabIndex={0}
      role="button"
      aria-label={`${kicker} – ${title}`}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={[
        "relative w-[360px] h-[480px] rounded-3xl overflow-hidden cursor-pointer group",
        "transition-transform duration-300 will-change-transform hover:-translate-y-1 focus:outline-none",
        className,
      ].join(" ")}
      style={{
        boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      {/* Image */}
      <img
        src={image}
        alt={alt || title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02] saturate-[1.25] contrast-[1.10] brightness-[1.02] group-hover:saturate-[1.5] group-hover:brightness-[1.06]"
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          isHovered
            ? "bg-gradient-to-t from-black/70 via-black/40 to-black/25"
            : "bg-gradient-to-t from-black/60 via-black/30 to-black/20"
        }`}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-6">
        {/* Kicker */}
        <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-white/90 drop-shadow-sm">{kicker}</p>

        {/* Title + Tagline */}
        <div className="space-y-3">
          <h3 className="text-[24px] md:text-[26px] font-[900] leading-[1.15] text-white max-w-[280px] [filter:drop-shadow(0_1px_1px_rgba(0,0,0,.6))]">
            {title}
          </h3>
          <p className="text-[15px] font-[400] leading-[1.4] text-white/80 max-w-[280px] [filter:drop-shadow(0_1px_1px_rgba(0,0,0,.5))]">
            {tagline}
          </p>
        </div>

        {/* Chip + CTA */}
        <div className="flex items-end justify-between">
          {chip && (
            <span
              className="inline-block rounded-full text-white text-xs px-3 py-1.5 font-medium"
              style={{ backgroundColor: "#27ae60" }}
            >
              {chip}
            </span>
          )}

          <div
            className={[
              "bg-black/70 backdrop-blur-sm rounded-full p-2.5 transition-all duration-300 overflow-hidden",
              "group-hover:px-5",
            ].join(" ")}
          >
            <div className="flex items-center gap-2">
              <Plus className="w-5 h-5 text-white flex-shrink-0" />
              <span
                className={`text-white text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  isHovered ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"
                }`}
              >
                {ctaLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PortfolioCard;
