"use client";

import { motion } from "framer-motion";
import { EASE, maskWord, rise, stagger } from "@/lib/motion";

export function RevealGroup({
  children,
  step = 0.08,
  className,
}: {
  children: React.ReactNode;
  step?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={stagger(step, 0.05)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({
  as = "div",
  children,
  className,
}: {
  as?: "div" | "li" | "article";
  children: React.ReactNode;
  className?: string;
}) {
  const Tag = motion[as];
  return (
    <Tag variants={rise} className={className}>
      {children}
    </Tag>
  );
}

export function SplitText({
  text,
  className,
  step = 0.045,
}: {
  text: string;
  className?: string;
  step?: number;
}) {
  const words = text.split(" ");
  return (
    <motion.span variants={stagger(step, 0)} className={className}>
      {words.map((word, i) => (
        <span key={i}>
          <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
            <motion.span variants={maskWord} className="inline-block will-change-transform">
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </motion.span>
  );
}

export function SectionIndex({ index, label }: { index: string; label: string }) {
  return (
    <Reveal className="flex items-center gap-5">
      <span className="font-display text-sm font-semibold uppercase tracking-[-0.03em] text-ink">
        {index}
      </span>
      <motion.span
        aria-hidden
        variants={{
          hidden: { scaleX: 0 },
          show: { scaleX: 1, transition: { duration: 0.7, ease: EASE } },
        }}
        className="h-px w-10 origin-left bg-ink/50"
      />
      <span className="font-sans text-xs uppercase tracking-[0.18em] text-ink/60">{label}</span>
    </Reveal>
  );
}

export function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="max-w-[18ch] font-display text-[10vw] font-semibold uppercase leading-[0.9] tracking-[-0.03em] text-ink sm:text-[7vw] lg:text-[4.4vw]">
      <SplitText text={children} />
    </h2>
  );
}

export function SectionLede({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <p className="max-w-[46ch] font-sans text-base leading-[1.55] text-ink/75">{children}</p>
    </Reveal>
  );
}

export function Shell({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section
      id={id}
      className="relative w-full scroll-mt-24 border-t border-ink/10 py-20 md:py-28 lg:py-36"
    >
      {children}
    </section>
  );
}

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-10">{children}</div>;
}
