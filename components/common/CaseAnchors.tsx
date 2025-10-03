// components/common/CaseAnchors.tsx
export default function CaseAnchors() {
  return (
    <nav className="flex flex-wrap items-center gap-3 justify-center mt-10">
      <a
        href="#top"
        className="rounded-lg border px-3 py-2 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
        aria-label="Retour en haut"
      >
        ↑ Retour en haut
      </a>
      <a
        href="/cases"  // ajuste l'URL de ta liste de case studies
        className="rounded-lg border px-3 py-2 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
        aria-label="Retour à la liste des case studies"
      >
        ← Tous les case studies
      </a>
    </nav>
  );
}
