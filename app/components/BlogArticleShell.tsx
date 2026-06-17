import { BlogCTA } from "~/components/BlogCTA";
import { BlogPostHeader } from "~/components/BlogPostHeader";
import { ContentLayout } from "~/components/ContentLayout";
import { RelatedPosts } from "~/components/RelatedPosts";
import type { LocaleCode } from "~/config/localization";
import type { ReactNode } from "react";

type SeoGuideLink = {
  href: string;
  label: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export function BlogArticleShell({
  slug,
  locale,
  children,
  ctaMessage = "Design, localize, export, and update App Store screenshots faster in Screenshot Bro.",
  ctaButtonLabel,
  seoLinks = [],
  faqs = [],
}: {
  slug: string;
  locale: LocaleCode;
  children: ReactNode;
  ctaMessage?: string;
  ctaButtonLabel?: string;
  seoLinks?: SeoGuideLink[];
  faqs?: FaqItem[];
}) {
  return (
    <ContentLayout locale={locale}>
      <div className="max-w-3xl mx-auto">
        <article className="prose-policy">
          <BlogPostHeader slug={slug} locale={locale} />
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
        <BlogCTA message={ctaMessage} buttonLabel={ctaButtonLabel} />
        <RelatedPosts currentSlug={slug} locale={locale} />
      </div>
    </ContentLayout>
  );
}
