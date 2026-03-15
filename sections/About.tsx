"use client";

import { motion } from "framer-motion";
import { Bot, Server, Zap } from "lucide-react";

const stats = [
    { icon: Bot, label: "Projects", value: "5" },
    { icon: Server, label: "Hackathons", value: "2" },
    { icon: Zap, label: "CGPA", value: "8.46" },
];

export function About() {
    return (
        <section id="about" className="py-24 px-6 relative">
            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full max-w-md lg:max-w-none"
                    >
                        <div className="relative aspect-square rounded-2xl overflow-hidden glass p-4">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
                            <img
                                src="/profile/profile.jpg"
                                alt="About Rajalingam"
                                className="w-full h-full object-cover rounded-xl"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="%23374151" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>';
                                    (e.target as HTMLImageElement).className = "w-1/2 h-1/2 opacity-20 mx-auto my-auto mt-24";
                                }}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 space-y-6"
                    >
                        <h3 className="text-2xl font-semibold text-primary">Pre-final year B.Tech in AI & Data Science</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Based in Karur, Tamil Nadu. I am deeply passionate about Artificial Intelligence, robotics, deep learning, and full-stack web development. My goal is to bridge the gap between intelligent algorithms and user-friendly interfaces to create futuristic applications.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I have hands-on experience as a MERN Stack intern and have built multiple robotics and AI projects, winning awards at national level hackathons.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="glass p-6 rounded-xl flex items-center gap-4 hover:border-primary/50 transition-colors group cursor-default"
                                >
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                        <stat.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold">{stat.value}</h4>
                                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
