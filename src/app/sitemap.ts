import { careTypes } from "@/data/care-types";
import { lifeHereSections } from "@/data/life-here";
import { resourcePages } from "@/data/resources-pages";
import { blogPosts } from "@/data/blog-posts";
import type { MetadataRoute } from "next";

const BASE_URL = process.env.SITE_URL ?? "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/about/our-team",
    "/contact",
    "/schedule-tour",
    "/pricing",
    "/living-options",
    "/life-here",
    "/resources",
    "/resources/blog",
  ];

  const careTypePages = careTypes.map((ct) => `/living-options/${ct.slug}`);
  const lifeHerePages = lifeHereSections.map((s) => `/life-here/${s.slug}`);
  const resourceSubPages = resourcePages.map((r) => `/resources/${r.slug}`);
  const blogPages = blogPosts.map((p) => `/resources/blog/${p.slug}`);

  const allPages = [
    ...staticPages,
    ...careTypePages,
    ...lifeHerePages,
    ...resourceSubPages,
    ...blogPages,
  ];

  return allPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
