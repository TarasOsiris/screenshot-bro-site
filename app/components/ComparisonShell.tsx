import type { ReactNode } from "react";
import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostLayout, BlogTocDisclosure } from "~/components/BlogPostLayout";
import { ContentLayout } from "~/components/ContentLayout";
import { buildFaqJsonLd, type BlogFaqItem } from "~/config/blog-seo";
import { buildComparisonArticleJsonLd } from "~/config/comparison-seo";
import {
  comparisonPath,
  formatMonthYear,
  getComparisonPage,
} from "~/config/comparisons";
import { buildBreadcrumbJsonLd } from "~/config/meta";
import { SITE_NAME } from "~/config/site";
import { type LocaleCode } from "~/config/localization";
import { localeHref } from "~/config/localized-routes";

export type RelatedLink = {
  href: string;
  label: string;
  description: string;
};

export type ComparisonRow = {
  factor: string;
  them: ReactNode;
  us: ReactNode;
};

const DEFAULT_CTA =
  "Try Screenshot Bro on one real listing — the free tier exports watermark-free, so you can judge it against any tool here.";

const COMPARISON_BREADCRUMB_NAMES: Record<LocaleCode, string> = {
  en: "Comparisons",
  es: "Comparativas",
  zh: "对比评测",
  ja: "ツール比較",
  de: "Vergleiche",
  fr: "Comparatifs",
  pt: "Comparações",
  it: "Confronti",
  ko: "비교",
  ar: "المقارنات",
  hi: "तुलना",
  uk: "Порівняння",
  pl: "Porównania",
  tr: "Karşılaştırmalar",
  nl: "Vergelijkingen",
  id: "Perbandingan",
  vi: "So sánh",
  th: "การเปรียบเทียบ",
  sv: "Jämförelser",
  da: "Sammenligninger",
  fi: "Vertailut",
  no: "Sammenligninger",
  cs: "Srovnání",
  ro: "Comparații",
  ms: "Perbandingan",
};

export function ComparisonShell({
  slug,
  children,
  rows,
  tldr,
  faqs = [],
  related = [],
  ctaMessage = DEFAULT_CTA,
  ctaButtonLabel,
  locale = "en",
}: {
  slug: string;
  children: ReactNode;
  // The side-by-side table, shown right after the short answer so the page
  // answers first and explains after.
  rows: ComparisonRow[];
  // One- or two-sentence direct answer. Answer engines quote the first
  // extractable sentence, so it should stand on its own.
  tldr?: ReactNode;
  faqs?: BlogFaqItem[];
  related?: RelatedLink[];
  ctaMessage?: string;
  ctaButtonLabel?: string;
  locale?: LocaleCode;
}) {
  const page = getComparisonPage(slug);
  const checked = formatMonthYear(page.lastVerified);
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: COMPARISON_BREADCRUMB_NAMES[locale] || COMPARISON_BREADCRUMB_NAMES.en, path: localeHref(locale, "/vs") },
    { name: page.heading, path: localeHref(locale, comparisonPath(slug)) },
  ]);

  return (
    <ContentLayout locale={locale}>
      {/* The CTA lives outside <article>: app.css is unlayered, so
          `.prose-policy a` beats anything Tailwind emits into @layer utilities
          no matter the specificity — inside, it repaints the store button's
          white label accent-blue on the blue gradient. Lowering the rule's
          specificity (`:where()`) therefore does not help; only not matching
          the element does. BlogArticleShell and vs._index have the same shape. */}
      <BlogPostLayout locale={locale} responsiveTables={false}>
        <article className="prose-policy">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: buildComparisonArticleJsonLd(slug, locale) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: breadcrumb }}
          />

          <p className="meta mb-4!">
            Comparison · {page.readTime} · Checked {checked}
          </p>
          <h1 className="text-[1.875rem]! leading-[1.12] text-balance sm:text-[2.25rem]! mb-6!">{page.heading}</h1>
          {tldr ? (
            <div className="mb-8 rounded-2xl border border-accent/25 bg-accent/[0.05] px-5 py-4 sm:px-6 sm:py-5">
              <p className="mb-1.5! font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light">
                Short answer
              </p>
              <p className="mb-0! text-ink/80">{tldr}</p>
            </div>
          ) : null}

          <h2>Side-by-side</h2>
          <ComparisonTable competitor={page.competitor} rows={rows} />
          <p className="mt-3 text-[13px] text-ink/55">
            Details about {page.competitor} were checked in {checked} on{" "}
            {page.checkedAgainst}; pricing and features change, so verify there
            before deciding. If something here is out of date,{" "}
            <a href={localeHref(locale, "/support")}>tell us</a> and we will fix it.
          </p>

          <div className="mt-10">
            <BlogTocDisclosure />
          </div>

          {children}

          {faqs.length > 0 ? (
            <section>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: buildFaqJsonLd(faqs) }}
              />
              <h2>FAQ</h2>
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </section>
          ) : null}

          {related.length > 0 ? (
            <section>
              <h2>Related reading</h2>
              <ul>
                {related.map((link) => (
                  <li key={link.href}>
                    <a href={localeHref(locale, link.href)}>{link.label}</a> — {link.description}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </article>
        <BlogCTA message={ctaMessage} buttonLabel={ctaButtonLabel} locale={locale} />
      </BlogPostLayout>
    </ContentLayout>
  );
}

// On phones each row stacks: the factor on top, the two answers side by side
// under labels. `!` because .prose-policy's td padding and border are unlayered.
const STACKED_CELL =
  "align-top max-sm:border-0! max-sm:p-0! max-sm:before:mb-0.5 max-sm:before:block max-sm:before:font-mono max-sm:before:text-[10px] max-sm:before:uppercase max-sm:before:tracking-[0.14em] max-sm:before:text-ink/45 max-sm:before:content-[attr(data-label)]";

export function ComparisonTable({
  competitor,
  rows,
}: {
  competitor: string;
  rows: ComparisonRow[];
}) {
  return (
    <table className="max-sm:block">
      <thead className="max-sm:sr-only">
        <tr>
          <th className="w-[22%]">
            <span className="sr-only">Factor</span>
          </th>
          <th className="w-[39%]">{competitor}</th>
          <th className="w-[39%] text-accent-light! bg-accent/[0.05]">{SITE_NAME}</th>
        </tr>
      </thead>
      <tbody className="max-sm:block">
        {rows.map((row) => (
          <tr
            key={row.factor}
            className="max-sm:grid max-sm:grid-cols-2 max-sm:gap-x-4 max-sm:gap-y-2 max-sm:border-b max-sm:border-ink/[0.08] max-sm:py-4"
          >
            <td className="align-top font-medium text-ink/85 max-sm:col-span-2 max-sm:border-0! max-sm:p-0! max-sm:font-display max-sm:font-semibold">
              {row.factor}
            </td>
            <td data-label={competitor} className={STACKED_CELL}>
              {row.them}
            </td>
            <td
              data-label={SITE_NAME}
              className={`${STACKED_CELL} bg-accent/[0.05] max-sm:bg-transparent max-sm:before:text-accent-light`}
            >
              {row.us}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
