import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CaseStudyLayout } from '@/components/CaseStudyLayout';
import { Navigation } from '@/components/Navigation';
import { Footer } from '../../../components/footer';
import CaseTldr from "../../components/case/CaseTldr";
import CasePivot from "../../components/case/CasePivot";
import { CaseImage } from "../../components/case/CaseImage";
import { CTABanner } from '@/components/work/CTABanner';
import { useAudience } from '@/hooks/useAudience';
import wttjHero from '@/assets/wttj-hero.png';
import CasePrototypeHighlight from "../../components/case/CasePrototypeHighlight";

// src/pages/cases/Wttj.tsx

export default function Wttj() {
  return (
    <main id="top" className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12 py-10 space-y-12">
      {/* Hero */}
      <header id="hero" className="space-y-3">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Case Study — Welcome to the Jungle · Conversion Seniors (12 jours)
        </h1>
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
          Projet de fin de formation Product Management Intensive (MAESTRO)
        </p>
      </header>

      {/* TL;DR (chapeau jaune) */}
      <section id="tldr">
        <CaseTldr />
      </section>

      {/* Contexte & Problématique */}
      <section id="contexte" className="grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">Contexte & Problématique</h2>
          <p>
            Les profils seniors postulent peu sur la plateforme, alors qu’ils sont très demandés par les
            entreprises clientes. Objectif : <b>augmenter les candidatures seniors (prioritairement dans la tech)</b> via
            une expérience plus pertinente et engageante.
          </p>
        </div>
        <CaseImage
          alt="Stats & contexte"
          desktopSrc="/WTTJ/context-desktop.png"
          mobileSrc="/WTTJ/context-mobile.png"
          caption="Data et signaux marché"
        />
      </section>

      {/* Objectifs */}
      <section id="objectifs" className="grid md:grid-cols-3 gap-4">
        {["Acquisition seniors tech", "Engagement & conversion", "Rétention"].map((k) => (
          <div key={k} className="rounded-xl border p-4 bg-white/60 dark:bg-zinc-900/30">
            <h3 className="font-medium">{k}</h3>
          </div>
        ))}
      </section>

      {/* Discovery + Vue d'ensemble (user flow) */}
      <section id="discovery" className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Discovery (12 jours)</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>8 entretiens vidéo seniors (tech & autres).</li>
              <li>Insights : transparence (salaire, missions), filtres pertinents, accompagnement.</li>
              <li>CTR seniors ≈ 11 % vs 20 % juniors ; besoin de lisibilité des offres.</li>
            </ul>
          </div>
          <CaseImage
            alt="JTBD & verbatims clés"
            desktopSrc="/WTTJ/jtbd-desktop.png"
            mobileSrc="/WTTJ/jtbd-mobile.png"
            caption="JTBD & verbatims clés"
          />
        </div>

        {/* Vue d’ensemble (image corrigée → user flow) */}
        <CaseImage
          alt="Vue d’ensemble — user flow seniors"
          desktopSrc="/WTTJ/userflow-desktop.jpg"
          mobileSrc="/WTTJ/userflow-mobile.jpg"
          caption="Cartographie du parcours (seniors → candidature)"
        />
      </section>

      {/* Pivot stratégique */}
      <section id="pivot" className="space-y-6">
        <CasePivot />
        <CaseImage
          alt="Opportunity tree (extrait pivot)"
          desktopSrc="/WTTJ/pivot-desktop.png"
          mobileSrc="/WTTJ/pivot-mobile.png"
          caption="Arbre d'opportunités — recentrage stratégique profils tech 5–8 ans"
        />
      </section>

      {/* Mise en avant du Prototype */}
      <section id="prototype">
        <CasePrototypeHighlight />
      </section>

      {/* CTA collaboration — placé juste après le Prototype */}
      <section id="cta-collab" className="rounded-2xl border p-6 md:p-8 text-center bg-emerald-50/60 dark:bg-emerald-900/20">
        <h3 className="text-lg md:text-xl font-semibold mb-2">Travaillons ensemble</h3>
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 mb-4">
          Vous voulez accélérer la conversion des profils seniors tech ? Je peux vous aider à cadrer la discovery, prioriser un MVP et livrer un prototype testé.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium hover:shadow transition"
          style={{ backgroundColor: "#FEE440" }}
        >
          Me contacter <span aria-hidden>→</span>
        </a>
      </section>

      {/* MVP priorisé et testé */}
      <section id="mvp" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold">MVP priorisé et testé</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Standardisation des offres (salaire, remote, missions, stack).</li>
          <li>Onboarding personnalisé (critères seniors).</li>
          <li>Assistant IA (CV, storytelling, préparation entretien).</li>
          <li>Matching CV ↔ Offres.</li>
        </ol>
        <CaseImage
          alt="Matrice RICE — priorisation MVP"
          desktopSrc="/WTTJ/rice-desktop.png"
          mobileSrc="/WTTJ/rice-mobile.png"
          caption="Matrice RICE — priorisation des features MVP"
        />
      </section>

      {/* Prototype & Tests détaillés */}
      <section id="tests" className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">Prototype & Tests utilisateurs</h2>
            <p>
              Maquette Figma → finalisation & publication Lovable → <b>4 tests utilisateurs</b> issus de la discovery.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border p-3 bg-emerald-50 dark:bg-emerald-900/20">
                <h4 className="font-medium mb-2">✅ Positifs</h4>
                <ul className="text-sm list-disc pl-4 space-y-1">
                  <li>Offres plus lisibles & pertinentes.</li>
                  <li>Onboarding rassurant.</li>
                  <li>Matching CV motivant.</li>
                </ul>
              </div>
              <div className="rounded-lg border p-3 bg-amber-50 dark:bg-amber-900/20">
                <h4 className="font-medium mb-2">⚠️ À améliorer</h4>
                <ul className="text-sm list-disc pl-4 space-y-1">
                  <li>Wording du CTA onboarding.</li>
                  <li>Placement de l’assistant IA.</li>
                </ul>
              </div>
            </div>
          </div>
          <CaseImage
            alt="Prototype onboarding"
            desktopSrc="/WTTJ/proto-onboarding-desktop.jpg"
            mobileSrc="/WTTJ/proto-onboarding-mobile.jpg"
            caption="Prototype Lovable — écran d’onboarding"
          />
        </div>

        <CaseImage
          alt="Résultats des tests utilisateurs"
          desktopSrc="/WTTJ/tests-desktop.png"
          mobileSrc="/WTTJ/tests-mobile.png"
          caption="Synthèse des retours utilisateurs"
        />
      </section>

      {/* Roadmap & KPIs (couleurs homogènes) */}
      <section id="roadmap" className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold">Roadmap & KPIs</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            ["Now", "Standardisation + Onboarding"],
            ["Next", "Assistant IA + Matching CV"],
            ["Later", "Coaching IA avancé + analytics recruteurs"],
          ].map(([t, d]) => (
            <div
              key={t}
              className="rounded-xl border p-4 bg-blue-50 dark:bg-blue-900/20 text-zinc-900 dark:text-zinc-100"
            >
              <div className="text-xs uppercase tracking-wider font-semibold mb-2">{t}</div>
              <div className="text-base font-medium">{d}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            ["CTR seniors", "11% → 13%"],
            ["Onboarding", "70% complétion"],
            ["Assistant IA", "≥ 1,5 usage/session"],
            ["Profils activés", "+300 à +800"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl border p-4">
              <div className="text-sm text-zinc-500">{k}</div>
              <div className="text-xl font-semibold">{v}</div>
            </div>
          ))}
        </div>

        <CaseImage
          alt="KPIs (extrait slide)"
          desktopSrc="/WTTJ/kpis-desktop.png"
          mobileSrc="/WTTJ/kpis-mobile.png"
          caption="KPIs cibles et métriques de succès"
        />
      </section>

      {/* Risques & Parades */}
      <section id="risques" className="grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">Risques & Parades</h2>
        </div>
        <CaseImage
          alt="Matrice de risques"
          desktopSrc="/WTTJ/risques-desktop.png"
          mobileSrc="/WTTJ/risques-mobile.png"
          caption="Matrice de risques et stratégies de mitigation"
        />
      </section>

      {/* Conclusion (fond non jaune) */}
      <section id="conclusion" className="space-y-6">
        <div className="rounded-2xl border p-6 md:p-8 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200/60">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Conclusion</h2>
          <p>
            <b>WTTJ Tech+</b> améliore la transparence, personnalise l’expérience et accompagne les seniors pour
            postuler en confiance. Next : déployer le MVP, mesurer, itérer (CTA onboarding & placement IA), puis étendre
            au-delà de la tech si résultats probants.
          </p>
        </div>
      </section>

      {/* Ce qui aurait pu être fait différemment (callout) */}
      <section id="retro" className="space-y-3">
        <div className="rounded-xl border p-5 bg-zinc-50 dark:bg-zinc-900/30">
          <h3 className="text-lg md:text-xl font-semibold">Ce qui aurait pu être fait différemment</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Explorer l’angle <b>B2B</b> (entreprises) en plus du B2C.
            </li>
            <li>Tester d’autres segments seniors hors tech.</li>
            <li>Ajouter des tests quantitatifs pour valider à plus grande échelle.</li>
          </ul>
        </div>
      </section>

      {/* Liens */}
      <section id="liens" className="pt-4 border-t">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>
            <a className="underline" href="https://prototype-wttj.lovable.app/" target="_blank" rel="noreferrer">
              Prototype Lovable
            </a>
          </li>
          <li>
            <span className="text-zinc-500">Backlog Notion / Research Miro (liens internes)</span>
          </li>
        </ul>
      </section>
    </main>
  );
}
