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
        "relative overflow-hidden rounded-[24px] bg-white",
        "shadow-[0_4px_16px_-4px_rgba(0,0,0,0.12)] transition-all duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
        "hover:shadow-[0_8px_24px_-6px_rgba(0,0,0,0.18)]",
        "focus:outline-none focus:ring-2 ring-emerald-300",
        "w-[360px] h-[480px] cursor-pointer",
        className,
      ].join(" ")}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={(e) => {
        if (e.key === "Enter") onClick?.();
      }}
      role="button"
      aria-label={`${kicker} – ${title}`}
    >
      {/* Background Image - Full bleed */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className={[
            "absolute inset-0 h-full w-full object-cover",
            "transition-transform duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            isHovered ? "scale-105" : "scale-100",
          ].join(" ")}
        />
      </div>

      {/* Gradient Overlay - Enhanced on hover */}
      <div
        className={[
          "absolute inset-0 transition-opacity duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        ].join(" ")}
        style={{
          background: isHovered
            ? "linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.30) 50%, rgba(0,0,0,0.15) 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.10) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        {/* Top Section - Kicker */}
        <div>
          <p className="text-[13px] font-[500] uppercase tracking-[0.15em] text-white/80">
            {kicker}
          </p>
        </div>

        {/* Bottom Section - Title, Tagline, Badge, CTA */}
        <div className="space-y-4">
          {/* Title */}
          <h3 className="text-[24px] font-[700] leading-[1.25] text-white max-w-[280px]">
            {title}
          </h3>

          {/* Tagline */}
          <p className="text-[15px] font-[400] leading-[1.4] text-white/70 max-w-[280px]">
            {tagline}
          </p>

          {/* Bottom Row - Badge & CTA Icon */}
          <div className="flex items-end justify-between">
            {/* Badge */}
            <span className="inline-flex items-center h-7 px-3 rounded-full bg-[#2ECC71]/25 backdrop-blur-sm border border-[#2ECC71]/40 text-[12px] font-[500] text-white">
              {badge}
            </span>

            {/* CTA Icon - Transforms on hover */}
            <div
              className={[
                "flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm",
                "transition-all duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                isHovered
                  ? "w-auto h-10 px-4 gap-2"
                  : "w-10 h-10",
              ].join(" ")}
            >
              {/* Plus Icon - Visible when not hovered */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className={[
                  "transition-opacity duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isHovered ? "opacity-0 absolute" : "opacity-100",
                ].join(" ")}
              >
                <path
                  d="M8 3.5V12.5M3.5 8H12.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

              {/* Text - Visible on hover */}
              <span
                className={[
                  "text-[13px] font-[500] text-white whitespace-nowrap",
                  "transition-opacity duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isHovered ? "opacity-100" : "opacity-0",
                ].join(" ")}
              >
                Lire le case study
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
