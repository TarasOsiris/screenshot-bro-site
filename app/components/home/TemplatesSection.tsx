import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

import { SectionIntro } from "~/components/home/SectionIntro";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PauseIcon,
  PlayIcon,
} from "~/components/home/small-icons";
import { downloadPageUrl, type HomeCopy } from "~/config/localization";
import {
  DEFAULT_STARTER_TEMPLATE_ID,
  STARTER_TEMPLATES,
  hasTemplatePreview,
  templatePreview,
  type TemplatePreview,
  type TemplateStore,
} from "~/config/templates";

// How long each template stays on screen while the gallery rotates. The
// progress bar's CSS animation runs for exactly this long and its
// `animationend` advances the gallery, so pausing the bar pauses the rotation.
const ROTATE_MS = 5500;
// Shots preloaded before a template is shown — the ones visible without
// scrolling the row on a desktop viewport.
const PRELOAD_SHOTS = 5;

const preloaded = new Map<string, Promise<void>>();

function preloadTemplate(preview: TemplatePreview | undefined): Promise<void> {
  if (!preview) return Promise.resolve();
  const key = preview.shotUrls[0];
  let pending = preloaded.get(key);
  if (!pending) {
    pending = Promise.all(
      preview.shotUrls
        .slice(0, PRELOAD_SHOTS)
        .map((src) => {
          const image = new Image();
          image.src = src;
          return image.decode().catch(() => undefined);
        }),
    ).then(() => undefined);
    preloaded.set(key, pending);
  }
  return pending;
}

const TEMPLATE_STORES: { id: TemplateStore; label: string }[] = [
  { id: "appStore", label: "App Store" },
  { id: "googlePlay", label: "Google Play" },
];

