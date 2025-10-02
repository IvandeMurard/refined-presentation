import * as React from "react";
import { motion } from "motion/react";

type Props = {
  title: string;
  description: string;
  ctaText: string;
  ctaLink?: string;
  onClick?: () => void;
  image?: string;
  className?: string;
};

export function CTABanner({
  title,
  description,
  ctaText,
  ctaLink,
  onClick,
  image = "https://images.unsplash.com/photo-1742440710226-450e3b85c100?auto=format&fit=crop&w=1400&q=60",
  className = "",
}: Props) {
  const [hover, setHover] = React.useState(false);
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const handleClick = () => {
    if (onClick) onClick();
    else if (ctaLink) window.location.href = ctaLink;
  };

  return (
    <motion.div
      className={["w-full py-4", className].join(" ")}                 // ← moins de marge verticale
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">            {/* ← largeur + padding réduits */}
        <div
          className="relative overflow-hidden rounded-[20px] shadow-[0_4px_16px_-6px_hsl(var(--overlay))] border border-border"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {/* Media */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.img
              src={image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              animate={{ scale: hover && !reducedMotion ? 1.03 : 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Overlay plus léger + petite lueur en haut (gloss) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                // voile principal très léger (vert nuit → bleu nuit selon ton thème)
                "linear-gradient(135deg, rgba(6,95,70,0.65) 0%, rgba(11,18,32,0.55) 100%)," +
                // lueur douce pour éviter l'effet « plan »
                "radial-gradient(120% 60% at 0% 0%, rgba(255,255,255,0.08), transparent 60%)",
            }}
          />

          {/* Contenu compact */}
          <div className="relative z-10 text-center px-6 md:px-10 py-6 md:py-7">  {/* ← py réduit */}
            <motion.h2
              className="mb-2 text-[20px] md:text-[24px] font-[700] leading-[1.25] tracking-[-0.01em] text-white
                         [filter:drop-shadow(0_1px_1px_rgba(0,0,0,.5))]"
              animate={{ y: hover && !reducedMotion ? -2 : 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              {title}
            </motion.h2>

            <motion.p
              className="mx-auto mb-4 text-[14px] md:text-[15px] leading-[1.5] text-white/85 max-w-[560px]"
              animate={{ y: hover && !reducedMotion ? -1 : 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}
            >
              {description}
            </motion.p>

            {/* CTA plus discret (outline → filled au hover) */}
            <motion.button
              onClick={handleClick}
              className="inline-flex items-center justify-center h-10 px-5 rounded-full
                         border border-[hsl(var(--primary))] text-[hsl(var(--primary))]
                         bg-transparent hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))]
                         transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))/30]"
              whileHover={{ scale: reducedMotion ? 1 : 1.01 }}
              whileTap={{ scale: reducedMotion ? 1 : 0.99 }}
            >
              <span className="font-[600] text-[13px]">{ctaText}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                className="ml-2 transition-transform duration-200"
                style={{ transform: hover ? "translateX(2px)" : "translateX(0)" }}
                aria-hidden="true"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </div>

          {/* Grain quasi imperceptible (premium, mais discret) */}
          <div
            className="absolute inset-0 opacity-[0.01] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
