import type { ElementType, HTMLAttributes } from "react";

// The raised card used across the site (the .soft-panel surface from /download
// and /thanks). `tone="accent"` marks the one panel on a page that should lead.
export function Panel({
  as: Tag = "div",
  tone = "default",
  padding = "md",
  className = "",
  ...props
}: {
  as?: ElementType;
  tone?: "default" | "accent";
  padding?: "sm" | "md" | "lg";
} & HTMLAttributes<HTMLElement>) {
  const pad = { sm: "p-5", md: "p-6 sm:p-7", lg: "p-8 sm:p-10" }[padding];
  const toneClass = tone === "accent" ? "border-accent/30! bg-[color-mix(in_srgb,var(--color-accent)_4%,var(--color-surface-raised))]!" : "";
  return (
    <Tag
      {...props}
      className={`soft-panel rounded-3xl ${pad} ${toneClass} ${className}`.trim()}
    />
  );
}
