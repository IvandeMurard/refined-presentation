import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CaseStudyLayout } from '@/components/CaseStudyLayout';
import { Navigation } from '@/components/Navigation';
import { Footer } from '../../../components/footer';
import CaseTldr from '../../../components/case/CaseTldr';
import CasePivot from '../../../components/case/CasePivot';
import { CaseImage } from '../../../components/case/CaseImage';
import { CTABanner } from '@/components/work/CTABanner';
import { useAudience } from '@/hooks/useAudience';
import wttjHero from '@/assets/wttj-hero.png';

// ============= AUDIENCE CONTENTS =============

const ContentDefault = () => {
  const navigate = useNavigate();
  
  return (
    <div className="space-y-16">
      {/* TL;DR */}
      <CaseTldr />

      {/* Contexte & Problématique */}
      <section className="grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
          <h2 className="text-h3">Contexte & Problématique</h2>
          <p>
            Les profils seniors postulent peu sur la plateforme, alors qu'ils sont très demandés par les entreprises clientes.
            Objectif : <b>augmenter les candidatures seniors (prioritairement dans la tech)</b> via une expérience plus pertinente et engageante.
          </p>
        </div>
        <CaseImage
          alt="Stats & contexte"
          desktopSrc="/WTTJ/contexte-desktop.png"
          caption="Data et signaux marché"
        />
      </section>

      {/* Objectifs */}
      <section className="grid md:grid-cols-3 gap-4">
        {["Acquisition seniors tech", "Engagement & conversion", "Rétention"].map((k) => (
          <div key={k} className="rounded-xl border p-4 bg-card">
            <h3 className="font-medium">{k}</h3>
          </div>
        ))}
      </section>

      {/* Discovery */}
      <section className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            <h2 className="text-h3">Discovery (12 jours)</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>8 entretiens vidéo seniors (tech & autres).</li>
              <li>Insights : transparence (salaire, missions), filtres pertinents, accompagnement.</li>
              <li>CTR seniors ≈ 11% vs 20% juniors ; besoin de lisibilité des offres.</li>
            </ul>
          </div>
          <CaseImage
            alt="JTBD & verbatims clés"
            desktopSrc="/WTTJ/jtbd-desktop.png"
            caption="JTBD & verbatims clés"
          />
        </div>
        <CaseImage
          alt="Parcours utilisateur"
          desktopSrc="/WTTJ/etude_de_cas_p31_desktop.png"
          caption="Cartographie du parcours utilisateur"
        />
      </section>

      {/* Pivot stratégique */}
      <CasePivot />
      <CaseImage
        alt="Opportunity tree (extrait pivot)"
        desktopSrc="/WTTJ/pivot-desktop.png"
        caption="Arbre d'opportunités - Recentrage stratégique"
      />

      {/* MVP priorisé et testé */}
      <section className="space-y-4">
        <h2 className="text-h3">MVP priorisé et testé</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Standardisation des offres (salaire, remote, missions, stack).</li>
          <li>Onboarding personnalisé (critères seniors).</li>
          <li>Assistant IA (CV, storytelling, préparation entretien).</li>
          <li>Matching CV ↔ Offres.</li>
        </ol>
        <CaseImage
          alt="RICE – priorisation MVP"
          desktopSrc="/WTTJ/rice-desktop.png"
          caption="Matrice RICE - Priorisation des features MVP"
        />
      </section>

      {/* Prototype & Tests */}
      <section className="space-y-8">
        <div>
          <h2 className="text-h3 mb-4">Prototype & Tests utilisateurs</h2>
          <p className="text-base mb-6">
            Maquette Figma → finalisation & publication Lovable → 4 tests utilisateurs issus de la discovery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="test-positive p-5 rounded-xl border-2">
              <h4 className="font-medium mb-2">✅ Positifs</h4>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>Offres plus lisibles & pertinentes.</li>
                <li>Onboarding rassurant.</li>
                <li>Matching CV motivant.</li>
              </ul>
            </div>
            <div className="test-improvement p-5 rounded-xl border-2">
              <h4 className="font-medium mb-2">⚠️ À améliorer</h4>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>Wording du CTA onboarding.</li>
                <li>Placement de l'assistant IA.</li>
              </ul>
            </div>
          </div>

          <a 
            href="https://prototype-wttj.lovable.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group hover:opacity-90 transition-opacity"
          >
            <CaseImage
              alt="Prototype onboarding"
              desktopSrc="/WTTJ/proto-onboarding-desktop.png"
              caption="🔗 Prototype Lovable – Cliquez pour tester"
            />
          </a>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Résultats des tests utilisateurs</h3>
          <CaseImage
            alt="Résultats des tests utilisateurs"
            desktopSrc="/WTTJ/tests-desktop.png"
            caption="Synthèse des retours utilisateurs"
          />
        </div>
      </section>

      {/* Roadmap & KPIs */}
      <section className="space-y-4">
        <h2 className="text-h3">Roadmap & KPIs</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="roadmap-now">
            <div className="text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: '#1976D2' }}>Now</div>
            <div className="text-base font-medium">Standardisation + Onboarding</div>
          </div>
          <div className="roadmap-next">
            <div className="text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: '#1565C0' }}>Next</div>
            <div className="text-base font-medium">Assistant IA + Matching CV</div>
          </div>
          <div className="roadmap-later">
            <div className="text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: '#1565C0' }}>Later</div>
            <div className="text-base font-medium">Coaching IA avancé + analytics recruteurs</div>
          </div>
        </div>
        <CaseImage
          alt="Roadmap Now Next Later"
          desktopSrc="/WTTJ/etude_de_cas_p18_desktop.png"
          caption="Roadmap : priorisation par phases Now / Next / Later"
        />
      </section>

      {/* Risques & Parades */}
      <section className="grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-3">
          <h2 className="text-h3">Risques & Parades</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><b>Abandon onboarding</b> → étapes claires, analytics par étape, itérations wording.</li>
            <li><b>Assistant IA sous-utilisé</b> → A/B placement, triggers contextuels.</li>
            <li><b>Matching technique</b> → transparence "beta", feedback in-product.</li>
          </ul>
        </div>
        <CaseImage
          alt="Matrice de risques"
          desktopSrc="/WTTJ/risques-desktop.png"
          caption="Matrice de risques et stratégies de mitigation"
        />
      </section>

      {/* Vue d'ensemble */}
      <section className="space-y-4">
        <h2 className="text-h3">Vue d'ensemble</h2>
        <CaseImage
          alt="Slide de conclusion"
          desktopSrc="/WTTJ/etude_de_cas_p29_desktop.png"
          caption="Vue d'ensemble du projet"
        />
      </section>

      {/* Conclusion */}
      <section className="rounded-2xl border p-6 md:p-8 bg-[#FEE440]/20 dark:bg-[#FEE440]/10">
        <h2 className="text-h3 mb-3">Conclusion</h2>
        <p>
          <b>WTTJ Tech+</b> améliore la transparence, personnalise l'expérience et accompagne les seniors pour postuler en confiance.
          Next : déployer le MVP, mesurer, itérer (CTA onboarding & placement IA), puis étendre au-delà de la tech si résultats probants.
        </p>
      </section>

      {/* Épilogue */}
      <section className="space-y-3">
        <h3 className="text-h4">Ce qui aurait pu être fait différemment</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Explorer l'angle <b>B2B</b> (entreprises) en plus du B2C.</li>
          <li>Tester d'autres segments seniors hors tech.</li>
          <li>Ajouter des tests quantitatifs pour valider à plus grande échelle.</li>
        </ul>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Découvrez mes autres projets"
        description="Explorez comment je transforme des insights utilisateurs en produits validés"
        ctaText="Voir le portfolio"
        onClick={() => navigate('/')}
        className="my-6"
      />

      {/* Liens externes */}
      <section className="pt-4 border-t">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li><a className="underline hover:text-accent" href="https://prototype-wttj.lovable.app/" target="_blank" rel="noopener noreferrer">Prototype Lovable</a></li>
          <li><span className="text-muted-foreground">Backlog Notion / Research Miro (liens internes)</span></li>
        </ul>
      </section>
    </div>
  );
};

