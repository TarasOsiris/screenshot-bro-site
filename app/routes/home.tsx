declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

import { useEffect, useState } from "react";
import { data } from "react-router";

import type { Route } from "./+types/home";
import { SITE_URL } from "~/config/site";
import { mergeMeta } from "~/config/meta";
import {
  getHomeCopy,
  isLocaleCode,
  localizedPath,
  type LocaleCode,
} from "~/config/localization";

type LocaleParams = {
  locale?: string;
};

function getRouteLocale(params?: LocaleParams): LocaleCode {
  const locale = params?.locale;
  return isLocaleCode(locale) ? locale : "en";
}

export async function loader({ params }: { params: LocaleParams }) {
  const locale = params.locale;
  if (locale && !isLocaleCode(locale)) {
    throw data("Not found", { status: 404 });
  }
  return { locale: getRouteLocale(params) };
}

export const meta: Route.MetaFunction = ({ matches, params }) => {
  const locale = getRouteLocale(params);
  const copy = getHomeCopy(locale);
  const url = `${SITE_URL}${localizedPath(locale)}`;
  return mergeMeta(matches, [
    { title: copy.siteTitle },
    { name: "description", content: copy.siteDescription },
    { property: "og:locale", content: copy.locale.ogLocale },
    { property: "og:title", content: copy.siteTitle },
    { property: "og:description", content: copy.siteDescription },
    { property: "og:url", content: url },
    { property: "og:image:alt", content: copy.socialImageAlt },
    { name: "twitter:title", content: copy.siteTitle },
    { name: "twitter:description", content: copy.siteDescription },
    { name: "twitter:image:alt", content: copy.socialImageAlt },
  ]);
};

import { SiteNav } from "~/components/home/SiteNav";
import { HeroSection } from "~/components/home/HeroSection";
import { AppShowcaseSection } from "~/components/home/AppShowcaseSection";
import { ShowcasesSection } from "~/components/home/ShowcasesSection";
import { WorkflowSection } from "~/components/home/WorkflowSection";
import { FeaturesSection } from "~/components/home/FeaturesSection";
import { ScreenshotsSection } from "~/components/home/ScreenshotsSection";
import { InstagramReelSection } from "~/components/home/InstagramReelSection";
import { TestimonialsSection } from "~/components/home/TestimonialsSection";
import { ProblemSection } from "~/components/home/ProblemSection";
import { FaqSection } from "~/components/home/FaqSection";
import { DownloadSection } from "~/components/home/DownloadSection";
import { BlogPreviewSection } from "~/components/home/BlogPreviewSection";
import { SiteFooter } from "~/components/home/SiteFooter";
import { BackToTopButton } from "~/components/home/BackToTopButton";

function useScrollFade(threshold = 100) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return visible;
}

const GADS_APP_STORE_URL =
  "https://apps.apple.com/app/apple-store/id6760177675?pt=117277360&ct=gadsmay25&mt=8";

function useGadsConversion() {
  const [isFromGads, setIsFromGads] = useState(false);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).has("gclid")) {
      setIsFromGads(true);
    }
  }, []);

  useEffect(() => {
    if (!isFromGads) return;
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest?.("a[href*='apps.apple.com']");
      if (!anchor) return;
      if (typeof window.gtag === "function") {
        window.gtag("event", "ads_conversion_outbound_click", {
          event_category: "conversion",
          event_label: anchor.getAttribute("href"),
          transport_type: "beacon",
        });
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isFromGads]);

  return isFromGads ? GADS_APP_STORE_URL : undefined;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const showBackToTop = useScrollFade(600);
  const copy = getHomeCopy(loaderData.locale);
  const gadsHref = useGadsConversion();

  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-3 focus:py-2 focus:rounded-md focus:bg-surface-raised"
      >
        {copy.ui.skipToContent}
      </a>

      <SiteNav copy={copy} href={gadsHref} />

      <main id="main-content">
        <HeroSection copy={copy} href={gadsHref} />
        <InstagramReelSection copy={copy} />
        <ShowcasesSection copy={copy} href={gadsHref} />
        <ProblemSection copy={copy} />
        <WorkflowSection copy={copy} />
        <FeaturesSection copy={copy} />
        <ScreenshotsSection copy={copy} />
        <TestimonialsSection copy={copy} />
        <BlogPreviewSection copy={copy} />
        <FaqSection copy={copy} />
        <DownloadSection copy={copy} href={gadsHref} />
        <AppShowcaseSection copy={copy} />
      </main>

      <SiteFooter copy={copy} />
      <BackToTopButton visible={showBackToTop} label={copy.ui.backToTop} />
    </div>
  );
}
