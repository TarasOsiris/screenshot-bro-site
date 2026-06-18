import type { Route } from "./+types/blog.app-store-screenshots-for-fitness-apps";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "app-store-screenshots-for-fitness-apps";

export async function loader() {
  return { locale: "en" as LocaleCode };
}

export const meta: Route.MetaFunction = ({ matches }) =>
  buildBlogPostMeta(SLUG, matches, "en");

export const links: Route.LinksFunction = () => buildBlogPostLinks(SLUG);

export default function BlogPost() {
  const { locale } = useLoaderData<typeof loader>();

  return (
    <BlogArticleShell
      slug={SLUG}
      locale={locale}
      ctaMessage="Design a calm, consistent fitness screenshot set — outcomes first — and export every size in Screenshot Bro."
      seoLinks={[
        {
          href: "/blog/screenshots-that-convert",
          label: "Screenshots that convert",
          description: "the conversion principles applied to wellness apps.",
        },
        {
          href: "/blog/app-store-screenshot-order",
          label: "Screenshot order",
          description: "sequence onboarding, tracking, and results.",
        },
        {
          href: "/blog/app-store-screenshot-mistakes",
          label: "Screenshot mistakes",
          description: "avoid the clutter that hurts health-app conversion.",
        },
      ]}
      faqs={[
        {
          question: "What should fitness app screenshots focus on?",
          answer:
            "Outcomes, not features. Health and fitness users are buying a result — strength, weight loss, calm, better sleep — so screenshots should show progress, coaching, and the feeling of using the app, with the interface proving it is achievable.",
        },
        {
          question: "Should I show real data in fitness screenshots?",
          answer:
            "Show realistic, aspirational-but-believable data. Charts that trend up and streaks that look attainable build trust. Avoid fake-looking perfect numbers, and never show real users' private health data.",
        },
        {
          question: "Do wellness apps need a calmer visual style?",
          answer:
            "Often, yes. Meditation, sleep, and recovery apps convert better with spacious layouts, soft colors, and short captions that match the calm state the user wants. A high-energy workout app can be bolder. Match the visual tone to the user's mindset.",
        },
      ]}
    >
      <p>
        Fitness and wellness is a crowded, high-intent category where users are
        choosing a result they care about — getting stronger, sleeping better,
        losing weight, feeling calmer. Screenshots that sell the outcome, not the
        feature list, win. This guide covers what works for health and fitness
        apps.
      </p>

      <h2>Sell the Outcome, Prove It with the UI</h2>
      <p>
        Lead with the transformation the user wants: progress over time, a
        completed workout, a calmer evening, a coaching plan. Then let the
        interface prove it is real and achievable. The emotional promise plus the
        concrete app surface together convert better than either alone.
      </p>

      <h2>Match the Visual Tone to the User&apos;s State</h2>
      <p>
        A meditation or sleep app should feel slower and simpler — soft palettes,
        generous spacing, short captions. A high-intensity workout app can be
        bolder and more energetic. The screenshot tone should match the mental
        state the user is in when they pick the app, the way{" "}
        <a href="/blog/screenshots-that-convert">converting screenshots</a> always
        match category expectations.
      </p>

      <h2>A Fitness Screenshot Sequence</h2>
      <ol>
        <li>
          <strong>1:</strong> the core promise — the result or feeling.
        </li>
        <li>
          <strong>2:</strong> the main loop — tracking a workout, logging, or a
          guided session.
        </li>
        <li>
          <strong>3:</strong> progress and motivation — charts, streaks, goals.
        </li>
        <li>
          <strong>4–5:</strong> coaching, personalization, or community.
        </li>
        <li>
          <strong>6–8:</strong> social proof, integrations (Apple Health, wearables),
          and plan options.
        </li>
      </ol>

      <h2>Handle Data and Trust Carefully</h2>
      <p>
        Show realistic, attainable numbers — a believable streak beats a perfect
        one. Never display real users&apos; private health data, and be careful with
        before/after or medical claims, which can trigger{" "}
        <a href="/blog/app-store-screenshots-rejected-fix">review rejections</a>.
        Trust is the whole game in health apps.
      </p>

      <h2>Keep Captions Calm and Specific</h2>
      <p>
        &quot;Sleep better in 7 days,&quot; &quot;Track every set,&quot; &quot;Your personal coach&quot; —
        short, outcome-led captions outperform feature lists. Avoid clutter; one
        idea per screenshot. See common{" "}
        <a href="/blog/app-store-screenshot-mistakes">screenshot mistakes</a> to
        steer clear of.
      </p>
    </BlogArticleShell>
  );
}
