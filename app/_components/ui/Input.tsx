import React from "react";
import { cn } from "../../../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, helperText, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          className={cn(
            "w-full px-3 py-2 text-base border rounded-md shadow-sm bg-white text-secondary-800",
            "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
            "disabled:opacity-50 disabled:bg-secondary-50",
            error
              ? "border-error focus:ring-error focus:border-error"
              : "border-secondary-300",
            className
          )}
          ref={ref}
          {...props}
        />
        {helperText && (
          <p
            className={cn(
              "mt-1 text-xs",
              error ? "text-error" : "text-secondary-500"
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
