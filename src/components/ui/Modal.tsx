"use client";

import type { ReactNode } from "react";

type ModalProps = {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
};

export function Modal({ open, title, children, onClose }: ModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-40 grid place-items-center bg-black/[0.48] p-5"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[480px] rounded-[var(--radius-md)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-md)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2
            className="text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-normal"
            id="modal-title"
          >
            {title}
          </h2>
          <button
            className="inline-grid size-11 min-h-11 place-items-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary-strong)] transition-transform duration-150 hover:-translate-y-px"
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
          >
            x
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
