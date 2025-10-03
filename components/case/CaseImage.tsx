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
