import * as React from "react";

type Props = {
  id: string;
  kicker: string; // e.g. "Case Study – Sonor"
  title: string;
  tagline: string;
  badge: string; // e.g. "Open Data"
  image: string;
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
  onClick,
  className = "",
}: Props) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
   <article
  key={id}
  tabIndex={0}
  className={[
    "work-card",
    "relative overflow-hidden rounded-token bg-card border border-border shadow-overlay",
    "transition-transform duration-300 will-change-transform", // root only translates
    "hover:-translate-y-1",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 ring-brand",
    "w-[360px] h-[480px] cursor-pointer",
    className,
  ].join(" ")}
  onClick={onClick}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  onKeyDown={(e) => e.key === "Enter" && onClick?.()}
  role="button"
  aria-label={`${kicker} – ${title}`}
>
  {/* Hover elevation as a separate faded layer — keeps radius stable */}
  <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[0_16px_40px_hsl(var(--overlay))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

  {/* Media wrapper scales instead of the root (inherits radius, clips perfectly) */}
  <div className="relative h-full w-full rounded-[inherit] overflow-hidden transform-gpu will-change-transform transition-transform duration-500 group-hover:scale-[1.02]">
    {/* Background Image - Full bleed */}
    <img
      src={image}
      alt={title}
      className="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
      decoding="async"
    />

    {/* Main gradient (bottom) + kicker band (top) */}
    <div
      className="absolute inset-0 transition-opacity duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{
        background: isHovered
          ? "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.42) 52%, rgba(0,0,0,0.18) 100%)"
          : "linear-gradient(to top, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.32) 52%, rgba(0,0,0,0.12) 100%)",
      }}
    />
    <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/30 to-transparent" />

    {/* Content */}
    <div className="absolute inset-0 flex flex-col justify-between p-6">
      <div>
        <p className="text-[12px] font-[700] uppercase tracking-[0.14em] text-white/90 drop-shadow-sm">
          {kicker}
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-[24px] font-[900] tracking-[-0.01em] leading-[1.15] text-white max-w-[280px] drop-shadow">
          {title}
        </h3>
        <p className="text-[15px] font-[400] leading-[1.4] text-white/80 max-w-[280px]">
          {tagline}
        </p>

        <div className="flex items-end justify-between">
          <span
            className="inline-flex items-center h-7 px-3 rounded-full border text-[12px] font-[700] shadow-sm backdrop-blur-sm"
            style={{
              backgroundColor: "hsl(var(--contact) / .22)",
              borderColor: "hsl(var(--contact) / .40)",
              color: "hsl(var(--contact-foreground))",
            }}
          >
            {badge}
          </span>

          <div
            className={[
              "flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm",
              "transition-all duration-300",
              isHovered ? "w-auto h-10 px-4 gap-2" : "w-10 h-10",
            ].join(" ")}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className={[isHovered ? "opacity-0 absolute" : "opacity-100", "transition-opacity duration-200"].join(" ")}
              aria-hidden="true"
            >
              <path d="M8 3.5V12.5M3.5 8H12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className={["text-[13px] font-[600] text-white whitespace-nowrap", isHovered ? "opacity-100" : "opacity-0", "transition-opacity duration-200"].join(" ")}>
              Lire le case study
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</article>
  );
}
