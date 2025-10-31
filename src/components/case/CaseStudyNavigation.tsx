import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface Section {
  id: string;
  label: string;
}

interface CaseStudyNavigationProps {
  sections: Section[];
}

export function CaseStudyNavigation({ sections }: CaseStudyNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observers = sections.map((section) => {
      const element = document.getElementById(section.id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(section.id);
            }
          });
        },
        { rootMargin: "-20% 0px -70% 0px" }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-28 left-4 z-50 lg:hidden p-3 rounded-full bg-card/95 backdrop-blur-md border border-border/50 shadow-lg hover:bg-accent/10 transition-colors"
        aria-label="Toggle navigation"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Navigation sidebar */}
      <AnimatePresence>
        {(isOpen || window.innerWidth >= 1024) && (
          <motion.nav
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[24rem] left-4 z-40 w-40 max-h-[calc(100vh-11rem)] overflow-y-auto p-4 lg:block"
          >
            <div className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`
                    w-full text-left px-3 py-2 rounded-lg text-sm font-medium
                    transition-all duration-200
                    ${
                      activeSection === section.id
                        ? "bg-accent/20 text-accent border-l-2 border-accent"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }
                  `}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
