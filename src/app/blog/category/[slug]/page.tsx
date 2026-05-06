import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, type BlogPost as DataBlogPost } from "@/data/blog-posts";
import { BlogArchiveWrapper } from "@/components/blog/BlogArchiveWrapper";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import type { BlogPost } from "@/components/blog/BlogCard";

type Params = { slug: string };
type Props = { params: Promise<Params> };

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

function listCategorySlugs(): string[] {
  const set = new Set<string>();
  for (const p of blogPosts) {
    for (const tag of p.tags ?? []) set.add(tag);
  }
  return Array.from(set);
}

export function generateStaticParams(): Params[] {
  const slugs = listCategorySlugs();
  if (slugs.length === 0) return [{ slug: "_placeholder" }];
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "_placeholder") return { title: "Category" };
  return { title: `${slug} | Blog category` };
}

export default async function BlogCategoryPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "_placeholder") {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Categories</h1>
        <p className="mt-4 text-zinc-600">No categories yet.</p>
      </main>
    );
  }

  const matches = blogPosts.filter((p) => p.tags?.includes(slug));
  if (matches.length === 0) notFound();

  const cardPosts = matches.map(toCardPost);
  const recent = blogPosts.slice(0, 5).map(toCardPost);

  return (
    <>
      <section
        data-nocms-component="blog-category-header"
        className="bg-surface py-10 lg:py-14"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: "Categories", href: "/blog/category" },
              { label: slug },
            ]}
            className="mb-6"
          />
          <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
            Category
          </p>
          <h1
            data-role="heading"
            className="font-heading text-4xl sm:text-5xl font-bold text-text capitalize"
          >
            {slug.replace(/-/g, " ")}
          </h1>
          <p data-role="subheading" className="mt-3 text-lg text-muted">
            {cardPosts.length} {cardPosts.length === 1 ? "article" : "articles"}
          </p>
        </div>
      </section>

      <BlogArchiveWrapper
        posts={cardPosts}
        heading={`Articles tagged "${slug}"`}
        baseSlug="blog"
        recentPosts={recent}
      />
    </>
  );
}
