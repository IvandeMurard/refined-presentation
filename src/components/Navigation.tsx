// src/components/Navigation.tsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

type Props = {
  className?: string;
};

export const Navigation: React.FC<Props> = ({ className = "" }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // UI states
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInHero, setIsInHero] = useState(true);
  const [displayText, setDisplayText] = useState("Ivan de Murard");
  const animationRef = useRef<number | null>(null);

  // Detect scroll to style navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect Hero visibility (expects <section id="hero"> ...)
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const obs = new IntersectionObserver(([entry]) => setIsInHero(entry.isIntersecting), { threshold: 0.1 });
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  // Typewriter effect on site name
  useEffect(() => {
    const targetText = isInHero ? "I M" : "Ivan de Murard";
    if (displayText === targetText) return;

    if (animationRef.current) window.clearTimeout(animationRef.current);

    const steps: string[] = [];
    // delete current
    for (let i = displayText.length; i >= 0; i--) steps.push(displayText.slice(0, i));
    // type new
    for (let i = 1; i <= targetText.length; i++) steps.push(targetText.slice(0, i));

    let idx = 0;
    const tick = () => {
      setDisplayText(steps[idx]);
      idx += 1;
      if (idx < steps.length) {
        animationRef.current = window.setTimeout(tick, 50);
      }
    };
    tick();

    return () => {
      if (animationRef.current) window.clearTimeout(animationRef.current);
    };
  }, [isInHero, displayText]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled ? "bg-[#FAFAFA]/95 backdrop-blur-sm border-b border-[#E5E7EB]" : ""
      } ${className}`}
    >
      {/* Conteneur + padding pour éviter que les boutons touchent les bords */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: site name with typewriter */}
          <div className="text-[16px] font-[600] text-[#0B1220] min-w-[150px] tracking-tight">
            {displayText}
            <span className="inline-block w-[2px] h-[16px] bg-[#065f46] ml-1 animate-pulse" />
          </div>

          {/* Center: nav actions — contenus dans la barre */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors px-3 py-1.5 rounded-xl border shadow-sm ${
                isActive("/") ? "bg-black text-white" : "text-[#0B1220] hover:bg-black hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/work"
              className={`text-sm font-medium transition-colors px-3 py-1.5 rounded-xl border shadow-sm ${
                isActive("/work") ? "bg-black text-white" : "text-[#0B1220] hover:bg-black hover:text-white"
              }`}
            >
              Work
            </Link>
            <Link
              to="/#contact"
              className="text-sm font-medium text-white transition-colors px-3 py-1.5 rounded-xl border shadow-sm bg-[#065f46] hover:bg-[#046a42] active:scale-95 active:ring-2 ring-[#065f46]/40"
            >
              Contact
            </Link>
          </div>

          {/* Right: Lang + Theme */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <button className="font-medium text-[#0B1220] hover:opacity-80 transition">EN</button>
              <span className="text-[#9AA3AF]">|</span>
              <button className="font-medium text-[#6B7280] hover:text-[#0B1220] transition">FR</button>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
