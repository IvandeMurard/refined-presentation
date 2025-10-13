import * as React from "react";
import clsx from "clsx";

type MarqueeBannerProps = {
  phrases: string[];
  /** Plus c’est petit, plus c’est lent (0.1–0.4 recommandé). Par défaut: 0.15 */
  speed?: number;
  /** Met l’animation en pause au hover/focus. Par défaut: true */
  pauseOnHover?: boolean;
  /** Label SR pour lecteur d’écran. Par défaut: "Highlights" */
  ariaLabel?: string;
  /** Classes additionnelles sur le wrapper */
  className?: string;
};

export function MarqueeBanner({
  phrases,
  speed = 0.15,
  pauseOnHover = true,
  ariaLabel = "Highlights",
  className,
}: MarqueeBannerProps) {
  // durée de l’animation (s) – clamp pour éviter div/0
  const duration = React.useMemo(() => {
    const s = Math.max(0.05, Math.min(speed, 1));
    return 60 / s; // p.ex 60/0.15 ≈ 400s (très doux)
  }, [speed]);

  // On duplique le contenu pour une boucle fluide
  const loop = React.useMemo(() => [...phrases, ...phrases], [phrases]);

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      className={clsx(
        "relative overflow-hidden",
        // masque de fade aux extrémités (compat webkit)
        "[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        "[webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className
      )}
      aria-live="off"
    >
      <div
        className={clsx(
          "flex gap-8 whitespace-nowrap will-change-transform",
          // pause au survol/focus
          pauseOnHover &&
            "hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]"
        )}
        style={{
          animation: `mdm-marquee ${duration}s linear infinite`,
        }}
      >
        {loop.map((p, i) => (
          <span
            key={`${p}-${i}`}
            className="text-sm md:text-[15px] text-muted-foreground"
          >
            {p}
          </span>
        ))}
      </div>

      {/* Styles scoping: animation + respects reduced motion */}
      <style>{`
        @keyframes mdm-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [aria-label="${ariaLabel}"] > div {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default MarqueeBanner;
