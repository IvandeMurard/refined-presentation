import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "@/components/footer";
import { SectionHeader } from "../components/SectionHeader";
import { FilterChips } from "../components/FilterChips";
import { CardImmersive } from "../components/CardImmersive";
import { MediaCard } from "../components/work/MediaCard";
import { CarouselRow } from "../components/CarouselRow";
import { WorkModal } from "../components/WorkModal";
import { CTABanner } from "../components/work/CTABanner";
import { BuiltWithBanner } from "../components/BuiltWithBanner";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { Mail, Linkedin, MessageCircle, ArrowDown } from "lucide-react";
import { useTools, useResources, useInspirations } from "../hooks/useResources";
import { sonorCase } from "../data/cases/sonor.case";
import wttjHero from "@/assets/wttj-hero.png";
import wttjLogo from "@/assets/wttj-logo.svg";
import MarqueeBanner from "@/components/MarqueeBanner";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  category: string;
  logo?: string;
  bullets?: string[];
  longDescription?: string;
}

const projects: Project[] = [
  // — SONOR (Open Data) — remplacement homogène
  {
    id: "sonor",
    title: "A 2-year entrepreneurship team project",
    subtitle: "How can cities turn open data into quieter streets?",
    image: "/img/sonor.jpg",
    logo: "/img/logo_sonor.png",
    tags: ["Open Data"],
    category: "product",
    longDescription: "Reducing urban noise by transforming open data into actionable city insights.",
    bullets: [
      "20+ stakeholder interviews across city departments",
      "€20k pre-seed funding secured for the concept",
      "Map + data pipeline prototype to surface hotspots",
    ],
  },
  // — WTTJ (Conversion seniors) —
  {
    id: "wttj-conversion-seniors",
    title: "A growth-oriented product case study",
    subtitle: "How might we increase senior-candidate conversion on WTTJ?",
    image: wttjHero,
    logo: wttjLogo,
    tags: ["Growth", "Product Management"],
    category: "product",
    longDescription: "Improving conversion for senior candidates through clearer offers and guided activation.",
    bullets: [
      "User discovery with senior engineers to surface friction",
      "Strategy pivot towards a clearer, more focused WTTJ Tech+",
      "MVP: standardized job pages + guided onboarding + AI helper",
      "Early signal: CTR 11% → 13% and +300 to +800 activated profiles",
    ],
  },

  // — Agents d’évaluation —
  {
    id: "agents-eval",
    title: "Evaluating AI agents at scale",
    subtitle: "How do we turn trust into an asset?",
    image: "/img/mdreza-jalali-unsplash.jpg",
    tags: ["Agents", "Evaluation"],
    category: "agents",
    longDescription: "From run lifecycle to clear signals, helping teams ship agents with confidence.",
    bullets: [
      "Simple lifecycle and dashboard to see what matters",
      "Automatic scoring with LLM-as-a-Judge guardrails for “go/no-go”",
      "Issues & recommendations captured for fast iteration",
      "Ready to specialize per domain (UX, data quality, robustness)",
    ],
  },

  // — Spotify / Valence —
  {
    id: "spotify-valence-journeys",
    title: "A musical data-driven experience",
    subtitle: "Can we value music mood to nudge better daily choices?",
    image: "/images/projects/spotify-mood/cover.webp", // ajoute un visuel placeholder si besoin
    tags: ["Experience"],
    category: "experience",
    longDescription: "Turning listening signals (valence/arousal) into nudging, helpful suggestions.",
    bullets: [
      "Map mood to actionable suggestions (focus, move, social)",
      "Context-aware flow: time, history, energy",
      "Solo or social modes (local jam / shared moments)",
      "Next: mobile wireframes and qualitative testing",
    ],
  },

  // — On Air —
  {
    id: "on-air",
    title: "Record and auto-transcribe lyrics & melody in real time?",
    subtitle: "What if songwriting felt truly live and collaborative?",
    image: "/images/projects/on-air/cover.webp", // ajoute un visuel placeholder si besoin
    tags: ["Product"],
    category: "product",
    longDescription: "From live rooms to time-coded snippets you can share instantly.",
    bullets: [
      "Live rooms that feel immediate and lightweight",
      "Automatic capture of lyrics and melody/tablature",
      "Time-coded highlights for quick sharing",
      "Roadmap: V1 capture → V2 non-destructive editing → V3 creative packs",
    ],
  },
];

