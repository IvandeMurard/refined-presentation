// components/case/CasePivot.tsx
export default function CasePivot() {
  return (
    <section className="rounded-xl border-l-8 border-l-accent bg-accent/5 dark:bg-accent/10 p-8 md:p-10 space-y-4 shadow-md">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">⚡</span>
        <h3 className="text-xl md:text-2xl font-bold text-accent dark:text-accent-foreground">
          Pivot stratégique
        </h3>
      </div>
      <p className="text-base md:text-lg leading-relaxed">
        Recentrage sur les <b>profils tech 5–8 ans d'expérience</b> pour maximiser l'impact court terme et la faisabilité du MVP.
      </p>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="rounded-lg bg-background/80 dark:bg-card p-4 border border-accent/20">
          <h4 className="font-bold mb-1 text-accent">Impact</h4>
          <p className="text-sm">Forte adéquation offre/demande côté entreprises clientes</p>
        </div>
        <div className="rounded-lg bg-background/80 dark:bg-card p-4 border border-accent/20">
          <h4 className="font-bold mb-1 text-accent">Valeur / Effort</h4>
          <p className="text-sm">Standardisation et onboarding livrables rapidement</p>
        </div>
        <div className="rounded-lg bg-background/80 dark:bg-card p-4 border border-accent/20">
          <h4 className="font-bold mb-1 text-accent">Différenciation</h4>
          <p className="text-sm">Accompagnement IA + matching CV pour pertinence immédiate</p>
        </div>
      </div>
    </section>
  );
}
