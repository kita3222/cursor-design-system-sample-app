import React from "react";
import { cn } from "../../../lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "flat";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        className={cn(
          "rounded-lg p-6",
          {
            "bg-white shadow": variant === "default",
            "bg-white border border-secondary-200": variant === "outline",
            "bg-secondary-50": variant === "flat",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn("mb-4 space-y-1.5", className)} ref={ref} {...props} />
    );
  }
);

CardHeader.displayName = "CardHeader";

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        className={cn("text-xl font-semibold text-secondary-900", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

CardTitle.displayName = "CardTitle";

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <p
      className={cn("text-sm text-secondary-500", className)}
      ref={ref}
      {...props}
    />
  );
});

CardDescription.displayName = "CardDescription";

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    return <div className={cn("", className)} ref={ref} {...props} />;
  }
);

CardContent.displayName = "CardContent";

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn("mt-6 flex items-center", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
