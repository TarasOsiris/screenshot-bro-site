import type { LocaleCode } from "~/config/localization";

// Light is the default, so the server renders no data-theme at all and only a
// stored "dark" turns it on — see the boot script in root.tsx. The two glyphs are
// both in the DOM and hidden by CSS rather than swapped by React state, so the
// button renders identically on the server and the client: no hydration mismatch
// and no icon flash on the first paint.
const THEME_LABELS: Record<LocaleCode, string> = {
  en: "Switch theme",
  es: "Cambiar tema",
  zh: "切换主题",
  hi: "थीम बदलें",
  fr: "Changer de thème",
  ar: "تغيير السمة",
  de: "Design wechseln",
  ja: "テーマを切り替える",
  pt: "Alternar tema",
  it: "Cambia tema",
  ko: "테마 전환",
  uk: "Змінити тему",
  pl: "Przełącz motyw",
};

const THEME_COLORS = { light: "#fbfaf8", dark: "#08080c" } as const;

function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === "dark" ? "light" : "dark";

  if (next === "dark") root.dataset.theme = "dark";
  else delete root.dataset.theme;

  try {
    localStorage.setItem("theme", next);
  } catch {
    // Private mode or blocked storage — the theme still applies for this page.
  }

  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", THEME_COLORS[next]);
}

// Exported so the nav drawer can label its theme group without a new key in the
// 12-locale ui copy in config/localization.ts.
export function themeLabel(locale: LocaleCode): string {
  return THEME_LABELS[locale] || THEME_LABELS.en;
}

export function ThemeToggle({
  locale = "en",
  className = "",
  showLabel = false,
}: {
  locale?: LocaleCode;
  className?: string;
  // The drawer shows the wording next to the glyph; the nav bar is icon-only.
  showLabel?: boolean;
}) {
  const label = themeLabel(locale);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={showLabel ? undefined : label}
      className={`flex items-center justify-center rounded-xl border border-ink/10 bg-ink/[0.06] text-ink/70 transition-all hover:border-ink/20 hover:bg-ink/10 hover:text-ink ${className}`}
    >
      <MoonIcon />
      <SunIcon />
      {showLabel ? <span>{label}</span> : null}
    </button>
  );
}

// Shown in light mode: tapping it takes you to dark.
function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      className="theme-light-only"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}

// Shown in dark mode: tapping it takes you back to light.
function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      className="theme-dark-only"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}
