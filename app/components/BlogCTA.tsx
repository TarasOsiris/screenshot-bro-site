import { AppleLogo } from "~/components/home/icons";
import { PRIMARY_CTA_LABEL } from "~/config/site";
import {
  appStoreCtaUrl,
  getHomeCopy,
  localizedPath,
  type LocaleCode,
} from "~/config/localization";

// Posts sit one click away from the App Store, which left the homepage — the
// page that has to rank for "App Store screenshot tool" — with almost no
// internal links. The store button is unchanged; the text link underneath
// passes topical anchor text along without adding a step to the download.
const DEFAULT_HOME_LINK_LABEL = "See what Screenshot Bro does on Mac and iPad";

export function BlogCTA({
  message,
  buttonLabel,
  homeLinkLabel,
  locale = "en",
}: {
  message: string;
  buttonLabel?: string;
  homeLinkLabel?: string;
  locale?: LocaleCode;
}) {
  const copy = getHomeCopy(locale);
  const resolvedButtonLabel = buttonLabel ?? copy.primaryCtaLabel;
  // Descriptive anchors are authored in English, so only use them on the
  // English pages; translated posts fall back to already-translated UI copy
  // and link to their own locale's homepage rather than across the hreflang
  // cluster.
  const linkLabel =
    locale === "en"
      ? (homeLinkLabel ?? DEFAULT_HOME_LINK_LABEL)
      : copy.ui.seeInAction;

  return (
    <div className="mt-10 p-6 rounded-2xl bg-surface-raised border border-border text-center">
      <p className="text-sm text-ink/60 mb-4">{message}</p>
      <a
        href={appStoreCtaUrl(locale)}
        className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent to-accent-light text-white font-semibold text-sm transition-all hover:shadow-[0_0_32px_var(--color-accent-glow)] hover:scale-[1.02] active:scale-[0.98]"
      >
        <AppleLogo className="opacity-80 group-hover:opacity-100 transition-opacity" />
        {resolvedButtonLabel}
      </a>
      <p className="mt-4 text-sm">
        <a
          href={localizedPath(locale)}
          className="text-ink/55 underline underline-offset-4 decoration-ink/20 hover:text-ink/80 hover:decoration-ink/40 transition-colors"
        >
          {linkLabel} →
        </a>
      </p>
    </div>
  );
}
