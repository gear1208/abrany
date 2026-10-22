
export const NAV = [
  { id: "home", label: "Inicio" },
  { id: "courses", label: "Servicios" },
  { id: "trainers", label: "Método GPE" },
  { id: "pricing", label: "Contacto" },
] as const;

export const HERO = {
  headline: [
    "Identificamos inconsistencias",
    "para transformarlas",
    "en soluciones pensionales",
  ],
  lede:
    "Analizamos información laboral y pensional para detectar inconsistencias, depurar obligaciones y orientar decisiones con criterios técnicos y documentales.",
  cta: "SOLICITAR DIAGNÓSTICO PENSIONAL",
  badge: ["Detectar", "Depurar", "Proyectar"],
  learners: {
    value: "GPE",
    label: "Gestión Pensional Empresarial",
  },
  sessions: {
    value: "360°",
    label: "Visión integral de la información",
  },
  dataPoints: {
    value: "04",
    label: "Líneas de servicio",
  },
  avgScore: {
    value: "01",
    label: "Método de gestión",
  },
  insight: {
    kicker: "Análisis",
    title: "Decisiones con fundamento",
  },
} as const;

export const COURSES = [
  {
    id: "focus",
    name: "Diagnóstico",
    minutes: 12,
    level: "Análisis",
    blurb:
      "Evaluamos la información laboral y pensional para identificar inconsistencias, obligaciones pendientes y posibles riesgos.",
    metrics: [
      { value: "01", label: "Identificación" },
      { value: "02", label: "Evaluación" },
    ],
  },
  {
    id: "memory",
    name: "Gestión",
    minutes: 9,
    level: "Seguimiento",
    blurb:
      "Orientamos y organizamos las actuaciones necesarias para atender los hallazgos identificados y realizar seguimiento documental.",
    metrics: [
      { value: "01", label: "Plan de acción" },
      { value: "02", label: "Seguimiento" },
    ],
  },
  {
    id: "speed",
    name: "Depuración",
    minutes: 7,
    level: "Verificación",
    blurb:
      "Revisamos periodos, aportes, novedades y soportes para identificar diferencias y establecer las acciones de corrección pertinentes.",
    metrics: [
      { value: "01", label: "Revisión" },
      { value: "02", label: "Validación" },
    ],
  },
  {
    id: "flex",
    name: "Proyección",
    minutes: 14,
    level: "Planeación",
    blurb:
      "Estructuramos rutas de acción según los hallazgos, la documentación disponible y las necesidades de cada caso.",
    metrics: [
      { value: "01", label: "Planeación" },
      { value: "02", label: "Ruta de acción" },
    ],
  },
] as const;

export const METHOD = [
  {
    step: "01",
    title: "Diagnóstico integral",
    body:
      "Identificamos inconsistencias, analizamos antecedentes y evaluamos la información disponible para establecer el estado de la situación pensional.",
  },
  {
    step: "02",
    title: "Depuración y gestión",
    body:
      "Contrastamos datos y soportes, organizamos evidencias y definimos las actuaciones pertinentes para gestionar las diferencias identificadas.",
  },
  {
    step: "03",
    title: "Proyección de soluciones",
    body:
      "Establecemos una ruta de acción documentada, con prioridades, responsables cuando corresponda y seguimiento a las gestiones realizadas.",
  },
] as const;

export const METRICS = [
  { value: 5, suffix: "", label: "Líneas de servicio" },
  { value: 3, suffix: "", label: "Etapas metodológicas" },
  { value: 1, suffix: "", label: "Enfoque integral" },
  { value: 360, suffix: "°", label: "Visión de la información" },
] as const;

export const TRAINERS = [
  {
    name: "Análisis pensional",
    role: "Diagnóstico y evaluación",
    line:
      "Examinamos la información disponible para identificar inconsistencias, obligaciones y aspectos que requieren revisión.",
  },
  {
    name: "Gestión documental",
    role: "Organización y trazabilidad",
    line:
      "Estructuramos antecedentes, soportes y comunicaciones para facilitar el seguimiento de cada actuación.",
  },
  {
    name: "Depuración de información",
    role: "Validación de datos",
    line:
      "Contrastamos periodos, aportes y registros para documentar diferencias y orientar su tratamiento.",
  },
  {
    name: "Proyección de acciones",
    role: "Planeación y seguimiento",
    line:
      "Organizamos los hallazgos en rutas de acción acordes con la documentación y las particularidades de cada caso.",
  },
] as const;

export const PLANS = [
  {
    id: "diagnostico",
    name: "Diagnóstico",
    monthly: 0,
    annual: 0,
    tagline: "Conozca el estado de su situación pensional.",
    features: [
      "Revisión inicial de información",
      "Identificación de inconsistencias",
      "Priorización de hallazgos",
    ],
    cta: "Consultar servicio",
    featured: false,
  },
  {
    id: "gestion",
    name: "Gestión integral",
    monthly: 0,
    annual: 0,
    tagline: "Una ruta de trabajo según las necesidades identificadas.",
    features: [
      "Depuración de información",
      "Organización de soportes",
      "Orientación sobre actuaciones",
      "Seguimiento documental",
    ],
    cta: "Solicitar propuesta",
    featured: true,
  },
  {
    id: "empresarial",
    name: "Solución empresarial",
    monthly: 0,
    annual: 0,
    tagline: "Atención ajustada al alcance y volumen del proyecto.",
    features: [
      "Evaluación del alcance",
      "Plan de trabajo",
      "Priorización de casos",
      "Seguimiento de actividades",
    ],
    cta: "Contactar a GPE",
    featured: false,
  },
] as const;

export const FAQS = [
  {
    q: "¿Qué es GPE?",
    a:
      "GPE es una propuesta de gestión pensional empresarial orientada al análisis de información laboral y pensional, la identificación de inconsistencias, la depuración documental y la proyección de rutas de acción.",
  },
  {
    q: "¿Qué información se puede revisar?",
    a:
      "Según el alcance del servicio, se pueden revisar historias laborales, periodos cotizados, soportes de aportes, novedades, comunicaciones y otros documentos relacionados con la situación pensional.",
  },
  {
    q: "¿Qué ocurre cuando se identifica una inconsistencia?",
    a:
      "Se documenta el hallazgo, se revisan los soportes disponibles y se determinan las actuaciones que podrían corresponder. La solución depende de las evidencias, las competencias de las entidades involucradas y las particularidades del caso.",
  },
  {
    q: "¿GPE garantiza la corrección de todas las inconsistencias?",
    a:
      "No. La corrección puede depender de terceros, de la disponibilidad de soportes y de las decisiones de las entidades competentes. GPE orienta el análisis y la gestión dentro del alcance acordado, sin garantizar resultados ajenos a su control.",
  },
] as const;

export const FOOTER = {
  columns: [
    {
      title: "Servicios",
      links: [
        "Diagnóstico pensional",
        "Depuración de información",
        "Gestión documental",
        "Proyección de acciones",
      ],
    },
    {
      title: "GPE",
      links: [
        "Quiénes somos",
        "Método GPE",
        "Alcance del servicio",
        "Contacto",
      ],
    },
    {
      title: "Información",
      links: [
        "Preguntas frecuentes",
        "Tratamiento de datos",
        "Términos del servicio",
        "Canales de atención",
      ],
    },
  ],
} as const;
