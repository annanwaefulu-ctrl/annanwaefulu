"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteHeader } from "./site-header";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col py-10 bg-white overflow-hidden">
      <SiteHeader />

      {/* Background pattern */}
      <motion.div
        className="absolute inset-0 bg-[url(/pattern.svg)] opacity-[0.9] bg-repeat"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.9 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
      />

      {/* Content */}
      <div className="z-10 flex flex-col items-center justify-center text-center mt-16 md:mt-24 px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left: PRODUCT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-[16px] md:text-2xl font-semibold text-center md:text-start tracking-widest text-gray-600 uppercase mb-4">
              Anna Nwaefulu
            </p>
            <motion.h1
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-[3.5rem] md:text-[6rem] font-extrabold text-gray-900 leading-none"
            >
              PRODUCT
            </motion.h1>
          </motion.div>

          {/* Center image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.img
              src="anna.png"
              alt="Portrait"
              className="w-[260px] md:w-[300px] rounded-2xl shadow-lg object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            <motion.div
              className="absolute -bottom-6 left-0 -translate-x-1/2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src="hand.svg" alt="Hand graphic" />
            </motion.div>
          </motion.div>

          {/* Right: DESIGNER */}
          <motion.div
            className="flex flex-col items-start md:items-end"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.h1
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-[3.5rem] md:text-[6rem] font-extrabold text-gray-900 leading-none"
            >
              DESIGNER
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-500 mt-2 text-sm md:text-base md:text-end"
            >
              I&apos;m a US-based Product designer <br /> and Web Developer
            </motion.p>
          </motion.div>
        </div>

        {/* CTA button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Link href="#projects">
            <button className="bg-[#5E67E6] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#5E67E6]/90 transition-all shadow-lg">
              Explore My Work
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
