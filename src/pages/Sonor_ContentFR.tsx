// src/pages/Sonor_ContentFR.tsx
// FICHIER 2/4 : Contenu français complet pour le case study SONOR
// Version conforme aux spécifications validées - Chiffres corrigés

import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CaseTldr from "@/components/case/CaseTldr";
import { CaseImage } from "@/components/case/CaseImage";
import { CTABanner } from "@/components/work/CTABanner";
import { ExternalLink, Play } from "lucide-react";
import { ScrollRevealSection } from "@/components/case/ScrollRevealSection";
import { TimelineItem } from "@/components/case/TimelineItem";
import { ImageLightbox } from "@/components/ImageLightbox";
import { 
  TermExplain, 
  ExpandSection, 
  BandeauAudio, 
  TabsApprofondir 
} from "./Sonor_Composants";

// ============= TL;DR BLOCK FR (CONDENSÉ) =============
export const TLDRBlockFR = () => (
  <CaseTldr
    tone="neutral"
    title="TL;DR — L'essentiel"
    items={[
      <>
        <b>Contexte :</b> Hackathon Recoder l'Habitat #2 (gagnant) → incubation Matrice & Banque des Territoires (2020-2022)
      </>,
      <>
        <b>Problème :</b> Pollution sonore (2e nuisance urbaine), invisible, impacts sanitaires réels
      </>,
      <>
        <b>Solution :</b> Plateforme SaaS 360° avec cartographie open data, recommandations d'actions publiques, engagement citoyen (sensibilisation, communication)
      </>,
      <>
        <b>Équipe :</b> 4 co-fondateurs (Émilie, Majda, Benjamin, Ivan), 1 dev/data-scientist à mi-temps
      </>,
      <>
        <b>Mon rôle :</b> Cadrage produit, discovery, prototypage, commercial, encadrement data-scientist
      </>,
      <>
        <b>Durée & méthode :</b> 2 ans / Agile Lean, sprints Kanban 2-3 semaines, 6+ jalons mensuels (présentations partenaires)
      </>,
    ]}
  />
);

