import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  subtitle: string;
  image: string;
  tags?: string[];
  onClick?: () => void;
  className?: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ 
  title, 
  subtitle, 
  image, 
  tags = [], 
  onClick,
  className = "" 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative w-[360px] h-[480px] rounded-3xl overflow-hidden cursor-pointer group ${className}`}
      style={{
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)'
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className={`absolute inset-0 transition-all duration-300 ${
          isHovered 
            ? 'bg-gradient-to-t from-black/70 via-black/40 to-black/25' 
            : 'bg-gradient-to-t from-black/60 via-black/30 to-black/20'
        }`}
      />
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-8">
        {/* Top Section - Kicker */}
        <div>
          <p 
            className="text-xs text-white uppercase tracking-wide font-medium opacity-80"
            style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}
          >
            Case Study – {title}
          </p>
        </div>
        
        {/* Center Section - Title & Tagline */}
        <div className="space-y-3 flex-1 flex flex-col justify-center">
          <h3 
            className="text-3xl font-bold text-white leading-tight"
            style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.6)' }}
          >
            {subtitle}
          </h3>
          
          <p 
            className="text-base text-white opacity-70"
            style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}
          >
            De l'idée au produit validé
          </p>
        </div>
        
        {/* Bottom Section - Badge & CTA */}
        <div className="flex justify-between items-end">
          {/* Badge - Bottom Left */}
          {tags.length > 0 && (
            <span 
              className="inline-block rounded-full text-white text-xs px-3 py-1.5 font-medium"
              style={{ 
                backgroundColor: '#2ECC71',
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)'
              }}
            >
              {tags[0]}
            </span>
          )}
          
          {/* CTA - Bottom Right */}
          <div className="bg-black/70 backdrop-blur-sm rounded-full p-2.5 transition-all duration-300 overflow-hidden group-hover:px-5">
            <div className="flex items-center gap-2">
              <Plus className="w-5 h-5 text-white flex-shrink-0" />
              <span 
                className={`text-white text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  isHovered ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0'
                }`}
              >
                Lire le case study
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
