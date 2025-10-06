// components/case/CasePrototypeHighlight.tsx
export default function CasePrototypeHighlight() {
  return (
    <section
      className="rounded-2xl border p-6 md:p-8 space-y-6"
      style={{ backgroundColor: "rgba(254,228,64,.18)" }}
      aria-labelledby="proto-title"
    >
      <header className="flex items-baseline justify-between gap-4">
        <h2 id="proto-title" className="text-xl md:text-2xl font-semibold">
          Prototype — Onboarding & lisibilité des offres
        </h2>
        <a
          href="https://prototype-wttj.lovable.app/"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium hover:shadow"
          style={{ backgroundColor: "#FEE440" }}
        >
          Ouvrir le prototype <span aria-hidden>↗</span>
        </a>
      </header>

      <div className="grid md:grid-cols-5 gap-4">
        <div className="md:col-span-3">
          <img
            src="/WTTJ/proto-onboarding-desktop.jpg"
            alt="Prototype — écran d’onboarding"
            className="w-full aspect-video object-cover rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm"
            loading="lazy"
          />
        </div>
        <div className="md:col-span-2 space-y-3">
          <ul className="list-disc pl-5 text-sm md:text-base space-y-2">
            <li>Onboarding personnalisé (critères seniors) pour un parcours adapté.</li>
            <li>Fiches offres standardisées (salaire, stack, remote, missions).</li>
            <li>Assistant IA (CV, pitch, préparation d’entretien).</li>
            <li>Matching CV ↔ Offres pour accélérer la décision.</li>
          </ul>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border p-3 text-xs">✅ Lisibilité & pertinence en hausse</div>
            <div className="rounded-lg border p-3 text-xs">⚠️ Wording CTA & placement IA à itérer</div>
          </div>
        </div>
      </div>
    </section>
  );
}
