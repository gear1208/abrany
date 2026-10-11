import type { CSSProperties } from "react";

type P = { className?: string; style?: CSSProperties };

export function BrainGlyph({ className, style }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className} style={style}>
      <path d="M9.5 3a3.5 3.5 0 0 0-3.4 2.7A3.5 3.5 0 0 0 4 9a3.5 3.5 0 0 0 .9 2.3A3.5 3.5 0 0 0 6 17.7 3.5 3.5 0 0 0 9.5 21a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 9.5 3Z" />
      <path d="M14.5 3a3.5 3.5 0 0 1 3.4 2.7A3.5 3.5 0 0 1 20 9a3.5 3.5 0 0 1-.9 2.3A3.5 3.5 0 0 1 18 17.7a3.5 3.5 0 0 1-3.5 3.3 2.5 2.5 0 0 1-2.5-2.5v-13A2.5 2.5 0 0 1 14.5 3Z" opacity=".78" />
    </svg>
  );
}

export function FaceGlyph({ className, style }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden className={className} style={style}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 10v1M15.5 10v1M8.5 15c1 1.2 2.2 1.8 3.5 1.8s2.5-.6 3.5-1.8" />
    </svg>
  );
}

export function FireGlyph({ className, style }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className} style={style}>
      <path d="M12 2c.6 3.2-1.3 4.6-2.8 6.4C7.7 10.2 7 11.600 7 13.5A5 5 0 0 0 12 19a5 5 0 0 0 5-5.5c0-2-1-3.5-2-4.8-.3 1.2-.9 2-1.7 2.300.5-3-.2-6-1.300-9Z" />
    </svg>
  );
}

export function TrendArrow({ className, style }: P) {
  return (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className} style={style}>
      <path d="M3 9l6-6M4 3h5v5" />
    </svg>
  );
}

export function Caret({ className, style }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className} style={style}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function Speaker({ muted, className, style }: P & { muted: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className} style={style}>
      <path d="M4 9.5h3.5L12 5.5v13l-4.500-4H4Z" fill="currentColor" stroke="none" />
      {muted ? <path d="M16 9.5l5 5M21 9.5l-5 5" /> : <path d="M15.5 9a4.2 4.200 0 0 1 0 6M18 6.5a7.5 7.500 0 0 1 0 11" />}
    </svg>
  );
}
