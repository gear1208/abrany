"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IMG, VIDEO } from "@/lib/assets";
import { HERO, NAV } from "@/lib/content";
import { DESKTOP_FRAME, MOBILE_FRAME, capTop, centered, stageVars, u } from "@/lib/design";
import { DESKTOP_VISUAL, MOBILE_VISUAL } from "@/lib/hero-visual";
import { EASE, bloom, fade, maskWord, rise, stagger, useHeroParallax } from "@/lib/motion";
import { useMediaQuery } from "@/lib/use-media-query";
import { Magnetic, RollLabel } from "./effects";
import { BrainGlyph, Caret, Speaker } from "./glyphs";
import { InsightCard, LearnersCard, StatsCard } from "./hero-cards";
import { MenuButton } from "./menu";

/* ---------- navigation (SECTION-05) ---------- */

function ContactPair({ left, top }: { left: number; top: string }) {
  return (
    <motion.div variants={rise} className="pointer-events-auto absolute flex items-center" style={{ left: u(left), top, gap: u(38) }}>
      <a
        href="#contact"
        className="font-display font-medium uppercase text-ink transition-opacity duration-300 hover:opacity-60"
        style={{ fontSize: u(12), lineHeight: 1 }}
      >
        Contáctenos
      </a>
      <MenuButton width={u(22.756)} gap={u(4.559)} />
    </motion.div>
  );
}

function HeroHeader({ active }: { active: string }) {
  return (
    <div className="pointer-events-none absolute inset-0">
      <motion.a
        variants={rise}
        href="#home"
        aria-label="Gestion Pensional Empresarial— home"
        className="pointer-events-auto absolute flex items-center"
        style={{ left: u(38), top: u(31.8), gap: u(3.5) }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMG.logoMark} alt="" className="block object-contain" style={{ width: u(13.063), height: u(13.063) }} />
        <span
          className="font-wide uppercase text-ink"
          style={{ fontSize: u(10), lineHeight: 1, letterSpacing: "-0.06em" }}
        >
          Abrany
        </span>
      </motion.a>

      <motion.nav
        variants={rise}
        aria-label="Sections"
        className="pointer-events-auto absolute left-1/2 flex -translate-x-1/2"
        style={{ top: capTop(34.4, 12), gap: u(95) }}
      >
        {NAV.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={active === item.id ? "page" : undefined}
            className={`font-display font-normal capitalize text-ink transition-opacity duration-300 hover:opacity-100 ${
              active === item.id ? "opacity-100" : "opacity-40"
            }`}
            style={{ fontSize: u(12), lineHeight: 1 }}
          >
            {item.label}
          </a>
        ))}
      </motion.nav>

      <ContactPair left={1265.62} top={capTop(34.4, 12)} />

      <span
        aria-hidden
        className="absolute w-px bg-ink/30"
        style={{ left: u(513.55), top: 0, height: u(18.024) }}
      />
    </div>
  );
}

function HeroHeaderMobile() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <motion.a
        variants={rise}
        href="#home"
        aria-label="Abrany — home"
        className="pointer-events-auto absolute"
        style={{ left: u(20), top: u(41.43), width: u(32.194), height: u(32.511) }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMG.logoMark} alt="" className="block h-full w-full object-contain" />
      </motion.a>
      <ContactPair left={283.24} top={capTop(53.578, 12)} />
    </div>
  );
}

/* ---------- headline (SECTION-06) ---------- */

const HEADLINE_INDENT = ["0em", "0em", "0em"];

