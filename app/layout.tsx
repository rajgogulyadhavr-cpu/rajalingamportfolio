import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rajalingam N | AI & Full Stack Developer",
  description: "Portfolio of Rajalingam N, an AI & Data Science Student and MERN Stack Developer based in Karur, Tamil Nadu. Pre-final year B.Tech student passionate about Artificial Intelligence, robotics, deep learning, and full stack web development.",
  keywords: ["AI Developer", "Full Stack Developer", "MERN Stack", "Robotics", "React", "Next.js", "Python", "Rajalingam N"],
  authors: [{ name: "Rajalingam N" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary min-h-screen relative`}>
        {/* Global ambient background glow */}
        <div className="fixed inset-0 pointer-events-none z-[-1]">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[150px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[150px]" />
        </div>
        {children}
      </body>
    </html>
  );
}
