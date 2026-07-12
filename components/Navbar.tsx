"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/content";
import { useScrollSpy } from "@/lib/hooks";

export default function Navbar({
  openGrounding,
  onLogoClick,
}: {
  openGrounding: () => void;
  onLogoClick: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(
    NAV_ITEMS.map((n) => n.id)
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFFCF8]/85 backdrop-blur-xl border-b border-[#EDE8E1] shadow-[0_8px_30px_rgba(45,42,38,0.06)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-content px-6 lg:px-8 h-[72px] flex items-center justify-between">
        <button
          onClick={onLogoClick}
          className="flex items-center gap-3 cursor-pointer select-none"
        >
          <div className="w-9 h-9 rounded-full bg-[#2D2A26] text-[#FFFCF8] grid place-items-center font-serif text-[18px] select-none">
            S
          </div>
          <div className="leading-tight">
            <div className="font-serif text-[19px] font-semibold tracking-tight">
              Shikha Soni, Ph.D.
            </div>
            <div className="text-[10px] tracking-[0.18em] uppercase text-[#6B7F6E] font-medium -mt-1">
              Clinical Psychologist
            </div>
          </div>
        </button>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((nav) => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              className={`text-[13.5px] tracking-wide transition-colors ${
                activeId === nav.id
                  ? "text-[#2D2A26] font-medium"
                  : "text-[#5A5652] hover:text-[#2D2A26]"
              }`}
            >
              {nav.label}
            </a>
          ))}
          <button
            onClick={openGrounding}
            className="text-[13.5px] tracking-wide text-[#C17C60] hover:text-[#A86A4A] transition-colors font-medium"
          >
            Grounding
          </button>
          <a
            href="#booking"
            className="ml-2 px-5 py-2.5 rounded-full bg-[#2D2A26] text-white text-[13px] font-medium hover:bg-black transition"
          >
            Book Appointment
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-10 h-10 rounded-full bg-[#F5F1EB] grid place-items-center"
        >
          <div className="space-y-1.5">
            <div
              className={`h-[1.5px] w-5 bg-[#2D2A26] transition ${
                menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <div
              className={`h-[1.5px] w-5 bg-[#2D2A26] transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`h-[1.5px] w-5 bg-[#2D2A26] transition ${
                menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#FFFCF8] border-t border-[#EDE8E1] px-6 py-6 space-y-4 shadow-xl overflow-hidden"
          >
            {NAV_ITEMS.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                onClick={() => setMenuOpen(false)}
                className="block text-[15px] py-1"
              >
                {nav.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                openGrounding();
              }}
              className="block text-[15px] py-1 text-[#C17C60]"
            >
              Grounding Tool
            </button>
            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="block mt-2 text-center px-5 py-3 rounded-full bg-[#2D2A26] text-white font-medium"
            >
              Book Appointment
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
