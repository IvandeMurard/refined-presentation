import { useEffect, useState } from "react";

interface EvaluationEngineDiagramProps {
  size?: "thumbnail" | "full";
  onClick?: () => void;
}

export function EvaluationEngineDiagram({ size = "thumbnail", onClick }: EvaluationEngineDiagramProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(
        window.matchMedia("(prefers-color-scheme: dark)").matches ||
        document.documentElement.classList.contains("dark")
      );
    };

    checkDarkMode();
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", checkDarkMode);

    // Also check for class changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      mediaQuery.removeEventListener("change", checkDarkMode);
      observer.disconnect();
    };
  }, []);

  // Colors for light/dark mode
  const colors = {
    light: {
      background: "#ffffff",
      text: "#111827",
      textMuted: "#4B5563",
      flowLine: "#d1d5db",
      flowDot: "#22c55e",
      safetyCheck: "#FB923C",
      normalize: "#E5E7EB",
      normalizeText: "#374151",
      engineOuter: "#065F46",
      engineMid: "#059669",
      engineInner: "#6EE7B7",
      engineText: "#ECFDF5",
      engineSubtext: "#D1FAE5",
      issuesBg: "#DBEAFE",
      issuesText: "#1D4ED8",
      recosBg: "#DDD6FE",
      recosText: "#4C1D95",
      scoresBg: "#FEF3C7",
      scoresText: "#92400E",
      dashboardBg: "#F3F4F6",
      dashboardText: "#111827",
      ciGateBg: "#EEF2FF",
      ciGateText: "#4338CA",
      ciGateSubtext: "#6366F1",
    },
    dark: {
      background: "#0f172a",
      text: "#f1f5f9",
      textMuted: "#94a3b8",
      flowLine: "#475569",
      flowDot: "#22c55e",
      safetyCheck: "#FB923C",
      normalize: "#1e293b",
      normalizeText: "#cbd5e1",
      engineOuter: "#065F46",
      engineMid: "#059669",
      engineInner: "#6EE7B7",
      engineText: "#ECFDF5",
      engineSubtext: "#D1FAE5",
      issuesBg: "#1e3a8a",
      issuesText: "#93c5fd",
      recosBg: "#4c1d95",
      recosText: "#c4b5fd",
      scoresBg: "#78350f",
      scoresText: "#fde68a",
      dashboardBg: "#1e293b",
      dashboardText: "#f1f5f9",
      ciGateBg: "#312e81",
      ciGateText: "#818cf8",
      ciGateSubtext: "#a5b4fc",
    },
  };

  const c = isDark ? colors.dark : colors.light;

  // Size configuration
  const isFull = size === "full";
  const svgWidth = isFull ? 2400 : 1400;
  const svgHeight = isFull ? 500 : 350;
  const fontSize = isFull ? 24 : 18;
  const fontSizeSmall = isFull ? 18 : 14;
  const fontSizeLarge = isFull ? 28 : 22;
  const centerY = isFull ? 250 : 175;
  const maxWidth = isFull ? "2400px" : "1400px";

  return (
    <div 
      className={`w-full mx-auto my-8 ${onClick ? "cursor-pointer" : ""} ${isFull ? "" : "overflow-x-auto"}`}
      style={{ maxWidth: maxWidth }}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={onClick ? "Evaluation Engine workflow diagram. Click to enlarge." : "Evaluation Engine workflow diagram"}
      onKeyDown={onClick ? (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" }}
        role="img"
        aria-labelledby="diagram-title diagram-desc"
      >
        <title id="diagram-title">Evaluation Engine™ Workflow Diagram</title>
        <desc id="diagram-desc">
          A workflow diagram showing the Evaluation Engine process: User input flows to safety check, then to normalization, 
          then to the Evaluation Engine which produces issues detected, recommendations, and scores & verdict, 
          which flow to Supabase dashboard and finally to CI gate with 80%+ threshold.
        </desc>
        <style>
          {`
            .flow-line {
              stroke: ${c.flowLine};
              stroke-width: 2;
            }
            .flow-dot {
              fill: ${c.flowDot};
              animation: flow 2.4s linear infinite;
            }
            .flow-dot.delay-1 {
              animation-delay: 0.4s;
            }
            .flow-dot.delay-2 {
              animation-delay: 0.8s;
            }
            .engine-pulse {
              animation: pulse 1.8s ease-in-out infinite;
              transform-origin: center;
            }
            @keyframes flow {
              0% {
                transform: translateX(0);
                opacity: 0;
              }
              10% {
                opacity: 1;
              }
              90% {
                opacity: 1;
              }
              100% {
                transform: translateX(${isFull ? 840 : 600}px);
                opacity: 0;
              }
            }
            @keyframes pulse {
              0%, 100% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.05);
              }
            }
          `}
        </style>
        <defs>
          <marker
            id="arrow"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L6,3 z" fill={c.flowLine} />
          </marker>
        </defs>

        {/* Base line for animation (user -> engine) */}
        <line 
          x1={isFull ? 160 : 100} 
          y1={centerY} 
          x2={isFull ? 1040 : 700} 
          y2={centerY} 
          className="flow-line" 
          markerEnd="url(#arrow)" 
          strokeWidth={isFull ? 4 : 3} 
        />

        {/* Animated dots flowing along the main line */}
        {!isFull && (
          <>
            <circle className="flow-dot" cx={isFull ? 160 : 100} cy={centerY} r={isFull ? 8 : 6} />
            <circle className="flow-dot delay-1" cx={isFull ? 160 : 100} cy={centerY} r={isFull ? 8 : 6} />
            <circle className="flow-dot delay-2" cx={isFull ? 160 : 100} cy={centerY} r={isFull ? 8 : 6} />
          </>
        )}

        {/* User input */}
        <circle cx={isFull ? 160 : 100} cy={centerY} r={isFull ? 20 : 18} fill={c.text} />
        <text x={isFull ? 80 : 50} y={centerY + (isFull ? 50 : 45)} fontSize={fontSize} fill={c.textMuted} fontWeight="500">user</text>
        <text x={isFull ? 70 : 40} y={centerY + (isFull ? 75 : 70)} fontSize={fontSize} fill={c.textMuted} fontWeight="500">input</text>

        {/* Safety check */}
        <circle cx={isFull ? 400 : 250} cy={centerY} r={isFull ? 70 : 60} fill={c.safetyCheck} />
        <text x={isFull ? 400 : 250} y={centerY - (isFull ? 15 : 12)} fontSize={fontSizeLarge} fill={c.text} textAnchor="middle" fontWeight="600">safety</text>
        <text x={isFull ? 400 : 250} y={centerY + (isFull ? 20 : 18)} fontSize={fontSizeLarge} fill={c.text} textAnchor="middle" fontWeight="600">check</text>

        {/* Normalize context & rules */}
        <rect x={isFull ? 560 : 380} y={centerY - (isFull ? 60 : 55)} width={isFull ? 280 : 200} height={isFull ? 120 : 110} rx={isFull ? 16 : 14} fill={c.normalize} />
        <text x={isFull ? 700 : 480} y={centerY - (isFull ? 20 : 18)} fontSize={fontSize} fill={c.normalizeText} textAnchor="middle" fontWeight="500">
          normalize context
        </text>
        <text x={isFull ? 700 : 480} y={centerY + (isFull ? 10 : 8)} fontSize={fontSize} fill={c.normalizeText} textAnchor="middle" fontWeight="500">
          &amp; rules
        </text>

        {/* Evaluation Engine with pulse */}
        <g role="group" aria-label="Evaluation Engine - Core processing component with animated pulse">
          <circle cx={isFull ? 1160 : 780} cy={centerY} r={isFull ? 110 : 90} fill={c.engineOuter} className="engine-pulse" aria-hidden="true" />
          <circle cx={isFull ? 1160 : 780} cy={centerY} r={isFull ? 76 : 63} fill={c.engineMid} aria-hidden="true" />
          <circle cx={isFull ? 1160 : 780} cy={centerY} r={isFull ? 44 : 36} fill={c.engineInner} aria-hidden="true" />
          <text x={isFull ? 1160 : 780} y={centerY - (isFull ? 25 : 22)} fontSize={fontSizeLarge} fill={c.engineText} textAnchor="middle" fontWeight="700">
            Evaluation
          </text>
          <text x={isFull ? 1160 : 780} y={centerY + (isFull ? 10 : 8)} fontSize={fontSizeLarge} fill={c.engineText} textAnchor="middle" fontWeight="700">
            Engine™
          </text>
          <text x={isFull ? 1160 : 780} y={centerY + (isFull ? 40 : 35)} fontSize={fontSizeSmall} fill={c.engineSubtext} textAnchor="middle" fontWeight="500">
            coverage · risks · value
          </text>
          {/* Hidden text for screen readers describing the pulse animation */}
          <text x={isFull ? 1160 : 780} y={centerY + (isFull ? 60 : 50)} fontSize="0" fill="transparent" aria-label="Animated pulse indicating active processing">
            Active processing indicator
          </text>
        </g>

        {/* Branch: issues */}
        <line x1={isFull ? 1270 : 870} y1={centerY - (isFull ? 30 : 25)} x2={isFull ? 1440 : 1000} y2={centerY - (isFull ? 80 : 70)} stroke={c.issuesBg} strokeWidth={isFull ? 4 : 3} markerEnd="url(#arrow)" />
        <rect x={isFull ? 1440 : 1000} y={centerY - (isFull ? 120 : 110)} width={isFull ? 300 : 220} height={isFull ? 80 : 70} rx={isFull ? 24 : 22} fill={c.issuesBg} />
        <text x={isFull ? 1590 : 1110} y={centerY - (isFull ? 70 : 65)} fontSize={fontSize} fill={c.issuesText} textAnchor="middle" fontWeight="600">
          issues detected
        </text>

        {/* Branch: recommendations */}
        <line x1={isFull ? 1270 : 870} y1={centerY} x2={isFull ? 1440 : 1000} y2={centerY} stroke={c.recosBg} strokeWidth={isFull ? 4 : 3} markerEnd="url(#arrow)" />
        <rect x={isFull ? 1440 : 1000} y={centerY - (isFull ? 40 : 35)} width={isFull ? 300 : 220} height={isFull ? 80 : 70} rx={isFull ? 24 : 22} fill={c.recosBg} />
        <text x={isFull ? 1590 : 1110} y={centerY + (isFull ? 10 : 8)} fontSize={fontSize} fill={c.recosText} textAnchor="middle" fontWeight="600">
          recommendations
        </text>

        {/* Branch: scoring & verdict */}
        <line x1={isFull ? 1270 : 870} y1={centerY + (isFull ? 30 : 25)} x2={isFull ? 1440 : 1000} y2={centerY + (isFull ? 80 : 70)} stroke={c.scoresBg} strokeWidth={isFull ? 4 : 3} markerEnd="url(#arrow)" />
        <rect x={isFull ? 1440 : 1000} y={centerY + (isFull ? 40 : 35)} width={isFull ? 300 : 220} height={isFull ? 80 : 70} rx={isFull ? 24 : 22} fill={c.scoresBg} />
        <text x={isFull ? 1590 : 1110} y={centerY + (isFull ? 90 : 80)} fontSize={fontSize} fill={c.scoresText} textAnchor="middle" fontWeight="600">
          scores &amp; verdict
        </text>

        {/* Supabase dashboard */}
        <line x1={isFull ? 1740 : 1220} y1={centerY} x2={isFull ? 1910 : 1280} y2={centerY} className="flow-line" markerEnd="url(#arrow)" strokeWidth={isFull ? 4 : 3} />
        <rect x={isFull ? 1920 : 1300} y={centerY - (isFull ? 60 : 55)} width={isFull ? 300 : 220} height={isFull ? 120 : 110} rx={isFull ? 24 : 20} fill={c.dashboardBg} />
        <text x={isFull ? 2070 : 1410} y={centerY - (isFull ? 10 : 8)} fontSize={fontSizeLarge} fill={c.dashboardText} textAnchor="middle" fontWeight="600">
          Supabase
        </text>
        <text x={isFull ? 2070 : 1410} y={centerY + (isFull ? 20 : 18)} fontSize={fontSizeLarge} fill={c.dashboardText} textAnchor="middle" fontWeight="600">
          dashboard
        </text>

        {/* CI Gate */}
        <line x1={isFull ? 2220 : 1520} y1={centerY} x2={isFull ? 2340 : 1600} y2={centerY} className="flow-line" markerEnd="url(#arrow)" strokeWidth={isFull ? 4 : 3} />
        <rect x={isFull ? 2300 : 1620} y={centerY - (isFull ? 90 : 80)} width={isFull ? 120 : 80} height={isFull ? 180 : 160} rx={isFull ? 32 : 28} fill={c.ciGateBg} />
        <text x={isFull ? 2360 : 1660} y={centerY - (isFull ? 30 : 25)} fontSize={fontSizeLarge} fill={c.ciGateText} textAnchor="middle" fontWeight="700">
          CI
        </text>
        <text x={isFull ? 2360 : 1660} y={centerY + (isFull ? 10 : 8)} fontSize={fontSizeLarge} fill={c.ciGateText} textAnchor="middle" fontWeight="700">
          gate
        </text>
        <text x={isFull ? 2360 : 1660} y={centerY + (isFull ? 50 : 42)} fontSize={fontSizeSmall} fill={c.ciGateSubtext} textAnchor="middle" fontWeight="600">
          80%+
        </text>
      </svg>
    </div>
  );
}

