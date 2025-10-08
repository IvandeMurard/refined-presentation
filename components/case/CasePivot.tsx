// components/case/CasePivot.tsx
export default function CasePivot() {
  return (
    <section className="rounded-xl border-l-8 border-l-accent bg-accent/5 dark:bg-accent/10 p-8 md:p-10 space-y-4 shadow-md">
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
        Pivot stratégique
      </h3>
      <p className="text-base md:text-lg leading-relaxed text-foreground">
        Recentrage sur les <b>profils tech 5–8 ans d'expérience</b> pour maximiser l'impact court terme et la faisabilité du MVP.
      </p>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="rounded-lg bg-background/80 dark:bg-card p-4 border border-accent/20">
          <h4 className="font-bold mb-1 text-accent dark:text-accent-foreground">Impact</h4>
          <p className="text-sm text-foreground dark:text-muted-foreground">Forte adéquation offre/demande côté entreprises clientes</p>
        </div>
        <div className="rounded-lg bg-background/80 dark:bg-card p-4 border border-accent/20">
          <h4 className="font-bold mb-1 text-accent dark:text-accent-foreground">Valeur / Effort</h4>
          <p className="text-sm text-foreground dark:text-muted-foreground">Standardisation et onboarding livrables rapidement</p>
        </div>
        <div className="rounded-lg bg-background/80 dark:bg-card p-4 border border-accent/20">
          <h4 className="font-bold mb-1 text-accent dark:text-accent-foreground">Différenciation</h4>
          <p className="text-sm text-foreground dark:text-muted-foreground">Accompagnement IA + matching CV pour pertinence immédiate</p>
        </div>
      </div>
    </section>
  );
}
