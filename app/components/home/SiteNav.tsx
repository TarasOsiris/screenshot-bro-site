import { useEffect, useState } from "react";

import { AppleLogo, RedditGlyph, ThreadsGlyph, XGlyph } from "~/components/home/icons";
import { NavLink } from "~/components/NavLink";
import {
  APP_STORE_URL,
  PRODUCT_LINKS,
  REDDIT_COMMUNITY_URL,
  SITE_NAME,
  THREADS_URL,
  X_PROFILE_URL,
  type SecondaryLink,
} from "~/config/site";
import {
  getHomeCopy,
  LOCALES,
  localizedPath,
  type HomeCopy,
  type LocaleCode,
} from "~/config/localization";

type SiteNavProps = {
  copy?: HomeCopy;
  href?: string;
  showSectionAnchors?: boolean;
  showLocaleSwitcher?: boolean;
};

const DEFAULT_COPY = getHomeCopy("en");

function getSecondaryLinkHref(locale: LocaleCode, link: SecondaryLink): string {
  if (link.external) return link.href;
  if (link.uiKey === "blog" || link.uiKey === "docs") {
    return localizedPath(locale, link.href);
  }
  return link.href;
}

export function SiteNav({
  copy = DEFAULT_COPY,
  href = APP_STORE_URL,
  showSectionAnchors = true,
  showLocaleSwitcher = true,
}: SiteNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const homeHref = localizedPath(copy.locale.code);
  const sectionAnchors = showSectionAnchors ? copy.navItems : [];

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 inset-x-0 z-40 border-b border-border-subtle bg-surface/78 backdrop-blur-2xl"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <a
          href={homeHref}
          aria-label={copy.ui.homeLabel}
          className="flex items-center shrink-0 rounded-md"
        >
          <img
            src="/logo-light.svg"
            alt={SITE_NAME}
            width="150"
            height="24"
            className="h-6 w-auto"
          />
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {sectionAnchors.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
          {sectionAnchors.length > 0 ? (
            <span aria-hidden="true" className="h-4 w-px bg-white/10" />
          ) : null}
          {PRODUCT_LINKS.map((link) => (
            <a
              key={link.uiKey}
              href={getSecondaryLinkHref(copy.locale.code, link)}
              className="text-sm text-white/55 hover:text-white/90 transition-colors"
            >
              {copy.ui[link.uiKey]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {showLocaleSwitcher ? (
            <>
              <label className="sr-only" htmlFor="locale-switcher">
                {copy.ui.language}
              </label>
              <select
                id="locale-switcher"
                aria-label={copy.ui.language}
                value={copy.locale.code}
                onChange={(event) => {
                  const targetLocale = event.currentTarget.value as LocaleCode;
                  let currentPath = window.location.pathname;
                  const segments = currentPath.split("/").filter(Boolean);
                  if (segments.length > 0 && LOCALES.some(l => l.code === segments[0] && l.code !== "en")) {
                    segments.shift();
                  }
                  const cleanPath = "/" + segments.join("/");
                  window.location.href = localizedPath(targetLocale, cleanPath);
                }}
                className="hidden sm:block h-9 rounded-xl border border-white/10 bg-white/[0.06] px-2 text-xs font-medium text-white/70 outline-none transition-all hover:border-white/20 hover:bg-white/10 focus:border-accent/60"
              >
                {LOCALES.map((locale) => (
                  <option key={locale.code} value={locale.code}>
                    {locale.flag} {locale.nativeLabel}
                  </option>
                ))}
              </select>
            </>
          ) : null}

          <div className="hidden md:flex items-center gap-2">
            <SocialIcon
              href={REDDIT_COMMUNITY_URL}
              label={copy.ui.redditCommunity}
              icon="reddit"
            />
            <SocialIcon
              href={X_PROFILE_URL}
              label={copy.ui.followOnX}
              icon="x"
            />
            <SocialIcon
              href={THREADS_URL}
              label={copy.ui.followOnThreads}
              icon="threads"
            />
          </div>

          <a
            href={href}
            className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all hover:border-white/25 hover:bg-white/15"
          >
            <AppleLogo />
            <span>{copy.primaryCtaLabel}</span>
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-xl border border-white/10 bg-white/[0.06] text-white/80 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        copy={copy}
        ctaHref={href}
        sectionAnchors={sectionAnchors}
        showLocaleSwitcher={showLocaleSwitcher}
      />
    </nav>
  );
}

function MobileMenu({
  open,
  onClose,
  copy,
  ctaHref,
  sectionAnchors,
  showLocaleSwitcher,
}: {
  open: boolean;
  onClose: () => void;
  copy: HomeCopy;
  ctaHref: string;
  sectionAnchors: HomeCopy["navItems"];
  showLocaleSwitcher: boolean;
}) {
  return (
    <div
      id="mobile-nav"
      hidden={!open}
      className="lg:hidden fixed inset-x-0 top-16 z-30 overflow-y-auto bg-surface/95 backdrop-blur-2xl border-t border-border-subtle h-[calc(100dvh-4rem)]"
    >
      <div className="px-6 py-8 flex flex-col gap-8">
        {sectionAnchors.length > 0 ? (
          <MobileLinkGroup label="Sections">
            {sectionAnchors.map((item) => (
              <MobileLink
                key={item.href}
                href={item.href}
                onClick={onClose}
                label={item.label}
              />
            ))}
          </MobileLinkGroup>
        ) : null}

        <MobileLinkGroup label={copy.ui.productLabel}>
          {PRODUCT_LINKS.map((link) => (
            <MobileLink
              key={link.uiKey}
              href={getSecondaryLinkHref(copy.locale.code, link)}
              onClick={onClose}
              label={copy.ui[link.uiKey]}
            />
          ))}
        </MobileLinkGroup>

        <MobileLinkGroup label={copy.ui.community}>
          <MobileLink
            href={REDDIT_COMMUNITY_URL}
            onClick={onClose}
            label={copy.ui.redditCommunity}
            external
          />
          <MobileLink
            href={X_PROFILE_URL}
            onClick={onClose}
            label={copy.ui.followOnX}
            external
          />
          <MobileLink
            href={THREADS_URL}
            onClick={onClose}
            label={copy.ui.followOnThreads}
            external
          />
        </MobileLinkGroup>

        {showLocaleSwitcher ? (
          <MobileLinkGroup label={copy.ui.language}>
            <select
              aria-label={copy.ui.language}
              value={copy.locale.code}
              onChange={(event) => {
                const targetLocale = event.currentTarget.value as LocaleCode;
                let currentPath = window.location.pathname;
                const segments = currentPath.split("/").filter(Boolean);
                if (segments.length > 0 && LOCALES.some(l => l.code === segments[0] && l.code !== "en")) {
                  segments.shift();
                }
                const cleanPath = "/" + segments.join("/");
                window.location.href = localizedPath(targetLocale, cleanPath);
              }}
              className="w-full h-11 rounded-xl border border-white/10 bg-white/[0.06] px-3 text-sm font-medium text-white/80 outline-none transition-all focus:border-accent/60"
            >
              {LOCALES.map((locale) => (
                <option key={locale.code} value={locale.code}>
                  {locale.flag} {locale.nativeLabel}
                </option>
              ))}
            </select>
          </MobileLinkGroup>
        ) : null}

        <a
          href={ctaHref}
          onClick={onClose}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-light px-5 py-3.5 text-sm font-semibold text-white"
        >
          <AppleLogo />
          {copy.primaryCtaLabel}
        </a>
      </div>
    </div>
  );
}

function MobileLinkGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-mono">
        {label}
      </p>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}

function MobileLink({
  href,
  label,
  onClick,
  external,
}: {
  href: string;
  label: string;
  onClick: () => void;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-base text-white/85 hover:text-white py-2 transition-colors"
    >
      {label}
    </a>
  );
}

function SocialIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: "reddit" | "x" | "threads";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-9 h-9 rounded-xl border border-white/10 bg-white/[0.06] text-white/60 hover:text-white/90 hover:border-white/20 hover:bg-white/10 transition-all"
      aria-label={label}
    >
      {icon === "reddit" ? <RedditGlyph /> : icon === "threads" ? <ThreadsGlyph /> : <XGlyph />}
    </a>
  );
}


function MenuIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}

// Re-export so other components can reuse the link list ordering.
export type { SecondaryLink };
