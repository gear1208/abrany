"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useAnimationFrame,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import { EASE } from "@/lib/motion";

/* EFFECT-08 */
export function Magnetic({
  children,
  strength = 0.3,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const x = useSpring(rx, { stiffness: 170, damping: 16, mass: 0.4 });
  const y = useSpring(ry, { stiffness: 170, damping: 16, mass: 0.4 });

  return (
    <motion.div
      style={{ x, y }}
      className={`inline-block ${className ?? ""}`}
      onMouseMove={(event) => {
        if (reduced) return;
        const box = event.currentTarget.getBoundingClientRect();
        rx.set((event.clientX - (box.left + box.width / 2)) * strength);
        ry.set((event.clientY - (box.top + box.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/* EFFECT-09 */
export function Spotlight({
  children,
  className,
  radius = 260,
}: {
  children: React.ReactNode;
  className?: string;
  radius?: number;
}) {
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${x}px ${y}px, rgba(255,255,255,0.35), transparent 68%)`;

  return (
    <div
      className={`group/spot relative ${className ?? ""}`}
      onMouseMove={(event) => {
        const box = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - box.left);
        y.set(event.clientY - box.top);
      }}
      onMouseLeave={() => {
        x.set(-9999);
        y.set(-9999);
      }}
    >
      <motion.span
        aria-hidden
        style={{ background }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
      />
      {children}
    </div>
  );
}

/* EFFECT-13 */
export function Drift({ className, distance = 90 }: { className?: string; distance?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <div ref={ref} aria-hidden className={`pointer-events-none absolute ${className ?? ""}`}>
      <motion.span style={{ y }} className="block h-full w-full rounded-full bg-white/30 blur-[80px]" />
    </div>
  );
}

/* EFFECT-12 */
export function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, reduced]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

/* EFFECT-10 */
export function Marquee({
  words,
  baseVelocity = -2.2,
  className,
}: {
  words: readonly string[];
  baseVelocity?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const baseX = useMotionValue(0);
  const direction = useRef(1);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [-1200, 0, 1200], [-2.4, 0, 2.4], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (reduced) return;
    let moveBy = direction.current * baseVelocity * (delta / 1000);
    const scrolling = factor.get();
    if (scrolling < 0) direction.current = -1;
    else if (scrolling > 0) direction.current = 1;
    moveBy += direction.current * moveBy * Math.abs(scrolling);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      aria-hidden
      className={`relative w-full overflow-hidden border-y border-ink/10 py-7 ${className ?? ""}`}
    >
      <motion.div style={{ x }} className="flex w-max flex-nowrap">
        {[0, 1, 2, 3].map((copy) => (
          <span key={copy} className="flex shrink-0 items-center">
            {words.map((word) => (
              <span key={word} className="flex shrink-0 items-center">
                <span className="px-8 font-display text-[7vw] font-semibold uppercase leading-none tracking-[-0.03em] text-ink/25 lg:text-[4vw]">
                  {word}
                </span>
                <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink/25" />
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* EFFECT-19: label roll-up. Parent must carry `group`. */
export function RollLabel({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span className={`relative block overflow-hidden ${className ?? ""}`} style={style}>
      <span className="block transition-transform duration-500 ease-out group-hover:-translate-y-full">
        {children}
      </span>
      <span
        aria-hidden
        className="absolute left-0 top-0 block translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"
      >
        {children}
      </span>
    </span>
  );
}
