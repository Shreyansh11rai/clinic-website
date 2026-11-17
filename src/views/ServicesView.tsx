import Image from "next/image";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/format";
import type { Service } from "@/types/content";

export function ServicesView({ services }: { services: Service[] }) {
  return (
    <Section eyebrow="Services" title="Treatment pages built from structured data" intro="Each service can be swapped, priced, and described without touching route code.">
      <ScrollReveal className="grid grid-cols-3 gap-5 max-[1025px]:grid-cols-2 max-[769px]:grid-cols-1" stagger>
        {services.map((service) => (
          <article className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)]" key={service.slug}>
            <Image
              className="block h-auto max-w-full overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)]"
              src={service.image.src}
              alt={service.image.alt}
              width={480}
              height={300}
            />
            <div className="grid gap-3 p-5">
              <Badge>
                {service.duration} · From {formatCurrency(service.priceFrom)}
              </Badge>
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-normal">
                {service.title}
              </h2>
              <p className="text-[var(--color-muted)]">{service.description}</p>
              <Button href={`/services/${service.slug}`}>Explore treatment</Button>
            </div>
          </article>
        ))}
      </ScrollReveal>
    </Section>
  );
}
