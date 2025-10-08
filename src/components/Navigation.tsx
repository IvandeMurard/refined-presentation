import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

export const Navigation: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // Typewriter animation
  useEffect(() => {
    const targetText = isInHero ? 'I M' : 'Ivan de Murard';
    
    // Don't animate if already at target
    if (displayText === targetText) return;

    // Clear any existing animation
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }

    let currentStep = 0;
    const steps: string[] = [];

    // Step 1: Delete current text (backwards)
    for (let i = displayText.length; i >= 0; i--) {
      steps.push(displayText.slice(0, i));
    }

    // Step 2: Type new text (forwards)
    for (let i = 1; i <= targetText.length; i++) {
      steps.push(targetText.slice(0, i));
    }

    const animate = () => {
      if (currentStep < steps.length) {
        setDisplayText(steps[currentStep]);
        currentStep++;
        animationRef.current = setTimeout(animate, 50); // 50ms per letter
      }
    };

    animate();

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [isInHero]);

  // Detect Hero section visibility
  useEffect(() => {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInHero(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of Hero is visible
      }
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
      isScrolled ? 'bg-[#FAFAFA]/95 backdrop-blur-sm border-b border-[#E5E7EB]' : ''
    } ${className}`}>
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Site name with typewriter animation */}
          <div className="text-[16px] font-[500] text-[#0B1220] min-w-[150px]">
            {displayText}
            <span className="inline-block w-[2px] h-[16px] bg-[#065f46] ml-1 animate-pulse"></span>
          </div>

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
