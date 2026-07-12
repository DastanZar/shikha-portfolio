"use client";

import { motion } from "framer-motion";
import { LINKS } from "@/lib/content";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 lg:py-28 bg-[#2D2A26] text-[#F5F1EB]"
    >
      <div className="mx-auto max-w-content px-6 lg:px-8 text-center">
        <div className="font-serif text-[26px] leading-[1.4] max-w-[640px] mx-auto text-balance">
          &ldquo;It is during our darkest moments that we must focus to see
          the light.&rdquo;
        </div>
        <div className="text-[12px] tracking-[0.14em] uppercase text-[#A9BFAE] mt-4">
          — Aristotle
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-[13.5px]">
          <a
            href="#booking"
            className="px-6 py-3 rounded-full bg-[#FFFCF8] text-[#2D2A26] font-medium hover:bg-[#E8EDE8] transition-colors"
          >
            Book a Session
          </a>
          <a
            href={LINKS.topmate}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A9BFAE] hover:text-[#FFFCF8] transition-colors"
          >
            Topmate ↗
          </a>
          <a
            href={`mailto:${LINKS.email}`}
            className="text-[#A9BFAE] hover:text-[#FFFCF8] transition-colors"
          >
            {LINKS.email}
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-[12px] text-[#A9BFAE] flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <span>RCI Licensed Clinical Psychologist</span>
          <span className="hidden md:inline">•</span>
          <span>Bengaluru &amp; Online</span>
          <span className="hidden md:inline">•</span>
          <span>© {new Date().getFullYear()} Dr. Shikha Soni</span>
        </div>
      </div>
    </motion.footer>
  );
}