import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  tags?: string[];
  children?: React.ReactNode;
}

export const ModalPreview: React.FC<ModalPreviewProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  image,
  description,
  tags = [],
  children
}) => {
  // Handle ESC key and body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl mx-4 bg-card rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-card/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Header Image */}
        <div className="relative h-80 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="text-h2 mb-2">{title}</h2>
            <p className="text-lg opacity-90">{subtitle}</p>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-8">
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-6">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-2 text-sm bg-secondary rounded-full text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <div className="prose prose-lg max-w-none">
            <p className="text-body text-muted-foreground mb-8">{description}</p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};