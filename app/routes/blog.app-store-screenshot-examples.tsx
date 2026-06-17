import type { Route } from "./+types/blog.app-store-screenshot-examples";
import { BlogArticleShell } from "~/components/BlogArticleShell";
import { buildBlogPostLinks, buildBlogPostMeta } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import { useLoaderData } from "react-router";

const SLUG = "app-store-screenshot-examples";

const APP_EXAMPLES = [
  {
    name: "Instagram",
    category: "Photo and video",
    href: "https://apps.apple.com/us/app/instagram/id389801252",
    pattern: "Let familiar product moments carry the story.",
    takeaway:
      "If the interface is already recognizable, keep overlay copy restrained and spend the first screenshots on the actions users came for.",
  },
  {
    name: "Amazon Shopping",
    category: "Shopping",
    href: "https://apps.apple.com/us/app/amazon-shopping/id297606951",
    pattern: "Show breadth without turning the screenshot into a catalog.",
    takeaway:
      "Marketplace apps can use the set to move from discovery to purchase, then save secondary benefits for later images.",
  },
  {
    name: "Uber",
    category: "Travel",
    href: "https://apps.apple.com/us/app/uber-request-a-ride/id368677368",
    pattern: "Lead with the core job, not the account system.",
    takeaway:
      "For utility apps, the first screenshots should make the primary task feel immediate and low-friction.",
  },
  {
    name: "Headspace",
    category: "Health and fitness",
    href: "https://apps.apple.com/us/app/headspace-sleep-meditation/id493145008",
    pattern: "Use a calm visual system to support the product promise.",
    takeaway:
      "Wellness apps benefit from consistent colors, spacious layouts, and captions that describe outcomes rather than feature menus.",
  },
  {
    name: "Calm",
    category: "Health and fitness",
    href: "https://apps.apple.com/us/app/calm/id571800810",
    pattern: "Match screenshot tone to the emotion users want.",
    takeaway:
      "When the product sells relief, focus, or sleep, the screenshots should feel slower and simpler than a productivity dashboard.",
  },
  {
    name: "Strava",
    category: "Health and fitness",
    href: "https://apps.apple.com/us/app/strava-run-bike-walk/id426826309",
    pattern: "Turn data into motivation.",
    takeaway:
      "Activity apps can show maps, stats, and social proof, but the sequence should still point to a single user goal.",
  },
  {
    name: "Nike Run Club",
    category: "Health and fitness",
    href: "https://apps.apple.com/us/app/nike-run-club-running-coach/id387771637",
    pattern: "Pair brand energy with concrete product surfaces.",
    takeaway:
      "Strong brands still need screenshots that prove the app experience: tracking, coaching, progress, and routine.",
  },
  {
    name: "Spotify",
    category: "Music",
    href: "https://apps.apple.com/us/app/spotify-music-and-podcasts/id324684580",
    pattern: "Make content variety obvious fast.",
    takeaway:
      "Media apps should show the range of what users can enjoy, then use later screenshots for personalization and control.",
  },
  {
    name: "YouTube",
    category: "Photo and video",
    href: "https://apps.apple.com/us/app/youtube/id544007664",
    pattern: "Show the ecosystem, not just playback.",
    takeaway:
      "A mature content app can use screenshots to explain watching, creation, subscriptions, and cross-device habits.",
  },
  {
    name: "Pinterest",
    category: "Lifestyle",
    href: "https://apps.apple.com/us/app/pinterest/id429047995",
    pattern: "Use visual density as the value proposition.",
    takeaway:
      "Discovery apps can make the feed itself the proof, as long as text overlays do not fight the imagery.",
  },
  {
    name: "Slack",
    category: "Business",
    href: "https://apps.apple.com/us/app/slack/id618783545",
    pattern: "Translate workplace complexity into a small set of jobs.",
    takeaway:
      "Business screenshots should quickly separate messaging, collaboration, search, and integrations instead of showing every menu.",
  },
  {
    name: "Dropbox",
    category: "Productivity",
    href: "https://apps.apple.com/us/app/dropbox-cloud-storage-backup/id327630330",
    pattern: "Show the trust workflow end to end.",
    takeaway:
      "File and storage apps need to communicate access, backup, sharing, and safety in a simple order.",
  },
  {
    name: "Google Chrome",
    category: "Utilities",
    href: "https://apps.apple.com/us/app/google-chrome/id535886823",
    pattern: "Use screenshots to make a familiar utility feel specific.",
    takeaway:
      "For apps in crowded categories, show the distinctive workflow benefits instead of only showing the main screen.",
  },
  {
    name: "CapCut",
    category: "Photo and video",
    href: "https://apps.apple.com/us/app/capcut-photo-video-editor/id1500855883",
    pattern: "Show output and editing power together.",
    takeaway:
      "Creative tools should balance beautiful results with enough interface proof that users understand how the app helps create them.",
  },
  {
    name: "TikTok",
    category: "Entertainment",
    href: "https://apps.apple.com/us/app/tiktok-videos-shop-live/id835599320",
    pattern: "Make the feed experience instantly recognizable.",
    takeaway:
      "Entertainment apps can often rely on immersive content previews, but the set still needs to explain creation, discovery, and interaction.",
  },
  {
    name: "Robinhood",
    category: "Finance",
    href: "https://apps.apple.com/us/app/robinhood-trading-investing/id938003185",
    pattern: "Use simple visuals for high-stakes actions.",
    takeaway:
      "Finance apps should avoid visual noise and make it clear which screens are for research, action, tracking, and account management.",
  },
  {
    name: "Coinbase",
    category: "Finance",
    href: "https://apps.apple.com/us/app/coinbase-buy-crypto-stocks/id886427730",
    pattern: "Reduce category anxiety with direct product proof.",
    takeaway:
      "When the category feels risky or complex, screenshots should make navigation, asset views, and security cues easy to understand.",
  },
  {
    name: "1Password",
    category: "Productivity",
    href: "https://apps.apple.com/us/app/1password-password-manager/id1511601750",
    pattern: "Turn invisible security into visible workflows.",
    takeaway:
      "Security apps need to show what users will actually do: save, fill, share, approve, and recover access.",
  },
  {
    name: "Khan Academy",
    category: "Education",
    href: "https://apps.apple.com/us/app/khan-academy/id469863705",
    pattern: "Organize learning around progress and subjects.",
    takeaway:
      "Education apps should use screenshots to make the curriculum feel navigable, not overwhelming.",
  },
  {
    name: "Yelp",
    category: "Food and drink",
    href: "https://apps.apple.com/us/app/yelp-food-services-reviews/id284910350",
    pattern: "Show the decision path.",
    takeaway:
      "Local discovery apps can sequence search, comparison, reviews, photos, and booking so users see how a decision gets made.",
  },
  {
    name: "Gmail",
    category: "Productivity",
    href: "https://apps.apple.com/us/app/gmail-email-by-google/id422689480",
    pattern: "Make everyday work feel faster.",
    takeaway:
      "Email screenshots should focus on sorting, replying, finding, and staying current rather than generic inbox imagery.",
  },
  {
    name: "Microsoft Teams",
    category: "Business",
    href: "https://apps.apple.com/us/app/microsoft-teams/id1113153706",
    pattern: "Bundle related collaboration moments into one story.",
    takeaway:
      "Team apps should distinguish chat, meetings, files, and notifications so buyers understand the mobile workflow.",
  },
  {
    name: "Booking.com",
    category: "Travel",
    href: "https://apps.apple.com/us/app/booking-com-hotels-travel/id367003839",
    pattern: "Show search, choice, and confidence.",
    takeaway:
      "Travel screenshots work best when they move from finding options to comparing details and completing the plan.",
  },
  {
    name: "Tripadvisor",
    category: "Travel",
    href: "https://apps.apple.com/us/app/tripadvisor-plan-book-trips/id284876795",
    pattern: "Combine inspiration with decision support.",
    takeaway:
      "Planning apps can show aspirational imagery, but each screenshot should still prove a practical step in the workflow.",
  },
  {
    name: "Reddit",
    category: "News",
    href: "https://apps.apple.com/us/app/reddit/id1064216828",
    pattern: "Let community variety define the product.",
    takeaway:
      "Community apps can use screenshots to show browsing, discussion, posting, and personalization without explaining the whole network at once.",
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
      ctaMessage="Build a reusable screenshot system once, then update every device size and localization without recreating the set by hand."
      seoLinks={[
        {
          href: "/blog/app-store-screenshot-order",
          label: "App Store screenshot order",
          description: "turn example patterns into a first-three-screenshot sequence.",
        },
        {
          href: "/blog/app-store-screenshot-copywriting-examples",
          label: "App Store screenshot caption examples",
          description: "write clearer ASO copy for the screenshots you design.",
        },
        {
          href: "/blog/app-store-screenshot-mistakes",
          label: "App Store screenshot mistakes",
          description: "avoid common conversion and review problems before upload.",
        },
      ]}
      faqs={[
        {
          question: "Do App Store screenshots affect ASO?",
          answer:
            "Screenshots mainly affect conversion after users reach your listing. Apple says App Store searchability comes from app name, subtitle, keywords, and company name, so screenshots should support the promise those fields create.",
        },
        {
          question: "How many App Store screenshot examples should I study?",
          answer:
            "Study enough listings to see repeated patterns in your category, then choose a sequence that fits your own app. Copying another listing closely is weaker than adapting a proven structure to your actual user workflow.",
        },
        {
          question: "What makes a strong App Store screenshot example?",
          answer:
            "A strong example shows the app in use, explains one clear benefit, and puts the most important user outcome near the beginning of the screenshot sequence.",
        },
      ]}
    >
      <p>
        Good App Store screenshot examples are useful only if they are current.
        This list was checked on June 17, 2026 against live Apple App Store
        listing data, and every app below had current iPhone screenshot assets
        available through Apple&apos;s listing data at the time of writing.
      </p>
      <p>
        The examples are not here so you can copy their art direction. They are
        here because each listing demonstrates a screenshot decision worth
        adapting: what to lead with, how to sequence the value, and how much
        text the screenshot actually needs.
      </p>

      <h2>Apple Rules to Keep in Mind</h2>
      <p>
        Apple&apos;s product page guidance says screenshots should use images
        captured from your app&apos;s UI, and App Store product pages can feature up
        to 10 screenshots. Apple also notes that, depending on orientation, the
        first one to three screenshots can appear in search results when no app
        preview is available. That makes the start of your sequence unusually
        important.
      </p>
      <p>
        Source check: Apple&apos;s{" "}
        <a
          href="https://developer.apple.com/app-store/product-page/"
          target="_blank"
          rel="noopener noreferrer"
        >
          product page guidance
        </a>{" "}
        and{" "}
        <a
          href="https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/"
          target="_blank"
          rel="noopener noreferrer"
        >
          screenshot specifications
        </a>
        .
      </p>

      <h2>25 App Store Screenshot Examples</h2>
      <table>
        <thead>
          <tr>
            <th>App</th>
            <th>Pattern to study</th>
            <th>What to adapt</th>
          </tr>
        </thead>
        <tbody>
          {APP_EXAMPLES.map((example) => (
            <tr key={example.name}>
              <td>
                <a href={example.href} target="_blank" rel="noopener noreferrer">
                  {example.name}
                </a>
                <br />
                <span>{example.category}</span>
              </td>
              <td>{example.pattern}</td>
              <td>{example.takeaway}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Patterns These Examples Have in Common</h2>
      <h3>1. The first screenshot answers the job-to-be-done</h3>
      <p>
        The strongest listings do not spend the first image on settings,
        onboarding, sign-in, or abstract brand art. They show the task the user
        wants to complete: book a ride, track a run, edit a video, find a
        place, send a message, or finish a purchase.
      </p>

      <h3>2. Each screenshot has one job</h3>
      <p>
        A screenshot set is easier to scan when every image owns one idea. If
        one image tries to communicate analytics, collaboration, automation,
        security, and pricing, users will read none of it. Split the sequence
        into clear beats.
      </p>

      <h3>3. The interface does the proving</h3>
      <p>
        Apple&apos;s own guideline says screenshots should show the app in use.
        Marketing copy can frame the benefit, but the UI has to prove it. This
        is especially important for finance, health, productivity, and business
        apps where trust matters more than visual novelty.
      </p>

      <h3>4. Category expectations matter</h3>
      <p>
        A meditation app should not look like a trading terminal. A trading app
        should not look like a lifestyle mood board. The visual system should
        match the user&apos;s mental state at the moment they are choosing the app.
      </p>

      <h2>A Simple Screenshot Sequence to Steal</h2>
      <ol>
        <li>
          <strong>Screenshot 1:</strong> the main outcome or most valuable user
          task.
        </li>
        <li>
          <strong>Screenshot 2:</strong> the workflow that proves the promise.
        </li>
        <li>
          <strong>Screenshot 3:</strong> the differentiator: speed, automation,
          content depth, privacy, collaboration, or personalization.
        </li>
        <li>
          <strong>Screenshot 4-6:</strong> supporting features that remove
          objections.
        </li>
        <li>
          <strong>Screenshot 7-10:</strong> secondary workflows, platform
          support, dark mode, widgets, or advanced use cases.
        </li>
      </ol>

      <h2>How to Use This List Without Copying</h2>
      <p>
        Pick three apps from the table: one in your category, one with a similar
        business model, and one with a visual style you respect. Write down the
        sequence, not the colors. The useful question is not &quot;how do I make
        mine look like this?&quot; It is &quot;what did they choose to explain first, and
        what did they postpone?&quot;
      </p>
    </BlogArticleShell>
  );
}
