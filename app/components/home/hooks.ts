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
