"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "/projects", label: "Project" },
    { href: "#testimonial", label: "Testimonial" },
  ];

  return (
    <header className=" top-6 left-0 right-0 z-50 flex justify-center">
      <nav className="relative flex items-center justify-between w-[90%] md:w-auto px-6 py-3 rounded-full bg-white/80 border border-primary/20 backdrop-blur-md shadow-sm">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full overflow-hidden border border-gray-200">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Profile"
                width={40}
                height={40}
                className="object-cover h-full w-full"
              />
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 px-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex">
          <Link href="#contact">
            <Button
              size="sm"
              className="rounded-full px-6 bg-primary text-white hover:bg-primary/90"
            >
              Contact
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-full hover:bg-primary/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 w-[90%] rounded-2xl bg-white/95 border border-primary/20 backdrop-blur-md shadow-lg py-6 flex flex-col items-center gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              size="sm"
              className="rounded-full px-6 bg-primary text-white hover:bg-primary/90"
            >
              Contact
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
