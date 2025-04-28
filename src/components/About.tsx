import Image from "next/image";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background/60 backdrop-blur-sm">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-[600px] leading-relaxed">
                Senior Bioinformatics Engineer with over 7 years of experience in developing scalable solutions for complex biological data analysis. Currently focused on building robust pipelines and tools that advance genomic research and drug discovery.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Core Strengths</h3>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Pipeline Development & Workflow Optimization
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Cloud Computing & Infrastructure Design
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Data Analysis & Scientific Computing
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Software Architecture & Best Practices
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Technical Expertise</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">AWS</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Docker</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#publications">View Publications</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[320px] md:w-[400px] md:h-[460px] overflow-hidden rounded-lg">
              <Image
                src="/profile.jpeg"
                alt="Profile photo"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                priority
                sizes="(max-width: 768px) 280px, 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 