import type { Metadata, Viewport } from "next";
import { Funnel_Display, Funnel_Sans, Michroma } from "next/font/google";
import { ASSET_ORIGIN } from "@/lib/assets";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-funnel-display",
  display: "swap",
});

const funnelSans = Funnel_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-funnel-sans",
  display: "swap",
});

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michroma",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abrany — First Personal Brain Trainer",
  description:
    "Train your mind with precision, adapt in real time, and unlock measurable cognitive performance.",
};

export const viewport: Viewport = { themeColor: "#b5c9e5" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${funnelDisplay.variable} ${funnelSans.variable} ${michroma.variable}`}>
      <head>
        {ASSET_ORIGIN && (
          <>
            <link rel="preconnect" href={ASSET_ORIGIN} crossOrigin="" />
            <link rel="dns-prefetch" href={ASSET_ORIGIN} />
          </>
        )}
      </head>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
