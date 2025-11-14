import { useEffect, useState } from "react";

interface NodeNetworkDiagramProps {
  size?: "thumbnail" | "full";
}

export function NodeNetworkDiagram({ size = "thumbnail" }: NodeNetworkDiagramProps = {}) {
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
      nodeBg: "#f9fafb",
      nodeBorder: "#e5e7eb",
      nodeActive: "#3b82f6",
      nodeText: "#374151",
      n8n: "#ff6d5a",
      supabase: "#3ecf8e",
      openai: "#10a37f",
    },
    dark: {
      background: "#0f172a",
      text: "#f1f5f9",
      textMuted: "#94a3b8",
      flowLine: "#475569",
      nodeBg: "#1e293b",
      nodeBorder: "#334155",
      nodeActive: "#60a5fa",
      nodeText: "#cbd5e1",
      n8n: "#ff6d5a",
      supabase: "#3ecf8e",
      openai: "#10a37f",
    },
  };

  const c = isDark ? colors.dark : colors.light;

  // Size configuration
  const isFull = size === "full";
  const svgWidth = isFull ? 5000 : 4000;
  const svgHeight = isFull ? 562 : 450;
  const fontSize = isFull ? 28 : 22;
  const fontSizeBadge = isFull ? 19 : 15;
  const nodeHeight = isFull ? 90 : 70;
  const nodePadding = isFull ? 9 : 7;

  // Scale factor for coordinates
  const scale = isFull ? 1.5 : 1.2;

  const nodes = [
    { id: "webhook", x: 120 * scale, y: 150 * scale, label: "Webhook", type: "n8n", width: 150 * scale },
    { id: "create-run", x: 375 * scale, y: 150 * scale, label: "Create Run", type: "supabase", width: 165 * scale },
    { id: "attach-run-id", x: 630 * scale, y: 150 * scale, label: "Attach Run ID", type: "n8n", width: 180 * scale },
    { id: "seed-examples", x: 900 * scale, y: 150 * scale, label: "Seed Examples", type: "n8n", width: 180 * scale },
    { id: "evaluator-llm", x: 1170 * scale, y: 150 * scale, label: "Evaluator LLM", type: "openai", width: 195 * scale },
    { id: "validate-json", x: 1455 * scale, y: 150 * scale, label: "Validate JSON", type: "n8n", width: 180 * scale },
    { id: "safety-checks", x: 1725 * scale, y: 75 * scale, label: "Safety Checks", type: "n8n", width: 180 * scale },
    { id: "generate-recos", x: 1725 * scale, y: 225 * scale, label: "Generate Recos", type: "n8n", width: 195 * scale },
    { id: "add-issue", x: 1980 * scale, y: 75 * scale, label: "Add Issue", type: "supabase", width: 150 * scale },
    { id: "add-reco", x: 1980 * scale, y: 225 * scale, label: "Add Recommendation", type: "supabase", width: 225 * scale },
    { id: "close-run", x: 2280 * scale, y: 150 * scale, label: "Close Run", type: "supabase", width: 165 * scale },
    { id: "refresh-mv", x: 2520 * scale, y: 150 * scale, label: "Refresh MV", type: "supabase", width: 165 * scale },
    { id: "dashboard", x: 2760 * scale, y: 150 * scale, label: "Dashboard", type: "supabase", width: 150 * scale },
    { id: "ci-gate", x: 2985 * scale, y: 150 * scale, label: "CI Gate 80%+", type: "n8n", width: 180 * scale },
  ];

  const connections = [
    { from: "webhook", to: "create-run" },
    { from: "create-run", to: "attach-run-id" },
    { from: "attach-run-id", to: "seed-examples" },
    { from: "seed-examples", to: "evaluator-llm" },
    { from: "evaluator-llm", to: "validate-json" },
    { from: "validate-json", to: "safety-checks" },
    { from: "validate-json", to: "generate-recos" },
    { from: "safety-checks", to: "add-issue" },
    { from: "generate-recos", to: "add-reco" },
    { from: "add-issue", to: "close-run" },
    { from: "add-reco", to: "close-run" },
    { from: "close-run", to: "refresh-mv" },
    { from: "refresh-mv", to: "dashboard" },
    { from: "dashboard", to: "ci-gate" },
  ];

  const getNodeColor = (type: string) => {
    switch (type) {
      case "n8n":
        return c.n8n;
      case "supabase":
        return c.supabase;
      case "openai":
        return c.openai;
      default:
        return c.nodeActive;
    }
  };

  return (
    <div className="w-full h-full overflow-auto p-8 bg-slate-50 dark:bg-slate-900">
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" }}
        role="img"
        aria-labelledby="node-network-title"
      >
        <title id="node-network-title">Reasoning Engine Node Network</title>
        <defs>
          <marker
            id="arrow-tech"
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

        {/* Connections */}
        {connections.map((conn, idx) => {
          const fromNode = nodes.find((n) => n.id === conn.from);
          const toNode = nodes.find((n) => n.id === conn.to);
          if (!fromNode || !toNode) return null;

          const fromX = fromNode.x + fromNode.width;
          const fromY = fromNode.y;
          const toX = toNode.x;
          const toY = toNode.y;

          // Calculate path with smooth curves
          const midX = (fromX + toX) / 2;
          const path = `M ${fromX} ${fromY} L ${midX} ${fromY} L ${midX} ${toY} L ${toX} ${toY}`;

          return (
            <path
              key={idx}
              d={path}
              stroke={c.flowLine}
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrow-tech)"
              className="transition-opacity hover:opacity-60"
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={node.id} role="group" aria-label={`${node.label} - ${node.type} node`}>
            <rect
              x={node.x}
              y={node.y - (nodeHeight / 2)}
              width={node.width}
              height={nodeHeight}
              rx={isFull ? 18 : 12}
              fill={getNodeColor(node.type)}
              stroke={c.nodeBorder}
              strokeWidth={isFull ? 2 : 1.5}
              className="hover:opacity-80 transition-opacity"
              aria-hidden="true"
            />
            <text
              x={node.x + node.width / 2}
              y={node.y + (isFull ? 12 : 8)}
              fontSize={fontSize}
              fill="white"
              textAnchor="middle"
              fontWeight="600"
              aria-label={node.label}
            >
              {node.label}
            </text>
            {/* Type badge */}
            <rect
              x={node.x + nodePadding}
              y={node.y - (nodeHeight / 2) + nodePadding}
              width={isFull ? 102 : 68}
              height={isFull ? 32 : 21}
              rx={isFull ? 9 : 6}
              fill="rgba(0,0,0,0.2)"
              aria-hidden="true"
            />
            <text
              x={node.x + (isFull ? 60 : 40)}
              y={node.y - (nodeHeight / 2) + (isFull ? 28 : 20)}
              fontSize={fontSizeBadge}
              fill="white"
              textAnchor="middle"
              fontWeight="700"
              aria-label={`Type: ${node.type}`}
            >
              {node.type.toUpperCase()}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