const ContentPM = () => {
  const navigate = useNavigate();
  
  return (
    <div className="space-y-16">
      {/* TL;DR */}
      <CaseTldr />

      {/* Pivot stratégique EN PREMIER */}
      <section className="space-y-4">
        <h2 className="text-h3">Pivot stratégique</h2>
        <CasePivot />
        <CaseImage
          alt="Opportunity tree"
          desktopSrc="/WTTJ/pivot-desktop.png"
          caption="Arbre d'opportunités - Recentrage stratégique"
        />
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="rounded-xl border p-4 bg-card">
            <h4 className="font-semibold mb-2">Impact Business</h4>
            <p className="text-sm">CTR seniors : 11% → 13%</p>
            <p className="text-sm">+300 à +800 profils activés</p>
          </div>
          <div className="rounded-xl border p-4 bg-card">
            <h4 className="font-semibold mb-2">Valeur / Effort</h4>
            <p className="text-sm">Standardisation et onboarding livrables rapidement</p>
          </div>
          <div className="rounded-xl border p-4 bg-card">
            <h4 className="font-semibold mb-2">Différenciation</h4>
            <p className="text-sm">Accompagnement IA + matching CV</p>
          </div>
        </div>
      </section>

      {/* Roadmap & KPIs */}
      <section className="space-y-4">
        <h2 className="text-h3">Roadmap & KPIs</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="roadmap-now">
            <div className="text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: '#1976D2' }}>Now</div>
            <div className="text-base font-medium">Standardisation + Onboarding</div>
          </div>
          <div className="roadmap-next">
            <div className="text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: '#1565C0' }}>Next</div>
            <div className="text-base font-medium">Assistant IA + Matching CV</div>
          </div>
          <div className="roadmap-later">
            <div className="text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: '#1565C0' }}>Later</div>
            <div className="text-base font-medium">Coaching IA avancé + analytics recruteurs</div>
          </div>
        </div>
        <CaseImage
          alt="Roadmap Now Next Later"
          desktopSrc="/WTTJ/etude_de_cas_p18_desktop.png"
          caption="Roadmap : priorisation par phases Now / Next / Later"
        />
      </section>

      {/* Go-to-market */}
      <section className="space-y-4">
        <h2 className="text-h3">Go-to-market</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border p-4 bg-card">
            <h4 className="font-semibold mb-2">Cible</h4>
            <p className="text-sm">Profils tech 5–8 ans d'expérience</p>
          </div>
          <div className="rounded-xl border p-4 bg-card">
            <h4 className="font-semibold mb-2">Message</h4>
            <p className="text-sm">Transparence, accompagnement, matching IA</p>
          </div>
          <div className="rounded-xl border p-4 bg-card">
            <h4 className="font-semibold mb-2">Canaux</h4>
            <p className="text-sm">Onboarding in-app, email nurturing</p>
          </div>
        </div>
      </section>

      {/* Risques & Parades */}
      <section className="grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-3">
          <h2 className="text-h3">Risques & Parades</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><b>Abandon onboarding</b> → analytics par étape, itérations wording</li>
            <li><b>IA sous-utilisée</b> → A/B placement, triggers contextuels</li>
            <li><b>Matching technique</b> → transparence "beta", feedback beta-testeurs</li>
          </ul>
        </div>
        <CaseImage
          alt="Matrice de risques"
          desktopSrc="/WTTJ/risques-desktop.png"
          caption="Matrice de risques et stratégies de mitigation"
        />
      </section>

      {/* Prototype & Tests (résultats) */}
      <section className="space-y-8">
        <div>
          <h2 className="text-h3 mb-4">Tests utilisateurs - Résultats</h2>
          <p className="text-base mb-6">
            4 tests utilisateurs pour valider le MVP avant déploiement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="test-positive p-5 rounded-xl border-2">
              <h4 className="font-medium mb-2">✅ Validations</h4>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>Offres plus lisibles & pertinentes</li>
                <li>Onboarding rassurant</li>
                <li>Matching CV motivant</li>
              </ul>
            </div>
            <div className="test-improvement p-5 rounded-xl border-2">
              <h4 className="font-medium mb-2">🔄 Itérations</h4>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>Wording CTA onboarding</li>
                <li>Placement assistant IA</li>
              </ul>
            </div>
          </div>

          <a 
            href="https://prototype-wttj.lovable.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group hover:opacity-90 transition-opacity"
          >
            <CaseImage
              alt="Prototype onboarding"
              desktopSrc="/WTTJ/proto-onboarding-desktop.png"
              caption="🔗 Prototype Lovable – Cliquez pour tester"
            />
          </a>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Synthèse des retours</h3>
          <CaseImage
            alt="Synthèse tests"
            desktopSrc="/WTTJ/tests-desktop.png"
            caption="Synthèse des retours utilisateurs"
          />
        </div>
      </section>

      {/* Conclusion */}
      <section className="rounded-2xl border p-6 md:p-8 bg-[#FEE440]/20 dark:bg-[#FEE440]/10">
        <h2 className="text-h3 mb-3">Conclusion</h2>
        <p>
          MVP priorisé selon impact/effort (RICE), testé avec 4 utilisateurs, prêt pour déploiement.
          Next : mesurer adoption, itérer sur wording & IA placement, étendre si KPIs validés.
        </p>
      </section>

      {/* Épilogue */}
      <section className="space-y-3">
        <h3 className="text-h4">Ce qui aurait pu être fait différemment</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Explorer l'angle <b>B2B</b> en parallèle</li>
          <li>Tests quantitatifs à plus grande échelle</li>
          <li>Analyse compétitive approfondie</li>
        </ul>
      </section>

      {/* CTA */}
      <CTABanner
        title="Discutons de vos projets produit"
        description="PM orienté discovery, priorisation et delivery rapide"
        ctaText="Voir le portfolio"
        onClick={() => navigate('/')}
        className="my-6"
      />
    </div>
  );
};

