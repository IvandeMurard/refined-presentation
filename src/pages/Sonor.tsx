import React from 'react';
import { CaseStudyLayout } from '../components/CaseStudyLayout';
import { useAudience } from '../hooks/useAudience';
import { Button } from '../components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/footer';
import { Navigation } from '../components/Navigation';

export const Sonor: React.FC = () => {
  const navigate = useNavigate();
  const { activeAudience, setActiveAudience, audiences } = useAudience();

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      navigate('/');
    }
  };

  const audienceContent = [
    {
      id: 'pm',
      label: 'Product Manager',
      content: (
        <div className="space-y-8">
          <section>
            <h3 className="text-h3 mb-4">Business Impact</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card p-6 rounded-2xl border">
                <h4 className="text-2xl font-bold text-accent mb-2">45%</h4>
                <p className="text-muted-foreground">Increase in user engagement</p>
              </div>
              <div className="bg-card p-6 rounded-2xl border">
                <h4 className="text-2xl font-bold text-accent mb-2">60%</h4>
                <p className="text-muted-foreground">Reduction in onboarding time</p>
              </div>
              <div className="bg-card p-6 rounded-2xl border">
                <h4 className="text-2xl font-bold text-accent mb-2">$2.3M</h4>
                <p className="text-muted-foreground">Additional revenue generated</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-h3 mb-4">Strategic Approach</h3>
            <p className="text-body mb-6">
              Led a cross-functional team of 8 members through a comprehensive redesign of Sonor's 
              audio collaboration platform. The project aligned with company OKRs to increase user 
              retention and expand market share in the creative tools space.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Conducted market analysis identifying key competitive advantages</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Defined success metrics and KPIs aligned with business objectives</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Established design system governance for scalable product development</span>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-h3 mb-4">Roadmap & Timeline</h3>
            <div className="bg-card p-6 rounded-2xl border">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="font-medium">Discovery & Research</span>
                  <span className="text-sm text-muted-foreground">Weeks 1-3</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="font-medium">Design & Prototyping</span>
                  <span className="text-sm text-muted-foreground">Weeks 4-8</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="font-medium">Development & Testing</span>
                  <span className="text-sm text-muted-foreground">Weeks 9-14</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Launch & Optimization</span>
                  <span className="text-sm text-muted-foreground">Weeks 15-16</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      )
    },
    {
      id: 'design',
      label: 'Designer',
      content: (
        <div className="space-y-8">
          <section>
            <h3 className="text-h3 mb-4">Design Process</h3>
            <p className="text-body mb-6">
              The Sonor redesign followed a user-centered design approach, emphasizing accessibility 
              and inclusive design principles throughout the creative process.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-3">Research & Discovery</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 45 user interviews with audio professionals</li>
                  <li>• Competitive analysis of 12 audio collaboration tools</li>
                  <li>• Accessibility audit of existing platform</li>
                  <li>• Journey mapping across 5 user personas</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Design & Validation</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Rapid prototyping with Figma and ProtoPie</li>
                  <li>• 3 rounds of usability testing (n=24 each)</li>
                  <li>• A/B testing on key interaction patterns</li>
                  <li>• Design system creation with 120+ components</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-h3 mb-4">Key Design Decisions</h3>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-2xl border">
                <h4 className="font-semibold mb-2">Spatial Audio Visualization</h4>
                <p className="text-muted-foreground">
                  Developed a new visual language for representing 3D audio positioning, 
                  making complex spatial relationships intuitive for non-technical users.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border">
                <h4 className="font-semibold mb-2">Collaborative Workspace</h4>
                <p className="text-muted-foreground">
                  Redesigned the main interface to support real-time collaboration, 
                  with clear visual indicators for user presence and activity.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border">
                <h4 className="font-semibold mb-2">Accessibility First</h4>
                <p className="text-muted-foreground">
                  Implemented WCAG 2.1 AA standards, including high contrast modes 
                  and comprehensive keyboard navigation for screen reader users.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-h3 mb-4">Design System</h3>
            <p className="text-body mb-6">
              Created a comprehensive design system that scales across web and mobile platforms, 
              ensuring consistency while allowing for platform-specific optimizations.
            </p>
            <div className="flex gap-4">
              <Button variant="outline">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Figma File
              </Button>
              <Button variant="outline">
                Design System Docs
              </Button>
            </div>
          </section>
        </div>
      )
    },
    {
      id: 'recruiter',
      label: 'Recruiter',
      content: (
        <div className="space-y-8">
          <section>
            <h3 className="text-h3 mb-4">Role Overview</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-3">Responsibilities</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Led product design for audio collaboration platform</li>
                  <li>• Managed team of 3 junior designers</li>
                  <li>• Collaborated with PM, Engineering, and Marketing</li>
                  <li>• Conducted user research and usability testing</li>
                  <li>• Established design system and processes</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Skills Demonstrated</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Product strategy and roadmap planning</li>
                  <li>• Cross-functional team leadership</li>
                  <li>• User research and data analysis</li>
                  <li>• Design systems and scalable processes</li>
                  <li>• Stakeholder communication and buy-in</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-h3 mb-4">Impact & Results</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center p-4 bg-card rounded-lg border">
                <span>User Engagement Increase</span>
                <span className="font-semibold text-accent">+45%</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-card rounded-lg border">
                <span>Onboarding Time Reduction</span>
                <span className="font-semibold text-accent">-60%</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-card rounded-lg border">
                <span>Customer Satisfaction Score</span>
                <span className="font-semibold text-accent">4.8/5</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-card rounded-lg border">
                <span>Team Velocity Improvement</span>
                <span className="font-semibold text-accent">+35%</span>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-h3 mb-4">Technical Skills</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Design Tools</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Figma (Advanced)</div>
                  <div>ProtoPie (Intermediate)</div>
                  <div>Adobe Creative Suite</div>
                  <div>Principle</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Research Tools</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>UserTesting.com</div>
                  <div>Hotjar</div>
                  <div>Maze</div>
                  <div>Amplitude</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Development</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>HTML/CSS</div>
                  <div>React (Basic)</div>
                  <div>Framer</div>
                  <div>Webflow</div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-h3 mb-4">References Available</h3>
            <p className="text-body text-muted-foreground mb-6">
              I can provide references from product managers, engineers, and other designers 
              I've worked with at Sonor and previous companies. All references can speak to 
              my collaboration skills, design quality, and impact on business outcomes.
            </p>
            <Button variant="outline">
              Request References
            </Button>
          </section>
        </div>
      )
    }
  ];

  return (
    <>
      <Navigation />
      <div className="pt-20">
        <CaseStudyLayout
        title="Sonor Audio Platform"
        subtitle="Redesigning the future of audio collaboration for creative professionals"
        heroImage="https://github.com/IvandeMurard/refined-presentation/blob/main/public/img/sonor_platform_desktop.png"
        audiences={audienceContent}
        activeAudience={activeAudience}
        onAudienceChange={setActiveAudience}
      />
      
      {/* Footer */}
      <Footer
        siteName="Ivan de Murard"
        tagline="Product Designer & Manager crafting user-centered experiences"
        sections={[
          { id: "home", label: "Back to Portfolio" }
        ]}
        onSectionClick={scrollToSection}
      />
      </div>
    </>
  );
};