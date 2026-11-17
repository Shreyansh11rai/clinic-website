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
      <section className="py-20 pb-12">
        <Container className="grid grid-cols-2 items-center gap-[clamp(2rem,5vw,4.5rem)] max-[769px]:grid-cols-1">
          <div className="grid gap-5">
            <Badge>
              {service.duration} · From {formatCurrency(service.priceFrom)}
            </Badge>
            <h1 className="max-w-[12ch] text-[clamp(3.25rem,8vw,6.7rem)] leading-[0.96] tracking-normal">
              {service.title}
            </h1>
            <p className="max-w-[62ch] text-[1.12rem] text-[var(--color-muted)]">{service.description}</p>
            <Button href="/booking">Book this service</Button>
          </div>
          <Image className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)]" src={service.image.src} alt={service.image.alt} width={620} height={420} priority />
        </Container>
      </section>
      <Section eyebrow="Benefits" title="What patients gain">
        <div className="grid grid-cols-2 gap-5 max-[769px]:grid-cols-1">
          {service.benefits.map((benefit) => (
            <div className="grid gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-[var(--color-muted)]" key={benefit}>
              {benefit}
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Process" title="How the visit works">
        <ol className="grid list-decimal gap-3 pl-[1.3rem] text-[1.1rem]">
          {service.process.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </Section>
    </>
  );
}
