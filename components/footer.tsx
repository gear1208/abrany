"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IMG } from "@/lib/assets";
import { FOOTER, HERO } from "@/lib/content";
import { EASE, maskWord, stagger } from "@/lib/motion";
import { Magnetic, RollLabel } from "./effects";
import { Caret } from "./glyphs";
import { RevealGroup, Reveal } from "./reveal";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
type State = "idle" | "invalid" | "sent";

const NOTES: Record<State, string> = {
  idle: "Un correo al mes con novedades de seguridad social y pensiones.",
  invalid: "Esa dirección de correo no parece válida.",
  sent: "Gracias por su interés. Pronto nos pondremos en contacto.",
};

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL.test(email.trim())) {
      setState("invalid");
      return;
    }
    setState("sent");
    setEmail("");
  };

  return (
    <footer id="contact" className="relative scroll-mt-20 border-t border-ink/10">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10">
        <RevealGroup className="flex flex-col gap-10 py-20 md:py-28 lg:flex-row lg:items-end lg:justify-between">
          <motion.p
            variants={stagger(0.1, 0)}
            className="font-display text-[13vw] font-semibold uppercase leading-[0.88] tracking-[-0.03em] text-ink sm:text-[8vw] lg:text-[5.4vw]"
          >
            {HERO.badge.map((line) => (
              <span key={line} className="block overflow-hidden">
                <motion.span variants={maskWord} className="block whitespace-nowrap will-change-transform">
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.p>
          <Reveal className="flex flex-col items-start gap-6 lg:items-end">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.brainBadge} alt="" className="h-28 w-28 object-contain" />
            </motion.div>
            <Magnetic strength={0.3}>
              <a
                href="#pricing"
                className="group flex items-center gap-5 rounded-full bg-ink py-4 pl-7 pr-5 font-sans text-sm font-semibold text-sky transition-opacity hover:opacity-85"
              >
                Solicitar diagnóstico pensional
                <Caret className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
              </a>
            </Magnetic>
          </Reveal>
        </RevealGroup>

        <RevealGroup className="grid gap-12 border-t border-ink/10 py-16 md:grid-cols-2 lg:grid-cols-[minmax(0,1.2fr)_repeat(3,minmax(0,0.6fr))] lg:gap-10">
          <Reveal className="flex flex-col gap-8">
            <div className="flex items-center gap-1.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.logoMark} alt="" className="h-4 w-4 object-contain" />
              <span className="font-wide text-[10px] uppercase tracking-[-0.06em] text-ink">Abrany</span>
            </div>
            <form onSubmit={submit} noValidate className="flex w-full max-w-md flex-col gap-3">
              <label htmlFor="newsletter-email" className="font-sans text-xs uppercase tracking-[0.18em] text-ink/50">
                Novedades pensionales
              </label>
              <div
                className={`flex items-center gap-3 rounded-full border bg-white/45 py-2 pl-6 pr-2 transition-colors ${
                  state === "invalid" ? "border-ink/60" : "border-transparent"
                }`}
              >
                <input
                  id="newsletter-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="correo@dominio.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setState("idle");
                  }}
                  aria-invalid={state === "invalid"}
                  aria-describedby="newsletter-note"
                  className="min-w-0 flex-1 bg-transparent font-sans text-sm text-ink outline-none placeholder:text-ink/40"
                />
                <button
                  type="submit"
                  aria-label="Suscribirse"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-sky"
                >
                  <Caret className="h-4 w-4" />
                </button>
              </div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={NOTES[state]}
                  id="newsletter-note"
                  role={state === "invalid" ? "alert" : "status"}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="font-sans text-xs leading-relaxed text-ink/60"
                >
                  {NOTES[state]}
                </motion.p>
              </AnimatePresence>
            </form>
          </Reveal>

          {FOOTER.columns.map((col) => (
            <Reveal key={col.title} className="flex flex-col gap-5">
              <h3 className="font-sans text-xs uppercase tracking-[0.18em] text-ink/50">{col.title}</h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#home" className="group inline-block font-sans text-sm text-ink/75">
                      <RollLabel>{l}</RollLabel>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </RevealGroup>

        <div className="flex flex-col gap-4 border-t border-ink/10 py-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-[60ch] font-sans text-xs leading-relaxed text-ink/45">
            La información de este sitio es de carácter general y no constituye asesoría legal ni garantiza resultados. Cada caso se estudia con base en sus antecedentes, documentos disponibles y normativa aplicable.
          </p>
          <p className="font-sans text-xs text-ink/45">© {new Date().getFullYear()} Abrany. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
