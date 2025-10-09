export const Footer = ({
  siteName = "Ivan de Murard",
  tagline = "Product Designer & Manager",
  sections = [] as { id: string; label: string }[],
  onSectionClick,
}: {
  siteName?: string;
  tagline?: string;
  sections?: { id: string; label: string }[];
  onSectionClick?: (id: string) => void;
}) => {
  return (
    <footer className="border-t border-border mt-16" role="contentinfo" aria-label="Site footer">
      <div className="max-w-[1360px] mx-auto px-4 py-10 grid gap-6 sm:flex sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteName}. All rights reserved.
        </p>
        <nav aria-label="Footer navigation" className="flex items-center gap-4">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => onSectionClick?.(s.id)}
              className="text-sm underline-offset-4 hover:underline rounded
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
                         focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {s.label}
            </button>
          ))}
        </nav>
        <p className="text-xs text-muted-foreground">{tagline}</p>
      </div>
    </footer>
  );
};
