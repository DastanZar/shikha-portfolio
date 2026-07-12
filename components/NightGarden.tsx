"use client";

import { motion } from "framer-motion";

export default function NightGarden({ open }: { open: boolean }) {
  if (!open) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-10">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
          }}
          animate={{
            opacity: [0, 0.9, 0.2, 0.8, 0],
            x: [
              `${Math.random() * 100}vw`,
              `${Math.random() * 100}vw`,
              `${Math.random() * 100}vw`,
            ],
            y: [
              `${Math.random() * 100}vh`,
              `${Math.random() * 100}vh`,
              `${Math.random() * 100}vh`,
            ],
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
          className="absolute w-[3px] h-[3px] rounded-full"
          style={{
            background: "#E7FFB0",
            boxShadow: "0 0 12px #E7FFB0, 0 0 28px #E7FFB0",
          }}
        />
      ))}
    </div>
  );
}