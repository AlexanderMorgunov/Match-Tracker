import React from "react";
import { cn } from "../../utils/cn/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "danger";
}

export const Button = ({
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  const color = {
    primary: "bg-primary",
    danger: "bg-danger",
  }[variant];

  return (
    <button
      className={cn(
        `${color} h-fit p-1 rounded-[0.25rem] ${color} ${className}`
      )}
      {...props}
    ></button>
  );
};
