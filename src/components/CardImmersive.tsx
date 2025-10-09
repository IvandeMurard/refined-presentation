import * as React from "react";

const glassBullet =
  "inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium " +
  "border border-white/20 bg-white/10 backdrop-blur-[6px] text-white/90 shadow-sm";

type Props = {
  id: string;
  kicker: string;
  title: string;
  tagline: string;
  badge: string;
  image: string;
  alt?: string;
  ctaLabel?: string;
  ariaLabel?: string;
  onClick?: () => void;
  className?: string;
};

export function CardImmersive({
  id,
  kicker,
  title,
  tagline,
  badge,
  image,
  alt = "",
  ctaLabel = "Lire le case study",
  ariaLabel,
  onClick,
  className = "",
}: Props) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <article
      key={id}
      tabIndex={0}
      role="button"
      aria-label={ariaLabel ?? `${kicker} – ${title}`}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick?.()}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={[
        "work-card group/card relative overflow-hidden rounded-token bg-card border border-border shadow-overlay",
        "transition-transform duration-300 will-change-transform hover:-translate-y-1",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent focus:ring-offset-background",
        "w-[360px] h-[480px] cursor-pointer",
        className,
      ].join(" ")}
    >
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[0_16px_40px_hsl(var(--overlay))] opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
      <div className="relative h-full w-full rounded-[inherit] overflow-hidden transform-gpu will-change-transform transition-transform duration-500 group-hover/card:scale-[1.02] saturate-[1.25] contrast-[1.10] brightness-[1.02] group-hover/card:saturate-[1.5] group-hover/card:brightness-[1.06]">
        <img
          src={image}
          alt={alt || title}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div
          className="absolute inset-0 transition-opacity duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.34) 55%, rgba(0,0,0,0.12) 100%), " +
              "radial-gradient(120% 60% at 0% 0%, rgba(255,255,255,0.12), transparent 60%)",
          }}
        />
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <p className="text-[12px] font-[700] uppercase tracking-[0.14em] text-white/90 drop-shadow-sm">{kicker}</p>

          <div className="space-y-4">
            <h3 className="text-[24px] md:text-[26px] font-[900] tracking-[-0.01em] leading-[1.15] text-white max-w-[280px] [filter:drop-shadow(0_1px_1px_rgba(0,0,0,.6))]">
              {title}
            </h3>
            <p className="text-[15px] font-[400] leading-[1.4] text-white/80 max-w-[280px] [filter:drop-shadow(0_1px_1px_rgba(0,0,0,.5))]">
              {tagline}
            </p>

            <div className="flex items-end justify-between">
              <span className={glassBullet}>{badge}</span>

              <div
                className={[
                  "flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm transition-all duration-300",
                  isHovered ? "w-auto h-10 px-4 gap-2" : "w-10 h-10",
                ].join(" ")}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className={["transition-opacity duration-200", isHovered ? "opacity-0 absolute" : "opacity-100"].join(
                    " ",
                  )}
                  aria-hidden="true"
                >
                  <path d="M8 3.5V12.5M3.5 8H12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>

                <span
                  className={[
                    "text-[13px] font-[600] text-white whitespace-nowrap transition-opacity duration-200",
                    isHovered ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                >
                  {ctaLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
