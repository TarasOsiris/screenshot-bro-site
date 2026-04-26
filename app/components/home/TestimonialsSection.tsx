import { SectionIntro } from "~/components/home/SectionIntro";

type Testimonial = {
  quote: string;
  name: string;
  app: string;
  icon: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I used to spend a whole afternoon on screenshots after every release. With Screenshot Bro, I set up templates once and now I just swap the new shots in and hit export.",
    name: "Refuells Developer",
    app: "Refuells",
    icon: "/showcase/refuells.jpg",
  },
  {
    quote:
      "The localization feature is a lifesaver. I support 6 languages and exporting all of them used to be the worst part of any update. Now it takes one click.",
    name: "AdRadar Developer",
    app: "AdRadar",
    icon: "/showcase/adradar.jpg",
  },
  {
    quote:
      "Finally a tool that gets out of the way. No Figma plugins, no browser tabs — just a native Mac app that does the job fast.",
    name: "TT Tracker Developer",
    app: "TT Tracker",
    icon: "/showcase/tt-tracker.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-28 px-6 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <SectionIntro
          eyebrow="Developers"
          title="What developers are saying."
          description="Real feedback from indie developers using Screenshot Bro in production."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
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
