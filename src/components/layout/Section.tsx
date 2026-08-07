import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, intro, children, className = "" }: SectionProps) {
  return (
    <section className={`section ${className}`.trim()}>
      <Container>
        {(eyebrow || title || intro) && (
          <div className="sectionHeader">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2>{title}</h2>}
            {intro && <p>{intro}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
