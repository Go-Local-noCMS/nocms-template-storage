import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blog-posts";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

type Params = { slug: string };
type Props = { params: Promise<Params> };

export const dynamic = "force-static";

export function generateStaticParams() {
  if (blogPosts.length === 0) return [{ slug: "_placeholder" }];
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found" };
  return { title: `${post.title} | Blog`, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "_placeholder") {
    return (
      <main className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="mt-4 text-zinc-600">No posts yet.</p>
      </main>
    );
  }
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article
      data-nocms-component="blog-post"
      className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
    >
      <Breadcrumbs
        items={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
        className="mb-6"
      />
      {post.coverImage && (
        <img
          data-role="media"
          src={post.coverImage}
          alt={post.title}
          className="w-full h-72 object-cover rounded-xl mb-8"
        />
      )}
      <h1
        data-role="heading"
        className="font-heading text-4xl sm:text-5xl font-bold text-text leading-tight"
      >
        {post.title}
      </h1>
      <p data-role="subheading" className="mt-3 text-muted">
        {post.date}
        {post.author ? ` · ${post.author}` : ""}
      </p>
      {post.tags && post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <a
              key={tag}
              href={`/blog/category/${tag}`}
              className="text-xs bg-surface text-muted px-3 py-1 rounded-full hover:text-primary"
            >
              {tag}
            </a>
          ))}
        </div>
      )}
      <div
        className="mt-8 text-text leading-relaxed prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className="mt-12 pt-8 border-t border-text/10">
        <a
          data-role="cta"
          href="/blog"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
        >
          ← Back to all articles
        </a>
      </div>
    </article>
  );
}
