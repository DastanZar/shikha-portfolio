"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Toast({ message }: { message: string | null }) {
  return (
    <div className="fixed inset-x-0 bottom-6 z-[110] flex justify-center px-4 pointer-events-none">
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto px-5 py-3 rounded-full bg-[#2D2A26] text-[#FFFCF8] text-[13.5px] shadow-xl"
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}