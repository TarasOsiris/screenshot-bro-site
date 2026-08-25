import type { ReactNode } from "react";
import { BlogCTA } from "~/components/BlogCTA";
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
import { localizedPath, type LocaleCode } from "~/config/localization";

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

// Shell for every /vs page: meta comes from buildComparisonMeta in the route,
// everything else (JSON-LD, breadcrumb, verification stamp, FAQ, related
// reading, CTA) is derived here from the page's entry in comparisons.ts.
export function ComparisonShell({
  slug,
  children,
  tldr,
  faqs = [],
  related = [],
  ctaMessage = DEFAULT_CTA,
  ctaButtonLabel,
  locale = "en",
}: {
  slug: string;
  children: ReactNode;
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
    { name: locale === "es" ? "Comparativas" : locale === "zh" ? "对比评测" : locale === "ja" ? "ツール比較" : "Comparisons", path: localizedPath(locale, "/vs") },
    { name: page.heading, path: localizedPath(locale, comparisonPath(slug)) },
  ]);

  return (
    <ContentLayout>
      {/* The CTA lives outside <article>: `.prose-policy a` is specificity
          0-1-1 and would repaint the store button's white label accent-blue,
          on top of the blue gradient. BlogArticleShell has the same shape. */}
      <div className="max-w-3xl mx-auto">
        <article className="prose-policy">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: buildComparisonArticleJsonLd(slug, locale) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: breadcrumb }}
          />

          <p className="meta">
            Comparison · {page.readTime} · Checked {checked}
          </p>
          <h1>{page.heading}</h1>
          {tldr ? (
            <p>
              <strong>Short answer:</strong> {tldr}
            </p>
          ) : null}
          <p>
            Details about {page.competitor} were checked in {checked} on{" "}
            {page.checkedAgainst}; pricing and features change, so verify there
            before deciding. If something here is out of date,{" "}
            <a href="/support">tell us</a> and we will fix it.
          </p>

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
                    <a href={link.href}>{link.label}</a> — {link.description}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </article>
        <BlogCTA message={ctaMessage} buttonLabel={ctaButtonLabel} />
      </div>
    </ContentLayout>
  );
}

export function ComparisonTable({
  competitor,
  rows,
}: {
  competitor: string;
  rows: ComparisonRow[];
}) {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>{competitor}</th>
          <th>{SITE_NAME}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.factor}>
            <td>{row.factor}</td>
            <td>{row.them}</td>
            <td>{row.us}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
