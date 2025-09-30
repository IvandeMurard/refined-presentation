import React from 'react';

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  description?: string;
  className?: string;
  alignment?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  kicker, 
  title, 
  description, 
  className = "",
  alignment = "left"
}) => {
  const alignmentClasses = alignment === 'center' ? 'text-center items-center' : 'text-left';
  
  return (
    <div className={`space-y-4 flex flex-col ${alignmentClasses} ${className}`}>
      {kicker && (
        <p className="text-kicker text-muted-foreground">
          {kicker}
        </p>
      )}
      <h2 className="text-h2 text-foreground">
        {title}
      </h2>
      {description && (
        <p className={`text-body text-muted-foreground ${alignment === 'center' ? 'max-w-3xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </div>
  );
};