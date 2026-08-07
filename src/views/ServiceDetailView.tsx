import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/format";
import type { Service } from "@/types/content";

export function ServiceDetailView({ service }: { service: Service }) {
  return (
    <>
      <section className="detailHero">
        <Container className="detailGrid">
          <div>
            <Badge>
              {service.duration} · From {formatCurrency(service.priceFrom)}
            </Badge>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
            <Button href="/booking">Book this service</Button>
          </div>
          <Image src={service.image.src} alt={service.image.alt} width={620} height={420} priority />
        </Container>
      </section>
      <Section eyebrow="Benefits" title="What patients gain">
        <div className="twoColumnList">
          {service.benefits.map((benefit) => (
            <div className="listPanel" key={benefit}>
              {benefit}
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Process" title="How the visit works">
        <ol className="processList">
          {service.process.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </Section>
    </>
  );
}
