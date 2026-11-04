import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { getBlogUiCopy, type BlogUiCopy } from "~/config/blog-ui-copy";
import type { LocaleCode } from "~/config/localization";

type Heading = { id: string; text: string };
// `headings` is null until the rendered article has been scanned.
type TocState = { headings: Heading[] | null; activeId: string | null; locale: LocaleCode };

const MIN_HEADINGS = 3;
const ACTIVE_OFFSET = 140;
const TocContext = createContext<TocState | null>(null);

// Wraps a post (article + CTA + related posts). Post bodies are plain JSX, so
// the table of contents and the copy buttons on pixel sizes are built from the
// rendered DOM after hydration instead of editing every post.
export function BlogPostLayout({
  locale,
  responsiveTables = true,
  children,
}: {
  locale: LocaleCode;
  // Off where the page lays out its own tables for phones (ComparisonTable).
  responsiveTables?: boolean;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [headings, setHeadings] = useState<Heading[] | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const article = ref.current?.querySelector("article");
    if (!article) return;
    const els = Array.from(article.querySelectorAll("h2"));
    const used = new Set<string>();
    setHeadings(
      els.map((el, i) => {
        const text = (el.textContent || "").trim();
        let id = el.id || slugify(text) || `section-${i + 1}`;
        while (used.has(id)) id = `${id}-${i + 1}`;
        used.add(id);
        el.id = id;
        return { id, text };
      }),
    );
    if (window.location.hash) {
      document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView();
    }

    const removeCopy = enhanceSizeValues(article, getBlogUiCopy(locale));

    let frame = 0;
    const update = () => {
      frame = 0;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current: string | null = null;
      for (const el of els) {
        const top = el.getBoundingClientRect().top;
        if (top <= ACTIVE_OFFSET || (atBottom && top < window.innerHeight)) current = el.id;
        else break;
      }
      setActiveId(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      removeCopy();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [locale]);

  return (
    <TocContext.Provider value={{ headings, activeId, locale }}>
      <div
        ref={ref}
        className="mx-auto max-w-3xl xl:grid xl:max-w-[66rem] xl:grid-cols-[minmax(0,48rem)_14rem] xl:justify-between xl:gap-12"
      >
        <div className={`min-w-0 ${ARTICLE_CLASSES} ${responsiveTables ? TABLE_CLASSES : ""}`}>{children}</div>
        <aside className="hidden xl:block">
          <div className="sticky top-28 max-h-[calc(100vh-9rem)] overflow-y-auto pb-6">
            <TocList variant="aside" />
          </div>
        </aside>
      </div>
    </TocContext.Provider>
  );
}

// `.prose-policy` is unlayered CSS, so only properties it does not set (or `!`)
// take effect here. Wide tables scroll inside the column on phones instead of
// widening the page.
const ARTICLE_CLASSES =
  "[&_article_h2]:scroll-mt-28 [&_article_h2]:leading-snug [&_td]:leading-relaxed [&_th]:leading-snug";
const TABLE_CLASSES =
  "max-sm:[&_table]:block max-sm:[&_table]:overflow-x-auto max-sm:[&_td]:px-3! max-sm:[&_th]:px-3! max-sm:[&_td]:min-w-28";

// The collapsible copy shown above the body below the xl breakpoint. Rendered
// on the server (collapsed) so filling in the list after hydration moves nothing.
export function BlogTocDisclosure() {
  const toc = useContext(TocContext);
  if (!toc) return null;
  const copy = getBlogUiCopy(toc.locale);
  if (toc.headings && toc.headings.length < MIN_HEADINGS) return null;
  return (
    <details className="group/toc soft-panel xl:hidden mb-8 rounded-2xl">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-3.5 [&::-webkit-details-marker]:hidden">
        <span className="flex items-center gap-2.5 font-display text-sm font-semibold text-ink">
          <ListIcon />
          {copy.onThisPage}
        </span>
        <span className="flex items-center gap-2 text-xs text-ink/50">
          {toc.headings ? copy.sections(toc.headings.length) : null}
          <ChevronIcon />
        </span>
      </summary>
      <div className="border-t border-border-subtle px-3 py-3">
        <TocList variant="disclosure" />
      </div>
    </details>
  );
}

function TocList({ variant }: { variant: "aside" | "disclosure" }) {
  const toc = useContext(TocContext);
  if (!toc?.headings || toc.headings.length < MIN_HEADINGS) return null;
  const copy = getBlogUiCopy(toc.locale);

  if (variant === "disclosure") {
    return (
      <ol className="m-0! list-none! p-0!">
        {toc.headings.map((heading, i) => (
          <li key={heading.id} className="mb-0!">
            <a
              href={`#${heading.id}`}
              onClick={(event) => {
                (event.currentTarget.closest("details") as HTMLDetailsElement | null)?.removeAttribute("open");
              }}
              className="flex gap-3 rounded-lg px-2 py-1.5 text-sm leading-snug text-ink/70! no-underline! hover:bg-ink/[0.04] hover:text-ink!"
            >
              <span className="w-5 shrink-0 pt-px text-right font-mono text-[11px] text-ink/40">{i + 1}</span>
              <span>{heading.text}</span>
            </a>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <nav aria-label={copy.onThisPage}>
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">{copy.onThisPage}</p>
      <ol className="border-s border-border">
        {toc.headings.map((heading) => {
          const active = heading.id === toc.activeId;
          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                aria-current={active ? "location" : undefined}
                className={`-ms-px block border-s-2 py-1.5 ps-4 text-[13px] leading-snug transition-colors ${
                  active
                    ? "border-accent font-medium text-ink"
                    : "border-transparent text-ink/55 hover:border-ink/25 hover:text-ink"
                }`}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64);
}

const SIZE_PATTERN = /\b\d{2,5} ?[x×] ?\d{2,5}\b/g;
const COPY_ICON =
  '<svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>';
const CHECK_ICON =
  '<svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
const SIZE_BUTTON_CLASS =
  "size-copy group/size relative inline-flex cursor-copy items-center gap-1.5 whitespace-nowrap rounded-md border border-ink/[0.09] bg-ink/[0.035] px-1.5 py-px text-[0.8125rem] font-medium tabular-nums text-ink/80 transition-colors hover:border-accent/50 hover:bg-accent/[0.07] hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-accent data-[copied]:border-mint/50 data-[copied]:text-mint";
const SIZE_ICON_CLASS = "opacity-45 transition-opacity group-hover/size:opacity-90";
const COPIED_BADGE_CLASS =
  "pointer-events-none absolute bottom-full left-1/2 mb-1.5 -translate-x-1/2 rounded-md bg-ink px-2 py-0.5 font-sans text-[11px] font-medium text-surface shadow-lg";

// Turns every "1290 x 2796" in a table cell, and every bold run that is just a
// size, into a button that copies it. Runs after hydration, so React never sees
// the split text nodes; it is idempotent because sizes already inside a button
// are skipped.
const LONE_SIZE = /^\s*\d{2,5} ?[x×] ?\d{2,5}\s*$/;

function enhanceSizeValues(root: HTMLElement, copy: BlogUiCopy): () => void {
  const targets = Array.from(root.querySelectorAll<HTMLElement>("td, strong")).filter(
    (el) => el.tagName === "TD" || LONE_SIZE.test(el.textContent || ""),
  );
  for (const cell of targets) {
    const walker = document.createTreeWalker(cell, NodeFilter.SHOW_TEXT);
    const nodes: Text[] = [];
    while (walker.nextNode()) nodes.push(walker.currentNode as Text);
    for (const node of nodes) {
      if (node.parentElement?.closest("a, button")) continue;
      const text = node.data;
      const matches = Array.from(text.matchAll(SIZE_PATTERN));
      if (matches.length === 0) continue;
      const fragment = document.createDocumentFragment();
      let last = 0;
      for (const match of matches) {
        const index = match.index ?? 0;
        // Keep a trailing comma with its size so it never wraps onto a line alone.
        const end = index + match[0].length;
        const punctuation = /^[,;.]/.test(text.slice(end)) ? text[end] : "";
        const group = document.createElement("span");
        group.className = "whitespace-nowrap";
        group.append(sizeButton(match[0], copy), punctuation);
        fragment.append(text.slice(last, index), group);
        last = end + punctuation.length;
      }
      fragment.append(text.slice(last));
      node.replaceWith(fragment);
    }
  }

  // One reset timer per button, so a second click restarts it instead of the
  // first click's timer clearing the new "Copied" state early.
  const timers = new Map<HTMLButtonElement, number>();
  const onClick = (event: MouseEvent) => {
    const button = (event.target as Element | null)?.closest<HTMLButtonElement>("button.size-copy");
    if (!button) return;
    const value = button.dataset.value || "";
    void writeClipboard(value).then(() => {
      button.dataset.copied = "";
      button.querySelector("[data-icon]")!.innerHTML = CHECK_ICON;
      button.querySelector("[data-badge]")?.remove();
      const badge = document.createElement("span");
      badge.dataset.badge = "";
      badge.setAttribute("role", "status");
      badge.className = COPIED_BADGE_CLASS;
      badge.textContent = copy.copied;
      button.append(badge);
      window.clearTimeout(timers.get(button));
      timers.set(
        button,
        window.setTimeout(() => {
          timers.delete(button);
          delete button.dataset.copied;
          button.querySelector("[data-icon]")!.innerHTML = COPY_ICON;
          badge.remove();
        }, 1400),
      );
    }, () => {
      // Nothing was copied, so show no confirmation; the value stays visible to select by hand.
    });
  };
  root.addEventListener("click", onClick);
  return () => {
    root.removeEventListener("click", onClick);
    timers.forEach((timer) => window.clearTimeout(timer));
  };
}

function sizeButton(raw: string, copy: BlogUiCopy): HTMLButtonElement {
  const value = raw.replace(/ ?[x×] ?/, " x ");
  const button = document.createElement("button");
  button.type = "button";
  button.className = SIZE_BUTTON_CLASS;
  button.dataset.value = value;
  button.title = copy.copy(value);
  button.setAttribute("aria-label", copy.copy(value));
  const label = document.createElement("span");
  label.textContent = raw;
  const icon = document.createElement("span");
  icon.dataset.icon = "";
  icon.className = SIZE_ICON_CLASS;
  icon.innerHTML = COPY_ICON;
  button.append(label, icon);
  return button;
}

async function writeClipboard(value: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    const area = document.createElement("textarea");
    area.value = value;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.append(area);
    area.select();
    const copied = document.execCommand("copy");
    area.remove();
    if (!copied) throw new Error("Copy to clipboard failed");
  }
}

function ListIcon() {
  return (
    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-accent-light">
      <path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-open/toc:rotate-180">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
