"use client";

import { motion } from "framer-motion";
import { AVATARS, IMG } from "@/lib/assets";
import { HERO } from "@/lib/content";
import { capTop, u } from "@/lib/design";
import { rise } from "@/lib/motion";
import { FaceGlyph, FireGlyph, TrendArrow } from "./glyphs";

function Card({ style, children }: { style: React.CSSProperties; children: React.ReactNode }) {
  return (
    <motion.div variants={rise} className="glass absolute" style={style}>
      {children}
    </motion.div>
  );
}

export function LearnersCard(p: {
  k: number;
  w: number;
  h: number;
  radius: number;
  faces: number;
  avatar: number;
  avatarLeft: number;
  textLeft: number;
  left: number;
  top: number;
}) {
  const s = (n: number) => u(n * p.k);
  return (
    <Card style={{ left: u(p.left), top: u(p.top), width: u(p.w), height: u(p.h), borderRadius: u(p.radius) }}>
      <div
        className="absolute isolate flex -translate-y-1/2 items-start"
        style={{ left: u(p.avatarLeft), top: "50%" }}
      >
        {AVATARS.slice(0, p.faces).map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt=""
            className="relative block rounded-full object-cover"
            style={{
              width: u(p.avatar),
              height: u(p.avatar),
              marginRight: i < p.faces - 1 ? u(-p.avatar * 0.2105) : 0,
              zIndex: p.faces - i,
            }}
          />
        ))}
      </div>
      <div
        className="absolute flex -translate-y-1/2 flex-col items-start text-white"
        style={{ left: u(p.textLeft), top: "50%", gap: s(10) }}
      >
        <span
          className="font-sans font-semibold"
          style={{ fontSize: s(21), lineHeight: 1, letterSpacing: "-0.02em" }}
        >
          {HERO.learners.value}
        </span>
        <span
          className="font-sans font-light opacity-67"
          style={{ fontSize: s(18), lineHeight: 1, letterSpacing: "-0.02em" }}
        >
          {HERO.learners.label}
        </span>
      </div>
    </Card>
  );
}

export function StatsCard({ k, w, h, left, top }: { k: number; w: number; h: number; left: number; top: number }) {
  const s = (n: number) => u(n * k);

  const gauge = (width: number, offset: number, opacity: number, src: string) => (
    <div
      className="absolute overflow-hidden"
      style={{ left: s(8.5), top: s(22.55), width: s(width), height: s(98.904) }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className="absolute block max-w-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `calc(50% + ${s(offset)})`,
          top: `calc(50% + ${s(58.03)})`,
          width: s(215.009),
          height: s(215.009),
          opacity,
        }}
      />
    </div>
  );

  const tile = (side: "left" | "right", Glyph: typeof FaceGlyph, value: string, label: string, trend?: boolean) => (
    <div
      className="glass-tile absolute"
      style={{
        bottom: s(6),
        [side]: s(6),
        width: s(106.5),
        height: s(115),
        borderRadius:
          side === "left"
            ? `${s(12)} ${s(12)} ${s(12)} ${s(34)}`
            : `${s(12)} ${s(12)} ${s(34)} ${s(12)}`,
      }}
    >
      <Glyph className="absolute text-white" style={{ left: s(15.03), top: s(11), width: s(26), height: s(26) }} />
      <span
        className="absolute font-sans font-semibold text-white"
        style={{ left: s(15.03), top: capTop(65 * k, 21 * k), fontSize: s(21), lineHeight: 1, letterSpacing: "-0.02em" }}
      >
        {value}
      </span>
      <span
        className="absolute whitespace-nowrap font-sans font-light text-white opacity-67"
        style={{ left: s(15.03), top: capTop(86.64 * k, 14 * k), fontSize: s(14), lineHeight: 1 }}
      >
        {label}
      </span>
      {trend && (
        <TrendArrow
          className="absolute text-trend"
          style={{ left: s(60.03), top: s(67), width: s(12), height: s(12) }}
        />
      )}
    </div>
  );

  return (
    <Card style={{ left: u(left), top: u(top), width: u(w), height: u(h), borderRadius: s(40), overflow: "hidden" }}>
      {gauge(215.009, -0.54, 0.1, IMG.gaugeTrack)}
      {gauge(116.105, 48.91, 1, IMG.gaugeFill)}
      <span
        className="absolute left-1/2 -translate-x-1/2 font-display font-normal uppercase text-white"
        style={{ top: capTop(71 * k, 32 * k), fontSize: s(32), lineHeight: 1, letterSpacing: "-0.03em" }}
      >
        {HERO.sessions.value}
      </span>
      <span
        className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-sans font-light text-white opacity-67"
        style={{ top: capTop(101 * k, 18 * k), fontSize: s(18), lineHeight: 1 }}
      >
        {HERO.sessions.label}
      </span>
      {tile("left", FaceGlyph, HERO.dataPoints.value, HERO.dataPoints.label)}
      {tile("right", FireGlyph, HERO.avgScore.value, HERO.avgScore.label, true)}
    </Card>
  );
}

export function InsightCard({ k, w, h, left, top }: { k: number; w: number; h: number; left: number; top: number }) {
  const s = (n: number) => u(n * k);

  const line = (
    src: string,
    box: { left: number; top: number; width: number; height: number },
    inset: string,
  ) => (
    <div
      className="absolute"
      style={{ left: s(box.left), top: s(box.top), width: s(box.width), height: s(box.height) }}
    >
      <div className="absolute" style={{ inset }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" className="block h-full w-full max-w-none" />
      </div>
    </div>
  );

  return (
    <Card style={{ left: u(left), top: u(top), width: u(w), height: u(h), borderRadius: s(40), overflow: "hidden" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={IMG.neuralThumb}
        alt=""
        className="absolute max-w-none object-cover"
        style={{ left: s(-3.07), top: s(21.56), width: s(124.603), height: s(69.832) }}
      />
      <span
        className="absolute font-sans font-light text-white opacity-67"
        style={{ left: s(121.53), top: capTop(37.49 * k, 18 * k), fontSize: s(18), lineHeight: 1 }}
      >
        {HERO.insight.kicker}
      </span>
      <span
        className="absolute font-sans font-semibold text-white"
        style={{ left: s(121.53), top: capTop(59.12 * k, 21 * k), fontSize: s(21), lineHeight: 1 }}
      >
        {HERO.insight.title}
      </span>
      {line(IMG.chartLineA, { left: -8.06, top: 98.07, width: 247.111, height: 103.642 }, "-4.44% -0.81% -1.93% -0.81%")}
      {line(IMG.chartLineB, { left: -33.53, top: 97.11, width: 342.769, height: 97.205 }, "-2.35% -0.58% -2.06% -0.58%")}
      {[
        { left: 72.45, top: 100.8 },
        { left: 138.4, top: 120.78 },
      ].map((d) => (
        <span
          key={d.left}
          className="absolute rounded-full bg-white"
          style={{ left: s(d.left), top: s(d.top), width: s(5.463), height: s(5.463) }}
        />
      ))}
    </Card>
  );
}
