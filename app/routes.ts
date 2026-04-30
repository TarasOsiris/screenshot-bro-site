import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("privacy", "routes/privacy.tsx"),
  route("changelog", "routes/changelog.tsx"),
  route("blog", "routes/blog._index.tsx"),
  route("blog/make-and-ship-screenshots-with-fastlane", "routes/blog.make-and-ship-screenshots-with-fastlane.tsx"),
  route("blog/upload-screenshots-to-app-store-connect", "routes/blog.upload-screenshots-to-app-store-connect.tsx"),
  route("blog/screenshot-sizes-app-store-google-play", "routes/blog.screenshot-sizes-app-store-google-play.tsx"),
  route("blog/app-store-screenshot-sizes", "routes/blog.app-store-screenshot-sizes.tsx"),
  route("blog/screenshots-that-convert", "routes/blog.screenshots-that-convert.tsx"),
  route("blog/localize-app-store-screenshots", "routes/blog.localize-app-store-screenshots.tsx"),
  route("docs/project-schema", "routes/docs.project-schema.tsx"),
  route("sitemap.xml", "routes/sitemap[.]xml.tsx"),
  route(":locale", "routes/localized-home.tsx"),
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;
