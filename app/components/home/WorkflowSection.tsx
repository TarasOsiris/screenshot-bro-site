import { SectionIntro } from "~/components/home/SectionIntro";
import { WORKFLOW_STEPS } from "~/config/site";

export function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="py-28 px-6 border-t border-border-subtle scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <SectionIntro
          eyebrow="Workflow"
          title="A shorter path from raw screenshots to App Store-ready assets."
          description="The product is opinionated around one job: create polished screenshot sets without maintaining a pile of one-off design files."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WORKFLOW_STEPS.map((step) => (
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
