import { NavLink } from "~/components/NavLink";
import {
  CONTACT_MAILTO,
  NAV_ITEMS,
  REDDIT_COMMUNITY_URL,
  SITE_NAME,
  X_PROFILE_URL,
} from "~/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex items-center">
          <img
            src="/logo-light.svg"
            alt={SITE_NAME}
            width="120"
            height="20"
            className="h-4 w-auto opacity-45"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
          <a
            href="/blog"
            className="text-sm text-white/55 hover:text-white/90 transition-colors"
          >
            Blog
          </a>
          <a
            href="/changelog"
            className="text-sm text-white/55 hover:text-white/90 transition-colors"
          >
            Changelog
          </a>
          <a
            href={REDDIT_COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/55 hover:text-white/90 transition-colors"
          >
            Community
          </a>
          <a
            href="/privacy"
            className="text-sm text-white/55 hover:text-white/90 transition-colors"
          >
            Privacy
          </a>
          <a
            href={CONTACT_MAILTO}
            className="text-sm text-white/55 hover:text-white/90 transition-colors"
          >
            Contact
          </a>
          <a
            href={X_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white/90 transition-colors"
          >
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Follow my journey
          </a>
        </div>

        <span className="text-sm text-white/40 text-center">
          Built with SwiftUI. Designed for developers shipping App Store
          updates.
        </span>
      </div>
    </footer>
  );
}
