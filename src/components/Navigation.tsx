import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { designTokens } from "@/design-tokens"; // si tu utilises des tokens

const baseBtn =
  "text-sm font-medium px-3 py-1.5 rounded-xl shadow-sm transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  // header blur + border after scroll
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // active states (uniquement efficient sur la Home)
  const [heroVisible, setHeroVisible] = useState(location.pathname === "/");
  const [workActive, setWorkActive] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") return;
    const hero = document.getElementById("hero");
    if (!hero) return;
    const io = new IntersectionObserver(([e]) => setHeroVisible(e.isIntersecting && e.intersectionRatio >= 0.35), {
      threshold: [0.25, 0.35, 0.5],
      rootMargin: "-10% 0px -20% 0px",
    });
    io.observe(hero);
    return () => io.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") return;
    const work = document.getElementById("work");
    if (!work) return;
    const io = new IntersectionObserver(([e]) => setWorkActive(e.isIntersecting && e.intersectionRatio >= 0.6), {
      threshold: [0.4, 0.6, 0.8],
      rootMargin: "-10% 0px -20% 0px",
    });
    io.observe(work);
    return () => io.disconnect();
  }, [location.pathname]);

  // scroll helper
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

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all"
      style={{
        backdropFilter: isScrolled ? "blur(6px)" : "none",
        background: isScrolled ? "color-mix(in oklab, var(--background) 92%, transparent)" : "transparent",
        borderBottom: isScrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
      role="navigation"
      aria-label="Primary"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand → scroll top on Home, navigate to /#hero otherwise */}
          <Link
            to="/#hero"
            onClick={(e) => handleAnchorClick(e, "hero")}
            className="relative text-[16px] font-[600] tracking-tight w-[180px] text-left whitespace-nowrap"
          >
            Ivan de Murard
            <span
              aria-hidden
              className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 inline-block w-[2px] h-[1em] animate-pulse bg-accent"
            />
          </Link>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/#hero"
              onClick={(e) => handleAnchorClick(e, "hero")}
              className={`${baseBtn} ${heroVisible ? "bg-foreground text-background" : "bg-transparent"}`}
              aria-current={heroVisible ? "page" : undefined}
            >
              Home
            </Link>

            <Link
              to="/#work"
              onClick={(e) => handleAnchorClick(e, "work")}
              className={`${baseBtn} ${workActive ? "bg-foreground text-background" : "bg-transparent"}`}
              aria-current={workActive ? "page" : undefined}
            >
              Work
            </Link>

            <Link
              to="/#contact"
              onClick={(e) => handleAnchorClick(e, "contact")}
              className={`${baseBtn} border-accent bg-accent text-accent-foreground active:scale-95`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <button className="font-medium opacity-80 hover:opacity-100 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                EN
              </button>
              <span className="opacity-50">|</span>
              <button className="font-medium text-muted-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                FR
              </button>
            </div>
            {/* ThemeToggle ici si besoin */}
          </div>
        </div>
      </div>
    </nav>
  );
}
