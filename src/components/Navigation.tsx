// src/components/Navigation.tsx
import React, { type FC, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { designTokens } from "@/design-tokens";

const COLORS = {
  bg: designTokens.color.bg.base,
  border: designTokens.color.border.default,
  ink: designTokens.color.ink.strong,
  inkMuted: designTokens.color.ink.muted,
  accent: designTokens.color.accent.primary,
  onAccent: designTokens.color.accent.on,
};

const baseBtn = "text-sm font-medium px-3 py-1.5 rounded-xl shadow-sm transition-colors";

export const Navigation: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // --- Scroll state (transparence + bordure)
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- Thème
  const isDark = typeof document !== "undefined" && document.documentElement.classList.contains("dark");
  const inkOnContext = !isScrolled && isDark ? "#FFFFFF" : COLORS.ink;
  const btnActiveBg = !isScrolled && isDark ? "rgba(255,255,255,0.12)" : COLORS.ink;

  // --- Observers pour états actifs Home/Work (uniquement efficaces sur la Home)
  const [heroVisible, setHeroVisible] = useState(location.pathname !== "/" ? false : true);
  const [workActive, setWorkActive] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") return; // pas d’IDs sur les case studies
    const hero = document.getElementById("hero");
    if (!hero) return;
    const io = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting && entry.intersectionRatio >= 0.35),
      { threshold: [0.25, 0.35, 0.5], rootMargin: "-10% 0px -20% 0px" },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") return;
    const work = document.getElementById("work");
    if (!work) return;
    const io = new IntersectionObserver(
      ([entry]) => setWorkActive(entry.isIntersecting && entry.intersectionRatio >= 0.6),
      { threshold: [0.4, 0.6, 0.8], rootMargin: "-10% 0px -20% 0px" },
    );
    io.observe(work);
    return () => io.disconnect();
  }, [location.pathname]);

  // --- Typewriter (inchangé)
  const [displayText, setDisplayText] = useState("Ivan de Murard");
  const currentTextRef = useRef(displayText);
  const timeoutRef = useRef<number | null>(null);
  useEffect(() => {
    currentTextRef.current = displayText;
  }, [displayText]);

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

  // --- Scroll helper
  const smoothScroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  // --- Gestion onClick des ancres : si on est sur "/", scroll local ; sinon navigate("/#id")
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const onHome = location.pathname === "/";
    if (onHome) {
      e.preventDefault();
      smoothScroll(id);
    } else {
      // on laisse la navigation se faire (pas de preventDefault),
      // ET on force navigate pour être sûr (utile si l’app consomme les liens)
      e.preventDefault();
      navigate(`/#${id}`);
    }
  };

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
      role="navigation"
      aria-label="Primary"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Titre cliquable */}
          <Link
            to="/#hero"
            onClick={(e) => handleAnchorClick(e, "hero")}
            className="relative text-[16px] font-[600] tracking-tight w-[160px] text-left whitespace-nowrap"
            style={{ color: inkOnContext }}
            aria-label="Go to top"
          >
            {displayText}
            <span
              aria-hidden
              className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 inline-block w-[2px] h-[1em] animate-pulse"
              style={{ background: COLORS.accent }}
            />
          </Link>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* HOME */}
            <Link
              to="/#hero"
              onClick={(e) => handleAnchorClick(e, "hero")}
              className={baseBtn}
              style={{
                border: `1px solid ${inkOnContext}`,
                background: heroVisible ? btnActiveBg : "transparent",
                color: heroVisible ? "#FFFFFF" : inkOnContext,
                transitionTimingFunction: designTokens.motion.easing.product,
                transitionDuration: designTokens.motion.duration.base,
              }}
              aria-current={heroVisible ? "page" : undefined}
            >
              Home
            </Link>

            {/* WORK */}
            <Link
              to="/#work"
              onClick={(e) => handleAnchorClick(e, "work")}
              className={baseBtn}
              style={{
                border: `1px solid ${inkOnContext}`,
                background: workActive ? btnActiveBg : "transparent",
                color: workActive ? "#FFFFFF" : inkOnContext,
                transitionTimingFunction: designTokens.motion.easing.product,
                transitionDuration: designTokens.motion.duration.base,
              }}
              aria-current={workActive ? "page" : undefined}
            >
              Work
            </Link>

            {/* CONTACT */}
            <Link
              to="/#contact"
              onClick={(e) => handleAnchorClick(e, "contact")}
              className={`${baseBtn} active:scale-95 active:ring-2 ring-contact/50`}
              style={{
                border: `1px solid ${COLORS.accent}`,
                background: COLORS.accent,
                color: COLORS.onAccent,
                transitionTimingFunction: designTokens.motion.easing.product,
                transitionDuration: designTokens.motion.duration.base,
              }}
            >
              Contact
            </Link>
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
