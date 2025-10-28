import React from 'react';

interface GradientBorderSectionProps {
  children: React.ReactNode;
  className?: string;
  borderPosition?: 'top' | 'bottom' | 'both';
  glassEffect?: boolean;
}

export const GradientBorderSection: React.FC<GradientBorderSectionProps> = ({ 
  children, 
  className = "",
  borderPosition = 'both',
  glassEffect = false
}) => {
  const borderClasses = borderPosition === 'both' 
    ? 'before:absolute before:top-0 before:left-0 before:w-full before:h-[2px] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px]'
    : borderPosition === 'top'
    ? 'before:absolute before:top-0 before:left-0 before:w-full before:h-[2px]'
    : 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px]';

  const gradientClasses = `
    before:bg-gradient-to-r before:from-transparent before:via-primary/20 before:to-transparent
    after:bg-gradient-to-r after:from-transparent after:via-primary/20 after:to-transparent
    dark:before:via-primary/10 dark:after:via-primary/10
  `;

  const glassClasses = glassEffect 
    ? 'backdrop-blur-md bg-gradient-to-r from-card/98 via-card/95 to-card/98' 
    : 'bg-card';

  return (
    <section className={`relative ${borderClasses} ${gradientClasses} ${glassClasses} ${className}`}>
      {children}
    </section>
  );
};
