// src/components/case/CaseTldr.tsx
import React from "react";
import clsx from "clsx";

type CaseTldrProps = {
  title?: string;
  /** Passe chaque ligne du TL;DR comme un ReactNode (un <li>) */
  items?: React.ReactNode[];
  /** Style visuel: "neutral" pour fond standard du site, "wttj" pour fond jaune historique */
  tone?: "neutral" | "wttj";
  className?: string;
};

/**
 * Composant TL;DR générique.
 * - Si `items` N’EST PAS fourni → fallback WTTJ (compatibilité ascendante).
 * - Si `items` EST fourni → on affiche ces items (recommandé pour Sonor).
 * - `tone` permet de changer facilement le fond (neutral vs wttj).
 */
export default function CaseTldr({
  title = "TL;DR",
  items,
  tone = items ? "neutral" : "wttj",
  className,
}: CaseTldrProps) {
  const isWttj = tone === "wttj";

  return (
    <aside
      className={clsx(
        "rounded-2xl p-5 md:p-6 lg:p-8 border shadow-sm",
        isWttj ? "border-transparent" : "bg-card",
        className
      )}
      style={isWttj ? { backgroundColor: "#FEE440" } : undefined}
      aria-label="Project TL;DR"
    >
      <h3 className="text-lg font-bold mb-4 text-foreground">{title}</h3>

      <ul className="list-disc pl-5 space-y-2 text-sm md:text-base leading-relaxed">
        {items ? (
          items.map((node, i) => <li key={i}>{node}</li>)
        ) : (
          <>
            {/* Fallback WTTJ (ancien comportement) */}
            <li><b>Contexte :</b> Cas pratique de validation de la formation Product Management – Maestro.</li>
            <li><b>Durée & équipe :</b> 12 jours, 4 PM.</li>
            <li><b>Discovery :</b> 8 entretiens qualitatifs vidéo avec profils seniors (tech & autres).</li>
            <li><b>Pivot :</b> recentrage sur la cible <i>tech 5–8 ans d’expérience</i>.</li>
            <li><b>Prototype :</b> Figma → Lovable, <b>4 tests utilisateurs</b>.</li>
            <li><b>MVP :</b> <b>priorisé, testé et livré</b>.</li>
          </>
        )}
      </ul>
    </aside>
  );
}
