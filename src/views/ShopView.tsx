import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/format";
import type { Product } from "@/types/content";

export function ShopView({ products }: { products: Product[] }) {
  return (
    <Section eyebrow="Shop" title="At-home care essentials" intro="A catalog layer is ready for future checkout while staying static today.">
      <div className="cardGrid">
        {products.map((product) => (
          <article className="card" key={product.slug}>
            <Image src={product.image.src} alt={product.image.alt} width={420} height={260} />
            <div className="cardBody">
              <Badge>{formatCurrency(product.price)}</Badge>
              <h2>{product.title}</h2>
              <p>{product.summary}</p>
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
