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
            Phase cruciale de 3 mois (Oct. 2020 - Dec. 2021) avec <b>20+ entretiens qualitatifs</b> auprès de :
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
                <b>Capteurs IoT propriétaires</b> : Impact technologique + temps de développement trop important. 
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
            <li><b>Couleurs</b> : Palette graphique sobre (bleus, gris, vert éco)</li>
            <li><b>Typographie</b> : Open Sans (lisibilité cartes + UI technique)</li>
            <li><b>Icônes</b> : Material Design (universalité B2G)</li>
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

// ============= TAB GTM (Go-To-Market) =============
const TabGTM = ({ language }: { language: string }) => {
  if (language === 'fr') {
    return (
      <div className="space-y-8">
        <section className="space-y-4">
          <h3 className="text-h4">Stratégie Go-To-Market</h3>
          <p className="text-sm">
            Approche B2G (Business-to-Government) centrée sur la validation du besoin auprès des 
            collectivités territoriales et institutions publiques.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-h4">Segmentation & Ciblage</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-card">
              <h4 className="font-semibold mb-2">Cible Primaire</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Collectivités moyennes (50-200k habitants)</li>
                <li>Forte appétence data & open data</li>
                <li>Élus sensibles environnement</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-card">
              <h4 className="font-semibold mb-2">Cible Secondaire</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Grandes métropoles ({'>'}200k habitants)</li>
                <li>Ministères & établissements publics</li>
                <li>Bailleurs sociaux & promoteurs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-h4">Canaux d'Acquisition</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><b>Partenariat BdT/Matrice</b> : Accès au réseau collectivités, crédibilité institutionnelle</li>
            <li><b>Salons & événements</b> : Présence sur Smart Cities, Pollutec, assises territoires</li>
            <li><b>Démo & POC</b> : Prototypes codés permettant tests terrain avec collectivités pilotes</li>
            <li><b>Content marketing</b> : Articles techniques sur open data, cartographie, réglementation PPBE</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-h4">Modèle Économique</h3>
          <p className="text-sm">
            <b>SaaS B2G</b> avec tarification par collectivité (licence annuelle basée sur nombre d'habitants) + 
            services d'accompagnement (formation, support, personnalisation).
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-h4">Apprentissages GTM</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><b>Cycles de vente B2G longs (6+ mois)</b> : Budget, validation politique, conformité RGPD</li>
            <li><b>Importance du prototype fonctionnel</b> : Démo codée {'>'}  Figma pour conviction décideurs</li>
            <li><b>Partenariats institutionnels décisifs</b> : BdT/Matrice = accélérateur crédibilité + réseau</li>
            <li><b>Segmentation par appétence data</b> : Plus efficace que segmentation par taille de collectivité</li>
          </ul>
        </section>
      </div>
    );
  }

  // English version
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h3 className="text-h4">Go-To-Market Strategy</h3>
        <p className="text-sm">
          B2G (Business-to-Government) approach focused on validating needs with 
          local authorities and public institutions.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-h4">Segmentation & Targeting</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-card">
            <h4 className="font-semibold mb-2">Primary Target</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Medium-sized municipalities (50-200k inhabitants)</li>
              <li>Strong data & open data appetite</li>
              <li>Environment-conscious elected officials</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card">
            <h4 className="font-semibold mb-2">Secondary Target</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Large metropolitan areas ({'>'}200k inhabitants)</li>
              <li>Ministries & public institutions</li>
              <li>Social housing & real estate developers</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-h4">Acquisition Channels</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><b>BdT/Matrice Partnership</b>: Access to municipality network, institutional credibility</li>
          <li><b>Trade shows & events</b>: Presence at Smart Cities, Pollutec, territorial conferences</li>
          <li><b>Demos & POC</b>: Coded prototypes enabling field tests with pilot municipalities</li>
          <li><b>Content marketing</b>: Technical articles on open data, mapping, PPBE regulations</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-h4">Business Model</h3>
        <p className="text-sm">
          <b>B2G SaaS</b> with per-municipality pricing (annual license based on population) + 
          support services (training, support, customization).
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-h4">GTM Learnings</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><b>Long B2G sales cycles (6+ months)</b>: Budget, political validation, GDPR compliance</li>
          <li><b>Importance of functional prototype</b>: Coded demo {'>'} Figma for decision-maker conviction</li>
          <li><b>Institutional partnerships crucial</b>: BdT/Matrice = credibility + network accelerator</li>
          <li><b>Segmentation by data appetite</b>: More effective than segmentation by municipality size</li>
        </ul>
      </section>
    </div>
  );
};
