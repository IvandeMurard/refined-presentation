import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

export const Navigation: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container-grid py-20">
        <div className="col-span-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-foreground">
            Ivan de Murard
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-4 mr-4">
            <Link
              to="/"
              className="text-sm font-medium text-foreground transition-all px-6 py-3 rounded-xl border border-border shadow-md hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg"
            >
              Home
            </Link>
            <Link
              to="/work"
              className="text-sm font-medium text-foreground transition-all px-6 py-3 rounded-xl border border-border shadow-md hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg"
            >
              Work
            </Link>
            <Button
              size="sm"
              className="bg-contact hover:bg-contact/90 text-contact-foreground px-6 py-3 shadow-md rounded-xl active:scale-95 active:ring-2 ring-contact/50 transition-all"
            >
              Contact
            </Button>
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
