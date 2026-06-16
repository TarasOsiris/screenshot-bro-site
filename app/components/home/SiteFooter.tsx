import { RedditGlyph, ThreadsGlyph, XGlyph } from "~/components/home/icons";
import {
  COMMUNITY_LINKS,
  COMPARISON_LINKS,
  LEGAL_LINKS,
  NINEVA_STUDIOS_NAME,
  NINEVA_STUDIOS_URL,
  PRODUCT_LINKS,
  REDDIT_COMMUNITY_URL,
  SITE_NAME,
  THREADS_URL,
  X_PROFILE_URL,
  type SecondaryLink,
} from "~/config/site";
import {
  getHomeCopy,
  localizedPath,
  type HomeCopy,
  type LocaleCode,
} from "~/config/localization";

const DEFAULT_COPY = getHomeCopy("en");

function getSecondaryLinkHref(locale: LocaleCode, link: SecondaryLink): string {
  if (link.external) return link.href;
  if (link.uiKey === "blog" || link.uiKey === "docs") {
    return localizedPath(locale, link.href);
  }
  return link.href;
}

export function SiteFooter({ copy = DEFAULT_COPY }: { copy?: HomeCopy }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-surface/40">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-5 max-w-sm">
            <img
              src="/logo-light.svg"
              alt={SITE_NAME}
              width="150"
              height="24"
              className="h-6 w-auto opacity-80"
            />
            <p className="text-sm text-white/55 leading-relaxed">
              {copy.footer.note}
            </p>
            <div className="flex items-center gap-3">
              <SocialButton
                href={REDDIT_COMMUNITY_URL}
                label={copy.ui.redditCommunity}
                icon="reddit"
              />
              <SocialButton
                href={X_PROFILE_URL}
                label={copy.ui.followOnX}
                icon="x"
              />
              <SocialButton
                href={THREADS_URL}
                label={copy.ui.followOnThreads}
                icon="threads"
              />
              <a
                href="https://www.producthunt.com/products/screenshotbro-mac-app?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-screenshotbro-mac-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1106959&theme=dark&t=1775116842049"
                  alt={copy.ui.productHuntAlt}
                  width="200"
                  height="43"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>

          <FooterColumn
            label={copy.ui.productLabel}
            links={PRODUCT_LINKS}
            copy={copy}
          />
          <FooterColumn
            label={copy.ui.resourcesLabel}
            links={[...COMPARISON_LINKS, ...COMMUNITY_LINKS, ...LEGAL_LINKS]}
            copy={copy}
          />
        </div>

        <div className="mt-12 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-x-3 gap-y-1 text-xs text-white/45">
            <span>
              © {year} {SITE_NAME}
            </span>
            <span className="hidden sm:inline text-white/25" aria-hidden="true">
              ·
            </span>
            <span>
              {copy.ui.madeWithLoveAt}{" "}
              <a
                href={NINEVA_STUDIOS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/65 hover:text-white/95 transition-colors"
              >
                {NINEVA_STUDIOS_NAME}
              </a>
            </span>
          </div>
          <a
            href={X_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-white/55 hover:text-white/90 transition-colors"
          >
            <XGlyph />
            {copy.ui.followJourney}
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  label,
  links,
  copy,
}: {
  label: string;
  links: SecondaryLink[];
  copy: HomeCopy;
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-mono">
        {label}
      </p>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.uiKey}>
            <a
              href={getSecondaryLinkHref(copy.locale.code, link)}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-sm text-white/65 hover:text-white/95 transition-colors"
            >
              {copy.ui[link.uiKey]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialButton({
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
      aria-label={label}
      className="flex items-center justify-center w-9 h-9 rounded-xl border border-white/10 bg-white/[0.06] text-white/60 hover:text-white/90 hover:border-white/20 hover:bg-white/10 transition-all"
    >
      {icon === "reddit" ? <RedditGlyph /> : icon === "threads" ? <ThreadsGlyph /> : <XGlyph />}
    </a>
  );
}
