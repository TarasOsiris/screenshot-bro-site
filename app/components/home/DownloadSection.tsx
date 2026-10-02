import { DownloadIcon } from "~/components/home/small-icons";
import { ButtonLink } from "~/components/ui/Button";
import { Panel } from "~/components/ui/Panel";
import { CONTACT_MAILTO } from "~/config/site";
import { downloadPageUrl, type HomeCopy } from "~/config/localization";

export function DownloadSection({
  copy,
  href,
}: {
  copy: HomeCopy;
  href?: string;
}) {
  const ctaHref = href ?? downloadPageUrl(copy.locale.code);

  return (
    <section
      id="download"
      className="relative py-28 px-6 overflow-hidden border-t border-border-subtle scroll-mt-24"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <img
          src="/web-app-manifest-192x192.png"
          alt=""
          width="88"
          height="88"
          loading="lazy"
          decoding="async"
          className="mx-auto mb-8 w-22 h-22 rounded-[22%] shadow-[var(--shadow-panel)]"
        />
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink tracking-tight leading-tight mb-6">
          {copy.download.titleLine1}
          <br />
          {copy.download.titleLine2}
        </h2>
        <p className="text-base sm:text-lg text-ink/[0.6] mb-10 max-w-2xl mx-auto leading-relaxed">
          {copy.download.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
          {copy.benefits.map((item) => (
            <Panel key={item} padding="sm" className="rounded-2xl">
              <p className="text-sm text-ink/[0.66] leading-relaxed">{item}</p>
            </Panel>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <ButtonLink href={ctaHref} size="lg">
            <DownloadIcon className="opacity-80 group-hover:opacity-100 transition-opacity" />
            {copy.primaryCtaLabel}
          </ButtonLink>
          <ButtonLink href={CONTACT_MAILTO} variant="secondary" size="lg" className="font-medium text-sm">
            {copy.ui.contactDeveloper}
          </ButtonLink>
        </div>

        <p className="mt-6 text-xs text-ink/55 font-mono">
          {copy.ui.availabilityNote}
        </p>
      </div>
    </section>
  );
}
