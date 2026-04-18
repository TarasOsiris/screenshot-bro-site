import { AppleLogo } from "~/components/home/icons";
import { APP_STORE_URL, PRIMARY_CTA_LABEL } from "~/config/site";

export function BlogCTA({ message }: { message: string }) {
  return (
    <div className="mt-10 p-6 rounded-2xl bg-surface-raised border border-border text-center">
      <p className="text-sm text-white/60 mb-4">{message}</p>
      <a
        href={APP_STORE_URL}
        className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent to-accent-light text-white font-semibold text-sm transition-all hover:shadow-[0_0_32px_var(--color-accent-glow)] hover:scale-[1.02] active:scale-[0.98]"
      >
        <AppleLogo className="opacity-80 group-hover:opacity-100 transition-opacity" />
        {PRIMARY_CTA_LABEL}
      </a>
    </div>
  );
}
