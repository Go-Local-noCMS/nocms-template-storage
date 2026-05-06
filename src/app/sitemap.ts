import { blogPosts } from "@/data/blog-posts";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = process.env.SITE_URL ?? "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/pricing",
    "/resources",
    "/resources/blog",
  ];

  const blogPages = blogPosts.map((p) => `/resources/blog/${p.slug}`);

  const allPages = [...staticPages, ...blogPages];

  return allPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
