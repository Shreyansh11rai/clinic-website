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
      <section className="py-20 pb-12">
        <Container className="grid grid-cols-2 items-center gap-[clamp(2rem,5vw,4.5rem)] max-[769px]:grid-cols-1">
          <div className="grid gap-5">
            <Badge>{formatCurrency(product.price)}</Badge>
            <h1 className="max-w-[12ch] text-[clamp(3.25rem,8vw,6.7rem)] leading-[0.96] tracking-normal">
              {product.title}
            </h1>
            <p className="max-w-[62ch] text-[1.12rem] text-[var(--color-muted)]">{product.summary}</p>
            <Button href="/contact">Ask the clinic</Button>
          </div>
          <Image className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)]" src={product.image.src} alt={product.image.alt} width={620} height={420} priority />
        </Container>
      </section>
      <Section eyebrow="Included" title="What comes with it">
        <div className="grid grid-cols-2 gap-5 max-[769px]:grid-cols-1">
          {product.includes.map((item) => (
            <div className="grid gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-[var(--color-muted)]" key={item}>
              {item}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
