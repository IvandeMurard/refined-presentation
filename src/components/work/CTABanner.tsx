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
      className={["w-full my-8 md:my-10", className].join(" ")}  // ← espace raisonnable autour
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">          {/* ← largeur contenue */}
        <div
          className="relative overflow-hidden rounded-[16px] border border-border
                     shadow-[0_6px_20px_-8px_hsl(var(--overlay))]"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {/* Media */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.img
              src={image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover
                         saturate-115 contrast-110 brightness-[1.02]"
              animate={{ scale: hover && !reducedMotion ? 1.02 : 1 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Overlay léger + gloss subtil (moins dense que ta version précédente) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                // Voile principal (vert nuit -> bleu nuit), plus respirant
                "linear-gradient(135deg, rgba(6,95,70,0.48) 0%, rgba(11,18,32,0.42) 100%)," +
                // Lueur très légère en haut à gauche (effet premium sans alourdir)
                "radial-gradient(120% 60% at 0% 0%, rgba(255,255,255,0.07), transparent 60%)",
            }}
          />

          {/* Contenu COMPACT (hauteur maîtrisée) */}
          <div className="relative z-10 text-center px-5 md:px-8 py-5 md:py-6">
            <motion.h2
              className="mb-1.5 text-[18px] md:text-[22px] font-[700] leading-[1.25]
                         tracking-[-0.01em] text-white
                         [filter:drop-shadow(0_1px_1px_rgba(0,0,0,.45))]"
              animate={{ y: hover && !reducedMotion ? -1 : 0 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {title}
            </motion.h2>

            <motion.p
              className="mx-auto mb-3 text-[13px] md:text-[14px] leading-[1.55]
                         text-white/85 max-w-[560px]"
              animate={{ y: hover && !reducedMotion ? -1 : 0 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1], delay: 0.03 }}
            >
              {description}
            </motion.p>

            {/* CTA discret: outline → filled au hover (tokens primary) */}
            <motion.button
              onClick={handleClick}
              className="inline-flex items-center justify-center h-9 md:h-10 px-4 md:px-5
                         rounded-full border text-[13px] font-[600]
                         border-[hsl(var(--primary))] text-[hsl(var(--primary))]
                         bg-transparent hover:bg-[hsl(var(--primary))]
                         hover:text-[hsl(var(--primary-foreground))]
                         transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))/30]"
              whileHover={{ scale: reducedMotion ? 1 : 1.01 }}
              whileTap={{ scale: reducedMotion ? 1 : 0.99 }}
            >
              {ctaText}
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
        </div>
      </div>
    </motion.div>
  );
}
