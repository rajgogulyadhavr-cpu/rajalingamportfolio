<<<<<<< HEAD
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const skills = [
    { name: "Python", category: "Language", level: 90 },
    { name: "MERN Stack", category: "Full Stack", level: 85 },
    { name: "React / Next.js", category: "Frontend", level: 85 },
    { name: "Node.js / Express", category: "Backend", level: 80 },
    { name: "MongoDB / MySQL", category: "Database", level: 80 },
    { name: "Power BI", category: "Data / Tool", level: 60 },
    { name: "IoT", category: "Hardware", level: 75 },
];

const softSkills = ["Leadership", "Communication", "Problem Solving", "Teamwork"];

export function Skills() {
    const [inView, setInView] = useState(false);

    return (
        <section id="skills" className="py-24 px-6 relative bg-secondary/20">
            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    onViewportEnter={() => setInView(true)}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Stack</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Technical Skills */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                            Tech Skills
                        </h3>
                        <div className="space-y-6">
                            {skills.map((skill, index) => (
                                <div key={skill.name} className="space-y-2">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <span className="font-medium text-lg">{skill.name}</span>
                                            <span className="text-xs text-muted-foreground ml-2 px-2 py-0.5 rounded-full border border-border">
                                                {skill.category}
                                            </span>
                                        </div>
                                        <span className="text-sm text-primary font-mono">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                                            initial={{ width: 0 }}
                                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                                            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6 text-primary">Soft Skills</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {softSkills.map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="glass p-6 rounded-2xl text-center border border-border mt-4 cursor-default relative overflow-hidden group"
                                >
                                    <div className="absolute inset-0 bg-primary/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                                    <span className="relative z-10 font-medium text-lg text-foreground">{skill}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="glass mt-12 p-8 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -mr-10 -mt-10" />
                            <h4 className="text-xl font-semibold mb-4 text-foreground/90">Design Aesthetics</h4>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" /> Futuristic & Dark Theme
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" /> Glassmorphism UI
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" /> Smooth Micro-Interactions
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" /> Neon Gradient Accents
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
=======
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const skills = [
    { name: "Python", category: "Language", level: 90 },
    { name: "MERN Stack", category: "Full Stack", level: 85 },
    { name: "React / Next.js", category: "Frontend", level: 85 },
    { name: "Node.js / Express", category: "Backend", level: 80 },
    { name: "MongoDB / MySQL", category: "Database", level: 80 },
    { name: "Power BI", category: "Data / Tool", level: 60 },
    { name: "IoT", category: "Hardware", level: 75 },
];

const softSkills = ["Leadership", "Communication", "Problem Solving", "Teamwork"];

export function Skills() {
    const [inView, setInView] = useState(false);

    return (
        <section id="skills" className="py-24 px-6 relative bg-secondary/20">
            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    onViewportEnter={() => setInView(true)}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Stack</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Technical Skills */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                            Tech Skills
                        </h3>
                        <div className="space-y-6">
                            {skills.map((skill, index) => (
                                <div key={skill.name} className="space-y-2">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <span className="font-medium text-lg">{skill.name}</span>
                                            <span className="text-xs text-muted-foreground ml-2 px-2 py-0.5 rounded-full border border-border">
                                                {skill.category}
                                            </span>
                                        </div>
                                        <span className="text-sm text-primary font-mono">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                                            initial={{ width: 0 }}
                                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                                            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6 text-primary">Soft Skills</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {softSkills.map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="glass p-6 rounded-2xl text-center border border-border mt-4 cursor-default relative overflow-hidden group"
                                >
                                    <div className="absolute inset-0 bg-primary/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                                    <span className="relative z-10 font-medium text-lg text-foreground">{skill}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="glass mt-12 p-8 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -mr-10 -mt-10" />
                            <h4 className="text-xl font-semibold mb-4 text-foreground/90">Design Aesthetics</h4>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" /> Futuristic & Dark Theme
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" /> Glassmorphism UI
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" /> Smooth Micro-Interactions
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" /> Neon Gradient Accents
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
>>>>>>> 8ba124c8db0020263d7ec6e1526daedb37619614
