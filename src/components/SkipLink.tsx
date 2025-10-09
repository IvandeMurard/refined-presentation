export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-background focus:text-foreground focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
    >
      Skip to content
    </a>
  );
}
