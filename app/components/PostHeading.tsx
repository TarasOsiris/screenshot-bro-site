import type { ReactNode } from "react";

// Title and short-answer callout shared by blog posts and /vs pages. Inside
// .prose-policy, whose sizes are unlayered, hence the `!`s.
export function PostTitle({ children }: { children: ReactNode }) {
  return <h1 className="text-[1.875rem]! leading-[1.12] text-balance sm:text-[2.25rem]! mb-6!">{children}</h1>;
}

export function ShortAnswer({ label = "Short answer", children }: { label?: string; children: ReactNode }) {
  return (
    <div className="mb-8 rounded-2xl border border-accent/25 bg-accent/[0.05] px-5 py-4 sm:px-6 sm:py-5">
      <p className="mb-1.5! font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light">{label}</p>
      <p className="mb-0! text-ink/80">{children}</p>
    </div>
  );
}
