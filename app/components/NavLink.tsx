import type { NavItem } from "~/config/site";

export function NavLink({ item }: { item: NavItem }) {
  return (
    <a
      href={item.href}
      className="text-sm text-white/55 hover:text-white/90 transition-colors"
    >
      {item.label}
    </a>
  );
}
