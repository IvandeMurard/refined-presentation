import React from 'react';
import { FilterChips } from './FilterChips';

interface AudienceContent {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  audiences: AudienceContent[];
  activeAudience: string;
  onAudienceChange: (audienceId: string) => void;
  language?: 'en' | 'fr';
  onLanguageChange?: (lang: 'en' | 'fr') => void;
  perspectiveLabel?: string;
}

export const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  title,
  subtitle,
  heroImage,
  audiences,
  activeAudience,
  onAudienceChange,
  language = 'en',
  onLanguageChange,
  perspectiveLabel = 'Choose your perspective'
}) => {
  const activeContent = audiences.find(a => a.id === activeAudience)?.content;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <img 
          src={heroImage} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full pb-16 px-4 md:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto flex justify-between items-end">
              <div className="flex-1">
                <h1 className="text-h1 text-white mb-4">{title}</h1>
                <p className="text-xl text-white/90 leading-relaxed">{subtitle}</p>
              </div>
              {onLanguageChange && (
                <div className="flex items-center gap-2 text-white mb-4">
                  <button
                    onClick={() => onLanguageChange('en')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      language === 'en' 
                        ? 'bg-white text-primary font-semibold' 
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => onLanguageChange('fr')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      language === 'fr' 
                        ? 'bg-white text-primary font-semibold' 
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    FR
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
          {/* Audience Filter */}
          <div className="mb-12">
            <h2 className="text-h3 mb-6">{perspectiveLabel}</h2>
            <FilterChips
              chips={audiences}
              activeChip={activeAudience}
              onChipChange={onAudienceChange}
            />
          </div>

          {/* Dynamic Content */}
          <div className="prose prose-lg max-w-none">
            {activeContent}
          </div>
        </div>
      </div>
    </div>
  );
};