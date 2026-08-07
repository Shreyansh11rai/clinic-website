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
    <div className="modalOverlay" role="presentation" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}>
        <div className="modalHeader">
          <h2 id="modal-title">{title}</h2>
          <button className="iconButton" type="button" onClick={onClose} aria-label="Close dialog">
            x
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
