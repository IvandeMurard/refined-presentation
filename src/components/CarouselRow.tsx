import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselRowProps {
  children: React.ReactNode;
  className?: string;
}

export const CarouselRow: React.FC<CarouselRowProps> = ({ children, className = "" }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 344; // Card width (320px) + gap (24px)
      const currentScroll = scrollRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scroll('left');
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        scroll('right');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      updateScrollState();
      scrollEl.addEventListener('scroll', updateScrollState);
      window.addEventListener('resize', updateScrollState);
      
      return () => {
        scrollEl.removeEventListener('scroll', updateScrollState);
        window.removeEventListener('resize', updateScrollState);
      };
    }
  }, []);

  return (
    <div className={`relative group ${className}`}>
      {/* Left Fade Gradient */}
      {canScrollLeft && (
        <div className="absolute left-0 top-0 bottom-4 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      )}

      {/* Right Fade Gradient */}
      {canScrollRight && (
        <div className="absolute right-0 top-0 bottom-4 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      )}

      {/* Left Arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-secondary hover:shadow-md"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
      )}

      {/* Right Arrow */}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-secondary hover:shadow-md"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      )}

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x pb-4"
        style={{ scrollPaddingLeft: '1.5rem' }}
      >
        {React.Children.map(children, (child, index) => (
          <div 
            key={index} 
            className="snap-start flex-shrink-0 animate-fade-in"
            style={{ 
              animationDelay: `${index * 80}ms`,
              animationFillMode: 'backwards'
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};