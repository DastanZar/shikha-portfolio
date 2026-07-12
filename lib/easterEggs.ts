"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { FLOURISH_WORDS } from "./content";

export type Overlay = "breathing" | "garden" | "grounding" | null;

export function useEasterEggs() {
  const [overlay, setOverlay] = useState<Overlay>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [confettiWords, setConfettiWords] = useState<
    { id: number; word: string; x: number; r: number }[]
  >([]);

  // Konami code
  const konamiKeys = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a",
  ];
  const keyBuf = useRef<string[]>([]);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      keyBuf.current = [...keyBuf.current.slice(-9), e.key];
      if (keyBuf.current.join(",") === konamiKeys.join(",")) {
        setOverlay((prev) => (prev === "garden" ? null : "garden"));
        setToastMessage(
          overlay === "garden"
            ? "Daylight restored ☀️"
            : "You found the resilience garden 🌱"
        );
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Logo 5-tap breathing
  const logoTapCount = useRef<number[]>([]);
  const onLogoClick = useCallback(() => {
    const now = Date.now();
    logoTapCount.current = [...logoTapCount.current, now].filter(
      (t) => now - t < 3000
    );
    if (logoTapCount.current.length >= 5) {
      setOverlay("breathing");
      setToastMessage("Breathing space opened — inhale with me 🧘");
      logoTapCount.current = [];
    } else if (logoTapCount.current.length === 1) {
      setToastMessage("Logo holds a secret — try 5 quick taps");
    } else {
      setToastMessage(
        `${5 - logoTapCount.current.length} more to unlock breathing ritual`
      );
    }
  }, []);

  // Flourish keystroke buffer
  const flourishBuf = useRef("");
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key.length === 1 && e.key.match(/[a-z]/i)) {
        flourishBuf.current = (flourishBuf.current + e.key.toLowerCase()).slice(
          -8
        );
        if (flourishBuf.current === "flourish") {
          const newWords = FLOURISH_WORDS.map((w, i) => ({
            id: Date.now() + i,
            word: w,
            x: 10 + Math.random() * 80,
            r: -15 + Math.random() * 30,
          }));
          setConfettiWords((prev) => [...prev, ...newWords]);
          setTimeout(() => {
            setConfettiWords((prev) =>
              prev.filter((c) => c.id < Date.now() - 4500)
            );
          }, 6000);
          flourishBuf.current = "";
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Console message
  useEffect(() => {
    const style =
      "font-family: Fraunces, serif; font-size: 24px; color: #6B7F6E; padding: 12px 20px;";
    console.log(
      "%c🌱 You found a quiet corner. Dr. Shikha Soni's space — built with care, not caffeine.",
      style
    );
    console.log(
      "%cTry typing 'flourish' anywhere. Or click the logo 5 times. Or ⬆⬆⬇⬇⬅➡⬅➡ B A",
      "font-size: 12px; color: #A9BFAE;"
    );
  }, []);

  return {
    overlay,
    setOverlay,
    toastMessage,
    setToastMessage,
    confettiWords,
    onLogoClick,
  } as const;
}