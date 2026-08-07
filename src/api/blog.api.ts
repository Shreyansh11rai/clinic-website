import { httpGet } from "@/api/http/httpClient";
import { localDatabase } from "@/database/localDatabase";
import type { BlogPost } from "@/types/content";

export function getBlogPosts(): Promise<BlogPost[]> {
  return httpGet("/blog", () => localDatabase.blogPosts);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug);
}
