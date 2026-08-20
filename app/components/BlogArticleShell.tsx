import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
import { ContentLayout } from "~/components/ContentLayout";
import { RelatedPosts } from "~/components/RelatedPosts";
import { buildFaqJsonLd, type BlogFaqItem } from "~/config/blog-seo";
import type { LocaleCode } from "~/config/localization";
import type { ReactNode } from "react";

type SeoGuideLink = {
  href: string;
  label: string;
  description: string;
};

export function BlogArticleShell({
  slug,
  locale,
  children,
  tldr,
  ctaMessage = "Design, localize, export, and update App Store screenshots faster in Screenshot Bro.",
  ctaButtonLabel,
  ctaHomeLinkLabel,
  seoLinks = [],
  faqs = [],
}: {
  slug: string;
  locale: LocaleCode;
  children: ReactNode;
  // One-sentence direct answer rendered before the body. Answer engines quote
  // the first extractable sentence, so comparison pages should always set it.
  tldr?: string;
  ctaMessage?: string;
  ctaButtonLabel?: string;
  // Anchor text for the CTA's homepage link. Topically relevant posts (tool
  // round-ups, alternative pages) set a descriptive one; the rest fall back to
  // the branded default in BlogCTA.
  ctaHomeLinkLabel?: string;
  seoLinks?: SeoGuideLink[];
  faqs?: BlogFaqItem[];
}) {
  return (
    <ContentLayout locale={locale}>
      <div className="max-w-3xl mx-auto">
        <article className="prose-policy">
          <BlogPostHeader slug={slug} locale={locale} />
          {tldr ? (
            <p>
              <strong>Short answer:</strong> {tldr}
            </p>
          ) : null}
          {children}
          {seoLinks.length > 0 ? (
            <section>
              <h2>Related ASO Guides</h2>
              <ul>
                {seoLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>: {link.description}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
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
        </article>
        <BlogCTA
          message={ctaMessage}
          buttonLabel={ctaButtonLabel}
          homeLinkLabel={ctaHomeLinkLabel}
          locale={locale}
        />
        <RelatedPosts currentSlug={slug} locale={locale} />
      </div>
    </ContentLayout>
  );
}
