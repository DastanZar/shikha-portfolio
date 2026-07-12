"use client";

import { motion } from "framer-motion";
import { sectionInView, staggerContainer, wordStagger } from "@/lib/motion";
import { EDUCATION } from "@/lib/content";

export default function Education() {
  return (
    <motion.section id="education" {...sectionInView} className="py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[11px] tracking-[0.16em] uppercase text-[#6B7F6E] font-semibold">
            • Education
          </span>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={i}
              variants={wordStagger}
              className={`rounded-2xl p-6 border transition-colors ${
                edu.highlight
                  ? "bg-[#E8EDE8]/40 border-[#D9E2DA] hover:bg-[#E8EDE8]/70"
                  : "bg-[#F5F1EB]/60 border-[#EDE8E1] hover:bg-[#F5F1EB]"
              }`}
            >
              <div className="text-[11px] tracking-[0.12em] uppercase text-[#6B7F6E] mb-2">
                {edu.year}
              </div>
              <h3 className="font-serif text-[20px] font-medium text-[#2D2A26]">
                {edu.title}
              </h3>
              <div className="text-[13px] text-[#6B7F6E] mt-1">{edu.org}</div>
              <p className="mt-3 text-[13.5px] leading-[1.65] text-[#5A5652]">
                {edu.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
