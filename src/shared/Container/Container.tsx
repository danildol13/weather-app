import type { ReactNode } from "react";
import css from "./Container.module.css";

interface Prop {
  children: ReactNode;
  size?: "sm" | "lg" | "xl" | "xxl" | "fullSize";
  className?: string;
}

export default function Container({ children, size = "xxl", className }: Prop) {
  return (
    <div className={`${css[size]} ${className || ""} ${css.container} `}>
      {children}
    </div>
  );
}
