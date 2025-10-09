// src/components/Navigation.tsx
import React, { type FC } from "react";
const { useState, useEffect, useRef } = React;
import { ThemeToggle } from "./ThemeToggle";
import { designTokens } from "@/design-tokens";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const onHome = location.pathname === "/";
    if (onHome) {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      e.preventDefault();
      navigate(`/#${id}`);
    }
  };

  return (
    <>
      <Link to="/#hero" onClick={(e) => handleAnchor(e, "hero")}>
        Home
      </Link>
      <Link to="/#work" onClick={(e) => handleAnchor(e, "work")}>
        Work
      </Link>
      <Link to="/#contact" onClick={(e) => handleAnchor(e, "contact")}>
        Contact
      </Link>
    </>
  );
};

// === Tokens (raccourcis)
const COLORS = {
  bg: designTokens.color.bg.base,
  border: designTokens.color.border.default,
  ink: designTokens.color.ink.strong,
  inkMuted: designTokens.color.ink.muted,
  accent: designTokens.color.accent.primary, // vert
  onAccent: designTokens.color.accent.on, // texte sur fond vert
};

const baseBtn = "text-sm font-medium px-3 py-1.5 rounded-xl shadow-sm transition-colors";

export const Navigation: FC = () => {
  // --- Scroll state (sert pour la transparence de la barre + couleurs contextuelles)
  const [isScrolled, setIsScrolled] = useState(false);

  // --- Thème courant (pas de hook custom pour éviter les crashes)
  const isDark = typeof document !== "undefined" && document.documentElement.classList.contains("dark");

  // --- Couleurs contextuelles (calculées APRES isScrolled)
  // Sur Hero + dark + nav transparente => encre = blanc || sinon encre normale
  const inkOnContext = !isScrolled && isDark ? "#FFFFFF" : COLORS.ink;
  // Fond des boutons actifs : en dark/hero un semi-blanc discret, sinon fond encre
  const btnActiveBg = !isScrolled && isDark ? "rgba(255,255,255,0.12)" : COLORS.ink;

  // --- Sections actives (Home ↔ Hero, Work ↔ section Work)
  const [heroVisible, setHeroVisible] = useState(true);
  const [workActive, setWorkActive] = useState(false);

  // --- Typewriter (titre) + anti layout shift
  const [displayText, setDisplayText] = useState("Ivan de Murard");
  const currentTextRef = useRef(displayText);
  const timeoutRef = useRef<number | null>(null);
  useEffect(() => {
    currentTextRef.current = displayText;
  }, [displayText]);

  // Scroll -> style nav
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Observer HERO (Home actif + texte "I M")
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

  // Observer WORK (Work actif seulement quand majoritairement visible)
  useEffect(() => {
    const work = document.getElementById("work");
    if (!work) return;
    const io = new IntersectionObserver(
      ([entry]) => setWorkActive(entry.isIntersecting && entry.intersectionRatio >= 0.6),
      { threshold: [0.4, 0.6, 0.8], rootMargin: "-10% 0px -20% 0px" },
    );
    io.observe(work);
    return () => io.disconnect();
  }, []);

  // Typewriter — “I M” quand Hero, nom complet sinon — sans pousser les boutons
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
        background: isScrolled ? (isDark ? "rgba(17,24,39,0.92)" : `${COLORS.bg}F2`) : "transparent",
        borderBottom: `1px solid ${isScrolled ? (isDark ? "rgba(255,255,255,0.12)" : COLORS.border) : "transparent"}`,
        transitionTimingFunction: designTokens.motion.easing.product,
        transitionDuration: designTokens.motion.duration.base,
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Titre + curseur (largeur fixe => aucun push) */}
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

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* HOME - actif seulement si HERO majoritairement visible */}
            <button
              onClick={() => go("hero")}
              className={baseBtn}
              style={{
                border: `1px solid ${inkOnContext}`,
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

            {/* WORK - actif seulement quand la section Work est majoritairement visible.
                Devient idle dès qu'on passe à Hackathons / Experience / etc. */}
            <button
              onClick={() => go("work")}
              className={baseBtn}
              style={{
                border: `1px solid ${inkOnContext}`,
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

            {/* CONTACT — fond vert par défaut ; hover: blanc + texte vert ; haptique sur press */}
            <button
              onClick={() => go("contact")}
              className={`${baseBtn} active:scale-95 active:ring-2 ring-contact/50`}
              style={{
                border: `1px solid ${COLORS.accent}`,
                background: COLORS.accent,
                color: COLORS.onAccent,
                transitionTimingFunction: designTokens.motion.easing.product,
                transitionDuration: designTokens.motion.duration.fast,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#FFFFFF";
                e.currentTarget.style.color = String(COLORS.accent);
                e.currentTarget.style.borderColor = String(COLORS.accent);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = String(COLORS.accent);
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
