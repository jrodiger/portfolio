"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="container flex items-center justify-center">
        <div className="w-full max-w-5xl px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Hi, I&apos;m{' '}
              <span className="whitespace-nowrap">Jonathan Rodiger</span>
            </h1>
            <p className="max-w-xl text-muted-foreground text-lg md:text-xl mx-auto">
              I&apos;m a Senior Bioinformatics Engineer with over 7 years of experience building powerful bioinformatics tools, 
              interactive web applications, and innovative AI-driven solutions.
            </p>
            <div className="flex justify-center space-x-4 pt-4">
              <Link href="https://github.com/jrodiger" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="cursor-pointer">
                  <GithubIcon className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/jonathan-rodiger-4769a715b/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="cursor-pointer">
                  <LinkedinIcon className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:jonathanrodiger@gmail.com">
                <Button variant="outline" size="icon" className="cursor-pointer">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
