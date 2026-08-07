"use client";

import gsap from "gsap";
import type { ReactNode } from "react";
import { useRef } from "react";

export function HoverTilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 6;
    const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -6;
    gsap.to(ref.current, { rotateX, rotateY, duration: 0.25, transformPerspective: 800 });
  }

  function handleLeave() {
    gsap.to(ref.current, { rotateX: 0, rotateY: 0, duration: 0.25 });
  }

  return (
    <div ref={ref} className={className} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {children}
    </div>
  );
}
