import type { Metadata } from "next";
import { blogPosts } from "@/data/blog-posts";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import skinConfig from "@/skin.config";

export const metadata: Metadata = {
  title: `Blog categories | ${skinConfig.brandName}`,
  description: "Browse storage articles by category.",
};

interface CategoryEntry {
  name: string;
  slug: string;
  count: number;
}

function buildCategories(): CategoryEntry[] {
  const counts = new Map<string, number>();
  for (const post of blogPosts) {
    for (const tag of post.tags ?? []) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return Array.from(counts.entries())
    .map(([slug, count]) => ({ slug, count, name: slug.replace(/-/g, " ") }))
    .sort((a, b) => b.count - a.count);
}

export default function BlogCategoryIndexPage() {
  const categories = buildCategories();

  return (
    <>
      <section
        data-nocms-component="blog-category-header"
        className="bg-surface py-10 lg:py-14"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Blog", href: "/blog" }, { label: "Categories" }]}
            className="mb-6"
          />
          <h1
            data-role="heading"
            className="font-heading text-4xl sm:text-5xl font-bold text-text"
          >
            Blog categories
          </h1>
          <p data-role="subheading" className="mt-3 text-lg text-muted max-w-2xl">
            Browse our articles by topic.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {categories.length === 0 ? (
            <p className="text-muted">No categories yet.</p>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {categories.map((c) => (
                <li key={c.slug}>
                  <a
                    href={`/blog/category/${c.slug}`}
                    className="block rounded-lg border border-text/10 bg-surface p-5 hover:border-primary hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-heading text-lg font-semibold text-text capitalize">
                        {c.name}
                      </span>
                      <span className="text-xs font-semibold text-muted bg-background rounded-full px-3 py-1">
                        {c.count} {c.count === 1 ? "post" : "posts"}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
