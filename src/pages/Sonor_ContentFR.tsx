// src/pages/Sonor_ContentFR.tsx
// FICHIER 2/4 : Contenu français complet pour le case study SONOR
// Version conforme aux spécifications validées - Chiffres corrigés

import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import CaseTldr from "@/components/case/CaseTldr";
import { CaseImage } from "@/components/case/CaseImage";
import { CTABanner } from "@/components/work/CTABanner";
import { ExternalLink } from "lucide-react";
import { 
  TermExplain, 
  ExpandSection, 
  BandeauAudio, 
  TabsApprofondir 
} from "./Sonor_Composants";

// ============= TL;DR BLOCK FR =============
export const TLDRBlockFR = () => (
  <CaseTldr
    tone="wttj"
    title="TL;DR — En bref"
    items={[
      <>
        <b>Contexte :</b> Hackathon Recoder l'Habitat #2 (gagnant) → incubation Matrice & Banque des Territoires (2020-2022)
      </>,
      <>
        <b>Problème :</b> Pollution sonore (2e nuisance urbaine), invisible, impacts sanitaires réels
      </>,
      <>
        <b>Solution :</b> Offre 360° de plateforme SaaS <TermExplain term="open data">données publiques librement accessibles et réutilisables</TermExplain> avec cartographie, recommandations d'action publique, engagement citoyen (sensibilisation, communication)
      </>,
      <>
        <b>Équipe :</b> 4 co-fondateurs (Émilie, Majda, Benjamin, Ivan) dont 1 dev/data-scientist à mi-temps
      </>,
      <>
        <b>Mon rôle :</b> Product framing, <TermExplain term="discovery">phase de recherche utilisateur et marché approfondie</TermExplain> (20+ entretiens), 
        Prototypage (UX/UI Figma), Go-to-Market <TermExplain term="B2G">Business-to-Government, ventes aux collectivités publiques</TermExplain>, 
        Sales, Pilotage d'un développeur data-scientist
      </>,
      <>
        <b>Durée & méthode :</b> 2 ans / Agile Lean, sprints Kanban 2-3 semaines, 6+ jalons mensuels (restitutions partenaires)
      </>,
      <>
        <b>Résultats :</b><br />
        • 20 000€ financements (2 bourses)<br />
        • 20+ entretiens qualitatifs<br />
        • 3 versions prototype Figma + 1 version codée<br />
        • Négociations avec métropoles régionales, villes moyennes, collectivités territoriales, acteurs publics locaux
      </>,
      <>
        <b>Pivot clé :</b> Promoteurs/acheteurs → Collectivités (après 3 mois discovery acteurs privés)
      </>,
      <>
        <b>Go-to-market :</b> 20+ villes contactées → 4-5 échanges constructifs → 2 propales commerciales → 0 signature (timing + complexité technique)
      </>,
      <>
        <b>Fin du projet :</b> Complexité technique sous-estimée + cycles de vente B2G longs (12-18 mois) → épuisement financements avant 1ère signature
      </>,
      <>
        <b>Apprentissages :</b> Focus produit (1 <TermExplain term="MVP">Minimum Viable Product, version minimale testable du produit</TermExplain> &gt; offre 360°), importance prototype fonctionnel pour convaincre, communiquer avant d'être "prêt"
      </>,
    ]}
  />
);

