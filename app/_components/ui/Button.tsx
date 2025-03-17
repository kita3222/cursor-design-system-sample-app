import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const buttonVariants = cva(
  // ベースのスタイル
  "inline-flex items-center justify-center rounded font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-500 text-white border-primary-500 hover:bg-primary-600 hover:border-primary-600 focus-visible:ring-primary-500",
        secondary:
          "bg-secondary-100 text-secondary-700 border-secondary-200 hover:bg-secondary-200 hover:border-secondary-300 focus-visible:ring-secondary-300",
        outline:
          "bg-transparent text-primary-500 border border-primary-500 hover:bg-primary-50 hover:text-primary-600 focus-visible:ring-primary-500",
        ghost:
          "bg-transparent text-secondary-700 hover:bg-secondary-100 hover:text-secondary-800 focus-visible:ring-secondary-300",
        link: "bg-transparent text-primary-500 underline-offset-4 hover:underline hover:text-primary-600 p-0 focus-visible:ring-transparent",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 py-2 text-sm",
        lg: "h-12 px-6 py-3 text-base",
        icon: "h-10 w-10",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
