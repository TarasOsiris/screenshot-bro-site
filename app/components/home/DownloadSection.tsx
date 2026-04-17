import { AppleLogo } from "~/components/home/icons";
import {
  APP_STORE_URL,
  BETA_BENEFITS,
  CONTACT_MAILTO,
  PRIMARY_CTA_LABEL,
} from "~/config/site";

export function DownloadSection({ href = APP_STORE_URL }: { href?: string }) {
  return (
    <section
      id="early-access"
      className="relative py-32 px-6 overflow-hidden border-t border-border-subtle scroll-mt-24"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-6">
          Ready to ship
          <br />
          better screenshots?
        </h2>
        <p className="text-base text-white/[0.58] mb-10 max-w-2xl mx-auto leading-relaxed">
          Download from the Mac App Store and use the full screenshot
          workflow: setup, design, auto-translation, localization, and export
          for App Store and Google Play assets.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
          {BETA_BENEFITS.map((item) => (
            <div key={item} className="soft-panel rounded-2xl p-5">
              <p className="text-sm text-white/[0.62] leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={href}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent to-accent-light text-white font-semibold text-base transition-all hover:shadow-[0_0_48px_var(--color-accent-glow)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <AppleLogo className="opacity-80 group-hover:opacity-100 transition-opacity" />
            {PRIMARY_CTA_LABEL}
          </a>
          <a
            href={CONTACT_MAILTO}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white/[0.8] transition-all hover:border-white/20 hover:bg-white/10"
          >
            Contact the developer
          </a>
        </div>

        <p className="mt-4 text-xs text-white/40 font-mono">
          macOS 15+ app | Swift & SwiftUI | Available on the Mac App Store
        </p>
      </div>
    </section>
  );
}
