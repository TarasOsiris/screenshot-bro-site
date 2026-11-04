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
 * Loops a video only while `active` and on screen: the src is set the first
 * time both hold, and playback pauses when either stops holding, so inactive
 * tabs never download or decode anything.
 */
export function useActiveLoopVideo(
  src: string,
  active: boolean,
  delayMs = 2000,
  rootMargin = "300px",
) {
  const ref = useRef<HTMLVideoElement>(null);
  const playing = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !src) return;

    const onEnded = () => {
      window.setTimeout(() => {
        if (!playing.current) return;
        el.currentTime = 0;
        void el.play().catch(() => {});
      }, delayMs);
    };
    el.addEventListener("ended", onEnded);
    return () => el.removeEventListener("ended", onEnded);
  }, [src, delayMs]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !src || !active) return;

    // Assigning `src` after mount does not re-run the browser's autoplay
    // algorithm, so mobile Safari/Chrome leave the video paused. Kick off
    // playback explicitly.
    const play = () => {
      playing.current = true;
      if (!el.src) el.src = src;
      playMuted(el);
    };
    const pause = () => {
      playing.current = false;
      el.pause();
    };

    if (typeof IntersectionObserver === "undefined") {
      play();
      return pause;
    }
    const io = new IntersectionObserver(
      ([entry]) => (entry?.isIntersecting ? play() : pause()),
      { rootMargin },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      pause();
    };
  }, [src, active, rootMargin]);

  return ref;
}
