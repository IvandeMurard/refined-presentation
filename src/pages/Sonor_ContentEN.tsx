// src/pages/Sonor_ContentEN.tsx
// FICHIER 3/4 : Contenu anglais complet pour le case study SONOR
// Version conforme aux spécifications validées - English version

import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import CaseTldr from "@/components/case/CaseTldr";
import { CaseImage } from "@/components/case/CaseImage";
import { CTABanner } from "@/components/work/CTABanner";
import { ExternalLink } from "lucide-react";
import { TermExplain, ExpandSection, BandeauAudio, TabsApprofondir } from "./Sonor_Composants";
import { ScrollRevealSection } from "@/components/case/ScrollRevealSection";
import { TimelineItem } from "@/components/case/TimelineItem";

// ============= TL;DR BLOCK EN =============
export const TLDRBlockEN = () => (
  <CaseTldr
    tone="neutral"
    title="TL;DR — At a glance"
    items={[
      <>
        <b>Context:</b> Recoder l'Habitat #2 Hackathon (winner) → incubation Matrice & Banque des Territoires
        (2020-2022)
      </>,
      <>
        <b>Problem:</b> Noise pollution (2nd urban nuisance), invisible, real health impacts
      </>,
      <>
        <b>Solution:</b> 360° SaaS platform offering with open data mapping, public action recommendations, citizen
        engagement (awareness, communication)
      </>,
      <>
        <b>Team:</b> 4 co-founders (Émilie, Majda, Benjamin, Ivan), 1 part-time dev/data-scientist
      </>,
      <>
        <b>My role:</b> Product framing, discovery, prototyping, sales, data-scientist leadership
      </>,
      <>
        <b>Duration & method:</b> 2 years / Agile Lean, 2-3 week Kanban sprints, 6+ monthly milestones (partner
        presentations)
      </>,
    ]}
  />
);