// ============= CONTENT FR =============
export const ContentFR = () => {
  const navigate = useNavigate();
  const tabsRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      src: "/img/Sonor-notre-approche.webp",
      alt: "Mapping dashboard — Hotspots & real-time indicators",
      caption: "Mapping dashboard — Hotspots & real-time indicators"
    },
    {
      src: "/img/sonor_recommandations.png",
      alt: "Recommandations actions",
      caption: "Recommandations actionnables — Tâches priorisées par zone"
    },
    {
      src: "/img/sonor_issy_marque_blanche.png",
      alt: "Marque blanche Issy",
      caption: "Intégration marque blanche — Issy-les-Moulineaux"
    },
    {
      src: "/img/sonor_engagement_citoyen.png",
      alt: "Engagement citoyen",
      caption: "Engagement citoyen — Dépôt d'alerte qualifiée"
    }
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    setCurrentImageIndex((prev) => {
      if (direction === 'prev') {
        return prev > 0 ? prev - 1 : galleryImages.length - 1;
      } else {
        return prev < galleryImages.length - 1 ? prev + 1 : 0;
      }
    });
  };

  const scrollToTabs = () => {
    tabsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* TL;DR */}
      <div id="overview" className="mb-10 max-w-6xl mx-auto">
        <TLDRBlockFR />
      </div>

      {/* BANDEAU AUDIO */}
      <div className="mb-10 max-w-6xl mx-auto">
        <BandeauAudio language="fr" />
      </div>

      {/* ========== SECTION 1: CONTEXTUALISATION ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0}>
        <div className="py-16 px-4 md:px-8 bg-card border-b border-border/50">
          <div id="contexte" className="max-w-6xl mx-auto space-y-10">
            <h2 className="text-h3">Contextualisation : La pollution sonore</h2>

            {/* Chiffres clés */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { value: "2e", label: "Source de nuisances urbaines en Europe (après pollution de l'air)" },
                { value: "25M", label: "Français exposés à des niveaux de bruit excessifs (ANSES 2021)" },
                { value: "156 Mds€/an", label: "Coût social du bruit en France (ADEME 2021)" }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-accent/30 transition-colors"
                >
                  <div className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

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
      </ScrollRevealSection>

      {/* ========== SECTION 1.5: NOTRE VISION PRODUIT ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0.15}>
        <div id="notre-approche" className="py-16 px-4 md:px-8 bg-secondary border-b border-border/50">
          <div className="max-w-6xl mx-auto space-y-10">
            <h2 className="text-h3">Notre vision produit</h2>
            
            <p className="text-base md:text-lg text-muted-foreground">
              Face à ce constat, nous avons imaginé Sonor comme un outil permettant 
              aux collectivités d'anticiper et d'agir sur le bruit.
            </p>
            
            <div className="max-w-3xl space-y-4">
              <p>
                <b>Notre proposition de valeur initiale :</b>
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Accompagner les collectivités dans leurs politiques publiques anti-bruit</li>
                <li>Co-construire avec les citoyens pour maximiser l'engagement</li>
                <li>Fournir des données cartographiques actionnables</li>
              </ul>
              <p className="text-sm text-muted-foreground italic pt-4">
                → Cette vision a évolué au fil des pivots stratégiques détaillés ci-dessous...
              </p>
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      {/* ========== SECTION 2: TIMELINE ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0.2}>
        <div id="timeline" className="py-16 px-4 md:px-8 bg-secondary">
          <div className="max-w-6xl mx-auto space-y-10">
            <h2 className="text-h3">Timeline du projet</h2>
            
            <div className="space-y-8">
              {[
                { date: "Oct. 2020", title: "Hackathon", desc: "Victoire Recoder l'Habitat #2 → incubation Matrice/BdT" },
                { date: "Oct. 2020 - Janv. 2021", title: "Discovery", desc: "20+ entretiens, exploration acteurs privés" },
                { date: "Janv. 2021", title: "Pivot", desc: "Décision stratégique → focus collectivités" },
                { date: "Janv. - Avril 2021", title: "Prototype", desc: "3 versions Figma + évolution marque blanche" },
                { date: "Mai 2021 - Mars 2022", title: "Go-to-market", desc: "20+ villes, 2 propales, cycles longs" },
                { date: "Mars 2022", title: "Fin", desc: "Épuisement financements, 0 signature" },
              ].map((step, i, arr) => (
                <TimelineItem
                  key={i}
                  date={step.date}
                  title={step.title}
                  description={step.desc}
                  index={i}
                  isLast={i === arr.length - 1}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic text-center mt-8">
              → Trois moments ont marqué cette trajectoire...
            </p>
          </div>
        </div>
      </ScrollRevealSection>

      {/* ========== SECTION 3: MOMENTS CLÉS ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0.3}>
        <div id="moments-cles" className="py-16 px-4 md:px-8 bg-background">
          <div className="max-w-6xl mx-auto space-y-10">
            <h2 className="text-h3">Moments clés</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Moment 1 */}
              <div className="p-6 rounded-lg bg-card border-l-4 border-accent">
                <h3 className="text-h4 mb-3">Pivot stratégique : Acteurs privés → Collectivités</h3>
                <p className="text-base mb-3">
                  <b>Contexte :</b> Après 3 mois d'exploration d'acteurs privés, présentation du 1er jalon.
                </p>
                <blockquote className="italic text-sm border-l-4 border-accent/30 pl-4 mb-3">
                  "Les collectivités ont les compétences et les moyens d'agir durablement sur cette problématique. 
                  Et nous avons le réseau pour vous accompagner."
                  <footer className="text-xs mt-2">— Conseil Banque des Territoires / Matrice</footer>
                </blockquote>
                <p className="text-base">
                  <b>Décision :</b> Pivoter vers le marché public (villes, métropoles). 
                  Débat interne : moins "sexy", processus longs, mais consensus : soutien BdT décisif.
                </p>
              </div>

              {/* Moment 2 */}
              <div className="p-6 rounded-lg bg-card border-l-4 border-destructive">
                <h3 className="text-h4 mb-3">L'insight qui a dilué le focus</h3>
                <p className="text-base mb-3">
                  <b>Contexte :</b> Discovery, entretiens élus et chargés de mission.
                </p>
                <blockquote className="italic text-sm border-l-4 border-destructive/30 pl-4 mb-3">
                  "On aimerait surtout de l'accompagnement humain : communication sur nos actions, 
                  sensibilisation des citoyens, identification des solutions terrain."
                  <footer className="text-xs mt-2">— Collectivité</footer>
                </blockquote>
                <p className="text-base">
                  <b>Erreur :</b> Tentative de répondre aux 2 besoins (plateforme + accompagnement humain). 
                  Résultat : Offre 360° floue, MVP jamais finalisé.
                  <br />
                  <b>Leçon :</b> Chasser un seul lièvre à la fois.
                </p>
              </div>

              {/* Moment 3 */}
              <div className="p-6 rounded-lg bg-card border-l-4 border-accent">
                <h3 className="text-h4 mb-3">De plateforme standalone à composant intégrable</h3>
                <p className="text-base mb-3">
                  <b>Contexte :</b> Présentation du prototype (branding Sonor) à une collectivité.
                </p>
                <blockquote className="italic text-sm border-l-4 border-accent/30 pl-4 mb-3">
                  "Votre solution nous intéresse, mais nous ne pouvons pas renvoyer nos citoyens vers un site externe. 
                  Il faudrait que ce soit intégrable à notre portail open-data."
                  <footer className="text-xs mt-2">— Collectivité</footer>
                </blockquote>
                <p className="text-base">
                  <b>Décision :</b> Pivot vers composant en marque blanche (reprise direction artistique collectivité). 
                  Enjeu clé : <b>Souveraineté des données</b>.
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic text-center mt-8">
              → Découvrez comment nous avons concrétisé cette vision en prototype...
            </p>
          </div>
        </div>
      </ScrollRevealSection>

      {/* ========== SECTION 4: GALERIE PROTOTYPE ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0.4}>
        <div id="galerie-prototype" className="py-16 px-4 md:px-8 bg-secondary">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="space-y-6">
              <h2 className="text-h3">Voir notre premier prototype</h2>
              
              {/* Bloc d'introduction Landing Page */}
              <div className="space-y-4 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                  <span>2020-2021</span>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Pour valider le positionnement de Sonor et communiquer l'offre aux premiers partenaires, 
                  nous avons créé une landing page publique résumant la vision, la promesse produit et les premiers cas d'usage. 
                  Cette page a servi à la fois d'outil de storytelling et de première étape dans la stratégie de go-to-market de Sonor.
                </p>
                <a 
                  href="https://sonor.dorik.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors group"
                >
                  <span>Voir la landing page</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Iframe Figma - visible par défaut */}
              <div className="space-y-4">
                <h3 className="text-h4">Prototype interactif Figma</h3>
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
            
            {/* Galerie prototype en grid */}
            <section className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {galleryImages.map((img, i) => (
                  <CaseImage
                    key={i}
                    onClick={() => openLightbox(i)}
                    desktopSrc={img.src}
                    alt={img.alt}
                    caption={img.caption}
                  />
                ))}
              </div>
            </section>

            {/* Lien démo avec CTA visuel */}
            <a
              href="https://byronbark.github.io/sonor-web-component/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-xl bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/30 hover:border-accent/50 transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Prototype fonctionnel
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Explorez le web component marque-blanche
                  </p>
                </div>
                <ExternalLink className="w-6 h-6 text-accent" />
              </div>
            </a>
          </div>
        </div>
      </ScrollRevealSection>

      {/* ========== SECTION 5: OBSTACLES RENCONTRÉS ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0.45}>
        <div id="obstacles" className="py-16 px-4 md:px-8 bg-background">
          <div className="max-w-6xl mx-auto space-y-10">
            <h2 className="text-h3">Obstacles rencontrés</h2>
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-card border-l-4 border-destructive">
                <h4 className="font-semibold mb-2">Disponibilité données open data</h4>
                <p className="text-base">
                  Manque de données ouvertes fiables et standardisées sur la pollution sonore. Nécessité de normaliser les
                  sources hétérogènes.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card border-l-4 border-destructive">
                <h4 className="font-semibold mb-2">Complexité technique sous-estimée</h4>
                <p className="text-base">
                  Difficulté d'accès et de traitement des données de qualité en une cartographie exploitable.
                  Ralentissement développement prototype.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      {/* ========== SECTION 6: RÉSULTATS & IMPACT ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0.5}>
        <div id="resultats" className="py-16 px-4 md:px-8 bg-secondary">
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
          </div>
        </div>
      </ScrollRevealSection>

      {/* ========== SECTION 7: ÉPILOGUE & APPRENTISSAGES ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0.6}>
        <div id="epilogue" className="py-16 px-4 md:px-8 bg-background lg:ml-72">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-h3">Épilogue & Apprentissages</h2>

          <section className="space-y-6">
            <h3 className="text-h4">Le projet SONOR n'est pas devenu une start-up à proprement parler, mais l'expérience, passionnante, a été formatrice à plusieurs niveaux, tant sur le plan professionnel que personnel.</h3>
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

          {/* Learnings */}
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
        </div>
        </div>
      </ScrollRevealSection>

      {/* ========== SECTION 8: SI C'ÉTAIT À REFAIRE ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0.65}>
        <div id="si-cetait-a-refaire" className="py-16 px-4 md:px-8 bg-secondary">
          <div className="max-w-6xl mx-auto space-y-10">
            <h2 className="text-h3">Si c'était à refaire</h2>
            
            <div className="space-y-6">
              <p className="text-lg">
                Avec le recul, voici les décisions que j'aurais prises différemment pour maximiser nos chances de succès :
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl p-5 bg-card border-l-4 border-accent">
                  <h4 className="font-semibold mb-2">Choisir 1 MVP dès le départ</h4>
                  <p className="text-sm text-muted-foreground">
                    Plutôt qu'une offre 360°, se concentrer sur un segment précis (ex: cartographie seule) 
                    pour valider la proposition de valeur rapidement.
                  </p>
                </div>

                <div className="rounded-xl p-5 bg-card border-l-4 border-accent">
                  <h4 className="font-semibold mb-2">Valider la complexité technique avant de promettre</h4>
                  <p className="text-sm text-muted-foreground">
                    Réaliser un prototype fonctionnel minimal avant d'engager des discussions commerciales 
                    pour éviter les promesses non tenables.
                  </p>
                </div>

                <div className="rounded-xl p-5 bg-card border-l-4 border-accent">
                  <h4 className="font-semibold mb-2">Construire un prototype fonctionnel plus tôt</h4>
                  <p className="text-sm text-muted-foreground">
                    Passer du Figma au code dès les premiers retours terrain pour accélérer 
                    la confrontation avec la réalité technique et utilisateur.
                  </p>
                </div>

                <div className="rounded-xl p-5 bg-card border-l-4 border-accent">
                  <h4 className="font-semibold mb-2">Se focaliser sur un segment client précis</h4>
                  <p className="text-sm text-muted-foreground">
                    Cibler un type de collectivité spécifique (ex: villes moyennes de 50-100k habitants) 
                    pour adapter le discours et la solution à leurs contraintes réelles.
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
                SONOR a confirmé mon goût pour la transformation de problématiques en solutions data-driven 
                et m'a permis d'acquérir une expérience précieuse en product management 0→1, de la discovery à la commercialisation.
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
              <h2 className="text-h3 mb-4">Questions fréquentes</h2>
            </div>
            
            <div className="space-y-4 text-left max-w-4xl mx-auto">
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
    </ScrollRevealSection>

      {/* ========== SECTION 10: POUR ALLER PLUS LOIN ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0.9}>
        <div className="py-16 px-4 md:px-8 bg-secondary">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center">
              <h2 className="text-h3 mb-4">Pour aller plus loin</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Contenu 1 - Article Nightingale */}
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
                  Lire <ExternalLink className="w-4 h-4" />
                </div>
              </a>

              {/* Contenu 2 - Philosophie Magazine */}
              <a
                href="https://www.philomag.com/articles/une-foret-sur-ecoute"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col p-6 rounded-lg bg-card border-2 border-transparent transition-all group"
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <img src="/img/philosophie-magazine.svg" alt="Philosophie Magazine" className="h-full object-contain" />
                </div>
                <h3 className="text-h4 mb-2 flex-grow">Des silences naturels aux bruits urbains</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  Enregistrement sonore de la forêt du Risoux pour contraster espace naturel et ville
                </p>
                <div className="flex items-center gap-2 text-accent text-sm hover:underline underline-offset-4 transition-all">
                  Lire <ExternalLink className="w-4 h-4" />
                </div>
              </a>

              {/* Contenu 3 - TEDx */}
              <a
                href="https://www.youtube.com/watch?v=ewNTwBbLUhM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col p-6 rounded-lg bg-card border-2 border-transparent transition-all group"
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <img src="/img/ted-logo.svg" alt="TED" className="h-full object-contain" />
                </div>
                <h3 className="text-h4 mb-2 flex-grow">Visualiser les villes bruyantes</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  TEDx Brussels par Karim Douieb sur la méthodologie dataviz pollution sonore
                </p>
                <div className="flex items-center gap-2 text-accent text-sm hover:underline underline-offset-4 transition-all">
                  Regarder <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      {/* ========== SECTION 11: REMERCIEMENTS ========== */}
      <div className="py-16 px-4 md:px-8 bg-background">
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
              <div>
                <img 
                  src="/img/banque-des-territoires-logo.png" 
                  alt="Banque des Territoires" 
                  className="h-24 object-contain"
                />
              </div>
              <div>
                <img 
                  src="/img/logo-matrice.png" 
                  alt="Association Matrice" 
                  className="h-24 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== SECTION 12: CTA FINAL ========== */}
      <div className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <CTABanner
            title="Intéressé par mon approche produit ?"
            description="Vous recrutez un Product Manager orienté impact, avec expérience B2G et appétence pour les sujets data/santé publique ? Échangeons sur vos défis produits."
            ctaText="Prendre contact"
            onClick={() => navigate("/Contact")}
          />
        </div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={handleNavigate}
      />
    </>
  );
};
