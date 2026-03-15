"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "AI & ML",
        skills: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "Deep Learning", "NLP", "Computer Vision"],
    },
    {
        title: "Web Development",
        skills: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "Tailwind CSS", "REST APIs"],
    },
    {
        title: "IoT",
        skills: ["Arduino", "Raspberry Pi", "C++", "ROS", "Sensor Integration", "Motor Control", "3D Printing", "Electronics"],
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-24 px-6 relative bg-secondary/10">
            <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10" />

            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Stack</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                            className="glass p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors group"
                        >
                            <h3 className="text-xl font-bold mb-6 text-primary text-center">{category.title}</h3>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: catIndex * 0.05 + skillIndex * 0.04 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-foreground border border-primary/20 hover:border-primary/60 hover:bg-primary/20 transition-all cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
