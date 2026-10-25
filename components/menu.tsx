"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { IMG } from "@/lib/assets";
import { NAV } from "@/lib/content";
import { setSmoothScroll } from "./smooth-scroll";

type Menu = { open: boolean; toggle: () => void; close: () => void };
const MenuContext = createContext<Menu>({ open: false, toggle: () => {}, close: () => {} });
export const useMenu = () => useContext(MenuContext);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.dataset.locked = open ? "true" : "false";
    setSmoothScroll(!open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const value = useMemo(() => ({ open, toggle, close }), [open, toggle, close]);
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export function MenuButton({
  width,
  gap,
  className,
}: {
  width: string;
  gap: string;
  className?: string;
}) {
  const { open, toggle } = useMenu();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-expanded={open}
      aria-controls="site-menu"
      aria-label={open ? "Close menu" : "Open menu"}
      className={`group relative flex flex-col justify-center ${className ?? ""}`}
      style={{ width, gap, height: `calc(${gap} + 2px)` }}
    >
      {[0, 1].map((i) => (
        <motion.span
          key={i}
          className="block h-px w-full origin-center bg-ink"
          animate={open ? { rotate: i === 0 ? 45 : -45, y: i === 0 ? "50%" : "-50%" } : { rotate: 0, y: "0%" }}
          transition={{ duration: 0.4, ease: EASE }}
        />
      ))}
    </button>
  );
}

const panel = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, ease: EASE, staggerChildren: 0.05, delayChildren: 0.12 } },
  exit: { opacity: 0, transition: { duration: 0.28, ease: EASE, when: "afterChildren" as const } },
};

const row = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  exit: { opacity: 0, y: 12, transition: { duration: 0.2, ease: EASE } },
};

export function MenuOverlay() {
  const { open, close } = useMenu();
  const first = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (open) first.current?.focus();
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          id="site-menu"
          className="fixed inset-0 z-50 flex flex-col bg-sky/95 backdrop-blur-2xl"
          variants={panel}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <motion.div variants={row} className="mx-auto flex h-16 w-full max-w-[1440px] shrink-0 items-center justify-between px-6 md:px-10">
            <a href="#home" onClick={close} className="flex items-center gap-1.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.logoMark} alt="" className="h-4 w-4 object-contain" />
              <span className="font-wide text-[10px] uppercase tracking-[-0.06em] text-ink">Abrany</span>
            </a>
            <MenuButton width="22.76px" gap="4.56px" />
          </motion.div>

          <nav className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-6 md:px-10" aria-label="Primary">
            {NAV.map((item, i) => (
              <motion.a
                key={item.id}
                ref={i === 0 ? first : undefined}
                variants={row}
                href={`#${item.id}`}
                onClick={close}
                className="group flex items-baseline justify-between border-b border-ink/12 py-5 md:py-7"
              >
                <span className="font-display text-[13vw] font-semibold uppercase leading-[0.9] tracking-[-0.03em] text-ink transition-opacity duration-300 group-hover:opacity-55 md:text-[7vw]">
                  {item.label}
                </span>
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-ink/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.a>
            ))}
          </nav>

          <motion.div variants={row} className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-6 pb-10 md:flex-row md:items-end md:justify-between md:px-10">
            <p className="max-w-[34ch] font-sans text-sm leading-relaxed">
             Asesoría integral en seguridad social y sistema pensional colombiano, con análisis individual de cada caso.
            </p>
            <a href="#contact" onClick={close} className="font-display text-xs uppercase tracking-[0.16em] text-ink underline-offset-4 hover:underline">
              Contáctenos
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
