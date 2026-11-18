import { notFound } from "next/navigation";
import { BlogPostView } from "@/views/BlogPostView";
import { buildMetadata } from "@/config/seo.config";
import { blogSlugs, readBlogPost } from "@/services/blog.service";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await blogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await readBlogPost(slug);

  if (!post) {
    return buildMetadata("/blog");
  }

  return buildMetadata(`/blog/${slug}`, {
    title: `${post.title} | Doomsphere Dental Studio`,
    description: post.excerpt,
    canonical: `/blog/${slug}`,
    keywords: ["dental care", "oral health", post.title],
    ogImage: post.image.src,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await readBlogPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostView post={post} />;
}
