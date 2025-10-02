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
      onKeyDown={e => e.key === "Enter" && onClick?.()}
      onClick={onClick}
      className={[
        "work-card",
        "group/card",
        "card-modern relative overflow-hidden rounded-token cursor-pointer",
        "transition-transform duration-300 will-change-transform hover:-translate-y-1",
        className,
      ].join(" ")}
      style={{ width: 320, height: 320 }}
    >
      {/* Media wrapper scales; keeps mask */}
      <div className="relative h-[200px] rounded-inherit overflow-hidden will-change-transform">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      {/* Overlay + title/subtitle */}
      <div className="p-6">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{subtitle}</p>
        {/* Tags row */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <span key={index} className="work-badge">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};
