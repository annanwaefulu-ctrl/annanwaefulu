import Link from "next/link";
import { Dribbble, X, Linkedin } from "lucide-react";
import { FaSquareUpwork } from "react-icons/fa6";

export function SiteFooter() {
  return (
    <footer className="bg-[#5E67E6] text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
          {/* Email */}
          <div className="text-center md:text-left">
            <p className="text-sm opacity-80 mb-1">Email :</p>
            <p className="text-lg font-semibold">Annanwaefulu@gmail.com </p>
          </div>

          {/* Call Info */}
          <div className="text-center">
            <p className="text-sm opacity-80 mb-1">Message Today :</p>
            <p className="text-lg font-semibold">+2349035533033</p>
          </div>

          {/* Social Icons */}
          <div className="text-center md:text-right">
            <p className="text-sm opacity-80 mb-3">Social :</p>
            <div className="flex justify-center md:justify-end gap-4">
              <Link
                href="https://dribbble.com/anna-nwaefulu"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Dribbble className="h-4 w-4 text-white" />
              </Link>
              <Link
                href="https://www.upwork.com/freelancers/~01f6fdda3b09d5beea"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <FaSquareUpwork className="h-4 w-4 text-white" />
              </Link>
              <Link
                href="https://x.com/anna_nwaefulu"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="h-4 w-4 text-white" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/anna-nwaefulu-1977b238a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-4 w-4 text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm opacity-90">
          © Copyright 2025. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
