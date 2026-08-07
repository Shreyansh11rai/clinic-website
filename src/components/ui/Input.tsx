import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

type FieldProps = {
  label: string;
};

export function Input({ label, id, ...props }: FieldProps & InputHTMLAttributes<HTMLInputElement>) {
  const inputId = id ?? String(props.name);
  return (
    <label className="field" htmlFor={inputId}>
      <span>{label}</span>
      <input id={inputId} {...props} />
    </label>
  );
}

export function Select({ label, id, children, ...props }: FieldProps & SelectHTMLAttributes<HTMLSelectElement>) {
  const inputId = id ?? String(props.name);
  return (
    <label className="field" htmlFor={inputId}>
      <span>{label}</span>
      <select id={inputId} {...props}>
        {children}
      </select>
    </label>
  );
}

export function Textarea({ label, id, ...props }: FieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const inputId = id ?? String(props.name);
  return (
    <label className="field" htmlFor={inputId}>
      <span>{label}</span>
      <textarea id={inputId} {...props} />
    </label>
  );
}
