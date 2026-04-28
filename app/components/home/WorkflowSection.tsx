import { SectionIntro } from "~/components/home/SectionIntro";
import type { HomeCopy } from "~/config/localization";

export function WorkflowSection({ copy }: { copy: HomeCopy }) {
  return (
    <section
      id="workflow"
      className="py-28 px-6 border-t border-border-subtle scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <SectionIntro
          eyebrow={copy.sections.workflow.eyebrow}
          title={copy.sections.workflow.title}
          description={copy.sections.workflow.description}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {copy.workflowSteps.map((step) => (
            <div key={step.step} className="workflow-card rounded-3xl p-6">
              <div className="font-mono text-4xl font-bold text-accent/50 mb-4">
                {step.step}
              </div>
              <h3 className="font-display font-semibold text-white text-lg mb-2.5">
                {step.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
