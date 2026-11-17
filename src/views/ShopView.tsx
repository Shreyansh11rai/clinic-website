import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/format";
import type { Product } from "@/types/content";

export function ShopView({ products }: { products: Product[] }) {
  return (
    <Section eyebrow="Shop" title="At-home care essentials" intro="A catalog layer is ready for future checkout while staying static today.">
      <div className="grid grid-cols-3 gap-5 max-[1025px]:grid-cols-2 max-[769px]:grid-cols-1">
        {products.map((product) => (
          <article className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)]" key={product.slug}>
            <Image
              className="block h-auto max-w-full overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)]"
              src={product.image.src}
              alt={product.image.alt}
              width={420}
              height={260}
            />
            <div className="grid gap-3 p-5">
              <Badge>{formatCurrency(product.price)}</Badge>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-normal">
                {product.title}
              </h2>
              <p className="text-[var(--color-muted)]">{product.summary}</p>
              <Button href={`/shop/${product.slug}`} variant="ghost">
                View item
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
