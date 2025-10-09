import React from "react";
import { useNavigate } from "react-router-dom";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { Navigation } from "@/components/Navigation";
import { Footer } from "../../../components/footer";
import CaseTldr from "../../../components/case/CaseTldr";
import CasePivot from "../../../components/case/CasePivot";
import { CaseImage } from "../../../components/case/CaseImage";
import { CTABanner } from "@/components/work/CTABanner";
import { useAudience } from "@/hooks/useAudience";
import { useLanguage } from "@/hooks/useLanguage";
import wttjHero from "@/assets/wttj-hero.png";
import { ChevronRight } from "lucide-react";

/* --------------------------------------------------------------------------------
   Small a11y helpers
-------------------------------------------------------------------------------- */

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span
    className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium
               border border-white/20 bg-white/10 backdrop-blur-[6px]
               text-foreground/90 shadow-sm"
  >
    {children}
  </span>
);

const FocusLink = ({
  href,
  children,
  external = true,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) => (
  <a
    className="underline underline-offset-4 hover:text-accent transition-colors
               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
               focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
  >
    {children}
  </a>
);

/* --------------------------------------------------------------------------------
   EN replacement blocks for TL;DR and Pivot (to ensure proper translation)
-------------------------------------------------------------------------------- */

const TLDR_EN = () => (
  <section aria-labelledby="tldr-title" className="space-y-4">
    <h2 id="tldr-title" className="text-h3">
      TL;DR
    </h2>
    <ul className="list-disc pl-5 space-y-2">
      <li>
        <b>Context:</b> Practical validation for the Product Management training (*Maestro*).
      </li>
      <li>
        <b>Timeline & Team:</b> 12 days, 4 PMs.
      </li>
      <li>
        <b>Discovery:</b> 8 qualitative video interviews with senior profiles (tech & cross-functional).
      </li>
      <li>
        <b>Pivot:</b> Refocus on tech talent with 5–8 years’ experience.
      </li>
      <li>
        <b>Prototype:</b> Figma → Lovable; 4 moderated user tests.
      </li>
      <li>
        <b>MVP:</b> Prioritized, tested, and delivered.
      </li>
    </ul>
  </section>
);

const Pivot_EN = () => (
  <section aria-labelledby="pivot-title" className="space-y-4">
    <h2 id="pivot-title" className="text-h3">
      Strategic Pivot
    </h2>
    <p className="text-base">
      Interviews and behavioral data showed a strong market pull for senior candidates, while their application rate on
      the platform lagged. We <b>recentered the initiative on senior tech profiles (5–8 years)</b> and aligned the value
      proposition around <b>transparency</b> (salary, missions), <b>reassurance</b> (guided onboarding), and{" "}
      <b>utility</b> (AI assistant & CV ↔ job matching).
    </p>
    <div className="flex flex-wrap gap-2">
      <Pill>Clarity of offers</Pill>
      <Pill>Personalized onboarding</Pill>
      <Pill>AI-assisted journey</Pill>
    </div>
  </section>
);

/* =================================================================================
   FRENCH CONTENT
================================================================================= */

const ContentDefaultFR = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Section 1: TL;DR + Contexte - bg-background */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* TL;DR */}
          <CaseTldr />

          {/* Contexte & Problématique */}
          <section className="grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-4">
              <h2 className="text-h3">Contexte & Problématique</h2>
              <p>
                Les profils seniors postulent peu sur la plateforme, malgré une forte demande par les entreprises
                clientes. Objectif : <b>augmenter les candidatures seniors</b> via une expérience personnalisée et
                engageante.
              </p>
            </div>
            <CaseImage
              alt="Stats & contexte"
              desktopSrc="/WTTJ/contexte-desktop.png"
              caption="Data et signaux marché"
            />
          </section>
        </div>
      </div>

      {/* Section 2: Objectifs + Discovery - bg-secondary */}
      <div className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Objectifs */}
          <section className="grid md:grid-cols-3 gap-4">
            {["Acquisition seniors tech", "Engagement & conversion", "Rétention"].map((k) => (
              <div key={k} className="rounded-xl border p-4 bg-card">
                <h3 className="font-medium">{k}</h3>
              </div>
            ))}
          </section>

          {/* Discovery */}
          <section className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="space-y-4">
                <h2 className="text-h3">Discovery (12 jours)</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>8 entretiens vidéo seniors (tech & autres).</li>
                  <li>Insights : transparence (salaire, missions), filtres pertinents, accompagnement.</li>
                  <li>CTR seniors ≈ 11% vs 20% juniors ; besoin de lisibilité des offres.</li>
                </ul>
              </div>
              <CaseImage
                alt="JTBD & verbatims clés"
                desktopSrc="/WTTJ/jtbd-desktop.png"
                caption="JTBD & verbatims clés"
              />
            </div>
            <CaseImage
              alt="Parcours utilisateur"
              desktopSrc="/WTTJ/etude_de_cas_p31_desktop.png"
              caption="Cartographie du parcours utilisateur"
            />
          </section>
        </div>
      </div>

      {/* Section 3: Pivot + Opportunités - bg-background */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Pivot stratégique */}
          <CasePivot />
          <CaseImage
            alt="Opportunity tree (extrait pivot)"
            desktopSrc="/WTTJ/pivot-desktop.png"
            caption="Arbre d'opportunités - Recentrage stratégique"
          />
        </div>
      </div>

      {/* Section 4: MVP + Prototype + CTA - bg-secondary */}
      <div className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* MVP priorisé et testé */}
          <section className="space-y-4">
            <h2 className="text-h3">MVP priorisé et testé</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Standardisation des offres (salaire, remote, missions, stack).</li>
              <li>Onboarding personnalisé (critères seniors).</li>
              <li>Assistant IA (CV, storytelling, préparation d'un entretien).</li>
              <li>Matching CV ↔ Offres.</li>
            </ol>
            <CaseImage
              alt="RICE – priorisation MVP"
              desktopSrc="/WTTJ/rice-desktop.png"
              caption="Matrice RICE - Priorisation des features MVP"
            />
          </section>

          {/* Prototype & Tests */}
          <section className="space-y-8">
            <div>
              <h2 className="text-h3 mb-4">Prototype & Tests utilisateurs</h2>
              <p className="text-base mb-6">
                Wireframes → Maquette Figma → finalisation & publication sur Lovable → 4 tests utilisateurs issus de la
                discovery.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="test-positive p-5 rounded-xl border-2">
                  <h4 className="font-medium mb-2">✅ Positifs</h4>
                  <ul className="text-sm list-disc pl-4 space-y-1">
                    <li>Offres plus lisibles & pertinentes.</li>
                    <li>Onboarding rassurant.</li>
                    <li>Matching CV motivant.</li>
                  </ul>
                </div>
                <div className="test-improvement p-5 rounded-xl border-2">
                  <h4 className="font-medium mb-2">⚠️ À améliorer</h4>
                  <ul className="text-sm list-disc pl-4 space-y-1">
                    <li>Wording du CTA onboarding.</li>
                    <li>Placement de l'assistant IA.</li>
                  </ul>
                </div>
              </div>

              <a
                href="https://prototype-wttj.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group hover:opacity-90 transition-opacity
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
                           focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                aria-label="Open the interactive Lovable prototype in a new tab"
              >
                <CaseImage
                  alt="Prototype onboarding"
                  desktopSrc="/WTTJ/proto-onboarding-desktop.png"
                  caption="🔗 Prototype Lovable – Cliquez pour tester"
                />
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Résultats des tests utilisateurs</h3>
              <CaseImage
                alt="Résultats des tests utilisateurs"
                desktopSrc="/WTTJ/tests-desktop.png"
                caption="Synthèse des retours utilisateurs"
              />
            </div>
          </section>

          {/* CTA Banner */}
          <CTABanner
            title="Rencontrons-nous !"
            description="Echangeons sur vos besoins produits"
            ctaText={
              <span className="inline-flex items-center gap-1">
                Contact{" "}
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            }
            onClick={() => navigate("/Contact")}
            className="my-6"
          />
        </div>
      </div>

      {/* Section 5: Roadmap + Risques - bg-background */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Roadmap & KPIs */}
          <section className="space-y-4">
            <h2 className="text-h3">Roadmap & KPIs</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="roadmap-now">
                <div className="text-xs uppercase tracking-wider font-semibold mb-2 text-accent">Now</div>
                <div className="text-base font-medium">Standardisation + Onboarding</div>
              </div>
              <div className="roadmap-next">
                <div className="text-xs uppercase tracking-wider font-semibold mb-2 text-accent">Next</div>
                <div className="text-base font-medium">Assistant IA + Matching CV</div>
              </div>
              <div className="roadmap-later">
                <div className="text-xs uppercase tracking-wider font-semibold mb-2 text-accent">Later</div>
                <div className="text-base font-medium">Coaching IA avancé + analytics recruteurs</div>
              </div>
            </div>
            <CaseImage
              alt="Roadmap Now Next Later"
              desktopSrc="/WTTJ/etude_de_cas_p18_desktop.png"
              caption="Roadmap : priorisation par phases Now / Next / Later"
            />
          </section>

          {/* Risques & Parades */}
          <section className="grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-3">
              <h2 className="text-h3">Risques & Parades</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <b>Abandon onboarding</b> → étapes claires, analytics par étape, itérations wording.
                </li>
                <li>
                  <b>Assistant IA sous-utilisé</b> → A/B placement, triggers contextuels.
                </li>
                <li>
                  <b>Matching technique</b> → transparence "beta", feedback in-product.
                </li>
              </ul>
            </div>
            <CaseImage
              alt="Matrice de risques"
              desktopSrc="/WTTJ/risques-desktop.png"
              caption="Matrice de risques et stratégies de mitigation"
            />
          </section>
        </div>
      </div>

      {/* Section 6: Conclusion + Épilogue + Liens - bg-secondary */}
      <div className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Conclusion */}
          <section className="rounded-2xl border-2 border-accent/30 p-8 md:p-10 bg-gradient-to-br from-accent/5 to-accent/10 dark:from-accent/10 dark:to-accent/5 shadow-lg">
            <h2 className="text-h3 text-foreground mb-3">Conclusion</h2>
            <p className="text-lg leading-relaxed text-foreground">
              <b>WTTJ Tech+</b> améliore la transparence, personnalise l'expérience et accompagne les seniors de 0 à 1.
              Next : déployer le MVP, mesurer, itérer (CTA onboarding & placement IA), puis étendre au-delà de la tech
              si les résultats sont probants.
            </p>
          </section>

          {/* Épilogue */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden>
                🔄
              </span>
              <h3 className="text-h4 font-semibold">Ce qui aurait pu être fait différemment</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border p-5 bg-card hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2 text-accent">Exploration B2B</h4>
                <p className="text-sm text-muted-foreground">Explorer l'angle entreprises en parallèle du B2C</p>
              </div>
              <div className="rounded-xl border p-5 bg-card hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2 text-accent">Segments élargis</h4>
                <p className="text-sm text-muted-foreground">Tester d'autres segments seniors hors tech</p>
              </div>
              <div className="rounded-xl border p-5 bg-card hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2 text-accent">Tests quantitatifs</h4>
                <p className="text-sm text-muted-foreground">Validation à plus grande échelle avec métriques</p>
              </div>
            </div>
          </section>

          {/* Liens externes */}
          <section className="pt-4 border-t">
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <FocusLink href="https://prototype-wttj.lovable.app/">Prototype Lovable</FocusLink>
              </li>
              <li>
                <span className="text-muted-foreground">Backlog Notion / Research Miro (liens internes)</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

/* =================================================================================
   ENGLISH CONTENT
================================================================================= */

const ContentDefaultEN = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Section 1: TL;DR + Context - bg-background */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* TL;DR (EN replacement) */}
          <TLDR_EN />

          {/* Context & Problem */}
          <section className="grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-4">
              <h2 className="text-h3">Context & Problem</h2>
              <p>
                Senior profiles apply less on the platform, despite strong demand from client companies. Objective:{" "}
                <b>increase senior applications</b> through a personalized and engaging experience.
              </p>
            </div>
            <CaseImage
              alt="Stats & context"
              desktopSrc="/WTTJ/contexte-desktop.png"
              caption="Data and market signals"
            />
          </section>
        </div>
      </div>

      {/* Section 2: Objectives + Discovery - bg-secondary */}
      <div className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Objectives */}
          <section className="grid md:grid-cols-3 gap-4">
            {["Senior tech acquisition", "Engagement & conversion", "Retention"].map((k) => (
              <div key={k} className="rounded-xl border p-4 bg-card">
                <h3 className="font-medium">{k}</h3>
              </div>
            ))}
          </section>

          {/* Discovery */}
          <section className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="space-y-4">
                <h2 className="text-h3">Discovery (12 days)</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>8 video interviews with seniors (tech & other fields).</li>
                  <li>Insights: transparency (salary, missions), relevant filters, support.</li>
                  <li>Senior CTR ≈ 11% vs 20% juniors; need for clearer job postings.</li>
                </ul>
              </div>
              <CaseImage
                alt="JTBD & key verbatims"
                desktopSrc="/WTTJ/jtbd-desktop.png"
                caption="JTBD & key verbatims"
              />
            </div>
            <CaseImage
              alt="User journey"
              desktopSrc="/WTTJ/etude_de_cas_p31_desktop.png"
              caption="User journey mapping"
            />
          </section>
        </div>
      </div>

      {/* Section 3: Pivot + Opportunities - bg-background */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Strategic pivot (EN replacement) */}
          <Pivot_EN />
          <CaseImage
            alt="Opportunity tree (pivot extract)"
            desktopSrc="/WTTJ/pivot-desktop.png"
            caption="Opportunity tree — Strategic refocusing"
          />
        </div>
      </div>

      {/* Section 4: MVP + Prototype + CTA - bg-secondary */}
      <div className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Prioritized and tested MVP */}
          <section className="space-y-4">
            <h2 className="text-h3">Prioritized and tested MVP</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Job posting standardization (salary, remote, missions, stack).</li>
              <li>Personalized onboarding (senior criteria).</li>
              <li>AI assistant (CV, storytelling, interview prep).</li>
              <li>CV ↔ Job matching.</li>
            </ol>
            <CaseImage
              alt="RICE – MVP prioritization"
              desktopSrc="/WTTJ/rice-desktop.png"
              caption="RICE Matrix — MVP feature prioritization"
            />
          </section>

          {/* Prototype & Tests */}
          <section className="space-y-8">
            <div>
              <h2 className="text-h3 mb-4">Prototype & User Testing</h2>
              <p className="text-base mb-6">
                Wireframes → Figma mockup → finalization & publication on Lovable → 4 user tests from discovery
                participants.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="test-positive p-5 rounded-xl border-2">
                  <h4 className="font-medium mb-2">✅ Positives</h4>
                  <ul className="text-sm list-disc pl-4 space-y-1">
                    <li>More readable & relevant job postings.</li>
                    <li>Reassuring onboarding.</li>
                    <li>Motivating CV matching.</li>
                  </ul>
                </div>
                <div className="test-improvement p-5 rounded-xl border-2">
                  <h4 className="font-medium mb-2">⚠️ To Improve</h4>
                  <ul className="text-sm list-disc pl-4 space-y-1">
                    <li>Onboarding CTA wording.</li>
                    <li>AI assistant placement.</li>
                  </ul>
                </div>
              </div>

              <a
                href="https://prototype-wttj.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group hover:opacity-90 transition-opacity
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
                           focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                aria-label="Open the interactive Lovable prototype in a new tab"
              >
                <CaseImage
                  alt="Onboarding prototype"
                  desktopSrc="/WTTJ/proto-onboarding-desktop.png"
                  caption="🔗 Lovable Prototype — Click to test"
                />
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">User Testing Results</h3>
              <CaseImage
                alt="User testing results"
                desktopSrc="/WTTJ/tests-desktop.png"
                caption="User feedback synthesis"
              />
            </div>
          </section>

          {/* CTA Banner */}
          <CTABanner
            title="Let's connect!"
            description="Let's discuss your product needs"
            ctaText={
              <span className="inline-flex items-center gap-1">
                Contact{" "}
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            }
            onClick={() => navigate("/Contact")}
            className="my-6"
          />
        </div>
      </div>

      {/* Section 5: Roadmap + Risks - bg-background */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Roadmap & KPIs */}
          <section className="space-y-4">
            <h2 className="text-h3">Roadmap & KPIs</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="roadmap-now">
                <div className="text-xs uppercase tracking-wider font-semibold mb-2 text-accent">Now</div>
                <div className="text-base font-medium">Standardization + Onboarding</div>
              </div>
              <div className="roadmap-next">
                <div className="text-xs uppercase tracking-wider font-semibold mb-2 text-accent">Next</div>
                <div className="text-base font-medium">AI Assistant + CV Matching</div>
              </div>
              <div className="roadmap-later">
                <div className="text-xs uppercase tracking-wider font-semibold mb-2 text-accent">Later</div>
                <div className="text-base font-medium">Advanced AI coaching + recruiter analytics</div>
              </div>
            </div>
            <CaseImage
              alt="Roadmap Now Next Later"
              desktopSrc="/WTTJ/etude_de_cas_p18_desktop.png"
              caption="Roadmap — phased prioritization Now / Next / Later"
            />
          </section>

          {/* Risks & Mitigation */}
          <section className="grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-3">
              <h2 className="text-h3">Risks & Mitigation</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <b>Onboarding abandonment</b> → clear steps, step-by-step analytics, wording iterations.
                </li>
                <li>
                  <b>Underused AI assistant</b> → A/B placement testing, contextual triggers.
                </li>
                <li>
                  <b>Technical matching</b> → “beta” transparency, in-product feedback.
                </li>
              </ul>
            </div>
            <CaseImage
              alt="Risk matrix"
              desktopSrc="/WTTJ/risques-desktop.png"
              caption="Risk matrix and mitigation strategies"
            />
          </section>
        </div>
      </div>

      {/* Section 6: Conclusion + Epilogue + Links - bg-secondary */}
      <div className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Conclusion */}
          <section className="rounded-2xl border-2 border-accent/30 p-8 md:p-10 bg-gradient-to-br from-accent/5 to-accent/10 dark:from-accent/10 dark:to-accent/5 shadow-lg">
            <h2 className="text-h3 text-foreground mb-3">Conclusion</h2>
            <p className="text-lg leading-relaxed text-foreground">
              <b>WTTJ Tech+</b> improves transparency, personalizes the experience, and supports seniors from 0 to 1.
              Next: deploy the MVP, measure, iterate (onboarding CTA & AI placement), then expand beyond tech if results
              are conclusive.
            </p>
          </section>

          {/* Epilogue */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden>
                🔄
              </span>
              <h3 className="text-h4 font-semibold">What could have been done differently</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border p-5 bg-card hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2 text-accent">B2B exploration</h4>
                <p className="text-sm text-muted-foreground">Explore the company angle alongside B2C</p>
              </div>
              <div className="rounded-xl border p-5 bg-card hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2 text-accent">Expanded segments</h4>
                <p className="text-sm text-muted-foreground">Test other senior segments outside tech</p>
              </div>
              <div className="rounded-xl border p-5 bg-card hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2 text-accent">Quantitative testing</h4>
                <p className="text-sm text-muted-foreground">Larger scale validation with metrics</p>
              </div>
            </div>
          </section>

          {/* External links */}
          <section className="pt-4 border-t">
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <FocusLink href="https://prototype-wttj.lovable.app/">Lovable Prototype</FocusLink>
              </li>
              <li>
                <span className="text-muted-foreground">Notion Backlog / Miro Research (internal links)</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

/* =================================================================================
   PM CONTENT (FR & EN)
================================================================================= */

const ContentPMFR = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Section 1: TL;DR + Pivot - bg-background */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-16">
          <CaseTldr />

          <section className="space-y-4">
            <h2 className="text-h3">Pivot stratégique</h2>
            <CasePivot />
            <CaseImage
              alt="Opportunity tree"
              desktopSrc="/WTTJ/pivot-desktop.png"
              caption="Arbre d'opportunités - Recentrage stratégique"
            />
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="rounded-xl border p-4 bg-card">
                <h4 className="font-semibold mb-2">Impact Business</h4>
                <p className="text-sm">CTR seniors : 11% → 13%</p>
                <p className="text-sm">+300 à +800 profils activés</p>
              </div>
              <div className="rounded-xl border p-4 bg-card">
                <h4 className="font-semibold mb-2">Valeur / Effort</h4>
                <p className="text-sm">Standardisation et onboarding livrables rapidement</p>
              </div>
              <div className="rounded-xl border p-4 bg-card">
                <h4 className="font-semibold mb-2">Différenciation</h4>
                <p className="text-sm">Accompagnement IA + matching CV</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Section 2: Roadmap + Go-to-market + Risques - bg-secondary */}
      <div className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto space-y-16">
          <section className="space-y-4">
            <h2 className="text-h3">Roadmap & KPIs</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="roadmap-now">
                <div className="text-xs uppercase tracking-wider font-semibold mb-2 text-accent">Now</div>
                <div className="text-base font-medium">Standardisation + Onboarding</div>
              </div>
              <div className="roadmap-next">
                <div className="text-xs uppercase tracking-wider font-semibold mb-2 text-accent">Next</div>
                <div className="text-base font-medium">Assistant IA + Matching CV</div>
              </div>
              <div className="roadmap-later">
                <div className="text-xs uppercase tracking-wider font-semibold mb-2 text-accent">Later</div>
                <div className="text-base font-medium">Coaching IA avancé + analytics recruteurs</div>
              </div>
            </div>
            <CaseImage
              alt="Roadmap Now Next Later"
              desktopSrc="/WTTJ/etude_de_cas_p18_desktop.png"
              caption="Roadmap : priorisation par phases Now / Next / Later"
            />
          </section>

          <section className="space-y-4">
            <h2 className="text-h3">Go-to-market</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border p-4 bg-card">
                <h4 className="font-semibold mb-2">Cible</h4>
                <p className="text-sm">Profils tech 5–8 ans d'expérience</p>
              </div>
              <div className="rounded-xl border p-4 bg-card">
                <h4 className="font-semibold mb-2">Message</h4>
                <p className="text-sm">Transparence, accompagnement, matching IA</p>
              </div>
              <div className="rounded-xl border p-4 bg-card">
                <h4 className="font-semibold mb-2">Canaux</h4>
                <p className="text-sm">Onboarding in-app, email nurturing</p>
              </div>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-3">
              <h2 className="text-h3">Risques & Parades</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <b>Abandon onboarding</b> → analytics par étape, itérations wording
                </li>
                <li>
                  <b>IA sous-utilisée</b> → A/B placement, triggers contextuels
                </li>
                <li>
                  <b>Matching technique</b> → transparence "beta", feedback beta-testeurs
                </li>
              </ul>
            </div>
            <CaseImage
              alt="Matrice de risques"
              desktopSrc="/WTTJ/risques-desktop.png"
              caption="Matrice de risques et stratégies de mitigation"
            />
          </section>
        </div>
      </div>

      {/* Section 3: Tests + CTA + Conclusion + Épilogue - bg-background */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-16">
          <section className="space-y-8">
            <div>
              <h2 className="text-h3 mb-4">Tests utilisateurs - Résultats</h2>
              <p className="text-base mb-6">4 tests utilisateurs pour valider le MVP avant déploiement.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="test-positive p-5 rounded-xl border-2">
                  <h4 className="font-medium mb-2">✅ Validations</h4>
                  <ul className="text-sm list-disc pl-4 space-y-1">
                    <li>Offres plus lisibles & pertinentes</li>
                    <li>Onboarding rassurant</li>
                    <li>Matching CV motivant</li>
                  </ul>
                </div>
                <div className="test-improvement p-5 rounded-xl border-2">
                  <h4 className="font-medium mb-2">🔄 Itérations</h4>
                  <ul className="text-sm list-disc pl-4 space-y-1">
                    <li>Wording CTA onboarding</li>
                    <li>Placement assistant IA</li>
                  </ul>
                </div>
              </div>

              <a
                href="https://prototype-wttj.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group hover:opacity-90 transition-opacity
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
                           focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                aria-label="Ouvrir le prototype Lovable dans un nouvel onglet"
              >
                <CaseImage
                  alt="Prototype onboarding"
                  desktopSrc="/WTTJ/proto-onboarding-desktop.png"
                  caption="🔗 Prototype Lovable – Cliquez pour tester"
                />
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Synthèse des retours</h3>
              <CaseImage
                alt="Synthèse tests"
                desktopSrc="/WTTJ/tests-desktop.png"
                caption="Synthèse des retours utilisateurs"
              />
            </div>
          </section>

          <CTABanner
            title="Discutons de vos projets produit"
            description="PM orienté discovery, priorisation et delivery rapide"
            ctaText="Voir le portfolio"
            onClick={() => navigate("/")}
            className="my-6"
          />

          <section className="rounded-2xl border-2 border-accent/30 p-8 md:p-10 bg-gradient-to-br from-accent/5 to-accent/10 dark:from-accent/10 dark:to-accent/5 shadow-lg">
            <h2 className="text-h3 text-foreground mb-3">Conclusion</h2>
            <p className="text-lg leading-relaxed text-foreground">
              MVP priorisé selon impact/effort (RICE), testé avec 4 utilisateurs, prêt pour déploiement. Next : mesurer
              adoption, itérer sur wording & IA placement, étendre si KPIs validés.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden>
                🔄
              </span>
              <h3 className="text-h4 font-semibold">Ce qui aurait pu être fait différemment</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border p-5 bg-card hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2 text-accent">Exploration B2B</h4>
                <p className="text-sm text-muted-foreground">Explorer l'angle entreprises en parallèle</p>
              </div>
              <div className="rounded-xl border p-5 bg-card hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2 text-accent">Tests quantitatifs</h4>
                <p className="text-sm text-muted-foreground">Validation à plus grande échelle avec métriques</p>
              </div>
              <div className="rounded-xl border p-5 bg-card hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2 text-accent">Analyse compétitive</h4>
                <p className="text-sm text-muted-foreground">Benchmark approfondi des concurrents</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const ContentPMEN = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Section 1: TL;DR + Pivot - bg-background */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* EN TL;DR + Pivot replacements */}
          <TLDR_EN />
          <Pivot_EN />
          <CaseImage
            alt="Opportunity tree"
            desktopSrc="/WTTJ/pivot-desktop.png"
            caption="Opportunity tree — Strategic refocusing"
          />
        </div>
      </div>

      {/* Section 2: Roadmap + Go-to-market + Risks - bg-secondary */}
      <div className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto space-y-16">
          <section className="space-y-4">
            <h2 className="text-h3">Roadmap & KPIs</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="roadmap-now">
                <div className="text-xs uppercase tracking-wider font-semibold mb-2 text-accent">Now</div>
                <div className="text-base font-medium">Standardization + Onboarding</div>
              </div>
              <div className="roadmap-next">
                <div className="text-xs uppercase tracking-wider font-semibold mb-2 text-accent">Next</div>
                <div className="text-base font-medium">AI Assistant + CV Matching</div>
              </div>
              <div className="roadmap-later">
                <div className="text-xs uppercase tracking-wider font-semibold mb-2 text-accent">Later</div>
                <div className="text-base font-medium">Advanced AI coaching + recruiter analytics</div>
              </div>
            </div>
            <CaseImage
              alt="Roadmap Now Next Later"
              desktopSrc="/WTTJ/etude_de_cas_p18_desktop.png"
              caption="Roadmap — phased prioritization Now / Next / Later"
            />
          </section>

          <section className="space-y-4">
            <h2 className="text-h3">Go-to-market</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border p-4 bg-card">
                <h4 className="font-semibold mb-2">Target</h4>
                <p className="text-sm">Tech profiles with 5–8 years’ experience</p>
              </div>
              <div className="rounded-xl border p-4 bg-card">
                <h4 className="font-semibold mb-2">Message</h4>
                <p className="text-sm">Transparency, support, AI matching</p>
              </div>
              <div className="rounded-xl border p-4 bg-card">
                <h4 className="font-semibold mb-2">Channels</h4>
                <p className="text-sm">In-app onboarding, email nurturing</p>
              </div>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-3">
              <h2 className="text-h3">Risks & Mitigation</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <b>Onboarding abandonment</b> → step-by-step analytics, wording iterations
                </li>
                <li>
                  <b>Underused AI</b> → A/B placement testing, contextual triggers
                </li>
                <li>
                  <b>Technical matching</b> → “beta” transparency, beta-tester feedback
                </li>
              </ul>
            </div>
            <CaseImage
              alt="Risk matrix"
              desktopSrc="/WTTJ/risques-desktop.png"
              caption="Risk matrix and mitigation strategies"
            />
          </section>
        </div>
      </div>

      {/* Section 3: Tests + CTA + Conclusion + Epilogue - bg-background */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-16">
          <section className="space-y-8">
            <div>
              <h2 className="text-h3 mb-4">User Testing — Results</h2>
              <p className="text-base mb-6">4 user tests to validate the MVP before deployment.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="test-positive p-5 rounded-xl border-2">
                  <h4 className="font-medium mb-2">✅ Validations</h4>
                  <ul className="text-sm list-disc pl-4 space-y-1">
                    <li>More readable & relevant job postings</li>
                    <li>Reassuring onboarding</li>
                    <li>Motivating CV matching</li>
                  </ul>
                </div>
                <div className="test-improvement p-5 rounded-xl border-2">
                  <h4 className="font-medium mb-2">🔄 Iterations</h4>
                  <ul className="text-sm list-disc pl-4 space-y-1">
                    <li>Onboarding CTA wording</li>
                    <li>AI assistant placement</li>
                  </ul>
                </div>
              </div>

              <a
                href="https://prototype-wttj.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block group hover:opacity-90 transition-opacity
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
                           focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                aria-label="Open the interactive Lovable prototype in a new tab"
              >
                <CaseImage
                  alt="Onboarding prototype"
                  desktopSrc="/WTTJ/proto-onboarding-desktop.png"
                  caption="🔗 Lovable Prototype — Click to test"
                />
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Feedback Synthesis</h3>
              <CaseImage alt="Test synthesis" desktopSrc="/WTTJ/tests-desktop.png" caption="User feedback synthesis" />
            </div>
          </section>

          <CTABanner
            title="Let's discuss your product projects"
            description="PM focused on discovery, prioritization and fast delivery"
            ctaText="View portfolio"
            onClick={() => navigate("/")}
            className="my-6"
          />

          <section className="rounded-2xl border-2 border-accent/30 p-8 md:p-10 bg-gradient-to-br from-accent/5 to-accent/10 dark:from-accent/10 dark:to-accent/5 shadow-lg">
            <h2 className="text-h3 text-foreground mb-3">Conclusion</h2>
            <p className="text-lg leading-relaxed text-foreground">
              MVP prioritized by impact/effort (RICE), tested with 4 users, ready for deployment. Next: measure
              adoption, iterate on wording & AI placement, expand if KPIs validated.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden>
                🔄
              </span>
              <h3 className="text-h4 font-semibold">What could have been done differently</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border p-5 bg-card hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2 text-accent">B2B exploration</h4>
                <p className="text-sm text-muted-foreground">Explore the company angle in parallel</p>
              </div>
              <div className="rounded-xl border p-5 bg-card hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2 text-accent">Quantitative testing</h4>
                <p className="text-sm text-muted-foreground">Larger scale validation with metrics</p>
              </div>
              <div className="rounded-xl border p-5 bg-card hover:shadow-md transition-shadow">
                <h4 className="font-semibold mb-2 text-accent">Competitive analysis</h4>
                <p className="text-sm text-muted-foreground">In-depth competitor benchmarking</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

/* =================================================================================
   MAIN COMPONENT
================================================================================= */

export default function WttjPage() {
  const navigate = useNavigate();
  const { activeAudience, setActiveAudience } = useAudience("default");
  const { language, setLanguage } = useLanguage("en");

  const audienceContentEN = [
    { id: "default", label: "Overview", content: <ContentDefaultEN /> },
    { id: "pm", label: "Product Manager", content: <ContentPMEN /> },
    { id: "design", label: "Designer", content: <ContentDesignerEN /> },
  ];

  const audienceContentFR = [
    { id: "default", label: "Vue d'ensemble", content: <ContentDefaultFR /> },
    { id: "pm", label: "Product Manager", content: <ContentPMFR /> },
    { id: "design", label: "Designer", content: <ContentDesignerFR /> },
  ];

  const scrollToSection = (id: string) => {
    if (id === "home") {
      navigate("/");
    }
  };

  const content = language === "en" ? audienceContentEN : audienceContentFR;
  const title =
    language === "en" ? "Welcome to the Jungle — Senior Conversion" : "Welcome to the Jungle — Conversion Seniors";
  const subtitle =
    language === "en"
      ? "From user insight to prioritized, tested and delivered MVP in 12 days"
      : "De l'insight utilisateur à un MVP priorisé, testé et livré en 12 jours";
  const perspectiveLabel = language === "en" ? "Choose your perspective" : "Choisissez votre perspective";

  return (
    <>
      <Navigation />
      <CaseStudyLayout
        title={title}
        subtitle={subtitle}
        heroImage={wttjHero}
        audiences={content}
        activeAudience={activeAudience}
        onAudienceChange={setActiveAudience}
        language={language}
        onLanguageChange={setLanguage}
        perspectiveLabel={perspectiveLabel}
      />
      <Footer
        siteName="Ivan de Murard"
        tagline="Product Designer & Manager crafting user-centered experiences"
        sections={[{ id: "home", label: "Back to Portfolio" }]}
        onSectionClick={scrollToSection}
      />
    </>
  );
}
