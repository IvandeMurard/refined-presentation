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
      className={`relative w-80 h-96 rounded-2xl shadow-lg overflow-hidden cursor-pointer group ${className}`}
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
            ? 'bg-gradient-to-t from-black/80 via-black/60 to-transparent' 
            : 'bg-gradient-to-t from-black/60 via-black/40 to-transparent'
        }`}
      />
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-6">
        {/* Top Content */}
        <div className="space-y-3">
          {/* Kicker */}
          <p className="text-xs text-white uppercase tracking-wide font-medium">
            Case Study – {title}
          </p>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-white leading-tight line-clamp-2">
            {subtitle}
          </h3>
          
          {/* Tagline - Using title as tagline since it's more descriptive */}
          <p className="text-sm text-white/70">
            De l'idée au produit validé
          </p>
          
          {/* Badge - First tag if available */}
          {tags.length > 0 && (
            <span className="inline-block rounded-full bg-emerald-500/80 text-white text-xs px-2 py-0.5">
              {tags[0]}
            </span>
          )}
        </div>
        
        {/* CTA Bottom Right */}
        <div className="flex justify-end">
          <div className="bg-black/70 backdrop-blur-sm rounded-full p-2 transition-all duration-300 overflow-hidden group-hover:px-4">
            <div className="flex items-center gap-2">
              <Plus className="w-4 h-4 text-white flex-shrink-0" />
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
