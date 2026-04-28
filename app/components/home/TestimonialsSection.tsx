import { SectionIntro } from "~/components/home/SectionIntro";
import type { HomeCopy } from "~/config/localization";

export function TestimonialsSection({ copy }: { copy: HomeCopy }) {
  return (
    <section className="py-28 px-6 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <SectionIntro
          eyebrow={copy.sections.testimonials.eyebrow}
          title={copy.sections.testimonials.title}
          description={copy.sections.testimonials.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {copy.testimonials.map((t) => (
            <figure
              key={t.app}
              className="rounded-3xl bg-surface-raised border border-border p-7 flex flex-col"
            >
              <blockquote className="flex-1 mb-6">
                <p className="text-sm text-white/[0.62] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-5 border-t border-border-subtle">
                <img
                  src={t.icon}
                  alt={`${t.app} app icon`}
                  width="40"
                  height="40"
                  loading="lazy"
                  decoding="async"
                  className="w-10 h-10 rounded-[22%] border border-white/10"
                />
                <div>
                  <p className="text-sm font-medium text-white/80">
                    {t.name}
                  </p>
                  <p className="text-xs text-white/60">{t.app}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
