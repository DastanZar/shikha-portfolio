"use client";

import { motion } from "framer-motion";
import { sectionInView, staggerContainer, wordStagger } from "@/lib/motion";
import { PUBLICATIONS } from "@/lib/content";

export default function Publications() {
  return (
    <motion.section id="publications" {...sectionInView} className="py-20 lg:py-28 bg-[#F5F1EB]">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[11px] tracking-[0.16em] uppercase text-[#6B7F6E] font-semibold">
            • Publications &amp; Research
          </span>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {PUBLICATIONS.map((pub, i) => (
            <motion.article
              key={i}
              variants={wordStagger}
              className="rounded-2xl p-6 bg-white border border-[#EDE8E1] hover:shadow-md transition-shadow"
            >
              <h3 className="font-serif text-[18px] font-medium leading-[1.3] text-[#2D2A26]">
                {pub.title}
              </h3>
              <div className="text-[12.5px] text-[#C17C60] mt-2">{pub.authors}</div>
              <div className="text-[12.5px] text-[#6B7F6E] italic">{pub.venue}</div>
              <p className="mt-3 text-[13px] leading-[1.65] text-[#5A5652]">{pub.abs}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
