"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useEscape } from "@/lib/hooks";

export default function BreathingOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [phase, setPhase] = useState<"inhale" | "hold" | "exhale">("inhale");
  useEscape(onClose, open);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    const seq = async () => {
      setPhase("inhale");
      await new Promise((r) => setTimeout(r, 4000));
      if (cancelled) return;
      setPhase("hold");
      await new Promise((r) => setTimeout(r, 7000));
      if (cancelled) return;
      setPhase("exhale");
      await new Promise((r) => setTimeout(r, 8000));
      if (!cancelled && open) seq();
    };
    seq();
    return () => {
      cancelled = true;
    };
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#FFFCF8]/90 backdrop-blur-md flex items-center justify-center p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-[13px] text-[#5A5652] hover:text-[#2D2A26]"
          >
            Close Esc
          </button>
          <div className="text-center">
            <motion.div
              animate={{ scale: phase === "inhale" ? 1.4 : phase === "hold" ? 1.4 : 1 }}
              transition={{
                duration:
                  phase === "inhale" ? 4 : phase === "hold" ? 0.2 : 8,
                ease: "easeInOut",
              }}
              className="w-48 h-48 mx-auto rounded-full bg-[#6B7F6E]/20 border border-[#6B7F6E]/30 flex items-center justify-center"
            >
              <span className="text-[#6B7F6E] font-serif text-xl capitalize">
                {phase}
              </span>
            </motion.div>
            <p className="mt-8 text-[#2D2A26] text-[15px]">
              {phase === "inhale"
                ? "Inhale through nose 4s"
                : phase === "hold"
                ? "Hold 7s"
                : "Exhale slowly 8s"}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
