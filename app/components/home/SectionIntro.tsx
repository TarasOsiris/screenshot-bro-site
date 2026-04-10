export function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="text-center mb-16">
      <p className="text-xs uppercase tracking-[0.25em] text-accent-light font-mono mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl mx-auto mt-5 text-base text-white/55 leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
