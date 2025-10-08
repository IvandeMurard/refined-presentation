import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

export const Navigation: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      {/* Hauteur fixe + padding horizontal pour contenir les boutons */}
      <div className="container-grid h-16 px-4">
        {/* On occupe toute la hauteur pour centrer verticalement */}
        <div className="col-span-12 flex h-full items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-foreground">
            Ivan de Murard
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-medium text-foreground transition-colors px-3 py-1.5 rounded-xl border shadow-md hover:bg-primary hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/work"
              className="text-sm font-medium text-foreground transition-colors px-3 py-1.5 rounded-xl border shadow-md hover:bg-primary hover:text-white"
            >
              Work
            </Link>
            <Link
              to="/#contact"
              className="text-sm font-medium text-white transition-colors px-3 py-1.5 rounded-xl border shadow-md bg-[#065f46] hover:bg-[#229954] active:scale-95 active:ring-2 ring-[#065f46]/40"
            >
              Contact
            </Link>
          </div>

          {/* Language Selector & Theme Toggle */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <button className="font-medium text-foreground hover:text-foreground/80 transition-colors">EN</button>
              <span className="text-muted-foreground">|</span>
              <button className="font-medium text-muted-foreground hover:text-foreground transition-colors">FR</button>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
