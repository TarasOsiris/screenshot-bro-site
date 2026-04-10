import { SectionIntro } from "~/components/home/SectionIntro";
import { WITHOUT_BRO_POINTS, WITH_BRO_POINTS } from "~/config/site";

export function ProblemSection() {
  return (
    <section className="py-28 px-6 border-t border-border-subtle">
      <div className="max-w-5xl mx-auto">
        <SectionIntro
          eyebrow="Why It Exists"
          title="Because shipping one new feature should not mean rebuilding every screenshot."
          description="Screenshot Bro came from the same loop most app teams hit: a product update lands, then the screenshot file set turns into a repetitive mini-project again."
        />

        <div className="soft-panel rounded-3xl p-8 sm:p-10 mb-10">
          <p className="max-w-3xl text-base text-white/[0.62] leading-relaxed">
            I built it after spending too much time in Figma redoing App Store
            screenshots every time copy, gradients, or languages changed. The
            goal is simple: design the system once, then let the app handle the
            repetitive parts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="relative rounded-3xl bg-surface-raised border border-border p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose/10 text-rose text-xs font-medium mb-6">
              <svg
                aria-hidden="true"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              Without Screenshot Bro
            </div>
            <ul className="space-y-4">
              {WITHOUT_BRO_POINTS.map((text) => (
                <li
                  key={text}
                  className="flex items-start gap-3 text-sm text-white/50 leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-3xl bg-surface-raised border border-accent/30 p-8">
            <div className="absolute inset-0 rounded-3xl bg-accent/[0.03]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint/10 text-mint text-xs font-medium mb-6">
                <svg
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20,6 9,17 4,12" />
                </svg>
                With Screenshot Bro
              </div>
              <ul className="space-y-4">
                {WITH_BRO_POINTS.map((text) => (
                  <li
                    key={text}
                    className="flex items-start gap-3 text-sm text-white/60 leading-relaxed"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-mint shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
