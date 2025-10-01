import React from "react";

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
      className={[
        // container propre branché tokens
        "card-modern cursor-pointer group",
        "transition-all duration-300 will-change-transform hover:-translate-y-0.5",
        className,
      ].join(" ")}
      onClick={onClick}
      style={{ width: "320px", height: "320px" }}
    >
      {/* Image immersive */}
      <div className="relative h-[200px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
          decoding="async"
        />
        {/* Overlay depuis ton template */}
        <div className="card-overlay">
          <div className="text-white drop-shadow">
            <h3 className="text-lg font-extrabold mb-1 leading-tight">
              {title}
            </h3>
            <p className="text-sm opacity-90">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Tags */}
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
