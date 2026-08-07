import { BlogView } from "@/views/BlogView";
import { buildMetadata } from "@/config/seo.config";
import { listBlogPosts } from "@/services/blog.service";

export function generateMetadata() {
  return buildMetadata("/blog");
}

export default async function BlogPage() {
  const posts = await listBlogPosts();
  return <BlogView posts={posts} />;
}