// Switches the template previews between each template's iPhone row (App
// Store) and its Android phone row (Google Play).
export function TemplateStoreSwitch({
  store,
  onChange,
  label,
}: {
  store: TemplateStore;
  onChange: (store: TemplateStore) => void;
  label: string;
}) {
  return (
    <div role="group" aria-label={label} className="soft-pill inline-flex rounded-full p-1">
      {TEMPLATE_STORES.map(({ id, label: name }) => (
        <button
          key={id}
          type="button"
          aria-pressed={store === id}
          onClick={() => onChange(id)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            store === id
              ? "bg-accent/15 text-accent-light ring-1 ring-accent/40"
              : "text-ink/60 hover:text-ink"
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

function shuffled<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Every image here is an export of the app's own bundled template, rendered
// through the app's MCP server with real app screenshots in the frames — so
// the gallery shows exactly what "New project from template" produces.
//
// While the section is on screen the gallery cycles through the templates in a
// per-visit random order. It holds still while the pointer or focus is inside
// it, while the tab is hidden, under prefers-reduced-motion, and for good once
// the visitor picks a template themselves (the play button resumes it).
export function TemplatesSection({
  copy,
  href,
}: {
  copy: HomeCopy;
  href?: string;
}) {
  const [selectedId, setSelectedId] = useState(DEFAULT_STARTER_TEMPLATE_ID);
  const [store, setStore] = useState<TemplateStore>("appStore");
  const [rotation, setRotation] = useState<string[]>([]);
  const [userPaused, setUserPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const advancingRef = useRef(false);
  // Bumped by every visitor choice, so a rotation step still waiting on its
  // preload does not override a template or store picked in the meantime.
  const choiceRef = useRef(0);

  const templates = useMemo(
    () => STARTER_TEMPLATES.filter((template) => hasTemplatePreview(template, store)),
    [store],
  );
  const selectedIndex = Math.max(
    0,
    templates.findIndex((template) => template.id === selectedId),
  );
  const selected = templates[selectedIndex];
  const preview = templatePreview(selected, store)!;
  const ctaHref = href ?? downloadPageUrl(copy.locale.code);
  const total = templates.length;
  const count = String(STARTER_TEMPLATES.length);
  const section = copy.sections.templates;
  const playing =
    !userPaused && !hovering && !focused && inView && pageVisible && rotation.length > 0;

  // The rotation order is shuffled on the client only, so server and first
  // client render agree; the default template always opens the show.
  useEffect(() => {
    const rest = STARTER_TEMPLATES.map((template) => template.id).filter(
      (id) => id !== DEFAULT_STARTER_TEMPLATE_ID,
    );
    setRotation([DEFAULT_STARTER_TEMPLATE_ID, ...shuffled(rest)]);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setUserPaused(true);
    }
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 },
    );
    observer.observe(node);
    const onVisibility = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const nextInRotation = useCallback(() => {
    const at = rotation.indexOf(selected.id);
    for (let step = 1; step < rotation.length; step++) {
      const id = rotation[(at + step) % rotation.length];
      const next = templates.find((template) => template.id === id);
      if (next) return next;
    }
    return undefined;
  }, [rotation, selected.id, templates]);

  // Warm the next template while the current one is on screen, so the swap
  // never shows half-loaded frames.
  useEffect(() => {
    if (!inView) return;
    const next = nextInRotation();
    if (next) void preloadTemplate(templatePreview(next, store));
  }, [inView, nextInRotation, store]);

  // Keep the active chip in view inside the strip without scrolling the page.
  useEffect(() => {
    if (expanded) return;
    const strip = stripRef.current;
    const chip = strip?.querySelector<HTMLElement>(`[data-template="${selected.id}"]`);
    if (!strip || !chip) return;
    strip.scrollTo({
      left: chip.offsetLeft - (strip.clientWidth - chip.offsetWidth) / 2,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }, [selected.id, expanded]);

  async function advance() {
    const next = nextInRotation();
    if (!next || advancingRef.current) return;
    advancingRef.current = true;
    const choice = choiceRef.current;
    await Promise.race([
      preloadTemplate(templatePreview(next, store)),
      new Promise((resolve) => setTimeout(resolve, 2500)),
    ]);
    advancingRef.current = false;
    if (choice === choiceRef.current) setSelectedId(next.id);
  }

  function pick(id: string) {
    choiceRef.current++;
    setUserPaused(true);
    setSelectedId(id);
  }

  function step(delta: number) {
    const index = (selectedIndex + delta + total) % total;
    pick(templates[index].id);
  }

  function chooseStore(next: TemplateStore) {
    choiceRef.current++;
    setStore(next);
    if (!hasTemplatePreview(selected, next)) setSelectedId(DEFAULT_STARTER_TEMPLATE_ID);
  }

  return (
    <section
      ref={sectionRef}
      id="templates"
      className="py-24 px-6 border-t border-border-subtle scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <SectionIntro
          eyebrow={section.eyebrow}
          title={section.title.replace("{count}", count)}
          description={section.description?.replace("{count}", count)}
        />

        <div className="mb-6 flex justify-center">
          <TemplateStoreSwitch
            store={store}
            onChange={chooseStore}
            label={copy.ui.templateStoreLabel}
          />
        </div>

        <figure
          className="showcase-panel template-stage overflow-hidden"
          onPointerEnter={(event) => {
            if (event.pointerType === "mouse") setHovering(true);
          }}
          onPointerLeave={() => setHovering(false)}
          onFocus={() => setFocused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
          }}
        >
          <div key={`${store}-${selected.id}`} className="template-shots" role="list">
            {preview.shotUrls.map((src, index) => (
              <img
                key={src}
                role="listitem"
                src={src}
                alt={
                  index === 0
                    ? store === "googlePlay"
                      ? copy.ui.templateAltAndroid(selected.name)
                      : copy.ui.templateAlt(selected.name)
                    : ""
                }
                width={preview.shotWidth}
                height={preview.shotHeight}
                className="template-shot"
                style={{ "--i": index } as CSSProperties}
                decoding="async"
                loading={index < 4 ? "eager" : "lazy"}
              />
            ))}
          </div>

          <figcaption className="relative border-t border-border-subtle">
            <div className="template-progress" aria-hidden="true">
              {rotation.length > 0 && !userPaused && (
                <span
                  key={selected.id}
                  className="template-progress-bar"
                  style={{
                    animationDuration: `${ROTATE_MS}ms`,
                    animationPlayState: playing ? "running" : "paused",
                  }}
                  onAnimationEnd={() => void advance()}
                />
              )}
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 px-6 py-5 sm:px-8">
              <div
                className="min-w-0 flex-1"
                aria-live={userPaused ? "polite" : "off"}
              >
                <p className="font-display font-semibold text-xl text-ink">
                  <span key={selected.id} className="template-name">
                    {selected.name}
                  </span>
                  <span className="ml-2 align-middle text-xs font-normal tabular-nums text-ink/40">
                    {selectedIndex + 1} / {total}
                  </span>
                </p>
                <p className="text-sm text-ink/55">
                  {copy.ui.templateMeta(preview.columns, preview.width, preview.height)}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label={copy.ui.previousTemplate}
                  className="template-control"
                >
                  <ChevronLeftIcon />
                </button>
                <button
                  type="button"
                  onClick={() => setUserPaused((paused) => !paused)}
                  aria-label={userPaused ? copy.ui.playTemplates : copy.ui.pauseTemplates}
                  className="template-control"
                >
                  {userPaused ? <PlayIcon /> : <PauseIcon />}
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label={copy.ui.nextTemplate}
                  className="template-control"
                >
                  <ChevronRightIcon />
                </button>
              </div>

              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 rounded-xl border border-ink/10 bg-ink/[0.06] px-4 py-2.5 text-sm font-medium text-ink/[0.88] transition-colors hover:border-ink/20 hover:bg-ink/10"
              >
                {copy.ui.startWithTemplate}
              </a>
            </div>
          </figcaption>
        </figure>

        <div
          ref={stripRef}
          role="group"
          aria-label={copy.ui.templatePickerLabel}
          className={`template-picker mt-8 ${expanded ? "is-expanded" : ""}`}
        >
          {templates.map((template) => {
            const active = template.id === selected.id;
            const chipPreview = templatePreview(template, store)!;
            return (
              <button
                key={template.id}
                data-template={template.id}
                type="button"
                aria-pressed={active}
                onClick={() => pick(template.id)}
                onPointerEnter={() => void preloadTemplate(chipPreview)}
                className="template-chip group text-left"
              >
                <img
                  src={chipPreview.thumbUrl}
                  alt=""
                  width={chipPreview.thumbWidth}
                  height={chipPreview.thumbHeight}
                  loading="lazy"
                  decoding="async"
                  className="template-chip-image"
                />
                <span className="block mt-2 text-xs text-ink/60 group-aria-pressed:text-ink group-aria-pressed:font-medium truncate">
                  {template.name}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((open) => !open)}
            aria-expanded={expanded}
            className="rounded-full border border-ink/10 px-4 py-2 text-sm text-ink/70 transition-colors hover:border-ink/20 hover:text-ink"
          >
            {expanded ? copy.ui.showFewerTemplates : copy.ui.showAllTemplates(total)}
          </button>
        </div>
      </div>
    </section>
  );
}
