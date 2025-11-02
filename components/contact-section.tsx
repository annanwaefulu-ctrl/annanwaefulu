"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus(" Failed to send message.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("Error submitting form.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#f5f5ff] rounded-3xl"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
      >
        <div className="relative flex-shrink-0">
          <div className="rounded-2xl overflow-hidden shadow-md w-[320px] md:w-[360px]">
            <img
              src="/anna.png"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-[#6366f1] text-white text-xl font-semibold rounded-full h-20 w-20 flex items-center justify-center shadow-lg">
            Hi
          </div>
        </div>

        {/* Right: Form Section */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            LET’S WORK TOGETHER
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-md">
            Let’s build something impactful together—whether it’s your brand,
            your website, or your next big idea.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Smith"
                  required
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="johnsmith@gmail.com"
                  required
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Service Needed */}
            <div>
              <label className="text-sm text-gray-600">Service Needed?</label>
              <select
                name="service"
                className="w-full mt-2 px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              >
                <option value="">Select...</option>
                <option>Branding</option>
                <option>Website Design</option>
                <option>Consultation</option>
                <option>Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-600">
                What Can I Help You With?
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Hello, I’d like to enquire about..."
                required
                className="w-full mt-2 px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="px-8 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-base transition-all"
            >
              {loading ? "Sending..." : "SUBMIT"}
            </Button>

            {status && (
              <p className="text-sm text-gray-700 font-medium mt-3">{status}</p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
