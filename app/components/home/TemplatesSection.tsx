import { useState } from "react";

import { SectionIntro } from "~/components/home/SectionIntro";
import { appStoreCtaUrl, type HomeCopy } from "~/config/localization";
import {
  DEFAULT_STARTER_TEMPLATE_ID,
  STARTER_TEMPLATES,
  starterTemplateShots,
  starterTemplateThumb,
} from "~/config/templates";

// Every image here is an export of the app's own bundled template, rendered
// through the app's MCP server with real app screenshots in the frames — so
// the gallery shows exactly what "New project from template" produces.
export function TemplatesSection({
  copy,
  href,
}: {
  copy: HomeCopy;
  href?: string;
}) {
  const [selectedId, setSelectedId] = useState(DEFAULT_STARTER_TEMPLATE_ID);
  const selected =
    STARTER_TEMPLATES.find((template) => template.id === selectedId) ??
    STARTER_TEMPLATES[0];
  const ctaHref = href ?? appStoreCtaUrl(copy.locale.code);
  const count = String(STARTER_TEMPLATES.length);
  const section = copy.sections.templates;

  return (
    <section
      id="templates"
      className="py-28 px-6 border-t border-border-subtle scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <SectionIntro
          eyebrow={section.eyebrow}
          title={section.title.replace("{count}", count)}
          description={section.description?.replace("{count}", count)}
        />

        <figure className="showcase-panel overflow-hidden">
          <div
            key={selected.id}
            className="template-shots"
            role="list"
          >
            {starterTemplateShots(selected).map((src, index) => (
              <img
                key={src}
                role="listitem"
                src={src}
                alt={
                  index === 0
                    ? copy.ui.templateAlt(selected.name)
                    : ""
                }
                width={selected.shotWidth}
                height={selected.shotHeight}
                className="template-shot"
                decoding="async"
                loading={index < 4 ? "eager" : "lazy"}
              />
            ))}
          </div>
          <figcaption className="flex flex-wrap items-center justify-between gap-4 px-6 py-5 sm:px-8 border-t border-border-subtle">
            <div>
              <p className="font-display font-semibold text-xl text-ink">
                {selected.name}
              </p>
              <p className="text-sm text-ink/55">
                {copy.ui.templateMeta(selected.columns, selected.width, selected.height)}
              </p>
            </div>
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-xl border border-ink/10 bg-ink/[0.06] px-4 py-2.5 text-sm font-medium text-ink/[0.88] transition-colors hover:border-ink/20 hover:bg-ink/10"
            >
              {copy.ui.startWithTemplate}
            </a>
          </figcaption>
        </figure>

        <div
          role="group"
          aria-label={copy.ui.templatePickerLabel}
          className="template-picker mt-8"
        >
          {STARTER_TEMPLATES.map((template) => {
            const active = template.id === selected.id;
            return (
              <button
                key={template.id}
                type="button"
                aria-pressed={active}
                onClick={() => setSelectedId(template.id)}
                className="template-chip group text-left"
              >
                <img
                  src={starterTemplateThumb(template.id)}
                  alt=""
                  width={template.thumbWidth}
                  height={template.thumbHeight}
                  loading="lazy"
                  decoding="async"
                  className="template-chip-image"
                />
                <span className="block mt-2 text-xs text-ink/60 group-aria-pressed:text-ink truncate">
                  {template.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
