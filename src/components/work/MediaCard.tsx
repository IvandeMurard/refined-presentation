// src/components/work/MediaCard.tsx
import * as React from "react";

type MediaCardProps = {
  id: string;
  kicker: string;
  title: string;
  tagline: string;
  badge: string;
  image: string;           // poster (obligatoire)
  videoSrc?: string;       // MP4/WebM (optionnel)
  onClick?: () => void;
  className?: string;
};

export function MediaCard({
  id,
  kicker,
  title,
  tagline,
  badge,
  image,
  videoSrc,
  onClick,
  className = "",
}: MediaCardProps) {
  const [hover, setHover] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  // Pause la vidéo si la carte sort de l’écran
  React.useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) el.pause();
          else if (hover) el.play().catch(() => {});
        });
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [hover]);

  // Respecte prefers-reduced-motion
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <article
      key={id}
      role="button"
      tabIndex={0}
      aria-label={`${kicker} – ${title}`}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      onClick={onClick}
      onMouseEnter={() => {
        setHover(true);
        videoRef.current?.play().catch(() => {});
      }}
      onMouseLeave={() => {
        setHover(false);
        // on desktop, pause to économiser
        videoRef.current?.pause();
      }}
      className={[
        "work-card group/card",
        "relative overflow-hidden rounded-token bg-card border border-border shadow-overlay",
        "transition-transform duration-300 will-change-transform hover:-translate-y-1",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 ring-brand",
        "w-[360px] h-[480px] cursor-pointer",
        className,
      ].join(" ")}
    >
      {/* Élévation douce */}
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[0_16px_40px_hsl(var(--overlay))] opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />

      {/* Media wrapper (scale only inside to keep radius crisp) */}
      <div className="relative h-full w-full rounded-[inherit] overflow-hidden transform-gpu will-change-transform transition-transform duration-500 group-hover/card:scale-[1.02] saturate-125 contrast-110 brightness-[1.02] group-hover/card:saturate-150 group-hover/card:brightness-[1.06]">
        {/* Image poster */}
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          aria-hidden
        />

        {/* Vidéo (optionnelle) */}
        {videoSrc && !reducedMotion && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={videoSrc}
            poster={image}
            muted
            loop
            playsInline
            preload="metadata"
            // Sur mobile, autorise l’autoplay silencieux
            autoPlay={typeof window !== "undefined" && /Mobi|Android/i.test(navigator.userAgent)}
          />
        )}

        {/* Bottom gradient + glossy spec highlight */}
        <div
          className="absolute inset-0"
          style={{
            background:
              // 1) Gradient bas pour la lisibilité
              "linear-gradient(to top, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.34) 55%, rgba(0,0,0,0.12) 100%), " +
              // 2) Lueur blanche douce en diagonale (effet "brillant")
              "radial-gradient(120% 60% at 0% 0%, rgba(255,255,255,0.12), transparent 60%)",
          }}
        />
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/20 to-transparent" />

        {/* Contenus */}
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <p className="text-[12px] font-[700] uppercase tracking-[0.14em] text-white/90 drop-shadow-sm">
            {kicker}
          </p>

          <div className="space-y-4">
            <h3 className="text-[24px] md:text-[26px] font-[900] tracking-[-0.01em] leading-[1.15] text-white max-w-[280px] [filter:drop-shadow(0_1px_1px_rgba(0,0,0,.6))]">
              {title}
            </h3>
            <p className="text-[15px] font-[400] leading-[1.4] text-white/80 max-w-[280px] [filter:drop-shadow(0_1px_1px_rgba(0,0,0,.5))]">
              {tagline}
            </p>

            <div className="flex items-end justify-between">
              <span className="work-badge">{badge}</span>

              <div className="flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm transition-all duration-300 group-hover/card:w-auto group-hover/card:h-10 group-hover/card:px-4 group-hover/card:gap-2 w-10 h-10">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-opacity duration-200 group-hover/card:opacity-0"
                  aria-hidden="true"
                >
                  <path d="M8 3.5V12.5M3.5 8H12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="text-[13px] font-[600] text-white whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover/card:opacity-100">
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
