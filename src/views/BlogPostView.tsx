import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import type { BlogPost } from "@/types/content";

export function BlogPostView({ post }: { post: BlogPost }) {
  return (
    <article className="articleDetail">
      <Container>
        <Badge>
          {post.publishedAt} · {post.readTime}
        </Badge>
        <h1>{post.title}</h1>
        <p className="lead">{post.excerpt}</p>
        <Image src={post.image.src} alt={post.image.alt} width={900} height={420} priority />
        <div className="prose">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </article>
  );
}
