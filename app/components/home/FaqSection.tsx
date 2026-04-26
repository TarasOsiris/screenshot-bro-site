import { SectionIntro } from "~/components/home/SectionIntro";
import { FAQS } from "~/config/site";
import type { FaqItem } from "~/config/site";

function FaqItemBlock({ item }: { item: FaqItem }) {
  return (
    <details className="faq-item rounded-2xl">
      <summary className="cursor-pointer list-none px-6 py-5 font-display text-lg font-semibold text-white flex items-center justify-between gap-4">
        <span>{item.question}</span>
        <span className="text-white/55 text-2xl leading-none">+</span>
      </summary>
      <div className="px-6 pb-5">
        <p className="text-sm text-white/[0.58] leading-relaxed">{item.answer}</p>
      </div>
    </details>
  );
}

export function FaqSection() {
  return (
    <section
      id="faq"
      className="py-28 px-6 border-t border-border-subtle scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto">
        <SectionIntro
          eyebrow="FAQ"
          title="The questions most people ask before trying it."
          description="The product is early, but the core workflow is already there. These answers handle the main compatibility and export questions."
        />

        <div className="space-y-4">
          {FAQS.map((item) => (
            <FaqItemBlock key={item.question} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
