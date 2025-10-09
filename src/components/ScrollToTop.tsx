import React from "react";
import { useLocation } from "react-router-dom";
// Facultatif : icône (si tu utilises lucide-react)
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = React.useState(false);

  // 1) remonte en haut à chaque changement de page
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  // 2) bouton “back to top” après scroll
  React.useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full p-3 bg-background border border-border shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          aria-label="Retour en haut"
        >
          {/* Si pas d'icône, remplace par ↑ */}
          {ArrowUp ? <ArrowUp className="h-5 w-5" /> : "↑"}
        </button>
      )}
    </>
  );
}
