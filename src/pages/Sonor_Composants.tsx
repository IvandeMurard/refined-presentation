// src/pages/Sonor_Composants.tsx
// FICHIER 1/4 : Composants réutilisables pour le case study SONOR
// Version conforme aux spécifications validées
// Chiffres corrigés : 20+ entretiens, 4 co-fondateurs (dont 1 dev/data-scientist à mi-temps)

import React, { useState } from "react";
import { InlineExpand } from "@/components/InlineExpand";
import { Plus, Volume2 } from "lucide-react";

// ============= COMPOSANT TERM EXPLAIN =============
export const TermExplain = ({ term, children }: { term: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const id = `term-${term.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <span className="inline-block relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        className="
          relative inline-flex items-center gap-1
          text-foreground font-medium
          underline decoration-dotted decoration-accent/50 underline-offset-4
          hover:decoration-accent hover:text-accent
          transition-all duration-200
          cursor-help
        "
      >
        {term}
        <Plus className="w-3.5 h-3.5 opacity-60" />
      </button>

      <InlineExpand open={open} ariaId={id}>
        <div
          id={`${id}-panel`}
          className="
            absolute z-50 left-0 top-full mt-2
            min-w-[280px] max-w-[400px]
            p-4 rounded-xl
            bg-card/95 backdrop-blur-md
            border border-accent/30
            shadow-2xl
          "
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
              <Plus className="w-4 h-4 text-accent" />
            </div>
            <div className="flex-1">
              <strong className="block text-sm font-semibold text-accent mb-1">{term}</strong>
              <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
            </div>
          </div>
        </div>
      </InlineExpand>
    </span>
  );
};

// ============= COMPOSANT SECTION EXPANDABLE =============
export const ExpandSection = ({
  id,
  title,
  children,
  defaultOpen = false,
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
        <h4 className="font-semibold text-base md:text-lg group-hover:underline underline-offset-4">{title}</h4>
        <Plus className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-45" : ""}`} aria-hidden="true" />
      </button>
      <InlineExpand open={open} ariaId={id}>
        <div id={`${id}-panel`} className="pt-2 space-y-3 text-sm text-muted-foreground">
          {children}
        </div>
      </InlineExpand>
    </div>
  );
};

// ============= COMPOSANT BANDEAU AUDIO =============
export const BandeauAudio = ({ language }: { language: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const handleButtonClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      setTimeout(() => {
        audioRef.current?.play();
      }, 300);
    } else {
      if (isPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play();
      }
    }
  };

  const handleClose = () => {
    audioRef.current?.pause();
    setIsExpanded(false);
  };

  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  if (!isExpanded) {
    // Initial button state
    return (
      <div id="audio-section" className="flex justify-center my-8">
        <button
          onClick={handleButtonClick}
          aria-label={language === "fr" ? "Écouter le résumé audio" : "Listen to audio summary"}
          className="
            inline-flex items-center gap-3 px-6 py-3
            bg-white/10 backdrop-blur-md border border-white/20
            rounded-full
            hover:bg-white/20 hover:scale-105
            transition-all duration-300
            text-foreground
          "
        >
          <Volume2 className="w-5 h-5" />
          <span className="font-medium">
            {language === "fr" 
              ? "Écouter le résumé (4 min)" 
              : "Listen to summary (4 min)"}
          </span>
        </button>
      </div>
    );
  }

  // Sticky player state
  return (
    <>
      <audio ref={audioRef} className="hidden">
        <source src="/medianesrineexcerpt.mp3" type="audio/mpeg" />
      </audio>
      
      <div
        className="
          fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:w-96
          z-50
          rounded-2xl p-4
          bg-card/95 backdrop-blur-md
          border border-accent/30
          shadow-2xl
          animate-slide-in-right
        "
      >
        <div className="flex items-center gap-3">
          <button
            onClick={handleButtonClick}
            aria-label={isPlaying ? "Pause" : "Play"}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/30 flex items-center justify-center transition-colors"
          >
            <Volume2 className={`w-5 h-5 text-accent ${isPlaying ? "animate-pulse" : ""}`} />
          </button>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate">
              {language === "fr" ? "Résumé audio" : "Audio summary"}
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{isPlaying ? "En cours..." : "En pause"}</span>
              <span>•</span>
              <span>4 min</span>
            </div>
          </div>
          
          <button
            onClick={handleClose}
            aria-label={language === "fr" ? "Fermer" : "Close"}
            className="flex-shrink-0 w-8 h-8 rounded-full hover:bg-accent/20 flex items-center justify-center transition-colors"
          >
            <Plus className="w-4 h-4 rotate-45" />
          </button>
        </div>
      </div>
    </>
  );
};

