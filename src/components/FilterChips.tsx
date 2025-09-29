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
}

export const FilterChips: React.FC<FilterChipsProps> = ({ 
  chips, 
  activeChip, 
  onChipChange, 
  className = "" 
}) => {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
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
  );
};