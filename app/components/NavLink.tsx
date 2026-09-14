import type { NavItem } from "~/config/site";

export function NavLink({ item }: { item: NavItem }) {
  return (
    <a
      href={item.href}
      className="text-sm text-ink/55 hover:text-ink/90 transition-colors"
    >
      {item.label}
    </a>
  );
}
