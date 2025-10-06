// pages/cases/wttj-default.tsx
import CaseTldr from "@/components/case/CaseTldr";
import CasePivot from "@/components/case/CasePivot";
import { CaseImage } from "@/components/case/CaseImage";
import CaseOverview from "@/components/case/CaseOverview";

export default function WttjDefaultCase() {
  return (
    <main className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8 py-10 space-y-12">
      {/* Hero */}
      <header className="space-y-3">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Case Study — Welcome to the Jungle · Conversion Seniors (12 jours)
        </h1>
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
          Projet de fin de formation Product Management Intensive (MAESTRO)
        </p>
      </header>

      {/* TL;DR */}
      <CaseTldr />

      {/* Contexte & Problématique */}
      <section className="grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">Contexte & Problématique</h2>
          <p>
            Les profils seniors postulent peu sur la plateforme, malgré la demande par les entreprises.
            Objectif : <b>augmenter les candidatures seniors sur la plateforme Welcome To The Jungle.</b>
          </p>
        </div>
        <CaseImage
          alt="Stats & contexte"
          desktopSrc="/wttj/context-desktop.png" // ← remplace par: sandbox:/mnt/data/wttj_visual_pack/etude_de_cas_p06_desktop.png
          mobileSrc="/wttj/context-mobile.png"   // ← remplace par: sandbox:/mnt/data/wttj_visual_pack/etude_de_cas_p06_mobile.png
          caption="Data et signaux marché"
        />
      </section>

      {/* Objectifs */}
      <section className="grid md:grid-cols-3 gap-4">
        {["Acquisition seniors tech", "Engagement & conversion", "Rétention"].map((k) => (
          <div key={k} className="rounded-xl border p-4 bg-white/60 dark:bg-zinc-900/30">
            <h3 className="font-medium">{k}</h3>
          </div>
        ))}
      </section>

      {/* Discovery */}
      <section className="grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">Discovery (12 jours)</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>8 entretiens vidéo seniors (tech & autres).</li>
            <li>Insights : transparence (salaire, missions), filtres pertinents, accompagnement.</li>
            <li>CTR seniors ≈ 11% vs 20% juniors ; besoin de lisibilité des offres.</li>
          </ul>
        </div>
        <CaseImage
          alt="JTBD & verbatims"
          desktopSrc="/wttj/jtbd-desktop.png" // ← etude_de_cas_p18_desktop.png
          mobileSrc="/wttj/jtbd-mobile.png"   // ← etude_de_cas_p18_mobile.png
          caption="JTBD & verbatims clés"
        />
      </section>

      {/* Pivot stratégique */}
      <CasePivot />
      <CaseImage
        alt="Opportunity tree (extrait pivot)"
        desktopSrc="/wttj/pivot-desktop.png" // ← etude_de_cas_p29_desktop.png
        mobileSrc="/wttj/pivot-mobile.png"   // ← etude_de_cas_p29_mobile.png
        caption="Arbre d'opportunités - Recentrage stratégique"
      />

      {/* MVP priorisé et testé */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold">MVP priorisé et testé</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Standardisation des offres (salaire, remote, missions, stack).</li>
          <li>Onboarding personnalisé (critères seniors).</li>
          <li>Assistant IA (CV, storytelling, préparation d'entretien).</li>
          <li>Matching CV ↔ Offres.</li>
        </ol>
        <CaseImage
          alt="RICE – priorisation MVP"
          desktopSrc="/wttj/rice-desktop.png" // ← etude_de_cas_p31_desktop.png
          mobileSrc="/wttj/rice-mobile.png"   // ← etude_de_cas_p31_mobile.png
          caption="Matrice RICE - Priorisation des features MVP"
        />
      </section>

      {/* Prototype & Tests */}
      <section className="grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">Prototype & Tests utilisateurs</h2>
          <p>Wireframes → Maquette Figma → finalisation & publication avec Lovable → 4 tests utilisateurs issus de la discovery.</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border p-3">
              <h4 className="font-medium mb-2">✅ Positifs</h4>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>Offres plus lisibles & pertinentes.</li>
                <li>Onboarding rassurant.</li>
                <li>Matching CV motivant.</li>
              </ul>
            </div>
            <div className="rounded-lg border p-3">
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
          desktopSrc="/wttj/proto-onboarding-desktop.jpg" // ← maquette_onboarding_desktop.jpg
          mobileSrc="/wttj/proto-onboarding-mobile.jpg"   // ← maquette_onboarding_mobile.jpg
          caption="Prototype Lovable – écran onboarding"
        />
      </section>

      {/* Roadmap & KPIs */}
      <section className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold">Roadmap & KPIs</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            ["Now", "Standardisation + Onboarding"],
            ["Next", "Assistant IA + Matching CV"],
            ["Later", "Coaching IA avancé + analytics recruteurs"],
          ].map(([t, d]) => (
            <div key={t} className="rounded-xl border p-4">
              <div className="text-sm uppercase tracking-wide text-zinc-500">{t}</div>
              <div className="mt-1">{d}</div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            ["CTR seniors", "11% → 13%"],
            ["Onboarding", "70% complétion"],
            ["Assistant IA", "≥1,5 usage/session"],
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
          desktopSrc="/wttj/kpis-desktop.png" // ← etude_de_cas_p41_desktop.png
          mobileSrc="/wttj/kpis-mobile.png"   // ← etude_de_cas_p41_mobile.png
          caption="KPIs cibles et métriques de succès"
        />
      </section>

      {/* Risques & Parades */}
      <section className="grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold">Risques & Parades</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><b>Abandon onboarding</b> → étapes claires, analytics par étape, itérations wording.</li>
            <li><b>Assistant IA sous-utilisé</b> → A/B placement, triggers contextuels.</li>
            <li><b>Matching technique</b> → transparence “beta”, feedback in-product.</li>
          </ul>
        </div>
        <CaseImage
          alt="Matrice de risques"
          desktopSrc="/wttj/risques-desktop.png" // ← etude_de_cas_p39_desktop.png
          mobileSrc="/wttj/risques-mobile.png"   // ← etude_de_cas_p39_mobile.png
          caption="Matrice de risques et stratégies de mitigation"
        />
      </section>

      {/* …Roadmap & KPIs */}
/* Vue d’ensemble (mosaïque) */
<CaseOverview />

      {/* Conclusion (fond différenciant) */}
      <section className="rounded-2xl border p-6 md:p-8"
               style={{ backgroundColor: 'rgba(254, 228, 64, 0.18)' }}>
        <h2 className="text-xl md:text-2xl font-semibold mb-2">Conclusion</h2>
        <p>
          <b>WTTJ Tech+</b> améliore la transparence, personnalise l’expérience et accompagne les seniors pour postuler en confiance.
          Next : déployer le MVP, mesurer, itérer (CTA onboarding & placement IA), puis étendre au-delà de la tech si résultats probants.
        </p>
      </section>

      {/* Épilogue */}
      <section className="space-y-3">
        <h3 className="text-lg md:text-xl font-semibold">Ce qui aurait pu être fait différemment</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Valoriser l’angle <b>B2B</b> (entreprises) en plus du B2C.</li>
          <li>Tester d’autres segments seniors hors tech.</li>
          <li>Ajouter des tests quantitatifs pour valider à plus grande échelle.</li>
        </ul>
      </section>

      {/* Liens */}
      <footer className="pt-4 border-t">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li><a className="underline" href="https://prototype-wttj.lovable.app/" target="_blank">Prototype Lovable</a></li>
          <li><span className="text-zinc-500">Backlog Notion / Research Miro (liens internes)</span></li>
        </ul>
      </footer>
    </main>
  );
}
