// Utilitaire universel : tire d’abord Plausible, sinon Vercel, sinon no-op.
export function trackFooterSocial(network: string) {
  try {
    // Plausible (hébergé ou self-hosted). Compte comme "custom event".
    // @ts-ignore
    if (typeof window !== "undefined" && typeof window.plausible === "function") {
      // Nom d’event clair + dimension "network"
      // @ts-ignore
      window.plausible("footer_social_click", { props: { network } });
      return;
    }

    // Vercel Web Analytics (custom events → Pro/Enterprise)
    // lazy import pour éviter de casser si le pkg n’est pas installé
    import("@vercel/analytics").then((m) => {
      // @ts-ignore
      if (m?.track) m.track("footer_social_click", { network });
    }).catch(() => {/* no-op */});
  } catch {
    // no-op : jamais bloquant
  }
}
