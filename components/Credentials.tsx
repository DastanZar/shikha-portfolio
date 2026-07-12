"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { sectionInView, staggerContainer, wordStagger } from "@/lib/motion";
import { CREDENTIALS } from "@/lib/content";
import { useCountUp } from "@/lib/hooks";

export default function Credentials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(1479, inView, 2200);

  return (
    <motion.section id="credentials" {...sectionInView} className="py-20 lg:py-28" ref={ref}>
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] tracking-[0.16em] uppercase text-[#6B7F6E] font-semibold">
            • Credentials &amp; Trust
          </span>
        </div>

        <div className="mb-10 text-center">
          <div className="font-serif text-[52px] lg:text-[64px] font-medium text-[#2D2A26] tabular-nums">
            {count}+
          </div>
          <div className="text-[14px] text-[#5A5652] mt-1">
            sessions conducted • top-rated on Topmate (5/5, 27 ratings)
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {CREDENTIALS.map((c, i) => (
            <motion.div
              key={i}
              variants={wordStagger}
              className="rounded-xl p-5 bg-[#F5F1EB]/60 border border-[#EDE8E1] hover:bg-[#F5F1EB] transition-colors text-center"
            >
              <div className="text-[28px] text-[#6B7F6E] mb-3">{c.icon}</div>
              <div className="font-serif text-[14px] font-medium text-[#2D2A26]">{c.title}</div>
              <div className="text-[11.5px] text-[#5A5652] mt-1 leading-[1.5]">{c.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
