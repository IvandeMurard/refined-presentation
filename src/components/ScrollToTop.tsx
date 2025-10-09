import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" }); // “auto” ou “smooth” sont standard
  }, [pathname]);
  return null;
}

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full p-3 bg-background border border-border shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          aria-label="Retour en haut"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
};
