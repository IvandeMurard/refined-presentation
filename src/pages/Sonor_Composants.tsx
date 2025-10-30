// src/pages/Sonor_Composants.tsx
// FICHIER 1/4 : Composants réutilisables pour le case study SONOR
// Version conforme aux spécifications validées
// Chiffres corrigés : 20+ entretiens, 4 co-fondateurs (dont 1 dev/data-scientist à mi-temps)

import React, { useState, useRef, useEffect } from "react";
import { InlineExpand } from "@/components/InlineExpand";
import { Plus, Volume2, Play, Pause, X } from "lucide-react";

// ============= COMPOSANT TERM EXPLAIN =============
export const TermExplain = ({ term, children }: { term: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const id = `term-${term.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <span className="inline-block relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        className="
          relative inline-flex items-center gap-1
          text-foreground font-medium
          underline decoration-dotted decoration-accent/50 underline-offset-4
          hover:decoration-accent hover:text-accent
          transition-all duration-200
          cursor-help
        "
      >
        {term}
        <Plus className="w-3.5 h-3.5 opacity-60" />
      </button>

      <InlineExpand open={open} ariaId={id}>
        <div
          id={`${id}-panel`}
          className="
            absolute z-50 left-0 top-full mt-2
            min-w-[280px] max-w-[400px]
            p-4 rounded-xl
            bg-card/95 backdrop-blur-md
            border border-accent/30
            shadow-2xl
          "
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
              <Plus className="w-4 h-4 text-accent" />
            </div>
            <div className="flex-1">
              <strong className="block text-sm font-semibold text-accent mb-1">{term}</strong>
              <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
            </div>
          </div>
        </div>
      </InlineExpand>
    </span>
  );
};

// ============= COMPOSANT SECTION EXPANDABLE =============
export const ExpandSection = ({
  id,
  title,
  children,
  defaultOpen = false,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="space-y-3">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        className="flex items-center justify-between w-full group cursor-pointer"
      >
        <h4 className="font-semibold text-base md:text-lg group-hover:underline underline-offset-4">{title}</h4>
        <Plus className={`w-5 h-5 transition-transform duration-300 ${open ? "rotate-45" : ""}`} aria-hidden="true" />
      </button>
      <InlineExpand open={open} ariaId={id}>
        <div id={`${id}-panel`} className="pt-2 space-y-3 text-sm text-muted-foreground">
          {children}
        </div>
      </InlineExpand>
    </div>
  );
};

// ============= COMPOSANT BANDEAU AUDIO =============
export const BandeauAudio = ({ language }: { language: string }) => {
  const [isFixed, setIsFixed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(240);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  // Detect theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Audio event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleInitialClick = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsFixed(true);
      } catch (error) {
        console.error("Audio playback failed:", error);
      }
    }
  };

  const togglePlayPause = async () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error("Audio playback failed:", error);
      }
    }
  };

  const handleClose = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsFixed(false);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const circumference = 2 * Math.PI * 23;
  const strokeDashoffset = circumference * (1 - currentTime / duration);

  return (
    <>
      <audio ref={audioRef} src="/medianesrineexcerpt.mp3" preload="metadata" />

      {!isFixed ? (
        // État 1 : Bouton initial (inline) - Enhanced visibility
        <button
          onClick={handleInitialClick}
          className="inline-flex items-center gap-3 px-8 py-4
            bg-gradient-to-r from-accent/20 to-accent/10
            backdrop-blur-md 
            border-2 border-accent/40
            rounded-full
            shadow-lg shadow-accent/20
            hover:shadow-xl hover:shadow-accent/30
            hover:scale-105 hover:border-accent/60
            transition-all duration-300
            text-foreground font-semibold text-base
            cursor-pointer"
          aria-label={language === "fr" ? "Lancer la lecture audio" : "Start audio playback"}
        >
          <Volume2 className="w-6 h-6 text-accent" />
          <span>
            {language === "fr" ? "🎧 Écouter le résumé (4 min)" : "🎧 Listen to summary (4 min)"}
          </span>
        </button>
      ) : (
        // État 2 : Bouton fixe rond + Mini player
        <>
          <button
            onClick={togglePlayPause}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="fixed right-4 bottom-[152px] z-40 w-[52px] h-[52px] md:w-[52px] md:h-[52px] 
              rounded-full transition-all duration-300 cursor-pointer
              hover:scale-105"
            style={{
              background: isDark 
                ? "rgba(15, 23, 42, 0.6)" 
                : "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              border: isDark 
                ? "1px solid rgba(255, 255, 255, 0.2)" 
                : "1px solid rgba(0, 0, 0, 0.15)",
              boxShadow: isDark
                ? "0 4px 16px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                : "0 6px 20px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 1)"
            }}
            role="button"
            aria-label={
              isPlaying 
                ? `${language === "fr" ? "Pause" : "Pause"} - ${formatTime(currentTime)} / ${formatTime(duration)}`
                : `${language === "fr" ? "Lecture" : "Play"} - ${formatTime(currentTime)} / ${formatTime(duration)}`
            }
            aria-pressed={isPlaying}
            aria-live="polite"
            tabIndex={0}
          >
            {/* Progress ring SVG */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx="26"
                cy="26"
                r="23"
                stroke={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="26"
                cy="26"
                r="23"
                stroke="hsl(var(--accent))"
                strokeWidth="2"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-300"
              />
            </svg>

            {/* Icône Volume */}
            <Volume2 
              className={`w-5 h-5 relative z-10 transition-all ${
                isPlaying ? "animate-pulse text-accent" : "text-foreground"
              }`} 
            />
          </button>

          {/* Mini Player Slide-Out (Desktop only) */}
          {isHovered && (
            <div
              className="hidden md:block fixed right-[72px] bottom-[152px] z-40 
                w-80 rounded-2xl p-4
                transition-all duration-300"
              style={{
                background: isDark 
                  ? "rgba(15, 23, 42, 0.95)" 
                  : "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                border: isDark 
                  ? "1px solid rgba(255, 255, 255, 0.2)" 
                  : "1px solid rgba(0, 0, 0, 0.15)",
                boxShadow: isDark
                  ? "0 8px 32px rgba(0, 0, 0, 0.5)"
                  : "0 8px 32px rgba(0, 0, 0, 0.15)",
                animation: "slideInFromRight 0.3s ease-out"
              }}
            >
              <div className="flex items-center gap-3">
                {/* Play/Pause button */}
                <button
                  onClick={togglePlayPause}
                  className="flex-shrink-0 w-10 h-10 rounded-full 
                    bg-accent/20 hover:bg-accent/30 
                    flex items-center justify-center transition-colors"
                  aria-label={isPlaying ? (language === "fr" ? "Pause" : "Pause") : (language === "fr" ? "Lecture" : "Play")}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-accent" />
                  ) : (
                    <Play className="w-5 h-5 text-accent ml-0.5" />
                  )}
                </button>

                {/* Info & Progress bar */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate text-foreground">
                    {language === "fr" ? "Résumé audio" : "Audio summary"}
                  </p>

                  {/* Progress bar */}
                  <div className="mt-2 h-1 bg-accent/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>

                  {/* Time display */}
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="flex-shrink-0 w-8 h-8 rounded-full 
                    hover:bg-accent/20 flex items-center justify-center transition-colors"
                  aria-label={language === "fr" ? "Fermer" : "Close"}
                >
                  <X className="w-4 h-4 text-foreground" />
                </button>
              </div>
            </div>
          )}
        </>
      )}

      <style>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

// ============= COMPOSANT TABS APPROFONDIES =============
export const TabsApprofondir = ({ language }: { language: string }) => {
  return (
    <div className="space-y-8">
      <TabProcessPM language={language} />
    </div>
  );
};

// ============= TAB PROCESS PM =============
const TabProcessPM = ({ language }: { language: string }) => {
  if (language === "fr") {
    return (
      <div className="space-y-8">
        <section className="space-y-4">
          <h3 className="text-h4">Discovery approfondie</h3>
          <p>
            Phase cruciale de 3 mois (Oct. 2020 - Dec. 2021) avec <b>20+ entretiens qualitatifs</b> auprès de :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <b>Collectivités territoriales</b> : élus, chargés de mission environnement, responsables open data
            </li>
            <li>
              <b>Acteurs privés</b> : promoteurs immobiliers, bailleurs sociaux (CDC Habitat, Icade, OGIC)
            </li>
            <li>
              <b>Ministères et institutions</b> : Ministère de l'Écologie, Banque des Territoires
            </li>
            <li>
              <b>Experts techniques</b> : BruitParif, CSTB, CNRS, Qualitel
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-h4">Méthodologie JTBD (Jobs-to-be-Done)</h3>
          <p>
            Analyse des tâches des décideurs publics pour identifier les <i>jobs fonctionnels</i> :
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-card">
              <h4 className="font-semibold mb-2">Job 1 : Cartographier</h4>
              <p className="text-sm">Identifier les zones à risque pour prioriser les interventions</p>
            </div>
            <div className="p-4 rounded-lg bg-card">
              <h4 className="font-semibold mb-2">Job 2 : Agir</h4>
              <p className="text-sm">Recommandations actions publiques concrètes et chiffrées</p>
            </div>
            <div className="p-4 rounded-lg bg-card">
              <h4 className="font-semibold mb-2">Job 3 : Communiquer</h4>
              <p className="text-sm">Sensibiliser citoyens et rendre compte actions menées</p>
            </div>
            <div className="p-4 rounded-lg bg-card">
              <h4 className="font-semibold mb-2">Job 4 : Se conformer</h4>
              <p className="text-sm">Respecter obligations réglementaires (PPBE, cartographie)</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-h4">Priorisation MoSCoW</h3>
          <ExpandSection id="must-have" title="Must Have (MVP)" defaultOpen={true}>
            <ul className="list-disc pl-5 space-y-1">
              <li>Cartographie pollution sonore (heatmap)</li>
              <li>Indicateurs dB jour/nuit</li>
              <li>Identification points noirs</li>
              <li>Export données (CSV, PDF)</li>
            </ul>
          </ExpandSection>

          <ExpandSection id="should-have" title="Should Have (Phase 2)">
            <ul className="list-disc pl-5 space-y-1">
              <li>Recommandations actions publiques automatisées</li>
              <li>Suivi réglementaire (conformité PPBE)</li>
              <li>Dashboard décideur personnalisable</li>
            </ul>
          </ExpandSection>

          <ExpandSection id="could-have" title="Could Have (Priorisation future)">
            <ul className="list-disc pl-5 space-y-1">
              <li>Module communication citoyenne automatisée</li>
              <li>Dashboard analytics avancé pour élus</li>
              <li>Intégration systèmes SIG existants</li>
            </ul>
          </ExpandSection>

          <ExpandSection id="wont-have" title="Won't Have (Écartés)">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <b>Capteurs IoT propriétaires</b> : Impact technologique + temps de développement trop important.
                Volonté de bypasser l'usage de capteurs en valorisant l'information citoyenne via l'open data.
              </li>
              <li>
                <b>Module prédiction météo sonore</b> : Complexité technique excessive pour MVP
              </li>
            </ul>
          </ExpandSection>
        </section>

        <section className="space-y-4">
          <h3 className="text-h4">Sprints & cadences</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <b>Sprints 2–3 semaines</b> : Cycles courts pour itérer rapidement sur prototype et hypothèses business
            </li>
            <li>
              <b>6+ jalons mensuels</b> : Restitutions avec mentors (Banque des Territoires, Matrice)
            </li>
            <li>
              <b>Reporting financier</b> : Suivi dépenses et jalons de financement
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-h4">Obstacles rencontrés</h3>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-card border-l-4 border-destructive">
              <h4 className="font-semibold mb-2">Disponibilité données open data</h4>
              <p className="text-sm">
                Manque de données ouvertes fiables et standardisées sur la pollution sonore. Nécessité de normaliser les
                sources hétérogènes.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border-l-4 border-destructive">
              <h4 className="font-semibold mb-2">Complexité technique sous-estimée</h4>
              <p className="text-sm">
                Difficulté d'accès et de traitement des données de qualité en une cartographie exploitable.
                Ralentissement développement prototype.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // English version
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h3 className="text-h4">In-depth Discovery</h3>
        <p>
          Critical 3-month phase (Oct. 2020 - Dec. 2021) with <b>20+ qualitative interviews</b> with:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <b>Local authorities</b>: elected officials, environmental officers, open data managers
          </li>
          <li>
            <b>Private sector</b>: real estate developers, social housing bodies (CDC Habitat, Icade, OGIC)
          </li>
          <li>
            <b>Ministries and institutions</b>: Ministry of Ecology, Banque des Territoires
          </li>
          <li>
            <b>Technical experts</b>: BruitParif, CSTB, CNRS, Qualitel
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-h4">JTBD Methodology (Jobs-to-be-Done)</h3>
        <p>
          Analysis of public decision-makers' tasks to identify <i>functional jobs</i>:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-card">
            <h4 className="font-semibold mb-2">Job 1: Map</h4>
            <p className="text-sm">Identify risk zones to prioritize interventions</p>
          </div>
          <div className="p-4 rounded-lg bg-card">
            <h4 className="font-semibold mb-2">Job 2: Act</h4>
            <p className="text-sm">Concrete and quantified public action recommendations</p>
          </div>
          <div className="p-4 rounded-lg bg-card">
            <h4 className="font-semibold mb-2">Job 3: Communicate</h4>
            <p className="text-sm">Raise citizen awareness and report on actions taken</p>
          </div>
          <div className="p-4 rounded-lg bg-card">
            <h4 className="font-semibold mb-2">Job 4: Comply</h4>
            <p className="text-sm">Meet regulatory obligations (PPBE, mapping)</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-h4">MoSCoW Prioritization</h3>
        <ExpandSection id="must-have-en" title="Must Have (MVP)" defaultOpen={true}>
          <ul className="list-disc pl-5 space-y-1">
            <li>Noise pollution mapping (heatmap)</li>
            <li>Day/night dB indicators</li>
            <li>Hotspot identification</li>
            <li>Data export (CSV, PDF)</li>
          </ul>
        </ExpandSection>

        <ExpandSection id="should-have-en" title="Should Have (Phase 2)">
          <ul className="list-disc pl-5 space-y-1">
            <li>Automated public action recommendations</li>
            <li>Regulatory monitoring (PPBE compliance)</li>
            <li>Customizable decision-maker dashboard</li>
          </ul>
        </ExpandSection>
      </section>
    </div>
  );
};