const filterChips = [
  { id: "all", label: "All (5)" },
  { id: "product", label: "Product (3)" }, // Sonor, WTTJ, On Air
  { id: "experience", label: "Expérience (1)" }, // Spotify valence
  { id: "agents", label: "Agents (1)" }, // Agents d’évaluation
  { id: "automatisations", label: "Automatisations (0)" },
];

const resourceFilterChips = [
  { id: "inspiration", label: "Inspiration" },
  { id: "resources", label: "Resources" },
  { id: "tools", label: "Tools" },
];

const experienceFilterChips = [
  { id: "experiences", label: "Expériences" },
  { id: "continuous-learning", label: "Continuous Learning" },
  { id: "education", label: "Education" },
];

const hackathons = [
  {
    year: "2025",
    title: "Windsurf × Mistral × The AI Collective",
    team: "Team of 4",
    status: "3rd Place",
    description: "Built an idea generator + matcher for hackathons with a video avatar.",
    skills: ["Prompt engineering", "Content creation", "Social media"],
  },
  {
    year: "2025",
    title: "Lion du Samedi — Promptathon #1",
    team: "Team of 5",
    description: "Prompted a functional tool to automate market-intel research and social publishing.",
    skills: ["Prompt engineering", "Automation", "Make", "Market intelligence", "Social media", "AI"],
  },
  {
    year: "2020",
    title: "Recoder l’Habitat #2",
    team: "Team of 4",
    status: "1st Place 🏆",
    description: "Prototyped an open-data SaaS for city noise-pollution diagnostics.",
    skills: ["Prototyping", "Open data", "Product management", "Noise pollution", "Data visualization"],
  },
  {
    year: "2020",
    title: "Hack The Crisis",
    team: "Team of 5",
    status: "Finalists",
    description: "Prototyped a digital training & coordination tool for caregivers to ease hospital load.",
    skills: ["Service design", "Prototyping", "HealthTech", "User journey"],
  },
];

const experiences = [
  {
    title: "Senior Product Designer",
    company: "TECH UNICORN SAAS",
    description: "Lead 0→1 design on 3 products generating €2M ARR, managing 8-person design team",
  },
  {
    title: "Product Manager",
    company: "FINTECH SCALE-UP",
    description: "MVP to Product-Market Fit in 18 months, 50k+ active users",
  },
  {
    title: "UX Consultant",
    company: "INDEPENDENT",
    description: "Conversion optimization for 12 clients (+15% average), e-commerce focus",
  },
  {
    title: "Growth Product Manager",
    company: "EDTECH STARTUP",
    description: "300% user growth in 12 months via optimized onboarding experiences",
  },
];

const continuousLearning = [
  {
    title: "AI & Machine Learning Foundations",
    source: "DeepLearning.AI",
    description: "2024 - Practical applications of AI in product development",
  },
  {
    title: "Advanced Product Analytics",
    source: "Reforge",
    description: "2023 - Data-driven decision making and experimentation",
  },
  {
    title: "Growth Marketing Intensive",
    source: "CXL Institute",
    description: "2022 - Conversion optimization and growth strategies",
  },
];

