"use client";

import * as React from "react";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { blogPosts, type BlogPost as DataBlogPost } from "@/data/blog-posts";
import { BlogCard, type BlogPost } from "@/components/blog/BlogCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

function toCardPost(post: DataBlogPost): BlogPost {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    publishedAt: post.date,
    coverImage: post.coverImage ? { src: post.coverImage, alt: post.title } : undefined,
    category: post.tags?.[0],
  };
}

function matches(post: DataBlogPost, q: string): boolean {
  if (!q) return false;
  const needle = q.toLowerCase();
  if (post.title.toLowerCase().includes(needle)) return true;
  if (post.excerpt.toLowerCase().includes(needle)) return true;
  if (post.tags?.some((t) => t.toLowerCase().includes(needle))) return true;
  if (post.content.toLowerCase().includes(needle)) return true;
  return false;
}

export default function BlogSearchPage() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState("");

  const results = useMemo(() => {
    if (!submitted) return [];
    return blogPosts.filter((p) => matches(p, submitted)).map(toCardPost);
  }, [submitted]);

  return (
    <>
      <section
        data-nocms-component="blog-search-header"
        className="bg-surface py-10 lg:py-14"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Blog", href: "/blog" }, { label: "Search" }]}
            className="mb-6"
          />
          <h1
            data-role="heading"
            className="font-heading text-4xl sm:text-5xl font-bold text-text"
          >
            Search the blog
          </h1>
          <p data-role="subheading" className="mt-3 text-muted max-w-2xl">
            Find articles by keyword, topic, or tag.
          </p>

          <form
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(query.trim());
            }}
            className="mt-6 flex gap-2 max-w-xl"
          >
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted"
                aria-hidden="true"
              />
              <input
                type="search"
                name="q"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search posts…"
                className="w-full h-12 pl-10 pr-3 rounded-md border border-text/15 bg-background text-text shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-primary text-white font-semibold px-5 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {!submitted ? (
            <p className="text-muted">
              Enter a keyword above to search the blog.
            </p>
          ) : results.length === 0 ? (
            <p className="text-muted">
              No articles found for <strong>{submitted}</strong>.
            </p>
          ) : (
            <>
              <p className="text-muted mb-6">
                Found {results.length} {results.length === 1 ? "article" : "articles"} for{" "}
                <strong className="text-text">{submitted}</strong>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((post, idx) => (
                  <BlogCard key={post.slug} post={post} baseSlug="blog" index={idx} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
