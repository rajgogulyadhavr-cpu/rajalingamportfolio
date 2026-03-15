"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "Autonomous Service Robot",
        description: "An intelligent autonomous robot designed for service tasks. Features advanced navigation algorithms, real-time computer vision, and AI-powered decision making.",
        image: "/projects/autonomous_robot.png",
        tags: ["Python", "Computer Vision", "ROS", "AI"],
        github: "#",
        demo: "#",
    },
    {
        title: "Remote Control Based Service Robot",
        description: "A specialized service robot capable of complex teleoperation. Includes low-latency video streaming, precise motor control, and collision avoidance systems.",
        image: "/projects/autonomous_robot.png",
        tags: ["IoT", "C++", "Electronics", "React"],
        github: "#",
        demo: "#",
    },
    {
        title: "3D Hologram Display System",
        description: "An innovative visual system capable of rendering 3D holograms in real-time. Interfaces with custom hardware for creating floating 3D graphics.",
        image: "/projects/hologram_display.png",
        tags: ["Hardware", "Three.js", "C++", "UI/UX"],
        github: "#",
        demo: "#",
    },
    {
        title: "Deep Learning Healthcare Application",
        description: "A full-stack diagnostic application leveraging deep learning models for accurate medical image analysis. Built with MERN stack and Python microservices.",
        image: "/projects/healthcare_app.png",
        tags: ["MERN Stack", "Deep Learning", "TensorFlow", "Tailwind CSS"],
        github: "#",
        demo: "#",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-24 px-6 relative">
            <div className="absolute left-0 top-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />

            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass rounded-2xl overflow-hidden border border-border group"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="%23374151" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>';
                                        (e.target as HTMLImageElement).className = "w-1/3 h-1/3 opacity-20 mx-auto my-auto mt-20";
                                    }}
                                />
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 text-secondary-foreground border border-border"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                                        <Button variant="outline" className="w-full gap-2 border-primary/30 hover:border-primary">
                                            <Github size={16} /> Code
                                        </Button>
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                                        <Button variant="neon" className="w-full gap-2 relative overflow-hidden group/btn">
                                            <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover/btn:opacity-20 transition-opacity" />
                                            <ExternalLink size={16} /> Demo
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
