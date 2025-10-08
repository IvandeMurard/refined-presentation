// src/components/Navigation.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { designTokens } from "@/design-tokens";

// Helpers couleurs via tokens
const COLORS = {
  bg: designTokens.color.bg.base,
  border: designTokens.color.border.default,
  ink: designTokens.color.ink.strong,
  accent: designTokens.color.accent.primary,
  onAccent: designTokens.color.accent.on,
};

// Classe utilitaire bouton
const baseBtn = "text-sm font-medium transition-colors px-3 py-1.5 rounded-xl border shadow-sm";

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<"hero" | "work" | "contact" | null>("hero");

  // --- Typewriter (nom du site) : simple, stable
  const [displayText, setDisplayText] = useState("Ivan de Murard");
  const currentTextRef = useRef(displayText);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    currentTextRef.current = displayText;
  }, [displayText]);

  // Scroll style
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Observer des sections
  useEffect(() => {
    const ids = ["hero", "work", "contact"];
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // section la plus visible
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        // quand Contact domine, on veut que Home & Work soient idle
        if (!top) return;
        const id = top.target.id as "hero" | "work" | "contact";
        setActiveSection(id); // "contact" => aucun des deux (Home/Work) n'est actif
      },
      { threshold: [0.15, 0.35, 0.6, 0.85], rootMargin: "-10% 0px -30% 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Typewriter déclenché par activeSection (Hero → “I M”, sinon nom complet)
  useEffect(() => {
    const target = activeSection === "hero" ? "I M" : "Ivan de Murard";
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
  }, [activeSection]);

  // Styles “actifs” calculés
  const styles = useMemo(() => {
    const active = `bg-[${COLORS.ink}] text-white hover:bg-[${COLORS.ink}]`;
    const idle = `text-[${COLORS.ink}] hover:bg-[${COLORS.ink}] hover:text-white`;
    const contactIdle = `text-[${COLORS.onAccent}] bg-transparent border border-transparent`;
    const contactHover = `hover:bg-white hover:text-[${COLORS.accent}]`;

    return { active, idle, contactIdle, contactHover };
  }, []);

  // Scroll vers section (monopage)
  const go = (id: "hero" | "work" | "contact") => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-[${designTokens.motion.duration.base}] ease-[${designTokens.motion.easing.product}] ${
        isScrolled ? "backdrop-blur-sm" : ""
      }`}
      style={{
        background: isScrolled ? `${COLORS.bg}F2` : "transparent",
        borderBottom: isScrolled ? `1px solid ${COLORS.border}` : "1px solid transparent",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Marque + curseur */}
          <button
            onClick={() => go("hero")}
            className="text-[16px] font-[600] tracking-tight"
            style={{ color: COLORS.ink }}
          >
            {displayText}
            <span
              aria-hidden
              className="inline-block w-[2px] h-[16px] ml-1 animate-pulse"
              style={{ background: COLORS.accent }}
            />
          </button>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* HOME (Hero) */}
            <button
              onClick={() => go("hero")}
              className={`${baseBtn} ${activeSection === "hero" ? styles.active : styles.idle}`}
            >
              Home
            </button>

            {/* WORK */}
            <button
              onClick={() => go("work")}
              className={`${baseBtn} ${activeSection === "work" ? styles.active : styles.idle}`}
            >
              Work
            </button>

            {/* CONTACT — pas de fond par défaut ; inverse au hover seulement */}
            <button
              onClick={() => go("contact")}
              className={`${baseBtn} ${styles.contactIdle} ${styles.contactHover}`}
              style={{
                // texte de base = onAccent (blanc sur fond vert de la section Contact)
                color: COLORS.onAccent,
              }}
            >
              Contact
            </button>
          </div>

          {/* Lang / Theme */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <button className="font-medium opacity-80 hover:opacity-100" style={{ color: COLORS.ink }}>
                EN
              </button>
              <span className="opacity-50" style={{ color: designTokens.color.ink.muted }}>
                |
              </span>
              <button className="font-medium" style={{ color: designTokens.color.ink.muted }}>
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
