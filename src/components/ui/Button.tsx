import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "primary", className = "", ...rest } = props;
  const variantClasses = {
    primary: "bg-[var(--color-primary)] text-white",
    secondary:
      "border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)]",
    ghost:
      "min-h-0 bg-transparent p-0 text-[var(--color-primary)]",
  }[variant];
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-[1.15rem] py-[0.78rem] font-[750] leading-none transition-transform duration-150 hover:-translate-y-px ${variantClasses} ${className}`.trim();

  if ("href" in props && props.href) {
    return (
      <Link className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} href={props.href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
