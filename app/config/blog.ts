import type { LocaleCode } from "~/config/localization";
import { LOCALIZED_BLOG_POSTS } from "./blog-translations";

export const BLOG_CATEGORIES = ["Reference", "Guide"] as const;
export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: BlogCategory;
  keywords?: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "google-play-screenshot-sizes-requirements",
    title: "Google Play Screenshot Sizes and Requirements",
    description:
      "A practical guide to Google Play screenshot sizes, formats, and device-specific requirements for phone, tablet, Chromebook, Wear OS, TV, and more.",
    date: "2026-05-17",
    readTime: "10 min read",
    category: "Reference",
    keywords: [
      "Google Play screenshot sizes",
      "Google Play screenshot requirements",
      "google play screenshot generator",
      "Play Store screenshots",
      "Android app screenshots",
      "Google Play tablet screenshots",
      "Google Play feature graphic",
    ],
  },
  {
    slug: "ab-test-app-store-screenshots",
    title: "How to A/B Test App Store and Google Play Screenshots",
    description:
      "How to test app screenshots with Apple Product Page Optimization and Google Play Store Listing Experiments, plus what to test first.",
    date: "2026-05-17",
    readTime: "9 min read",
    category: "Guide",
    keywords: [
      "A/B test app store screenshots",
      "App Store screenshot testing",
      "Product Page Optimization screenshots",
      "Google Play Store Listing Experiments",
      "app store conversion rate optimization",
      "ASO screenshot testing",
    ],
  },
  {
    slug: "custom-product-pages-app-store-screenshots",
    title: "Custom Product Pages: App Store Screenshots for Campaigns",
    description:
      "Use App Store custom product pages to create campaign-specific screenshot sets for Apple Ads, seasonal launches, and more.",
    date: "2026-05-17",
    readTime: "8 min read",
    category: "Guide",
    keywords: [
      "custom product pages",
      "App Store custom product pages",
      "custom product page screenshots",
      "Apple Ads screenshots",
      "App Store screenshots for campaigns",
      "ASO landing pages",
    ],
  },
  {
    slug: "design-app-store-screenshots-in-figma",
    title: "How to Design App Store Screenshots in Figma",
    description:
      "A practical Figma tutorial for designing App Store screenshots: file setup, device frames, reusable components, localization, and export.",
    date: "2026-05-17",
    readTime: "11 min read",
    category: "Guide",
    keywords: [
      "how to design app store screenshots in Figma",
      "Figma app store screenshots",
      "app store screenshot design",
      "app store screenshot template",
      "app screenshot maker",
      "app store screenshots",
      "Figma alternative for app screenshots",
    ],
  },
  {
    slug: "best-app-store-screenshot-tools",
    title: "Best App Store Screenshot Tools for Indie Developers",
    description:
      "Compare Screenshot Bro with AppScreens, AppLaunchpad, Rotato, Placeit, Figma, and other tools for App Store and Google Play screenshots.",
    date: "2026-05-17",
    readTime: "12 min read",
    category: "Guide",
    keywords: [
      "app store screenshot tool",
      "app store screenshot generator",
      "google play screenshot generator",
      "app screenshot maker",
      "app store screenshots",
      "app screenshots for indie developers",
      "Figma alternative for app screenshots",
      "AppScreens alternative",
      "Rotato alternative for app screenshots",
    ],
  },
  {
    slug: "make-and-ship-screenshots-with-fastlane",
    title: "Fastlane: Make and Ship App Store Screenshots (2026 Guide)",
    description:
      "End-to-end fastlane screenshot pipeline for iOS in 2026: snapshot, frameit, and deliver — with Fastfile, Deliverfile, and a GitHub Actions workflow.",
    date: "2026-04-30",
    readTime: "15 min read",
    category: "Guide",
  },
  {
    slug: "upload-screenshots-to-app-store-connect",
    title: "How to Upload Screenshots to App Store Connect (2026 Guide)",
    description:
      "Four ways to upload App Store screenshots: the web uploader, Transporter, fastlane, the App Store Connect API, and a Mac app workflow.",
    date: "2026-04-20",
    readTime: "10 min read",
    category: "Guide",
  },
  {
    slug: "screenshot-sizes-app-store-google-play",
    title: "Screenshot Sizes for App Store and Google Play (2026)",
    description:
      "Every screenshot dimension for the Apple App Store and Google Play in 2026 — iPhone, iPad, Mac, Apple Watch, Apple TV, Vision Pro, and Android.",
    date: "2026-04-18",
    readTime: "9 min read",
    category: "Reference",
  },
  {
    slug: "app-store-screenshot-sizes",
    title: "App Store Screenshot Sizes for Every Apple Device in 2026",
    description:
      "A complete reference of accepted screenshot dimensions for iPhone, iPad, Mac, Apple Watch, Apple TV, and Apple Vision Pro.",
    date: "2026-04-08",
    readTime: "5 min read",
    category: "Reference",
  },
  {
    slug: "screenshots-that-convert",
    title: "How to Design App Store Screenshots That Actually Convert",
    description:
      "Learn the layout patterns, copy formulas, and design principles that help turn App Store visitors into downloads.",
    date: "2026-03-28",
    readTime: "8 min read",
    category: "Guide",
  },
  {
    slug: "localize-app-store-screenshots",
    title: "Localizing App Store Screenshots Without Losing Your Mind",
    description:
      "Supporting multiple languages on the App Store means multiplying your screenshot workload. Here's how to set up a system that scales.",
    date: "2026-03-15",
    readTime: "6 min read",
    category: "Guide",
  },
];

export function getLocalizedBlogPosts(locale: LocaleCode): BlogPost[] {
  if (locale === "en") return BLOG_POSTS;
  return LOCALIZED_BLOG_POSTS[locale as Exclude<LocaleCode, "en">] || BLOG_POSTS;
}
