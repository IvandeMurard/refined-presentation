import { useEffect, useState } from "react";

const tools = [
  { name: "Supabase", label: "Database & Storage" },
  { name: "n8n", label: "Workflow Automation" },
  { name: "OpenAI", label: "LLM Evaluation" },
  { name: "Vercel", label: "CI Gate & Deployment" },
  { name: "Tailwind", label: "Styling" },
  { name: "GitHub", label: "Version Control" },
  { name: "Cursor", label: "AI Development" },
  { name: "Figma", label: "Design & Diagrams" },
];

export function ToolsMarquee() {
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

  // Duplicate tools for seamless loop
  const duplicatedTools = [...tools, ...tools];

  return (
    <section className="w-full py-12 border-t border-border/40">
      <div className="text-center mb-8">
        <p className="text-xs font-medium tracking-[0.22em] uppercase text-slate-500 dark:text-slate-400">
          Tools powering this autonomous evaluation engine
        </p>
      </div>
      <div className="overflow-hidden w-full">
        <div 
          className="flex"
          style={{
            animation: "scroll 30s linear infinite",
          }}
        >
          {duplicatedTools.map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="flex items-center gap-12 px-12 flex-shrink-0"
            >
              <div className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                {tool.name}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-500">
                {tool.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

