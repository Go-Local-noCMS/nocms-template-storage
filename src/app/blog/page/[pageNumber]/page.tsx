import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, type BlogPost as DataBlogPost } from "@/data/blog-posts";
import { BlogArchiveWrapper } from "@/components/blog/BlogArchiveWrapper";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import type { BlogPost } from "@/components/blog/BlogCard";

type Params = { pageNumber: string };
type Props = { params: Promise<Params> };

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

function getTotalPages(): number {
  if (blogPosts.length <= 1) return 1;
  return Math.max(1, Math.ceil((blogPosts.length - 1) / POSTS_PER_PAGE));
}

export function generateStaticParams(): Params[] {
  const total = getTotalPages();
  const out: Params[] = [];
  for (let i = 2; i <= total; i++) {
    out.push({ pageNumber: String(i) });
  }
  if (out.length === 0) return [{ pageNumber: "_placeholder" }];
  return out;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pageNumber } = await params;
  return { title: `Blog — page ${pageNumber}` };
}

export default async function BlogListPaginatedPage({ params }: Props) {
  const { pageNumber } = await params;
  if (pageNumber === "_placeholder") {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="mt-4 text-zinc-600">More posts coming soon.</p>
      </main>
    );
  }

  const page = Number(pageNumber);
  const totalPages = getTotalPages();
  if (!Number.isInteger(page) || page < 2 || page > totalPages) notFound();

  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
  const cardPosts = sorted.map(toCardPost);

  // Page 1 (the index) shows featured + slice(1, POSTS_PER_PAGE).
  // Subsequent pages start from offset = 1 + (page - 2) * POSTS_PER_PAGE + POSTS_PER_PAGE.
  const start = 1 + (page - 1) * POSTS_PER_PAGE;
  const slice = cardPosts.slice(start, start + POSTS_PER_PAGE);

  return (
    <>
      <section
        data-nocms-component="blog-paginated-header"
        className="bg-surface py-10 lg:py-14"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Blog", href: "/blog" }, { label: `Page ${page}` }]}
            className="mb-6"
          />
          <h1
            data-role="heading"
            className="font-heading text-4xl sm:text-5xl font-bold text-text"
          >
            Blog — page {page}
          </h1>
        </div>
      </section>

      <BlogArchiveWrapper
        posts={slice}
        heading={`Page ${page} of ${totalPages}`}
        page={page}
        totalPages={totalPages}
        baseHref="/blog/page/"
        baseSlug="blog"
        recentPosts={cardPosts.slice(0, 5)}
      />
    </>
  );
}
