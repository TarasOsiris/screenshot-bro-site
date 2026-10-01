import { useEffect, useRef } from "react";

// React doesn't reliably reflect the `muted` prop onto the DOM after SSR +
// hydration, and mobile browsers reject play() on a video they consider
// unmuted. Force muted/inline state before starting playback.
function playMuted(el: HTMLVideoElement) {
  el.muted = true;
  el.defaultMuted = true;
  el.setAttribute("muted", "");
  el.playsInline = true;
  void el.play().catch(() => {});
}

export function useLoopWithPause(delayMs = 2000) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handler = () => {
      window.setTimeout(() => {
        el.currentTime = 0;
        void el.play().catch(() => {});
      }, delayMs);
    };

    el.addEventListener("ended", handler);
    return () => el.removeEventListener("ended", handler);
  }, [delayMs]);

  return ref;
}

/**
 * Loops a video and defers setting `src` past first paint so the video
 * fetch doesn't compete with LCP-critical resources.
 */
export function useDeferredLoopVideo(src: string, delayMs = 2000, deferMs = 250) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onEnded = () => {
      window.setTimeout(() => {
        el.currentTime = 0;
        void el.play().catch(() => {});
      }, delayMs);
    };
    el.addEventListener("ended", onEnded);

    const timer = window.setTimeout(() => {
      if (el.src) return;
      el.src = src;
      playMuted(el);
    }, deferMs);

    return () => {
      el.removeEventListener("ended", onEnded);
      window.clearTimeout(timer);
    };
  }, [src, delayMs, deferMs]);

  return ref;
}

/**
 * Defer setting `<video>` src until the element scrolls near the viewport,
 * so off-screen videos don't download on initial page load. Also re-loops
 * with the given delay between plays.
 */
export function useLazyLoopVideo(src: string, delayMs = 2000, rootMargin = "300px") {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onEnded = () => {
      window.setTimeout(() => {
        el.currentTime = 0;
        void el.play().catch(() => {});
      }, delayMs);
    };
    el.addEventListener("ended", onEnded);

    // Assigning `src` after mount does not re-run the browser's autoplay
    // algorithm, so mobile Safari/Chrome leave the video paused. Kick off
    // playback explicitly once a source is set.
    const start = () => {
      if (el.src) return;
      el.src = src;
      playMuted(el);
    };

    let io: IntersectionObserver | null = null;
    if (typeof IntersectionObserver === "undefined") {
      start();
    } else {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              start();
              io?.disconnect();
              break;
            }
          }
        },
        { rootMargin },
      );
      io.observe(el);
    }

    return () => {
      el.removeEventListener("ended", onEnded);
      io?.disconnect();
    };
  }, [src, delayMs, rootMargin]);

  return ref;
}
