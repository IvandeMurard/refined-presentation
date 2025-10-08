// src/components/Navigation.tsx
import React, { type FC } from "react";
const { useState, useEffect, useRef } = React;
import { ThemeToggle } from "./ThemeToggle";
import { designTokens } from "@/design-tokens";

// === Tokens (raccourcis)
const COLORS = {
  bg: designTokens.color.bg.base,
  border: designTokens.color.border.default,
  ink: designTokens.color.ink.strong,
  inkMuted: designTokens.color.ink.muted,
  accent: designTokens.color.accent.primary, // vert
  onAccent: designTokens.color.accent.on, // texte lisible sur fond vert (souvent blanc)
};

const baseBtn = "text-sm font-medium px-3 py-1.5 rounded-xl shadow-sm transition-colors";

export const Navigation: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // 🔒 Dark mode sans hook custom (évite le crash)
  const isDark = typeof document !== "undefined" && document.documentElement.classList.contains("dark");

  // En contexte HERO + dark + nav transparente → l’“encre” doit être blanche
  const inkOnContext = !isScrolled && isDark ? "#FFFFFF" : COLORS.ink;

  // Fond actif pour Home/Work : en dark sur Hero on évite un plein blanc → semi-transparent
  const btnActiveBg = !isScrolled && isDark ? "rgba(255,255,255,0.12)" : COLORS.ink;

  // États d'activation par section
  const [heroVisible, setHeroVisible] = useState(true); // Home actif ↔ Hero visible
  const [workActive, setWorkActive] = useState(false); // Work actif ↔ Work majoritairement visible

  // Machine à écrire (titre)
  const [displayText, setDisplayText] = useState("Ivan de Murard");
  const currentTextRef = useRef(displayText);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    currentTextRef.current = displayText;
  }, [displayText]);

  // Style nav au scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Observer HERO pour l'état Home + typewriter
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const io = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting && entry.intersectionRatio >= 0.35),
      { threshold: [0.25, 0.35, 0.5], rootMargin: "-10% 0px -20% 0px" },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  // Observer WORK pour l'état Work (strict : majoritairement visible)
  useEffect(() => {
    const work = document.getElementById("work");
    if (!work) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        // Actif seulement si la section Work occupe au moins ~60% du viewport
        setWorkActive(entry.isIntersecting && entry.intersectionRatio >= 0.6);
      },
      { threshold: [0.4, 0.6, 0.8], rootMargin: "-10% 0px -20% 0px" },
    );
    io.observe(work);
    return () => io.disconnect();
  }, []);

  // Typewriter : “I M” quand Hero visible, “Ivan de Murard” sinon
  useEffect(() => {
    const target = heroVisible ? "I M" : "Ivan de Murard";
    const from = currentTextRef.current;
    if (from === target) return;

    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);

    const steps: string[] = [];
    for (let i = from.length; i >= 0; i--) steps.push(from.slice(0, i));
    for (let i = 1; i <= target.length; i++) steps.push(target.slice(0, i));

    let i = 0;
    const tick = () => {
      setDisplayText(steps[i]);
      i++;
      if (i < steps.length) timeoutRef.current = window.setTimeout(tick, 50);
    };
    tick();

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [heroVisible]);

  // Scroll helper (one-page)
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all"
      style={{
        backdropFilter: isScrolled ? "blur(6px)" : "none",
        background: isScrolled
          ? isDark
            ? "rgba(17,24,39,0.92)" // dark: slate quasi-opaque
            : `${COLORS.bg}F2` // light: fond clair translucide
          : "transparent",
        borderBottom: `1px solid ${isScrolled ? (isDark ? "rgba(255,255,255,0.12)" : COLORS.border) : "transparent"}`,
        transitionTimingFunction: designTokens.motion.easing.product,
        transitionDuration: designTokens.motion.duration.base,
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Titre + curseur (largeur fixe => pas de "push") */}
          <button
            onClick={() => go("hero")}
            className="relative text-[16px] font-[600] tracking-tight w-[160px] text-left whitespace-nowrap"
            style={{ color: inkOnContext }}
          >
            {displayText}
            <span
              aria-hidden
              className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 inline-block w-[2px] h-[1em] animate-pulse"
              style={{ background: COLORS.accent }}
            />
          </button>

          {/* Boutons */}
          <div className="hidden md:flex items-center gap-3">
            {/* HOME - actif seulement si HERO majoritairement visible */}
            <button
              onClick={() => go("hero")}
              className={baseBtn}
              style={{
                border: `1px solid ${inkOnContext}`, // fine bordure encre contextuelle
                background: heroVisible ? btnActiveBg : "transparent",
                color: heroVisible ? "#FFFFFF" : inkOnContext,
                transitionTimingFunction: designTokens.motion.easing.product,
                transitionDuration: designTokens.motion.duration.fast,
              }}
              onMouseEnter={(e) => {
                if (!heroVisible) {
                  e.currentTarget.style.background = String(btnActiveBg);
                  e.currentTarget.style.color = "#FFFFFF";
                  e.currentTarget.style.borderColor = String(inkOnContext);
                }
              }}
              onMouseLeave={(e) => {
                if (!heroVisible) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = String(inkOnContext);
                  e.currentTarget.style.borderColor = String(inkOnContext);
                }
              }}
            >
              Home
            </button>

            {/* WORK - actif seulement quand la section Work est majoritairement visible */}
            <button
              onClick={() => go("work")}
              className={baseBtn}
              style={{
                border: `1px solid ${inkOnContext}`, // fine bordure encre contextuelle
                background: workActive ? btnActiveBg : "transparent",
                color: workActive ? "#FFFFFF" : inkOnContext,
                transitionTimingFunction: designTokens.motion.easing.product,
                transitionDuration: designTokens.motion.duration.fast,
              }}
              onMouseEnter={(e) => {
                if (!workActive) {
                  e.currentTarget.style.background = String(btnActiveBg);
                  e.currentTarget.style.color = "#FFFFFF";
                  e.currentTarget.style.borderColor = String(inkOnContext);
                }
              }}
              onMouseLeave={(e) => {
                if (!workActive) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = String(inkOnContext);
                  e.currentTarget.style.borderColor = String(inkOnContext);
                }
              }}
            >
              Work
            </button>

            {/* CONTACT — fond vert par défaut ; AU SURVOL: fond blanc + texte vert ; haptique actif */}
            <button
              onClick={() => go("contact")}
              className={`${baseBtn} active:scale-95 active:ring-2 ring-contact/50`}
              style={{
                border: `1px solid ${COLORS.accent}`,
                background: COLORS.accent, // idle: vert
                color: COLORS.onAccent, // idle: texte lisible (blanc)
                transitionTimingFunction: designTokens.motion.easing.product,
                transitionDuration: designTokens.motion.duration.fast,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#FFFFFF"; // hover: blanc
                e.currentTarget.style.color = String(COLORS.accent); // hover: vert
                e.currentTarget.style.borderColor = String(COLORS.accent);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = String(COLORS.accent); // retour vert
                e.currentTarget.style.color = String(COLORS.onAccent);
                e.currentTarget.style.borderColor = String(COLORS.accent);
              }}
            >
              Contact
            </button>
          </div>

          {/* Lang / Theme */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <button className="font-medium opacity-80 hover:opacity-100" style={{ color: inkOnContext }}>
                EN
              </button>
              <span className="opacity-50" style={{ color: inkOnContext }}>
                |
              </span>
              <button className="font-medium" style={{ color: COLORS.inkMuted }}>
                FR
              </button>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
