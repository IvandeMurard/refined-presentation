// Utilitaire universel : tire d'abord Plausible, sinon no-op.
export function trackFooterSocial(network: string) {
  try {
    // Plausible (hébergé ou self-hosted). Compte comme "custom event".
    // @ts-ignore
    if (typeof window !== "undefined" && typeof window.plausible === "function") {
      // Nom d'event clair + dimension "network"
      // @ts-ignore
      window.plausible("footer_social_click", { props: { network } });
      return;
    }
  } catch {
    // no-op : jamais bloquant
  }
}
