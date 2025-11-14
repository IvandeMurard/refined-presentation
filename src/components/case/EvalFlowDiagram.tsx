import { useEffect, useState } from "react";

interface EvalFlowDiagramProps {
  size?: "thumbnail" | "full";
}

export function EvalFlowDiagram({ size = "thumbnail" }: EvalFlowDiagramProps = {}) {
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

  const colors = {
    light: {
      background: "#ffffff",
      text: "#111827",
      textMuted: "#6b7280",
      flowLine: "#d1d5db",
      flowDot: "#10b981",
      webhook: "#3b82f6",
      createRun: "#8b5cf6",
      evaluator: "#ec4899",
      validate: "#f59e0b",
      safety: "#ef4444",
      recommendations: "#6366f1",
      addIssue: "#f97316",
      addReco: "#14b8a6",
      closeRun: "#06b6d4",
      dashboard: "#6366f1",
      ciGate: "#10b981",
    },
    dark: {
      background: "#0f172a",
      text: "#f1f5f9",
      textMuted: "#94a3b8",
      flowLine: "#475569",
      flowDot: "#10b981",
      webhook: "#60a5fa",
      createRun: "#a78bfa",
      evaluator: "#f472b6",
      validate: "#fbbf24",
      safety: "#f87171",
      recommendations: "#818cf8",
      addIssue: "#fb923c",
      addReco: "#2dd4bf",
      closeRun: "#22d3ee",
      dashboard: "#818cf8",
      ciGate: "#34d399",
    },
  };

  const c = isDark ? colors.dark : colors.light;

  // Size configuration
  const isFull = size === "full";
  const svgWidth = isFull ? 2800 : 1800;
  const svgHeight = isFull ? 450 : 300;
  const fontSize = isFull ? 28 : 20;
  const fontSizeSmall = isFull ? 24 : 18;
  const fontSizeLarge = isFull ? 32 : 20;

  return (
    <div className="w-full overflow-x-auto py-8">
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" }}
        role="img"
        aria-labelledby="eval-flow-title"
      >
        <title id="eval-flow-title">Evaluation Pipeline Flow</title>
        <style>
          {`
            .flow-line {
              stroke: ${c.flowLine};
              stroke-width: 2;
            }
            .flow-dot {
              fill: ${c.flowDot};
              animation: flow 3s linear infinite;
            }
            .flow-dot.delay-1 {
              animation-delay: 0.5s;
            }
            .flow-dot.delay-2 {
              animation-delay: 1s;
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
                transform: translateX(${isFull ? 2575 : 1650}px);
                opacity: 0;
              }
            }
            .node-pulse {
              animation: nodePulse 2s ease-in-out infinite;
            }
            @keyframes nodePulse {
              0%, 100% {
                opacity: 1;
              }
              50% {
                opacity: 0.7;
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

        {/* Main flow line */}
        <line x1={isFull ? 112 : 75} y1={isFull ? 225 : 150} x2={isFull ? 2588 : 1725} y2={isFull ? 225 : 150} className="flow-line" markerEnd="url(#arrow)" />

        {/* Animated dots */}
        <circle className="flow-dot" cx={isFull ? 112 : 75} cy={isFull ? 225 : 150} r={isFull ? 9 : 6} />
        <circle className="flow-dot delay-1" cx={isFull ? 112 : 75} cy={isFull ? 225 : 150} r={isFull ? 9 : 6} />
        <circle className="flow-dot delay-2" cx={isFull ? 112 : 75} cy={isFull ? 225 : 150} r={isFull ? 9 : 6} />

        {/* Webhook */}
        <g role="group" aria-label="Webhook - Entry point">
          <circle cx={isFull ? 225 : 150} cy={isFull ? 225 : 150} r={isFull ? 63 : 42} fill={c.webhook} className="node-pulse" aria-hidden="true" />
          <text x={isFull ? 225 : 150} y={isFull ? 240 : 160} fontSize={fontSize} fill="white" textAnchor="middle" fontWeight="600" aria-label="Webhook">Webhook</text>
        </g>

        {/* Create Run */}
        <g role="group" aria-label="Create Run - Initialize evaluation run">
          <line x1={isFull ? 288 : 192} y1={isFull ? 225 : 150} x2={isFull ? 450 : 300} y2={isFull ? 225 : 150} className="flow-line" markerEnd="url(#arrow)" aria-hidden="true" />
          <rect x={isFull ? 450 : 300} y={isFull ? 158 : 105} width={isFull ? 248 : 165} height={isFull ? 135 : 90} rx={isFull ? 18 : 12} fill={c.createRun} className="node-pulse" aria-hidden="true" />
          <text x={isFull ? 574 : 382.5} y={isFull ? 230 : 153} fontSize={fontSize} fill="white" textAnchor="middle" fontWeight="600" aria-label="Create Run">Create Run</text>
        </g>

        {/* Evaluator LLM */}
        <g role="group" aria-label="Evaluator LLM - Core evaluation engine">
          <line x1={isFull ? 698 : 465} y1={isFull ? 225 : 150} x2={isFull ? 900 : 600} y2={isFull ? 225 : 150} className="flow-line" markerEnd="url(#arrow)" aria-hidden="true" />
          <circle cx={isFull ? 1035 : 690} cy={isFull ? 225 : 150} r={isFull ? 78 : 52} fill={c.evaluator} className="node-pulse" aria-hidden="true" />
          <text x={isFull ? 1035 : 690} y={isFull ? 207 : 138} fontSize={fontSizeSmall} fill="white" textAnchor="middle" fontWeight="600" aria-label="Evaluator LLM">Evaluator</text>
          <text x={isFull ? 1035 : 690} y={isFull ? 248 : 165} fontSize={fontSizeSmall} fill="white" textAnchor="middle" fontWeight="600" aria-hidden="true">LLM</text>
        </g>

        {/* Validate JSON */}
        <g role="group" aria-label="Validate JSON - Validate evaluator output">
          <line x1={isFull ? 1113 : 742} y1={isFull ? 225 : 150} x2={isFull ? 1238 : 825} y2={isFull ? 225 : 150} className="flow-line" markerEnd="url(#arrow)" aria-hidden="true" />
          <rect x={isFull ? 1238 : 825} y={isFull ? 158 : 105} width={isFull ? 248 : 165} height={isFull ? 135 : 90} rx={isFull ? 18 : 12} fill={c.validate} className="node-pulse" aria-hidden="true" />
          <text x={isFull ? 1362 : 907.5} y={isFull ? 230 : 153} fontSize={fontSize} fill="white" textAnchor="middle" fontWeight="600" aria-label="Validate JSON">Validate JSON</text>
        </g>

        {/* Branch: Safety Checks & Generate Recommendations */}
        <g role="group" aria-label="Branching: Safety Checks and Generate Recommendations">
          <line x1="990" y1="150" x2="1050" y2="150" className="flow-line" aria-hidden="true" />
          {/* Safety Checks branch */}
          <g role="group" aria-label="Safety Checks branch">
            <line x1="1050" y1="150" x2="1050" y2="75" className="flow-line" markerEnd="url(#arrow)" aria-hidden="true" />
            <rect x="1050" y="22" width="165" height="90" rx="12" fill={c.safety} className="node-pulse" aria-hidden="true" />
            <text x="1132.5" y="63" fontSize="19" fill="white" textAnchor="middle" fontWeight="600" aria-label="Safety Checks">Safety</text>
            <text x="1132.5" y="87" fontSize="19" fill="white" textAnchor="middle" fontWeight="600" aria-hidden="true">Checks</text>
          </g>
          
          {/* Generate Recommendations branch */}
          <g role="group" aria-label="Generate Recommendations branch">
            <line x1="1050" y1="150" x2="1050" y2="225" className="flow-line" markerEnd="url(#arrow)" aria-hidden="true" />
            <rect x="1050" y="188" width="165" height="90" rx="12" fill={c.recommendations} className="node-pulse" aria-hidden="true" />
            <text x="1132.5" y="220" fontSize="18" fill="white" textAnchor="middle" fontWeight="600" aria-label="Generate Recommendations">Generate</text>
            <text x="1132.5" y="244" fontSize="18" fill="white" textAnchor="middle" fontWeight="600" aria-hidden="true">Recos</text>
          </g>
        </g>

        {/* Add Issue & Add Recommendation */}
        <g role="group" aria-label="Add Issue and Add Recommendation">
          {/* Add Issue */}
          <g role="group" aria-label="Add Issue">
            <line x1="1215" y1="67" x2="1290" y2="67" className="flow-line" markerEnd="url(#arrow)" aria-hidden="true" />
            <rect x="1290" y="22" width="150" height="90" rx="12" fill={c.addIssue} className="node-pulse" aria-hidden="true" />
            <text x="1365" y="75" fontSize="19" fill="white" textAnchor="middle" fontWeight="600" aria-label="Add Issue">Add Issue</text>
          </g>
          
          {/* Add Recommendation */}
          <g role="group" aria-label="Add Recommendation">
            <line x1="1215" y1="233" x2="1290" y2="233" className="flow-line" markerEnd="url(#arrow)" aria-hidden="true" />
            <rect x="1290" y="188" width="150" height="90" rx="12" fill={c.addReco} className="node-pulse" aria-hidden="true" />
            <text x="1365" y="225" fontSize="18" fill="white" textAnchor="middle" fontWeight="600" aria-label="Add Recommendation">Add</text>
            <text x="1365" y="250" fontSize="18" fill="white" textAnchor="middle" fontWeight="600" aria-hidden="true">Reco</text>
          </g>
        </g>

        {/* Close Run */}
        <g role="group" aria-label="Close Run - Finalize evaluation run">
          <line x1="1440" y1="67" x2="1440" y2="150" className="flow-line" aria-hidden="true" />
          <line x1="1440" y1="233" x2="1440" y2="150" className="flow-line" aria-hidden="true" />
          <line x1="1440" y1="150" x2="1515" y2="150" className="flow-line" markerEnd="url(#arrow)" aria-hidden="true" />
          <rect x="1515" y="105" width="150" height="90" rx="12" fill={c.closeRun} className="node-pulse" aria-hidden="true" />
          <text x="1590" y="153" fontSize="20" fill="white" textAnchor="middle" fontWeight="600" aria-label="Close Run">Close Run</text>
        </g>

        {/* Supabase Dashboard */}
        <g role="group" aria-label="Supabase Dashboard - Metrics and analytics">
          <line x1="1665" y1="150" x2="1605" y2="150" className="flow-line" markerEnd="url(#arrow)" aria-hidden="true" />
          <rect x="1605" y="105" width="165" height="90" rx="12" fill={c.dashboard} className="node-pulse" aria-hidden="true" />
          <text x="1687.5" y="138" fontSize="19" fill="white" textAnchor="middle" fontWeight="600" aria-label="Supabase Dashboard">Supabase</text>
          <text x="1687.5" y="165" fontSize="19" fill="white" textAnchor="middle" fontWeight="600" aria-hidden="true">Dashboard</text>
        </g>

        {/* CI Gate */}
        <g role="group" aria-label="CI Gate - Quality gate with 80% threshold">
          <line x1="1770" y1="150" x2="1710" y2="150" className="flow-line" markerEnd="url(#arrow)" aria-hidden="true" />
          <rect x="1710" y="98" width="105" height="105" rx="15" fill={c.ciGate} className="node-pulse" aria-hidden="true" />
          <text x="1762.5" y="138" fontSize="19" fill="white" textAnchor="middle" fontWeight="700" aria-label="CI Gate 80%+">CI</text>
          <text x="1762.5" y="165" fontSize="19" fill="white" textAnchor="middle" fontWeight="700" aria-hidden="true">Gate</text>
          <text x="1762.5" y="192" fontSize="16" fill="white" textAnchor="middle" fontWeight="600" aria-label="80% threshold">80%+</text>
        </g>
      </svg>
    </div>
  );
}

