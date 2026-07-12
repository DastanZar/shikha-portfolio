"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function useCountUp(end: number, inView: boolean, duration = 1800): number {
  const [value, setValue] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setValue(end);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * end));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, inView, duration, reduceMotion]);

  return value;
}

export function useMagnetic<T extends HTMLElement = HTMLButtonElement>(strength = 0.35) {
  const ref = useRef<T | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setPos({ x: x * strength, y: y * strength });
    };
    const onLeave = () => setPos({ x: 0, y: 0 });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength, reduceMotion]);

  return { ref, pos };
}

export function useScrollSpy(ids: string[], offset = 120): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => {
      const scroll = window.scrollY + offset;
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scroll) {
          current = id;
        }
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [ids, offset]);

  return active;
}

export function useIdleTimer(ms: number, inView: boolean): boolean {
  const [idle, setIdle] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScroll = useRef<number>(Date.now());

  useEffect(() => {
    if (!inView) {
      setIdle(false);
      if (timer.current) clearTimeout(timer.current);
      return;
    }
    lastScroll.current = Date.now();
    const reset = () => {
      lastScroll.current = Date.now();
      setIdle(false);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setIdle(true), ms);
    };
    reset();
    const opts = ["scroll", "touchmove", "wheel", "keydown", "mousemove"] as const;
    opts.forEach((e) => window.addEventListener(e, reset, { passive: true }));
    return () => {
      opts.forEach((e) => window.removeEventListener(e, reset));
      if (timer.current) clearTimeout(timer.current);
    };
  }, [ms, inView]);

  return idle;
}

export function useEscape(callback: () => void, active: boolean) {
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") callback();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, callback]);
}
