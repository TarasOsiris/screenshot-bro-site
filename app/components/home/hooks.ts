import { useEffect, useRef } from "react";

export function useLoopWithPause(delayMs = 2000) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handler = () => {
      window.setTimeout(() => {
        el.currentTime = 0;
        void el.play();
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
        void el.play();
      }, delayMs);
    };
    el.addEventListener("ended", onEnded);

    const timer = window.setTimeout(() => {
      if (!el.src) el.src = src;
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
        void el.play();
      }, delayMs);
    };
    el.addEventListener("ended", onEnded);

    let io: IntersectionObserver | null = null;
    if (typeof IntersectionObserver === "undefined") {
      el.src = src;
    } else {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              if (!el.src) el.src = src;
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
