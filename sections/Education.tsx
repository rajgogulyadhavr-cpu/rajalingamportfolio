<<<<<<< HEAD
"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Star } from "lucide-react";

const education = [
    {
        type: "university",
        degree: "B.Tech – Artificial Intelligence and Data Science",
        institution: "Chettinad College of Engineering and Technology, Karur",
        period: "Pre-final Year",
        score: "CGPA: 8.46",
        icon: GraduationCap,
    },
    {
        type: "school12",
        degree: "Higher Secondary (12th Grade)",
        institution: "Government Higher Secondary School, Ayyarmalai",
        period: "Completed",
        score: "92% (School First)",
        icon: BookOpen,
    },
    {
        type: "school11",
        degree: "Higher Secondary (11th Grade)",
        institution: "Government Higher Secondary School, Ayyarmalai",
        period: "Completed",
        score: "82% (School First)",
        icon: Star,
    },
];

export function Education() {
    return (
        <section id="education" className="py-24 px-6 relative">
            <div className="absolute right-0 top-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10" />

            <div className="container max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Education Journey</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="relative pl-8 md:pl-0">
                    {/* Timeline Line */}
                    <div className="absolute left-[39px] md:left-1/2 md:-ml-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />

                    <div className="space-y-12">
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className={`relative flex items-center md:justify-between flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-20 h-20 -ml-10 md:ml-0 z-10">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ type: "spring", stiffness: 200, delay: index * 0.2 }}
                                        className="w-12 h-12 rounded-full glass border-2 border-primary bg-background flex items-center justify-center text-primary relative shadow-[0_0_15px_rgba(187,134,252,0.5)]"
                                    >
                                        <edu.icon size={20} />
                                    </motion.div>
                                </div>

                                {/* Content Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: 0.1 + index * 0.2 }}
                                    className={`w-full md:w-[45%] pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                                        }`}
                                >
                                    <div className="glass p-6 md:p-8 rounded-2xl border-l-4 border-l-primary hover:border-l-accent transition-colors duration-300 relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-mono rounded-full mb-4">
                                            {edu.period}
                                        </span>
                                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                                            {edu.degree}
                                        </h3>
                                        <h4 className="text-lg text-muted-foreground mb-4">
                                            {edu.institution}
                                        </h4>
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border">
                                            <Star size={16} className="text-yellow-500" />
                                            <span className="font-semibold text-foreground">{edu.score}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
=======
"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Star } from "lucide-react";

const education = [
    {
        type: "university",
        degree: "B.Tech – Artificial Intelligence and Data Science",
        institution: "Chettinad College of Engineering and Technology, Karur",
        period: "Pre-final Year",
        score: "CGPA: 8.46",
        icon: GraduationCap,
    },
    {
        type: "school12",
        degree: "Higher Secondary (12th Grade)",
        institution: "Government Higher Secondary School, Ayyarmalai",
        period: "Completed",
        score: "92% (School First)",
        icon: BookOpen,
    },
    {
        type: "school11",
        degree: "Higher Secondary (11th Grade)",
        institution: "Government Higher Secondary School, Ayyarmalai",
        period: "Completed",
        score: "82% (School First)",
        icon: Star,
    },
];

export function Education() {
    return (
        <section id="education" className="py-24 px-6 relative">
            <div className="absolute right-0 top-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10" />

            <div className="container max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Education Journey</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="relative pl-8 md:pl-0">
                    {/* Timeline Line */}
                    <div className="absolute left-[39px] md:left-1/2 md:-ml-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />

                    <div className="space-y-12">
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className={`relative flex items-center md:justify-between flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-20 h-20 -ml-10 md:ml-0 z-10">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ type: "spring", stiffness: 200, delay: index * 0.2 }}
                                        className="w-12 h-12 rounded-full glass border-2 border-primary bg-background flex items-center justify-center text-primary relative shadow-[0_0_15px_rgba(187,134,252,0.5)]"
                                    >
                                        <edu.icon size={20} />
                                    </motion.div>
                                </div>

                                {/* Content Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: 0.1 + index * 0.2 }}
                                    className={`w-full md:w-[45%] pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                                        }`}
                                >
                                    <div className="glass p-6 md:p-8 rounded-2xl border-l-4 border-l-primary hover:border-l-accent transition-colors duration-300 relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-mono rounded-full mb-4">
                                            {edu.period}
                                        </span>
                                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                                            {edu.degree}
                                        </h3>
                                        <h4 className="text-lg text-muted-foreground mb-4">
                                            {edu.institution}
                                        </h4>
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border">
                                            <Star size={16} className="text-yellow-500" />
                                            <span className="font-semibold text-foreground">{edu.score}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
>>>>>>> 8ba124c8db0020263d7ec6e1526daedb37619614
