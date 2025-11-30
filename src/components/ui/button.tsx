
import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", glow = false, ...props }, ref) => {
    const variants = {
      primary: "bg-[#1A1A1A] text-white hover:bg-black/90",
      secondary: "bg-white text-[#1A1A1A] hover:bg-gray-100",
      outline: "border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white",
      ghost: "hover:bg-gray-100 text-[#1A1A1A]",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          glow && "breathing-glow",
          "hover-scale",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

