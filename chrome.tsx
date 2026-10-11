"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { EASE } from "@/lib/motion";
import { IMG } from "@/lib/assets";
import { NAV } from "@/lib/content";
import { MenuButton, useMenu } from "./menu";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      transition={{ ease: EASE }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-ink/70"
    />
  );
}

export function StickyHeader({ active }: { active: string }) {
  const { open } = useMenu();
  const { scrollY } = useScroll();
  const [shown, setShown] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setShown(y > window.innerHeight * 0.75));

  return (
    <AnimatePresence>
      {shown && !open && (
        <motion.header
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, ease: EASE }}
          className="fixed inset-x-0 top-0 z-40 border-b border-ink/10 bg-sky/80 backdrop-blur-xl"
        >
          <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-6 md:px-10">
            <a href="#home" aria-label="Gestión Pensional Empresarial — inicio" className="flex items-center gap-1.5">
              <span className="grid h-7 w-7 place-items-center border border-ink/60 font-wide text-[7px] text-ink">GPE</span>
              <span className="font-display text-xs uppercase tracking-[0.04em] text-ink">Gestión Pensional Empresarial</span>
            </a>
            <nav aria-label="Secciones" className="hidden items-center gap-10 md:flex">
              {NAV.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "page" : undefined}
                  className={`font-display text-xs capitalize text-ink transition-opacity duration-300 hover:opacity-100 ${
                    active === item.id ? "opacity-100" : "opacity-40"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-6">
              <a
                href="#contact"
                className="hidden rounded-full bg-neon px-5 py-2 font-sans text-xs font-semibold text-white transition-opacity hover:opacity-85 sm:block"
              >
                Solicitar diagnóstico
              </a>
              <MenuButton width="22.76px" gap="4.56px" />
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
