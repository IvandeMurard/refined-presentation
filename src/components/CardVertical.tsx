import * as React from "react";

interface CardVerticalProps {
  image: string;
  title: string;
  subtitle: string;
  tags?: string[];
  onClick?: () => void;
  className?: string;
}

export const CardVertical: React.FC<CardVerticalProps> = ({
  image,
  title,
  subtitle,
  tags = [],
  onClick,
  className = "",
}) => {
  return (
    <article
      tabIndex={0}
      role="button"
      aria-label={title}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      onClick={onClick}
      className={[
        "work-card",
        "group/card", // scoped group → avoids cross-hover from parent containers
        "card-modern relative overflow-hidden rounded-token cursor-pointer",
        "transition-transform duration-300 will-change-transform hover:-translate-y-1",
        className,
      ].join(" ")}
      style={{ width: 320, height: 320 }}
    >
      {/* Elevation layer (fades in) — radius stays perfect */}
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[0_16px_40px_hsl(var(--overlay))] opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />

      {/* Media wrapper scales; root keeps the mask (no sharp-corners flash) */}
      <div className="relative h-[200px] rounded-[inherit] overflow-hidden transform-gpu will-change-transform transition-transform duration-500 group-hover/card:scale-[1.02]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        {/* Overlay + title/subtitle in the media area */}
        <div className="card-overlay">
          <div className="text-white drop-shadow">
            <h3 className="text-lg font-extrabold mb-1 leading-tight">{title}</h3>
            <p className="text-sm opacity-90">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Tags row */}
      <div className="p-6">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-[11px] font-medium rounded-full shadow-sm"
                style={{
                  backgroundColor: "hsl(var(--contact) / .22)",
                  color: "hsl(var(--contact-foreground))",
                  border: "1px solid hsl(var(--contact) / .45)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};
