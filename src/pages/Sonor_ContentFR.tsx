// src/pages/Sonor_ContentFR.tsx
// FICHIER 2/4 : Contenu français complet pour le case study SONOR
// Version conforme aux spécifications validées - Chiffres corrigés

import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import CaseTldr from "@/components/case/CaseTldr";
import { CaseImage } from "@/components/case/CaseImage";
import { CTABanner } from "@/components/work/CTABanner";
import { ExternalLink, Euro, Users, Layers, Clock, Lightbulb, Quote, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { StatCard } from "@/components/case/StatCard";
import { ScrollRevealSection } from "@/components/case/ScrollRevealSection";
import { TimelineItem } from "@/components/case/TimelineItem";
import { CaseStudyNavigation } from "@/components/case/CaseStudyNavigation";
import { GradientBorderSection } from "@/components/GradientBorderSection";
import { 
  TermExplain, 
  ExpandSection, 
  BandeauAudio, 
  TabsApprofondir 
} from "./Sonor_Composants";

// ============= TL;DR BLOCK FR (CONDENSÉ) =============
export const TLDRBlockFR = () => (
  <div className="space-y-8">
    {/* Stats cards immersives */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard 
        value="20 000€" 
        label="Financements obtenus"
        icon={Euro}
        color="accent"
        delay={0}
      />
      <StatCard 
        value="20+" 
        label="Entretiens qualitatifs"
        icon={Users}
        color="primary"
        delay={0.1}
      />
      <StatCard 
        value="3+1" 
        label="Versions prototype"
        icon={Layers}
        color="success"
        delay={0.2}
      />
      <StatCard 
        value="2 ans" 
        label="Durée du projet"
        icon={Clock}
        color="info"
        delay={0.3}
      />
    </div>

    {/* TL;DR condensé à 6 bullets */}
    <CaseTldr
      tone="wttj"
      title="TL;DR — L'essentiel"
      items={[
        <>
          <b>Défi :</b> Transformer l'open data en outil d'action publique pour réduire la pollution sonore
        </>,
        <>
          <b>Mon rôle :</b> Product framing, discovery (20+ entretiens), prototypage UX/UI
        </>,
        <>
          <b>Pivot clé :</b> Acteurs privés → Collectivités (insight conseil BdT/Matrice)
        </>,
        <>
          <b>Innovation produit :</b> Plateforme 360° (cartographie + actions + communication) → composant marque blanche
        </>,
        <>
          <b>Impact :</b> Prototype fonctionnel validé, négociations avec 8+ villes, apprentissages entrepreneuriaux décisifs
        </>,
        <>
          <b>Fin de parcours :</b> Complexité technique + cycles B2G longs → épuisement financements avant signature
        </>,
      ]}
    />
  </div>
);

// ============= CONTENT FR =============
export const ContentFR = () => {
  const navigate = useNavigate();
  const tabsRef = useRef<HTMLDivElement>(null);

  const scrollToTabs = () => {
    tabsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Navigation sections
  const navigationSections = [
    { id: "overview", label: "Vue d'ensemble" },
    { id: "contexte", label: "Contexte" },
    { id: "timeline", label: "Timeline" },
    { id: "moments-cles", label: "Moments clés" },
    { id: "resultats", label: "Résultats" },
    { id: "approfondir", label: "Approfondissement" },
    { id: "epilogue", label: "Épilogue" },
  ];

  return (
    <div className="relative">
      {/* Navigation sticky */}
      <CaseStudyNavigation sections={navigationSections} />

      {/* TL;DR */}
      <div id="overview" className="mb-10 lg:ml-72">
        <TLDRBlockFR />
      </div>

      {/* BANDEAU AUDIO */}
      <div className="mb-10 lg:ml-72">
        <BandeauAudio language="fr" />
      </div>

      {/* ========== SECTION 1: CONTEXTUALISATION ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0}>
        <GradientBorderSection 
          borderPosition="bottom" 
          glassEffect={true}
          className="py-16 px-4 md:px-8 lg:ml-72"
        >
          <div id="contexte" className="max-w-6xl mx-auto space-y-10">
            <h2 className="text-h3">Contextualisation : La pollution sonore</h2>

            {/* Chiffres clés avec animations décalées */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { value: "2e", label: "Source de nuisances urbaines en Europe (après pollution de l'air)" },
                { value: "25M", label: "Français exposés à des niveaux de bruit excessifs (ANSES 2021)" },
                { value: "156 Mds€/an", label: "Coût social du bruit en France (ADEME 2021)" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-accent/30 transition-colors"
                >
                  <div className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Article Nightingale avec hover effect */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/30 transition-all"
            >
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
            </motion.div>

            {/* Carte interactive en ExpandSection */}
            <ExpandSection id="noisy-cities" title="🗺️ Carte interactive : Noisy Cities Paris">
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
        </GradientBorderSection>
      </ScrollRevealSection>

      {/* ========== SECTION 2: TIMELINE ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0.2}>
        <div id="timeline" className="py-16 px-4 md:px-8 bg-secondary lg:ml-72">
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
          </div>
        </div>
      </ScrollRevealSection>

      {/* ========== SECTION 3: MOMENTS CLÉS ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0.3}>
        <div id="moments-cles" className="py-16 px-4 md:px-8 bg-background lg:ml-72">
          <div className="max-w-6xl mx-auto space-y-10">
            <h2 className="text-h3">Moments clés</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Moment 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8 backdrop-blur-sm bg-card/80 border-l-4 border-accent">
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-accent" />
                  </div>
                  
                  <h3 className="text-h4 mb-4">Pivot stratégique : Acteurs privés → Collectivités</h3>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-muted text-xs font-semibold uppercase tracking-wider mb-2">
                      Contexte
                    </span>
                    <p className="text-sm">Après 3 mois d'exploration d'acteurs privés, présentation du 1er jalon.</p>
                  </div>
                  
                  <div className="relative my-6 pl-6">
                    <Quote className="absolute left-0 top-0 w-5 h-5 text-accent/30" />
                    <blockquote className="italic text-base leading-relaxed">
                      "Les collectivités ont les compétences et les moyens d'agir durablement sur cette problématique. 
                      Et nous avons le réseau pour vous accompagner."
                    </blockquote>
                    <footer className="text-xs text-muted-foreground mt-2">— Conseil Banque des Territoires / Matrice</footer>
                  </div>
                  
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-2">
                      Learning
                    </span>
                    <p className="text-sm">
                      Pivoter vers le marché public (villes, métropoles). 
                      Débat interne : moins "sexy", processus longs, mais consensus : soutien BdT décisif.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Moment 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 via-destructive/5 to-destructive/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8 backdrop-blur-sm bg-card/80 border-l-4 border-destructive">
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-destructive" />
                  </div>
                  
                  <h3 className="text-h4 mb-4">L'insight qui a dilué le focus</h3>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-muted text-xs font-semibold uppercase tracking-wider mb-2">
                      Contexte
                    </span>
                    <p className="text-sm">Discovery, entretiens élus et chargés de mission.</p>
                  </div>
                  
                  <div className="relative my-6 pl-6">
                    <Quote className="absolute left-0 top-0 w-5 h-5 text-destructive/30" />
                    <blockquote className="italic text-base leading-relaxed">
                      "On aimerait surtout de l'accompagnement humain : communication sur nos actions, 
                      sensibilisation des citoyens, identification des solutions terrain."
                    </blockquote>
                    <footer className="text-xs text-muted-foreground mt-2">— Collectivité</footer>
                  </div>
                  
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-destructive/20 text-destructive text-xs font-semibold uppercase tracking-wider mb-2">
                      Learning
                    </span>
                    <p className="text-sm">
                      Tentative de répondre aux 2 besoins (plateforme + accompagnement humain). 
                      Résultat : Offre 360° floue, MVP jamais finalisé. 
                      <br /><b>Leçon :</b> Chasser un seul lièvre à la fois.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Moment 3 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative overflow-hidden rounded-2xl md:col-span-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8 backdrop-blur-sm bg-card/80 border-l-4 border-accent">
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-accent" />
                  </div>
                  
                  <h3 className="text-h4 mb-4">De plateforme standalone à composant intégrable</h3>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-muted text-xs font-semibold uppercase tracking-wider mb-2">
                      Contexte
                    </span>
                    <p className="text-sm">Présentation du prototype (branding Sonor) à une collectivité.</p>
                  </div>
                  
                  <div className="relative my-6 pl-6">
                    <Quote className="absolute left-0 top-0 w-5 h-5 text-accent/30" />
                    <blockquote className="italic text-base leading-relaxed">
                      "Votre solution nous intéresse, mais nous ne pouvons pas renvoyer nos citoyens vers un site externe. 
                      Il faudrait que ce soit intégrable à notre portail open-data."
                    </blockquote>
                    <footer className="text-xs text-muted-foreground mt-2">— Collectivité</footer>
                  </div>
                  
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-2">
                      Décision
                    </span>
                    <p className="text-sm">
                      Pivot vers composant en marque blanche (reprise direction artistique collectivité). 
                      Enjeu clé : <b>Souveraineté des données</b>.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      {/* ========== SECTION 4: RÉSULTATS & IMPACT ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0.4}>
        <div id="resultats" className="py-16 px-4 md:px-8 bg-secondary lg:ml-72">
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

          {/* Galerie prototype en carousel immersif */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-h4">Galerie prototype</h3>
              <p className="text-sm text-muted-foreground">Glissez pour explorer →</p>
            </div>
            
            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {[
                  {
                    src: "/img/sonor_cartographie_dashboard.png",
                    alt: "Dashboard cartographie Sonor",
                    caption: "Dashboard cartographie — Points noirs & indicateurs temps réel"
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
                ].map((img, i) => (
                  <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/2">
                    <motion.div
                      whileHover={{ scale: 1.05, zIndex: 10 }}
                      className="group cursor-pointer"
                    >
                      <div className="relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-muted to-card">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <p className="text-white text-sm font-medium">{img.caption}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </section>

          {/* Lien démo avec CTA visuel */}
          <motion.a
            href="https://byronbark.github.io/sonor-web-component/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block p-6 rounded-xl bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/30 hover:border-accent/50 transition-all"
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
          </motion.a>

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
      </ScrollRevealSection>

      {/* ========== SECTION 5: "VOUS VOULEZ APPROFONDIR ?" ========== */}
      <ExpandSection id="approfondir" title="📖 Vous voulez approfondir ? (Process PM, Design, Go-to-Market)" defaultOpen={false}>
        <div className="py-16 px-4 md:px-8 bg-background lg:ml-72">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <p className="text-muted-foreground">
                Découvrez les détails du process produit et du design
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
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
            </div>

            {/* TABS APPROFONDIES */}
            <div ref={tabsRef} className="pt-6">
              <TabsApprofondir language="fr" />
            </div>
          </div>
        </div>
      </ExpandSection>

      {/* ========== SECTION 7: ÉPILOGUE ========== */}
      <ScrollRevealSection variant="fade-in-up" delay={0.5}>
        <div id="epilogue" className="py-16 px-4 md:px-8 bg-background lg:ml-72">
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
      </ScrollRevealSection>

      {/* ========== SECTION 8: FAQ ========== */}
      <div className="py-16 px-4 md:px-8 bg-secondary lg:ml-72">
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
      <div className="py-16 px-4 md:px-8 bg-background lg:ml-72">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-h3">Pour aller plus loin</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Contenu 1 - Article Nightingale */}
            <a 
              href="https://nightingaledvs.com/noisy-cities-behind-the-scenes-with-karim-douieb/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 rounded-lg bg-card hover:bg-accent/10 border-2 border-transparent hover:border-accent transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-white dark:bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 p-2">
                <img src="/img/nightingale.PNG" alt="Nightingale" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-h4 mb-2 group-hover:text-accent">Noisy Cities: Behind the Scenes with Karim Douïeb</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Discover how noise pollution open data maps of Paris, Brussels, and New-York were made.
              </p>
              <div className="flex items-center gap-2 text-accent text-sm">
                Lire <ExternalLink className="w-4 h-4" />
              </div>
            </a>

            {/* Contenu 2 - Philosophie Magazine */}
            <a
              href="https://www.philomag.com/articles/une-foret-sur-ecoute"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg bg-card hover:bg-accent/10 border-2 border-transparent hover:border-accent transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-white dark:bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 p-2">
                <img src="/img/philosophie-magazine.svg" alt="Philosophie Magazine" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-h4 mb-2 group-hover:text-accent">Des silences naturels aux bruits urbains</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Enregistrement sonore de la forêt du Risoux pour contraster espace naturel et ville
              </p>
              <div className="flex items-center gap-2 text-accent text-sm">
                Lire <ExternalLink className="w-4 h-4" />
              </div>
            </a>

            {/* Contenu 3 - TEDx */}
            <a
              href="https://www.youtube.com/watch?v=ewNTwBbLUhM"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg bg-card hover:bg-accent/10 border-2 border-transparent hover:border-accent transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-white dark:bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 p-2">
                <img src="/img/ted-logo.svg" alt="TED" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-h4 mb-2 group-hover:text-accent">Visualiser les villes bruyantes</h3>
              <p className="text-sm text-muted-foreground mb-3">
                TEDx Brussels par Karim Douieb sur la méthodologie dataviz pollution sonore
              </p>
              <div className="flex items-center gap-2 text-accent text-sm">
                Regarder <ExternalLink className="w-4 h-4" />
              </div>
            </a>

            {/* Contenu 4 */}
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
      <div className="py-16 px-4 md:px-8 bg-secondary lg:ml-72">
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
                  src="/img/banque-des-territoires-logo.png" 
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
      <div className="py-16 px-4 md:px-8 bg-background lg:ml-72">
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
