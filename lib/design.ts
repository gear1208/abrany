import type { CSSProperties } from "react";

/** One design pixel of whichever frame is mounted. */
export const u = (n: number) => `calc(${n} * var(--u))`;

export const DESKTOP_FRAME = { w: 1440, h: 810 };
export const MOBILE_FRAME = { w: 440, h: 956 };

export const stageVars = (frame: { w: number; h: number }) =>
  ({
    "--stage-ar": `${frame.w / frame.h}`,
    "--stage-cols": `${frame.w}`,
  }) as CSSProperties;

/** Centre-point placement resolved to left/top so `transform` stays free for parallax. */
export const centered = (cx: number, cy: number, w: number, h: number = w) =>
  ({
    position: "absolute",
    left: u(cx - w / 2),
    top: u(cy - h / 2),
    width: u(w),
    height: u(h),
  }) as CSSProperties;

const FONT_BOX = 1.23;
const ASCENT_ABOVE_CAP = 0.28;

export const capTop = (y: number, fontSize: number, lineHeight = 1) =>
  u(y - fontSize * ((lineHeight - FONT_BOX) / 2 + ASCENT_ABOVE_CAP));
