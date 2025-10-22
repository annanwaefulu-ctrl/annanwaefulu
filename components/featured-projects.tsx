"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  const projects = [
    {
      title: "Workspace Furniture Website",
      description:
        "Created a clean, minimalist eCommerce website for “Workspace Co.” focused on high-quality office furniture and elegant product presentation.",
      image: "/Artboard 3.png",
      slug: "Workspace-Furniture-Website",
    },
    {
      title: "CozyHome Furniture Store",
      description:
        "Designed a warm, user-friendly eCommerce website for “CozyHome Interiors” to improve conversions and create an emotional connection with users.",
      image: "/furniture.png",
      slug: "flair-ai-framework",
    },
    {
      title: "PartyWorks Celebration Store",
      description:
        "Developed a lively eCommerce experience for “PartyWorks,” a brand specializing in party supplies and themed decorations.",
      image: "/party.png",
      slug: "mobile-app-experience",
    },
    {
      title: "AUTOMOTIVE WEBSITE REDESIGN",
      description:
        "Reimagined a car brand’s online presence with immersive visuals and a sleek, user-centered design experience.",
      image: "/jarkata.png",
      slug: "automotive-redesign",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="bg-background py-20">
      {/* Header */}
      <div className="container max-w-6xl mx-auto mb-6 opacity-0 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          FEATURED PROJECTS
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          A selection of my recent work showcasing design solutions across
          various industries and platforms.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative"
        style={{
          height: `${projects.length * 100}vh`,
          isolation: "isolate",
        }}
      >
        {projects.map((project, index) => {
          const start = index / projects.length;
          const end = (index + 1) / projects.length;

          // Slight vertical and scale motion
          const y = useTransform(scrollYProgress, [start, end], ["10%", "0%"]);
          const scale = useTransform(scrollYProgress, [start, end], [1.05, 1]);

          return (
            <motion.div
              key={project.slug}
              style={{
                y,
                scale,
                zIndex: index + 1,
              }}
              className="sticky top-0 h-screen flex items-center justify-center will-change-transform"
            >
              <div className="relative w-full max-w-6xl h-[80vh] overflow-hidden rounded-2xl shadow-2xl">
                {/* Image */}
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/40 to-transparent z-10" />

                {/* Centered Text */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-8">
                  <Link href={`/projects/${project.slug}`}>
                    <Button
                      size="lg"
                      variant="default"
                      className="bg-[#5E67E6] mb-4 text-white hover:bg-[#5E67E6]/90 font-semibold tracking-wide"
                    >
                      UI/UX DESIGN
                    </Button>
                  </Link>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    {project.title}
                  </h3>
                  <p className="text-base md:text-lg text-white/90 max-w-2xl mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="container max-w-6xl mx-auto mt-12 text-center opacity-0 animate-fade-in-delay">
        <Link href="/projects">
          <Button
            variant="link"
            size="lg"
            className="text-primary hover:text-primary/80 text-base font-semibold group"
          >
            BROWSE ALL PROJECTS
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
