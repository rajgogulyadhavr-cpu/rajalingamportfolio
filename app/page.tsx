import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Achievements } from "@/sections/Achievements";
import { Education } from "@/sections/Education";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="w-full">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Education />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