const education = [
  {
    title: "Master in Innovation Management",
    school: "HEC PARIS",
    description: "2020 - Focus on digital entrepreneurship and product strategy",
  },
  {
    title: "Product Management Certification",
    school: "STANFORD ONLINE",
    description: "2021 - Lean Startup, Growth Hacking, Advanced Analytics",
  },
  {
    title: "Design Thinking Training",
    school: "IDEO U",
    description: "2019 - User-centered methodologies and innovation",
  },
];

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeResourceFilter, setActiveResourceFilter] = useState("inspiration");
  const [activeExperienceFilter, setActiveExperienceFilter] = useState("experiences");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: tools = [] } = useTools();
  const { data: resources = [] } = useResources();
  const { data: inspirations = [] } = useInspirations();

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openModal = (index: number) => {
    setSelectedProjectIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigateToProject = (direction: "prev" | "next") => {
    if (selectedProjectIndex === null) return;

    if (direction === "prev" && selectedProjectIndex > 0) {
      setSelectedProjectIndex(selectedProjectIndex - 1);
    } else if (direction === "next" && selectedProjectIndex < filteredProjects.length - 1) {
      setSelectedProjectIndex(selectedProjectIndex + 1);
    }
  };

  const selectedProject = selectedProjectIndex !== null ? filteredProjects[selectedProjectIndex] : null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - compact, clean (no green gradient) */}
      <section id="hero" className="px-4 py-6 md:py-10">
        <div className="mx-auto mt-8 md:mt-12 max-w-[960px] w-full">
          {/* Card (no .group here => no cross-hover side effects) */}
          <div
            className="relative rounded-3xl bg-card/80 backdrop-blur
                 shadow-[0_8px_28px_rgba(0,0,0,0.06)]
                 ring-1 ring-black/5 dark:ring-white/10
                 border border-border/60 p-6 md:p-8
                 transition-shadow duration-300 hover:shadow-[0_16px_44px_rgba(0,0,0,0.08)]"
          >
            {/* ⛔️ gradient overlay removed */}

            <div className="grid items-center gap-6 md:gap-7 md:grid-cols-12">
              {/* Left: titles + subtitle + pills */}
              <div className="md:col-span-7 text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight tracking-tight">
                  Ivan de Murard
                </h1>
                <p className="mt-2 text-2xl md:text-[28px] font-semibold text-muted-foreground">
                  Zero-to-One Product Manager
                </p>

                <p className="mt-4 text-[15px] md:text-[17px] leading-7 text-muted-foreground max-w-[62ch]">
                  From initial discovery to validated MVP, I turn user insights into impactful products and experiences,
                  with AI and go-to-market expertise.
                </p>

                {/* CTAs sous le sous-titre */}
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button
                    size="default"
                    className="group bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => scrollToSection("work")}
                  >
                    <span className="inline-flex items-center">
                      Discover my projects
                      <span className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                    </span>
                  </Button>
                  <Button
                    size="default"
                    className="group bg-contact hover:bg-contact/90 text-contact-foreground"
                    onClick={() => scrollToSection("contact")}
                  >
                    <span className="inline-flex items-center">
                      Let&apos;s meet!
                      <span className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                    </span>
                  </Button>
                </div>

                {/* Pastilles sous les CTAs */}
                <ul className="mt-4 flex flex-wrap gap-2 text-sm">
                  {["Discovery", "MVP", "AI", "Go-to-Market"].map((tag) => (
                    <li
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-primary/10 text-primary
                           dark:bg-primary/15 dark:text-primary border border-primary/20
                           dark:border-primary/30"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: photo + desktop CTAs */}
              <div className="md:col-span-5 md:pl-2 flex justify-center md:justify-end">
                <div className="w-[260px] sm:w-[270px] lg:w-[280px] max-w-full">
                  <figure
                    aria-label="Portrait Ivan de Murard"
                    className="relative aspect-square w-full rounded-2xl overflow-hidden
                         bg-card/60 border border-border ring-1 ring-black/10 dark:ring-white/10
                         shadow-lg transition-transform duration-200 hover:-translate-y-1 focus-visible:-translate-y-1"
                  >
                    <img
                      src="/img/profile_picture.jpg"
                      alt="Ivan de Murard — Product Manager"
                      className="h-full w-full object-cover"
                      loading="eager"
                      decoding="async"
                    />
                  </figure>

                  <p className="mt-4 text-xs text-muted-foreground text-center">Usually replies in &lt;24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <MarqueeBanner
        phrases={[
          "Discovery",
          "User Research",
          "MVP Development",
          "AI Integration",
          "Go-to-Market Strategy",
          "Product Design",
          "Data Analysis",
          "Growth Marketing"
        ]}
        speed={0.15}
        pauseOnHover={true}
        className="py-6 bg-muted/30"
      />

      {/* Work Section - Left Aligned */}
      <section id="work" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="WORK" title="Work" alignment="left" className="mb-8" />
          <FilterChips
            chips={filterChips}
            activeChip={activeFilter}
            onChipChange={setActiveFilter}
            className="mb-8"
          />

          {/* Mobile/Tablet: Grid Layout */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 justify-items-center">
            {filteredProjects.map((project, index) =>
              project.id === "sonor" ? (
                <MediaCard
                  key={project.id}
                  id={project.id}
                  kicker={`Case Study – ${project.title}`}
                  title={project.subtitle}
                  tagline="De l'idée au produit validé"
                  badge={project.tags[0] || "Project"}
                  image={project.image}
                  videoSrc="/sonor_card_illustration.mp4"
                  onClick={() => openModal(index)}
                />
              ) : (
                <CardImmersive
                  key={project.id}
                  id={project.id}
                  kicker={`Case Study – ${project.title}`}
                  title={project.subtitle}
                  tagline="De l'idée au produit validé"
                  badge={project.tags[0] || "Project"}
                  image={project.image}
                  onClick={() => openModal(index)}
                />
              ),
            )}
          </div>

          {/* Desktop: Carousel Layout */}
          <div className="hidden lg:block mb-12">
            <CarouselRow>
              {filteredProjects.map((project, index) =>
                project.id === "sonor" ? (
                  <MediaCard
                    key={project.id}
                    id={project.id}
                    kicker={`Case Study – ${project.title}`}
                    title={project.subtitle}
                    tagline="De l'idée au produit validé"
                    badge={project.tags[0] || "Project"}
                    image={project.image}
                    videoSrc="/sonor_card_illustration.mp4"
                    onClick={() => openModal(index)}
                  />
                ) : (
                  <CardImmersive
                    key={project.id}
                    id={project.id}
                    kicker={`Case Study – ${project.title}`}
                    title={project.subtitle}
                    tagline="De l'idée au produit validé"
                    badge={project.tags[0] || "Project"}
                    image={project.image}
                    onClick={() => openModal(index)}
                  />
                ),
              )}
            </CarouselRow>
          </div>

          <div className="flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="group hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              onClick={() => scrollToSection("hackathons")}
            >
              EXPLORE HACKATHONS
              <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
            </Button>
          </div>
        </div>
      </section>

      {/* Hackathons Section - Left Aligned */}
      <section id="hackathons" className="py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="COMPETITION" title="Hackathons" alignment="left" className="mb-12" />

          <div className="space-y-8">
            {hackathons.map((hack, index) => (
              <div key={index} className="flex gap-8 pb-8 border-b border-border last:border-0">
                <div className="w-20 flex-shrink-0">
                  <span className="text-sm font-medium text-muted-foreground">{hack.year}</span>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">{hack.title}</h3>
                      <p className="text-sm text-accent font-medium">{hack.status}</p>
                      <p className="text-sm text-muted-foreground mt-1">{hack.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="group hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              onClick={() => scrollToSection("experience")}
            >
              VIEW EXPERIENCE
              <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to build the future together?"
        description="Let's discuss how we can turn your product vision into reality"
        ctaText="Let's meet!"
        onClick={() => scrollToSection("contact")}
      />

      {/* Experience & Education Section - Left Aligned */}
      <section id="experience" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="BACKGROUND" title="Experience & Education" alignment="left" className="mb-8" />

          <FilterChips
            chips={experienceFilterChips}
            activeChip={activeExperienceFilter}
            onChipChange={setActiveExperienceFilter}
            className="mb-8"
          />

          {/* Conditional Content Based on Active Filter */}
          <div className="space-y-6">
            {activeExperienceFilter === "experiences" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-foreground">{exp.title}</h4>
                    <p className="text-sm text-accent font-medium uppercase tracking-wider">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeExperienceFilter === "continuous-learning" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {continuousLearning.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-accent font-medium uppercase tracking-wider">{item.source}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeExperienceFilter === "education" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-foreground">{edu.title}</h4>
                    <p className="text-sm text-accent font-medium uppercase tracking-wider">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="group hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              onClick={() => scrollToSection("resources")}
            >
              EXPLORE RESOURCES
              <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
            </Button>
          </div>
        </div>
      </section>

      {/* Inspiration Resources Tools Section - Left Aligned */}
      <section id="resources" className="py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            kicker="WHAT DRIVES ME"
            title="Inspiration · Resources · Tools"
            alignment="left"
            className="mb-8"
          />

          <FilterChips
            chips={resourceFilterChips}
            activeChip={activeResourceFilter}
            onChipChange={setActiveResourceFilter}
            className="mb-8"
          />

          {/* Conditional Content Based on Active Filter */}
          <div className="space-y-6">
            {activeResourceFilter === "inspiration" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {inspirations.map((item) => (
                  <div key={item.id} className="space-y-2">
                    <h4 className="font-semibold text-foreground">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-accent hover:underline inline-block"
                      >
                        Visit →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeResourceFilter === "resources" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((item) => (
                  <div key={item.id} className="space-y-2">
                    <h4 className="font-semibold text-foreground">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-accent hover:underline inline-block"
                      >
                        Visit →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeResourceFilter === "tools" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool) => (
                  <div key={tool.id} className="space-y-2">
                    <div className="flex items-start gap-3">
                      {tool.logo_url && (
                        <img
                          src={tool.logo_url}
                          alt={tool.name}
                          className="w-10 h-10 rounded object-cover flex-shrink-0"
                        />
                      )}
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{tool.name}</h4>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{tool.category}</p>
                        <p className="text-sm text-muted-foreground">{tool.description}</p>
                        <div className="flex gap-3 mt-2">
                          {tool.url && (
                            <a
                              href={tool.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-accent hover:underline"
                            >
                              Visit →
                            </a>
                          )}
                          {tool.referral_link && (
                            <a
                              href={tool.referral_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-accent hover:underline"
                            >
                              Get started →
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="group hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              GET IN TOUCH
              <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
            </Button>
          </div>
        </div>
      </section>

      {/* Built With Banner */}
      <BuiltWithBanner />

      {/* Contact Section - Centered */}
      <section id="contact" className="py-24 px-4 bg-contact text-contact-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-h2">Let's design a meaningful future together</h2>

          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Do you have an idea to validate or a product to optimize? Let's discuss and explore opportunities together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-card hover:bg-card/90 text-contact border-2 border-card">
              <Mail className="mr-2 h-5 w-5" />
              Email
            </Button>
            <Button size="lg" className="bg-card hover:bg-card/90 text-contact border-2 border-card">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button size="lg" className="bg-card hover:bg-card/90 text-contact border-2 border-card">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer
        siteName="Ivan de Murard"
        tagline="Product Manager building user-centered experiences"
        sections={[
          { id: "work", label: "Work" },
          { id: "hackathons", label: "Hackathons" },
          { id: "experience", label: "Experience" },
          { id: "resources", label: "Resources" },
          { id: "contact", label: "Contact" },
        ]}
        onSectionClick={(sectionId) => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* Work Modal */}
      {selectedProject && (
        <WorkModal
          open={isModalOpen}
          onClose={closeModal}
          onNavigate={navigateToProject}
          canNavigatePrev={selectedProjectIndex !== null && selectedProjectIndex > 0}
          canNavigateNext={selectedProjectIndex !== null && selectedProjectIndex < filteredProjects.length - 1}
          logo={selectedProject.logo}
          title={selectedProject.title}
          subtitle={selectedProject.longDescription}
          bullets={selectedProject.bullets}
          cta={{
            label: "Lire le case study",
            href: `/case-study/${selectedProject.id}`,
          }}
        />
      )}
    </div>
  );
};
