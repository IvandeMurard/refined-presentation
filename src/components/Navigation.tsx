import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

export const Navigation: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container-grid py-4">
        <div className="col-span-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-foreground">
            Portfolio
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                isActive('/') ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/work" 
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                isActive('/work') ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              Work
            </Link>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Contact
            </Button>
          </div>
          
          {/* Language Selector */}
          <div className="flex items-center gap-2 text-sm">
            <button className="font-medium text-foreground hover:text-foreground/80 transition-colors">
              EN
            </button>
            <span className="text-muted-foreground">|</span>
            <button className="font-medium text-muted-foreground hover:text-foreground transition-colors">
              FR
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
