// components/case/CasePivot.tsx
export default function CasePivot() {
  return (
    <section className="rounded-2xl border bg-zinc-50 dark:bg-zinc-900/40 p-6 md:p-8">
      <h3 className="text-lg md:text-xl font-semibold mb-3">Pivot stratégique</h3>
      <p className="text-sm md:text-base mb-4">
        Recentrage sur les <b>profils tech 5–8 ans d’expérience</b> pour maximiser l’impact court terme et la faisabilité du MVP.
      </p>
      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
        <li><b>Impact :</b> forte adéquation offre/demande côté entreprises clientes.</li>
        <li><b>Valeur / Effort :</b> standardisation et onboarding livrables rapidement.</li>
        <li><b>Différenciation :</b> accompagnement IA + matching CV pour pertinence immédiate.</li>
      </ul>
    </section>
  );
}
