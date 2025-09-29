/**
 * Design Tokens - Modern Graphite System
 * Use these exact values when creating Figma Variables in the "Tokens" collection
 */

export const designTokens = {
  // Colors
  color: {
    bg: {
      base: '#FAFAFA',
      muted: '#F8FAFC',
    },
    surface: {
      card: '#FFFFFF',
    },
    ink: {
      strong: '#0B1220',
      muted: '#667085',
    },
    accent: {
      primary: '#065f46',
      on: '#FFFFFF',
    },
    border: {
      default: '#E5E7EB',
    },
    overlay: {
      scrim: 'rgba(0,0,0,0.60)',
    },
  },

  // Typography (Inter)
  type: {
    h1: {
      size: 64,
      weight: 900,
      lh: 1.05,
      tracking: '-0.02em',
    },
    h2: {
      size: 44,
      weight: 800,
      lh: 1.10,
      tracking: '-0.01em',
    },
    h3: {
      size: 28,
      weight: 700,
    },
    body: {
      size: 16,
      weight: '400–500', // Range for different contexts
      lh: 1.6,
    },
    kicker: {
      size: 12,
      tracking: '0.18em',
      case: 'uppercase',
    },
  },

  // Spacing (use as scale)
  space: {
    8: 8,
    12: 12,
    16: 16,
    24: 24,
    32: 32,
    40: 40,
    64: 64,
    96: 96,
  },

  // Radius
  radius: {
    xl: 16,
    '2xl': 24,
    '3xl': 28,
  },

  // Shadow
  shadow: {
    soft: '0 6px 20px -8px rgba(0,0,0,0.15)',
  },

  // Motion
  motion: {
    duration: {
      base: '280ms',
    },
    easing: {
      product: 'cubic-bezier(0.22,1,0.36,1)',
    },
    stagger: {
      s: '60ms',
    },
  },
} as const;

/**
 * Dark Mode Variables (Optional)
 * Duplicate color variables with these inversions:
 */
export const darkModeTokens = {
  color: {
    bg: {
      base: '#0B1220',
      muted: '#1A1F2E',
    },
    surface: {
      card: '#1A1F2E',
    },
    ink: {
      strong: '#FFFFFF',
      muted: '#9CA3AF',
    },
    accent: {
      primary: '#10B981', // Lighter green for dark mode
      on: '#0B1220',
    },
    border: {
      default: '#374151',
    },
    overlay: {
      scrim: 'rgba(0,0,0,0.80)',
    },
  },
} as const;

/**
 * Instructions for Figma Variables Setup:
 * 
 * 1. Create a new Variable Collection named "Tokens"
 * 2. Add each variable with the exact naming convention above (e.g., color.bg.base)
 * 3. Set the values exactly as specified
 * 4. For Dark Mode: Create a "Dark" mode in the collection and set the inverted values
 * 5. Typography variables should be set as numbers (no units in Figma)
 * 6. Motion easing should be set as text strings
 * 7. Spacing values are in pixels (set as numbers in Figma)
 * 
 * Variable Types in Figma:
 * - Colors: Color type
 * - Typography sizes/weights/line-heights: Number type  
 * - Typography tracking/case: String type
 * - Spacing: Number type
 * - Radius: Number type
 * - Motion: String type
 * - Shadow: Effect type (or String if Effect not available)
 */