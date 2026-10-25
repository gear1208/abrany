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
/* Carrusel bajo "Servicios": invita a conocer y revisar su caso. */
const SERVICE_PHRASES = [
  "Conozca su historia laboral",
  "Anticípese al riesgo",
  "Decida con información clara",
  "Corrija a tiempo",
  "Su pensión empieza hoy",
  "Solicite su diagnóstico",
];
/* Carrusel bajo "Trainers": llamado a dar el primer paso. */
const ACTION_PHRASES = [
  "Revise su caso hoy",
  "Cada semana cotizada cuenta",
  "Proteja su futuro pensional",
  "Actúe a tiempo",
  "Hable con GPE",
  "Dé el primer paso",
];

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
        <Marquee words={SERVICE_PHRASES} />
        <SectionMethod />
        <SectionTrainers />
        <Marquee words={ACTION_PHRASES} baseVelocity={1.8} />
        <SectionPricing />
        <SectionFaq />
      </main>
      <SiteFooter />
    </MenuProvider>
  );
}
