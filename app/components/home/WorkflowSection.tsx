import { SectionIntro } from "~/components/home/SectionIntro";
import { Panel } from "~/components/ui/Panel";
import type { HomeCopy } from "~/config/localization";

// "Why it exists" and "how it works" used to be two sections saying the same
// thing; the founder's line now introduces the four steps.
export function WorkflowSection({ copy }: { copy: HomeCopy }) {
  return (
    <section
      id="workflow"
      className="py-24 px-6 border-t border-border-subtle scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <SectionIntro
          eyebrow={copy.sections.workflow.eyebrow}
          title={copy.sections.workflow.title}
          description={copy.sections.workflow.description}
        />

        <Panel as="figure" padding="lg" className="max-w-4xl mx-auto mb-10 flex flex-col sm:flex-row gap-6 items-start">
          <img
            src="/web-app-manifest-192x192.png"
            alt=""
            width="56"
            height="56"
            loading="lazy"
            decoding="async"
            className="w-14 h-14 rounded-[22%] shrink-0"
          />
          <blockquote className="text-base sm:text-lg text-ink/[0.7] leading-relaxed">
            {copy.problem.story}
          </blockquote>
        </Panel>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {copy.workflowSteps.map((step) => (
            <li key={step.step} className="workflow-card rounded-3xl p-6">
              <div className="font-mono text-sm font-medium text-accent-light mb-5">
                {step.step}
              </div>
              <h3 className="font-display font-semibold text-ink text-lg mb-2.5">
                {step.title}
              </h3>
              <p className="text-sm text-ink/[0.6] leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
