import React from "react";

interface ComingSoonBadgeProps {
  className?: string;
}

export function ComingSoonBadge({ className = "" }: ComingSoonBadgeProps) {
  // Rotation aléatoire légère pour effet tampon
  const rotation = React.useMemo(() => Math.random() * 10 - 5, []);
  
  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <span
        className="relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wider shadow-lg"
        style={{
          backgroundColor: "#dc2626",
          color: "#ffffff",
          border: "3px solid #991b1b",
          letterSpacing: "0.1em",
          textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
          boxShadow: "0 4px 12px rgba(220, 38, 38, 0.4), inset 0 -2px 4px rgba(0,0,0,0.2)",
        }}
      >
        Coming Soon!
        {/* Effet de texture tampon */}
        <span
          className="absolute inset-0 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6) 0%, transparent 60%)",
            mixBlendMode: "overlay",
          }}
        />
      </span>
    </div>
  );
}
