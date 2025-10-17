import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/footer";
import { useNavigate } from "react-router-dom";

import { useAudience } from "@/hooks/useAudience";
import { useLanguage } from "@/hooks/useLanguage";

// Ces 3 viennent du dossier racine "components" (en-dehors de src)
import { CaseImage } from "@components/case/CaseImage"; // named export (ton fichier exporte `export function CaseImage(...)`)
import CaseTldr from "@components/case/CaseTldr"; // default export (si c’est `export default function ...`)
import { CTABanner } from "@/components/work/CTABanner"; // named export

import sonorHero from "/img/image-banniere-sonor.jpg";

const TLDRBlockFR = () => (
  <section className="rounded-xl border p-5 bg-card">
    <h3 className="text-h4 mb-3">TLDR — En bref</h3>
    <ul className="list-disc pl-5 space-y-1">
      <li>
        <b>Durée :</b> 2 ans (hackathon → incubation → prototype)
      </li>
      <li>
        <b>Cible :</b> collectivités, villes et métropoles
      </li>
      <li>
        <b>Rôle :</b> cadrage produit, discovery (30 entretiens), prototype, go-to-market B2G, pilotage dev data
      </li>
      <li>
        <b>Méthodo :</b> Agile Lean, kanban, sprints 2–3 semaines, jalons mensuels
      </li>
      <li>
        <b>Résultats :</b> 20 000 € financements, 30 entretiens, 1 prototype, négociations avec plusieurs métropoles
      </li>
      <li>
        <b>Apprentissage clé :</b> cadrer une vision 0→1 et dire non aux idées hors scope
      </li>
    </ul>
  </section>
);

const TLDRBlockEN = () => (
  <section className="rounded-xl border p-5 bg-card">
    <h3 className="text-h4 mb-3">TLDR — At a glance</h3>
    <ul className="list-disc pl-5 space-y-1">
      <li>
        <b>Duration:</b> 2 years (hackathon → incubation → prototype)
      </li>
      <li>
        <b>Target:</b> cities & metropolitan areas
      </li>
      <li>
        <b>Role:</b> product framing, discovery (30 interviews), prototype, B2G go-to-market, data-dev leadership
      </li>
      <li>
        <b>Method:</b> Agile Lean, Kanban, 2–3 week sprints, monthly milestones
      </li>
      <li>
        <b>Outcomes:</b> €20k grants, 30 interviews, 1 prototype, negotiations with municipalities
      </li>
      <li>
        <b>Key learning:</b> frame a 0→1 vision and say no to out-of-scope ideas
      </li>
    </ul>
  </section>
);

// ===================== DEFAULT CONTENT =====================

