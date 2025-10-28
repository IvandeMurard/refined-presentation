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
    ? 'before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px]'
    : borderPosition === 'top'
    ? 'before:absolute before:top-0 before:left-0 before:w-full before:h-[1px]'
    : 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px]';

  const gradientClasses = `
    before:bg-gradient-to-r before:from-transparent before:via-border/30 before:to-transparent
    after:bg-gradient-to-r after:from-transparent after:via-border/30 after:to-transparent
    dark:before:via-border/15 dark:after:via-border/15
  `;

  const glassClasses = glassEffect 
    ? 'backdrop-blur-md bg-card/95' 
    : 'bg-card';

  return (
    <section className={`relative ${borderClasses} ${gradientClasses} ${glassClasses} ${className}`}>
      {children}
    </section>
  );
};
