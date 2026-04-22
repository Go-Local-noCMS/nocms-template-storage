import skinConfig from "@/skin.config";

interface DividerProps {
  motif?: "leaf" | "golden-dot" | "line";
  className?: string;
}

export function Divider({ motif, className = "" }: DividerProps) {
  const resolvedMotif = motif ?? skinConfig.dividerMotif;

  if (resolvedMotif === "leaf") {
    return (
      <div className={`flex items-center justify-center gap-4 py-6 ${className}`} aria-hidden="true">
        <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-primary/30" />
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary/40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.5 6.5 4 10 4 14c0 3.5 2.5 6 6 7.5C10 18 12 14 12 14s2 4 2 7.5c3.5-1.5 6-4 6-7.5 0-4-2.5-7.5-8-12z" />
        </svg>
        <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-primary/30" />
      </div>
    );
  }

  if (resolvedMotif === "golden-dot") {
    return (
      <div className={`flex items-center justify-center gap-3 py-6 ${className}`} aria-hidden="true">
        <div className="h-px flex-1 max-w-20 bg-gradient-to-r from-transparent to-accent/30" />
        <div className="h-2 w-2 rounded-full bg-accent/50" />
        <div className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <div className="h-2 w-2 rounded-full bg-accent/50" />
        <div className="h-px flex-1 max-w-20 bg-gradient-to-l from-transparent to-accent/30" />
      </div>
    );
  }

  /* line (default) */
  return (
    <div className={`py-6 ${className}`} aria-hidden="true">
      <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-text/15 to-transparent" />
    </div>
  );
}