const ContentDefaultFR = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Section 1: TL;DR + Contexte */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-10">
          <TLDRBlockFR />

          <section className="grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-4">
              <h2 className="text-h3">Contexte & Déclencheur</h2>
              <p>
                Le projet <b>SONOR</b> naît du <b>Hackathon Recoder l’Habitat #2</b> (victoire, bourse 1 000 €), puis
                est incubé par <b>Matrice</b> et <b>La Banque des Territoires</b>. Problématique : la{" "}
                <b>pollution sonore</b>, peu adressée, aux impacts sanitaires et sociaux significatifs.
              </p>
              <p>
                Ambition : une solution SaaS <b>open data</b> pour permettre aux villes de <b>mesurer, cartographier</b>{" "}
                et
                <b> réduire</b> la pollution sonore, avec une approche orientée service public et citoyens.
              </p>
            </div>
            <CaseImage
              alt="Hackathon & partenaires"
              desktopSrc="/SONOR/partenaires-desktop.png" // TODO
              caption="Hackathon & écosystème d'accompagnement"
            />
          </section>

          <section className="rounded-xl border p-6 bg-card">
            <p className="text-2xl italic">
              “La pollution sonore est une nuisance réelle, dangereuse, encore trop peu adressée.”
            </p>
          </section>
        </div>
      </div>

      {/* Section 2: Mon rôle */}
      <div className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-h3">Mon rôle</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              "Cadrage produit (vision, roadmap, business model)",
              "Discovery (30 entretiens : collectivités, ministères, bailleurs, associations)",
              "Prototype (UX/UI Figma, cartographies open data)",
              "Go-to-market B2G (ciblage, cold-calling, rendez-vous avec élus, propals commerciales)",
              "Pilotage dev data scientist (sprints Kanban, jalons mensuels)",
            ].map((item) => (
              <div key={item} className="rounded-xl border p-4 bg-card">
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Process & Méthodo */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-h3">Process & Méthodologie (Agile Lean)</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { t: "Discovery", d: "Analyse marché, 30+ entretiens, personas" },
              { t: "Prototype", d: "Cartographies open data, UX/UI sur Figma" },
              { t: "Go-to-market", d: "Pivot promoteurs → collectivités, RDV métropoles" },
              { t: "Cadence", d: "Sprints 2–3 semaines, review & reporting mensuel" },
            ].map((s) => (
              <div key={s.t} className="rounded-xl border p-5 bg-card">
                <h4 className="font-semibold mb-1">{s.t}</h4>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>

          <CaseImage
            alt="Extrait cartographie prototype"
            desktopSrc="/SONOR/carto-proto-desktop.png" // TODO
            caption="Prototype — Cartographie open data (extrait)"
          />
        </div>
      </div>

      {/* Section 4: Résultats & Différenciation */}
      <div className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-h3">Résultats & Différenciation</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { v: "20 000 €", l: "Financements obtenus" },
              { v: "30", l: "Entretiens qualitatifs" },
              { v: "1", l: "Prototype cartographique" },
            ].map((k) => (
              <div key={k.l} className="bg-card p-6 rounded-2xl border">
                <div className="text-4xl font-extrabold mb-2">{k.v}</div>
                <div className="text-muted-foreground">{k.l}</div>
              </div>
            ))}
          </div>

          <CaseImage
            alt="Villes & partenaires rencontrés"
            desktopSrc="/SONOR/partenaires-villes-desktop.png" // TODO
            caption="Aix-Marseille, Paris (15e, 19e), Annecy, Nice, Arras, Houilles… + BruitParif, CSTB, CNRS, Qualitel, CDC Habitat, Icade, OGIC, Ministère de l’Écologie"
          />

          <div className="grid md:grid-cols-4 gap-4">
            {[
              "Durée 2 ans (au-delà d’un hackathon)",
              "Cadre institutionnel (Banque des Territoires, Matrice)",
              "Enjeu santé/environnement/citoyenneté",
              "Approche data-driven (open data, engagement citoyen)",
            ].map((d) => (
              <div key={d} className="rounded-xl border p-4 bg-card">
                <p className="text-sm">{d}</p>
              </div>
            ))}
          </div>

          <CTABanner
            title="Rencontrons-nous"
            description="Échangeons sur vos besoins produits dans le secteur public ou data/impact"
            ctaText="Contact"
            onClick={() => navigate("/Contact")}
            className="my-2"
          />
        </div>
      </div>

      {/* Section 5: Apprentissages + Conclusion */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-h3">Apprentissages</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border p-5 bg-card">
              <h4 className="font-semibold mb-2">Pratiques</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>0→1 complet : discovery → delivery → commercial</li>
                <li>
                  Priorisation et <b>dire non</b> aux idées hors scope
                </li>
                <li>Go-to-market B2G (élus, mairies, métropoles)</li>
              </ul>
            </div>
            <div className="rounded-xl border p-5 bg-card">
              <h4 className="font-semibold mb-2">Personnels</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Goût confirmé pour les produits à impact</li>
                <li>Aller-retour terrain ↔ conception digitale</li>
                <li>Travail en équipe pluridisciplinaire</li>
              </ul>
            </div>
          </div>

          <section className="rounded-xl border p-6 bg-card">
            <p className="text-lg">
              <b>Conclusion.</b> SONOR a forgé ma pratique de PM : cadrage, exécution et apprentissage continus dans un
              cadre mêlant <b>innovation, data et service public</b>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

const ContentDefaultEN = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Section 1: TL;DR + Context */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-10">
          <TLDRBlockEN />

          <section className="grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-4">
              <h2 className="text-h3">Context & Trigger</h2>
              <p>
                <b>SONOR</b> started with the <b>“Recoder l’Habitat #2”</b> hackathon (win, €1,000 grant), then was
                incubated by
                <b> Matrice</b> and <b>Banque des Territoires</b>. The challenge: <b>noise pollution</b>—an
                under-addressed public health issue with strong societal impact.
              </p>
              <p>
                Vision: a <b>SaaS open-data</b> solution enabling cities to <b>measure, map</b> and <b>reduce</b> noise
                pollution, oriented toward public service and citizen engagement.
              </p>
            </div>
            <CaseImage
              alt="Hackathon & partners"
              desktopSrc="/SONOR/partners-desktop.png" // TODO
              caption="Hackathon & incubation ecosystem"
            />
          </section>

          <section className="rounded-xl border p-6 bg-card">
            <p className="text-2xl italic">“Noise pollution is real and harmful — yet still under-addressed.”</p>
          </section>
        </div>
      </div>

      {/* Section 2: My role */}
      <div className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-h3">My Role</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              "Product framing (vision, roadmap, business model)",
              "Discovery (30 interviews: municipalities, ministries, housing bodies, associations)",
              "Prototype (Figma UX/UI, open-data mapping)",
              "B2G go-to-market (targeting, cold-calling, meetings with elected officials, proposals)",
              "Data-dev leadership (Kanban sprints, monthly milestones)",
            ].map((item) => (
              <div key={item} className="rounded-xl border p-4 bg-card">
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Process & Method */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-h3">Process & Method (Agile Lean)</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { t: "Discovery", d: "Market analysis, 30+ interviews, personas" },
              { t: "Prototype", d: "Open-data mapping, UX/UI in Figma" },
              { t: "Go-to-market", d: "Pivot developers → municipalities, first meetings" },
              { t: "Cadence", d: "2–3 week sprints, monthly reviews & reporting" },
            ].map((s) => (
              <div key={s.t} className="rounded-xl border p-5 bg-card">
                <h4 className="font-semibold mb-1">{s.t}</h4>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>

          <CaseImage
            alt="Mapping prototype"
            desktopSrc="/SONOR/map-proto-desktop.png" // TODO
            caption="Prototype — Open-data mapping (excerpt)"
          />
        </div>
      </div>

      {/* Section 4: Results & Differentiation */}
      <div className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-h3">Results & Differentiation</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { v: "€20k", l: "Grants obtained" },
              { v: "30", l: "Qualitative interviews" },
              { v: "1", l: "Mapping prototype" },
            ].map((k) => (
              <div key={k.l} className="bg-card p-6 rounded-2xl border">
                <div className="text-4xl font-extrabold mb-2">{k.v}</div>
                <div className="text-muted-foreground">{k.l}</div>
              </div>
            ))}
          </div>

          <CaseImage
            alt="Cities & partners"
            desktopSrc="/SONOR/partners-cities-desktop.png" // TODO
            caption="Aix-Marseille, Paris (15th, 19th), Annecy, Nice, Arras, Houilles… + BruitParif, CSTB, CNRS, Qualitel, CDC Habitat, Icade, OGIC, Ministry of Ecology"
          />

          <div className="grid md:grid-cols-4 gap-4">
            {[
              "2-year duration (beyond a hackathon)",
              "Institutional support (Banque des Territoires, Matrice)",
              "Societal/health/environment impact",
              "Data-driven approach (open data, citizen engagement)",
            ].map((d) => (
              <div key={d} className="rounded-xl border p-4 bg-card">
                <p className="text-sm">{d}</p>
              </div>
            ))}
          </div>

          <CTABanner
            title="Let’s connect"
            description="Discussing public-sector or data/impact product challenges"
            ctaText="Contact"
            onClick={() => navigate("/Contact")}
            className="my-2"
          />
        </div>
      </div>

      {/* Section 5: Learnings + Conclusion */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-h3">Learnings</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border p-5 bg-card">
              <h4 className="font-semibold mb-2">Practical</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>End-to-end 0→1 (discovery → delivery → commercial)</li>
                <li>
                  Prioritization & <b>saying no</b> to out-of-scope ideas
                </li>
                <li>B2G go-to-market (elected officials, cities, metros)</li>
              </ul>
            </div>
            <div className="rounded-xl border p-5 bg-card">
              <h4 className="font-semibold mb-2">Personal</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Affinity for impact-driven products confirmed</li>
                <li>Back-and-forth between field & digital design</li>
                <li>Cross-functional teamwork</li>
              </ul>
            </div>
          </div>

          <section className="rounded-xl border p-6 bg-card">
            <p className="text-lg">
              <b>Conclusion.</b> SONOR shaped my PM practice — framing, execution and learning in a context blending
              <b> innovation, data and public service</b>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

// ===================== PM-FOCUSED CONTENT =====================

const ContentPMFR = () => (
  <div>
    <div className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto space-y-10">
        <CaseTldr />
        <section className="space-y-4">
          <h2 className="text-h3">Process PM & Priorisation</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ["Discovery", "30 entretiens, JTBD, critères décisionnels collectivités"],
              ["Prototype", "Cartographie open data, parcours décideur, livrables Figma"],
              ["GTM B2G", "Ciblage mairies/métropoles, séquence mail/call, RDV élus"],
            ].map(([h, d]) => (
              <div key={h} className="rounded-xl border p-5 bg-card">
                <h4 className="font-semibold mb-1">{h}</h4>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-h3">Résultats & Indicateurs</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              ["€20k", "Financements"],
              ["30", "Entretiens"],
              ["1", "Prototype"],
              ["8+", "Villes & métropoles rencontrées"],
            ].map(([v, l]) => (
              <div key={l} className="bg-card p-6 rounded-2xl border">
                <div className="text-3xl font-extrabold mb-1">{v}</div>
                <div className="text-muted-foreground text-sm">{l}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-h3">Risques & Parades</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <b>Disponibilité/qualité de l’open data</b> → normalisation, fallback partenaires capteurs
            </li>
            <li>
              <b>Adoption côté ville</b> → focus ROI concret (priorisation interventions, coûts évités)
            </li>
            <li>
              <b>Cycle de vente long</b> → segmentation comptes, champions internes, pilote limité
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

const ContentPMEN = () => (
  <div>
    <div className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto space-y-10">
        <CaseTldr />
        <section className="space-y-4">
          <h2 className="text-h3">PM Process & Prioritization</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ["Discovery", "30 interviews, JTBD, municipal decision criteria"],
              ["Prototype", "Open-data mapping, decision-maker journey, Figma deliverables"],
              ["B2G GTM", "Targeting municipalities, mail/call sequence, meetings with officials"],
            ].map(([h, d]) => (
              <div key={h} className="rounded-xl border p-5 bg-card">
                <h4 className="font-semibold mb-1">{h}</h4>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-h3">Results & Indicators</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              ["€20k", "Grants"],
              ["30", "Interviews"],
              ["1", "Prototype"],
              ["8+", "Cities & metros engaged"],
            ].map(([v, l]) => (
              <div key={l} className="bg-card p-6 rounded-2xl border">
                <div className="text-3xl font-extrabold mb-1">{v}</div>
                <div className="text-muted-foreground text-sm">{l}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-h3">Risks & Mitigation</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <b>Open-data availability/quality</b> → normalization, sensor-partner fallback
            </li>
            <li>
              <b>City adoption</b> → concrete ROI (prioritizing interventions, avoided costs)
            </li>
            <li>
              <b>Long sales cycles</b> → account segmentation, internal champions, scoped pilot
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

// ===================== DESIGN-FOCUSED CONTENT =====================

const ContentDesignerFR = () => (
  <div>
    <div className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto space-y-10">
        <CaseTldr />

        <section className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-4">
              <h2 className="text-h3">Discovery & Research</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>30 entretiens (collectivités, bailleurs, ministères, experts)</li>
                <li>JTBD décideurs publics, contraintes réglementaires & data</li>
                <li>Parcours utilisateur cible : élu/chargé de mission</li>
              </ul>
            </div>
            <CaseImage
              alt="JTBD & verbatims"
              desktopSrc="/SONOR/jtbd-desktop.png" // TODO
              caption="JTBD & verbatims décideurs"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-h4">Prototype & Cartographie</h3>
            <CaseImage
              alt="Parcours / wireframes Figma"
              desktopSrc="/SONOR/ux-flow-desktop.png" // TODO
              caption="Parcours décision & wireframes (Figma)"
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-h3">Décisions design</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              ["Carto lisible", "Palette perceptive & focus zones chaudes"],
              ["Infos actionnables", "Indicateurs prioritaires (heures, axes, hotspots)"],
              ["Parcours décideur", "De la carte à l’action (scénarios d’intervention)"],
              ["Frugalité", "UI sobre, mise en avant des données publiques"],
            ].map(([h, d]) => (
              <div key={h} className="rounded-xl border p-4 bg-card">
                <h4 className="font-semibold mb-1">{h}</h4>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  </div>
);

const ContentDesignerEN = () => (
  <div>
    <div className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto space-y-10">
        <CaseTldr />

        <section className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-4">
              <h2 className="text-h3">Discovery & Research</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>30 interviews (cities, housing, ministries, experts)</li>
                <li>Public decision-maker JTBD, regulatory/data constraints</li>
                <li>Target journey: elected official / mission officer</li>
              </ul>
            </div>
            <CaseImage
              alt="JTBD & verbatims"
              desktopSrc="/SONOR/jtbd-desktop.png" // TODO
              caption="JTBD & key verbatims"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-h4">Prototype & Mapping</h3>
            <CaseImage
              alt="User flow / Figma wireframes"
              desktopSrc="/SONOR/ux-flow-desktop.png" // TODO
              caption="Decision flow & wireframes (Figma)"
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-h3">Design decisions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              ["Readable mapping", "Perceptual palette & hotspot focus"],
              ["Actionable info", "Priority indicators (hours, axes, hotspots)"],
              ["Decision journey", "From map to action (intervention scenarios)"],
              ["Frugality", "Sober UI, public data forward"],
            ].map(([h, d]) => (
              <div key={h} className="rounded-xl border p-4 bg-card">
                <h4 className="font-semibold mb-1">{h}</h4>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  </div>
);

// ===================== PAGE WRAPPER =====================

export default function SonorPage() {
  const navigate = useNavigate();
  const { activeAudience, setActiveAudience } = useAudience("default");
  const { language, setLanguage } = useLanguage("fr");

  const audienceContentFR = [
    { id: "default", label: "Vue d’ensemble", content: <ContentDefaultFR /> },
    { id: "pm", label: "Product Manager", content: <ContentPMFR /> },
    { id: "design", label: "Designer", content: <ContentDesignerFR /> },
  ];

  const audienceContentEN = [
    { id: "default", label: "Overview", content: <ContentDefaultEN /> },
    { id: "pm", label: "Product Manager", content: <ContentPMEN /> },
    { id: "design", label: "Designer", content: <ContentDesignerEN /> },
  ];

  const content = language === "fr" ? audienceContentFR : audienceContentEN;

  const title =
    language === "fr"
      ? "SONOR — Réduire la pollution sonore grâce à l’open data"
      : "SONOR — Reducing noise pollution with open data";

  const subtitle =
    language === "fr"
      ? "Deux ans d’entrepreneuriat : du hackathon au prototype, avec Matrice & la Banque des Territoires"
      : "Two-year journey: from hackathon to prototype, with Matrice & Banque des Territoires";

  const perspectiveLabel = language === "fr" ? "Choisissez votre perspective" : "Choose your perspective";

  const scrollToSection = (id: string) => {
    if (id === "home") navigate("/");
  };

  return (
    <>
      <Navigation />
      <CaseStudyLayout
        title={title}
        subtitle={subtitle}
        heroImage={sonorHero}
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
