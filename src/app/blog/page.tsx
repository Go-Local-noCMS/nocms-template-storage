import type { Metadata } from "next";
import { blogPosts, type BlogPost as DataBlogPost } from "@/data/blog-posts";
import { BlogArchiveWrapper } from "@/components/blog/BlogArchiveWrapper";
import { BlogFeaturedArticle } from "@/components/blog/BlogFeaturedArticle";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import type { BlogPost } from "@/components/blog/BlogCard";
import skinConfig from "@/skin.config";

export const metadata: Metadata = {
  title: `Blog | ${skinConfig.brandName}`,
  description: `Articles, tips, and guides about self-storage from ${skinConfig.brandName}.`,
};

const POSTS_PER_PAGE = 5;

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

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
  const cardPosts = sorted.map(toCardPost);
  const featured = cardPosts[0];
  const rest = cardPosts.slice(1, POSTS_PER_PAGE);
  const totalPages = Math.max(1, Math.ceil((cardPosts.length - 1) / POSTS_PER_PAGE));

  return (
    <>
      <section
        data-nocms-component="blog-header"
        className="bg-surface py-10 lg:py-14"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog" }]} className="mb-6" />
          <h1
            data-role="heading"
            className="font-heading text-4xl sm:text-5xl font-bold text-text"
          >
            {skinConfig.brandName} blog
          </h1>
          <p data-role="subheading" className="mt-3 text-lg text-muted max-w-2xl">
            Tips, guides, and stories about packing, moving, and getting the most out of self-storage.
          </p>
        </div>
      </section>

      {featured && (
        <BlogFeaturedArticle post={featured} baseSlug="blog" />
      )}

      <BlogArchiveWrapper
        posts={rest}
        heading="Latest articles"
        page={1}
        totalPages={totalPages}
        baseHref="/blog/page/"
        baseSlug="blog"
        recentPosts={cardPosts.slice(0, 5)}
      />
    </>
  );
}
