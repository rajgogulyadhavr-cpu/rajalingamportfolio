<<<<<<< HEAD
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const roles = [
    "AI Developer",
    "Full Stack Developer",
    "Robotics Enthusiast",
];

export function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const i = roleIndex % roles.length;
            const fullText = roles[i];

            if (isDeleting) {
                setCurrentText(fullText.substring(0, currentText.length - 1));
            } else {
                setCurrentText(fullText.substring(0, currentText.length + 1));
            }

            let typeSpeed = 100;
            if (isDeleting) typeSpeed /= 2;

            if (!isDeleting && currentText === fullText) {
                typeSpeed = 2000;
                setIsDeleting(true);
            } else if (isDeleting && currentText === "") {
                setIsDeleting(false);
                setRoleIndex((prev) => prev + 1);
                typeSpeed = 500;
            }

            return typeSpeed;
        };

        const timer = setTimeout(() => {
            const nextSpeed = handleTyping();
            clearTimeout(timer);
            setTimeout(handleTyping, nextSpeed);
        }, 100);

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, roleIndex]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />

            <div className="container max-w-6xl flex flex-col-reverse lg:flex-row items-center gap-12">
                <div className="flex-1 text-center lg:text-left space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-xl md:text-2xl font-medium text-primary mb-2">Hello, I'm</h2>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                            Rajalingam N
                        </h1>
                        <div className="h-12 flex items-center justify-center lg:justify-start">
                            <span className="text-2xl md:text-4xl font-semibold text-gradient">
                                {currentText}
                                <span className="animate-pulse">|</span>
                            </span>
                        </div>
                        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                            Pre-final year AI & Data Science Student | MERN Stack Developer.
                            Passionate about building intelligent applications and interactive web experiences.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
                    >
                        <a href="#projects">
                            <Button size="lg" variant="neon" magnetic>
                                View Projects
                            </Button>
                        </a>
                        <a href="#contact">
                            <Button size="lg" variant="outline" magnetic>
                                Contact Me
                            </Button>
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="flex-1 flex justify-center lg:justify-end"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent animate-spin-slow blur-xl opacity-50" />
                        <div className="relative w-full h-full rounded-full border-2 border-primary/50 overflow-hidden glass flex items-center justify-center">
                            <img
                                src="/profile/profile.jpg"
                                alt="Rajalingam N"
                                className="w-full h-full object-cover rounded-full p-2"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="%236b7280" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>';
                                    (e.target as HTMLImageElement).className = "w-1/2 h-1/2 opacity-20";
                                }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
=======
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const roles = [
    "AI Developer",
    "Full Stack Developer",
    "Robotics Enthusiast",
];

export function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const i = roleIndex % roles.length;
            const fullText = roles[i];

            if (isDeleting) {
                setCurrentText(fullText.substring(0, currentText.length - 1));
            } else {
                setCurrentText(fullText.substring(0, currentText.length + 1));
            }

            let typeSpeed = 100;
            if (isDeleting) typeSpeed /= 2;

            if (!isDeleting && currentText === fullText) {
                typeSpeed = 2000;
                setIsDeleting(true);
            } else if (isDeleting && currentText === "") {
                setIsDeleting(false);
                setRoleIndex((prev) => prev + 1);
                typeSpeed = 500;
            }

            return typeSpeed;
        };

        const timer = setTimeout(() => {
            const nextSpeed = handleTyping();
            clearTimeout(timer);
            setTimeout(handleTyping, nextSpeed);
        }, 100);

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, roleIndex]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />

            <div className="container max-w-6xl flex flex-col-reverse lg:flex-row items-center gap-12">
                <div className="flex-1 text-center lg:text-left space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-xl md:text-2xl font-medium text-primary mb-2">Hello, I'm</h2>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                            Rajalingam N
                        </h1>
                        <div className="h-12 flex items-center justify-center lg:justify-start">
                            <span className="text-2xl md:text-4xl font-semibold text-gradient">
                                {currentText}
                                <span className="animate-pulse">|</span>
                            </span>
                        </div>
                        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                            Pre-final year AI & Data Science Student | MERN Stack Developer.
                            Passionate about building intelligent applications and interactive web experiences.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
                    >
                        <a href="#projects">
                            <Button size="lg" variant="neon" magnetic>
                                View Projects
                            </Button>
                        </a>
                        <a href="#contact">
                            <Button size="lg" variant="outline" magnetic>
                                Contact Me
                            </Button>
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="flex-1 flex justify-center lg:justify-end"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent animate-spin-slow blur-xl opacity-50" />
                        <div className="relative w-full h-full rounded-full border-2 border-primary/50 overflow-hidden glass flex items-center justify-center">
                            <img
                                src="/profile/profile.jpg"
                                alt="Rajalingam N"
                                className="w-full h-full object-cover rounded-full p-2"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="%236b7280" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>';
                                    (e.target as HTMLImageElement).className = "w-1/2 h-1/2 opacity-20";
                                }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
>>>>>>> 8ba124c8db0020263d7ec6e1526daedb37619614
