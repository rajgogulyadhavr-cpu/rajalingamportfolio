"use client";

import { motion } from "framer-motion";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 px-6 border-t border-border bg-background relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center md:text-left"
                >
                    <p className="font-semibold text-lg text-foreground">Rajalingam N</p>
                    <p className="text-sm text-muted-foreground mt-1">AI & Full Stack Developer</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-sm text-muted-foreground text-center"
                >
                    &copy; {currentYear} Rajalingam N. All rights reserved.
                </motion.div>
            </div>
        </footer>
    );
}
