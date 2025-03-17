import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary-100 text-primary-800",
        secondary: "bg-secondary-100 text-secondary-800",
        success: "bg-green-100 text-green-800",
        warning: "bg-yellow-100 text-yellow-800",
        error: "bg-red-100 text-red-800",
        info: "bg-blue-100 text-blue-800",
      },
      outline: {
        true: "bg-transparent border",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        outline: true,
        className: "text-primary-500 border-primary-300",
      },
      {
        variant: "secondary",
        outline: true,
        className: "text-secondary-500 border-secondary-300",
      },
      {
        variant: "success",
        outline: true,
        className: "text-green-500 border-green-300",
      },
      {
        variant: "warning",
        outline: true,
        className: "text-yellow-500 border-yellow-300",
      },
      {
        variant: "error",
        outline: true,
        className: "text-red-500 border-red-300",
      },
      {
        variant: "info",
        outline: true,
        className: "text-blue-500 border-blue-300",
      },
    ],
    defaultVariants: {
      variant: "default",
      outline: false,
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, outline, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, outline, className }))}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
