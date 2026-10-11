export type VisualSpec = {
  center: { x: number; y: number };
  ringOuter: number;
  ringInner: number;
  glow: { x: number; y: number; w: number; h: number; blur: number };
  brain: { x: number; y: number; w: number; h: number };
  sound: { x: number; y: number; size: number };
  arc?: { x: number; y: number; w: number; h: number };
};

export const DESKTOP_VISUAL: VisualSpec = {
  center: { x: 851.18, y: 414.13 },
  ringOuter: 974.937,
  ringInner: 787.663,
  glow: { x: 851.18, y: 426.69, w: 768, h: 585, blur: 115 },
  brain: { x: 851.18, y: 394.17, w: 1136.91, h: 619.502 },
  sound: { x: 210, y: 748, size: 32 },
  arc: { x: 720, y: 765.01, w: 1616.883, h: 602 },
};

export const MOBILE_VISUAL: VisualSpec = {
  center: { x: 220, y: 732.37 },
  ringOuter: 736.937,
  ringInner: 595.38,
  glow: { x: 220, y: 739.44, w: 524.36, h: 399.415, blur: 78.517 },
  brain: { x: 220, y: 748.58, w: 776.237, h: 422.971 },
  sound: { x: 376, y: 560, size: 36 },
};
