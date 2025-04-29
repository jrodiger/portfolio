"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#publications", label: "Publications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="w-full flex items-center justify-between py-6 px-4 md:px-8 border-b border-border bg-background/80 backdrop-blur sticky top-0 z-30">
      <Link href="/" className="text-lg font-bold tracking-tight whitespace-nowrap">
        Jonathan Rodiger
      </Link>
      
      {/* Mobile Menu */}
      <div className="md:hidden flex items-center gap-2">
        <Button
          asChild
          size="sm"
          className="bg-white text-black hover:bg-gray-100 hover:text-black"
        >
          <a href="/Jonathan Rodiger Resume.pdf" download>
            Resume
          </a>
        </Button>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>Navigation</SheetTitle>
            <div className="flex flex-col gap-4 mt-4">
              {navItems.map((item) => (
                <Button 
                  key={item.href} 
                  asChild 
                  variant="ghost" 
                  size="sm" 
                  className="justify-start"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-2">
        {navItems.map((item) => (
          <Button key={item.href} asChild variant="ghost" size="sm">
            <Link href={item.href}>{item.label}</Link>
          </Button>
        ))}
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
