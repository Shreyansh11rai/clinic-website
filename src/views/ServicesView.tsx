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
      <ScrollReveal className="cardGrid" stagger>
        {services.map((service) => (
          <article className="card" key={service.slug}>
            <Image src={service.image.src} alt={service.image.alt} width={480} height={300} />
            <div className="cardBody">
              <Badge>
                {service.duration} · From {formatCurrency(service.priceFrom)}
              </Badge>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Button href={`/services/${service.slug}`}>Explore treatment</Button>
            </div>
          </article>
        ))}
      </ScrollReveal>
    </Section>
  );
}
