import { useEffect, useRef, useState } from "react";
import { SectionIntro } from "~/components/home/SectionIntro";
import { APP_SCREENSHOTS } from "~/config/site";

export function ScreenshotsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
    const children = Array.from(container.children) as HTMLElement[];
    children[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <section
      id="screenshots"
      className="py-28 px-6 border-t border-border-subtle scroll-mt-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <SectionIntro
          eyebrow="Screenshots"
          title="See it in action."
          description="App Store screenshots of Screenshot Bro itself — what you see is what you ship."
        />
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 px-[max(1.5rem,calc((100vw-72rem)/2))]"
        style={{ scrollbarWidth: "none" }}
      >
        {APP_SCREENSHOTS.map((shot, i) => (
          <figure
            key={shot.src}
            className="snap-center shrink-0 w-[min(85vw,720px)] group"
          >
            <div className="rounded-2xl overflow-hidden border border-border-subtle bg-surface-raised transition-transform duration-300 group-hover:scale-[1.01]">
              <img
                src={shot.src}
                alt={shot.alt}
                width="1440"
                height="900"
                loading={i < 2 ? "eager" : "lazy"}
                decoding="async"
                className="w-full h-auto block"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-white/50">
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-6">
        {APP_SCREENSHOTS.map((shot, i) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => scrollTo(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === activeIndex
                ? "bg-accent w-6"
                : "bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to screenshot ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
