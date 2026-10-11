const DEFAULT_ASSET_BASE =
  "https://pub-36eefd528bbb4e28bdef0ce39a1018e0.r2.dev/Prompt/38-abrany-brain-trainer/public";

export const ASSET_BASE = (process.env.NEXT_PUBLIC_ASSET_BASE ?? DEFAULT_ASSET_BASE)
  .trim()
  .replace(/\/$/, "");

export const ASSET_ORIGIN = /^https?:\/\//.test(ASSET_BASE) ? new URL(ASSET_BASE).origin : "";

const asset = (path: string) => `${ASSET_BASE}${path}`;

export const VIDEO = {
  film: asset("/video/brain-film.mp4"),
  poster: asset("/video/brain-film-poster.jpg"),
};

export const IMG = {
  brain: asset("/img/brain-hero.png"),
  glow: asset("/img/glow.png"),
  ringOuter: asset("/img/ring-outer.svg"),
  ringInner: asset("/img/ring-inner.svg"),
  arc: asset("/img/arc.svg"),
  neuralThumb: asset("/img/neural-thumb.png"),
  chartLineA: asset("/img/chart-line-a.svg"),
  chartLineB: asset("/img/chart-line-b.svg"),
  gaugeTrack: asset("/img/gauge-a.png"),
  gaugeFill: asset("/img/gauge-b.png"),
  brainBadge: asset("/img/brain-badge.png"),
  logoMark: asset("/img/logo-mark.png"),
};

export const AVATARS = [1, 2, 3, 4, 5].map((n) => asset(`/img/avatar-${n}.png`));
