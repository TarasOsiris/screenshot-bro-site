import { ChevronUpIcon } from "~/components/home/small-icons";

export function BackToTopButton({
  visible,
  label = "Back to top",
}: {
  visible: boolean;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-surface-raised border border-border flex items-center justify-center text-white/45 hover:text-white/85 transition-all ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label={label}
    >
      <ChevronUpIcon />
    </button>
  );
}
