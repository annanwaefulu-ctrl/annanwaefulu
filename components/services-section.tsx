"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function ServicesSection() {
  const services = [
    {
      number: "1.",
      title: "Product Design",
      details: [
        "UX research, persona creation & user flows",
        "Wireframing & interactive prototyping in Figma",
        "Design systems & component libraries",
        "Mobile & web app design",
      ],
    },
    {
      number: "2.",
      title: "Website Design",
      details: [
        "UX research, persona creation & user flows",
        "Wireframing & interactive prototyping in Figma",
        "Design systems & component libraries",
        "Mobile & web app design",
      ],
    },
    {
      number: "3.",
      title: "Frontend Development",
      details: [
        "UX research, persona creation & user flows",
        "Wireframing & interactive prototyping in Figma",
        "Design systems & component libraries",
        "Mobile & web app design",
      ],
    },
    {
      number: "4.",
      title: "Interactive UI & Motion",
      details: [
        "UX research, persona creation & user flows",
        "Wireframing & interactive prototyping in Figma",
        "Design systems & component libraries",
        "Mobile & web app design",
      ],
    },
    {
      number: "5.",
      title: "Design-to-Code Collaboration",
      details: [
        "UX research, persona creation & user flows",
        "Wireframing & interactive prototyping in Figma",
        "Design systems & component libraries",
        "Mobile & web app design",
      ],
    },
    {
      number: "6.",
      title: "Product Optimization & Support",
      details: [
        "UX research, persona creation & user flows",
        "Wireframing & interactive prototyping in Figma",
        "Design systems & component libraries",
        "Mobile & web app design",
      ],
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-[#f5f6fb]">
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT COLUMN */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            WHAT I CAN DO FOR YOU
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
            As a product designer, I am a visual storyteller, crafting
            experiences that connect deeply and spark creativity.
          </p>

          <div className="space-y-6 border-t border-gray-300 pt-4">
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={service.title}
                  className="border-b border-gray-300 pb-4"
                >
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={`flex justify-between items-center w-full text-left ${
                      isActive ? "text-indigo-600" : "text-gray-900"
                    }`}
                  >
                    <span className="font-semibold text-lg tracking-tight">
                      {service.number} {service.title.toUpperCase()}
                    </span>
                    <span className="text-sm">{isActive ? "▾" : "▸"}</span>
                  </button>

                  {/* Expanded Content */}
                  {isActive && service.details && (
                    <div className="mt-3 text-gray-700 text-sm leading-relaxed space-y-1">
                      <p className="mb-2">
                        Crafting thoughtful, user-centered digital experiences —
                        from idea to interactive prototype.
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        {service.details.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 translate-y-0 rotate-3"
              : "opacity-0 translate-y-10 rotate-0"
          } flex justify-center`}
        >
          <div className="relative w-[320px] md:w-[400px] lg:w-[440px] rounded-2xl overflow-hidden rotate-3">
            <Image
              src="/portfolio.png"
              alt="Workspace setup"
              width={600}
              height={800}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
