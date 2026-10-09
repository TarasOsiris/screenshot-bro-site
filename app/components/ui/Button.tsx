import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

// One source for the site's button styles. `buttonClass` is exported for the few
// places that render something other than a plain <a> or <button> (a router
// <Link>, a <summary>), so the look never forks again.
export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const BASE =
  "group inline-flex items-center justify-center whitespace-nowrap font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60 disabled:pointer-events-none";

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-accent to-accent-end text-white hover:shadow-[0_0_40px_var(--color-accent-glow)] hover:scale-[1.02] active:scale-[0.98]",
  secondary:
    "border border-ink/10 bg-ink/[0.05] text-ink/[0.82] hover:border-ink/20 hover:bg-ink/10 hover:text-ink",
  ghost: "text-ink/[0.66] hover:text-ink",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "gap-2 rounded-xl px-4 py-2.5 text-sm",
  md: "gap-2.5 rounded-xl px-6 py-3.5 text-sm",
  lg: "gap-3 rounded-2xl px-8 py-4 text-base",
};

export function buttonClass(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className = "",
): string {
  return `${BASE} ${VARIANTS[variant]} ${variant === "ghost" ? SIZES[size].replace(/px-\S+/, "px-2") : SIZES[size]} ${className}`.trim();
}

type StyleProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: StyleProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} className={buttonClass(variant, size, className)} />;
}

export function Button({
  variant,
  size,
  className,
  type = "button",
  ...props
}: StyleProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} type={type} className={buttonClass(variant, size, className)} />
  );
}
