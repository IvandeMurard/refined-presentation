import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type Provider =
  | { type: "form"; url: string } // ex: Formspree/Getform/Netlify Forms
  | { type: "json"; url: string; headers?: Record<string, string> }; // ex: /api/feedback, Airtable, Notion via webhook

type NudgeOpts = {
  enabled?: boolean;
  delayMs?: number;      // par défaut 25000
  scrollPct?: number;    // par défaut 0.8
};

type FeedbackWidgetProps = {
  provider: Provider;
  buttonLabel?: string;
  modalTitle?: string;
  submitLabel?: string;
  cancelLabel?: string;
  nudge?: NudgeOpts;
  storageKeys?: {
    shown?: string;      // localStorage key pour nudge
    submitted?: string;  // localStorage key pour submit
  };
  includeMeta?: boolean; // ajoute page/lang/theme dans la payload
  className?: string;    // hook styling facultatif
};

export const FeedbackWidget: React.FC<FeedbackWidgetProps> = ({
  provider,
  buttonLabel,
  modalTitle,
  submitLabel,
  cancelLabel,
  nudge = { enabled: true, delayMs: 25000, scrollPct: 0.8 },
  storageKeys = { shown: "fb_nudge_shown", submitted: "fb_submitted" },
  includeMeta = true,
  className
}) => {
  // --- Language
  const { isFrench } = useLanguage();
  
  // --- Translations
  const t = {
    buttonLabel: isFrench ? "✍️ Avis" : "✍️ Tips",
    modalTitle: isFrench ? "Qu'est-ce qu'on peut améliorer ?" : "Any feedback to help improve the site?",
    feedbackPlaceholder: isFrench ? "Votre retour (libre)..." : "Your feedback...",
    namePlaceholder: isFrench ? "Nom (facultatif)" : "Name (optional)",
    emailPlaceholder: isFrench ? "Email (facultatif)" : "Email (optional)",
    submitLabel: isFrench ? "Envoyer" : "Send",
    cancelLabel: isFrench ? "Annuler" : "Cancel",
    sendingLabel: isFrench ? "Envoi…" : "Sending…",
    successMessage: isFrench ? "Merci pour votre retour !" : "Thanks for your feedback!",
    nudgeText: isFrench ? "Une idée pour améliorer ce portfolio ?" : "Got an idea to improve this portfolio?",
    nudgeButton: isFrench ? "Laisser un avis" : "Leave feedback",
    closeLabel: isFrench ? "Fermer" : "Close"
  };
  
  // --- State & refs
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [nudgeVisible, setNudgeVisible] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [loading, setLoading] = useState(false);

  // --- Theme vars (auto dark si data-theme="dark" ou prefers dark)
  const isDark = useMemo(() => {
    const explicit = document.body?.getAttribute("data-theme") === "dark";
    const prefers = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    return explicit || prefers;
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.style.setProperty("--surface", "#0b0b0b");
      root.style.setProperty("--text", "#eaeaea");
      root.style.setProperty("--border", "#2a2a2a");
      root.style.setProperty("--accent", "#3b82f6");
    }
  }, [isDark]);

  // --- Nudge (timer + scroll, 1x/session)
  useEffect(() => {
    if (!nudge?.enabled) return;
    if (localStorage.getItem(storageKeys.shown!) || localStorage.getItem(storageKeys.submitted!)) return;

    const showNudge = () => {
      if (!localStorage.getItem(storageKeys.shown!) && !localStorage.getItem(storageKeys.submitted!)) {
        setNudgeVisible(true);
        localStorage.setItem(storageKeys.shown!, "1");
      }
    };

    const t = setTimeout(showNudge, nudge?.delayMs ?? 25000);

    const onScroll = () => {
      const scrolled = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (scrolled > (nudge?.scrollPct ?? 0.8)) {
        showNudge();
        clearTimeout(t);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, [nudge, storageKeys]);

  // --- Focus management
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => textareaRef.current?.focus(), 0);
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  // --- Submit handler
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // honeypot
    if (fd.get("_human_check")) return;

    // enrich meta
    if (includeMeta) {
      fd.set("page", `${location.pathname}${location.search}`);
      fd.set("lang", navigator.language || "en");
      fd.set("theme", isDark ? "dark" : "light");
      fd.set("ua", navigator.userAgent || "");
    }

    try {
      setLoading(true);
      if (provider.type === "form") {
        const r = await fetch(provider.url, { method: "POST", body: fd, headers: { Accept: "application/json" } });
        if (!r.ok) throw new Error(`Form submit failed: ${r.status}`);
      } else {
        // Build JSON payload
        const payload: Record<string, any> = {};
        fd.forEach((v, k) => (payload[k] = v));
        const r = await fetch(provider.url, {
          method: "POST",
          headers: { "Content-Type": "application/json", ...(provider.headers || {}) },
          body: JSON.stringify(payload)
        });
        if (!r.ok) throw new Error(`JSON submit failed: ${r.status}`);
      }
      setSuccess(true);
      localStorage.setItem(storageKeys.submitted!, "1");
      setTimeout(() => setOpen(false), 1400);
    } catch (err) {
      // on reste silencieux côté UI (console pour debug)
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Bouton flottant - positionné au-dessus du scroll-to-top */}
      <button
        aria-controls="fb-modal"
        aria-expanded={open}
        aria-label={buttonLabel || t.buttonLabel}
        onClick={() => setOpen(true)}
        className={className}
        style={{
          position: "fixed",
          right: 16,
          bottom: 80, // Positionné au-dessus du bouton scroll-to-top
          zIndex: 40,
          border: "1px solid var(--border,#e5e7eb)",
          background: "var(--surface,#fff)",
          color: "var(--text,#111)",
          padding: "10px 12px",
          borderRadius: 999,
          font: "500 14px/1.2 system-ui",
          opacity: 0.9,
          transition: "all 0.2s ease"
        }}
      >
        {buttonLabel || t.buttonLabel}
      </button>

      {/* Nudge bas de page */}
      {nudgeVisible && (
        <div
          id="fb-nudge"
          style={{
            position: "fixed",
            left: "50%",
            bottom: 12,
            transform: "translateX(-50%)",
            zIndex: 45,
            background: "var(--surface,#fff)",
            color: "var(--text,#111)",
            border: "1px solid var(--border,#e5e7eb)",
            borderRadius: 12,
            padding: "10px 12px",
            display: "flex",
            gap: 8,
            alignItems: "center",
            boxShadow: "0 6px 24px rgba(0,0,0,.12)"
          }}
        >
          <span style={{ font: "500 14px/1.2 system-ui" }}>{t.nudgeText}</span>
          <button
            onClick={() => {
              setNudgeVisible(false);
              setOpen(true);
            }}
            style={{
              border: 0,
              background: "var(--accent,#111)",
              color: "#fff",
              padding: "6px 10px",
              borderRadius: 8,
              font: "600 12px/1.2 system-ui"
            }}
          >
            {t.nudgeButton}
          </button>
          <button
            aria-label={t.closeLabel}
            onClick={() => setNudgeVisible(false)}
            style={{ border: 0, background: "transparent", fontSize: 16, lineHeight: 1 }}
          >
            ✕
          </button>
        </div>
      )}

      {/* Modal */}
      {open && (
        <div
          id="fb-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="fb-title"
          ref={dialogRef}
          onClick={(e) => e.target === dialogRef.current && setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            display: "grid",
            placeItems: "center",
            background: "rgba(0,0,0,.3)",
            backdropFilter: "saturate(120%) blur(2px)",
            zIndex: 50
          }}
        >
          <div
            style={{
              width: "min(92vw,520px)",
              border: "1px solid var(--border,#e5e7eb)",
              background: "var(--surface,#fff)",
              color: "var(--text,#111)",
              borderRadius: 12,
              padding: 16
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
              <h2 id="fb-title" style={{ margin: 0, font: "600 16px/1.3 system-ui" }}>
                {modalTitle || t.modalTitle}
              </h2>
              <button
                aria-label={t.closeLabel}
                onClick={() => setOpen(false)}
                style={{ border: 0, background: "transparent", fontSize: 18, lineHeight: 1 }}
              >
                ✕
              </button>
            </div>

            {!success ? (
              <form onSubmit={handleSubmit} style={{ marginTop: 12, display: "grid", gap: 8 }}>
                {/* Honeypot */}
                <input
                  type="text"
                  name="_human_check"
                  autoComplete="off"
                  tabIndex={-1}
                  style={{ position: "absolute", left: -9999, opacity: 0 }}
                />
                <textarea
                  ref={textareaRef}
                  name="feedback"
                  placeholder={t.feedbackPlaceholder}
                  required
                  rows={5}
                  style={{
                    width: "100%",
                    border: "1px solid var(--border,#e5e7eb)",
                    borderRadius: 8,
                    padding: 10,
                    font: "400 14px/1.5 system-ui",
                    resize: "vertical",
                    background: "var(--surface,#fff)",
                    color: "var(--text,#111)"
                  }}
                />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  <input
                    type="text"
                    name="name"
                    placeholder={t.namePlaceholder}
                    style={{
                      width: "100%",
                      border: "1px solid var(--border,#e5e7eb)",
                      borderRadius: 8,
                      padding: 10,
                      font: "400 14px/1.5 system-ui",
                      background: "var(--surface,#fff)",
                      color: "var(--text,#111)"
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder={t.emailPlaceholder}
                    style={{
                      width: "100%",
                      border: "1px solid var(--border,#e5e7eb)",
                      borderRadius: 8,
                      padding: 10,
                      font: "400 14px/1.5 system-ui",
                      background: "var(--surface,#fff)",
                      color: "var(--text,#111)"
                    }}
                  />
                </div>
                <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 4 }}>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    style={{
                      border: "1px solid var(--border,#e5e7eb)",
                      background: "transparent",
                      padding: "8px 12px",
                      borderRadius: 8,
                      font: "500 14px/1.2 system-ui",
                      color: "var(--text,#111)"
                    }}
                  >
                    {cancelLabel || t.cancelLabel}
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      border: 0,
                      background: "var(--accent,#111)",
                      color: "#fff",
                      padding: "8px 12px",
                      borderRadius: 8,
                      font: "600 14px/1.2 system-ui",
                      opacity: loading ? 0.8 : 1
                    }}
                  >
                    {loading ? t.sendingLabel : (submitLabel || t.submitLabel)}
                  </button>
                </div>
                {/* champs meta (provider form) */}
                {provider.type === "form" && (
                  <>
                    <input type="hidden" name="page" value="" />
                    <input type="hidden" name="lang" value="" />
                    <input type="hidden" name="theme" value="" />
                    <input type="hidden" name="ua" value="" />
                  </>
                )}
              </form>
            ) : (
              <p style={{ margin: "8px 0 0", font: "500 14px/1.4 system-ui" }}>{t.successMessage}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};