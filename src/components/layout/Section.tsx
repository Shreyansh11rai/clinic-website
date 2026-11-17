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
    <section className={`py-20 ${className}`.trim()}>
      <Container>
        {(eyebrow || title || intro) && (
          <div className="mb-10 max-w-[780px]">
            {eyebrow && (
              <p className="text-[0.78rem] font-extrabold uppercase tracking-normal text-[var(--color-primary-strong)]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-normal">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-4 max-w-[62ch] text-[1.12rem] text-[var(--color-muted)]">
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
