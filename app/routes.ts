import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("privacy", "routes/privacy.tsx"),
  route("changelog", "routes/changelog.tsx"),
  route("blog", "routes/blog._index.tsx"),
  route("blog/app-store-screenshot-sizes", "routes/blog.app-store-screenshot-sizes.tsx"),
  route("blog/screenshots-that-convert", "routes/blog.screenshots-that-convert.tsx"),
  route("blog/localize-app-store-screenshots", "routes/blog.localize-app-store-screenshots.tsx"),
  route("sitemap.xml", "routes/sitemap[.]xml.tsx"),
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;
