"use client";

import { useEffect, useRef, useState } from "react";

export function AboutSection() {
  const stats = [
    { value: "8+", label: "Years Experience" },
    { value: "100+", label: "Projects Completed" },
    { value: "20+", label: "Happy Clients" },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" !py-20 md:!py-32 bg-[#EFF0FD]"
      id="about"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">ABOUT ME</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate digital product designer with over 8 years of
                experience creating beautiful, functional digital experiences.
                My approach combines user-centered design principles with
                technical expertise to deliver solutions that truly resonate
                with users.
              </p>
              <p>
                Throughout my career, I've had the privilege of working with
                startups and established companies across various industries,
                helping them transform their digital presence and achieve their
                business goals through thoughtful design.
              </p>
              <p>
                When I'm not designing, you can find me exploring new design
                trends, contributing to open-source projects, or sharing my
                knowledge through writing and mentoring aspiring designers.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="aspect-square rounded-2xl bg-secondary overflow-hidden">
              <img
                src="anna.png"
                alt="About"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-primary/10 -z-10" />
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-primary/10 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
