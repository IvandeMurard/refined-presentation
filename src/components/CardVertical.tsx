import React from 'react';

interface CardVerticalProps {
  image: string;
  title: string;
  subtitle: string;
  tags?: string[];
  onClick?: () => void;
  className?: string;
}

export const CardVertical: React.FC<CardVerticalProps> = ({ 
  image, 
  title, 
  subtitle, 
  tags = [], 
  onClick,
  className = "" 
}) => {
  return (
    <div 
      className={`card-modern cursor-pointer group ${className}`}
      onClick={onClick}
      style={{ width: '320px', height: '320px' }}
    >
      <div className="relative h-[200px] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="card-overlay">
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-sm opacity-90">{subtitle}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs bg-secondary rounded-full text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};