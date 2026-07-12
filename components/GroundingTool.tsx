"use client";

import { AnimatePresence, motion } from "framer-motion";
import { GROUNDING_STEPS } from "@/lib/content";
import { useEscape } from "@/lib/hooks";

export default function GroundingTool({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEscape(onClose, open);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] bg-[#2D2A26]/40 backdrop-blur-sm flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-md rounded-2xl bg-[#FFFCF8] p-7 shadow-2xl"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-5">
              <div>
                <h3 className="font-serif text-[22px] text-[#2D2A26]">Grounding</h3>
                <p className="text-[12.5px] text-[#6B7F6E] mt-1">
                  5-4-3-2-1 • come back to the present
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-[12px] text-[#5A5652] hover:text-[#2D2A26] px-2 py-1"
              >
                Close Esc
              </button>
            </div>

            <div className="space-y-2.5">
              {GROUNDING_STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F5F1EB] border border-[#EDE8E1]"
                >
                  <span className="w-7 h-7 shrink-0 rounded-full bg-[#6B7F6E] text-[#FFFCF8] grid place-items-center text-[13px] font-medium">
                    {5 - i}
                  </span>
                  <span className="text-[14px] text-[#2D2A26]">{step}</span>
                </motion.div>
              ))}
            </div>

            <p className="mt-5 text-[12px] text-[#5A5652] leading-[1.6]">
              Breathe slowly as you notice each one. There&apos;s no wrong
              answer — just what&apos;s here, right now.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
