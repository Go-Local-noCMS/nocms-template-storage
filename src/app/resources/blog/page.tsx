import { blogPosts } from "@/data/blog-posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Senior Living",
  description: "Articles, guides, and insights about senior living, wellness, and community life.",
};

export default function BlogPage() {
  if (blogPosts.length === 0) {
    return (
      <div className="min-h-[60vh] bg-background py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-heading font-bold text-text">Blog</h1>
          <p className="text-muted mt-4">No posts yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-heading font-bold text-text mb-12">Blog</h1>
        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <a
              key={post.slug}
              href={`/resources/blog/${post.slug}`}
              className="block p-6 bg-surface rounded-lg hover:shadow-lg transition-shadow"
            >
              {post.coverImage && (
                <img src={post.coverImage} alt={post.title} className="w-full h-48 object-cover rounded mb-4" />
              )}
              <h2 className="text-2xl font-heading font-semibold text-text">{post.title}</h2>
              <p className="text-muted mt-1 text-sm">
                {post.date}{post.author ? ` · ${post.author}` : ""}
              </p>
              <p className="text-text mt-3">{post.excerpt}</p>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-background text-muted px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
