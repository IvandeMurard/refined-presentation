// src/pages/Sonor.tsx
import * as React from "react";
import { CaseStudyLayout } from "@/components/work/CaseStudyLayout";
import { sonorCase } from "@/data/cases/sonor.case";

// Blocs de contenu (tu peux déplacer ça dans /components si tu préfères)
const ContentProduct = () => (
  <>
    <h3>Contexte & objectif produit</h3>
    <p>De l’insight à l’MVP : mise en place d’un SaaS Open Data pour visualiser et réduire le bruit urbain.</p>
    <ul>
      <li>Découverte : 30+ entretiens (collectivités, opérateurs urbains)</li>
      <li>KPIs : couverture cartographique, fraîcheur des données, usages</li>
      <li>Prototypage + tests : 3 cycles, design system léger</li>
    </ul>
  </>
);

const ContentImpact = () => (
  <>
    <h3>Impact & résultats</h3>
    <ul>
      <li>Incubation Matrice + Banque des Territoires</li>
      <li>3 pilotes avec villes / intercos</li>
      <li>20k€ financements obtenus</li>
    </ul>
  </>
);

const ContentProcess = () => (
  <>
    <h3>Process & apprentissages</h3>
    <ul>
      <li>Carto + pipeline de données (qualité, normalisation)</li>
      <li>Itérations rapides 0→1, validation hypothèses</li>
      <li>Accessibilité et lisibilité des couches de bruit</li>
    </ul>
  </>
);

export default function SonorPage() {
  const [audience, setAudience] = React.useState("product");

  const audiences = [
    { id: "product",  label: "Produit",   content: <ContentProduct /> },
    { id: "impact",   label: "Impact",    content: <ContentImpact /> },
    { id: "process",  label: "Process",   content: <ContentProcess /> },
  ];

  return (
    <CaseStudyLayout
      title={sonorCase.title}
      subtitle={sonorCase.subtitle}
      heroImage={sonorCase.image}
      audiences={audiences}
      activeAudience={audience}
      onAudienceChange={setAudience}
    />
  );
}
