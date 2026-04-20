export const BLOG_CATEGORIES = ["Reference", "Guide"] as const;
export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: BlogCategory;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "upload-screenshots-to-app-store-connect",
    title: "How to Upload Screenshots to App Store Connect (2026 Guide)",
    description:
      "Three ways to upload App Store screenshots: the web uploader, Transporter/fastlane, and the App Store Connect API. When to pick each, gotchas with display types and locales, and how to automate the whole flow from your Mac.",
    date: "2026-04-20",
    readTime: "10 min read",
    category: "Guide",
  },
  {
    slug: "screenshot-sizes-app-store-google-play",
    title: "Screenshot Sizes for App Store and Google Play (2026)",
    description:
      "Every screenshot dimension you need for the Apple App Store and Google Play in 2026 — iPhone, iPad, Mac, Apple Watch, Apple TV, Vision Pro, Android phone, tablet, Wear OS, and Android TV.",
    date: "2026-04-18",
    readTime: "9 min read",
    category: "Reference",
  },
  {
    slug: "app-store-screenshot-sizes",
    title: "App Store Screenshot Sizes for Every Apple Device in 2026",
    description:
      "A complete reference of required screenshot dimensions for iPhone, iPad, Mac, and Apple Watch — plus tips for managing multiple sizes efficiently.",
    date: "2026-04-08",
    readTime: "5 min read",
    category: "Reference",
  },
  {
    slug: "screenshots-that-convert",
    title: "How to Design App Store Screenshots That Actually Convert",
    description:
      "The first two screenshots decide whether someone taps 'Get'. Learn the layout patterns, copy formulas, and design principles that drive downloads.",
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
