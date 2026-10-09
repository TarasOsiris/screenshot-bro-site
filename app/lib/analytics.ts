import { useEffect } from "react";

import { DIRECT_DOWNLOAD_URL } from "~/config/site";

// GA4 events for the three links that matter commercially. One delegated
// listener covers every page, so a new button anywhere is tracked without
// wiring. Consent Mode (lib/consent.ts) decides what Google may store; this
// only describes the click.
//
//   download_click   — the direct-download DMG
//   app_store_click  — any apps.apple.com link
//   buy_click        — /buy, the web checkout for the direct version
//
// Each carries `placement`: the nearest [data-placement] attribute, else the
// enclosing section's id (or nav/footer), plus `page_path`. The Google Ads
// conversion in routes/home.tsx is separate and unchanged.
type TrackedLink = { event: string; channel?: string };

function classify(anchor: HTMLAnchorElement): TrackedLink | null {
  const href = anchor.getAttribute("href") ?? "";
  if (href.startsWith(DIRECT_DOWNLOAD_URL)) return { event: "download_click", channel: "direct" };
  if (/^https:\/\/apps\.apple\.com\//.test(href)) return { event: "app_store_click", channel: "app_store" };
  if (href === "/buy" || href.startsWith("/buy?")) return { event: "buy_click", channel: "direct" };
  return null;
}

function placementOf(anchor: HTMLElement): string {
  const tagged = anchor.closest<HTMLElement>("[data-placement]");
  if (tagged?.dataset.placement) return tagged.dataset.placement;
  const region = anchor.closest<HTMLElement>("section[id], nav, footer, aside, main");
  if (!region) return "page";
  return region.id || region.tagName.toLowerCase();
}

export function useOutboundClickTracking() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const anchor = (event.target as HTMLElement | null)?.closest?.("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const tracked = classify(anchor);
      if (!tracked || typeof window.gtag !== "function") return;
      window.gtag("event", tracked.event, {
        placement: placementOf(anchor),
        page_path: window.location.pathname,
        link_url: anchor.href,
        channel: tracked.channel,
        transport_type: "beacon",
      });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}
