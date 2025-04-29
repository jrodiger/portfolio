"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-6 px-4 md:px-8 border-b border-border bg-background/80 backdrop-blur sticky top-0 z-30">
      <Link href="/" className="text-lg font-bold tracking-tight">
        Jonathan Rodiger
      </Link>
      <div className="flex gap-2">
        <Button asChild variant="ghost" size="sm">
          <Link href="#about">About</Link>
        </Button>
        <Button asChild variant="ghost" size="sm">
          <Link href="#publications">Publications</Link>
        </Button>
        <Button asChild variant="ghost" size="sm">
          <Link href="#contact">Contact</Link>
        </Button>
        <Button
          asChild
          size="sm"
          className="bg-white text-black hover:bg-gray-100 hover:text-black"
        >
          <a href="/Jonathan Rodiger Resume.pdf" download>
            Resume
          </a>
        </Button>
      </div>
    </nav>
  );
}