function Headline({ size, style }: { size: number; style: React.CSSProperties }) {
  return (
    <motion.h1
      variants={stagger(0.09, 0)}
      className="absolute font-display font-semibold uppercase text-ink"
      style={{ ...style, fontSize: u(size), lineHeight: 0.873, letterSpacing: "-0.03em" }}
    >
      {HERO.headline.map((word, i) => (
        <span key={word} className="block overflow-hidden" style={{ marginLeft: HEADLINE_INDENT[i] }}>
          <motion.span
            variants={maskWord}
            className="block whitespace-nowrap will-change-transform"
            style={
              (word as string) === "Brain"
                ? {
                    backgroundImage: "linear-gradient(180deg, #9badc7 89.759%, rgba(68,77,142,0) 132.46%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }
                : undefined
            }
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}

function Lede({ size, width, style }: { size: number; width: number; style: React.CSSProperties }) {
  return (
    <motion.p
      variants={rise}
      className="absolute font-sans font-normal text-ink text-left"
      style={{ ...style, fontSize: u(size), lineHeight: 1.2, width: u(width) }}
    >
      {HERO.lede}
    </motion.p>
  );
}

function CtaPill() {
  return (
    <motion.a
      variants={rise}
      href="#pricing"
      className="group inline-flex items-center justify-center bg-white/62 transition-colors hover:bg-white/80"
      style={{
        gap: u(20),
        paddingLeft: u(4),
        paddingRight: u(32),
        paddingTop: u(4),
        paddingBottom: u(4),
        borderRadius: u(999),
      }}
    >
      <span
        className="grid place-items-center rounded-full bg-orb text-white"
        style={{ width: u(72), height: u(72) }}
      >
        <BrainGlyph
          className="transition-transform duration-500 ease-out group-hover:scale-110"
          style={{ width: u(26), height: u(26) }}
        />
      </span>
      <span className="flex items-center" style={{ gap: u(12) }}>
        <RollLabel
          className="font-sans font-semibold text-ink opacity-90"
          style={{ fontSize: u(16), lineHeight: 1, letterSpacing: "-0.02em" }}
        >
          {HERO.cta}
        </RollLabel>
        <Caret
          className="text-ink transition-transform duration-500 ease-out group-hover:translate-x-1"
          style={{ width: u(18), height: u(18) }}
        />
      </span>
    </motion.a>
  );
}

/* ---------- hero (SECTION-03) ---------- */

export function Hero({ active }: { active: string }) {
  const { matches: isDesktop, mounted } = useMediaQuery("(min-width: 1024px), (min-aspect-ratio: 3/2)", true);
  const frame = isDesktop ? DESKTOP_FRAME : MOBILE_FRAME;
  const visual = isDesktop ? DESKTOP_VISUAL : MOBILE_VISUAL;
  const { sectionRef, stageRef, y } = useHeroParallax(frame.w);

  const [mode, setMode] = useState<"static" | "video">("video");
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideo = mode === "video";

  useEffect(() => {
    if (mode === "video") void videoRef.current?.play().catch(() => undefined);
  }, [mode]);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  const showFilm = () => {
    setMode("video");
    void videoRef.current?.play().catch(() => undefined);
  };
  const showStill = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    setMode("static");
  };

  const { center, ringOuter, ringInner, glow, brain, sound, arc } = visual;
  const plane = "pointer-events-none absolute inset-0";

  return (
    <motion.section
      ref={sectionRef}
      id="home"
      className="stage-frame relative flex h-svh w-full items-center justify-center overflow-hidden transition-colors duration-1000"
      style={{ backgroundColor: isVideo ? "var(--color-sky-lit)" : "var(--color-sky)" }}
      variants={stagger()}
      initial="hidden"
      animate={mounted ? "show" : "hidden"}
    >
      <div ref={stageRef} className={`stage ${isDesktop ? "overflow-hidden" : ""}`} style={stageVars(frame)}>
        {/* backdrop (SECTION-04) */}
        <div className="pointer-events-none absolute inset-0">
          {arc && (
            <motion.div aria-hidden style={{ y: y.far }} variants={bloom} className={plane}>
              <div style={centered(arc.x, arc.y, arc.w, arc.h)}>
                <div className="absolute" style={{ inset: "-66.45% -24.74%" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IMG.arc} alt="" className="block h-full w-full max-w-none" />
                </div>
              </div>
            </motion.div>
          )}

          {isDesktop && (
            <motion.div aria-hidden style={{ y: y.far }} variants={fade} className={plane}>
              <motion.p
                className="absolute -translate-x-1/2 whitespace-nowrap text-center font-wide uppercase"
                style={{
                  left: u(253.54),
                  top: u(585),
                  fontSize: u(300),
                  lineHeight: 1,
                  letterSpacing: "-0.06em",
                  filter: `blur(${u(20.2)})`,
                  opacity: 0.5,
                  backgroundImage: "linear-gradient(180deg, rgba(228,240,255,0.2), rgba(197,215,240,0.2))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Brainy
              </motion.p>
            </motion.div>
          )}

          <motion.div aria-hidden style={{ y: y.mid }} variants={bloom} className={plane}>
            <motion.img
              src={IMG.glow}
              alt=""
              className="max-w-none object-bottom"
              style={{ ...centered(glow.x, glow.y, glow.w, glow.h), filter: `blur(${u(glow.blur)})` }}
              animate={{ opacity: isVideo ? 1 : 0 }}
              transition={{ duration: 1.2, ease: EASE }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMG.ringOuter} alt="" className="block max-w-none" style={centered(center.x, center.y, ringOuter)} />
            <div style={centered(center.x, center.y, ringInner)}>
              <div className="absolute" style={{ inset: "-1.02%" }}>
                <motion.img
                  src={IMG.ringInner}
                  alt=""
                  className="block h-full w-full max-w-none"
                  animate={{ rotate: playing ? 360 : 0 }}
                  transition={
                    playing
                      ? { duration: 140, ease: "linear", repeat: Infinity }
                      : { duration: 1.2, ease: EASE }
                  }
                />
              </div>
            </div>
          </motion.div>

          <motion.div style={{ y: y.brain }} variants={bloom} className={plane}>
            <motion.img
              src={IMG.brain}
              alt="Anatomical render of a human brain"
              className="max-w-none object-bottom"
              style={{ ...centered(brain.x, brain.y, brain.w, brain.h), rotate: 15 }}
              animate={{ opacity: isVideo ? 0 : 1, scale: isVideo ? 1.03 : 1 }}
              transition={{ duration: 0.9, ease: EASE }}
            />
            <motion.div
              className="overflow-hidden rounded-full"
              style={centered(center.x, center.y, ringInner)}
              animate={{ opacity: isVideo ? 1 : 0 }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              <video
                ref={videoRef}
                src={VIDEO.film}
                poster={VIDEO.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                aria-hidden
                className="h-full w-full object-cover"
                style={{
                  maskImage: "radial-gradient(circle at 50% 50%, #000 56%, transparent 84%)",
                  WebkitMaskImage: "radial-gradient(circle at 50% 50%, #000 56%, transparent 84%)",
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* navigation */}
        {isDesktop ? <HeroHeader active={active} /> : <HeroHeaderMobile />}

        {/* headline, lede, CTA — near plane */}
        <motion.div style={{ y: y.near }} className={plane}>
          {isDesktop ? (
            <>
              <Headline size={50} style={{ left: u(34.32), top: capTop(167.47, 72, 0.873) }} />
              <Lede size={16} width={360} style={{ left: u(111.52), top: u(442.03) }} />
              <div className="pointer-events-auto absolute" style={{ left: u(111.52), top: u(559.01) }}>
                <Magnetic strength={0.28}>
                  <CtaPill />
                </Magnetic>
              </div>
            </>
          ) : (
            <>
              <Headline size={56} style={{ left: u(20), top: capTop(129.33, 56, 0.873) }} />
              <Lede size={14} width={237.963} style={{ left: u(76.72), top: u(347) }} />
              <div className="pointer-events-auto absolute" style={{ left: u(76.72), top: u(429.16) }}>
                <Magnetic strength={0.28}>
                  <CtaPill />
                </Magnetic>
              </div>
            </>
          )}
        </motion.div>

        {/* cards, flourish, controls — front plane */}
        <motion.div style={{ y: y.front }} className={plane}>
          {isDesktop ? (
            <>
              <LearnersCard k={1} w={321} h={73} radius={24} faces={5} avatar={33.243} avatarLeft={19} textLeft={177} left={970} top={174.97} />
              <StatsCard k={1} w={231} h={267} left={1090} top={328.72} />
              <InsightCard k={1} w={300} h={176} left={545} top={476.97} />

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img
                variants={rise}
                src={IMG.brainBadge}
                alt=""
                aria-hidden
                className="absolute block object-contain"
                style={{ left: u(1306.26), top: u(643.03), width: u(107.371), height: u(107.371) }}
              />
              <motion.p
                variants={rise}
                className="absolute font-display font-semibold uppercase text-ink"
                style={{ left: u(1120), top: capTop(704.97, 24), fontSize: u(24), lineHeight: 1, letterSpacing: "-0.03em" }}
              >
                {HERO.badge[0]}
                <br />
                {HERO.badge[1]}
                <br />
                {HERO.badge[2]}
              </motion.p>

              <motion.div
                variants={rise}
                className="pointer-events-auto absolute flex items-end"
                style={{ left: u(34.32), top: u(750.03), gap: u(20) }}
              >
                <button
                  type="button"
                  onClick={showStill}
                  aria-pressed={mode === "static"}
                  className={`font-display font-semibold uppercase text-ink transition-opacity duration-500 ${
                    mode === "static" ? "opacity-100" : "opacity-40 hover:opacity-70"
                  }`}
                  style={{ fontSize: u(14), lineHeight: 1 }}
                >
                  01
                </button>
                <span aria-hidden className="bg-ink" style={{ width: u(41.777), height: "1px", marginBottom: u(4) }} />
                <button
                  type="button"
                  onClick={showFilm}
                  aria-pressed={mode === "video"}
                  className={`font-display font-semibold uppercase text-ink transition-opacity duration-500 ${
                    mode === "video" ? "opacity-100" : "opacity-40 hover:opacity-70"
                  }`}
                  style={{ fontSize: u(28), lineHeight: 1 }}
                >
                  02
                </button>
              </motion.div>
            </>
          ) : (
            <>
              <LearnersCard k={0.7468} w={193.098} h={53.356} radius={17.923} faces={3} avatar={24.825} avatarLeft={14.73} textLeft={87.66} left={226} top={692} />
              <StatsCard k={0.8375} w={193.48} h={223.633} left={20} top={692} />
              <InsightCard k={0.8375} w={193} h={156} left={226} top={757} />
            </>
          )}

          <motion.button
            type="button"
            variants={bloom}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.35, ease: EASE }}
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? "Unmute the film" : "Mute the film"}
            title={muted ? "Unmute the film" : "Mute the film"}
            className="pointer-events-auto absolute grid place-items-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-white/45"
            style={{ left: u(sound.x), top: u(sound.y), width: u(sound.size), height: u(sound.size) }}
          >
            <Speaker muted={muted} style={{ width: u(sound.size / 2), height: u(sound.size / 2) }} />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
