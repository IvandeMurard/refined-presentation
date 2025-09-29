import React from 'react';

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  kicker, 
  title, 
  description, 
  className = "" 
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {kicker && (
        <p className="text-kicker text-muted-foreground">
          {kicker}
        </p>
      )}
      <h2 className="text-h2 text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-body text-muted-foreground max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};