// ============= CONTENT EN =============
export const ContentEN = () => {
  const navigate = useNavigate();
  const tabsRef = useRef<HTMLDivElement>(null);

  const scrollToTabs = () => {
    tabsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* TL;DR */}
      <div id="overview" className="mb-10 max-w-6xl mx-auto">
        <TLDRBlockEN />
      </div>

      {/* AUDIO BANNER */}
      <div className="mb-10 max-w-6xl mx-auto">
        <BandeauAudio language="en" />
      </div>

      {/* ========== SECTION 1: CONTEXT ========== */}
      <div id="context" className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-h3">Context: Noise Pollution</h2>

          {/* Key figures */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-2xl">
              <div className="text-4xl font-extrabold mb-2">2nd</div>
              <div className="text-muted-foreground">Source of urban nuisances in Europe (after air pollution)</div>
            </div>
            <div className="bg-card p-6 rounded-2xl">
              <div className="text-4xl font-extrabold mb-2">25M</div>
              <div className="text-muted-foreground">French exposed to excessive noise levels (ANSES 2021)</div>
            </div>
            <div className="bg-card p-6 rounded-2xl">
              <div className="text-4xl font-extrabold mb-2">48K/year</div>
              <div className="text-muted-foreground">
                New cases of heart disease due to excessive noise levels (EEA 2025)
              </div>
            </div>
          </div>

          {/* Explanatory text */}
          <section className="space-y-4">
            <p>
              <b>20% of the European population</b> is exposed to dangerous nighttime noise levels for health (European
              Environment Agency, 2024).
            </p>
            <p>
              Health impacts are multiple: sleep disorders, chronic stress, cardiovascular diseases, cognitive impacts
              in children.
            </p>
            <p>
              Unlike air pollution, noise remains <b>invisible</b> and <b>under-addressed</b>
              by public policies, despite its considerable social cost.
            </p>
          </section>

          {/* Sources */}
          <div className="text-sm text-muted-foreground space-y-1">
            <p>
              <b>Sources:</b>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>WHO Europe (2018): Guidelines on noise</li>
              <li>ANSES (2021): 25M French exposed</li>
              <li>European Environment Agency (2025): 48,000 new cases of heart disease</li>
              <li>European Environment Agency (2024): 20% population exposed</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ========== SECTION 1.5: OUR APPROACH ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0.05}>
        <div id="our-approach" className="py-16 px-4 md:px-8 bg-card border-b border-border/50">
          <div className="max-w-6xl mx-auto space-y-10">
            <h2 className="text-h3">Our Approach</h2>

            <h3 className="text-xl md:text-2xl text-muted-foreground">
              Anticipate and act on noise pollution to guarantee the health of residents and the attractiveness of your
              territories.
            </h3>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/img/Sonor-notre-approche.webp"
                  alt="Our approach to anticipate and act on noise"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="flex items-center">
                <div className="text-lg md:text-xl leading-relaxed space-y-4">
                  <p>
                    By your side, let's facilitate the attractiveness of your territories and the health of your
                    residents
                  </p>
                  <p>With citizens, let's promote your commitment and co-build tomorrow's public policies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      {/* ========== SECTION 2: TIMELINE ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0.1}>
        <div id="timeline" className="py-16 px-4 md:px-8 bg-secondary">
          <div className="max-w-6xl mx-auto space-y-10">
            <h2 className="text-h3">Project Timeline</h2>

            <div className="space-y-6">
              {[
                { date: "Oct. 2020", title: "Hackathon", desc: "Recoder l'Habitat #2 win → Matrice/BdT incubation" },
                {
                  date: "Oct. 2020 - Jan. 2021",
                  title: "Discovery",
                  desc: "20+ interviews, private sector exploration",
                },
                { date: "Jan. 2021", title: "Pivot", desc: "Strategic decision → focus municipalities" },
                { date: "Jan. - April 2021", title: "Prototype", desc: "3 Figma versions + white-label evolution" },
                { date: "May 2021 - March 2022", title: "Go-to-market", desc: "20+ cities, 2 proposals, long cycles" },
                { date: "March 2022", title: "End", desc: "Funding exhaustion, 0 signature" },
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-32 text-right font-semibold text-accent">{step.date}</div>
                  <div className="flex-1 p-4 rounded-lg bg-card">
                    <h4 className="font-semibold mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      {/* ========== SECTION 3: KEY MOMENTS ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0.2}>
        <div id="key-moments" className="py-16 px-4 md:px-8 bg-background">
          <div className="max-w-6xl mx-auto space-y-10">
            <h2 className="text-h3">Key Moments</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Moment 1 */}
              <div className="p-6 rounded-lg bg-card border-l-4 border-accent">
                <h3 className="text-h4 mb-3">Strategic pivot: Private sector → Municipalities</h3>
                <p className="text-sm mb-3">
                  <b>Context:</b> After 3 months private sector exploration, 1st milestone presentation.
                </p>
                <blockquote className="italic text-sm border-l-4 border-accent/30 pl-4 mb-3">
                  "Municipalities have the skills and resources to act sustainably on this issue. And we have the
                  network to support you."
                  <footer className="text-xs mt-2">— Banque des Territoires / Matrice Advisor</footer>
                </blockquote>
                <p className="text-sm">
                  <b>Decision:</b> Pivot to public market (cities, metropolises). Internal debate: less "sexy", long
                  processes, but consensus: BdT support decisive.
                </p>
              </div>

              {/* Moment 2 */}
              <div className="p-6 rounded-lg bg-card border-l-4 border-destructive">
                <h3 className="text-h4 mb-3">The insight that diluted focus</h3>
                <p className="text-sm mb-3">
                  <b>Context:</b> Discovery, interviews with elected officials.
                </p>
                <blockquote className="italic text-sm border-l-4 border-destructive/30 pl-4 mb-3">
                  "We'd especially like human support: communication about our actions, citizen awareness,
                  identification of field solutions."
                  <footer className="text-xs mt-2">— Municipality</footer>
                </blockquote>
                <p className="text-sm">
                  <b>Error:</b> Attempt to meet both needs (platform + human support). Result: Blurred 360° offering,
                  MVP never finalized.
                  <br />
                  <b>Learning:</b> Chase only one rabbit at a time.
                </p>
              </div>

              {/* Moment 3 */}
              <div className="p-6 rounded-lg bg-card border-l-4 border-accent">
                <h3 className="text-h4 mb-3">From standalone platform to integrable component</h3>
                <p className="text-sm mb-3">
                  <b>Context:</b> Prototype presentation (Sonor branding) to Issy-les-Moulineaux.
                </p>
                <blockquote className="italic text-sm border-l-4 border-accent/30 pl-4 mb-3">
                  "Your solution interests us, but we cannot redirect our citizens to an external site. It would need to
                  be integrable into our open-data portal."
                  <footer className="text-xs mt-2">— Issy-les-Moulineaux</footer>
                </blockquote>
                <p className="text-sm">
                  <b>Decision:</b> Pivot to white-label component (full municipality branding adoption). Key issue:{" "}
                  <b>Data sovereignty</b>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      {/* ========== SECTION 4: PROTOTYPE GALLERY ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0.3}>
        <div id="prototype-gallery" className="py-16 px-4 md:px-8 bg-secondary">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="space-y-6">
              <h2 className="text-h3">PROTOTYPE GALLERY</h2>

              {/* Landing Page Introduction Block */}
              <div className="space-y-4 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                  <span>2020-2021</span>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  To validate Sonor's positioning and communicate the offer to early stakeholders, 
                  we built a public landing page summarizing the vision, product promise, and early use cases. 
                  This page acted as both a storytelling tool and a first step in Sonor's go-to-market strategy.
                </p>
                <a 
                  href="https://sonor.dorik.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors group"
                >
                  <span>View landing page</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Figma iframe - visible by default */}
              <div className="space-y-4">
                <h3 className="text-h4">Our Hackathon Prototype</h3>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden border border-border/50">
                  <iframe
                    style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                    width="100%"
                    height="450"
                    src="https://embed.figma.com/proto/OcBu81qdpjpPdjHQPA6oae/Sonor-Site-Mairie?node-id=25-0&embed-host=share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <CaseImage
                alt="Sonor mapping dashboard"
                desktopSrc="/img/sonor_cartographie_dashboard.png"
                caption="Mapping dashboard — Hotspots & real-time indicators"
              />
              <CaseImage
                alt="Action recommendations"
                desktopSrc="/img/sonor_recommandations.png"
                caption="Actionable recommendations — Prioritized tasks by zone"
              />
              <CaseImage
                alt="White label"
                desktopSrc="/img/sonor_issy_marque_blanche.png"
                caption="White-label integration"
              />
              <CaseImage
                alt="Citizen engagement"
                desktopSrc="/img/sonor_engagement_citoyen.png"
                caption="Citizen engagement — Qualified alert submission"
              />
            </div>

            {/* Demo link */}
            <div className="p-6 rounded-lg bg-accent/10 border border-accent/20">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Functional Prototype</h4>
                  <p className="text-sm text-muted-foreground">
                    Explore the prototype developed for Banque des Territoires
                  </p>
                </div>
                <a
                  href="https://byronbark.github.io/sonor-web-component/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Open demo <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      {/* ========== SECTION 5: OBSTACLES ENCOUNTERED ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0.45}>
        <div id="obstacles" className="py-16 px-4 md:px-8 bg-background">
          <div className="max-w-6xl mx-auto space-y-10">
            <h2 className="text-h3">Obstacles Encountered</h2>
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-card border-l-4 border-destructive">
                <h4 className="font-semibold mb-2">Open data availability</h4>
                <p className="text-sm">
                  Lack of reliable and standardized open data on noise pollution. Need to normalize heterogeneous
                  sources.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card border-l-4 border-destructive">
                <h4 className="font-semibold mb-2">Underestimated technical complexity</h4>
                <p className="text-sm">
                  Difficulty accessing and processing quality data into an exploitable map. Slowed prototype
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      {/* ========== SECTION 6: RESULTS & IMPACT ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0.5}>
        <div id="results" className="py-16 px-4 md:px-8 bg-secondary">
          <div className="max-w-6xl mx-auto space-y-10">
            <h2 className="text-h3">Results & Impact</h2>

            {/* Key figures */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-2xl">
                <div className="text-4xl font-extrabold mb-2">€20k</div>
                <div className="text-muted-foreground text-sm">Funding obtained (2 grants)</div>
              </div>
              <div className="bg-card p-6 rounded-2xl">
                <div className="text-4xl font-extrabold mb-2">20+</div>
                <div className="text-muted-foreground text-sm">Qualitative interviews</div>
              </div>
              <div className="bg-card p-6 rounded-2xl">
                <div className="text-4xl font-extrabold mb-2">3+1</div>
                <div className="text-muted-foreground text-sm">Prototype versions (Figma + coded)</div>
              </div>
              <div className="bg-card p-6 rounded-2xl">
                <div className="text-4xl font-extrabold mb-2">8+</div>
                <div className="text-muted-foreground text-sm">Metropolises and cities met</div>
              </div>
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      {/* ========== SECTION 7: EPILOGUE ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0.6}>
        <div id="epilogue" className="py-16 px-4 md:px-8 bg-background">
          <div className="max-w-6xl mx-auto space-y-10">
            <h2 className="text-h3">Epilogue & Learnings</h2>

            <section className="space-y-6">
              <h3 className="text-h4">
                The SONOR project did not become a startup per se, but the experience was formative on several levels,
                both professionally and personally.
              </h3>
            </section>

            {/* Learnings */}
            <section className="space-y-6">
              <h3 className="text-h4">Learnings</h3>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Practical */}
                <div className="rounded-xl p-5 bg-card">
                  <h4 className="font-semibold mb-3">Practical</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>
                      <b>End-to-end 0→1</b>: Complete discovery → prototyping → go-to-market → commercialization
                    </li>
                    <li>
                      <b>Prioritization & saying no</b>: Importance of staying focused on 1 MVP rather than 360°
                      offering
                    </li>
                    <li>
                      <b>B2G go-to-market</b>: Long cycles, importance of functional prototype
                    </li>
                    <li>
                      <b>Communicate before being "ready"</b>: Functional prototype necessary to convince
                    </li>
                  </ul>
                </div>

                {/* Personal */}
                <div className="rounded-xl p-5 bg-card">
                  <h4 className="font-semibold mb-3">Personal</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>
                      <b>Appetite for exploration and analysis</b>: Confirmed my taste for in-depth study of complex
                      issues, searching for concrete solutions, and the ability to transform technical learnings and
                      data into answers adapted to field needs
                    </li>
                    <li>
                      <b>Impact products</b>: Confirmed interest in products with strong societal and environmental
                      impact
                    </li>
                    <li>
                      <b>Field ↔ design back-and-forth</b>: Importance of regular confrontation with field
                    </li>
                    <li>
                      <b>Cross-functional teamwork</b>: Clear communication and synthesis of complex issues
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </ScrollRevealSection>

      {/* ========== SECTION 8: IF I HAD TO DO IT AGAIN ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0.65}>
        <div id="if-i-had-to-do-it-again" className="py-16 px-4 md:px-8 bg-secondary">
          <div className="max-w-6xl mx-auto space-y-10">
            <h2 className="text-h3">If I Had to Do It Again</h2>

            <div className="space-y-6">
              <p className="text-lg">
                In hindsight, here are the decisions I would make differently to maximize our chances of success:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl p-5 bg-card border-l-4 border-accent">
                  <h4 className="font-semibold mb-2">Choose 1 MVP from the start</h4>
                  <p className="text-sm text-muted-foreground">
                    Rather than a 360° offering, focus on a specific segment (e.g., mapping only) to validate the value
                    proposition quickly.
                  </p>
                </div>

                <div className="rounded-xl p-5 bg-card border-l-4 border-accent">
                  <h4 className="font-semibold mb-2">Validate technical complexity before promising</h4>
                  <p className="text-sm text-muted-foreground">
                    Build a minimal functional prototype before engaging in commercial discussions to avoid
                    unsustainable promises.
                  </p>
                </div>

                <div className="rounded-xl p-5 bg-card border-l-4 border-accent">
                  <h4 className="font-semibold mb-2">Build a functional prototype earlier</h4>
                  <p className="text-sm text-muted-foreground">
                    Move from Figma to code as soon as we get initial field feedback to accelerate confrontation with
                    technical and user reality.
                  </p>
                </div>

                <div className="rounded-xl p-5 bg-card border-l-4 border-accent">
                  <h4 className="font-semibold mb-2">Focus on a specific customer segment</h4>
                  <p className="text-sm text-muted-foreground">
                    Target a specific type of municipality (e.g., mid-sized cities of 50-100k inhabitants) to adapt the
                    pitch and solution to their real constraints.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      {/* ========== SECTION 9: CONCLUSION ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0.7}>
        <div id="conclusion" className="py-16 px-4 md:px-8 bg-background">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center">
              <h2 className="text-h3 mb-4">Conclusion</h2>
            </div>
            <section className="max-w-4xl mx-auto text-center">
              <p className="text-lg">
                SONOR confirmed my taste for transforming issues into data-driven solutions and allowed me to acquire
                valuable experience in 0→1 product management, from discovery to commercialization.
              </p>
            </section>
          </div>
        </div>
      </ScrollRevealSection>

      {/* ========== SECTION 10: FAQ ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0.8}>
        <div id="faq" className="py-16 px-4 md:px-8 bg-secondary">
          <div className="max-w-6xl mx-auto space-y-10 text-center">
            <div>
              <h2 className="text-h3 mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4 text-left max-w-4xl mx-auto">
              <ExpandSection id="faq-1-en" title="Why did you stop the project?">
                <p>Three main reasons:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>
                    <b>Underestimated technical complexity</b>: Difficulty accessing and processing exploitable quality
                    open data
                  </li>
                  <li>
                    <b>Long B2G sales cycles</b>: 12-18 months minimum, funding exhaustion before 1st signature
                  </li>
                  <li>
                    <b>Blurred positioning</b>: Between SaaS platform and consulting support, not clear enough
                  </li>
                </ul>
              </ExpandSection>

              <ExpandSection id="faq-2-en" title="How did you fund the project?">
                <p>
                  <b>€20k</b> total via 2 grants:
                </p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>1st grant: Hackathon win Recoder l'Habitat #2</li>
                  <li>2nd grant: Matrice + Banque des Territoires support program</li>
                </ul>
              </ExpandSection>

              <ExpandSection id="faq-3-en" title="What was your commercial strategy?">
                <p>3 progressive phases over 2 years:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>
                    <b>Phase 1</b>: Broad exploration (developers, housing, municipalities)
                  </li>
                  <li>
                    <b>Phase 2</b>: Focus on data-aware municipalities
                  </li>
                  <li>
                    <b>Phase 3</b>: Refined targeting (data appetite + innovation culture, via LinkedIn)
                  </li>
                </ul>
              </ExpandSection>

              <ExpandSection id="faq-4-en" title="How did you segment municipalities?">
                <p>
                  By sensitivity to open data rather than size. Cities with established open data culture and structured
                  environment services were more receptive, regardless of size.
                </p>
              </ExpandSection>
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      {/* ========== SECTION 10: "GO FURTHER" ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0.9}>
        <div className="py-16 px-4 md:px-8 bg-secondary">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center">
              <h2 className="text-h3 mb-4">Go Further</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Content 1 - Nightingale Article */}
              <a
                href="https://nightingaledvs.com/noisy-cities-behind-the-scenes-with-karim-douieb/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col p-6 rounded-lg bg-card border-2 border-transparent transition-all group"
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <img src="/img/nightingale.PNG" alt="Nightingale" className="h-full object-contain" />
                </div>
                <h3 className="text-h4 mb-2 flex-grow">Noisy Cities: Behind the Scenes with Karim Douïeb</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  Discover how noise pollution open data maps of Paris, Brussels, and New-York were made.
                </p>
                <div className="flex items-center gap-2 text-accent text-sm hover:underline underline-offset-4 transition-all">
                  Read <ExternalLink className="w-4 h-4" />
                </div>
              </a>

              {/* Content 2 - Philosophie Magazine */}
              <a
                href="https://www.philomag.com/articles/une-foret-sur-ecoute"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col p-6 rounded-lg bg-card border-2 border-transparent transition-all group"
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <img
                    src="/img/philosophie-magazine.svg"
                    alt="Philosophie Magazine"
                    className="h-full object-contain"
                  />
                </div>
                <h3 className="text-h4 mb-2 flex-grow">Jura: A Forest Under Surveillance</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  Discover how data is used to preserve one of Jura's most important forests.
                </p>
                <div className="flex items-center gap-2 text-accent text-sm hover:underline underline-offset-4 transition-all">
                  Read <ExternalLink className="w-4 h-4" />
                </div>
              </a>

              {/* Content 3 - TEDx */}
              <a
                href="https://www.youtube.com/watch?v=ewNTwBbLUhM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col p-6 rounded-lg bg-card border-2 border-transparent transition-all group"
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <img src="/img/ted-logo.svg" alt="TED" className="h-full object-contain" />
                </div>
                <h3 className="text-h4 mb-2 flex-grow">TEDx: The benefits of the sound of silence</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  TEDx by Mathias Basner telling the dangers of noise pollution and the benefits of silence.
                </p>
                <div className="flex items-center gap-2 text-accent text-sm hover:underline underline-offset-4 transition-all">
                  Watch <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      {/* ========== SECTION 11: ACKNOWLEDGMENTS ========== */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-6">
            <h2 className="text-h3">Acknowledgments</h2>
            <p className="text-lg max-w-3xl mx-auto">
              This project would not have been possible without the support of Banque des Territoires and Matrice
              association, and the collaboration of my three co-founders: Émilie, Majda and Benjamin.
            </p>

            {/* Logos */}
            <div className="flex items-center justify-center gap-12 flex-wrap pt-6">
              <div>
                <img
                  src="/img/banque-des-territoires-logo.png"
                  alt="Banque des Territoires"
                  className="h-24 object-contain"
                />
              </div>
              <div>
                <img src="/img/logo-matrice.png" alt="Association Matrice" className="h-24 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== SECTION 12: FINAL CTA ========== */}
      <div className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <CTABanner
            title="Interested in my product approach?"
            description="Recruiting an impact-oriented Product Manager with B2G experience and interest in data/public health topics? Let's discuss your product challenges."
            ctaText="Get in touch"
            onClick={() => navigate("/Contact")}
          />
        </div>
      </div>
    </>
  );
};