const ContentDesigner = () => {
  const navigate = useNavigate();
  
  return (
    <div className="space-y-16">
      {/* TL;DR */}
      <CaseTldr />

      {/* Discovery & Research */}
      <section className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            <h2 className="text-h3">Discovery & Research</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>8 entretiens vidéo avec profils seniors (tech & autres)</li>
              <li>Verbatims & JTBD mapping</li>
              <li>Insights clés : transparence salaire, filtres pertinents, accompagnement</li>
              <li>Analyse comportementale : CTR 11% vs 20% juniors</li>
            </ul>
          </div>
          <CaseImage
            alt="JTBD & verbatims"
            desktopSrc="/WTTJ/jtbd-desktop.png"
            caption="Jobs-to-be-Done & verbatims clés"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-h4">Personas & User Journey</h3>
          <CaseImage
            alt="Parcours utilisateur"
            desktopSrc="/WTTJ/etude_de_cas_p31_desktop.png"
            caption="Cartographie du parcours utilisateur seniors"
          />
        </div>
      </section>

      {/* Design Process */}
      <section className="space-y-4">
        <h2 className="text-h3">Design Process</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border p-4 bg-card">
            <h4 className="font-semibold mb-2">1. Wireframes</h4>
            <p className="text-sm">Exploration rapide des concepts clés</p>
          </div>
          <div className="rounded-xl border p-4 bg-card">
            <h4 className="font-semibold mb-2">2. Maquettes Figma</h4>
            <p className="text-sm">Design system léger, itérations</p>
          </div>
          <div className="rounded-xl border p-4 bg-card">
            <h4 className="font-semibold mb-2">3. Prototype Lovable</h4>
            <p className="text-sm">Finalisation & publication pour tests</p>
          </div>
        </div>
      </section>

      {/* Prototype & Tests */}
      <section className="space-y-8">
        <div>
          <h2 className="text-h3 mb-4">Prototype & Tests utilisateurs</h2>
          <p className="text-base mb-6">
            4 tests utilisateurs avec des profils issus de la discovery pour valider le prototype.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="test-positive p-5 rounded-xl border-2">
              <h4 className="font-medium mb-2">✅ Points forts</h4>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>Offres plus lisibles & pertinentes</li>
                <li>Onboarding rassurant</li>
                <li>Matching CV motivant</li>
              </ul>
            </div>
            <div className="test-improvement p-5 rounded-xl border-2">
              <h4 className="font-medium mb-2">🔍 Axes d'amélioration</h4>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>Wording du CTA onboarding</li>
                <li>Placement de l'assistant IA</li>
                <li>Hiérarchie visuelle filtres</li>
              </ul>
            </div>
          </div>

          <a 
            href="https://prototype-wttj.lovable.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group hover:opacity-90 transition-opacity"
          >
            <CaseImage
              alt="Prototype onboarding"
              desktopSrc="/WTTJ/proto-onboarding-desktop.png"
              caption="🔗 Prototype Lovable – Cliquez pour tester"
            />
          </a>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Résultats des tests</h3>
          <CaseImage
            alt="Résultats des tests"
            desktopSrc="/WTTJ/tests-desktop.png"
            caption="Synthèse des retours utilisateurs"
          />
        </div>
      </section>

      {/* Décisions design clés */}
      <section className="space-y-4">
        <h2 className="text-h3">Décisions design clés</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border p-4 bg-card">
            <h4 className="font-semibold mb-2">Standardisation offres</h4>
            <p className="text-sm">Salaire, remote, missions, stack technique visibles en un coup d'œil</p>
          </div>
          <div className="rounded-xl border p-4 bg-card">
            <h4 className="font-semibold mb-2">Onboarding personnalisé</h4>
            <p className="text-sm">Critères seniors : années d'XP, management, remote, stack</p>
          </div>
          <div className="rounded-xl border p-4 bg-card">
            <h4 className="font-semibold mb-2">Assistant IA non-intrusif</h4>
            <p className="text-sm">Suggestions contextuelles, pas de pop-up agressive</p>
          </div>
          <div className="rounded-xl border p-4 bg-card">
            <h4 className="font-semibold mb-2">Progression claire</h4>
            <p className="text-sm">Indicateurs de matching, étapes onboarding visibles</p>
          </div>
        </div>
      </section>

      {/* Vue d'ensemble */}
      <section className="space-y-4">
        <h2 className="text-h3">Vue d'ensemble design</h2>
        <CaseImage
          alt="Mosaïque design"
          desktopSrc="/WTTJ/etude_de_cas_p29_desktop.png"
          caption="Vue d'ensemble du système"
        />
      </section>

      {/* Conclusion */}
      <section className="rounded-2xl border p-6 md:p-8 bg-[#FEE440]/20 dark:bg-[#FEE440]/10">
        <h2 className="text-h3 mb-3">Conclusion</h2>
        <p>
          Design centré utilisateur : de la research aux tests, chaque décision validée avec la cible.
          Prototype fonctionnel en 12 jours, prêt pour itérations basées sur métriques réelles.
        </p>
      </section>

      {/* Épilogue */}
      <section className="space-y-3">
        <h3 className="text-h4">Ce qui aurait pu être fait différemment</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Design system plus robuste (composants réutilisables)</li>
          <li>Tests d'accessibilité (WCAG) plus approfondis</li>
          <li>Micro-interactions et états de chargement plus travaillés</li>
        </ul>
      </section>

      {/* CTA */}
      <CTABanner
        title="Voir mes autres projets design"
        description="De la recherche utilisateur au prototype testé"
        ctaText="Portfolio complet"
        onClick={() => navigate('/')}
        className="my-6"
      />

      {/* Liens */}
      <section className="pt-4 border-t">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li><a className="underline hover:text-accent" href="https://prototype-wttj.lovable.app/" target="_blank" rel="noopener noreferrer">Prototype Lovable interactif</a></li>
        </ul>
      </section>
    </div>
  );
};

// ============= MAIN COMPONENT =============

export default function WttjPage() {
  const navigate = useNavigate();
  const { activeAudience, setActiveAudience, audiences } = useAudience('default');

  const audienceContent = [
    { 
      id: 'default', 
      label: 'Vue d\'ensemble', 
      content: <ContentDefault /> 
    },
    { 
      id: 'pm', 
      label: 'Product Manager', 
      content: <ContentPM /> 
    },
    { 
      id: 'design', 
      label: 'Designer', 
      content: <ContentDesigner /> 
    },
  ];

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      navigate('/');
    }
  };

  return (
    <>
      <Navigation />
      <CaseStudyLayout
        title="Welcome to the Jungle — Conversion Seniors"
        subtitle="De l'insight utilisateur à un MVP priorisé, testé et livré en 12 jours"
        heroImage={wttjHero}
        audiences={audienceContent}
        activeAudience={activeAudience}
        onAudienceChange={setActiveAudience}
      />
      <Footer
        siteName="Ivan de Murard"
        tagline="Product Designer & Manager crafting user-centered experiences"
        sections={[
          { id: "home", label: "Back to Portfolio" }
        ]}
        onSectionClick={scrollToSection}
      />
    </>
  );
}
