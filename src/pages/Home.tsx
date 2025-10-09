import React from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import Footer from "../components/footer/Footer"; // adapte si export nommé
// --- tes imports existants (SectionHeader, CardImmersive, MediaCard, etc.) ---
import { ChevronRight } from "lucide-react";

// Helpers spacing — rythme vertical homogène
const SectionY = "py-24 md:py-32";
const ContainerX = "max-w-[1360px] mx-auto px-4";

// CTA de scroll avec caret discret
const ScrollCta: React.FC<{ label: string; toId: string; className?: string }> = ({ label, toId, className = "" }) => {
  const onClick = () => document.getElementById(toId)?.scrollIntoView({ behavior: "smooth" });
  return (
    <button
      onClick={onClick}
      className={[
        "group inline-flex items-center gap-2 rounded-full px-5 py-3",
        "border border-border bg-card/60 shadow-sm",
        "hover:bg-card/80 hover:shadow-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "transition-[transform,box-shadow,background,color] duration-150 active:scale-95",
        className,
      ].join(" ")}
    >
      <span className="text-sm font-medium text-foreground">{label}</span>
      <ChevronRight aria-hidden className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
    </button>
  );
};

// Classe utilitaire pour les “puces” glass-effect homogènes
export const glassBullet =
  "inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium " +
  "border border-white/20 bg-white/10 backdrop-blur-[6px] " +
  "text-foreground/90 shadow-sm";

export const Home: React.FC = () => {
  const location = useLocation();

  // Scroll vers l’ancre quand /#id est présent (arrivée depuis une autre route)
  React.useEffect(() => {
    const id = location.hash?.slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

  return (
    <>
      <Navigation />

      {/* MAIN CONTENT (skip target) */}
      <main id="main" className="bg-background">
        {/* HERO */}
        <section id="hero" className={`${SectionY} pt-28 md:pt-32`}>
          <div className={ContainerX}>
            {/* …ton contenu Hero existant… */}
            {/* Exemple d’usage caret discret sur le CTA principal du Hero : */}
            {/* <Button>Discover my projects <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" /></Button> */}
          </div>
        </section>

        {/* WORK */}
        <section id="work" className={SectionY}>
          <div className={ContainerX}>
            {/* …tes cards (CardImmersive/MediaCard/PortfolioCard)… */}
            {/* Bouton vers la prochaine section */}
            <div className="flex justify-center mt-12">
              <ScrollCta label="Explore hackathons" toId="hackathons" />
            </div>
          </div>
        </section>

        {/* HACKATHONS */}
        <section id="hackathons" className={SectionY}>
          <div className={ContainerX}>
            {/* …timeline… */}
            <div className="flex justify-center mt-12">
              <ScrollCta label="View experience" toId="experience" />
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className={SectionY}>
          <div className={ContainerX}>
            {/* …ton contenu… */}
            <div className="flex justify-center mt-12">
              <ScrollCta label="Explore resources" toId="resources" />
            </div>
          </div>
        </section>

        {/* RESOURCES */}
        <section id="resources" className={`${SectionY} bg-secondary`}>
          <div className="max-w-7xl mx-auto px-4">
            {/* …ton contenu… */}
            <div className="flex justify-center mt-12">
              <ScrollCta label="Get in touch" toId="contact" />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className={`${SectionY} bg-contact text-contact-foreground`}>
          <div className="max-w-4xl mx-auto px-4 text-center">{/* …CTABanner / bouton (avec focus ring) … */}</div>
        </section>
      </main>

      <Footer />
    </>
  );
};
