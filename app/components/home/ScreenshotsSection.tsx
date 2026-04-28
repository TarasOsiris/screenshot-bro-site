import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { SectionIntro } from "~/components/home/SectionIntro";
import type { HomeCopy } from "~/config/localization";

export function ScreenshotsSection({ copy }: { copy: HomeCopy }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const screenshots = copy.appScreenshots;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => {
      const containerLeft = container.scrollLeft;
      const containerCenter = containerLeft + container.offsetWidth / 2;

      let closest = 0;
      let closestDist = Infinity;
      for (let i = 0; i < container.children.length; i++) {
        const child = container.children[i] as HTMLElement;
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const dist = Math.abs(childCenter - containerCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      }
      setActiveIndex((prev) => (prev === closest ? prev : closest));
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const clamped = Math.max(0, Math.min(screenshots.length - 1, index));
    const children = Array.from(container.children) as HTMLElement[];
    children[clamped]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollTo(activeIndex + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollTo(activeIndex - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      scrollTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      scrollTo(screenshots.length - 1);
    }
  };

  const atStart = activeIndex === 0;
  const atEnd = activeIndex === screenshots.length - 1;

  return (
    <section
      id="screenshots"
      className="py-28 px-6 border-t border-border-subtle scroll-mt-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <SectionIntro
          eyebrow={copy.sections.screenshots.eyebrow}
          title={copy.sections.screenshots.title}
          description={copy.sections.screenshots.description}
        />
      </div>

      <div
        className="relative"
        role="region"
        aria-roledescription="carousel"
        aria-label={copy.ui.appScreenshots}
      >
        <div
          ref={scrollRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="flex gap-5 md:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 px-[max(1.5rem,calc((100vw-72rem)/2))] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded-lg"
          style={{ scrollbarWidth: "none" }}
        >
          {screenshots.map((shot, i) => {
            const isActive = i === activeIndex;
            return (
              <figure
                key={shot.src}
                aria-roledescription="slide"
                aria-label={copy.ui.slideCount(i + 1, screenshots.length)}
                className="snap-center shrink-0 w-[min(85vw,560px)] lg:w-[min(66vw,720px)] group"
              >
                <div
                  className={`rounded-2xl overflow-hidden border border-border-subtle bg-surface-raised transition-all duration-500 ease-out ${
                    isActive
                      ? "opacity-100 scale-100 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
                      : "opacity-45 scale-[0.92] group-hover:opacity-70"
                  }`}
                >
                  <img
                    src={shot.src.replace(".webp", "-720.webp")}
                    srcSet={`${shot.src.replace(".webp", "-720.webp")} 720w, ${shot.src} 1440w`}
                    sizes="(min-width: 1024px) min(66vw, 720px), min(85vw, 560px)"
                    alt={shot.alt}
                    width="1440"
                    height="900"
                    loading={i < 2 ? "eager" : "lazy"}
                    decoding="async"
                    className="w-full h-auto block"
                  />
                </div>
                <figcaption
                  className={`mt-3 text-center text-sm transition-colors duration-300 ${
                    isActive ? "text-white/70" : "text-white/55"
                  }`}
                >
                  {shot.caption}
                </figcaption>
              </figure>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => scrollTo(activeIndex - 1)}
          disabled={atStart}
          aria-label={copy.ui.previousScreenshot}
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-4 lg:left-8 items-center justify-center w-11 h-11 rounded-full bg-surface-raised/80 backdrop-blur-md border border-border-subtle text-white/80 hover:text-white hover:bg-surface-raised hover:border-white/20 transition-all disabled:opacity-0 disabled:pointer-events-none"
        >
          <ChevronLeftIcon />
        </button>
        <button
          type="button"
          onClick={() => scrollTo(activeIndex + 1)}
          disabled={atEnd}
          aria-label={copy.ui.nextScreenshot}
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-4 lg:right-8 items-center justify-center w-11 h-11 rounded-full bg-surface-raised/80 backdrop-blur-md border border-border-subtle text-white/80 hover:text-white hover:bg-surface-raised hover:border-white/20 transition-all disabled:opacity-0 disabled:pointer-events-none"
        >
          <ChevronRightIcon />
        </button>
      </div>

      <div className="flex items-center justify-center gap-1 mt-6">
        {screenshots.map((shot, i) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => scrollTo(i)}
            className="group inline-flex h-6 min-w-6 items-center justify-center px-1"
            aria-label={copy.ui.goToScreenshot(i + 1)}
            aria-current={i === activeIndex}
          >
            <span
              className={`block h-2 rounded-full transition-all ${
                i === activeIndex
                  ? "bg-accent w-6"
                  : "bg-white/20 group-hover:bg-white/40 w-2"
              }`}
            />
          </button>
        ))}
      </div>

      <p className="mt-3 text-center text-xs text-white/60 tabular-nums">
        {activeIndex + 1} / {screenshots.length}
      </p>
    </section>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
