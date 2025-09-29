import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselRowProps {
  children: React.ReactNode;
  className?: string;
}

export const CarouselRow: React.FC<CarouselRowProps> = ({ children, className = "" }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340; // Card width + gap
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

  return (
    <div className={`relative group ${className}`}>
      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-secondary"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-secondary"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x pb-4"
        style={{ scrollPaddingLeft: '1.5rem' }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="snap-start flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};