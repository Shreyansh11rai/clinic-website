"use client";

import gsap from "gsap";
import type { ReactNode } from "react";
import { useRef } from "react";

type AnimatedCardProps = {
  children: ReactNode;
  className?: string;
};

export function AnimatedCard({ children, className = "" }: AnimatedCardProps) {
  const ref = useRef<HTMLElement>(null);

  function handleEnter() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    gsap.to(ref.current, { y: -4, scale: 1.01, duration: 0.22, ease: "power2.out" });
  }

  function handleLeave() {
    gsap.to(ref.current, { y: 0, scale: 1, duration: 0.22, ease: "power2.out" });
  }

  return (
    <article
      ref={ref}
      className={`overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-sm)] ${className}`.trim()}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {children}
    </article>
  );
}
