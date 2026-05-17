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
    slug: "design-app-store-screenshots-in-figma",
    title: "How to Design App Store Screenshots in Figma",
    description:
      "A practical Figma tutorial for designing App Store screenshots: file setup, device frames, reusable components, localization, export settings, and when to use a dedicated screenshot tool instead.",
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
      "Compare Screenshot Bro with AppScreens, AppLaunchpad, Rotato, Placeit, Figma, and other app screenshot tools. Find the best workflow for creating App Store and Google Play screenshots faster.",
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
      "Four ways to upload App Store screenshots: the web uploader, Transporter/fastlane, the App Store Connect API, and a Mac app workflow. When to pick each, gotchas with display types and locales, and how to automate the flow.",
    date: "2026-04-20",
    readTime: "10 min read",
    category: "Guide",
  },
  {
    slug: "screenshot-sizes-app-store-google-play",
    title: "Screenshot Sizes for App Store and Google Play (2026)",
    description:
      "Every screenshot dimension you need for the Apple App Store and Google Play in 2026 — iPhone, iPad, Mac, Apple Watch, Apple TV, Vision Pro, Android phone, tablet, Chromebook, Wear OS, Android TV, Automotive, and XR.",
    date: "2026-04-18",
    readTime: "9 min read",
    category: "Reference",
  },
  {
    slug: "app-store-screenshot-sizes",
    title: "App Store Screenshot Sizes for Every Apple Device in 2026",
    description:
      "A complete reference of accepted screenshot dimensions for iPhone, iPad, Mac, Apple Watch, Apple TV, and Apple Vision Pro — plus tips for managing multiple sizes efficiently.",
    date: "2026-04-08",
    readTime: "5 min read",
    category: "Reference",
  },
  {
    slug: "screenshots-that-convert",
    title: "How to Design App Store Screenshots That Actually Convert",
    description:
      "Your first screenshots carry most of the first impression. Learn the layout patterns, copy formulas, and design principles that help turn store visitors into downloads.",
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