// ============= COMPOSANT TABS APPROFONDIES =============
export const TabsApprofondir = ({ language }: { language: string }) => {
  const [activeTab, setActiveTab] = useState<"pm" | "design">("pm");

  const tabs = {
    pm: language === "fr" ? "Process PM" : "PM Process",
    design: language === "fr" ? "Design & Prototype" : "Design & Prototype",
  };

  return (
    <div className="space-y-8">
      {/* Tabs navigation */}
      <div className="flex gap-2 border-b border-border overflow-x-auto">
        {Object.entries(tabs).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key as "pm" | "design")}
            className={`px-6 py-3 font-semibold whitespace-nowrap transition-colors ${
              activeTab === key ? "border-b-2 border-accent text-accent" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tabs content */}
      <div className="min-h-[400px]">
        {activeTab === "pm" && <TabProcessPM language={language} />}
        {activeTab === "design" && <TabDesign language={language} />}
      </div>
    </div>
  );
};

// ============= TAB PROCESS PM =============
const TabProcessPM = ({ language }: { language: string }) => {
  if (language === "fr") {
    return (
      <div className="space-y-8">
        <section className="space-y-4">
          <h3 className="text-h4">Discovery approfondie</h3>
          <p>
            Phase cruciale de 3 mois (Oct. 2020 - Dec. 2021) avec <b>20+ entretiens qualitatifs</b> auprès de :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <b>Collectivités territoriales</b> : élus, chargés de mission environnement, responsables open data
            </li>
            <li>
              <b>Acteurs privés</b> : promoteurs immobiliers, bailleurs sociaux (CDC Habitat, Icade, OGIC)
            </li>
            <li>
              <b>Ministères et institutions</b> : Ministère de l'Écologie, Banque des Territoires
            </li>
            <li>
              <b>Experts techniques</b> : BruitParif, CSTB, CNRS, Qualitel
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-h4">Méthodologie JTBD (Jobs-to-be-Done)</h3>
          <p>
            Analyse des tâches des décideurs publics pour identifier les <i>jobs fonctionnels</i> :
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-card">
              <h4 className="font-semibold mb-2">Job 1 : Cartographier</h4>
              <p className="text-sm">Identifier les zones à risque pour prioriser les interventions</p>
            </div>
            <div className="p-4 rounded-lg bg-card">
              <h4 className="font-semibold mb-2">Job 2 : Agir</h4>
              <p className="text-sm">Recommandations actions publiques concrètes et chiffrées</p>
            </div>
            <div className="p-4 rounded-lg bg-card">
              <h4 className="font-semibold mb-2">Job 3 : Communiquer</h4>
              <p className="text-sm">Sensibiliser citoyens et rendre compte actions menées</p>
            </div>
            <div className="p-4 rounded-lg bg-card">
              <h4 className="font-semibold mb-2">Job 4 : Se conformer</h4>
              <p className="text-sm">Respecter obligations réglementaires (PPBE, cartographie)</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-h4">Priorisation MoSCoW</h3>
          <ExpandSection id="must-have" title="Must Have (MVP)" defaultOpen={true}>
            <ul className="list-disc pl-5 space-y-1">
              <li>Cartographie pollution sonore (heatmap)</li>
              <li>Indicateurs dB jour/nuit</li>
              <li>Identification points noirs</li>
              <li>Export données (CSV, PDF)</li>
            </ul>
          </ExpandSection>

          <ExpandSection id="should-have" title="Should Have (Phase 2)">
            <ul className="list-disc pl-5 space-y-1">
              <li>Recommandations actions publiques automatisées</li>
              <li>Suivi réglementaire (conformité PPBE)</li>
              <li>Dashboard décideur personnalisable</li>
            </ul>
          </ExpandSection>

          <ExpandSection id="could-have" title="Could Have (Priorisation future)">
            <ul className="list-disc pl-5 space-y-1">
              <li>Module communication citoyenne automatisée</li>
              <li>Dashboard analytics avancé pour élus</li>
              <li>Intégration systèmes SIG existants</li>
            </ul>
          </ExpandSection>

          <ExpandSection id="wont-have" title="Won't Have (Écartés)">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <b>Capteurs IoT propriétaires</b> : Impact technologique + temps de développement trop important.
                Volonté de bypasser l'usage de capteurs en valorisant l'information citoyenne via l'open data.
              </li>
              <li>
                <b>Module prédiction météo sonore</b> : Complexité technique excessive pour MVP
              </li>
            </ul>
          </ExpandSection>
        </section>

        <section className="space-y-4">
          <h3 className="text-h4">Sprints & cadences</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <b>Sprints 2–3 semaines</b> : Cycles courts pour itérer rapidement sur prototype et hypothèses business
            </li>
            <li>
              <b>6+ jalons mensuels</b> : Restitutions avec mentors (Banque des Territoires, Matrice)
            </li>
            <li>
              <b>Reporting financier</b> : Suivi dépenses et jalons de financement
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-h4">Obstacles rencontrés</h3>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-card border-l-4 border-destructive">
              <h4 className="font-semibold mb-2">Disponibilité données open data</h4>
              <p className="text-sm">
                Manque de données ouvertes fiables et standardisées sur la pollution sonore. Nécessité de normaliser les
                sources hétérogènes.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border-l-4 border-destructive">
              <h4 className="font-semibold mb-2">Complexité technique sous-estimée</h4>
              <p className="text-sm">
                Difficulté d'accès et de traitement des données de qualité en une cartographie exploitable.
                Ralentissement développement prototype.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // English version
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h3 className="text-h4">In-depth Discovery</h3>
        <p>
          Critical 3-month phase (Oct. 2020 - Dec. 2021) with <b>20+ qualitative interviews</b> with:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <b>Local authorities</b>: elected officials, environmental officers, open data managers
          </li>
          <li>
            <b>Private sector</b>: real estate developers, social housing bodies (CDC Habitat, Icade, OGIC)
          </li>
          <li>
            <b>Ministries and institutions</b>: Ministry of Ecology, Banque des Territoires
          </li>
          <li>
            <b>Technical experts</b>: BruitParif, CSTB, CNRS, Qualitel
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-h4">JTBD Methodology (Jobs-to-be-Done)</h3>
        <p>
          Analysis of public decision-makers' tasks to identify <i>functional jobs</i>:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-card">
            <h4 className="font-semibold mb-2">Job 1: Map</h4>
            <p className="text-sm">Identify risk zones to prioritize interventions</p>
          </div>
          <div className="p-4 rounded-lg bg-card">
            <h4 className="font-semibold mb-2">Job 2: Act</h4>
            <p className="text-sm">Concrete and quantified public action recommendations</p>
          </div>
          <div className="p-4 rounded-lg bg-card">
            <h4 className="font-semibold mb-2">Job 3: Communicate</h4>
            <p className="text-sm">Raise citizen awareness and report on actions taken</p>
          </div>
          <div className="p-4 rounded-lg bg-card">
            <h4 className="font-semibold mb-2">Job 4: Comply</h4>
            <p className="text-sm">Meet regulatory obligations (PPBE, mapping)</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-h4">MoSCoW Prioritization</h3>
        <ExpandSection id="must-have-en" title="Must Have (MVP)" defaultOpen={true}>
          <ul className="list-disc pl-5 space-y-1">
            <li>Noise pollution mapping (heatmap)</li>
            <li>Day/night dB indicators</li>
            <li>Hotspot identification</li>
            <li>Data export (CSV, PDF)</li>
          </ul>
        </ExpandSection>

        <ExpandSection id="should-have-en" title="Should Have (Phase 2)">
          <ul className="list-disc pl-5 space-y-1">
            <li>Automated public action recommendations</li>
            <li>Regulatory monitoring (PPBE compliance)</li>
            <li>Customizable decision-maker dashboard</li>
          </ul>
        </ExpandSection>
      </section>
    </div>
  );
};

// ============= TAB DESIGN & PROTOTYPE =============
const TabDesign = ({ language }: { language: string }) => {
  if (language === "fr") {
    return (
      <div className="space-y-8">
        <section className="space-y-4">
          <h3 className="text-h4">Évolution des prototypes (5 versions)</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-card">
              <h4 className="font-semibold mb-2">Version 1 : Hackathon (Oct. 2020)</h4>
              <p className="text-sm">Prototype Figma initial, focus cartographie simple, branding Sonor</p>
            </div>
            <div className="p-4 rounded-lg bg-card">
              <h4 className="font-semibold mb-2">Version 2 : Post-discovery (Janv. 2021)</h4>
              <p className="text-sm">Ajout recommandations actions, suivi réglementaire, dashboard décideur</p>
            </div>
            <div className="p-4 rounded-lg bg-card">
              <h4 className="font-semibold mb-2">Version 3 : Marque blanche (Fév. 2021)</h4>
              <p className="text-sm">Pivot vers composant intégrable, reprise charte graphique collectivité</p>
            </div>
            <div className="p-4 rounded-lg bg-card">
              <h4 className="font-semibold mb-2">Version 4 : Marque blanche spécifique (Mars 2021)</h4>
              <p className="text-sm">Prototype spécifique d'une ville, intégration portail open data</p>
            </div>
            <div className="p-4 rounded-lg bg-card">
              <h4 className="font-semibold mb-2">Version 5 : Prototype codé (Avril 2021)</h4>
              <p className="text-sm">Web component fonctionnel développé pour Banque des Territoires</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-h4">Design System</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <b>Couleurs</b> : Palette graphique sobre (bleus, gris, vert éco)
            </li>
            <li>
              <b>Typographie</b> : Open Sans (lisibilité cartes + UI technique)
            </li>
            <li>
              <b>Icônes</b> : Material Design (universalité B2G)
            </li>
            <li>
              <b>Grille</b> : 12 colonnes responsive (mobile, tablet, desktop)
            </li>
          </ul>
        </section>
      </div>
    );
  }

  // English version
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h3 className="text-h4">Prototype Evolution (5 versions)</h3>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-card">
            <h4 className="font-semibold mb-2">Version 1: Hackathon (Oct. 2020)</h4>
            <p className="text-sm">Initial Figma prototype, simple mapping focus, Sonor branding</p>
          </div>
          <div className="p-4 rounded-lg bg-card">
            <h4 className="font-semibold mb-2">Version 2: Post-discovery (Jan. 2021)</h4>
            <p className="text-sm">Added action recommendations, regulatory monitoring, decision-maker dashboard</p>
          </div>
          <div className="p-4 rounded-lg bg-card">
            <h4 className="font-semibold mb-2">Version 3: White label (Feb. 2021)</h4>
            <p className="text-sm">Pivot to integrable component, municipality branding adoption</p>
          </div>
          <div className="p-4 rounded-lg bg-card">
            <h4 className="font-semibold mb-2">Version 4: Specific white label (March 2021)</h4>
            <p className="text-sm">Specific prototype, open data portal integration</p>
          </div>
          <div className="p-4 rounded-lg bg-card">
            <h4 className="font-semibold mb-2">Version 5: Coded prototype (April 2021)</h4>
            <p className="text-sm">Functional web component developed for Banque des Territoires</p>
          </div>
        </div>
      </section>
    </div>
  );
};
