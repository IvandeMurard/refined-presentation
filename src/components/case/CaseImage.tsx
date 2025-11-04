// components/case/CaseImage.tsx
type Props = {
  alt: string;
  desktopSrc: string;
  mobileSrc?: string;
  caption: string;
  className?: string;
  onClick?: () => void;
};

export function CaseImage({ alt, desktopSrc, mobileSrc, caption, className, onClick }: Props) {
  const mobile = mobileSrc || desktopSrc; // fallback simple

  return (
    <figure 
      className={`${className ?? "group"} ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
    >
      <picture>
        {mobile && <source srcSet={mobile} media="(max-width: 768px)" />}
        <img
          src={desktopSrc}
          alt={alt}
          loading="lazy"
          className="w-full max-h-[500px] object-contain rounded-xl border border-border/50 hover:border-accent/40 shadow-sm hover:shadow-lg bg-gradient-to-br from-card/80 to-card transition-all duration-300 hover:scale-[1.02]"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0%' stop-color='%23e5e7eb'/><stop offset='100%' stop-color='%23d1d5db'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23g)'/></svg>";
          }}
        />
      </picture>
      <figcaption className="mt-3 text-sm text-muted-foreground italic transition-colors group-hover:text-foreground">{caption}</figcaption>
    </figure>
  );
}
