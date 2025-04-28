import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Publications } from "@/components/Publications";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
        <Publications />
        <Contact />
      </main>
      <footer className="w-full py-8 text-center text-muted-foreground text-sm">
        &copy; {new Date().getFullYear()} Jonathan Rodiger. All rights reserved.
      </footer>
    </div>
  );
}
