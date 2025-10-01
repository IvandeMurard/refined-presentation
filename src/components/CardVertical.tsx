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
    className={[
  "work-card", // ← NEW
  "relative overflow-hidden rounded-token bg-card border border-border shadow-overlay",
  "transition-all duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
  "hover:-translate-y-1 hover:[box-shadow:0_16px_40px_hsl(var(--overlay))]", // ← NEW lift
  "focus:outline-none focus:ring-2 focus:ring-offset-2 ring-brand",
  "w-[360px] h-[480px] cursor-pointer",
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
