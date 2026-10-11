"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AVATARS } from "@/lib/assets";
import { COURSES, FAQS, METHOD, METRICS, PLANS, TRAINERS } from "@/lib/content";
import { EASE, wipe } from "@/lib/motion";
import { Counter, Drift, Magnetic, Spotlight } from "./effects";
import { BrainGlyph, Caret } from "./glyphs";
import {
  Container,
  Reveal,
  RevealGroup,
  SectionIndex,
  SectionLede,
  SectionTitle,
  Shell,
} from "./reveal";

/* SECTION-09 */
export function SectionCourses() {
  const [selected, setSelected] = useState<string>(COURSES[0].id);
  const course = COURSES.find((c) => c.id === selected) ?? COURSES[0];

  return (
    <Shell id="courses">
      <Drift className="right-[8%] top-[18%] h-[26rem] w-[26rem]" />
      <Container>
        <RevealGroup className="mb-14 flex flex-col gap-6">
          <SectionIndex index="01" label="Courses" />
          <SectionTitle>Four domains, one plan</SectionTitle>
          <SectionLede>
            Each track trains a single cognitive domain and reports against it. Pick one to see what a session actually does to the number.
          </SectionLede>
        </RevealGroup>

        <RevealGroup className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <ul className="flex flex-col">
            {COURSES.map((c, i) => {
              const isSel = c.id === selected;
              return (
                <Reveal as="li" key={c.id} className="relative">
                  <button
                    type="button"
                    aria-pressed={isSel}
                    onClick={() => setSelected(c.id)}
                    className="group flex w-full items-center justify-between gap-6 border-b border-ink/10 py-6 text-left"
                  >
                    <span className="flex items-center gap-6 transition-transform duration-500 ease-out group-hover:translate-x-2">
                      <span className="font-sans text-xs tabular-nums text-ink/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-display text-2xl font-semibold uppercase leading-none tracking-[-0.03em] text-ink transition-opacity duration-300 sm:text-3xl ${
                          isSel ? "opacity-100" : "opacity-40 group-hover:opacity-75"
                        }`}
                      >
                        {c.name}
                      </span>
                    </span>
                    <span className="flex items-center gap-6">
                      <span className="hidden font-sans text-xs uppercase tracking-[0.16em] text-ink/50 sm:block">
                        {c.level}
                      </span>
                      <motion.span
                        className="block text-ink"
                        animate={{ rotate: isSel ? 90 : 0, opacity: isSel ? 1 : 0.35 }}
                        transition={{ duration: 0.4, ease: EASE }}
                      >
                        <Caret className="h-4 w-4" />
                      </motion.span>
                    </span>
                  </button>
                  {isSel && (
                    <motion.span
                      layoutId="course-rule"
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-px bg-ink"
                      transition={{ duration: 0.45, ease: EASE }}
                    />
                  )}
                </Reveal>
              );
            })}
          </ul>

          <motion.div variants={wipe(40)}>
            <Spotlight className="glass flex h-full min-h-[22rem] flex-col justify-between overflow-hidden rounded-[40px] p-8 sm:p-10">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/12 blur-2xl"
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={course.id}
                  className="relative flex h-full flex-col justify-between gap-10"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  <div className="flex flex-col gap-6">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-orb text-white">
                      <BrainGlyph className="h-6 w-6" />
                    </span>
                    <h3 className="font-display text-3xl font-semibold uppercase leading-none tracking-[-0.03em] text-ink">
                      {course.name}
                    </h3>
                    <p className="max-w-[42ch] font-sans text-[0.95rem] leading-[1.6] text-ink/75">
                      {course.blurb}
                    </p>
                  </div>
                  <dl className="flex flex-wrap gap-3">
                    {course.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="glass-tile flex min-w-[9.5rem] flex-1 flex-col gap-1 rounded-2xl px-5 py-4"
                      >
                        <dd className="order-1 font-sans text-xl font-semibold tracking-[-0.02em] text-ink">
                          {m.value}
                        </dd>
                        <dt className="order-2 font-sans text-xs font-light text-ink/60">{m.label}</dt>
                      </div>
                    ))}
                  </dl>
                </motion.div>
              </AnimatePresence>
            </Spotlight>
          </motion.div>
        </RevealGroup>
      </Container>
    </Shell>
  );
}

/* SECTION-11 */
export function SectionMethod() {
  return (
    <Shell id="method">
      <Drift className="-left-[6%] top-[30%] h-[30rem] w-[30rem]" distance={130} />
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <RevealGroup className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <SectionIndex index="02" label="Method" />
            <SectionTitle>Measure, adapt, prove</SectionTitle>
            <SectionLede>
              Nothing is prescribed before it is measured, and nothing is claimed before it is retested. Three steps, repeated every month.
            </SectionLede>
          </RevealGroup>

          <RevealGroup>
            <ol className="flex flex-col gap-4">
              {METHOD.map((m) => (
                <motion.li key={m.step} variants={wipe(32)}>
                  <Spotlight className="glass flex flex-col gap-5 overflow-hidden rounded-[32px] p-8 sm:p-10">
                    <div className="relative flex items-center gap-5">
                      <span className="font-display text-5xl font-semibold uppercase leading-none tracking-[-0.03em] text-ink/25">
                        {m.step}
                      </span>
                      <span aria-hidden className="h-px flex-1 bg-ink/15" />
                    </div>
                    <h3 className="relative font-display text-2xl font-semibold uppercase leading-none tracking-[-0.03em] text-ink">
                      {m.title}
                    </h3>
                    <p className="relative max-w-[52ch] font-sans text-[0.95rem] leading-[1.6] text-ink/75">
                      {m.body}
                    </p>
                  </Spotlight>
                </motion.li>
              ))}
            </ol>
          </RevealGroup>
        </div>

        <RevealGroup step={0.1} className="mt-16 lg:mt-24">
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[40px] bg-ink/10 lg:grid-cols-4">
            {METRICS.map((m) => (
              <Reveal
                key={m.label}
                className="group flex flex-col gap-2 bg-sky px-6 py-9 transition-colors duration-500 hover:bg-white/35 sm:px-8"
              >
                <dd className="font-display text-4xl font-normal uppercase leading-none tracking-[-0.03em] text-ink transition-transform duration-500 ease-out group-hover:-translate-y-1 sm:text-5xl">
                  <Counter to={m.value} suffix={m.suffix} />
                </dd>
                <dt className="font-sans text-sm font-light text-ink/60">{m.label}</dt>
              </Reveal>
            ))}
          </dl>
        </RevealGroup>
      </Container>
    </Shell>
  );
}

/* SECTION-12 */
export function SectionTrainers() {
  return (
    <Shell id="trainers">
      <Drift className="right-[2%] bottom-[10%] h-[24rem] w-[24rem]" distance={70} />
      <Container>
        <RevealGroup className="mb-14 flex flex-col gap-6">
          <SectionIndex index="03" label="Trainers" />
          <SectionTitle>The people behind the numbers</SectionTitle>
          <SectionLede>
            Four names own the protocol end to end — the research it comes from, the drills it turns into, and the scoring that judges it.
          </SectionLede>
        </RevealGroup>

        <RevealGroup>
          <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {TRAINERS.map((t, i) => (
              <motion.li key={t.name} variants={wipe(32)}>
                <Spotlight className="glass group flex h-full flex-col gap-6 overflow-hidden rounded-[32px] p-7 transition-colors duration-500 hover:bg-white/25">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={AVATARS[i % AVATARS.length]}
                      alt=""
                      className="h-full w-full object-cover grayscale transition-[filter,transform] duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="relative flex flex-col gap-2">
                    <h3 className="font-display text-lg font-semibold uppercase leading-tight tracking-[-0.03em] text-ink">
                      {t.name}
                    </h3>
                    <p className="font-sans text-xs uppercase tracking-[0.16em] text-ink/50">{t.role}</p>
                  </div>
                  <span aria-hidden className="relative h-px w-full origin-left scale-x-0 bg-ink/30 transition-transform duration-700 ease-out group-hover:scale-x-100" />
                  <p className="relative font-sans text-sm leading-[1.6] text-ink/70">{t.line}</p>
                </Spotlight>
              </motion.li>
            ))}
          </ul>
        </RevealGroup>
      </Container>
    </Shell>
  );
}

/* SECTION-13 */
export function SectionPricing() {
  const [cycle, setCycle] = useState<"monthly" | "annual">("monthly");

  return (
    <Shell id="pricing">
      <Drift className="left-[30%] top-[6%] h-[28rem] w-[28rem]" distance={110} />
      <Container>
        <RevealGroup className="mb-14 flex flex-col items-start gap-6">
          <SectionIndex index="04" label="Pricing" />
          <SectionTitle>Pay for the plan, not the app</SectionTitle>
          <Reveal>
            <div role="radiogroup" aria-label="Billing cycle" className="glass relative inline-flex rounded-full p-1">
              {(["monthly", "annual"] as const).map((c) => {
                const checked = cycle === c;
                return (
                  <button
                    key={c}
                    type="button"
                    role="radio"
                    aria-checked={checked}
                    onClick={() => setCycle(c)}
                    className="relative rounded-full px-6 py-2.5 font-sans text-sm font-semibold capitalize text-ink"
                  >
                    {checked && (
                      <motion.span
                        layoutId="cycle-pill"
                        className="absolute inset-0 rounded-full bg-white/70"
                        transition={{ duration: 0.4, ease: EASE }}
                      />
                    )}
                    <span className={`relative ${checked ? "" : "opacity-50"}`}>
                      {c}
                      {c === "annual" && <span className="ml-2 font-light opacity-70">−20%</span>}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </RevealGroup>

        <RevealGroup>
          <ul className="grid gap-5 lg:grid-cols-3">
            {PLANS.map((plan) => {
              const price = plan[cycle];
              return (
                <motion.li
                  key={plan.id}
                  variants={wipe(40)}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className={`relative flex flex-col gap-8 rounded-[40px] p-8 sm:p-10 ${
                    plan.featured ? "bg-ink text-sky" : "glass text-ink"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute right-8 top-8 rounded-full bg-sky/20 px-3 py-1 font-sans text-[0.65rem] uppercase tracking-[0.16em]">
                      Most chosen
                    </span>
                  )}
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-xl font-semibold uppercase tracking-[-0.03em]">{plan.name}</h3>
                    <p className={`font-sans text-sm ${plan.featured ? "opacity-70" : "text-ink/60"}`}>{plan.tagline}</p>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <motion.span
                      key={`${plan.id}-${price}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="font-display text-5xl font-semibold leading-none tracking-[-0.03em] tabular-nums"
                    >
                      ${price}
                    </motion.span>
                    <span className="font-sans text-sm">/ month</span>
                  </div>
                  <ul className="flex flex-1 flex-col gap-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 font-sans text-sm leading-relaxed">
                        <span className={`mt-2 h-1 w-1 shrink-0 rounded-full ${plan.featured ? "bg-sky/70" : "bg-ink/40"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Magnetic strength={0.22} className="block">
                    <a
                      href="#contact"
                      className={`group flex items-center justify-between gap-4 rounded-full px-6 py-4 font-sans text-sm font-semibold transition-opacity hover:opacity-85 ${
                        plan.featured ? "bg-sky text-ink" : "bg-ink text-sky"
                      }`}
                    >
                      {plan.cta}
                      <Caret className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
                    </a>
                  </Magnetic>
                </motion.li>
              );
            })}
          </ul>
        </RevealGroup>
      </Container>
    </Shell>
  );
}

