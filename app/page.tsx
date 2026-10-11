"use client";

import { Hero } from "@/components/hero";
import { ScrollProgress, StickyHeader } from "@/components/chrome";
import { Marquee } from "@/components/effects";
import { SiteFooter } from "@/components/footer";
import { MenuOverlay, MenuProvider } from "@/components/menu";
import {
  SectionCourses,
  SectionFaq,
  SectionMethod,
  SectionPricing,
  SectionTrainers,
} from "@/components/sections";
import { SmoothScroll } from "@/components/smooth-scroll";
import { useActiveSection } from "@/lib/use-active-section";

const SECTION_IDS = ["home", "courses", "trainers", "pricing"] as const;
const DOMAINS = ["Deep Focus", "Working Memory", "Processing Speed", "Cognitive Flexibility"];
const CLAIMS = ["Measured", "Adaptive", "Retested", "Yours"];

export default function Page() {
  const active = useActiveSection(SECTION_IDS);

  return (
    <MenuProvider>
      <SmoothScroll />
      <ScrollProgress />
      <StickyHeader active={active} />
      <MenuOverlay />
      <main className="overflow-x-clip">
        <Hero active={active} />
        <SectionCourses />
        <Marquee words={DOMAINS} />
        <SectionMethod />
        <SectionTrainers />
        <Marquee words={CLAIMS} baseVelocity={1.8} />
        <SectionPricing />
        <SectionFaq />
      </main>
      <SiteFooter />
    </MenuProvider>
  );
}
