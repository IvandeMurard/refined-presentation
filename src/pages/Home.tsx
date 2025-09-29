import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { FilterChips } from '../components/FilterChips';
import { CardVertical } from '../components/CardVertical';
import { CarouselRow } from '../components/CarouselRow';
import { ModalPreview } from '../components/ModalPreview';
import { Button } from '../components/ui/button';
import { ArrowRight, Mail, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  category: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 'fintech-app',
    title: 'FinTech Mobile App',
    subtitle: 'Investment platform redesign',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=320&h=200&fit=crop',
    tags: ['Mobile', 'FinTech', 'UX Research'],
    category: 'mobile',
    description: 'Led the complete redesign of a mobile investment platform, increasing user engagement by 45% and reducing onboarding time by 60%.'
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    subtitle: 'Data visualization for enterprise',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=320&h=200&fit=crop',
    tags: ['Dashboard', 'Analytics', 'Enterprise'],
    category: 'web',
    description: 'Designed a comprehensive analytics dashboard that helps enterprise clients make data-driven decisions, improving workflow efficiency by 30%.'
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    subtitle: 'Omnichannel shopping experience',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=320&h=200&fit=crop',
    tags: ['E-commerce', 'Omnichannel', 'Conversion'],
    category: 'web',
    description: 'Created a unified shopping experience across web and mobile platforms, resulting in 25% increase in conversion rates.'
  },
  {
    id: 'healthcare-app',
    title: 'Healthcare App',
    subtitle: 'Patient care coordination',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=320&h=200&fit=crop',
    tags: ['Healthcare', 'Mobile', 'Accessibility'],
    category: 'mobile',
    description: 'Developed a patient care coordination app that streamlined communication between healthcare providers, reducing response times by 50%.'
  },
  {
    id: 'design-system',
    title: 'Design System',
    subtitle: 'Scalable component library',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=320&h=200&fit=crop',
    tags: ['Design System', 'Components', 'Scalability'],
    category: 'system',
    description: 'Built a comprehensive design system adopted across 12 product teams, reducing design-to-development time by 40%.'
  }
];

const filterChips = [
  { id: 'all', label: 'All Projects' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'web', label: 'Web' },
  { id: 'system', label: 'Design Systems' },
  { id: 'research', label: 'Research' }
];

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-bg py-24 lg:py-32">
        <div className="container-grid">
          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-8">
              <div>
                <p className="text-kicker text-muted-foreground mb-4">
                  Product Designer & Builder
                </p>
                <h1 className="text-h1 text-foreground mb-6">
                  Crafting digital experiences that drive results
                </h1>
                <p className="text-body text-muted-foreground max-w-2xl mb-8">
                  I help product teams design and build user-centered solutions that solve real problems. 
                  From research to launch, I bridge the gap between user needs and business goals.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="py-24">
        <div className="container-grid">
          <div className="col-span-12">
            <SectionHeader
              kicker="Selected Work"
              title="Featured Projects"
              description="A showcase of product design and development work across mobile, web, and design systems."
              className="mb-12"
            />

            <FilterChips
              chips={filterChips}
              activeChip={activeFilter}
              onChipChange={setActiveFilter}
              className="mb-12"
            />

            {/* Desktop: Carousel Row */}
            <div className="hidden lg:block">
              <CarouselRow>
                {filteredProjects.map((project) => (
                  <CardVertical
                    key={project.id}
                    title={project.title}
                    subtitle={project.subtitle}
                    image={project.image}
                    tags={project.tags}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
              </CarouselRow>
            </div>

            {/* Mobile: Grid Layout */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <CardVertical
                  key={project.id}
                  title={project.title}
                  subtitle={project.subtitle}
                  image={project.image}
                  tags={project.tags}
                  onClick={() => setSelectedProject(project)}
                  className="mx-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-accent text-accent-foreground">
        <div className="container-grid">
          <div className="col-span-12 lg:col-span-8">
            <SectionHeader
              kicker="Get in Touch"
              title="Let's build something great together"
              description="I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about design, I'd love to hear from you."
              className="mb-8"
            />
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Send Message
              </Button>
              <Button variant="outline" size="lg" className="border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/10">
                View LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ModalPreview
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          subtitle={selectedProject.subtitle}
          image={selectedProject.image}
          description={selectedProject.description}
          tags={selectedProject.tags}
        >
          <div className="mt-8">
            <Button 
              className="bg-accent hover:bg-accent/90"
              onClick={() => {
                setSelectedProject(null);
                if (selectedProject?.id === 'fintech-app') {
                  navigate('/case-study/sonor');
                }
              }}
            >
              View Full Case Study
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </ModalPreview>
      )}
    </div>
  );
};