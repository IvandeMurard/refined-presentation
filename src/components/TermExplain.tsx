import { useState } from "react";
import { InlineExpand } from "@/components/InlineExpand";

type Props = {
  term: string; // mot cliquable
  children: React.ReactNode; // explication
};

export function TermExplain({ term, children }: Props) {
  const [open, setOpen] = useState(false);
  const id = `term-${term.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <span className="inline">
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        className="underline underline-offset-4 decoration-dotted text-foreground/90 hover:text-foreground"
      >
        {term}
      </button>
      <InlineExpand open={open} ariaId={id}>
        <div id={`${id}-panel`} className="mt-2 p-3 rounded-lg border border-border bg-card/60 text-sm">
          {children}
        </div>
      </InlineExpand>
    </span>
  );
}
