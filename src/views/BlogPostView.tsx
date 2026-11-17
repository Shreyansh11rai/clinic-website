import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import type { BlogPost } from "@/types/content";

export function BlogPostView({ post }: { post: BlogPost }) {
  return (
    <article className="py-20 pb-12 max-[769px]:py-12">
      <Container>
        <Badge>
          {post.publishedAt} · {post.readTime}
        </Badge>
        <h1 className="max-w-[12ch] text-[clamp(3.25rem,8vw,6.7rem)] leading-[0.96] tracking-normal">
          {post.title}
        </h1>
        <p className="max-w-[62ch] text-[1.12rem] text-[var(--color-muted)]">{post.excerpt}</p>
        <Image className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)]" src={post.image.src} alt={post.image.alt} width={900} height={420} priority />
        <div className="grid max-w-[760px] gap-5 text-[1.12rem]">
          {post.body.map((paragraph) => (
            <p className="text-[var(--color-muted)]" key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </article>
  );
}
