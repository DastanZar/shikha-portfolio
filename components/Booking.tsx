"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { sectionInView, staggerContainer, wordStagger } from "@/lib/motion";
import { LINKS, TOPMATE_BENEFITS, PRIVATE_PRACTICE_BENEFITS } from "@/lib/content";
import { useIdleTimer, useMagnetic } from "@/lib/hooks";
import { Overlay } from "@/lib/easterEggs";

export default function Booking({
  onIdlePaperPlane,
}: {
  onIdlePaperPlane: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-20%" });
  const idle = useIdleTimer(8000, inView);
  const privateRef = useMagnetic<HTMLAnchorElement>(0.18);
  const topmateRef = useMagnetic<HTMLAnchorElement>(0.18);

  if (idle) {
    onIdlePaperPlane();
  }

  return (
    <motion.section id="booking" {...sectionInView} className="py-20 lg:py-28" ref={ref}>
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] tracking-[0.16em] uppercase text-[#6B7F6E] font-semibold">
            • Book a Session
          </span>
        </div>
        <h2 className="text-[30px] lg:text-[40px] font-serif leading-[1.1] text-balance max-w-[640px]">
          Taking the first step is the bravest one
        </h2>
        <p className="mt-4 text-[15px] leading-[1.75] text-[#5A5652] max-w-[58ch]">
          Choose what feels right for you. Private practice for ongoing therapy,
          or a free discovery call to see if we&apos;re a fit.
        </p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Card A: Private Practice */}
          <motion.div
            variants={wordStagger}
            className="rounded-2xl p-7 bg-[#2D2A26] text-[#FFFCF8] shadow-lg relative overflow-hidden"
          >
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#6B7F6E]/20 rounded-full blur-2xl" />
            <div className="relative">
              <div className="text-[11px] tracking-[0.14em] uppercase opacity-60">
                Private Practice
              </div>
              <div className="text-[11px] px-2 py-1 rounded-full bg-[#FFFCF8] border inline-block mt-2" style={{ color: "#2D2A26", borderColor: "rgba(255,255,255,0.2)" }}>
                Online &amp; In-Person Bengaluru
              </div>
              <h3 className="mt-4 text-[22px] leading-[1.2] font-serif">Therapy that fits your life</h3>
              <p className="mt-2 text-[13.5px] leading-[1.7] opacity-75">
                Ongoing 50-min sessions, integrative and evidence-based. Intake,
                consent, and secure video in one calm place.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-[12.5px]">
                {PRIVATE_PRACTICE_BENEFITS.map((b, i) => (
                  <div key={i} className="rounded-[12px] p-3 bg-[rgba(255,255,255,0.07)]">
                    ✔ {b}
                  </div>
                ))}
              </div>
              <motion.a
                ref={privateRef.ref}
                animate={{ x: privateRef.pos.x, y: privateRef.pos.y }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                href={LINKS.privateBooking}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block text-center px-5 py-3.5 rounded-full bg-[#FFFCF8] text-[#2D2A26] text-[14px] font-medium hover:bg-[#E8EDE8] transition-colors"
              >
                Book Private Session →
              </motion.a>
            </div>
          </motion.div>

          {/* Card B: Topmate */}
          <motion.div
            variants={wordStagger}
            className="rounded-2xl p-7 bg-[#E8EDE8]/50 border border-[#D9E2DA] relative overflow-hidden"
          >
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#F2DDD5]/50 rounded-full blur-2xl" />
            <div className="relative">
              <div className="text-[11px] tracking-[0.14em] uppercase text-[#556B59] font-semibold">
                Free Discovery Call
              </div>
              <div className="text-[11px] px-2 py-1 rounded-full bg-white border border-[#D9E2DA] inline-block mt-2 text-[#2D2A26]">
                15 min • No commitment
              </div>
              <h3 className="mt-4 text-[22px] leading-[1.2] font-serif text-[#2D2A26]">
                A conversation, not a commitment
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.7] text-[#5A5652]">
                Not sure therapy is for you? A short, free call to talk it
                through. Top-rated 5/5 across 27 reviews.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-[12.5px] text-[#2D2A26]">
                {TOPMATE_BENEFITS.map((b, i) => (
                  <div key={i} className="rounded-[12px] p-3 bg-white border border-[#EDE8E1]">
                    ✔ {b}
                  </div>
                ))}
              </div>
              <motion.a
                ref={topmateRef.ref}
                animate={{ x: topmateRef.pos.x, y: topmateRef.pos.y }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                href={LINKS.topmate}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block text-center px-5 py-3.5 rounded-full bg-[#2D2A26] text-[#FFFCF8] text-[14px] font-medium hover:bg-black transition-colors"
              >
                Topmate • Quick Connect ↗
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
