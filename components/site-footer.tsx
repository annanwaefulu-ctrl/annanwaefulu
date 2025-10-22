import Link from "next/link";
import { Facebook, Instagram, X, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[#5E67E6] text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
          {/* Email */}
          <div className="text-center md:text-left">
            <p className="text-sm opacity-80 mb-1">Email :</p>
            <p className="text-lg font-semibold">designer@example.com</p>
          </div>

          {/* Call Info */}
          <div className="text-center">
            <p className="text-sm opacity-80 mb-1">Call Today :</p>
            <p className="text-lg font-semibold">+1 (555) 123-4567</p>
          </div>

          {/* Social Icons */}
          <div className="text-center md:text-right">
            <p className="text-sm opacity-80 mb-3">Social :</p>
            <div className="flex justify-center md:justify-end gap-4">
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="h-4 w-4 text-white" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="h-4 w-4 text-white" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="h-4 w-4 text-white" />
              </Link>
              <Link
                href="#"
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
