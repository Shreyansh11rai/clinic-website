import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import type { BlogPost } from "@/types/content";

export function BlogView({ posts }: { posts: BlogPost[] }) {
  return (
    <Section eyebrow="Blog" title="Dental guidance patients can understand" intro="Short articles support SEO while answering the questions patients ask before booking.">
      <div className="grid gap-4">
        {posts.map((post) => (
          <Link
            className="grid grid-cols-[220px_1fr] items-center gap-5 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 max-[769px]:grid-cols-1"
            href={`/blog/${post.slug}`}
            key={post.slug}
          >
            <Image
              className="w-[220px] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)] max-[769px]:w-full"
              src={post.image.src}
              alt={post.image.alt}
              width={220}
              height={150}
            />
            <div className="grid gap-2">
              <Badge>
                {post.publishedAt} · {post.readTime}
              </Badge>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-normal">
                {post.title}
              </h2>
              <p className="text-[var(--color-muted)]">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
