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
      <span className="pointer-events-none absolute inset-0 rounded-token shadow-[0_16px_40px_rgba(0,0,0,0.15)] opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />

      <div className="relative h-[200px] rounded-token overflow-hidden transform-gpu will-change-transform transition-transform duration-500 group-hover/card:scale-[1.02] saturate-[1.25] contrast-[1.10] brightness-[1.02] group-hover/card:saturate-[1.5] group-hover/card:brightness-[1.06]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.34) 55%, rgba(0,0,0,0.12) 100%), " +
              "radial-gradient(120% 60% at 0% 0%, rgba(255,255,255,0.12), transparent 60%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="text-white">
            <h3 className="text-lg font-extrabold mb-1 leading-tight [filter:drop-shadow(0_1px_1px_rgba(0,0,0,.6))]">{title}</h3>
            <p className="text-sm opacity-90 [filter:drop-shadow(0_1px_1px_rgba(0,0,0,.5))]">{subtitle}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
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
