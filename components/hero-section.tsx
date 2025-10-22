"use client";

import Link from "next/link";
import { SiteHeader } from "./site-header";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col  py-10 bg-white overflow-hidden">
      <SiteHeader />
      <div className="absolute inset-0 bg-[url(/pattern.svg)] opacity-[0.9] bg-repeat"></div>

      <div className="z-10 flex flex-col items-center justify-center text-center mt-16 md:mt-24 px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div>
            <p className="text-sm font-semibold text-start tracking-widest text-gray-600 uppercase mb-4">
              Anna Nwaefulu
            </p>
            <h1 className="text-[3.5rem] md:text-[6rem] font-extrabold text-gray-900 leading-none">
              PRODUCT
            </h1>
          </div>

          <div className="relative">
            <img
              src="anna.png"
              alt="Portrait"
              className="w-[260px] md:w-[300px] rounded-2xl shadow-lg object-cover"
            />

            <div className="absolute -bottom-6 left-0 -translate-x-1/2">
              <img src="hand.svg" alt="Portrait" />
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <h1 className="text-[3.5rem] md:text-[6rem] font-extrabold text-gray-900 leading-none">
              DESIGNER
            </h1>
            <p className="text-gray-500 mt-2 text-sm md:text-base text-end">
              I&apos;m a US-based Product designer <br /> and Web Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
