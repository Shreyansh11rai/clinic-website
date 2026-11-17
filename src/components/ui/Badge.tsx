import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit rounded-full bg-[var(--color-primary-soft)] px-[0.65rem] py-[0.34rem] text-[0.78rem] font-extrabold uppercase tracking-normal text-[var(--color-primary-strong)]">
      {children}
    </span>
  );
}
