import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../../components/footer";
import { SectionHeader } from "../components/SectionHeader";
import { FilterChips } from "../components/FilterChips";
import { CardImmersive } from "../components/CardImmersive";
import { MediaCard } from "../components/work/MediaCard";
import { CarouselRow } from "../components/CarouselRow";
import { WorkModal } from "../components/WorkModal";
import { CTABanner } from "../components/work/CTABanner";
import { BuiltWithBanner } from "../components/BuiltWithBanner";
import { Button } from "../components/ui/button";
import { Mail, Linkedin, MessageCircle, ArrowDown } from "lucide-react";
import { useTools, useResources, useInspirations } from "../hooks/useResources";
import { sonorCase } from "../data/cases/sonor.case";
import wttjHero from "@/assets/wttj-hero.png";
import wttjLogo from "@/assets/wttj-logo.svg";

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
    image: "public/img/sonor.jpg",
    logo: "public/img/logo_sonor.png",
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
    title: "Turning trust into an asset",
    subtitle: "How do we trust AI agents at scale?",
    image: "public/img/mdreza-jalali-unsplash.jpg",
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

const hackathons = [
  {
    year: "2025",
    title: "Windsurf x Mistral x The AI Collective",
    team: "Team of 4",
    status: "3rd Place",
    description: "We built a generator and matcher of hackathon ideas with a video avatar.",
    skills: "Prompt engineering", "Content creation", "Social Media",
  },
  {
    year: "2025",
    title: "Lion du Samedi - Le Promptathon #1",
    team: "Team of 5",
    description: "Prompted a functional tool to automate business intelligence research and social media publication.",
    skills: "Prompt engineering", "Automation", "Make", "Market intelligence", "Social media", "AI",
  },
  {
    year: "2020",
    title: "Recoder l'Habitat #2",
    team: "Team of 4",
    status: "1st Place 🏆",
    description: "We prototyped an open data SaaS solution for noise pollution diagnosis.",
    skills: "Prototyping", "Open data", "Product Management", "Noise pollution", "Data Visualization"
  },
  {
    year: "2020",
    title: "Hack The Crisis",
    team: "Team of 5",
    status: "Finalists",
    description: "We prototyped a digital training and coordination solution for caregivers facilitating patient monitoring and hospital decongestion.",
    skills: "Service Design", "Prototyping", "HealthTech", "User Journey",
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

      {/* Hero Section - Centered */}
      <section className="pt-32 pb-24 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-h1 text-foreground">
            Product Builder & Designer
            <br />— Zero-to-One
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I transform user insights into impactful products, from initial discovery to validated MVP, with AI and
            go-to market expertise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => scrollToSection("work")}
            >
              Discover my projects
            </Button>
            <Button
              size="lg"
              className="bg-contact hover:bg-contact/90 text-contact-foreground"
              onClick={() => scrollToSection("contact")}
            >
              Let's meet!
            </Button>
          </div>

          {/* Trusted By */}
          <div className="pt-12 space-y-4">
            <p className="text-kicker text-muted-foreground">TRUSTED BY</p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
              <span className="font-medium">Unicorn SaaS</span>
              <span className="font-medium">FinTech Scale-up</span>
              <span className="font-medium">EdTech Startup</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-lg italic text-muted-foreground">
            "Exceptional product thinking with execution speed that transformed our MVP timeline from 8 months to 3."
          </p>
          <p className="text-sm text-muted-foreground uppercase tracking-wider">
            — Sarah Chen, VP Product at TechUnicorn
          </p>
        </div>
      </section>

      {/* Work Section - Left Aligned */}
      <section id="work" className="py-24 px-4">
        <div className="max-w-[1360px] mx-auto">
          <SectionHeader
            title="Work"
            description="From Insight to MVP, process-first case studies."
            alignment="left"
            className="mb-8"
          />

          <FilterChips chips={filterChips} activeChip={activeFilter} onChipChange={setActiveFilter} className="mb-8" />

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
              variant="ghost"
              className="text-muted-foreground hover:text-white"
              onClick={() => scrollToSection("hackathons")}
            >
              EXPLORE HACKATHONS <ArrowDown className="ml-2 h-4 w-4" />
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
              variant="ghost"
              className="text-muted-foreground hover:text-white"
              onClick={() => scrollToSection("experience")}
            >
              VIEW EXPERIENCE <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to build something exceptional together?"
        description="Let's discuss how we can transform your product vision into reality"
        ctaText="Get in touch"
        onClick={() => scrollToSection("contact")}
      />

      {/* Experience & Education Section - Left Aligned */}
      <section id="experience" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader kicker="BACKGROUND" title="Experience & Education" alignment="left" className="mb-12" />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Key Experiences */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Key experiences</h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-foreground">{exp.title}</h4>
                    <p className="text-sm text-accent font-medium uppercase tracking-wider">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Education</h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-foreground">{edu.title}</h4>
                    <p className="text-sm text-accent font-medium uppercase tracking-wider">{edu.school}</p>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-white"
              onClick={() => scrollToSection("resources")}
            >
              EXPLORE RESOURCES <ArrowDown className="ml-2 h-4 w-4" />
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
              variant="ghost"
              className="text-muted-foreground hover:text-white"
              onClick={() => scrollToSection("contact")}
            >
              GET IN TOUCH <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Built With Banner */}
      <BuiltWithBanner />

      {/* Contact Section - Centered */}
      <section id="contact" className="py-24 px-4 bg-contact text-contact-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-h2">Let's discuss your product</h2>

          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Have an idea to validate or a product to optimize? Let's exchange on your vision and explore opportunities
            together.
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
        tagline="Product Designer & Manager crafting user-centered experiences"
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
            label: "Lire le case study complet",
            href: `/case-study/${selectedProject.id}`,
          }}
        />
      )}
    </div>
  );
};
