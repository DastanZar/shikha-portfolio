"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "@/lib/motion";
import { LINKS } from "@/lib/content";
import { useMagnetic } from "@/lib/hooks";

export default function Hero() {
  const buttonARef = useMagnetic<HTMLAnchorElement>(0.3);
  const buttonBRef = useMagnetic<HTMLAnchorElement>(0.3);

  return (
    <section className="pt-[120px] lg:pt-[148px] pb-16 lg:pb-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-start">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8EDE8] border border-[#D9E2DA] text-[11px] tracking-[0.12em] uppercase text-[#556B59] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B7F6E]" />
            RCI Licensed Clinical Psychologist • Bengaluru &amp; Online
          </div>

          <h1 className="mt-6 font-serif font-semibold text-[48px] lg:text-[76px] leading-[0.95] tracking-tight text-balance">
            Elevate Your <span className="italic font-normal text-[#6B7F6E]">Mental</span>{" "}
            Well-being
          </h1>

          <p className="mt-6 max-w-[560px] text-[15.5px] leading-[1.8] text-[#5E5A56] bg-[#F5F1EB]/70 border border-[#EDE8E1] rounded-[18px] p-5 lg:p-6">
            <span className="text-[#C17C60] font-serif text-[22px] leading-none mr-1">
              &ldquo;
            </span>
            My experience has taught me that adaptation to adversities is rarely a
            straight line, it&apos;s filled with moments of feeling better and
            awful. In my practice, I enhance my clients&apos; strengths and
            work with their growth areas simultaneously.
            <span className="text-[#C17C60] font-serif text-[22px] leading-none ml-1">
              &rdquo;
            </span>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              ref={buttonARef.ref}
              animate={{ x: buttonARef.pos.x, y: buttonARef.pos.y }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              href="#booking"
              className="px-6 py-3.5 rounded-full bg-[#2D2A26] text-white text-[14px] font-medium hover:bg-black transition shadow-[0_10px_24px_rgba(45,42,38,0.18)]"
            >
              Book Private Session
            </motion.a>
            <motion.a
              ref={buttonBRef.ref}
              animate={{ x: buttonBRef.pos.x, y: buttonBRef.pos.y }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              href={LINKS.topmate}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white border border-[#E6DDD3] text-[14px] font-medium hover:bg-[#F5F1EB] transition"
            >
              Free 10-min Discovery Call
            </motion.a>
          </div>

          <div className="mt-10 grid grid-cols-3 max-w-[420px] divide-x divide-[#E9E2D9] border border-[#EDE8E1] rounded-[20px] overflow-hidden bg-white/60 backdrop-blur">
            {[
              { k: "11+", v: "Years Experience" },
              { k: "1479+", v: "Happy Sessions" },
              { k: "5/5", v: "27 ratings on Topmate" },
            ].map((s) => (
              <div key={s.k} className="px-5 py-5 text-center">
                <div className="font-serif text-[28px] leading-none font-semibold">
                  {s.k}
                </div>
                <div className="mt-1.5 text-[11px] leading-[1.3] text-[#7A7672]">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative lg:sticky lg:top-[110px] w-full overflow-hidden lg:overflow-visible"
        >
          <div className="relative mx-auto lg:ml-auto max-w-[460px] px-2 lg:px-0">
            <div className="absolute -top-10 -right-4 lg:-right-10 w-[88%] h-[92%] rounded-[48px] bg-[#E8EDE8] rotate-[-2deg]" />
            <div className="absolute -bottom-6 -left-2 lg:-left-6 w-[88%] h-[78%] rounded-[40px] bg-[#F2DDD5] rotate-[2deg]" />
            <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#F7F3EE] to-[#EDE8E1] border border-white shadow-[0_30px_80px_rgba(45,42,38,0.12)] aspect-[4/4.6] p-7 flex flex-col">
              <Image
                src="/images/shikha.jpg"
                alt="Dr. Shikha Soni — Clinical Psychologist"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
