"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Credentials from "./Credentials";
import Publications from "./Publications";
import Booking from "./Booking";
import Testimonials from "./Testimonials";
import Events from "./Events";
import Footer from "./Footer";
import GroundingTool from "./GroundingTool";
import BreathingOverlay from "./BreathingOverlay";
import NightGarden from "./NightGarden";
import Toast from "./Toast";
import { useEasterEggs } from "@/lib/easterEggs";
import { VARIANTS, Variant } from "@/lib/variants";

export default function Portfolio({ variant }: { variant: Variant }) {
  const theme = VARIANTS[variant];
  const { scrollYProgress, scrollY } = useScroll();

  // background blob parallax
  const y1 = useTransform(scrollY, [0, 800], [0, -120]);
  const y2 = useTransform(scrollY, [0, 800], [0, 180]);
  const y3 = useTransform(scrollY, [0, 800], [0, -60]);

  const {
    overlay,
    setOverlay,
    toastMessage,
    setToastMessage,
    confettiWords,
    onLogoClick,
  } = useEasterEggs();

  const [toast, setToast] = useState<string | null>(null);
  useEffect(() => {
    if (toastMessage) {
      setToast(toastMessage);
      const t = setTimeout(() => setToast(null), 3200);
      return () => clearTimeout(t);
    }
  }, [toastMessage]);

  const openGrounding = () => setOverlay("grounding");
  const onIdlePaperPlane = () => {
    if (!toast) {
      setToast("Ready to reach out? ✈️ Scroll-free for a bit — the booking is just below.");
    }
  };
  const onDeathCafeHint = () => setToast("Death Cafes are open, gentle spaces. Want to know more? 🍵");

  return (
    <div className={`min-h-screen text-[#2D2A26] antialiased selection:bg-[#E8EDE8] ${theme.bg}`}>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress, background: theme.accent }}
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]"
      />

      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-16 left-0 w-[360px] md:w-[480px] h-[360px] md:h-[480px] rounded-full blur-[70px] md:blur-[90px] opacity-40 will-change-transform"
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(60% 60% at 50% 30%, ${theme.blob1} 0%, transparent 70%)`,
            }}
          />
        </motion.div>
        <motion.div
          style={{ y: y2 }}
          className="absolute top-[460px] right-0 w-[340px] md:w-[520px] h-[340px] md:h-[520px] rounded-full blur-[70px] md:blur-[90px] opacity-40 will-change-transform"
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(60% 60% at 50% 50%, ${theme.blob2} 0%, transparent 70%)`,
            }}
          />
        </motion.div>
        <motion.div
          style={{ y: y3 }}
          className="absolute top-[1180px] left-[18%] w-[300px] md:w-[380px] h-[300px] md:h-[380px] rounded-full blur-[60px] md:blur-[80px] opacity-30 will-change-transform"
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 50%, #A9BFAE 0%, transparent 70%)",
            }}
          />
        </motion.div>
      </div>

      {/* Night garden easter egg layer */}
      <NightGarden open={overlay === "garden"} />

      {/* Confetti flourish words */}
      <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
        <AnimatePresence>
          {confettiWords.map((w) => (
            <motion.div
              key={w.id}
              initial={{ y: -40, x: `${w.x}vw`, opacity: 0, rotate: w.r }}
              animate={{ y: "110vh", opacity: [0, 1, 1, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 6, ease: "easeIn" }}
              className="absolute top-0 font-serif text-[22px] text-[#6B7F6E]"
            >
              {w.word}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <Navbar openGrounding={openGrounding} onLogoClick={onLogoClick} />

      <main className="relative z-[1]">
        <Hero />
        <About />
        {variant === "b" && (
          <section className="py-10 lg:py-16 bg-[#2D2A26] text-[#FFFCF8]">
            <div className="mx-auto max-w-content px-6 lg:px-8 text-center">
              <p className="font-serif text-[28px] lg:text-[40px] leading-[1.3] max-w-[820px] mx-auto text-balance">
                &ldquo;We are not defined by what happened to us, but by the
                meaning we make of it.&rdquo;
              </p>
            </div>
          </section>
        )}
        <Education />
        <Experience />
        <Credentials />
        <Publications />
        <Booking onIdlePaperPlane={onIdlePaperPlane} />
        <Testimonials />
        <Events onDeathCafeHint={onDeathCafeHint} />
        <Footer />
      </main>

      {/* Overlays */}
      <GroundingTool
        open={overlay === "grounding"}
        onClose={() => setOverlay(null)}
      />
      <BreathingOverlay
        open={overlay === "breathing"}
        onClose={() => setOverlay(null)}
      />

      {/* Toast */}
      <Toast message={toast} />
    </div>
  );
}
