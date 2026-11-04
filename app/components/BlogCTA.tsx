import { DownloadIcon } from "~/components/home/small-icons";
import { ButtonLink } from "~/components/ui/Button";
import { PRIMARY_CTA_LABEL, WEB_DEMO_URL } from "~/config/site";
import { useHomeCopy } from "~/config/home-copy";
import {
  downloadPageUrl,
  localizedPath,
  type LocaleCode,
} from "~/config/localization";

// Posts sit one click away from the App Store, which left the homepage — the
// page that has to rank for "App Store screenshot tool" — with almost no
// internal links. The store button is unchanged; the text link underneath
// passes topical anchor text along without adding a step to the download.
const DEFAULT_HOME_LINK_LABEL = "See what Screenshot Bro does on Mac, iPad and iPhone";

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
  const copy = useHomeCopy();
  const resolvedButtonLabel = buttonLabel ?? copy.primaryCtaLabel;
  // Descriptive anchors are authored in English, so English posts link to the
  // homepage with one; translated posts link to the web demo with its
  // already-translated label instead.
  const isEnglish = locale === "en";

  return (
    <div className="soft-panel mt-10 p-7 rounded-3xl text-center">
      <p className="text-sm text-ink/60 mb-4">{message}</p>
      <ButtonLink href={downloadPageUrl(locale)}>
        <DownloadIcon className="opacity-80 group-hover:opacity-100 transition-opacity" />
        {resolvedButtonLabel}
      </ButtonLink>
      <p className="mt-4 text-sm">
        <a
          href={isEnglish ? localizedPath(locale) : WEB_DEMO_URL}
          {...(isEnglish ? {} : { target: "_blank", rel: "noopener" })}
          className="text-ink/55 underline underline-offset-4 decoration-ink/20 hover:text-ink/80 hover:decoration-ink/40 transition-colors"
        >
          {isEnglish ? (homeLinkLabel ?? DEFAULT_HOME_LINK_LABEL) : copy.ui.tryWebDemo} →
        </a>
      </p>
    </div>
  );
}
