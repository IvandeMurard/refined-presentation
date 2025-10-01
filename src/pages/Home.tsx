import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { SectionHeader } from '../components/SectionHeader';
import { FilterChips } from '../components/FilterChips';
import { CardImmersive } from '../components/CardImmersive';
import { CarouselRow } from '../components/CarouselRow';
import { Button } from '../components/ui/button';
import { Mail, Linkedin, MessageCircle, ArrowDown } from 'lucide-react';
import { useTools, useResources, useInspirations } from '../hooks/useResources';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  category: string;
}

const projects: Project[] = [
  {
    id: 'test-saas',
    title: 'Test SaaS FinTech',
    subtitle: 'Finance',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    tags: ['Product', 'Experience'],
    category: 'product',
  },
  {
    id: 'memento',
    title: 'Memento Mori App',
    subtitle: 'Well-being',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop',
    tags: ['Product'],
    category: 'product',
  },
  {
    id: 'agenda',
    title: 'UX Agenda app',
    subtitle: 'Productivity',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=300&fit=crop',
    tags: ['Agenda'],
    category: 'agenda',
  },
  {
    id: 'authorizations',
    title: 'UX Authorizations',
    subtitle: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=400&h=300&fit=crop',
    tags: ['Authorizations', 'Experience'],
    category: 'authorizations',
  },
];

const filterChips = [
  { id: 'all', label: 'All (4)' },
  { id: 'product', label: 'Product (2)' },
  { id: 'experience', label: 'Experience (2)' },
  { id: 'agenda', label: 'Agenda (1)' },
  { id: 'authorizations', label: 'Authorizations (1)' },
];

const resourceFilterChips = [
  { id: 'inspiration', label: 'Inspiration' },
  { id: 'resources', label: 'Resources' },
  { id: 'tools', label: 'Tools' },
];

const hackathons = [
  {
    year: '2023',
    title: 'AI for Good Hackathon',
    status: '1st Co-Creator',
    description: 'Rapid hypothesis validation with no-code prototyping and user feedback in 48h',
  },
  {
    year: '2023',
    title: 'TechX Challenge',
    status: '1st Co-Founder',
    description: 'Implementation of accessibility security in central financial interfaces',
  },
  {
    year: '2023',
    title: 'Stanford x LevelUp',
    status: 'Product Manager',
    description: 'Startup applications as creative containers for innovation',
  },
  {
    year: '2023',
    title: 'Sustainability Hack',
    status: 'Full Stack',
    description: 'Impact of social interactions on long-term user engagement',
  },
];

const experiences = [
  {
    title: 'Senior Product Designer',
    company: 'TECH UNICORN SAAS',
    description: 'Lead 0→1 design on 3 products generating €2M ARR, managing 8-person design team',
  },
  {
    title: 'Product Manager',
    company: 'FINTECH SCALE-UP',
    description: 'MVP to Product-Market Fit in 18 months, 50k+ active users',
  },
  {
    title: 'UX Consultant',
    company: 'INDEPENDENT',
    description: 'Conversion optimization for 12 clients (+15% average), e-commerce focus',
  },
  {
    title: 'Growth Product Manager',
    company: 'EDTECH STARTUP',
    description: '300% user growth in 12 months via optimized onboarding experiences',
  },
];

const education = [
  {
    title: 'Master in Innovation Management',
    school: 'HEC PARIS',
    description: '2020 - Focus on digital entrepreneurship and product strategy',
  },
  {
    title: 'Product Management Certification',
    school: 'STANFORD ONLINE',
    description: '2021 - Lean Startup, Growth Hacking, Advanced Analytics',
  },
  {
    title: 'Design Thinking Training',
    school: 'IDEO U',
    description: '2019 - User-centered methodologies and innovation',
  },
];

export const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeResourceFilter, setActiveResourceFilter] = useState('inspiration');

  const { data: tools = [] } = useTools();
  const { data: resources = [] } = useResources();
  const { data: inspirations = [] } = useInspirations();

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Centered */}
      <section className="pt-32 pb-24 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-h1 text-foreground">
            Product Builder & Designer<br />— Zero-to-One
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I transform user insights into impactful products, from initial discovery to validated MVP,
            with AI and go-to market expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => scrollToSection('work')}
            >
              Discover my projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
            >
              Let's meet!
            </Button>
          </div>
          
          {/* Trusted By */}
          <div className="pt-12 space-y-4">
            <p className="text-kicker text-muted-foreground">
              TRUSTED BY
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
              <span className="font-medium">Unicorn SaaS</span>
              <span className="font-medium">FinTech Scale-up</span>
              <span className="font-medium">EdTech Startup</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 bg-secondary/30">
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

          <FilterChips
            chips={filterChips}
            activeChip={activeFilter}
            onChipChange={setActiveFilter}
            className="mb-8"
          />

          {/* Mobile/Tablet: Grid Layout */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 justify-items-center">
            {filteredProjects.map((project) => (
              <CardImmersive
                key={project.id}
                id={project.id}
                kicker={`Case Study – ${project.title}`}
                title={project.subtitle}
                tagline="De l'idée au produit validé"
                badge={project.tags[0] || 'Project'}
                image={project.image}
              />
            ))}
          </div>

          {/* Desktop: Carousel Layout */}
          <div className="hidden lg:block mb-12">
            <CarouselRow>
              {filteredProjects.map((project) => (
                <CardImmersive
                  key={project.id}
                  id={project.id}
                  kicker={`Case Study – ${project.title}`}
                  title={project.subtitle}
                  tagline="De l'idée au produit validé"
                  badge={project.tags[0] || 'Project'}
                  image={project.image}
                />
              ))}
            </CarouselRow>
          </div>

          <div className="flex justify-center">
            <Button 
              variant="ghost" 
              className="text-muted-foreground hover:text-foreground"
              onClick={() => scrollToSection('hackathons')}
            >
              EXPLORE HACKATHONS <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Hackathons Section - Left Aligned */}
      <section id="hackathons" className="py-24 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            kicker="COMPETITION"
            title="Hackathons"
            alignment="left"
            className="mb-12"
          />

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
              className="text-muted-foreground hover:text-foreground"
              onClick={() => scrollToSection('experience')}
            >
              VIEW EXPERIENCE <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Experience & Education Section - Left Aligned */}
      <section id="experience" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            kicker="BACKGROUND"
            title="Experience & Education"
            alignment="left"
            className="mb-12"
          />

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
              className="text-muted-foreground hover:text-foreground"
              onClick={() => scrollToSection('resources')}
            >
              EXPLORE RESOURCES <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Inspiration Resources Tools Section - Left Aligned */}
      <section id="resources" className="py-24 px-4 bg-secondary/20">
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
            {activeResourceFilter === 'inspiration' && (
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

            {activeResourceFilter === 'resources' && (
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

            {activeResourceFilter === 'tools' && (
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
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                          {tool.category}
                        </p>
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
              className="text-muted-foreground hover:text-foreground"
              onClick={() => scrollToSection('contact')}
            >
              GET IN TOUCH <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section - Centered */}
      <section id="contact" className="py-24 px-4 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-h2">Let's discuss your product</h2>
          
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Have an idea to validate or a product to optimize? Let's exchange on your vision and
            explore opportunities together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white hover:bg-white/90 text-accent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
