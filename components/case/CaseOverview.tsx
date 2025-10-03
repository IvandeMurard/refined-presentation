export default function CaseOverview() {
  return (
    <section aria-labelledby="overview-title" className="rounded-2xl border p-6 md:p-8"
             style={{ backgroundColor: "rgba(254,228,64,.18)" }}>
      <h2 id="overview-title" className="text-xl md:text-2xl font-semibold mb-4">
        Vue d’ensemble du projet
      </h2>

      <div className="grid gap-4 md:gap-6 md:grid-cols-3">
        <figure className="md:col-span-2">
          <img src="/WTTJ/userflow-desktop.jpg" alt="User flow WTTJ"
               className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm" loading="lazy" />
          <figcaption className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
            Parcours utilisateur (de la recherche à la candidature)
          </figcaption>
        </figure>

        <figure>
          <img src="/WTTJ/proto-onboarding-desktop.jpg" alt="Écran onboarding du prototype"
               className="w-full h-full object-cover rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm" loading="lazy" />
          <figcaption className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
            Prototype — Onboarding personnalisé
          </figcaption>
        </figure>

        <figure>
          <img src="/WTTJ/pivot-desktop.png" alt="Pivot stratégique — extrait opportunity tree"
               className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm" loading="lazy" />
          <figcaption className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
            Pivot : focus profils tech 5–8 ans d’expérience
          </figcaption>
        </figure>

        <figure>
          <img src="/WTTJ/rice-desktop.png" alt="Priorisation RICE du MVP"
               className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm" loading="lazy" />
          <figcaption className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
            MVP priorisé (RICE) : standardisation, onboarding, IA, matching
          </figcaption>
        </figure>

        <figure className="md:col-span-2">
          <img src="/WTTJ/kpis-desktop.png" alt="KPIs cibles"
               className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm" loading="lazy" />
          <figcaption className="mt-2 text-xs text-zinc-600 dark:text-zinc-400">
            KPIs cibles : CTR seniors 11→13, 70% onboarding, ≥1,5 usage/session, +300 à +800 profils activés
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
