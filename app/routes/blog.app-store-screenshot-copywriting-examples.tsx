import type { Route } from "./+types/blog.app-store-screenshot-copywriting-examples";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "app-store-screenshot-copywriting-examples";

export async function loader() {
  return { locale: "en" as LocaleCode };
}

export const meta: Route.MetaFunction = ({ matches }) =>
  buildBlogPostMeta(SLUG, matches, "en");

export const links: Route.LinksFunction = () => buildBlogPostLinks(SLUG);

const COPY_FORMULAS = [
  {
    formula: "Outcome first",
    pattern: "Verb + result + context",
    example: "Plan your week in minutes",
  },
  {
    formula: "Pain removal",
    pattern: "Stop + recurring problem",
    example: "Stop losing receipts",
  },
  {
    formula: "Workflow proof",
    pattern: "Show + action + object",
    example: "Track every client invoice",
  },
  {
    formula: "Differentiator",
    pattern: "Benefit + unique mechanism",
    example: "Private notes, synced securely",
  },
  {
    formula: "Audience fit",
    pattern: "For + user + job",
    example: "For busy shift workers",
  },
];

const CAPTION_EXAMPLES = [
  "Plan every trip in one place",
  "Build habits that actually stick",
  "Track spending before payday",
  "Edit photos without the clutter",
  "Turn ideas into shipped tasks",
  "Learn faster with daily practice",
  "Scan, save, and search receipts",
  "See your workouts at a glance",
  "Book trusted help in minutes",
  "Organize projects by deadline",
  "Share updates with your team",
  "Find the right lesson faster",
  "Manage subscriptions before renewal",
  "Create meal plans from your pantry",
  "Keep client notes organized",
  "Compare prices before you buy",
  "Design posts from reusable templates",
  "Read summaries on your commute",
  "Track symptoms without spreadsheets",
  "Build a budget you can follow",
  "Turn voice notes into tasks",
  "Follow every package in one view",
  "Practice vocabulary in context",
  "Find calm before sleep",
  "Protect passwords across devices",
  "See what changed today",
  "Plan routes around your schedule",
  "Capture ideas before they disappear",
  "Sync work across iPhone and iPad",
  "Automate the repetitive steps",
  "Review progress by week",
  "Create invoices from saved clients",
  "Save recipes from any site",
  "Study with smart reminders",
  "Keep private journals locked",
  "Track goals without manual setup",
  "Preview designs before export",
  "Send updates without switching apps",
  "Find files by what they contain",
  "Learn chords one song at a time",
  "Build routines around real life",
  "Monitor orders from one dashboard",
  "Translate messages with context",
  "Clean up photos in seconds",
  "Schedule posts for every channel",
  "Stay focused during deep work",
  "Compare listings side by side",
  "Turn checklists into repeatable systems",
  "Understand cash flow today",
  "Create screenshots for every locale",
];

