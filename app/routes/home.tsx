import { useEffect, useState } from "react";

import {
  BackToTopButton,
  DownloadSection,
  FeaturesSection,
  HeroSection,
  ProblemSection,
  SiteFooter,
  SiteNav,
  WorkflowSection,
} from "~/components/home/sections";
import { EARLY_ACCESS_MAILTO } from "~/config/site";

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

      <SiteNav href={EARLY_ACCESS_MAILTO} />

      <main id="main-content">
        <HeroSection href={EARLY_ACCESS_MAILTO} />
        <ProblemSection />
        <FeaturesSection />
        <WorkflowSection />
        <DownloadSection href={EARLY_ACCESS_MAILTO} />
      </main>

      <SiteFooter />
      <BackToTopButton visible={showBackToTop} />
    </div>
  );
}
