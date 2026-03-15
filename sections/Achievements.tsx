"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, X } from "lucide-react";

const achievements = [
    {
        title: "National Level Hackathon – 3rd Prize",
        description: "Secured 3rd place at the National Level Hackathon conducted at Velammal College of Engineering & Technology, Madurai for developing an innovative healthcare application.",
        image: "/achievements/achievement1.jpg",
        date: "2023",
    },
    {
        title: "Centum in Computer Science",
        description: "Awarded by the Tamil Nadu Government for securing a perfect score (100/100) in Computer Science.",
        image: "/achievements/achievement2.jpg",
        date: "High School",
    },
    {
        title: "Youth Indians Round Table",
        description: "Runner-up in the Accessibility & Health Talk organized by Youth Indians Round Table, showcasing strong communication and problem-solving skills.",
        image: "/achievements/achievement3.jpg",
        date: "2022",
    },
];

export function Achievements() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="achievements" className="py-24 px-6 relative bg-secondary/10">
            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Achievements</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass rounded-2xl overflow-hidden group cursor-pointer border border-border/50 hover:border-primary/50 transition-colors"
                            onClick={() => setSelectedImage(achievement.image)}
                        >
                            <div className="relative aspect-video overflow-hidden bg-muted">
                                <img
                                    src={achievement.image}
                                    alt={achievement.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="%236b7280" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m8 12 2-2 4 4"/></svg>';
                                        (e.target as HTMLImageElement).className = "w-1/3 h-1/3 opacity-20 mx-auto my-auto mt-12";
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white font-medium flex items-center gap-2">
                                        View <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7'/></svg>" alt="" />
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-foreground line-clamp-2 pr-4">
                                        {achievement.title}
                                    </h3>
                                    <span className="text-xs font-mono text-primary whitespace-nowrap bg-primary/10 px-2 py-1 rounded-full">
                                        {achievement.date}
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground mt-3 line-clamp-3">
                                    {achievement.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 p-2 rounded-full bg-secondary/80 text-foreground hover:bg-secondary z-50"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={24} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-5xl w-full aspect-video rounded-xl overflow-hidden glass shadow-2xl neon-shadow"
                        >
                            <img
                                src={selectedImage}
                                alt="Achievement Preview"
                                className="w-full h-full object-contain bg-black/50"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="%23374151" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>';
                                }}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
