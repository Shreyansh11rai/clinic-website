import { getBlogPostBySlug, getBlogPosts } from "@/api/blog.api";

export async function listBlogPosts() {
  return getBlogPosts();
}

export async function readBlogPost(slug: string) {
  return getBlogPostBySlug(slug);
}

export async function blogSlugs() {
  const posts = await getBlogPosts();
  return posts.map((post) => post.slug);
}
