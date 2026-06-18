import type { Route } from "./+types/blog.how-many-app-store-screenshots";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "how-many-app-store-screenshots";

const LIMITS = [
  {
    store: "App Store (iPhone)",
    min: "1 required",
    max: "10",
    recommend: "5–8",
  },
  {
    store: "App Store (iPad)",
    min: "1 required (if you support iPad)",
    max: "10",
    recommend: "5–8",
  },
  {
    store: "App Store (Mac)",
    min: "1 required (if you ship a Mac app)",
    max: "10",
    recommend: "4–6",
  },
  {
    store: "Google Play (phone)",
    min: "2 required",
    max: "8",
    recommend: "5–8",
  },
  {
    store: "Google Play (tablet)",
    min: "Optional",
    max: "8",
    recommend: "4–8 if you target tablets",
  },
] as const;

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
      ctaMessage="Design a full set once and reuse it across devices, locales, and sizes in Screenshot Bro."
      seoLinks={[
        {
          href: "/blog/app-store-screenshot-order",
          label: "Screenshot order",
          description: "decide what each of those screenshots should say.",
        },
        {
          href: "/blog/screenshots-that-convert",
          label: "Screenshots that convert",
          description: "make every slot you use earn its place.",
        },
        {
          href: "/blog/google-play-screenshot-sizes-requirements",
          label: "Google Play screenshot requirements",
          description: "the size and count rules for the Play side.",
        },
      ]}
      faqs={[
        {
          question: "How many screenshots can you have on the App Store?",
          answer:
            "Up to 10 per device type per localization. You need at least one for the largest iPhone and iPad you support. Most apps use five to eight.",
        },
        {
          question: "How many screenshots does Google Play require?",
          answer:
            "Google Play requires a minimum of 2 phone screenshots and allows up to 8. Tablet screenshots are optional but recommended if you target tablets.",
        },
        {
          question: "How many screenshots should I actually use?",
          answer:
            "Five to eight is the practical sweet spot on both stores. It is enough to cover your core benefit, key features, and social proof without burying your strongest images. Quality and order matter far more than hitting the maximum.",
        },
        {
          question: "Do the first screenshots matter most?",
          answer:
            "Yes. Apple can show the first one to three screenshots in search results, and most users never scroll to the end of the gallery. Put your strongest images first regardless of how many you upload.",
        },
      ]}
    >
      <p>
        There are two questions hiding in &quot;how many screenshots should I
        use&quot;: how many the stores <em>allow</em>, and how many you should
        <em> actually</em> upload. This guide answers both for the App Store and
        Google Play in 2026.
      </p>

      <h2>The Limits</h2>
      <table>
        <thead>
          <tr>
            <th>Store / device</th>
            <th>Minimum</th>
            <th>Maximum</th>
            <th>Recommended</th>
          </tr>
        </thead>
        <tbody>
          {LIMITS.map((row) => (
            <tr key={row.store}>
              <td>{row.store}</td>
              <td>{row.min}</td>
              <td>{row.max}</td>
              <td>{row.recommend}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        On the App Store, the count is per device type and per localization, so
        a fully localized listing multiplies quickly. On Google Play, the phone
        minimum of two is a hard requirement — listings with fewer cannot
        publish.
      </p>

      <h2>How Many You Should Actually Use</h2>
      <p>
        Maxing out at 10 is rarely the right call. Five to eight strong
        screenshots almost always beat ten mediocre ones, because users skim and
        the gallery tail goes unseen. A reliable structure:
      </p>
      <ol>
        <li>
          <strong>1–2:</strong> the core benefit and the main job your app does.
        </li>
        <li>
          <strong>3–5:</strong> the features that prove and differentiate that
          benefit.
        </li>
        <li>
          <strong>6–8:</strong> social proof, secondary features, platform
          support, or objection-removers.
        </li>
      </ol>
      <p>
        Add a ninth or tenth only if it earns its place. For deciding what each
        slot says, see{" "}
        <a href="/blog/app-store-screenshot-order">screenshot order</a> and{" "}
        <a href="/blog/screenshots-that-convert">screenshots that convert</a>.
      </p>

      <h2>Front-Load Your Best Work</h2>
      <p>
        Whatever number you choose, the first images carry the weight. Apple can
        surface the first one to three screenshots directly in search results,
        and most users decide before scrolling. Order beats quantity: a sharp
        three-image opening will out-convert a sprawling, unfocused set of ten.
      </p>
    </BlogArticleShell>
  );
}
