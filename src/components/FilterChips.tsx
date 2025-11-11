import React from 'react';

interface FilterChip {
  id: string;
  label: string;
}

interface FilterChipsProps {
  chips: FilterChip[];
  activeChip: string;
  onChipChange: (chipId: string) => void;
  className?: string;
  disableSticky?: boolean;
}

export const FilterChips: React.FC<FilterChipsProps> = ({ 
  chips, 
  activeChip, 
  onChipChange, 
  className = "",
  disableSticky = false
}) => {
  return (
    <div className={`${disableSticky ? 'relative' : 'sticky top-[56px] z-40'} backdrop-blur-lg bg-white/90 dark:bg-background/90 shadow-sm py-4 transition-all duration-300 ease-in-out ${className}`}>
      <div className="flex flex-wrap gap-3">
        {chips.map((chip) => (
          <button
            key={chip.id}
            className="chip-filter"
            aria-pressed={activeChip === chip.id}
            onClick={() => onChipChange(chip.id)}
          >
            <span className="text-sm font-medium">
              {chip.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};