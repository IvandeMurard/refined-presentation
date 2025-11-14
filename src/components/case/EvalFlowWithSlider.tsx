import { useState, useEffect, useRef } from "react";
import { EvalFlowDiagram } from "./EvalFlowDiagram";
import { NodeNetworkDiagram } from "./NodeNetworkDiagram";
import { ImageLightbox } from "@/components/ImageLightbox";
import { ZoomIn } from "lucide-react";

export function EvalFlowWithSlider() {
  const [sliderPosition, setSliderPosition] = useState(50); // 0-100, 50 = middle
  const [isDragging, setIsDragging] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  useEffect(() => {
    if (isDragging) {
      const handleMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
      };
      const handleUp = () => setIsDragging(false);
      
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", handleUp);
      return () => {
        window.removeEventListener("mousemove", handleMove);
        window.removeEventListener("mouseup", handleUp);
      };
    }
  }, [isDragging]);

  const handleSliderMouseDown = () => {
    setIsDragging(true);
  };

  const handleSliderKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + 5));
    } else if (e.key === "Home") {
      e.preventDefault();
      setSliderPosition(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setSliderPosition(100);
    }
  };

  return (
    <>
      <div className="relative group">
        {/* Header with labels and zoom button */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                Simple
              </span>
              <span className="text-xs text-slate-300 dark:text-slate-600">→</span>
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                Technical
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-sm hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition opacity-0 group-hover:opacity-100"
            aria-label="Open diagram in lightbox for detailed view"
          >
            <ZoomIn className="w-3 h-3" />
            Enlarge
          </button>
        </div>

        {/* Container with both diagrams */}
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 cursor-pointer"
          style={{ minHeight: "550px" }}
          role="region"
          aria-label="Architecture diagram comparison: simple view and technical view"
          onClick={() => setLightboxOpen(true)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setLightboxOpen(true);
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
          {/* Simple diagram (left/behind) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            }}
            aria-hidden={sliderPosition > 50}
          >
            <div className="p-6">
              <div className="mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Simple View
                </span>
              </div>
              <EvalFlowDiagram />
            </div>
          </div>

          {/* Technical diagram (right/front) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath: `inset(0 0 0 ${sliderPosition}%)`,
            }}
            aria-hidden={sliderPosition < 50}
          >
            <div className="p-6">
              <div className="mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Technical View
                </span>
              </div>
              <NodeNetworkDiagram />
            </div>
          </div>

          {/* Slider handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-slate-900 dark:bg-slate-100 cursor-ew-resize z-30"
            style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            role="slider"
            aria-label="Diagram comparison slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={sliderPosition}
            aria-orientation="horizontal"
            tabIndex={0}
            onMouseDown={(e) => {
              e.stopPropagation();
              handleSliderMouseDown();
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
              setIsDragging(true);
            }}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setIsDragging(false)}
            onKeyDown={handleSliderKeyDown}
          >
            {/* Slider button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900 dark:bg-slate-100 border-2 border-white dark:border-slate-900 shadow-lg flex items-center justify-center">
              <div className="flex gap-0.5">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white dark:text-slate-900"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white dark:text-slate-900"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Labels on sides - positioned to avoid overlap */}
          <div
            className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 dark:bg-white/60 backdrop-blur-sm text-white dark:text-slate-900 text-xs font-semibold pointer-events-none z-10"
            style={{ 
              opacity: sliderPosition < 70 ? 1 : 0,
              transition: "opacity 0.2s"
            }}
          >
            Simple
          </div>
          <div
            className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/60 dark:bg-white/60 backdrop-blur-sm text-white dark:text-slate-900 text-xs font-semibold pointer-events-none z-10"
            style={{ 
              opacity: sliderPosition > 30 ? 1 : 0,
              transition: "opacity 0.2s"
            }}
          >
            Technical
          </div>
        </div>

        {/* Instructions */}
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400 text-center">
          Drag the slider or use arrow keys to compare views
        </p>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        images={[
          {
            src: "",
            alt: "Architecture diagram comparison",
            caption: "Simple view: High-level evaluation pipeline. Technical view: Detailed node graph showing n8n steps and Supabase tables.",
          },
        ]}
        currentIndex={0}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={() => {}}
        customContent={
          <div className="max-w-[95vw] max-h-[90vh] overflow-auto p-4">
            <EvalFlowWithSliderLightboxContent />
          </div>
        }
      />
    </>
  );
}

// Lightbox content component
function EvalFlowWithSliderLightboxContent() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  useEffect(() => {
    if (isDragging) {
      const handleMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
      };
      const handleUp = () => setIsDragging(false);
      
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", handleUp);
      return () => {
        window.removeEventListener("mousemove", handleMove);
        window.removeEventListener("mouseup", handleUp);
      };
    }
  }, [isDragging]);

  const handleSliderKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + 5));
    } else if (e.key === "Home") {
      e.preventDefault();
      setSliderPosition(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setSliderPosition(100);
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-center gap-4 mb-4">
        <span className="text-sm font-semibold text-white uppercase tracking-wide">
          Simple
        </span>
        <span className="text-sm text-white/60">↔</span>
        <span className="text-sm font-semibold text-white uppercase tracking-wide">
          Technical
        </span>
      </div>

      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-xl bg-slate-900"
        style={{ minHeight: "700px" }}
        role="region"
        aria-label="Architecture diagram comparison: simple view and technical view"
      >
        {/* Simple diagram */}
        <div
          className="absolute inset-0 overflow-auto"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
          aria-hidden={sliderPosition > 50}
        >
          <div className="p-8">
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Simple View
              </span>
            </div>
            <EvalFlowDiagram size="full" />
          </div>
        </div>

        {/* Technical diagram */}
        <div
          className="absolute inset-0 overflow-auto"
          style={{
            clipPath: `inset(0 0 0 ${sliderPosition}%)`,
          }}
          aria-hidden={sliderPosition < 50}
        >
          <div className="p-8">
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                Technical View
              </span>
            </div>
            <NodeNetworkDiagram size="full" />
          </div>
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
          role="slider"
          aria-label="Diagram comparison slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={sliderPosition}
          aria-orientation="horizontal"
          tabIndex={0}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setIsDragging(false)}
          onKeyDown={handleSliderKeyDown}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-2 border-slate-900 shadow-lg flex items-center justify-center">
            <div className="flex gap-1">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-slate-900"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-slate-900"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div
          className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/70 backdrop-blur-sm text-white text-sm font-semibold pointer-events-none"
          style={{ opacity: sliderPosition < 80 ? 1 : 0 }}
        >
          Simple
        </div>
        <div
          className="absolute top-6 right-6 px-4 py-2 rounded-full bg-black/70 backdrop-blur-sm text-white text-sm font-semibold pointer-events-none"
          style={{ opacity: sliderPosition > 20 ? 1 : 0 }}
        >
          Technical
        </div>
      </div>

      <p className="text-sm text-white/70 text-center">
        Drag the slider or use arrow keys to compare views
      </p>
    </div>
  );
}

