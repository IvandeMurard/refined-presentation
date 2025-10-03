// components/case/CaseImage.tsx
type Props = {
  alt: string;
  desktopSrc: string;
  mobileSrc?: string;
  caption?: string;
};

export function CaseImage({ alt, desktopSrc, mobileSrc, caption }: Props) {
  return (
    <figure className="group">
      <picture>
        {mobileSrc && <source srcSet={mobileSrc} media="(max-width: 768px)" />}
        <img
          src={desktopSrc}
          alt={alt}
          className="w-full max-w-3xl mx-auto rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm"
          loading="lazy"
        />
      </picture>
      {caption && (
        <figcaption className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

onError={(e) => {
  (e.currentTarget as HTMLImageElement).src =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0%' stop-color='%23e5e7eb'/><stop offset='100%' stop-color='%23d1d5db'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23g)'/></svg>";
}}
