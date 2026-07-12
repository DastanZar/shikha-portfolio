"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sectionInView } from "@/lib/motion";
import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const s = setInterval(() => setIndex((m) => (m + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(s);
  }, []);

  const t = TESTIMONIALS[index];

  return (
    <motion.section {...sectionInView} className="py-20 lg:py-28 bg-[#2D2A26] text-[#FFFCF8]">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[11px] tracking-[0.16em] uppercase text-[#A9BFAE] font-semibold">
            • What clients say
          </span>
        </div>

        <div className="min-h-[200px] lg:min-h-[160px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="max-w-[760px]"
            >
              <div className="font-serif text-[34px] leading-none text-[#6B7F6E] mb-4 select-none">
                &ldquo;
              </div>
              <p className="text-[18px] lg:text-[22px] leading-[1.55] text-balance -mt-6">
                {t.text}
              </p>
              <div className="mt-6 text-[14px]">
                <span className="font-medium">{t.name}</span>
                <span className="text-[#A9BFAE]"> • {t.role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-[#6B7F6E]" : "w-3 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}