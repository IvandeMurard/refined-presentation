// components/case/CaseTldr.tsx
export default function CaseTldr() {
  return (
    <aside
      className="rounded-2xl p-5 md:p-6 lg:p-8 border shadow-sm"
      style={{ backgroundColor: "#FEE440" }}
      aria-label="Project TL;DR"
    >
      <h3 className="text-lg font-bold mb-4 text-foreground">TL;DR</h3>
      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base font-medium leading-relaxed">
        <li>
          <b>Contexte :</b> Cas pratique de validation de la formation Product Management - Maestro.
        </li>
        <li>
          <b>Durée & équipe :</b> 12 jours, 4 PM.
        </li>
        <li>
          <b>Discovery :</b> 8 entretiens qualitatifs vidéo avec profils seniors (tech & autres).
        </li>
        <li>
          <b>Pivot :</b> recentrage sur la cible <i>tech 5–8 ans d'expérience</i>.
        </li>
        <li>
          <b>Prototype :</b> Figma → Lovable, <b>4 tests utilisateurs</b>.
        </li>
        <li>
          <b>MVP :</b> priorisé, testé et livré.
        </li>
      </ul>
    </aside>
  );
}
