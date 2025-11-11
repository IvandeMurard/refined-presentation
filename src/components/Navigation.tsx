// src/components/Navigation.tsx
import React, { type FC, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { designTokens } from "@/design-tokens";

const COLORS = {
  bg: designTokens.color.bg.base,
  border: designTokens.color.border.default,
  ink: designTokens.color.ink.strong,
  inkMuted: designTokens.color.ink.muted,
  accent: designTokens.color.accent.primary,
  onAccent: designTokens.color.accent.on,
};

// leaner link style (no filled pills)
const navLinkBase =
  "relative inline-flex items-center px-3 h-9 text-sm font-medium rounded-xl " +
  "text-foreground/80 hover:text-foreground hover:bg-black/[0.08] dark:hover:bg-white/[0.12] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 transition-all duration-200";

export const Navigation: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();

  // --- Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- Scroll state (glass elevation)
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- Scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // --- Theme (for inline glass colors)
  const isDark = typeof document !== "undefined" && document.documentElement.classList.contains("dark");
  const inkOnContext = isDark ? "#FFFFFF" : COLORS.ink;

  // --- Section observers (Home page only)
  const [heroVisible, setHeroVisible] = useState(location.pathname === "/");
  const [workActive, setWorkActive] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") return;
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

  // --- Typewriter (unchanged, but without green cursor)
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
    return () => timeoutRef.current && window.clearTimeout(timeoutRef.current);
  }, [heroVisible]);

  // --- Smooth scroll helper
  const smoothScroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const onHome = location.pathname === "/";
    if (onHome) {
      e.preventDefault();
      smoothScroll(id);
    } else {
      e.preventDefault();
      navigate(`/#${id}`);
    }
  };

  // --- Glass tokens
  const BG_TOP = isDark ? "rgba(17,24,39,0.55)" : "rgba(255,255,255,0.66)";
  const BG_SCROLL = isDark ? "rgba(17,24,39,0.72)" : "rgba(255,255,255,0.78)";
  const BORDER = isDark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.08)";
  const SHADOW = isScrolled ? "0 6px 20px rgba(0,0,0,0.08)" : "none";

  return (
    <nav
      role="navigation"
      aria-label="Primary"
      className="fixed top-0 w-full z-50 transition-[box-shadow,background] duration-300"
      style={{
        backdropFilter: "saturate(1.2) blur(12px)",
        WebkitBackdropFilter: "saturate(1.2) blur(12px)",
        background: isScrolled ? BG_SCROLL : BG_TOP,
        borderBottom: `1px solid ${BORDER}`,
        boxShadow: SHADOW,
        transitionTimingFunction: designTokens.motion.easing.product,
      }}
    >
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Brand (cursor removed) */}
          <Link
            to="/#hero"
            onClick={(e) => handleAnchorClick(e, "hero")}
            className="text-[16px] font-[600] tracking-tight w-[160px] text-left whitespace-nowrap hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 rounded-md"
            style={{ color: inkOnContext }}
            aria-label="Go to top"
          >
            {displayText}
          </Link>

          {/* Mobile Menu Button - Visible only on mobile */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg text-foreground/80 hover:text-foreground hover:bg-black/[0.08] dark:hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 transition-all"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu size={20} />
          </button>

          {/* Right side: Links + Lang/Theme */}
          <div className="flex items-center gap-3">
            {/* Links */}
            <div className="hidden md:flex items-center gap-1">
              {/* HOME */}
              <Link
                to="/#hero"
                onClick={(e) => handleAnchorClick(e, "hero")}
                className={navLinkBase}
                aria-current={heroVisible ? "page" : undefined}
                style={{ color: heroVisible ? inkOnContext : undefined }}
              >
                Home
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-3 right-3 -bottom-[6px] h-[2px] rounded-full bg-foreground/70 transition-opacity"
                  style={{ opacity: heroVisible ? 1 : 0 }}
                />
              </Link>

              {/* WORK */}
              <Link
                to="/#work"
                onClick={(e) => handleAnchorClick(e, "work")}
                className={navLinkBase}
                aria-current={workActive ? "page" : undefined}
                style={{ color: workActive ? inkOnContext : undefined }}
              >
                Work
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-3 right-3 -bottom-[6px] h-[2px] rounded-full bg-foreground/70 transition-opacity"
                  style={{ opacity: workActive ? 1 : 0 }}
                />
              </Link>

              {/* CONTACT (accent CTA, kept) */}
              <Link
                to="/#contact"
                onClick={(e) => handleAnchorClick(e, "contact")}
                className="inline-flex items-center h-9 px-3 text-sm font-medium rounded-xl hover:brightness-110 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-contact/40"
                style={{
                  background: COLORS.accent,
                  color: COLORS.onAccent,
                  border: `1px solid ${COLORS.accent}`,
                  transitionTimingFunction: designTokens.motion.easing.product,
                }}
              >
                Contact
              </Link>
            </div>

            {/* Lang / Theme */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 text-sm">
                <button
                  className={`h-9 px-2 rounded-lg font-medium transition-all ${
                    language === 'en' 
                      ? 'text-foreground font-bold' 
                      : 'text-foreground/70 hover:text-foreground'
                  } hover:bg-black/[0.04] dark:hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30`}
                  onClick={() => setLanguage('en')}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <span className="opacity-50" style={{ color: inkOnContext }}>
                  |
                </span>
                <button
                  className={`h-9 px-2 rounded-lg font-medium transition-all ${
                    language === 'fr' 
                      ? 'text-foreground font-bold' 
                      : 'text-foreground/70 hover:text-foreground'
                  } hover:bg-black/[0.04] dark:hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30`}
                  onClick={() => setLanguage('fr')}
                  aria-label="Passer en français"
                >
                  FR
                </button>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-[280px] bg-background/98 backdrop-blur-xl border-l border-border z-[70] shadow-2xl md:hidden"
          >
            <div className="flex flex-col h-full p-6">
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center h-10 w-10 rounded-lg text-foreground/80 hover:text-foreground hover:bg-black/[0.08] dark:hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 transition-all"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2 mb-8">
                <Link
                  to="/#hero"
                  onClick={(e) => {
                    handleAnchorClick(e, "hero");
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center h-12 px-4 text-base font-medium rounded-xl text-foreground/80 hover:text-foreground hover:bg-black/[0.08] dark:hover:bg-white/[0.12] transition-all"
                >
                  Home
                </Link>

                <Link
                  to="/#work"
                  onClick={(e) => {
                    handleAnchorClick(e, "work");
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center h-12 px-4 text-base font-medium rounded-xl text-foreground/80 hover:text-foreground hover:bg-black/[0.08] dark:hover:bg-white/[0.12] transition-all"
                >
                  Work
                </Link>

                <Link
                  to="/#contact"
                  onClick={(e) => {
                    handleAnchorClick(e, "contact");
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center h-12 px-4 text-base font-medium rounded-xl transition-all"
                  style={{
                    background: COLORS.accent,
                    color: COLORS.onAccent,
                    border: `1px solid ${COLORS.accent}`,
                  }}
                >
                  Contact
                </Link>
              </nav>

              {/* Language Selector */}
              <div className="mt-auto pt-6 border-t border-border">
                <div className="flex items-center justify-center gap-3">
                  <button
                    className={`h-10 px-4 rounded-lg font-medium transition-all ${
                      language === 'en' 
                        ? 'text-foreground bg-black/[0.08] dark:bg-white/[0.12] font-bold' 
                        : 'text-foreground/70 hover:text-foreground hover:bg-black/[0.04] dark:hover:bg-white/[0.08]'
                    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30`}
                    onClick={() => setLanguage('en')}
                    aria-label="Switch to English"
                  >
                    EN
                  </button>
                  <span className="text-foreground/50">|</span>
                  <button
                    className={`h-10 px-4 rounded-lg font-medium transition-all ${
                      language === 'fr' 
                        ? 'text-foreground bg-black/[0.08] dark:bg-white/[0.12] font-bold' 
                        : 'text-foreground/70 hover:text-foreground hover:bg-black/[0.04] dark:hover:bg-white/[0.08]'
                    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30`}
                    onClick={() => setLanguage('fr')}
                    aria-label="Passer en français"
                  >
                    FR
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </nav>
  );
};
