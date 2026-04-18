import { useEffect, useState } from "react";

import type { Route } from "./+types/home";
import { SITE_URL } from "~/config/site";

export const links: Route.LinksFunction = () => [
  { rel: "canonical", href: SITE_URL },
];

import { SiteNav } from "~/components/home/SiteNav";
import { HeroSection } from "~/components/home/HeroSection";
import { AppShowcaseSection } from "~/components/home/AppShowcaseSection";
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
        <ShowcasesSection />
        <ProblemSection />
        <WorkflowSection />
        <FeaturesSection />
        <ScreenshotsSection />
        <TestimonialsSection />
        <FaqSection />
        <DownloadSection />
        <AppShowcaseSection />
      </main>

      <SiteFooter />
      <BackToTopButton visible={showBackToTop} />
    </div>
  );
}
