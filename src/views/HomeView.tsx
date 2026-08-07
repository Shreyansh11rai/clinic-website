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

export function HomeView({ services, stats, testimonials, team }: HomeViewProps) {
  return (
    <>
      <section className="hero">
        <Container className="heroGrid">
          <div className="heroCopy">
            <Badge>Family, cosmetic, and urgent dental care</Badge>
            <h1>{brandConfig.clinicName}</h1>
            <p>{brandConfig.tagline}</p>
            <div className="heroActions">
              <Button href="/booking">Book appointment</Button>
              <Button href="/services" variant="secondary">
                View services
              </Button>
            </div>
          </div>
          <HoverTilt className="heroMedia">
            <Image src="/images/clinic-hero.svg" alt="Modern dental treatment room" width={760} height={560} priority />
          </HoverTilt>
        </Container>
      </section>

      <Section className="statsBand">
        <ScrollReveal className="statsGrid" stagger>
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </ScrollReveal>
      </Section>

      <Section
        eyebrow="Care paths"
        title="A calmer way to solve dental problems"
        intro="Patients get a plain-language diagnosis, treatment options, and a realistic plan before work begins."
      >
        <ScrollReveal className="cardGrid" stagger>
          {services.slice(0, 4).map((service) => (
            <AnimatedCard key={service.slug}>
              <Image src={service.image.src} alt={service.image.alt} width={420} height={260} />
              <div className="cardBody">
                <Badge>From {formatCurrency(service.priceFrom)}</Badge>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <Button href={`/services/${service.slug}`} variant="ghost">
                  Service details
                </Button>
              </div>
            </AnimatedCard>
          ))}
        </ScrollReveal>
      </Section>

      <Section
        className="splitBand"
        eyebrow="Clinical team"
        title="Designed for repeatable, predictable visits"
        intro="The template supports staff profiles, proof points, treatment pages, and booking flows without hard-coded page copy."
      >
        <ScrollReveal className="teamGrid" stagger>
          {team.map((member) => (
            <div className="teamMember" key={member.name}>
              <Image src={member.image.src} alt={member.image.alt} width={320} height={260} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </ScrollReveal>
      </Section>

      <Section eyebrow="Patient notes" title="Care that keeps people informed">
        <ScrollReveal className="testimonialGrid" stagger>
          {testimonials.map((testimonial) => (
            <blockquote className="testimonial" key={testimonial.name}>
              <p>“{testimonial.quote}”</p>
              <cite>
                {testimonial.name}
                <span>{testimonial.context}</span>
              </cite>
            </blockquote>
          ))}
        </ScrollReveal>
      </Section>
    </>
  );
}
