import { useEffect, useState } from "react";

import type { Route } from "./+types/home";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "~/config/site";
export const meta: Route.MetaFunction = () => [
  { title: `${SITE_NAME} — App Store & Google Play Screenshot Designer for Mac` },
  { name: "description", content: SITE_DESCRIPTION },
];

export const links: Route.LinksFunction = () => [
  { rel: "canonical", href: SITE_URL },
];

import { SiteNav } from "~/components/home/SiteNav";
import { HeroSection } from "~/components/home/HeroSection";
import { AppShowcaseSection } from "~/components/home/AppShowcaseSection";
import { StorefrontSection } from "~/components/home/StorefrontSection";
import { ShowcasesSection } from "~/components/home/ShowcasesSection";
import { WorkflowSection } from "~/components/home/WorkflowSection";
import { FeaturesSection } from "~/components/home/FeaturesSection";
import { ScreenshotsSection } from "~/components/home/ScreenshotsSection";
import { TestimonialsSection } from "~/components/home/TestimonialsSection";
import { ProblemSection } from "~/components/home/ProblemSection";
import { FaqSection } from "~/components/home/FaqSection";
import { DownloadSection } from "~/components/home/DownloadSection";
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

export default function Home() {
  const showBackToTop = useScrollFade(600);

  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-3 focus:py-2 focus:rounded-md focus:bg-surface-raised"
      >
        Skip to content
      </a>

      <SiteNav />

      <main id="main-content">
        <HeroSection />
        <AppShowcaseSection />
        <StorefrontSection />
        <ShowcasesSection />
        <WorkflowSection />
        <FeaturesSection />
        <ScreenshotsSection />
        <TestimonialsSection />
        <ProblemSection />
        <FaqSection />
        <DownloadSection />
      </main>

      <SiteFooter />
      <BackToTopButton visible={showBackToTop} />
    </div>
  );
}
