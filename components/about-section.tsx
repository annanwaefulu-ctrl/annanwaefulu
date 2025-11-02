"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { FaDribbble, FaInstagram, FaBehance } from "react-icons/fa";

export function AboutSection() {
  const stats = [
    { value: "8+", label: "Years of Experience" },
    { value: "100+", label: "Completed Projects" },
    { value: "20+", label: "Clients on Worldwide" },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-20 md:py-32 bg-[#EFF0FD]"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              ABOUT ME
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
              <p>
                Hi, I'm <strong>Anna</strong> — a product designer and web
                developer passionate about crafting meaningful and impactful
                digital experiences. 🚀 Tired of designs that look fine but
                don’t move the needle? I design high-performing UI/UX in Figma
                that transforms products into growth engines — helping SaaS
                founders and startups boost conversions, retain users, and
                attract investors with interfaces that feel effortless, modern,
                and built to scale.
              </p>
              <p>
                I help startups, SaaS companies, and businesses create modern,
                conversion-focused mobile apps, websites, and dashboards using
                Figma. With 8+ years of experience, I focus on your goals,
                higher engagement, smoother user journeys, and scalable designs
                that drive growth. From concept to launch, I ensure every design
                decision supports your brand, your users, and your bottom line.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${(i + 1) * 150}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-extrabold text-[#5E67E6] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-10 space-y-4 text-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8">
                <div>
                  <p className="text-sm font-semibold">Call Today :</p>
                  <p className="text-base font-medium">
                    <Phone className="inline-block w-4 h-4 mr-2 text-[#5E67E6]" />
                    +1 (555) 123-4567
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Email :</p>
                  <p className="text-base font-medium">
                    <Mail className="inline-block w-4 h-4 mr-2 text-[#5E67E6]" />
                    designer@example.com
                  </p>
                </div>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="#"
                  className="p-3 bg-white rounded-full shadow hover:bg-[#5E67E6]/10 transition"
                >
                  <FaDribbble className="text-[#5E67E6] w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-white rounded-full shadow hover:bg-[#5E67E6]/10 transition"
                >
                  <FaInstagram className="text-[#5E67E6] w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-white rounded-full shadow hover:bg-[#5E67E6]/10 transition"
                >
                  <FaBehance className="text-[#5E67E6] w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            } flex justify-center`}
          >
            <div className="relative">
              <img
                src="/anna2.png"
                alt="Anna portrait"
                className="  transform "
              />
              {/* <div className="absolute inset-0 rounded-2xl ring-8 ring-white/60"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
