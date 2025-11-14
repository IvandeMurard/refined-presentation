import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/footer";
import { CTABanner } from "@/components/work/CTABanner";
import { EvaluationEngineDiagram } from "@/components/case/EvaluationEngineDiagram";
import { EvalFlowSideBySide } from "@/components/case/EvalFlowSideBySide";
import { ImageLightbox } from "@/components/ImageLightbox";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { ZoomIn } from "lucide-react";

export default function AgentsEvalCase() {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (id === "home") {
      navigate("/");
    }
  };

  return (
    <>
      <Navigation />
      <ProgressIndicator
        sections={[
          { id: "hero", label: "Hero" },
          { id: "problem", label: "Problem" },
          { id: "solution", label: "Solution" },
          { id: "how-it-works", label: "How it works" },
          { id: "why-it-matters", label: "Why it matters" },
          { id: "architecture", label: "Architecture" },
          { id: "example", label: "Example" },
          { id: "impact", label: "Impact" },
          { id: "roadmap", label: "Roadmap" },
        ]}
      />
      <main className="w-full pt-24 pb-10 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12 space-y-16">
          {/* Hero */}
          <header id="hero" className="space-y-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Case Study – The Evaluation Engine™
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Guarantee quality, safety, and reliability for your AI agents.
            </p>
          </header>

          {/* Section 1: The problem */}
          <section id="problem" className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">1. The problem</h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                Modern AI agents are powerful… but <strong>unpredictable</strong>.
              </p>
              <p>
                They hallucinate, break constraints, leak sensitive data, ignore rules, and often deliver inconsistent output.
              </p>
              <p>
                Manual evaluation is slow, expensive, and subjective.
              </p>
              <div className="mt-6 p-6 rounded-2xl bg-destructive/10 border border-destructive/20">
                <p className="font-semibold text-lg">
                  <strong>Without an autonomous evaluation system, you can't scale an AI agent in production.</strong>
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: The solution */}
          <section id="solution" className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">2. The solution</h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                Introducing <strong className="text-primary">The Evaluation Engine™</strong> — an autonomous agent that evaluates other agents.
              </p>
              <p>It acts as a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>quality supervisor</strong></li>
                <li><strong>safety watchdog</strong></li>
                <li><strong>compliance guardrail</strong></li>
                <li><strong>reasoning auditor</strong></li>
              </ul>
              <p>
                It reads a conversation, evaluates it across 5 criteria, detects risks, generates structured issues, produces recommendations, and returns a final verdict.
              </p>
              <div className="mt-6 p-6 rounded-2xl bg-primary/10 border border-primary/20">
                <p className="font-medium">
                  Built with <strong>privacy-by-design</strong> and <strong>safety-by-design</strong> principles.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: How it works */}
          <section id="how-it-works" className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">3. How it works</h2>
            <div className="space-y-4">
              <p className="text-base md:text-lg leading-relaxed">
                The Evaluation Engine™ processes conversations through a structured workflow:
              </p>
              <div className="relative group">
                <EvaluationEngineDiagram onClick={() => setLightboxOpen(true)} />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm text-white text-sm font-medium">
                    <ZoomIn className="w-4 h-4" />
                    Click to enlarge
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Why it matters - Ada style */}
          <section id="why-it-matters" className="py-20 px-4 md:px-8 bg-zinc-900 dark:bg-zinc-950 rounded-3xl">
            <div className="max-w-6xl mx-auto space-y-12">
              {/* Header */}
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Battle-tested evaluation with enterprise-level rigor
                </h2>
                <p className="text-lg md:text-xl text-zinc-400">
                  Trusted foundation for deploying AI agents in production
                </p>
              </div>

              {/* Feature blocks */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Safety-by-design */}
                <div className="space-y-4">
                  <div className="w-16 h-16 flex items-center justify-center text-zinc-400">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Grid pattern with central hub */}
                      <rect x="12" y="12" width="8" height="8" fill="currentColor" />
                      <rect x="28" y="12" width="8" height="8" fill="currentColor" />
                      <rect x="44" y="12" width="8" height="8" fill="currentColor" />
                      <rect x="12" y="28" width="8" height="8" fill="currentColor" />
                      <rect x="28" y="28" width="8" height="8" fill="currentColor" />
                      <rect x="44" y="28" width="8" height="8" fill="currentColor" />
                      <rect x="12" y="44" width="8" height="8" fill="currentColor" />
                      <rect x="28" y="44" width="8" height="8" fill="currentColor" />
                      <rect x="44" y="44" width="8" height="8" fill="currentColor" />
                      {/* Connecting lines from center */}
                      <line x1="32" y1="32" x2="20" y2="20" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="32" y1="32" x2="44" y2="20" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="32" y1="32" x2="20" y2="44" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="32" y1="32" x2="44" y2="44" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Safety-by-design</h3>
                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                    Detects risky output, flags PII, and enforces constraints with built-in safeguards to minimize hallucinations and ensure safe responses.
                  </p>
                </div>

                {/* Privacy-by-design */}
                <div className="space-y-4">
                  <div className="w-16 h-16 flex items-center justify-center text-zinc-400">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Stacked rows pattern */}
                      <rect x="8" y="12" width="12" height="4" fill="currentColor" />
                      <rect x="8" y="20" width="12" height="4" fill="currentColor" />
                      <rect x="8" y="28" width="12" height="4" fill="currentColor" />
                      <line x1="20" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="20" y1="22" x2="24" y2="22" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="20" y1="30" x2="24" y2="30" stroke="currentColor" strokeWidth="1.5" />
                      <rect x="28" y="12" width="12" height="4" fill="currentColor" />
                      <rect x="28" y="20" width="12" height="4" fill="currentColor" />
                      <rect x="28" y="28" width="12" height="4" fill="currentColor" />
                      <line x1="40" y1="14" x2="44" y2="14" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="40" y1="22" x2="44" y2="22" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="40" y1="30" x2="44" y2="30" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Privacy-by-design</h3>
                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                    High standards for data protection with minimal data retention, structured output only, and controlled logs with zero data retention policies.
                  </p>
                </div>

                {/* Reliability */}
                <div className="space-y-4">
                  <div className="w-16 h-16 flex items-center justify-center text-zinc-400">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Hub and spoke pattern */}
                      <rect x="28" y="28" width="8" height="8" fill="currentColor" />
                      <line x1="32" y1="32" x2="12" y2="12" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="32" y1="32" x2="52" y2="12" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="32" y1="32" x2="12" y2="52" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="32" y1="32" x2="52" y2="52" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="32" y1="32" x2="12" y2="32" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="32" y1="32" x2="52" y2="32" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="32" y1="32" x2="32" y2="12" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="32" y1="32" x2="32" y2="52" stroke="currentColor" strokeWidth="1.5" />
                      <rect x="8" y="8" width="6" height="6" fill="currentColor" />
                      <rect x="50" y="8" width="6" height="6" fill="currentColor" />
                      <rect x="8" y="50" width="6" height="6" fill="currentColor" />
                      <rect x="50" y="50" width="6" height="6" fill="currentColor" />
                      <rect x="8" y="29" width="6" height="6" fill="currentColor" />
                      <rect x="50" y="29" width="6" height="6" fill="currentColor" />
                      <rect x="29" y="8" width="6" height="6" fill="currentColor" />
                      <rect x="29" y="50" width="6" height="6" fill="currentColor" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Reliability</h3>
                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                    5-score rubric with composite scoring and deterministic gating lane for consistent, repeatable evaluation results.
                  </p>
                </div>

                {/* Auditability */}
                <div className="space-y-4">
                  <div className="w-16 h-16 flex items-center justify-center text-zinc-400">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Complex connected grid */}
                      <rect x="8" y="8" width="10" height="10" fill="currentColor" />
                      <rect x="22" y="8" width="10" height="10" fill="currentColor" />
                      <rect x="36" y="8" width="10" height="10" fill="currentColor" />
                      <rect x="8" y="22" width="10" height="10" fill="currentColor" />
                      <rect x="22" y="22" width="10" height="10" fill="currentColor" />
                      <rect x="36" y="22" width="10" height="10" fill="currentColor" />
                      <rect x="8" y="36" width="10" height="10" fill="currentColor" />
                      <rect x="22" y="36" width="10" height="10" fill="currentColor" />
                      <rect x="36" y="36" width="10" height="10" fill="currentColor" />
                      <rect x="46" y="22" width="10" height="10" fill="currentColor" />
                      <rect x="46" y="36" width="10" height="10" fill="currentColor" />
                      <line x1="18" y1="13" x2="22" y2="13" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="32" y1="13" x2="36" y2="13" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="18" y1="27" x2="22" y2="27" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="32" y1="27" x2="36" y2="27" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="18" y1="41" x2="22" y2="41" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="32" y1="41" x2="36" y2="41" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="13" y1="18" x2="13" y2="22" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="27" y1="18" x2="27" y2="22" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="41" y1="18" x2="41" y2="22" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="46" y1="27" x2="50" y2="27" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Auditability</h3>
                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                    Every run is stored with issues, recommendations, structured scores, a clear verdict, and a complete trace of decisions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Architecture summary */}
          <section id="architecture" className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">5. Architecture summary</h2>
            <EvalFlowSideBySide />
          </section>

          {/* Section 6: Example output */}
          <section id="example" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-0 py-10 bg-slate-50 -mx-4 sm:-mx-6 lg:mx-auto">
            <div className="rounded-3xl border border-slate-200 bg-white/85 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur">
              {/* Header */}
              <div className="px-8 pt-8 pb-4 flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-medium tracking-[0.22em] uppercase text-slate-500">
                    Evaluation Output
                  </div>
                  <h2 className="mt-1 text-2xl font-semibold text-slate-900">
                    This is the evaluation your agent receives
                  </h2>
                  <p className="mt-2 text-sm text-slate-500 max-w-md">
                    Built from the agent's behaviour, safety checks, and rubric-based scoring.
                  </p>
                </div>
              </div>

              {/* JSON Zone */}
              <div className="px-8 pb-8 pt-2">
                <div className="w-full overflow-x-auto rounded-2xl bg-slate-950 text-[13px] leading-relaxed text-slate-100 font-mono px-5 py-4 border border-slate-800">
                  <pre className="m-0">
                    <code>{`{
  "scores": {
    "coverage": 0.7,
    "feasibility": 0.8,
    "risks": 0.1,
    "testability": 0.6,
    "user_value": 0.9
  },
  "composite": 0.62,
  "verdict": "pass",
  "recommendations": [
    {
      "title": "Clarify file limits",
      "details": "Specify max upload size to avoid misuse.",
      "priority": 2
    }
  ]
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Impact */}
          <section id="impact" className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">7. Impact</h2>
            <div className="space-y-4">
              <ul className="list-disc pl-6 space-y-3 text-base md:text-lg">
                <li><strong>80% reduction in evaluation time</strong></li>
                <li>repeatability & consistency</li>
                <li>industrial-grade agent deployment</li>
                <li>reusable foundation for future agents</li>
              </ul>
              <div className="mt-6 p-6 rounded-2xl bg-muted/50 border">
                <p className="text-sm text-muted-foreground">
                  <strong>Future agents:</strong> Predictive Agent, Agent Experience (AX) Agent
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Roadmap */}
          <section id="roadmap" className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">8. Roadmap (Now / Next / Later)</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-card border space-y-4">
                <h3 className="text-lg font-bold text-primary">Now</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>stabilize webhook prod</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>finish Run ID propagation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>finalize Close Run + metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>fix Seed 10 Examples</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>verify full E2E flow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>integrate dashboard view</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-card border space-y-4">
                <h3 className="text-lg font-bold text-primary">Next</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Slack alerts (fails, risks, PII)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>daily cron (nightly regression test)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>composite scoring in edge function</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>pipeline for "multi-judge evaluation"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>add trend analytics</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-card border space-y-4">
                <h3 className="text-lg font-bold text-primary">Later</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Predictive AI Agent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>AX Agent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>auto-prompt repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>evaluation API (public)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>fine-grained SOC2 safety scoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 9: Going further */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">9. Going further</h2>
            <ul className="list-disc pl-6 space-y-3 text-base md:text-lg">
              <li>evaluation automation on large datasets</li>
              <li>multi-agent evaluator (comparing models)</li>
              <li>real-time evaluation during conversations</li>
              <li>plug-and-play agent governance framework</li>
            </ul>
          </section>

          {/* Section 10: Tech used */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">10. Tech used</h2>
            <div className="flex flex-wrap gap-3">
              {["n8n", "Supabase", "OpenAI", "Vercel (CI Gate)", "Figma (design + diagrams)", "Cursor (build & docs)"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* CTA Banner */}
          <CTABanner
            title="Explore more projects"
            description="Discover how I build scalable systems for AI agent evaluation"
            ctaText="Back to portfolio"
            onClick={() => navigate("/")}
            className="my-6"
          />
        </div>

        {/* Footer */}
        <Footer
          siteName="Ivan de Murard"
          tagline="Product Manager building user-centered experiences"
          sections={[{ id: "home", label: "Back to Portfolio" }]}
          onSectionClick={scrollToSection}
          className="mt-16"
        />
      </main>

      {/* Lightbox for diagram */}
      <ImageLightbox
        images={[
          {
            src: "", // We'll use a custom render
            alt: "Evaluation Engine™ Workflow Diagram",
            caption: "The Evaluation Engine™ processes conversations through a structured workflow: user input → safety check → normalization → evaluation → issues/recommendations/scores → Supabase dashboard → CI gate",
          },
        ]}
        currentIndex={0}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={() => {}}
        customContent={
          <div className="max-w-[95vw] max-h-[90vh] overflow-auto p-8 flex flex-col items-center">
            <EvaluationEngineDiagram size="full" />
            <p className="mt-6 text-white text-center text-base md:text-lg max-w-4xl">
              The Evaluation Engine™ processes conversations through a structured workflow: user input → safety check → normalization → evaluation → issues/recommendations/scores → Supabase dashboard → CI gate
            </p>
          </div>
        }
      />
    </>
  );
}
