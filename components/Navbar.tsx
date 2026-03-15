"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-6 pb-4 transition-all duration-300",
                scrolled ? "pt-4" : "pt-6"
            )}
        >
            <nav
                className={cn(
                    "flex items-center gap-1 rounded-full px-4 py-2 transition-all duration-300",
                    scrolled ? "glass shadow-lg" : "bg-transparent"
                )}
            >
                <ul className="flex items-center gap-2 sm:gap-6">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors block px-2 py-1"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </motion.header>
    );
}
