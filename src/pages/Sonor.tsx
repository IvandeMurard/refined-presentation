// src/pages/Sonor.tsx - VERSION MISE À JOUR COMPLÈTE
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/footer";
import { FilterChips } from "@/components/FilterChips";
import { useAudience } from "@/hooks/useAudience";
import { useLanguage } from "@/contexts/LanguageContext";
import { CTABanner } from "@/components/work/CTABanner";
import CaseTldr from "@/components/case/CaseTldr";
import { CaseImage } from "@/components/case/CaseImage";
import { InlineExpand } from "@/components/InlineExpand";
import { Plus } from "lucide-react";

import sonorHero from "/img/image-banniere-sonor.jpg";

// ============= COMPOSANT TERM EXPLAIN =============
const TermExplain = ({ term, children }: { term: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const id = `term-${term.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <span className="inline">
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        className="underline decoration-dotted underline-offset-4 text-foreground/90 hover:text-foreground cursor-help transition-all"
      >
        {term}
      </button>
      <InlineExpand open={open} ariaId={id}>
        <div 
          id={`${id}-panel`} 
          className="mt-2 p-3 rounded-lg border-l-4 border-accent bg-muted/60 text-sm italic"
        >
          <strong className="not-italic text-accent">{term} :</strong> {children}
        </div>
      </InlineExpand>
    </span>
  );
};

// ============= COMPOSANT SECTION EXPANDABLE =============
const ExpandSection = ({ 
  id, 
  title, 
  children,
  defaultOpen = false 
}: { 
  id: string; 
  title: string; 
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="space-y-3">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        className="flex items-center justify-between w-full group cursor-pointer"
      >
        <h4 className="font-semibold text-base md:text-lg group-hover:underline underline-offset-4">
          {title}
        </h4>
        <Plus 
          className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
          aria-hidden="true"
        />
      </button>
      <InlineExpand open={open} ariaId={id}>
        <div id={`${id}-panel`} className="pt-2 space-y-3 text-sm text-muted-foreground">
          {children}
        </div>
      </InlineExpand>
    </div>
  );
};

// ===================== TL;DR BLOCKS =====================

const TLDRBlockFR = () => (
  <CaseTldr
    tone="wttj"
    title="TL;DR — En bref"
    items={[
      <>
        <b>Solution :</b> Une offre 360° de plateforme SaaS <TermExplain term="open data">données publiques librement accessibles et réutilisables</TermExplain> pour villes et métropoles : 
        de la cartographie de la pollution sonore aux recommandations d'action publique, 
        et l'engagement citoyen via la sensibilisation sur les actions de la collectivité
      </>,
      <>
        <b>Sources de données :</b> NoiseModeling, NoisePlanet, et données ouvertes des collectivités 
        (obligation légale pour villes &gt;3 500 habitants et agglomérations &gt;100 000 habitants)
      </>,
      <>
        <b>Équipe :</b> 4 co-fondateurs (Émilie, Majda, Benjamin, Ivan) + 1 dev/data-scientist à temps partiel
      </>,
      <>
        <b>Mon rôle :</b> Product framing, <TermExplain term="discovery">phase de recherche utilisateur et marché approfondie</TermExplain> (20 entretiens), 
        Prototypage (UX/UI Figma), Go-to-Market <TermExplain term="B2G">Business-to-Government, ventes aux collectivités publiques</TermExplain>, 
        Sales, Pilotage d'un développeur data-scientist
      </>,
      <>
        <b>Résultats Go-to-market :</b> 20+ villes contactées → 4-5 échanges constructifs → 2 proposales commerciales
      </>,
    ]}
  />
);

const TLDRBlockEN = () => (
  <CaseTldr
    tone="wttj"
    title="TL;DR — At a glance"
    items={[
      <>
        <b>Solution:</b> A 360° SaaS platform offering for cities: from noise pollution mapping 
        to public action recommendations and citizen engagement
      </>,
      <>
        <b>Data sources:</b> NoiseModeling, NoisePlanet, and open data from municipalities 
        (legal obligation for cities &gt;3,500 inhabitants and agglomerations &gt;100,000 inhabitants)
      </>,
      <>
        <b>Team:</b> 4 co-founders (Émilie, Majda, Benjamin, Ivan) + 1 part-time dev/data-scientist
      </>,
      <>
        <b>My role:</b> Product framing, discovery (20 interviews), Prototyping (UX/UI Figma), 
        B2G go-to-market, Sales, Data-scientist leadership
      </>,
      <>
        <b>Go-to-market results:</b> 20+ cities contacted → 4-5 constructive exchanges → 2 commercial proposals
      </>,
    ]}
  />
);

// ===================== CONTENT DEFAULT FR =====================

const ContentDefaultFR = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* TL;DR */}
      <div className="mb-10">
        <TLDRBlockFR />
      </div>

      {/* Section 1: Contexte */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-10">
          <section className="grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-4">
              <h2 className="text-h3">Contexte & Déclencheur</h2>
              <p>
                Le projet <b>SONOR</b> naît en octobre 2020 grâce au <b>Hackathon Recoder l'Habitat #2</b> portant sur la thématique de l'Habitat et de la Santé.
                Lors du hackathon, le constat de la pollution sonore est fait, l'équipe est formée, le travail de définition de la solution et de prototypage commence.
                24h après, l'équipe Sonor (Émilie, Majda, Benjamin, et moi Ivan) remporte ce hackathon, présentant un outil de diagnostic complet de la pollution sonore dans une ville à partir d'<TermExplain term="open data">données publiques librement accessibles</TermExplain> : 
                cartographie, recommandations d'actions publiques, suivi de la réglementation et alertes citoyennes, notre plateforme séduit.
              </p>
              <p>
                Sonor obtient une bourse et un accompagnement par l'<b>Association Matrice Loi 1901</b> et <b>La Banque des Territoires</b>, l'aventure entrepreneuriale est lancée.
                Problématique à résoudre : la <b>pollution sonore</b>, 2ème source de nuisances urbaines aux impacts sanitaires, sociaux, et environnementaux significatifs, est invisible, insidieuse et peu adressée.
              </p>
              <p>
                <b>Solution :</b> Offrir une solution <TermExplain term="SaaS">Software as a Service, logiciel accessible en ligne par abonnement</TermExplain> open data pour permettre aux villes de <b>mesurer, cartographier</b> et <b>réduire</b> durablement la pollution sonore, 
                accompagner les collectivités dans le déploiement de solutions adaptées et favoriser la collaboration entre service public, citoyens, et acteurs privés.
              </p>
              <p>
                <b>Proposition de valeur :</b> Anticiper et agir sur le bruit pour garantir la santé des habitants et l'attractivité des territoires.
              </p>
            </div>
            <CaseImage
              alt="Hackathon & partenaires"
              desktopSrc="/img/Sonor Hackathon.jpeg"
              caption="Écosystème d'accompagnement"
            />
          </section>

          <section className="rounded-xl p-6 bg-card">
            <p className="text-2xl italic">
              "La pollution sonore est une nuisance réelle, dangereuse, encore trop peu adressée."
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
              "Discovery (20 entretiens : collectivités, ministères, bailleurs, associations, experts techniques)",
              "Prototype (UX/UI Figma, cartographies open data)",
              "Go-to-market B2G (ciblage, cold-calling, rendez-vous avec élus, proposales commerciales)",
              "Pilotage dev data scientist (sprints Kanban, jalons mensuels)",
            ].map((item) => (
              <div key={item} className="rounded-xl p-4 bg-card">
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Process & Méthodo */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-h3">Process & Méthodologie (<TermExplain term="Agile Lean">méthodologie itérative et incrémentale centrée sur la valeur</TermExplain>)</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { t: "Discovery", d: "Analyse marché, 20+ entretiens, personas" },
              { t: "Prototype", d: "Cartographies open data, UX/UI sur Figma" },
              { t: "Go-to-market", d: "Pivot promoteurs → collectivités, RDV métropoles" },
              { t: "Cadence", d: "Sprints 2–3 semaines, review & reporting mensuel" },
            ].map((s) => (
              <div key={s.t} className="rounded-xl p-5 bg-card">
                <h4 className="font-semibold mb-1">{s.t}</h4>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>

          <CaseImage
            alt="Extrait cartographie prototype"
            desktopSrc="/img/sonor_platform_desktop.png"
            caption="Prototype — Cartographie open data (extrait)"
          />
        </div>
      </div>

      {/* Section 4: Résultats */}
      <div className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-h3">Résultats & Différenciation</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { v: "20 000 €", l: "Financements obtenus" },
              { v: "20", l: "Entretiens qualitatifs" },
              { v: "1", l: "Prototype cartographique" },
            ].map((k) => (
              <div key={k.l} className="bg-card p-6 rounded-2xl">
                <div className="text-4xl font-extrabold mb-2">{k.v}</div>
                <div className="text-muted-foreground">{k.l}</div>
              </div>
            ))}
          </div>

          <ExpandSection id="acteurs-rencontres" title="Acteurs rencontrés">
            <p>
              <b>Typologie :</b> Métropoles régionales, villes moyennes, collectivités territoriales, acteurs publics locaux
            </p>
            <p>
              <b>Partenaires techniques et institutionnels :</b> BruitParif, CSTB, CNRS, Qualitel, CDC Habitat, Icade, OGIC, Ministère de l'Écologie
            </p>
          </ExpandSection>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              "Durée 2 ans (au-delà d'un hackathon)",
              "Cadre institutionnel (Banque des Territoires, Matrice)",
              "Enjeu santé/environnement/citoyenneté",
              "Approche data-driven (open data, engagement citoyen)",
            ].map((d) => (
              <div key={d} className="rounded-xl p-4 bg-card">
                <p className="text-sm">{d}</p>
              </div>
            ))}
          </div>

          <CTABanner
            title="Vous voulez en savoir plus ?"
            description="Échangeons sur vos besoins produits"
            ctaText="Rencontrons-nous"
            onClick={() => navigate("/Contact")}
            className="my-2"
          />
        </div>
      </div>

      {/* Section 5: Moments clés */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-h3">Moments clés</h2>
          
          <ExpandSection id="cycles-vente" title="Les cycles de vente B2G">
            <p>
              Les cycles de vente auprès des collectivités sont particulièrement longs (6-12 mois minimum). 
              Malgré des échanges constructifs avec plusieurs collectivités, nous avons manqué de temps pour finaliser les signatures.
            </p>
            <div className="space-y-3 mt-4">
              <div>
                <p className="font-semibold">Obstacle : Budget et arbitrage politique</p>
                <p className="text-sm">
                  Difficulté à faire rentrer le projet dans les budgets pluriannuels déjà engagés. 
                  La pollution sonore reste un enjeu secondaire face aux priorités budgétaires.
                </p>
              </div>
              <div>
                <p className="font-semibold">Obstacle : Complexité technique</p>
                <p className="text-sm">
                  Difficulté à convaincre sur la fiabilité des données open data et la pertinence 
                  des algorithmes de simulation acoustique.
                </p>
              </div>
            </div>
          </ExpandSection>
        </div>
      </div>

      {/* Section 6: Segmentation & Go-to-Market */}
      <div className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-h3">Segmentation & Ciblage</h2>
          
          <p>
            J'ai principalement ciblé par <b>appétence et sensibilisation à la donnée</b> plutôt que par taille de collectivités. 
            Le démarchage s'est déroulé en 3 phases progressives, chaque phase étant plus ciblée que la précédente.
          </p>

          <div className="space-y-4">
            <ExpandSection id="phase-1" title="Phase 1 : Exploration large (tous secteurs)">
              <ul className="list-disc pl-5 space-y-1">
                <li>Promoteurs immobiliers</li>
                <li>Bailleurs sociaux</li>
                <li>Collectivités (première approche)</li>
              </ul>
              <p className="mt-2 italic">→ Pivot vers les collectivités après identification du meilleur product-market fit</p>
            </ExpandSection>

            <ExpandSection id="phase-2" title="Phase 2 : Collectivités sensibilisées à la donnée">
              <ul className="list-disc pl-5 space-y-1">
                <li>Villes ayant une culture open data établie</li>
                <li>Métropoles avec des services environnement structurés</li>
              </ul>
            </ExpandSection>

            <ExpandSection id="phase-3" title="Phase 3 : Ciblage affiné (appétence data + culture innovation)">
              <ul className="list-disc pl-5 space-y-1">
                <li>Contact direct sur LinkedIn avec élus et chargés de mission</li>
                <li>Collectivités déjà engagées dans des démarches smart city</li>
              </ul>
              <p className="mt-2 italic">→ Meilleurs résultats en phase 3 (pas de chiffres précis disponibles)</p>
            </ExpandSection>
          </div>

          <ExpandSection id="process-vente" title="Process de vente détaillé">
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <b>Qualification initiale :</b> Recherche LinkedIn + analyse des publications open data de la collectivité
              </li>
              <li>
                <b>Premier contact :</b> Email personnalisé présentant la proposition de valeur adaptée aux enjeux locaux
              </li>
              <li>
                <b>Relances :</b> Téléphone, échanges visios pour qualifier le besoin
              </li>
              <li>
                <b>Entretien physique :</b> Présentation personnalisée de la solution Sonor et des besoins spécifiques de la collectivité
              </li>
              <li>
                <b>Propale commerciale :</b> Rédaction d'une proposition adaptée (marché <TermExplain term="gré-à-gré">marché public sans appel d'offres, pour montants inférieurs à 40k€</TermExplain>)
              </li>
            </ol>
          </ExpandSection>

          <ExpandSection id="funnel-global" title="Funnel global (hors LinkedIn)">
            <div className="space-y-2">
              <p>20+ villes contactées</p>
              <p>→ 4-5 échanges constructifs</p>
              <p>→ 2 proposales commerciales</p>
              <p className="text-sm italic mt-3">
                Note : Le funnel ne contient pas les chiffres LinkedIn (phase 3), où les résultats étaient meilleurs.
              </p>
            </div>
          </ExpandSection>

          <div className="rounded-xl p-6 bg-card">
            <p className="text-base">
              <b>Apprentissage clé :</b> Grâce à l'accompagnement et l'expertise de La Banque des Territoires 
              et l'association Matrice, nous avons solidifié notre démarche commerciale et notre crédibilité 
              auprès des décideurs publics.
            </p>
          </div>
        </div>
      </div>

      {/* Section 7: Sprints & Cadences */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-h3">Sprints & Cadences</h2>
          
          <ExpandSection id="sprints-kanbans" title="Sprints Kanbans & cadences">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <b>Sprints 2–3 semaines :</b> cycles courts pour itérer rapidement sur le prototype et les hypothèses business
              </li>
              <li>
                <b>Review mensuelle :</b> point d'étape avec les mentors (Banque des Territoires, Matrice)
              </li>
              <li>
                <b>Reporting financier :</b> suivi des dépenses et jalons de financement
              </li>
            </ul>
          </ExpandSection>

          <ExpandSection id="could-have" title="Could Have (priorisation future)">
            <ul className="list-disc pl-5 space-y-1">
              <li>Dashboard analytics avancé pour les élus</li>
              <li>Module de communication citoyenne automatisée</li>
              <li>Intégration avec systèmes SIG existants</li>
            </ul>
          </ExpandSection>

          <ExpandSection id="wont-have" title="Won't Have (écartés)">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <b>Capteurs IoT propriétaires :</b> Impact technologique + temps de développement trop important. 
                Volonté de bypasser l'usage de capteurs en valorisant l'information citoyenne via l'open data.
              </li>
              <li>
                <b>Module de prédiction météo sonore :</b> Complexité technique excessive pour le MVP
              </li>
            </ul>
          </ExpandSection>
        </div>
      </div>

      {/* Section 8: Si c'était à refaire */}
      <div className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-h3">Si c'était à refaire</h2>
          
          <ExpandSection id="concentration-mvp" title="Se concentrer sur le MVP de la plateforme SaaS et la cartographie open data avant l'offre complète d'accompagnement">
            <p>
              Nous aurions dû prioriser la livraison d'un <TermExplain term="MVP">Minimum Viable Product, version minimale testable du produit</TermExplain> fonctionnel 
              de la plateforme de cartographie avant de proposer une offre complète incluant l'accompagnement des collectivités.
            </p>
            <p className="mt-2">
              Cela aurait permis de valider plus rapidement la proposition de valeur technique 
              et de créer un effet démonstration auprès des prospects.
            </p>
          </ExpandSection>

          <ExpandSection id="tests-beta" title="Lancer des tests bêta avec 2-3 villes pilotes">
            <p>
              Des tests bêta avec quelques villes volontaires auraient permis de :
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Valider la pertinence des données et de la cartographie</li>
              <li>Affiner les fonctionnalités selon les retours terrain</li>
              <li>Créer des cas clients pour faciliter le démarchage commercial</li>
            </ul>
          </ExpandSection>

          <ExpandSection id="partenariats-strategiques" title="Nouer des partenariats stratégiques plus tôt">
            <p>
              Identifier et contractualiser des partenariats avec des acteurs clés du secteur 
              (associations d'élus, réseaux de villes, consultants en environnement) dès le début 
              pour faciliter l'accès au marché.
            </p>
          </ExpandSection>
        </div>
      </div>

      {/* Section 9: Épilogue & Learnings */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-h3">Épilogue & Apprentissages</h2>

          <section className="rounded-xl p-6 bg-card">
            <p className="text-lg">
              Le projet SONOR n'est pas devenu une start-up à proprement parlé, mais l'expérience a été formatrice 
              à plusieurs niveaux, tant sur le plan professionnel que personnel.
            </p>
          </section>

          <div className="space-y-6">
            <ExpandSection id="learning-1" title="1. Complexité technique sous-estimée">
              <p>
                Nous avons sous-estimé la difficulté d'accès et de traitement des données open data de qualité exploitable 
                sur la pollution sonore. Le manque de matière première (données ouvertes fiables et standardisées) 
                a ralenti le développement du prototype.
              </p>
            </ExpandSection>

            <ExpandSection id="learning-2" title="2. Cycles de vente B2G longs">
              <p>
                Les cycles de vente auprès des collectivités sont très longs (6-12 mois minimum), 
                mais nous manquons de temps pour finaliser les signatures avant l'épuisement de nos financements.
              </p>
            </ExpandSection>

            <ExpandSection id="learning-3" title="3. Positionnement flou">
              <p>
                Notre positionnement entre plateforme SaaS et accompagnement conseil n'était pas assez clair. 
                Il fallait choisir un angle d'attaque plus précis pour faciliter la compréhension de la proposition de valeur.
              </p>
            </ExpandSection>
          </div>

          <div className="mt-10">
            <h3 className="text-h4 mb-4">Apprentissages personnels</h3>
            <div className="space-y-4">
              <ExpandSection id="learning-perso-1" title="1. Appétence pour l'exploration et l'analyse" defaultOpen={true}>
                <p>
                  J'ai confirmé mon goût pour l'étude approfondie de problématiques complexes, 
                  la recherche de solutions concrètes, et la capacité à transformer des apprentissages techniques 
                  et des données en réponses adaptées aux besoins terrain. Cette approche analytique et exploratoire 
                  guide aujourd'hui ma pratique produit.
                </p>
              </ExpandSection>

              <ExpandSection id="learning-perso-2" title="2. Produits à impact">
                <p>
                  Confirmation de mon intérêt pour les produits à fort impact sociétal et environnemental, 
                  où la technologie sert un objectif d'utilité publique.
                </p>
              </ExpandSection>

              <ExpandSection id="learning-perso-3" title="3. Aller-retour terrain ↔ conception">
                <p>
                  Importance de la confrontation régulière avec le terrain pour affiner la vision produit 
                  et éviter de construire dans l'abstrait.
                </p>
              </ExpandSection>

              <ExpandSection id="learning-perso-4" title="4. Travail en équipe pluridisciplinaire">
                <p>
                  Apprentissage du travail en équipe avec des profils variés (design, data science, business), 
                  nécessitant une communication claire et une capacité à synthétiser des enjeux complexes.
                </p>
              </ExpandSection>
            </div>
          </div>

          <section className="rounded-xl p-6 bg-card mt-10">
            <p className="text-lg">
              <b>Conclusion.</b> SONOR a confirmé mon goût pour la transformation de problématiques en solutions data-driven 
              et m'a permis d'acquérir une expérience précieuse en product management 0→1, 
              de la discovery à la commercialisation.
            </p>
          </section>
        </div>
      </div>

      {/* Section 10: À propos */}
      <div className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="text-h3">À propos de ce projet</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { v: "Oct 2020 - Déc 2022", l: "Durée" },
              { v: "20", l: "Entretiens" },
              { v: "Métropoles, villes, acteurs publics", l: "Typologie d'acteurs" },
            ].map((k) => (
              <div key={k.l} className="bg-card p-6 rounded-2xl">
                <div className="text-2xl font-bold mb-2">{k.v}</div>
                <div className="text-muted-foreground text-sm">{k.l}</div>
              </div>
            ))}
          </div>

          <div className="rounded-xl p-6 bg-card">
            <p className="text-base">
              <b>Technologies & outils :</b> Figma (prototypage UX/UI), NoiseModeling (simulation acoustique), 
              NoisePlanet (données participatives), Python (traitement data), Notion (gestion projet)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ===================== CONTENT DEFAULT EN =====================

const ContentDefaultEN = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* TL;DR */}
      <div className="mb-10">
        <TLDRBlockEN />
      </div>

      {/* Section 1: Context */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-10">
          <section className="grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-4">
              <h2 className="text-h3">Context & Trigger</h2>
              <p>
                <b>SONOR</b> started with the <b>"Recoder l'Habitat #2"</b> hackathon (win, €1,000 grant), then was
                incubated by <b>Matrice Association</b> and <b>Banque des Territoires</b>. The challenge: <b>noise pollution</b>—an
                under-addressed public health issue with strong societal impact.
              </p>
              <p>
                Vision: a SaaS open-data solution enabling cities to <b>measure, map</b> and <b>reduce</b> noise
                pollution, oriented toward public service and citizen engagement.
              </p>
            </div>
            <CaseImage
              alt="Hackathon & partners"
              desktopSrc="/img/Sonor Hackathon.jpeg"
              caption="Hackathon & incubation ecosystem"
            />
          </section>

          <section className="rounded-xl p-6 bg-card">
            <p className="text-2xl italic">"Noise pollution is real and harmful — yet still under-addressed."</p>
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
              "Discovery (20 interviews: municipalities, ministries, housing bodies, associations)",
              "Prototype (Figma UX/UI, open-data mapping)",
              "B2G go-to-market (targeting, cold-calling, meetings with elected officials, proposals)",
              "Data-dev leadership (Kanban sprints, monthly milestones)",
            ].map((item) => (
              <div key={item} className="rounded-xl p-4 bg-card">
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
              { t: "Discovery", d: "Market analysis, 20+ interviews, personas" },
              { t: "Prototype", d: "Open-data mapping, UX/UI in Figma" },
              { t: "Go-to-market", d: "Pivot developers → municipalities, first meetings" },
              { t: "Cadence", d: "2–3 week sprints, monthly reviews & reporting" },
            ].map((s) => (
              <div key={s.t} className="rounded-xl p-5 bg-card">
                <h4 className="font-semibold mb-1">{s.t}</h4>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>

          <CaseImage
            alt="Mapping prototype"
            desktopSrc="/img/sonor_platform_desktop.png"
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
              { v: "20", l: "Qualitative interviews" },
              { v: "1", l: "Mapping prototype" },
            ].map((k) => (
              <div key={k.l} className="bg-card p-6 rounded-2xl">
                <div className="text-4xl font-extrabold mb-2">{k.v}</div>
                <div className="text-muted-foreground">{k.l}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              "2-year duration (beyond a hackathon)",
              "Institutional support (Banque des Territoires, Matrice)",
              "Societal/health/environment impact",
              "Data-driven approach (open data, citizen engagement)",
            ].map((d) => (
              <div key={d} className="rounded-xl p-4 bg-card">
                <p className="text-sm">{d}</p>
              </div>
            ))}
          </div>

          <CTABanner
            title="Let's connect"
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
            <div className="rounded-xl p-5 bg-card">
              <h4 className="font-semibold mb-2">Practical</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>End-to-end 0→1 (discovery → delivery → commercial)</li>
                <li>Prioritization & <b>saying no</b> to out-of-scope ideas</li>
                <li>B2G go-to-market (elected officials, cities, metros)</li>
              </ul>
            </div>
            <div className="rounded-xl p-5 bg-card">
              <h4 className="font-semibold mb-2">Personal</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Affinity for impact-driven products confirmed</li>
                <li>Back-and-forth between field & digital design</li>
                <li>Cross-functional teamwork</li>
              </ul>
            </div>
          </div>

          <section className="rounded-xl p-6 bg-card">
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

// ===================== PM CONTENT FR =====================

const ContentPMFR = () => (
  <div>
    <div className="mb-10">
      <TLDRBlockFR />
    </div>

    <div className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto space-y-10">
        <section className="space-y-4">
          <h2 className="text-h3">Process PM & Priorisation</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ["Discovery", "20 entretiens, JTBD, critères décisionnels collectivités"],
              ["Prototype", "Cartographie open data, parcours décideur, livrables Figma"],
              ["GTM B2G", "Ciblage mairies/métropoles, séquence mail/call, RDV élus"],
            ].map(([h, d]) => (
              <div key={h} className="rounded-xl p-5 bg-card">
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
              ["20", "Entretiens"],
              ["1", "Prototype"],
              ["8+", "Villes & métropoles rencontrées"],
            ].map(([v, l]) => (
              <div key={l} className="bg-card p-6 rounded-2xl">
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
              <b>Disponibilité/qualité de l'open data</b> → normalisation, fallback partenaires capteurs
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
    <div className="mb-10">
      <TLDRBlockEN />
    </div>

    <div className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto space-y-10">
        <section className="space-y-4">
          <h2 className="text-h3">PM Process & Prioritization</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ["Discovery", "20 interviews, JTBD, municipal decision criteria"],
              ["Prototype", "Open-data mapping, decision-maker journey, Figma deliverables"],
              ["B2G GTM", "Targeting municipalities, mail/call sequence, meetings with officials"],
            ].map(([h, d]) => (
              <div key={h} className="rounded-xl p-5 bg-card">
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
              ["20", "Interviews"],
              ["1", "Prototype"],
              ["8+", "Cities & metros engaged"],
            ].map(([v, l]) => (
              <div key={l} className="bg-card p-6 rounded-2xl">
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

// ===================== DESIGNER CONTENT FR =====================

const ContentDesignerFR = () => (
  <div>
    <div className="mb-10">
      <TLDRBlockFR />
    </div>

    <div className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto space-y-10">
        <section className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-h3">Discovery & Research</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>20 entretiens (collectivités, bailleurs, ministères, experts)</li>
              <li>JTBD décideurs publics, contraintes réglementaires & data</li>
              <li>Parcours utilisateur cible : élu/chargé de mission</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-h4">Prototype & Cartographie</h3>
            <CaseImage
              alt="Parcours / wireframes Figma"
              desktopSrc="/img/sonor_platform_desktop.png"
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
              ["Parcours décideur", "De la carte à l'action (scénarios d'intervention)"],
              ["Frugalité", "UI sobre, mise en avant des données publiques"],
            ].map(([h, d]) => (
              <div key={h} className="rounded-xl p-4 bg-card">
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
    <div className="mb-10">
      <TLDRBlockEN />
    </div>

    <div className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto space-y-10">
        <section className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-h3">Discovery & Research</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>20 interviews (cities, housing, ministries, experts)</li>
              <li>Public decision-maker JTBD, regulatory/data constraints</li>
              <li>Target journey: elected official / mission officer</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-h4">Prototype & Mapping</h3>
            <CaseImage
              alt="User flow / Figma wireframes"
              desktopSrc="/img/sonor_platform_desktop.png"
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
              <div key={h} className="rounded-xl p-4 bg-card">
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
  const { activeAudience, setActiveAudience, audiences } = useAudience('default');
  const { language } = useLanguage();

  const getContent = () => {
    if (activeAudience === 'pm') {
      return language === 'fr' ? <ContentPMFR /> : <ContentPMEN />;
    }
    if (activeAudience === 'design') {
      return language === 'fr' ? <ContentDesignerFR /> : <ContentDesignerEN />;
    }
    return language === 'fr' ? <ContentDefaultFR /> : <ContentDefaultEN />;
  };

  const title = language === 'fr'
    ? "SONOR — Réduire la pollution sonore grâce à l'open data"
    : "SONOR — Reducing noise pollution with open data";

  const subtitle = language === 'fr'
    ? "Deux ans d'entrepreneuriat : du hackathon au prototype, avec Matrice & la Banque des Territoires"
    : "Two-year journey: from hackathon to prototype, with Matrice & Banque des Territoires";

  return (
    <div>
      <Navigation />

      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={sonorHero}
          alt="SONOR hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">{title}</h1>
          <p className="text-lg md:text-xl text-white/90">{subtitle}</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <FilterChips
          chips={audiences}
          activeChip={activeAudience}
          onChipChange={setActiveAudience}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-16">
        {getContent()}
      </div>

      <Footer
        siteName="Ivan de Murard"
        tagline={language === 'fr' 
          ? "Product Designer & Manager créant des expériences centrées sur l'utilisateur"
          : "Product Designer & Manager crafting user-centered experiences"
        }
        sections={[{ id: "home", label: language === 'fr' ? "Retour au Portfolio" : "Back to Portfolio" }]}
        onSectionClick={() => navigate("/")}
      />
    </div>
  );
}
