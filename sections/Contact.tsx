"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
    return (
        <section id="contact" className="py-24 px-6 relative bg-secondary/10">
            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-semibold mb-6">Let's build something amazing together</h3>
                        <p className="text-muted-foreground text-lg mb-8">
                            Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
                        </p>

                        <div className="space-y-6">
                            <a
                                href="mailto:rajgogulyadhavr@gmail.com"
                                className="flex items-center gap-4 p-4 rounded-xl glass hover:border-primary/50 transition-colors group"
                            >
                                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <p className="font-medium text-foreground">rajgogulyadhavr@gmail.com</p>
                                </div>
                            </a>

                            <a
                                href="tel:+919791703480"
                                className="flex items-center gap-4 p-4 rounded-xl glass hover:border-primary/50 transition-colors group"
                            >
                                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Phone</p>
                                    <p className="font-medium text-foreground">+91 9791703480</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 p-4 rounded-xl glass group cursor-default">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Location</p>
                                    <p className="font-medium text-foreground">Karur, Tamil Nadu, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-6">
                            <a
                                href="https://www.linkedin.com/in/rajalingam-narayanakumar-578a69348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-secondary/50 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer text-muted-foreground hover:scale-110"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://github.com/rajgogulyadhavr-cpu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-secondary/50 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer text-muted-foreground hover:scale-110"
                            >
                                <Github size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <form className="glass p-8 rounded-2xl space-y-6 relative overflow-hidden h-full flex flex-col justify-center">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

                            <div className="space-y-2 relative z-10">
                                <label className="text-sm font-medium text-muted-foreground ml-1">Your Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    required
                                />
                            </div>

                            <div className="space-y-2 relative z-10">
                                <label className="text-sm font-medium text-muted-foreground ml-1">Your Email</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    required
                                />
                            </div>

                            <div className="space-y-2 relative z-10">
                                <label className="text-sm font-medium text-muted-foreground ml-1">Message</label>
                                <textarea
                                    placeholder="Tell me about your project..."
                                    rows={5}
                                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                variant="neon"
                                className="w-full gap-2 relative z-10 bg-primary/10 hover:bg-primary/20"
                                magnetic
                                onClick={(e: React.MouseEvent) => e.preventDefault()}
                            >
                                Send Message <Send size={18} />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
