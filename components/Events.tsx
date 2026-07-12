"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { sectionInView, staggerContainer, wordStagger } from "@/lib/motion";
import { EVENTS } from "@/lib/content";

export default function Events({ onDeathCafeHint }: { onDeathCafeHint: () => void }) {
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [hinted, setHinted] = useState(false);

  const startHover = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => {
      if (!hinted) {
        setHinted(true);
        onDeathCafeHint();
      }
    }, 2500);
  };

  const endHover = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
  };

  return (
    <motion.section {...sectionInView} className="py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[11px] tracking-[0.16em] uppercase text-[#6B7F6E] font-semibold">
            • Community
          </span>
        </div>
        <h2 className="text-[30px] md:text-[38px] leading-[1.05] font-serif">
          Conversations about death to live more fully.
        </h2>
        <p className="mt-4 text-[14.5px] leading-[1.75] opacity-75 max-w-[52ch]">
          A gentle, non-clinical space to talk about mortality, grief, and
          meaning. No agenda, no fixing — just tea, stories, and shared
          humanity.
        </p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {EVENTS.map((ev, i) => (
            <motion.div
              key={i}
              variants={wordStagger}
              onMouseEnter={ev.deathCafe ? startHover : undefined}
              onMouseLeave={ev.deathCafe ? endHover : undefined}
              className={`rounded-2xl p-6 border transition-all ${
                ev.deathCafe
                  ? "bg-[#F2DDD5]/40 border-[#E6C3B2] hover:bg-[#F2DDD5]/70 hover:-translate-y-1"
                  : "bg-[#F5F1EB] border-[#EDE8E1] hover:-translate-y-1"
              }`}
            >
              {ev.deathCafe && (
                <div className="text-[10px] tracking-[0.14em] uppercase opacity-60 mb-3">
                  Community • Death Cafe
                </div>
              )}
              <h3 className="text-[18px] font-serif leading-[1.2] text-[#2D2A26]">
                {ev.title}
              </h3>
              <div className="text-[12.5px] text-[#6B7F6E] mt-1">{ev.place}</div>
              <p className="mt-3 text-[13px] leading-[1.6] text-[#5A5652]">{ev.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
