"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/* Utility Hook to Detect Desktop Screens */
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isDesktop;
}

export function FeaturedProjects() {
  const projects = [
    {
      slug: "arabot",
      title: "Arabot – Live Chat Software & Ticketing System",
      description:
        "A bilingual landing page for Arabot, an AI-powered chat and ticketing system designed for businesses in the Middle East.",
      image: "/arabot-1.png",
    },
    {
      title: "Workspace Furniture Website",
      slug: "workspace-furniture-website",
      description:
        "A clean, minimalist eCommerce website for Workspace Co., designed to showcase high-quality office furniture with elegance and clarity.",
      image: "/workspace1.png",
    },
    {
      slug: "cozyhome-furniture-store",
      title: "CozyHome Furniture Store",
      description:
        "A warm, user-friendly eCommerce experience for CozyHome Interiors, designed to build trust and emotional connection with users.",
      image: "/furniture.png",
    },
    {
      slug: "partyworks-celebration-store",
      title: "PartyWorks Celebration Store",
      description:
        "A fun, lively eCommerce platform built for PartyWorks, a brand specializing in party supplies and themed decorations.",
      image: "/party.png",
    },
  ];

  const isDesktop = useIsDesktop();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="bg-background py-20">
      {/* Header */}
      <div className="container max-w-6xl mx-auto mb-6 opacity-0 animate-fade-in px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center md:text-left">
          Featured Projects
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto md:mx-0 text-center md:text-left">
          A selection of my recent work showcasing design solutions across
          various industries and platforms.
        </p>
      </div>

      {/* Projects Section */}
      <div
        ref={containerRef}
        className={isDesktop ? "relative" : "relative space-y-12 px-4"}
        style={isDesktop ? { height: `${projects.length * 100}vh` } : {}}
      >
        {projects.map((project, index) => {
          // Always define Hooks (unconditionally)
          const start = index / projects.length;
          const end = (index + 1) / projects.length;
          const y = useTransform(scrollYProgress, [start, end], ["10%", "0%"]);
          const scale = useTransform(scrollYProgress, [start, end], [1.05, 1]);

          if (!isDesktop) {
            // 💡 Simple layout for mobile
            return (
              <div
                key={project.slug}
                className="rounded-2xl overflow-hidden shadow-xl bg-muted/30"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6 text-center">
                  <Button className="bg-[#5E67E6] mb-3 text-white font-semibold">
                    UI/UX DESIGN
                  </Button>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5">
                    {project.description}
                  </p>
                  <Link href={`/projects/${project.slug}`}>
                    <Button
                      variant="outline"
                      className="hover:bg-[#5E67E6]/10 border-[#5E67E6] text-[#5E67E6]"
                    >
                      View Project
                    </Button>
                  </Link>
                </div>
              </div>
            );
          }

          // 💻 Scroll animation for desktop
          return (
            <motion.div
              key={project.slug}
              style={{ y, scale, zIndex: index + 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="sticky top-0 h-screen flex items-center justify-center will-change-transform"
            >
              <div className="relative w-full max-w-6xl h-[80vh] overflow-hidden rounded-2xl shadow-2xl">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent z-10" />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-8">
                  <Button
                    size="lg"
                    variant="default"
                    className="bg-[#5E67E6] mb-4 text-white hover:bg-[#5E67E6]/90 font-semibold tracking-wide"
                  >
                    UI/UX DESIGN
                  </Button>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    {project.title}
                  </h3>
                  <p className="text-base md:text-lg text-white/90 max-w-2xl mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <Link href={`/projects/${project.slug}`}>
                    <Button
                      variant="outline"
                      className="border-white text-black hover:bg-white/10"
                    >
                      View Project
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="container max-w-6xl mx-auto mt-16 text-center opacity-0 animate-fade-in-delay">
        <Link href="/projects">
          <Button
            variant="link"
            size="lg"
            className="text-primary hover:text-primary/80 text-base font-semibold group"
          >
            Browse All Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
