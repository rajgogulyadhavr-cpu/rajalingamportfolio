"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost" | "neon";
    size?: "default" | "sm" | "lg" | "icon";
    magnetic?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", magnetic = false, children, ...props }, ref) => {
        const defaultClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

        const variants = {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            neon: "border border-primary text-primary bg-transparent neon-shadow hover:bg-primary hover:text-primary-foreground",
        };

        const sizes = {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9",
        };

        const combinedClassName = cn(defaultClasses, variants[variant], sizes[size], className);

        const x = useMotionValue(0);
        const y = useMotionValue(0);

        const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
        const springX = useSpring(x, springConfig);
        const springY = useSpring(y, springConfig);

        const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const hX = e.clientX - rect.left - rect.width / 2;
            const hY = e.clientY - rect.top - rect.height / 2;
            x.set(hX * 0.3);
            y.set(hY * 0.3);
        };

        const handleMouseLeave = () => {
            x.set(0);
            y.set(0);
        };

        if (magnetic) {
            return (
                <motion.button
                    ref={ref as any}
                    className={combinedClassName}
                    style={{ x: springX, y: springY }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    {...(props as any)}
                >
                    {children}
                </motion.button>
            );
        }

        return (
            <button ref={ref} className={combinedClassName} {...props}>
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button };
