import { NodeNetworkDiagram } from "./NodeNetworkDiagram";
import { ImageLightbox } from "@/components/ImageLightbox";
import { ZoomIn } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Webhook → run created",
    description: "A request triggers a new normalized run.",
  },
  {
    number: 2,
    title: "Agent A generates answer",
    description: "Main agent produces its initial response.",
  },
  {
    number: 3,
    title: "Agent B performs counter-analysis",
    description: "A second agent provides complementary or adversarial coverage.",
  },
  {
    number: 4,
    title: "Evaluator scores conversation",
    description: "Evaluates across 5 criteria (coverage, feasibility, risks, testability, user_value).",
  },
  {
    number: 5,
    title: "Issues & recommendations detected",
    description: "Extracted into structured outputs.",
  },
  {
    number: 6,
    title: "Structured data stored & surfaced",
    description: "Supabase stores all metrics for dashboards and the Reasoning Engine.",
  },
];

const stepVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
    },
  }),
};

const lineVariants = {
  hidden: { height: 0 },
  visible: {
    height: "100%",
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};

export function ArchitectureStepper() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <motion.div
        className="space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className="flex gap-6"
            variants={stepVariants}
            custom={index}
          >
            {/* Step number */}
            <div className="flex-shrink-0 relative">
              <motion.div
                className="w-10 h-10 rounded-full border-2 border-[#A8B8FF] bg-white dark:bg-background flex items-center justify-center font-semibold text-sm text-[#3D56CC] dark:text-[#5B7CFF]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {step.number}
              </motion.div>
              {index < steps.length - 1 && (
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 top-10 w-[3px] rounded-full bg-[#5B7CFF] mt-2"
                  style={{ minHeight: "60px" }}
                  variants={lineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />
              )}
            </div>

            {/* Step content */}
            <motion.div
              className="flex-1 pb-8"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {step.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Optional diagram */}
      <motion.div
        className="mt-12 space-y-4"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <div className="relative group">
          <div
            className="relative rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0F1416] cursor-pointer overflow-hidden shadow-[0_18px_40px_rgba(91,124,255,0.10)] dark:shadow-[0_18px_40px_rgba(15,23,42,0.8)]"
            onClick={() => setLightboxOpen(true)}
            tabIndex={0}
            role="button"
            aria-label="Reasoning Engine diagram. Click to enlarge."
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setLightboxOpen(true);
              }
            }}
          >
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm text-white text-sm font-medium">
                <ZoomIn className="w-4 h-4" />
                Click to enlarge
              </div>
            </div>
            <div className="p-6 md:p-8">
              <NodeNetworkDiagram />
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
          Reasoning Engine: detailed node graph showing n8n steps and Supabase tables.
        </p>
      </motion.div>

      {/* Lightbox */}
      <ImageLightbox
        images={[
          {
            src: "",
            alt: "Reasoning Engine diagram",
            caption: "Reasoning Engine: detailed node graph showing n8n steps and Supabase tables",
          },
        ]}
        currentIndex={0}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={() => {}}
        customContent={
          <div className="max-w-[95vw] max-h-[90vh] overflow-auto p-4">
            <div className="p-8">
              <NodeNetworkDiagram size="full" />
            </div>
            <p className="mt-6 text-white text-center text-base md:text-lg max-w-4xl px-8">
              Reasoning Engine: detailed node graph showing n8n steps and Supabase tables
            </p>
          </div>
        }
      />
    </>
  );
}

