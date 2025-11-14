import { useState } from "react";
import { EvalFlowDiagram } from "./EvalFlowDiagram";
import { NodeNetworkDiagram } from "./NodeNetworkDiagram";
import { ImageLightbox } from "@/components/ImageLightbox";
import { ZoomIn } from "lucide-react";

export function EvalFlowSideBySide() {
  const [simpleLightboxOpen, setSimpleLightboxOpen] = useState(false);
  const [technicalLightboxOpen, setTechnicalLightboxOpen] = useState(false);

  return (
    <>
      <div className="space-y-24">
        {/* First section: Text left, Simple diagram right */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text content - left aligned */}
          <div className="space-y-6 text-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                How the evaluation pipeline runs
              </h3>
              <p className="text-base md:text-lg text-muted-foreground">
                The diagram below walks through the full evaluation path, from the inbound payload to the CI gate.
              </p>
            </div>
            <ol className="space-y-4 text-base md:text-lg list-decimal list-inside">
              <li>
                A request hits the webhook and is wrapped into a normalized "run".
              </li>
              <li>
                The evaluator LLM scores the agent on behaviour, safety and testability.
              </li>
              <li>
                Safety checks and issue detectors turn weak spots into structured "issues" and "recommendations".
              </li>
              <li>
                The run is closed and pushed to Supabase dashboards.
              </li>
              <li>
                A CI gate reads the latest metrics and blocks the pipeline if quality drops below the agreed floor.
              </li>
            </ol>
            <p className="text-base md:text-lg font-medium">
              The goal: make every agent evaluation reproducible, auditable, and safe-by-design.
            </p>
          </div>

          {/* Simple diagram - right */}
          <div className="relative group">
            <div
              className="relative rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 cursor-pointer overflow-hidden"
              onClick={() => setSimpleLightboxOpen(true)}
              tabIndex={0}
              role="button"
              aria-label="Simple evaluation pipeline diagram. Click to enlarge."
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSimpleLightboxOpen(true);
                }
              }}
            >
              {/* Click to enlarge overlay */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm text-white text-sm font-medium">
                  <ZoomIn className="w-4 h-4" />
                  Click to enlarge
                </div>
              </div>
              <div className="p-6">
                <EvalFlowDiagram />
              </div>
            </div>
          </div>
        </div>

        {/* Second section: Technical diagram left, Text right */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Technical diagram - left */}
          <div className="relative group order-2 md:order-1">
            <div
              className="relative rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 cursor-pointer overflow-hidden"
              onClick={() => setTechnicalLightboxOpen(true)}
              tabIndex={0}
              role="button"
              aria-label="Technical reasoning engine diagram. Click to enlarge."
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setTechnicalLightboxOpen(true);
                }
              }}
            >
              {/* Click to enlarge overlay */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm text-white text-sm font-medium">
                  <ZoomIn className="w-4 h-4" />
                  Click to enlarge
                </div>
              </div>
              <div className="p-6">
                <NodeNetworkDiagram />
              </div>
            </div>
          </div>

          {/* Text content - right aligned */}
          <div className="space-y-6 text-right order-1 md:order-2">
            <p className="text-base md:text-lg">
              Here is the technical "Reasoning engine" view of the same process.
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox for Simple diagram */}
      <ImageLightbox
        images={[
          {
            src: "",
            alt: "Simple evaluation pipeline diagram",
            caption: "How the evaluation pipeline runs: from webhook to CI gate",
          },
        ]}
        currentIndex={0}
        isOpen={simpleLightboxOpen}
        onClose={() => setSimpleLightboxOpen(false)}
        onNavigate={() => {}}
        customContent={
          <div className="max-w-[95vw] max-h-[90vh] overflow-auto p-8 flex flex-col items-center">
            <EvalFlowDiagram size="full" />
            <p className="mt-6 text-white text-center text-base md:text-lg max-w-4xl">
              How the evaluation pipeline runs: from webhook to CI gate
            </p>
          </div>
        }
      />

      {/* Lightbox for Technical diagram */}
      <ImageLightbox
        images={[
          {
            src: "",
            alt: "Technical reasoning engine diagram",
            caption: "Reasoning engine view: detailed node graph showing n8n steps and Supabase tables",
          },
        ]}
        currentIndex={0}
        isOpen={technicalLightboxOpen}
        onClose={() => setTechnicalLightboxOpen(false)}
        onNavigate={() => {}}
        customContent={
          <div className="max-w-[95vw] max-h-[90vh] overflow-auto p-4">
            <div className="p-8">
              <NodeNetworkDiagram size="full" />
            </div>
            <p className="mt-6 text-white text-center text-base md:text-lg max-w-4xl px-8">
              Reasoning engine view: detailed node graph showing n8n steps and Supabase tables
            </p>
          </div>
        }
      />
    </>
  );
}

