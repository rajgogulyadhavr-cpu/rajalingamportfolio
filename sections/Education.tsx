"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
    {
        degree: "B.Tech in AI & Data Science",
        institution: "Chettinad College of Engineering and Technology",
        location: "Karur, Tamil Nadu",
        period: "2023 – Now",
        cgpa: "8.46 CGPA",
        description: "Focused on Artificial Intelligence, Machine Learning, Deep Learning, Data Science, and Full Stack Web Development.",
    },
    {
        degree: "Higher Secondary (12th Grade)",
        institution: "Govt. Higher Sec. School, Ayyarmalai",
        location: "Ayyarmalai, Tamil Nadu",
        period: "2022 – 2023",
        cgpa: "Centum in CS",
        description: "Achieved full marks (100/100) in Computer Science. Awarded by the Tamil Nadu Government for academic excellence.",
    },
    {
        degree: "Middle School",
        institution: "Panchayat Union Middle School, Sivayam (West)",
        location: "Sivayam, Tamil Nadu",
        period: "",
        cgpa: "",
        description: "Completed middle school education, building a strong foundation in sciences and mathematics.",
    },
];

export function Education() {
    return (
        <section id="education" className="py-24 px-6 relative">
            <div className="container max-w-6xl mx-auto">
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

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                            >
                                {/* Dot */}
                                <div className="absolute left-8 md:left-1/2 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 hidden md:block z-10 shadow-[0_0_10px_rgba(139,92,246,0.7)]" />

                                <div className="flex-1 md:max-w-[calc(50%-2rem)]">
                                    <div className="glass p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors group">
                                        <div className="flex items-start justify-between gap-4 mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                    {edu.degree}
                                                </h3>
                                                <p className="text-primary font-semibold mt-1">{edu.institution}</p>
                                                <p className="text-sm text-muted-foreground">{edu.location}</p>
                                            </div>
                                            <div className="text-right shrink-0">
                                                {edu.period && (
                                                    <span className="text-xs font-mono bg-primary/10 text-primary px-3 py-1 rounded-full block mb-2">
                                                        {edu.period}
                                                    </span>
                                                )}
                                                {edu.cgpa && (
                                                    <span className="text-xs font-semibold bg-accent/10 text-accent px-3 py-1 rounded-full block">
                                                        {edu.cgpa}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                                    </div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
