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
    <div className={`${disableSticky ? 'relative' : 'sticky top-0 z-20'} bg-background/80 backdrop-blur-md py-4 -mt-4 ${className}`}>
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