"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useRef } from "react";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-border bg-transparent hover:bg-secondary/50 text-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-secondary/50 text-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                neon: "border border-primary/50 text-primary bg-primary/5 hover:bg-primary/20 hover:border-primary hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all",
            },
            size: {
                default: "h-10 px-6 py-2",
                sm: "h-8 px-4 text-xs",
                lg: "h-12 px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    magnetic?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, magnetic = false, children, ...props }, ref) => {
        const btnRef = useRef<HTMLButtonElement>(null);

        const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (!magnetic || !btnRef.current) return;
            const rect = btnRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btnRef.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        };

        const handleMouseLeave = () => {
            if (!magnetic || !btnRef.current) return;
            btnRef.current.style.transform = "translate(0px, 0px)";
            btnRef.current.style.transition = "transform 0.4s ease";
        };

        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={btnRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                {...props}
            >
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