export default function BlogPost() {
  const { locale } = useLoaderData<typeof loader>();

  return (
    <BlogArticleShell
      slug={SLUG}
      locale={locale}
      ctaMessage="Write one screenshot story, then reuse it across every device size and locale in Screenshot Bro."
      seoLinks={[
        {
          href: "/blog/app-store-screenshot-order",
          label: "App Store screenshot order",
          description: "place each caption where it can support the strongest screenshot.",
        },
        {
          href: "/blog/app-store-screenshot-mistakes",
          label: "App Store screenshot mistakes",
          description: "avoid vague, unsupported, or misleading screenshot claims.",
        },
        {
          href: "/blog/screenshots-that-convert",
          label: "App Store screenshots that convert",
          description: "connect screenshot copy with conversion-focused layout decisions.",
        },
      ]}
      faqs={[
        {
          question: "Does App Store screenshot text help ASO?",
          answer:
            "Screenshot text helps users understand your listing and can improve conversion, but Apple says searchability comes from app name, subtitle, keywords, and company name. Treat screenshot copy as conversion support, not keyword metadata.",
        },
        {
          question: "How long should App Store screenshot captions be?",
          answer:
            "Apple does not publish a universal caption character limit for screenshot overlays. For readability, use one short phrase or sentence that describes the visible screen.",
        },
        {
          question: "Can I put marketing claims in screenshot text?",
          answer:
            "Only if they are accurate, current, and supported by the app experience. Avoid unsupported ranking, award, price, health, financial, or performance claims.",
        },
      ]}
    >
      <p>
        App Store screenshot text should make the product easier to understand,
        not compensate for screenshots that do not show the product. The best
        captions are short, specific, and directly tied to what the user can see
        in the image.
      </p>
      <p>
        This guide was fact-checked on June 17, 2026 against Apple&apos;s{" "}
        <a
          href="https://developer.apple.com/app-store/product-page/"
          target="_blank"
          rel="noopener noreferrer"
        >
          product page guidance
        </a>{" "}
        and{" "}
        <a
          href="https://developer.apple.com/app-store/review/guidelines/"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Review Guidelines
        </a>
        . Apple says screenshots should visually communicate the app&apos;s user
        experience, should show the app in use, and may include text and image
        overlays. Apple also says metadata must accurately reflect the app&apos;s
        core experience.
      </p>

      <h2>The Rule: Caption the Proof</h2>
      <p>
        Start with the screen you are showing, then write the caption. Do not
        write a marketing claim first and force a screenshot to carry it later.
        If the screenshot shows a calendar, the text can promise planning,
        scheduling, reminders, or visibility. If the screenshot only shows a
        settings page, the caption should not promise a life-changing workflow.
      </p>

      <h2>Five Copy Formulas</h2>
      <table>
        <thead>
          <tr>
            <th>Formula</th>
            <th>Pattern</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          {COPY_FORMULAS.map((item) => (
            <tr key={item.formula}>
              <td>{item.formula}</td>
              <td>{item.pattern}</td>
              <td>{item.example}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>50 Screenshot Caption Examples</h2>
      <p>
        Use these as starting points, then make them more specific to your app.
        The safest captions are claims your actual UI proves on screen.
      </p>
      <ol>
        {CAPTION_EXAMPLES.map((example) => (
          <li key={example}>{example}</li>
        ))}
      </ol>

      <h2>Caption Length</h2>
      <p>
        There is no single Apple-published character limit for text overlays in
        screenshots. Treat that as a design constraint rather than a loophole.
        In practice, most screenshot captions should be one short sentence or a
        compact phrase. If the caption needs a line break, make the break
        intentional. If it needs three lines, the message is probably doing too
        much.
      </p>

      <h2>Words to Be Careful With</h2>
      <p>
        Be cautious with claims such as &quot;best,&quot; &quot;number one,&quot;
        &quot;guaranteed,&quot; &quot;free,&quot; &quot;secure,&quot; or
        &quot;private.&quot; Some can be used honestly, but they need to be true,
        current, and supported by the app experience. Apple&apos;s metadata rules
        focus on accuracy, appropriate audience content, rights to materials,
        and avoiding irrelevant or misleading information.
      </p>

      <h2>Before and After Examples</h2>
      <table>
        <thead>
          <tr>
            <th>Weak caption</th>
            <th>Better caption</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Powerful productivity</td>
            <td>Turn voice notes into tasks</td>
          </tr>
          <tr>
            <td>Beautiful design</td>
            <td>Preview every template before export</td>
          </tr>
          <tr>
            <td>Everything you need</td>
            <td>Track budget, bills, and savings together</td>
          </tr>
          <tr>
            <td>Easy to use</td>
            <td>Create an invoice from saved clients</td>
          </tr>
          <tr>
            <td>Stay organized</td>
            <td>Group every project by deadline</td>
          </tr>
        </tbody>
      </table>

      <h2>Policy-Safe Copy Checklist</h2>
      <ul>
        <li>The caption describes a real feature, workflow, or outcome in the current app.</li>
        <li>The image shows the app in use, not only a splash screen, logo, or title card.</li>
        <li>Any subscription, paid feature, or locked content is not presented as free if it is not free.</li>
        <li>The text avoids unsupported ranking, award, health, financial, or performance claims.</li>
        <li>Names, photos, account details, and data shown in the screenshot are fictional or cleared for use.</li>
        <li>The caption still works when localized and when viewed at search-result size.</li>
      </ul>
    </BlogArticleShell>
  );
}
