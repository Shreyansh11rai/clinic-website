import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-[calc(100%_-_2rem)] max-w-[1180px] ${className}`.trim()}>
      {children}
    </div>
  );
}
