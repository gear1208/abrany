"use client";

import { Hero } from "@/components/hero";
import { ScrollProgress, StickyHeader } from "@/components/chrome";
import { Marquee } from "@/components/effects";
import { SiteFooter } from "@/components/footer";
import { MenuOverlay, MenuProvider } from "@/components/menu";
import {
  SectionExperience,
  SectionMethod,
  SectionServices,
} from "@/components/sections";
import { SmoothScroll } from "@/components/smooth-scroll";
import { useActiveSection } from "@/lib/use-active-section";

const SECTION_IDS = ["home", "services", "method", "experience", "contact"] as const;
const DOMAINS = ["Detección", "Análisis", "Gestión", "Seguimiento"];
const CLAIMS = ["Depurar", "Diagnosticar", "Gestionar", "Proyectar", "Seguir"];

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
        <SectionServices />
        <Marquee words={DOMAINS} />
        <SectionMethod />
        <SectionExperience />
        <Marquee words={CLAIMS} baseVelocity={1.8} />
      </main>
      <SiteFooter />
    </MenuProvider>
  );
}
