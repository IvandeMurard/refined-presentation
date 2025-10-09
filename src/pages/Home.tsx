import React from "react";
import { useLocation } from "react-router-dom";

import { Navigation } from "../components/Navigation";
import { Footer } from "../components/footer"; // ✅
import { SectionHeader } from "../components/SectionHeader"; // ✅

import { MediaCard } from "../components/work/MediaCard";
import { sonorCase } from "../data/cases/sonor.case";

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

  const projects = [
    {
      id: sonorCase.id,
      kicker: sonorCase.category,
      title: sonorCase.title,
      tagline: sonorCase.subtitle,
      badge: sonorCase.badge,
      image: sonorCase.image,
      href: sonorCase.ctaHref,
    },
    {
      id: "wttj",
      kicker: "CASE STUDY — HR/ATS",
      title: "WTTJ conversion seniors",
      tagline: "Design-led pivot to unlock UX and business outcomes",
      badge: "ATS/HR",
      image: "/WTTJ/wttj-hero.png",
      href: "/cases/wttj",
    },
  ];

  return (
    <>
      <Navigation />
      <main id="main" className="min-h-screen">
        {/* HERO */}
        <section id="hero" className={`${SectionY} pt-28 md:pt-32`}>
          <div className={ContainerX}>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">Ivan de Murard</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Product Designer & Manager — building delightful, accessible experiences with AI and systems thinking.
            </p>
            <div className="mt-8 flex gap-3">
              <ScrollCta label="See work" toId="work" />
              <ScrollCta label="Contact" toId="contact" />
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className={SectionY}>
          <div className={ContainerX}>
            <SectionHeader kicker="Portfolio" title="Selected work" />
            {projects && projects.length > 0 ? (
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p) => (
                  <MediaCard
                    key={p.id}
                    id={p.id}
                    kicker={p.kicker}
                    title={p.title}
                    tagline={p.tagline}
                    badge={p.badge}
                    image={p.image}
                    onClick={() => {
                      window.location.href = p.href;
                    }}
                  />
                ))}
              </div>
            ) : (
              <p className="mt-8 text-muted-foreground">No projects yet.</p>
            )}
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