// ============= CONTENT FR =============
export const ContentFR = () => {
  const navigate = useNavigate();
  const tabsRef = useRef<HTMLDivElement>(null);

  const scrollToTabs = () => {
    tabsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      {/* TL;DR */}
      <div className="mb-10">
        <TLDRBlockFR />
      </div>

      {/* BANDEAU AUDIO */}
      <div className="mb-10">
        <BandeauAudio language="fr" />
      </div>

      {/* ========== SECTION 1: CONTEXTUALISATION ========== */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-h3">Contextualisation : La pollution sonore</h2>

          {/* Chiffres clés */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-2xl">
              <div className="text-4xl font-extrabold mb-2">2e</div>
              <div className="text-muted-foreground">Source de nuisances urbaines en Europe (après pollution de l'air)</div>
            </div>
            <div className="bg-card p-6 rounded-2xl">
              <div className="text-4xl font-extrabold mb-2">25M</div>
              <div className="text-muted-foreground">Français exposés à des niveaux de bruit excessifs (ANSES 2021)</div>
            </div>
            <div className="bg-card p-6 rounded-2xl">
              <div className="text-4xl font-extrabold mb-2">156 Mds€/an</div>
              <div className="text-muted-foreground">Coût social du bruit en France (ADEME 2021)</div>
            </div>
          </div>

          {/* Article Nightingale */}
          <div className="p-6 rounded-lg bg-accent/10 border border-accent/20">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <ExternalLink className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-2">Noisy Cities : Behind the scenes avec Karim Douieb</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Découvrez la méthodologie de cartographie de la pollution sonore urbaine 
                  par Karim Douieb (Nightingale DVS), inspirante pour notre approche data-driven.
                </p>
                <a 
                  href="https://nightingaledvs.com/noisy-cities-behind-the-scenes-with-karim-douieb/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:underline"
                >
                  Lire l'article <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Noisy Cities Interactive */}
          <ExpandSection id="noisy-cities" title="Carte interactive : Noisy Cities Paris">
            <p className="mb-3">
              Explorez la carte interactive de la pollution sonore à Paris réalisée par Karim Douieb.
            </p>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <p className="text-sm text-muted-foreground">
                [Iframe carte interactive Noisy Cities Paris à intégrer]
              </p>
            </div>
          </ExpandSection>

          {/* Texte explicatif */}
          <section className="space-y-4">
            <p>
              <b>20% de la population européenne</b> est exposée à des niveaux de bruit nocturnes dangereux 
              pour la santé (Agence Européenne de l'Environnement, 2024).
            </p>
            <p>
              Les impacts sanitaires sont multiples : troubles du sommeil, stress chronique, 
              maladies cardiovasculaires, impacts cognitifs chez l'enfant.
            </p>
            <p>
              Contrairement à la pollution de l'air, le bruit reste <b>invisible</b> et <b>sous-adressé</b> 
              par les politiques publiques, malgré son coût social considérable.
            </p>
          </section>

          {/* Sources */}
          <div className="text-sm text-muted-foreground space-y-1">
            <p><b>Sources :</b></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>OMS Europe (2018) : Lignes directrices sur le bruit</li>
              <li>ANSES (2021) : 25M Français exposés</li>
              <li>ADEME (2021) : 156 Mds€/an coût social bruit</li>
              <li>Agence Européenne de l'Environnement (2024) : 20% population exposée</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ========== SECTION 2: TIMELINE ========== */}
      <div className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-h3">Timeline du projet</h2>
          
          <div className="space-y-6">
            {[
              { date: "Oct. 2020", title: "Hackathon", desc: "Victoire Recoder l'Habitat #2 → incubation Matrice/BdT" },
              { date: "Oct. 2020 - Janv. 2021", title: "Discovery", desc: "20+ entretiens, exploration acteurs privés" },
              { date: "Janv. 2021", title: "Pivot", desc: "Décision stratégique → focus collectivités" },
              { date: "Janv. - Avril 2021", title: "Prototype", desc: "3 versions Figma + évolution marque blanche" },
              { date: "Mai 2021 - Mars 2022", title: "Go-to-market", desc: "20+ villes, 2 propales, cycles longs" },
              { date: "Mars 2022", title: "Fin", desc: "Épuisement financements, 0 signature" },
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-32 text-right font-semibold text-accent">
                  {step.date}
                </div>
                <div className="flex-1 p-4 rounded-lg bg-card">
                  <h4 className="font-semibold mb-1">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========== SECTION 3: MOMENTS CLÉS ========== */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-h3">Moments clés</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Moment 1 */}
            <div className="p-6 rounded-lg bg-card border-l-4 border-accent">
              <h3 className="text-h4 mb-3">Pivot stratégique : Acteurs privés → Collectivités</h3>
              <p className="text-sm mb-3">
                <b>Contexte :</b> Après 3 mois d'exploration d'acteurs privés, présentation du 1er jalon.
              </p>
              <blockquote className="italic text-sm border-l-4 border-accent/30 pl-4 mb-3">
                "Les collectivités ont les compétences et les moyens d'agir durablement sur cette problématique. 
                Et nous avons le réseau pour vous accompagner."
                <footer className="text-xs mt-2">— Conseil Banque des Territoires / Matrice</footer>
              </blockquote>
              <p className="text-sm">
                <b>Décision :</b> Pivoter vers le marché public (villes, métropoles). 
                Débat interne : moins "sexy", processus longs, mais consensus : soutien BdT décisif.
              </p>
            </div>

            {/* Moment 2 */}
            <div className="p-6 rounded-lg bg-card border-l-4 border-destructive">
              <h3 className="text-h4 mb-3">L'insight qui a dilué le focus</h3>
              <p className="text-sm mb-3">
                <b>Contexte :</b> Discovery, entretiens élus et chargés de mission.
              </p>
              <blockquote className="italic text-sm border-l-4 border-destructive/30 pl-4 mb-3">
                "On aimerait surtout de l'accompagnement humain : communication sur nos actions, 
                sensibilisation des citoyens, identification des solutions terrain."
                <footer className="text-xs mt-2">— Collectivité</footer>
              </blockquote>
              <p className="text-sm">
                <b>Erreur :</b> Tentative de répondre aux 2 besoins (plateforme + accompagnement humain). 
                Résultat : Offre 360° floue, MVP jamais finalisé. 
                <br /><b>Learning :</b> Chasser un seul lièvre à la fois.
              </p>
            </div>

            {/* Moment 3 */}
            <div className="p-6 rounded-lg bg-card border-l-4 border-accent">
              <h3 className="text-h4 mb-3">De plateforme standalone à composant intégrable</h3>
              <p className="text-sm mb-3">
                <b>Contexte :</b> Présentation du prototype (branding Sonor) à une collectivité.
              </p>
              <blockquote className="italic text-sm border-l-4 border-accent/30 pl-4 mb-3">
                "Votre solution nous intéresse, mais nous ne pouvons pas renvoyer nos citoyens vers un site externe. 
                Il faudrait que ce soit intégrable à notre portail open-data."
                <footer className="text-xs mt-2"> </footer>
              </blockquote>
              <p className="text-sm">
                <b>Décision :</b> Pivot vers composant en marque blanche (reprise direction artistique collectivité). 
                Enjeu clé : <b>Souveraineté des données</b>.
              </p>
            </div>
              <p className="text-sm">
                <b>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========== SECTION 4: RÉSULTATS & IMPACT ========== */}
      <div className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-h3">Résultats & Impact</h2>

          {/* Chiffres clés */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-2xl">
              <div className="text-4xl font-extrabold mb-2">20 000 €</div>
              <div className="text-muted-foreground text-sm">Financements obtenus (3 bourses)</div>
            </div>
            <div className="bg-card p-6 rounded-2xl">
              <div className="text-4xl font-extrabold mb-2">20+</div>
              <div className="text-muted-foreground text-sm">Entretiens qualitatifs</div>
            </div>
            <div className="bg-card p-6 rounded-2xl">
              <div className="text-4xl font-extrabold mb-2">3+1</div>
              <div className="text-muted-foreground text-sm">Versions prototype (Figma + codé)</div>
            </div>
            <div className="bg-card p-6 rounded-2xl">
              <div className="text-4xl font-extrabold mb-2">8+</div>
              <div className="text-muted-foreground text-sm">Métropoles et villes rencontrées</div>
            </div>
          </div>

          {/* Galerie prototype */}
          <section className="space-y-4">
            <h3 className="text-h4">Galerie prototype</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <CaseImage
                alt="Dashboard cartographie Sonor"
                desktopSrc="/img/sonor_cartographie_dashboard.png"
                caption="Dashboard cartographie — Points noirs & indicateurs temps réel"
              />
              <CaseImage
                alt="Recommandations actions"
                desktopSrc="/img/sonor_recommandations.png"
                caption="Recommandations actionnables — Tâches priorisées par zone"
              />
              <CaseImage
                alt="Marque blanche Issy"
                desktopSrc="/img/sonor_issy_marque_blanche.png"
                caption="Intégration marque blanche — Issy-les-Moulineaux"
              />
              <CaseImage
                alt="Engagement citoyen"
                desktopSrc="/img/sonor_engagement_citoyen.png"
                caption="Engagement citoyen — Dépôt d'alerte qualifiée"
              />
            </div>
          </section>

          {/* Lien démo */}
          <div className="p-6 rounded-lg bg-accent/10 border border-accent/20">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h4 className="font-semibold mb-2">Prototype fonctionnel</h4>
                <p className="text-sm text-muted-foreground">
                  Explorez le prototype marque-blanche développé pour La Banque des Territoires
                </p>
              </div>
              <a
                href="https://byronbark.github.io/sonor-web-component/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
              >
                Ouvrir la démo <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Acteurs rencontrés */}
          <ExpandSection id="acteurs" title="Acteurs rencontrés">
            <p className="mb-2">
              <b>Collectivités :</b> Métropoles régionales, villes moyennes, collectivités territoriales, acteurs publics locaux
            </p>
            <p>
              <b>Experts/partenaires :</b> BruitParif, CSTB, CNRS, Qualitel, CDC Habitat, Icade, OGIC, Ministère de l'Écologie
            </p>
          </ExpandSection>
        </div>
      </div>

      {/* ========== SECTION 5: "VOUS VOULEZ APPROFONDIR ?" ========== */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-h3">Vous voulez approfondir ?</h2>
            <p className="text-muted-foreground">
              Découvrez les détails du process produit et du design
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={scrollToTabs}
              className="p-6 rounded-lg bg-card hover:bg-accent/10 border-2 border-transparent hover:border-accent transition-all cursor-pointer group"
            >
              <h3 className="text-h4 mb-2 group-hover:text-accent">Process PM</h3>
              <p className="text-sm text-muted-foreground">
                Discovery, JTBD, priorisation MoSCoW, sprints et obstacles
              </p>
            </button>

            <button
              onClick={scrollToTabs}
              className="p-6 rounded-lg bg-card hover:bg-accent/10 border-2 border-transparent hover:border-accent transition-all cursor-pointer group"
            >
              <h3 className="text-h4 mb-2 group-hover:text-accent">Design & Prototype</h3>
              <p className="text-sm text-muted-foreground">
                5 versions, marque blanche, cartographie et design system
              </p>
            </button>

            <button
              onClick={scrollToTabs}
              className="p-6 rounded-lg bg-card hover:bg-accent/10 border-2 border-transparent hover:border-accent transition-all cursor-pointer group"
            >
              <h3 className="text-h4 mb-2 group-hover:text-accent">Go-to-market B2G</h3>
              <p className="text-sm text-muted-foreground">
                3 stratégies, process vente, obstacles et taux conversion
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* ========== SECTION 6: TABS APPROFONDIES (REF) ========== */}
      <div ref={tabsRef} className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <TabsApprofondir language="fr" />
        </div>
      </div>

      {/* ========== SECTION 7: ÉPILOGUE ========== */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-h3">Épilogue & Apprentissages</h2>

          <section className="rounded-xl p-6 bg-card">
            <p className="text-lg">
              Le projet SONOR n'est pas devenu une start-up à proprement parler, mais l'expérience, passionnante, a été formatrice 
              à plusieurs niveaux, tant sur le plan professionnel que personnel.
            </p>
          </section>

          {/* 3 causes fin du projet */}
          <section className="space-y-4">
            <h3 className="text-h4">3 causes de la fin du projet</h3>
            
            <ExpandSection id="cause-1" title="1. Complexité technique sous-estimée" defaultOpen={true}>
              <p>
                Nous avons sous-estimé la difficulté d'accès et de traitement des données open data de qualité exploitable 
                sur la pollution sonore. Le manque de matière première (données ouvertes fiables et standardisées) 
                a ralenti le développement du prototype.
              </p>
            </ExpandSection>

            <ExpandSection id="cause-2" title="2. Cycles de vente B2G longs">
              <p>
                Les cycles de vente auprès des collectivités sont très longs (4-6 mois minimum), 
                et nous manquions de temps pour finaliser les signatures avant l'épuisement de nos financements.
              </p>
            </ExpandSection>

            <ExpandSection id="cause-3" title="3. Positionnement flou">
              <p>
                Notre positionnement entre plateforme SaaS et accompagnement conseil n'était pas assez clair. 
                Il fallait choisir un angle d'attaque plus précis pour faciliter la compréhension de la proposition de valeur.
              </p>
            </ExpandSection>
          </section>

          {/* 8 learnings */}
          <section className="space-y-6">
            <h3 className="text-h4">Apprentissages</h3>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Pratiques */}
              <div className="rounded-xl p-5 bg-card">
                <h4 className="font-semibold mb-3">Pratiques</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li><b>End-to-end 0→1</b> : Discovery complète → prototypage → go-to-market → commercialisation</li>
                  <li><b>Priorisation & dire non</b> : Importance de rester focus sur 1 MVP plutôt qu'offre 360°</li>
                  <li><b>B2G go-to-market</b> : Cycles longs, importance d'un prototype fonctionnel à mettre entre les mains du lead</li>
                  <li><b>Communiquer avant d'être "prêt"</b> : Prototype fonctionnel nécessaire pour convaincre</li>
                </ul>
              </div>

              {/* Personnels */}
              <div className="rounded-xl p-5 bg-card">
                <h4 className="font-semibold mb-3">Personnels</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li><b>Appétence pour l'exploration et l'analyse</b> : Confirmé mon goût pour l'étude approfondie de problématiques complexes, 
                  la recherche de solutions concrètes, et la capacité à transformer apprentissages techniques et données en réponses adaptées aux besoins terrain</li>
                  <li><b>Produits à impact</b> : Intérêt confirmé pour produits à fort impact sociétal et environnemental</li>
                  <li><b>Aller-retour terrain ↔ conception</b> : L'importance de la confrontation régulière avec le terrain</li>
                  <li><b>Travail en équipe pluridisciplinaire</b> : Communication claire et synthèse d'enjeux complexes</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-xl p-6 bg-card">
            <p className="text-lg">
              <b>Conclusion.</b> SONOR a confirmé mon goût pour la transformation de problématiques en solutions data-driven 
              et m'a permis d'acquérir une expérience précieuse en product management 0→1, de la discovery à la commercialisation.
            </p>
          </section>
        </div>
      </div>

      {/* ========== SECTION 8: FAQ ========== */}
      <div className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-h3">Questions fréquentes</h2>

          <div className="space-y-4">
            <ExpandSection id="faq-1" title="Pourquoi avoir arrêté le projet ?">
              <p>Trois raisons principales :</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><b>Complexité technique sous-estimée</b> : Difficulté accès et traitement données open data qualité exploitable</li>
                <li><b>Cycles vente B2G longs</b> : Epuisement des financements avant la 1ère signature</li>
                <li><b>Positionnement flou</b> : Entre plateforme SaaS et accompagnement conseil, pas assez clair</li>
              </ul>
            </ExpandSection>

            <ExpandSection id="faq-2" title="Comment financiez-vous le projet ?">
              <p>
                <b>20 000€</b> au total via 3 bourses :
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>1ère bourse : Victoire hackathon Recoder l'Habitat #2</li>
                <li>2ème et 3ème bourse : Programme d'accompagnement Matrice + Banque des Territoires</li>
              </ul>
            </ExpandSection>

            <ExpandSection id="faq-3" title="Quelle était votre stratégie commerciale ?">
              <p>
                3 phases progressives sur 2 ans :
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><b>Phase 1</b> : Exploration large (promoteurs, bailleurs, collectivités)</li>
                <li><b>Phase 2</b> : Focus collectivités sensibilisées data</li>
                <li><b>Phase 3</b> : Ciblage affiné (appétence data + culture innovation, via LinkedIn)</li>
              </ul>
            </ExpandSection>

            <ExpandSection id="faq-4" title="Comment segmentiez-vous les collectivités ?">
              <p>
                Par <b>appétence et sensibilisation à la donnée</b> plutôt que par taille. 
                Les villes avec culture open data établie et services environnement structurés 
                étaient plus réceptives, quelle que soit leur taille.
              </p>
            </ExpandSection>

         </div>
        </div>
      </div>

      {/* ========== SECTION 9: "POUR ALLER PLUS LOIN" ========== */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-h3">Pour aller plus loin</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Contenu 1 */}
            <div className="p-6 rounded-lg bg-card hover:bg-accent/10 border-2 border-transparent hover:border-accent transition-all group">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30">
                <span className="text-2xl">🎧</span>
              </div>
              <h3 className="text-h4 mb-2 group-hover:text-accent">Des silences naturels aux bruits urbains</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Enregistrement sonore de la forêt du Risoux pour contraster espace naturel et ville
              </p>
              <div className="flex items-center gap-2 text-accent text-sm">
                Écouter <ExternalLink className="w-4 h-4" />
              </div>
            </div>

            {/* Contenu 2 */}
            <div className="p-6 rounded-lg bg-card hover:bg-accent/10 border-2 border-transparent hover:border-accent transition-all group">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30">
                <span className="text-2xl">🎤</span>
              </div>
              <h3 className="text-h4 mb-2 group-hover:text-accent">Visualiser les villes bruyantes</h3>
              <p className="text-sm text-muted-foreground mb-3">
                TEDx Brussels par Karim Douieb sur la méthodologie dataviz pollution sonore
              </p>
              <div className="flex items-center gap-2 text-accent text-sm">
                Regarder <ExternalLink className="w-4 h-4" />
              </div>
            </div>

            {/* Contenu 3 */}
            <div className="p-6 rounded-lg bg-card hover:bg-accent/10 border-2 border-transparent hover:border-accent transition-all group">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="text-h4 mb-2 group-hover:text-accent">Rapport européen sur le bruit</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Agence Européenne de l'Environnement (2024) : données actualisées Europe
              </p>
              <div className="flex items-center gap-2 text-accent text-sm">
                Lire <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== SECTION 10: REMERCIEMENTS ========== */}
      <div className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-6">
            <h2 className="text-h3">Remerciements</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Ce projet n'aurait pas été possible sans l'accompagnement de la Banque des Territoires 
              et l'association Matrice, et la collaboration de mes trois co-fondateurs : 
              Émilie, Majda et Benjamin.
            </p>

            {/* Logos */}
            <div className="flex items-center justify-center gap-12 flex-wrap pt-6">
              <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                <img 
                  src="/img/logo-bdt.png" 
                  alt="Banque des Territoires" 
                  className="h-16 object-contain"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                <img 
                  src="/img/logo-matrice.png" 
                  alt="Association Matrice" 
                  className="h-16 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== SECTION 11: CTA FINAL ========== */}
      <div className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <CTABanner
            title="Intéressé par mon approche produit ?"
            description="Vous recrutez un Product Manager orienté impact, avec expérience B2G et appétence pour les sujets data/santé publique ? Échangeons sur vos défis produits."
            ctaText="Prendre contact"
            onClick={() => navigate("/Contact")}
          />
        </div>
      </div>
    </div>
  );
};
