// components/case/CaseImage.tsx
type Props = {
  alt: string;
  desktopSrc: string;
  mobileSrc?: string;
  caption: string;
  className?: string;
};

export function CaseImage({ alt, desktopSrc, mobileSrc, caption, className }: Props) {
  const mobile = mobileSrc || desktopSrc; // fallback simple

  return (
    <figure className={className ?? "group"}>
      <picture>
        {mobile && <source srcSet={mobile} media="(max-width: 768px)" />}
        <img
          src={desktopSrc}
          alt={alt}
          loading="lazy"
          className="w-full aspect-video object-cover rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0%' stop-color='%23e5e7eb'/><stop offset='100%' stop-color='%23d1d5db'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23g)'/></svg>";
          }}
        />
      </picture>
      <figcaption className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 italic">{caption}</figcaption>
    </figure>
  );
}
