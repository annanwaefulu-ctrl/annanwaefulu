"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "John Harris",
      role: "Marketing Director",
      content:
        "Anna truly understood my vision and turned it into impactful designs. The results went beyond my expectations!",
      avatar: "/review1.png",
    },
    {
      name: "Laura Bennett",
      role: "Small Business Owner",
      content:
        "As a small business owner, I appreciated how stress-free Anna made the process.",
      avatar: "/review2.png",
    },
    {
      name: "Michael Lee",
      role: "Product Manager",
      content:
        "She took the time to understand our goals and delivered a design that resonated perfectly with our audience.",
      avatar: "/review3.png",
    },
    {
      name: "Michael Lee",
      role: "Product Manager",
      content:
        "She took the time to understand our goals and delivered a design that resonated perfectly with our audience.",
      avatar: "/review3.png",
    },
    {
      name: "Sarah Johnson",
      role: "CEO",
      content:
        "Her design skills are unmatched. She transformed my ideas into a high-performing, visually striking website.",
      avatar: "/review4.png",
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade-in animation trigger
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Autoslide logic for mobile
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = container.children;
    if (!cards.length) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % cards.length;
      const nextCard = cards[currentIndex] as HTMLElement;
      container.scrollTo({
        left: nextCard.offsetLeft,
        behavior: "smooth",
      });
    }, 4000); // every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container !py-24 md:!py-32 "
      id="testimonial"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 text-center md:text-left ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-4xl md:text-6xl text-[#525359] font-bold mb-4 tracking-tight">
            WHAT MY CLIENTS SAY
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl text-balance leading-relaxed">
            Here’s what my clients have shared about their experiences working
            with me. Their trust and satisfaction motivate me to continue
            delivering designs that make an impact.
          </p>
        </div>

        {/* Desktop Grid (6 Cards) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {/* Highlight Card */}
          <div
            className={`rounded-2xl bg-primary text-primary-foreground p-8 flex flex-col justify-center transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-base mb-6 opacity-90">
              I’ve worked with 50+ happy clients
            </p>
            <h3 className="text-6xl font-bold leading-none mb-2">98%</h3>
            <p className="text-sm opacity-80">Satisfaction Rate</p>
          </div>

          {/* Top Row (2 testimonials) */}
          {testimonials.slice(0, 2).map((testimonial, i) => (
            <div
              key={i}
              className={`rounded-2xl bg-muted/30 p-8 shadow-sm hover:shadow-md transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom Row (3 testimonials) */}
          {testimonials.slice(2).map((testimonial, i) => (
            <div
              key={`bottom-${i}`}
              className={`rounded-2xl bg-muted/30 p-8 shadow-sm hover:shadow-md transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(i + 3) * 100}ms` }}
            >
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel (Auto-sliding) */}
        <motion.div
          ref={scrollRef}
          className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-4 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Highlight Card */}
          <div className="min-w-[80%] snap-start rounded-2xl bg-primary text-primary-foreground p-8 flex flex-col justify-center">
            <p className="text-base mb-6 opacity-90">
              I’ve worked with 50+ happy clients
            </p>
            <h3 className="text-6xl font-bold leading-none mb-2">98%</h3>
            <p className="text-sm opacity-80">Satisfaction Rate</p>
          </div>

          {/* Testimonial Cards */}
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="min-w-[80%] snap-start rounded-2xl bg-muted/30 p-8 shadow-sm"
            >
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
