"use client";

import { motion } from "framer-motion";
import { sectionInView, staggerContainer, wordStagger } from "@/lib/motion";
import { EXPERIENCE } from "@/lib/content";

export default function Experience() {
  return (
    <motion.section id="experience" {...sectionInView} className="py-20 lg:py-28 bg-[#F5F1EB]">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[11px] tracking-[0.16em] uppercase text-[#6B7F6E] font-semibold">
            • Experience
          </span>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-6"
        >
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              variants={wordStagger}
              className="rounded-2xl p-6 bg-white border border-[#EDE8E1] hover:shadow-md transition-shadow"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="font-serif text-[20px] font-medium text-[#2D2A26]">
                  {exp.place}
                </h3>
                <span className="text-[11px] tracking-[0.12em] uppercase text-[#6B7F6E]">
                  {exp.period}
                </span>
              </div>
              <div className="text-[13px] text-[#C17C60] font-medium mb-3">
                {exp.role}
              </div>
              <ul className="space-y-1.5">
                {exp.points.map((p, j) => (
                  <li
                    key={j}
                    className="text-[13.5px] leading-[1.65] text-[#5A5652] flex items-start gap-2"
                  >
                    <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#6B7F6E] shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
