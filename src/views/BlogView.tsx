import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import type { BlogPost } from "@/types/content";

export function BlogView({ posts }: { posts: BlogPost[] }) {
  return (
    <Section eyebrow="Blog" title="Dental guidance patients can understand" intro="Short articles support SEO while answering the questions patients ask before booking.">
      <div className="articleList">
        {posts.map((post) => (
          <Link className="articleRow" href={`/blog/${post.slug}`} key={post.slug}>
            <Image src={post.image.src} alt={post.image.alt} width={220} height={150} />
            <div>
              <Badge>
                {post.publishedAt} · {post.readTime}
              </Badge>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
