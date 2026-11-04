import { BlogCover } from "~/components/BlogCover";
import { DownloadIcon } from "~/components/home/small-icons";
import { ButtonLink } from "~/components/ui/Button";
import { ctaCoverFor } from "~/config/blog-images";
import { SITE_NAME, WEB_DEMO_URL } from "~/config/site";
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
  // The card shows a real template export, picked from the message so a page
  // always shows the same one.
  const cover = ctaCoverFor(message);

  return (
    <div className="soft-panel mt-12 overflow-hidden rounded-3xl sm:grid sm:grid-cols-[minmax(0,1fr)_15rem]">
      <div className="relative h-52 sm:order-2 sm:h-auto sm:min-h-72 sm:border-s sm:border-border-subtle">
        <BlogCover cover={cover} shotWidth={27} />
        <span className="absolute bottom-3 left-1/2 z-10 hidden -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-surface-raised/90 px-3 py-1 text-[11px] font-medium text-ink/75 shadow-sm backdrop-blur sm:block">
          {cover.name} · {cover.width}×{cover.height}
        </span>
      </div>
      <div className="flex flex-col justify-center p-7 sm:p-9">
        <div className="mb-4 flex items-center gap-2.5">
          <img src="/apple-touch-icon.png" alt="" width={28} height={28} className="h-7 w-7 rounded-lg" />
          <span className="font-display text-sm font-semibold text-ink">{SITE_NAME}</span>
        </div>
        <p className="font-display text-lg font-semibold leading-snug text-ink text-balance sm:text-xl">
          {message}
        </p>
        <div className="mt-6 flex flex-col items-start gap-4">
          <ButtonLink href={downloadPageUrl(locale)}>
            <DownloadIcon className="opacity-80 group-hover:opacity-100 transition-opacity" />
            {resolvedButtonLabel}
          </ButtonLink>
          <a
            href={isEnglish ? localizedPath(locale) : WEB_DEMO_URL}
            {...(isEnglish ? {} : { target: "_blank", rel: "noopener" })}
            className="text-sm text-ink/55 underline underline-offset-4 decoration-ink/20 hover:text-ink/80 hover:decoration-ink/40 transition-colors"
          >
            {isEnglish ? (homeLinkLabel ?? DEFAULT_HOME_LINK_LABEL) : copy.ui.tryWebDemo} →
          </a>
        </div>
      </div>
    </div>
  );
}
