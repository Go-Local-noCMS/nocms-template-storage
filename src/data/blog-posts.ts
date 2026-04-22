import postsData from "./blog-posts.json";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author?: string;
  coverImage?: string;
  tags?: string[];
}

export const blogPosts: BlogPost[] = postsData as BlogPost[];
