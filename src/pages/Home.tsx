import React from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/footer"; // <- évite l’import cassé
import SectionHeader from "../components/SectionHeader";
// …garde tes autres imports existants (CardImmersive, MediaCard, etc.)
import { ChevronRight } from "lucide-react";

const SectionY = "py-24 md:py-32";
const ContainerX = "max-w-[1360px] mx-auto px-4";

const ScrollCta: React.FC<{ label: string; toId: string }> = ({ label, toId }) => {
  const onClick = () => document.getElementById(toId)?.scrollIntoView({ behavior: "smooth" });
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full px-5 py-3
                 border border-border bg-card/60 shadow-sm
                 hover:bg-card/80 hover:shadow-md
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
                 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                 transition-[transform,box-shadow,background,color] duration-150 active:scale-95"
    >
      <span className="text-sm font-medium text-foreground">{label}</span>
      <ChevronRight aria-hidden className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
    </button>
  );
};

export const Home: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    const id = location.hash?.slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

  return (
    <>
      <Navigation />
      <main id="main" className="min-h-screen">
        {/* HERO */}
        <section id="hero" className={`${SectionY} pt-28 md:pt-32`}>
          <div className={ContainerX}>{/* …ton contenu Hero existant… */}</div>
        </section>

        {/* WORK */}
        <section id="work" className={SectionY}>
          <div className={ContainerX}>
            <SectionHeader kicker="Portfolio" title="Selected work" />
            {/* …tes cards… */}
            <div className="flex justify-center mt-12">
              <ScrollCta label="Explore hackathons" toId="hackathons" />
            </div>
          </div>
        </section>

        {/* HACKATHONS */}
        <section id="hackathons" className={SectionY}>
          <div className={ContainerX}>
            {/* … */}
            <div className="flex justify-center mt-12">
              <ScrollCta label="View experience" toId="experience" />
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className={SectionY}>
          <div className={ContainerX}>
            {/* … */}
            <div className="flex justify-center mt-12">
              <ScrollCta label="Explore resources" toId="resources" />
            </div>
          </div>
        </section>

        {/* RESOURCES */}
        <section id="resources" className={`${SectionY}`}>
          <div className={ContainerX}>
            {/* … */}
            <div className="flex justify-center mt-12">
              <ScrollCta label="Get in touch" toId="contact" />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className={`${SectionY}`}>
          <div className="max-w-4xl mx-auto px-4 text-center">{/* …ta bannière contact / bouton… */}</div>
        </section>
      </main>
      <Footer />
    </>
  );
};