/* SECTION-14 */
export function SectionFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Shell id="faq">
      <Drift className="-right-[4%] top-[20%] h-[22rem] w-[22rem]" distance={80} />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <RevealGroup className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <SectionIndex index="05" label="Questions" />
            <SectionTitle>Straight answers</SectionTitle>
          </RevealGroup>

          <RevealGroup>
            <ul>
              {FAQS.map((f, i) => {
                const expanded = open === i;
                return (
                  <Reveal as="li" key={f.q} className="group border-b border-ink/12 first:border-t">
                    <button
                      type="button"
                      aria-expanded={expanded}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => setOpen(expanded ? null : i)}
                      className="flex w-full items-start justify-between gap-8 py-6 text-left"
                    >
                      <span className="flex items-start gap-6 transition-transform duration-500 ease-out group-hover:translate-x-2">
                        <span className="mt-1.5 font-sans text-xs tabular-nums text-ink/35">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-lg font-semibold uppercase leading-tight tracking-[-0.02em] text-ink sm:text-xl">
                          {f.q}
                        </span>
                      </span>
                      <span className="relative mt-2 block h-3 w-3 shrink-0" aria-hidden>
                        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-ink" />
                        <motion.span
                          className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink"
                          animate={{ scaleY: expanded ? 0 : 1 }}
                          transition={{ duration: 0.35, ease: EASE }}
                        />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {expanded && (
                        <motion.div
                          id={`faq-panel-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-[62ch] pb-7 pl-10 font-sans text-[0.95rem] leading-[1.65] text-ink/70">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Reveal>
                );
              })}
            </ul>
          </RevealGroup>
        </div>
      </Container>
    </Shell>
  );
}
