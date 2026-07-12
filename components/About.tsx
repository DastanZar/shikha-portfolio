"use client";

import { motion } from "framer-motion";
import { sectionInView } from "@/lib/motion";

export default function About() {
  return (
    <motion.section id="about" {...sectionInView} className="py-20 lg:py-28 bg-[#F5F1EB]">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="max-w-[680px] lg:mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[11px] tracking-[0.16em] uppercase text-[#6B7F6E] font-semibold">
              • About
            </span>
          </div>
          <h2 className="text-[30px] lg:text-[40px] font-serif leading-[1.1] text-balance">
            Therapy is not about what&apos;s broken — it&apos;s about what&apos;s possible
          </h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-[#5A5652] text-balance">
            My practice sits at the intersection of evidence and empathy. I
            trained at India&apos;s premier clinical institutions — CIP Ranchi,
            NIMHANS Bengaluru, and IIT Hyderabad — and built a career around
            helping people not just cope, but flourish. I work with adults,
            couples, and queer individuals seeking a therapist who brings both
            clinical rigor and deep respect for their lived experience.
          </p>
          <p className="mt-4 text-[15px] leading-[1.75] text-[#5A5652] text-balance">
            My Ph.D. research explored how people re-author their identity after
            loss — through narrative coherence and meaning-making. This
            narrative lens shapes everything I do in the therapy room. I
            don&apos;t just look at symptoms; I look at your story, your
            strengths, and what a meaningful life looks like to you.
          </p>
          <p className="mt-4 text-[15px] leading-[1.75] text-[#5A5652] text-balance">
            Online sessions are available across India. In-person sessions in
            Bengaluru. Sessions offered in English and Hindi.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
