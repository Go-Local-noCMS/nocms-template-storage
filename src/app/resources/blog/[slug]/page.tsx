import { blogPosts } from "@/data/blog-posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const dynamic = "force-static";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | Blog`, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="min-h-[60vh] bg-background py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <a href="/resources/blog" className="text-primary hover:underline text-sm">&larr; Back to Blog</a>
        {post.coverImage && (
          <img src={post.coverImage} alt={post.title} className="w-full h-64 object-cover rounded-lg mt-6" />
        )}
        <h1 className="text-4xl font-heading font-bold text-text mt-6">{post.title}</h1>
        <p className="text-muted mt-2">
          {post.date}{post.author ? ` · ${post.author}` : ""}
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs bg-surface text-muted px-2 py-1 rounded">{tag}</span>
            ))}
          </div>
        )}
        <div className="mt-8 text-text leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
}
