import Image from "next/image";
import { AnimatedCard } from "@/components/animation/AnimatedCard";
import { HoverTilt } from "@/components/animation/HoverTilt";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { brandConfig } from "@/config/brand.config";
import { formatCurrency } from "@/lib/format";
import type { Service, TeamMember, Testimonial } from "@/types/content";

type HomeViewProps = {
  services: Service[];
  stats: Array<{ value: string; label: string }>;
  testimonials: Testimonial[];
  team: TeamMember[];
};

export function HomeView({
  services,
  stats,
  testimonials,
  team,
}: HomeViewProps) {
  return (
    <>
      <section className="min-h-[calc(100vh-76px)] bg-[image:var(--gradient-hero)] py-[clamp(3rem,7vw,6rem)] pb-12 max-[769px]:min-h-0">
        <Container className="grid grid-cols-2 items-center gap-[clamp(2rem,5vw,4.5rem)] max-[769px]:grid-cols-1">
          <div className="grid gap-6">
            <Badge>Family, cosmetic, and urgent dental care</Badge>
            <h1 className="max-w-[12ch] text-[clamp(3.25rem,8vw,6.7rem)] leading-[0.96] tracking-normal">
              {brandConfig.clinicName}
            </h1>
            <p className="max-w-[62ch] text-[1.12rem] text-[var(--color-muted)]">{brandConfig.tagline}</p>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="/booking">Book appointment</Button>
              <Button href="/services" variant="secondary">
                View services
              </Button>
            </div>
          </div>
          <HoverTilt className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)]">
            <Image
              className="h-auto max-w-full"
              src="/images/clinic-hero.svg"
              alt="Modern dental treatment room"
              width={760}
              height={560}
              priority
            />
          </HoverTilt>
        </Container>
      </section>

      <Section className="!bg-[var(--color-primary-strong)] !py-8 text-white">
        <ScrollReveal className="grid grid-cols-3 gap-5 max-[769px]:grid-cols-1" stagger>
          {stats.map((stat) => (
            <div className="grid gap-1" key={stat.label}>
              <strong className="text-[2rem] leading-none">{stat.value}</strong>
              <span className="text-white/75">{stat.label}</span>
            </div>
          ))}
        </ScrollReveal>
      </Section>

      <Section
        eyebrow="Care paths"
        title="A calmer way to solve dental problems"
        intro="Patients get a plain-language diagnosis, treatment options, and a realistic plan before treatment begins."
      >
        <ScrollReveal className="grid grid-cols-3 gap-5 max-[1025px]:grid-cols-2 max-[769px]:grid-cols-1" stagger>
          {services.slice(0, 4).map((service) => (
            <AnimatedCard key={service.slug}>
              <Image
                className="block h-auto max-w-full"
                src={service.image.src}
                alt={service.image.alt}
                width={420}
                height={260}
              />
              <div className="grid gap-3 p-5">
                <Badge>From {formatCurrency(service.priceFrom)}</Badge>
                <h3 className="text-[1.22rem] leading-[1.25] tracking-normal">{service.title}</h3>
                <p className="text-[var(--color-muted)]">{service.summary}</p>
                <Button href={`/services/${service.slug}`} variant="ghost">
                  Service details
                </Button>
              </div>
            </AnimatedCard>
          ))}
        </ScrollReveal>
      </Section>

      <Section
        className="!bg-[var(--color-surface-muted)]"
        eyebrow="Clinical team"
        title="Designed for repeatable, predictable visits"
        intro="The template supports staff profiles, proof points, treatment pages, and booking flows without hard-coded page copy."
      >
        <ScrollReveal className="grid grid-cols-2 gap-5 max-[769px]:grid-cols-1" stagger>
          {team.map((member) => (
            <div className="grid gap-3 p-5" key={member.name}>
              <Image
                className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)]"
                src={member.image.src}
                alt={member.image.alt}
                width={320}
                height={260}
              />
              <h3 className="text-[1.22rem] leading-[1.25] tracking-normal">{member.name}</h3>
              <p className="text-[var(--color-muted)]">{member.role}</p>
            </div>
          ))}
        </ScrollReveal>
      </Section>

      <Section eyebrow="Patient notes" title="Care that keeps people informed">
        <ScrollReveal className="grid grid-cols-2 gap-5 max-[769px]:grid-cols-1" stagger>
          {testimonials.map((testimonial) => (
            <blockquote className="border-l-4 border-[var(--color-accent)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-sm)]" key={testimonial.name}>
              <p>“{testimonial.quote}”</p>
              <cite className="grid not-italic font-extrabold">
                {testimonial.name}
                <span className="font-normal text-[var(--color-muted)]">{testimonial.context}</span>
              </cite>
            </blockquote>
          ))}
        </ScrollReveal>
      </Section>
    </>
  );
}
