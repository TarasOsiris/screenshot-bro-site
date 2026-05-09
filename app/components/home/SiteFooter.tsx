import {
  COMMUNITY_LINKS,
  COMPARISON_LINKS,
  LEGAL_LINKS,
  NINEVA_STUDIOS_NAME,
  NINEVA_STUDIOS_URL,
  PRODUCT_LINKS,
  REDDIT_COMMUNITY_URL,
  SITE_NAME,
  X_PROFILE_URL,
  type SecondaryLink,
} from "~/config/site";
import { getHomeCopy, type HomeCopy } from "~/config/localization";

const DEFAULT_COPY = getHomeCopy("en");

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
            <div className="flex items-center gap-2">
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
              href={link.href}
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
  icon: "reddit" | "x";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-9 h-9 rounded-xl border border-white/10 bg-white/[0.06] text-white/60 hover:text-white/90 hover:border-white/20 hover:bg-white/10 transition-all"
    >
      {icon === "reddit" ? <RedditGlyph /> : <XGlyph />}
    </a>
  );
}

function RedditGlyph() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm6.508 14.108c.06.253.093.516.093.786 0 3.014-3.554 5.463-7.931 5.463-4.378 0-7.932-2.449-7.932-5.463 0-.27.033-.533.094-.786a1.755 1.755 0 0 1-.75-1.44c0-.97.786-1.756 1.755-1.756.46 0 .878.178 1.19.468 1.17-.812 2.783-1.337 4.577-1.397l.867-4.079a.37.37 0 0 1 .44-.296l2.867.612a1.214 1.214 0 1 1-.137.643l-2.558-.546-.77 3.623c1.764.073 3.346.598 4.496 1.397a1.75 1.75 0 0 1 1.19-.468c.97 0 1.756.786 1.756 1.756 0 .587-.29 1.105-.747 1.423ZM9.37 13.5a1.214 1.214 0 1 0 0 2.428 1.214 1.214 0 0 0 0-2.428Zm5.26 0a1.214 1.214 0 1 0 0 2.428 1.214 1.214 0 0 0 0-2.428Zm-5.028 4.286a.365.365 0 0 1-.006-.516.365.365 0 0 1 .516-.006c.702.676 2.182.687 2.893-.009a.365.365 0 0 1 .516.006.365.365 0 0 1-.006.516c-.974.949-2.937.953-3.913.01Z" />
    </svg>
  );
}

function XGlyph() {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
