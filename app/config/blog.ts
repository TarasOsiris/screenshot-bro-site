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
  localized?: boolean;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "app-store-screenshot-examples",
    title: "App Store Screenshot Examples: 25 Real Apps Broken Down",
    description:
      "A fact-checked teardown of 25 live App Store listings, with practical screenshot patterns you can adapt for your own iOS app.",
    date: "2026-06-17",
    readTime: "12 min read",
    category: "Guide",
    localized: false,
    keywords: [
      "App Store screenshot examples",
      "ASO screenshot examples",
      "app screenshot examples",
      "App Store screenshots inspiration",
      "iOS app screenshot examples",
      "app store screenshot design examples",
      "mobile app screenshot examples",
    ],
  },
  {
    slug: "google-play-feature-graphic-size-template-examples",
    title: "Google Play Feature Graphic Size, Template, and Examples",
    description:
      "The current Google Play feature graphic size, file requirements, layout template, design rules, and example patterns for app and game listings.",
    date: "2026-06-17",
    readTime: "8 min read",
    category: "Reference",
    localized: false,
    keywords: [
      "Google Play feature graphic size",
      "Google Play ASO graphics",
      "Google Play feature graphic template",
      "Google Play feature graphic examples",
      "feature graphic Play Store",
      "Google Play graphics requirements",
    ],
  },
  {
    slug: "app-store-screenshots-rejected-fix",
    title: "Why App Store Screenshots Get Rejected and How to Fix Them",
    description:
      "The common screenshot and metadata problems that trigger App Store rejection, based on Apple guidelines, plus a practical fix checklist.",
    date: "2026-06-17",
    readTime: "9 min read",
    category: "Guide",
    localized: false,
    keywords: [
      "App Store screenshots rejected",
      "ASO screenshot rejection",
      "App Store metadata rejected screenshots",
      "Apple screenshot rejection",
      "App Review screenshot rejection",
      "fix App Store screenshot rejection",
    ],
  },
  {
    slug: "google-play-screenshot-rejected-fix",
    title: "Why Google Play Screenshots Get Rejected and How to Fix Them",
    description:
      "A policy-based checklist for fixing rejected Google Play screenshots, preview assets, metadata issues, and device-specific screenshot problems.",
    date: "2026-06-17",
    readTime: "9 min read",
    category: "Guide",
    localized: false,
    keywords: [
      "Google Play screenshot rejected",
      "Google Play ASO rejection",
      "Google Play screenshots rejected",
      "Google Play metadata policy screenshots",
      "Play Store screenshot rejection",
      "fix Google Play screenshot rejection",
    ],
  },
  {
    slug: "app-store-screenshot-order",
    title: "App Store Screenshot Order: What to Put First",
    description:
      "An ASO ordering framework for App Store screenshots, including how search results, app previews, and the first images affect your listing.",
    date: "2026-06-17",
    readTime: "8 min read",
    category: "Guide",
    localized: false,
    keywords: [
      "App Store screenshot order",
      "ASO screenshot order",
      "first 3 App Store screenshots",
      "App Store first screenshots",
      "App Store screenshot sequence",
      "how to order app screenshots",
    ],
  },
  {
    slug: "app-store-screenshot-copywriting-examples",
    title: "App Store Screenshot Text: 50 ASO Caption Examples",
    description:
      "A practical ASO copywriting guide for App Store screenshot captions, with fact-checked policy notes and 50 reusable headline examples.",
    date: "2026-06-17",
    readTime: "10 min read",
    category: "Guide",
    localized: false,
    keywords: [
      "App Store screenshot text",
      "ASO screenshot copy",
      "app screenshot captions",
      "App Store screenshot copywriting",
      "app screenshot headline examples",
      "App Store screenshot caption examples",
    ],
  },
  {
    slug: "app-store-screenshot-mistakes",
    title: "App Store Screenshot Mistakes: 15 Issues That Hurt Installs",
    description:
      "Common ASO screenshot mistakes that weaken conversion, create review risk, or make your App Store product page harder to understand.",
    date: "2026-06-17",
    readTime: "9 min read",
    category: "Guide",
    localized: false,
    keywords: [
      "App Store screenshot mistakes",
      "ASO screenshot mistakes",
      "app screenshot mistakes",
      "bad App Store screenshots",
      "App Store screenshot best practices",
      "app store conversion mistakes",
    ],
  },
  {
    slug: "iphone-ipad-app-store-screenshots",
    title: "iPhone and iPad App Store Screenshots: What to Upload",
    description:
      "A practical ASO upload plan for iPhone and iPad App Store screenshots, including display classes, scaling behavior, and design workflow.",
    date: "2026-06-17",
    readTime: "9 min read",
    category: "Reference",
    localized: false,
    keywords: [
      "iPhone iPad App Store screenshots",
      "iPhone iPad ASO screenshots",
      "iPad App Store screenshots",
      "iPhone screenshot App Store",
      "App Store screenshot upload iPhone iPad",
      "App Store screenshot display sizes",
    ],
  },
  {
    slug: "google-play-store-listing-graphics-checklist",
    title: "Google Play Store Listing Graphics Checklist",
    description:
      "A fact-checked Google Play ASO checklist for app icons, feature graphics, screenshots, preview videos, alt text, and policy risks.",
    date: "2026-06-17",
    readTime: "10 min read",
    category: "Reference",
    localized: false,
    keywords: [
      "Google Play store listing graphics",
      "Google Play ASO checklist",
      "Google Play graphics checklist",
      "Google Play app icon feature graphic screenshots",
      "Google Play preview assets",
      "Play Store listing graphics requirements",
    ],
  },
  {
    slug: "seasonal-app-store-screenshots",
    title: "Seasonal App Store Screenshots: When and How to Update Them",
    description:
      "How to plan seasonal ASO screenshot updates for App Store and Google Play without outdated claims, review timing issues, or stale listings.",
    date: "2026-06-17",
    readTime: "9 min read",
    category: "Guide",
    localized: false,
    keywords: [
      "seasonal App Store screenshots",
      "seasonal ASO screenshots",
      "holiday app screenshots",
      "holiday app store screenshots",
      "update App Store screenshots",
      "seasonal Google Play screenshots",
    ],
  },
  {
    slug: "app-store-screenshot-localization-guide",
    title: "App Store Screenshot Localization Guide (2026)",
    description:
      "Learn how to localize App Store screenshots for more markets: languages, copy, RTL layouts, device sizes, App Store Connect upload, and repeatable exports.",
    date: "2026-06-13",
    readTime: "10 min read",
    category: "Guide",
    localized: false,
    keywords: [
      "App Store screenshot localization",
      "localize App Store screenshots",
      "localized app screenshots",
      "App Store localization",
      "ASO localization",
      "app screenshot localization",
      "localized screenshots App Store Connect",
      "app store screenshot translation",
    ],
  },
  {
    slug: "popular-figma-templates-app-store-screenshots-device-mockups",
    title: "Popular Figma Templates for App Store Screenshots and Device Mockups",
    description:
      "A practical shortlist of Figma templates and device mockup kits for App Store screenshots, plus when to move from Figma to a dedicated Screenshot Bro workflow.",
    date: "2026-05-28",
    readTime: "9 min read",
    category: "Guide",
    localized: false,
    keywords: [
      "Figma app store screenshot templates",
      "Figma device mockups",
      "iPhone mockup Figma",
      "App Store screenshot template Figma",
      "Google Play screenshot template Figma",
      "device mockup templates",
      "app screenshot mockups",
    ],
  },
  {
    slug: "app-store-screenshot-designers-creators-to-follow",
    title: "Cool App Store Screenshot Designers and Creators to Follow",
    description:
      "A practical follow list for indie developers looking for App Store screenshot design inspiration, ASO creative teardown accounts, and better visual references.",
    date: "2026-05-28",
    readTime: "8 min read",
    category: "Guide",
    localized: false,
    keywords: [
      "App Store screenshot designers",
      "App Store screenshot inspiration",
      "ASO creators",
      "app screenshot design",
      "app store screenshots",
      "app store screenshot examples",
      "mobile app marketing design",
    ],
  },
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
      "Four ways to upload App Store screenshots: the web uploader, Transporter, fastlane, the App Store Connect API, and a Mac/iPad app workflow.",
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
