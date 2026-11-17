import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

type FieldProps = {
  label: string;
};

export function Input({ label, id, className = "", ...props }: FieldProps & InputHTMLAttributes<HTMLInputElement>) {
  const inputId = id ?? String(props.name);
  return (
    <label className="grid gap-2 font-bold text-[var(--color-muted)]" htmlFor={inputId}>
      <span>{label}</span>
      <input
        className={`w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg)] px-[0.95rem] py-[0.85rem] text-[var(--color-text)] ${className}`.trim()}
        id={inputId}
        {...props}
      />
    </label>
  );
}

export function Select({ label, id, children, className = "", ...props }: FieldProps & SelectHTMLAttributes<HTMLSelectElement>) {
  const inputId = id ?? String(props.name);
  return (
    <label className="grid gap-2 font-bold text-[var(--color-muted)]" htmlFor={inputId}>
      <span>{label}</span>
      <select
        className={`w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg)] px-[0.95rem] py-[0.85rem] text-[var(--color-text)] ${className}`.trim()}
        id={inputId}
        {...props}
      >
        {children}
      </select>
    </label>
  );
}

export function Textarea({ label, id, className = "", ...props }: FieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const inputId = id ?? String(props.name);
  return (
    <label className="grid gap-2 font-bold text-[var(--color-muted)]" htmlFor={inputId}>
      <span>{label}</span>
      <textarea
        className={`w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg)] px-[0.95rem] py-[0.85rem] text-[var(--color-text)] ${className}`.trim()}
        id={inputId}
        {...props}
      />
    </label>
  );
}
