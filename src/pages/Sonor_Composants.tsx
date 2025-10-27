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
export const ExpandSection = ({ 
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

// ============= COMPOSANT BANDEAU AUDIO =============
export const BandeauAudio = ({ language }: { language: string }) => {
  return (
    <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 md:p-6">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
            <Volume2 className="w-6 h-6 text-accent" />
          </div>
        </div>
        <div className="flex-1">
          <p className="font-semibold text-base mb-2">
            {language === 'fr' 
              ? "Pas le temps de lire ? Écoutez le résumé (4 min)" 
              : "No time to read? Listen to the summary (4 min)"}
          </p>
          <audio controls className="w-full">
            <source src="/audio/sonor-resume.mp3" type="audio/mpeg" />
            {language === 'fr' 
              ? "Votre navigateur ne supporte pas l'élément audio." 
              : "Your browser does not support the audio element."}
          </audio>
        </div>
      </div>
    </div>
  );
};

// ============= COMPOSANT TABS APPROFONDIES =============
export const TabsApprofondir = ({ language }: { language: string }) => {
  const [activeTab, setActiveTab] = useState<'pm' | 'design' | 'gtm'>('pm');
  
  const tabs = {
    pm: language === 'fr' ? 'Process PM' : 'PM Process',
    design: language === 'fr' ? 'Design & Prototype' : 'Design & Prototype',
    gtm: language === 'fr' ? 'Go-to-market B2G' : 'B2G Go-to-market'
  };

  return (
    <div className="space-y-8">
      {/* Tabs navigation */}
      <div className="flex gap-2 border-b border-border overflow-x-auto">
        {Object.entries(tabs).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key as 'pm' | 'design' | 'gtm')}
            className={`px-6 py-3 font-semibold whitespace-nowrap transition-colors ${
              activeTab === key
                ? 'border-b-2 border-accent text-accent'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tabs content */}
      <div className="min-h-[400px]">
        {activeTab === 'pm' && <TabProcessPM language={language} />}
        {activeTab === 'design' && <TabDesign language={language} />}
        {activeTab === 'gtm' && <TabGTM language={language} />}
      </div>
    </div>
  );
};

// ============= TAB PROCESS PM =============
const TabProcessPM = ({ language }: { language: string }) => {
  if (language === 'fr') {
    return (
      <div className="space-y-8">
        <section className="space-y-4">
          <h3 className="text-h4">Discovery approfondie</h3>
          <p>
            Phase cruciale de 3 mois (Oct. 2020 - Janv. 2021) avec <b>20+ entretiens qualitatifs</b> auprès de :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><b>Collectivités territoriales</b> : élus, chargés de mission environnement, responsables open data</li>
            <li><b>Acteurs privés</b> : promoteurs immobiliers, bailleurs sociaux (CDC Habitat, Icade, OGIC)</li>
            <li><b>Ministères et institutions</b> : Ministère de l'Écologie, Banque des Territoires</li>
            <li><b>Experts techniques</b> : BruitParif, CSTB, CNRS, Qualitel</li>
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
                <b>Capteurs IoT propriétaires</b> : Impact technologique + temps développement trop important. 
                Volonté de bypasser l'usage de capteurs en valorisant l'information citoyenne via l'open data.
              </li>
              <li><b>Module prédiction météo sonore</b> : Complexité technique excessive pour MVP</li>
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
                Manque de données ouvertes fiables et standardisées sur la pollution sonore. 
                Nécessité de normaliser les sources hétérogènes.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border-l-4 border-destructive">
              <h4 className="font-semibold mb-2">Complexité technique sous-estimée</h4>
              <p className="text-sm">
                Difficulté d'accès et de traitement des données de qualité exploitable. 
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
          Critical 3-month phase (Oct. 2020 - Jan. 2021) with <b>20+ qualitative interviews</b> with:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><b>Local authorities</b>: elected officials, environmental officers, open data managers</li>
          <li><b>Private sector</b>: real estate developers, social housing bodies (CDC Habitat, Icade, OGIC)</li>
          <li><b>Ministries and institutions</b>: Ministry of Ecology, Banque des Territoires</li>
          <li><b>Technical experts</b>: BruitParif, CSTB, CNRS, Qualitel</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-h4">JTBD Methodology (Jobs-to-be-Done)</h3>
        <p>Analysis of public decision-makers' tasks to identify <i>functional jobs</i>:</p>
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
  if (language === 'fr') {
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
              <h4 className="font-semibold mb-2">Version 4 : Marque blanche Issy (Mars 2021)</h4>
              <p className="text-sm">Prototype spécifique Issy-les-Moulineaux, intégration portail open data</p>
            </div>
            <div className="p-4 rounded-lg bg-card">
              <h4 className="font-semibold mb-2">Version 5 : Prototype codé (Avril 2021)</h4>
              <p className="text-sm">Web component fonctionnel développé pour Banque des Territoires</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-h4">Marque blanche Issy-les-Moulineaux</h3>
          <p>
            Suite au feedback d'Issy-les-Moulineaux : <i>"Votre solution nous intéresse, mais nous ne pouvons pas 
            renvoyer nos citoyens vers un site externe. Il faudrait que ce soit intégrable à notre portail open-data."</i>
          </p>
          <p>
            Décision de pivoter vers un composant en marque blanche, reprise complète de la direction artistique 
            de la collectivité (couleurs, typographie, logo).
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Intégration portail "Environnements Sonores" ville d'Issy</li>
            <li>Formulaire dépôt alerte citoyen avec géolocalisation</li>
            <li>Quiz sensibilisation pollution sonore</li>
            <li>Suivi actions mairie en temps réel</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-h4">Cartographie open data</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg p-4 bg-card">
              <h4 className="font-semibold mb-1">Palette perceptive</h4>
              <p className="text-sm text-muted-foreground">Focus zones chaudes, contraste élevé</p>
            </div>
            <div className="rounded-lg p-4 bg-card">
              <h4 className="font-semibold mb-1">Indicateurs prioritaires</h4>
              <p className="text-sm text-muted-foreground">Heures, axes, hotspots identifiés</p>
            </div>
            <div className="rounded-lg p-4 bg-card">
              <h4 className="font-semibold mb-1">Parcours décideur</h4>
              <p className="text-sm text-muted-foreground">De la carte à l'action (scénarios intervention)</p>
            </div>
            <div className="rounded-lg p-4 bg-card">
              <h4 className="font-semibold mb-1">UI sobre</h4>
              <p className="text-sm text-muted-foreground">Mise en avant données publiques</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-h4">Design system</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><b>Typographie</b> : Inter (interface), Source Sans Pro (contenus)</li>
            <li><b>Couleurs</b> : Palette modulaire adaptable à charte collectivité</li>
            <li><b>Composants</b> : Cartographie, dashboard, formulaires, alertes</li>
            <li><b>Grille</b> : 12 colonnes responsive (mobile, tablet, desktop)</li>
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
            <h4 className="font-semibold mb-2">Version 4: Issy white label (March 2021)</h4>
            <p className="text-sm">Issy-les-Moulineaux specific prototype, open data portal integration</p>
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

// ============= TAB GO-TO-MARKET B2G =============
const TabGTM = ({ language }: { language: string }) => {
  if (language === 'fr') {
    return (
      <div className="space-y-8">
        <section className="space-y-4">
          <h3 className="text-h4">3 stratégies commerciales (phases progressives)</h3>
          
          <ExpandSection id="phase-1-gtm" title="Phase 1 : Exploration large (tous secteurs)" defaultOpen={true}>
            <p className="mb-2"><b>Période</b> : Oct. 2020 - Janv. 2021 (3 mois)</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Promoteurs immobiliers</li>
              <li>Bailleurs sociaux (CDC Habitat, Icade, OGIC)</li>
              <li>Collectivités (première approche)</li>
            </ul>
            <p className="mt-2 italic">→ Pivot vers les collectivités après identification du meilleur product-market fit</p>
          </ExpandSection>

          <ExpandSection id="phase-2-gtm" title="Phase 2 : Collectivités sensibilisées à la donnée">
            <p className="mb-2"><b>Période</b> : Fév. - Avril 2021 (3 mois)</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Villes ayant une culture open data établie</li>
              <li>Métropoles avec services environnement structurés</li>
            </ul>
          </ExpandSection>

          <ExpandSection id="phase-3-gtm" title="Phase 3 : Ciblage affiné (appétence data + culture innovation)">
            <p className="mb-2"><b>Période</b> : Mai 2021 - Mars 2022 (10 mois)</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Contact direct LinkedIn avec élus et chargés de mission</li>
              <li>Collectivités déjà engagées dans démarches smart city</li>
            </ul>
            <p className="mt-2 italic">→ Meilleurs résultats en phase 3</p>
          </ExpandSection>
        </section>

        <section className="space-y-4">
          <h3 className="text-h4">Process de vente (5 étapes)</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <b>Qualification initiale</b> : Recherche LinkedIn + analyse publications open data collectivité
            </li>
            <li>
              <b>Premier contact</b> : Email personnalisé présentant proposition valeur adaptée enjeux locaux
            </li>
            <li>
              <b>Relances</b> : Téléphone, échanges visios pour qualifier besoin
            </li>
            <li>
              <b>Entretien physique</b> : Présentation personnalisée solution Sonor et besoins spécifiques collectivité
            </li>
            <li>
              <b>Propale commerciale</b> : Rédaction proposition adaptée (marché gré-à-gré, montants &lt;40k€)
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h3 className="text-h4">Obstacles par ville</h3>
          
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-card border-l-4 border-destructive">
              <h4 className="font-semibold mb-2">Paris 15e arrondissement</h4>
              <p className="text-sm">
                <b>Obstacle</b> : Validation propale interne (compétence Ville de Paris, pas arrondissement) 
                + budget expérimentation → financements épuisés avant décision. <b>Timing fatal.</b>
              </p>
            </div>

            <div className="p-4 rounded-lg bg-card border-l-4 border-destructive">
              <h4 className="font-semibold mb-2">Arras</h4>
              <p className="text-sm">
                <b>Obstacle</b> : Ville intéressée, mais trop tôt : pas de plateforme fonctionnelle, 
                manque ressources dev. Besoin prototype codé pour convaincre.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-card border-l-4 border-accent">
              <h4 className="font-semibold mb-2">Issy-les-Moulineaux</h4>
              <p className="text-sm">
                <b>Insight clé</b> : "Votre solution nous intéresse, mais nous ne pouvons pas renvoyer 
                nos citoyens vers un site externe. Il faudrait que ce soit intégrable à notre portail open-data."
                <br />→ Pivot vers marque blanche
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-h4">Taux de conversion (funnel global)</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <div className="w-32 text-right font-bold text-2xl">20+</div>
              <div className="flex-1 h-8 bg-accent/20 rounded-lg flex items-center px-4">
                Villes contactées
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-right font-bold text-2xl">4-5</div>
              <div className="flex-1 h-8 bg-accent/40 rounded-lg flex items-center px-4">
                Échanges constructifs
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-right font-bold text-2xl">2</div>
              <div className="flex-1 h-8 bg-accent/60 rounded-lg flex items-center px-4">
                Propales commerciales
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-right font-bold text-2xl text-destructive">0</div>
              <div className="flex-1 h-8 bg-destructive/20 rounded-lg flex items-center px-4">
                Signatures (timing + complexité technique)
              </div>
            </div>
          </div>
          <p className="text-sm italic mt-3">
            Note : Le funnel ne contient pas les chiffres LinkedIn (phase 3), où les résultats étaient meilleurs.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-h4">Insights post-mortem</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <b>Cycles B2G longs (12-18 mois)</b> : Sans MVP fonctionnel, difficile de convaincre 
              avant épuisement ressources
            </li>
            <li>
              <b>Importance du prototype codé</b> : Les démos Figma ne suffisent pas pour obtenir budget expérimentation
            </li>
            <li>
              <b>Segmentation par appétence data</b> : Plus efficace que segmentation par taille de collectivité
            </li>
            <li>
              <b>Accompagnement BdT/Matrice</b> : Décisif pour crédibilité et accès au réseau
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
        <h3 className="text-h4">3 Commercial Strategies (progressive phases)</h3>
        
        <ExpandSection id="phase-1-gtm-en" title="Phase 1: Broad exploration (all sectors)" defaultOpen={true}>
          <p className="mb-2"><b>Period</b>: Oct. 2020 - Jan. 2021 (3 months)</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Real estate developers</li>
            <li>Social housing bodies (CDC Habitat, Icade, OGIC)</li>
            <li>Municipalities (first approach)</li>
          </ul>
          <p className="mt-2 italic">→ Pivot to municipalities after identifying best product-market fit</p>
        </ExpandSection>

        <ExpandSection id="phase-2-gtm-en" title="Phase 2: Data-aware municipalities">
          <p className="mb-2"><b>Period</b>: Feb. - April 2021 (3 months)</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Cities with established open data culture</li>
            <li>Metropolises with structured environment services</li>
          </ul>
        </ExpandSection>

        <ExpandSection id="phase-3-gtm-en" title="Phase 3: Refined targeting (data appetite + innovation culture)">
          <p className="mb-2"><b>Period</b>: May 2021 - March 2022 (10 months)</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Direct LinkedIn contact with elected officials and mission officers</li>
            <li>Municipalities already engaged in smart city initiatives</li>
          </ul>
          <p className="mt-2 italic">→ Best results in phase 3</p>
        </ExpandSection>
      </section>

      <section className="space-y-4">
        <h3 className="text-h4">Conversion Rate (global funnel)</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <div className="w-32 text-right font-bold text-2xl">20+</div>
            <div className="flex-1 h-8 bg-accent/20 rounded-lg flex items-center px-4">
              Cities contacted
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 text-right font-bold text-2xl">4-5</div>
            <div className="flex-1 h-8 bg-accent/40 rounded-lg flex items-center px-4">
              Constructive exchanges
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 text-right font-bold text-2xl">2</div>
            <div className="flex-1 h-8 bg-accent/60 rounded-lg flex items-center px-4">
              Commercial proposals
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 text-right font-bold text-2xl text-destructive">0</div>
            <div className="flex-1 h-8 bg-destructive/20 rounded-lg flex items-center px-4">
              Signatures (timing + technical complexity)
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
