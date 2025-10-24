export function ComingSoonBadge() {
  // Rotation aléatoire légère pour effet tampon
  const rotation = Math.random() * 12 - 6; // entre -6 et +6 degrés

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div className="relative w-[90px] h-[90px] rounded-full bg-red-600 border-[3px] border-red-600 flex items-center justify-center shadow-[0_4px_12px_rgba(220,38,38,0.4)]">
        {/* Effet texture/overlay pour le look "tampon" */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_50%)] mix-blend-overlay" />
        
        {/* Texte */}
        <div className="relative z-10 text-center">
          <div className="text-white font-[900] text-[13px] uppercase tracking-[0.08em] leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
            Coming
          </div>
          <div className="text-white font-[900] text-[13px] uppercase tracking-[0.08em] leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
            Soon!
          </div>
        </div>
      </div>
    </div>
  );
}
