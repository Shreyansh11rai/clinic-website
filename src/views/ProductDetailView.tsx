import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/format";
import type { Product } from "@/types/content";

export function ProductDetailView({ product }: { product: Product }) {
  return (
    <>
      <section className="detailHero">
        <Container className="detailGrid">
          <div>
            <Badge>{formatCurrency(product.price)}</Badge>
            <h1>{product.title}</h1>
            <p>{product.summary}</p>
            <Button href="/contact">Ask the clinic</Button>
          </div>
          <Image src={product.image.src} alt={product.image.alt} width={620} height={420} priority />
        </Container>
      </section>
      <Section eyebrow="Included" title="What comes with it">
        <div className="twoColumnList">
          {product.includes.map((item) => (
            <div className="listPanel" key={item}>
              {item}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
