export const NAV = [
  { id: "home", label: "Home" },
  { id: "courses", label: "Servicios" },
  { id: "trainers", label: "Metodo" },
  { id: "pricing", label: "Contacto" },
] as const;

export const HERO = {
  headline: ["Nos anticipamos", "a los problemas", "para corregirlos"],
  lede: "Identificamos inconsistencias y obligaciones pensionales, para que su empresa pueda actuar con informacion clara.",
  cta: "SOLICITAR DIAGNOSTICO",
  badge: ["Coneccion", "Identificar", "Ideas"],
  learners: { value: "+ 237", label: "Casos exitos" },
  sessions: { value: "360", label: "presentes en el mundo" },
  dataPoints: { value: "24", label: "DONDE ESTAN LOS DATOS" },
  avgScore: { value: "1.33", label: "QUE ES ESTO" },
  insight: { kicker: "Neural", title: "Insights" },
} as const;

export const COURSES = [
  { id: "focus", name: "Diagnóstico", minutes: 12, level: "Foundation", blurb: "Evaluación del estado actual para identificar problemas y causas.", metrics: [{ value: "+34%", label: "attention span" }, { value: "12 min", label: "per session" }] },
  { id: "memory", name: "Gestionar", minutes: 9, level: "Core", blurb: "Administrar y coordinar recursos para alcanzar los objetivos.", metrics: [{ value: "+21%", label: "recall accuracy" }, { value: "9 min", label: "per session" }] },
  { id: "speed", name: "Depurar", minutes: 7, level: "Core", blurb: "Corregir y optimizar información o procesos eliminando errores.", metrics: [{ value: "-180ms", label: "decision time" }, { value: "7 min", label: "per session" }] },
  { id: "flex", name: "Proyectar", minutes: 14, level: "Advanced", blurb: "Planificar acciones futuras estimando resultados, necesidades y metas.", metrics: [{ value: "+27%", label: "switch cost" }, { value: "14 min", label: "per session" }] },
] as const;

export const METHOD = [
  { step: "01", title: "Baseline", body: "A 20-minute assessment maps attention, memory, Casos exitosos. Nothing is prescribed before it is measured." },
  { step: "02", title: "Adapt", body: "Every session recalculates difficulty from the last one. Plateau for three days and the plan rewrites itself the same night." },
  { step: "03", title: "Prove", body: "Retest monthly against your own baseline. The report shows the delta per domain, with the sessions that produced it." },
] as const;

export const METRICS = [
  { value: 345, suffix: "", label: "sessions tracked" },
  { value: 24, suffix: "K", label: "data points" },
  { value: 544, suffix: "+", label: "active learners" },
  { value: 92, suffix: "%", label: "finish week four" },
] as const;

export const TRAINERS = [
  { name: "Dr. Ilana Reyes", role: "Cognitive Neuroscience", line: "Built the adaptive difficulty model. Fourteen years on attention research." },
  { name: "Marc Oduya", role: "Performance Coaching", line: "Trains the protocols used by two national esports squads." },
  { name: "Sena Alric", role: "Clinical Psychology", line: "Designs the memory sets and reviews every reported outcome." },
  { name: "Tobias Lund", role: "Data Science", line: "Owns the scoring pipeline — every millisecond you produce lands there." },
] as const;

export const PLANS = [
  { id: "starter", name: "Starter", monthly: 0, annual: 0, tagline: "One domain, no card needed.", features: ["Deep Focus track", "Weekly score", "3 sessions a week"], cta: "Start free", featured: false },
  { id: "personal", name: "Personal", monthly: 19, annual: 15, tagline: "The full adaptive plan.", features: ["All four domains", "Daily adaptive difficulty", "Monthly retest report", "Neural Insights dashboard"], cta: "Start Training", featured: true },
  { id: "lab", name: "Lab", monthly: 49, annual: 39, tagline: "For teams and researchers.", features: ["Everything in Personal", "Up to 25 seats", "Raw data export", "Trainer review calls"], cta: "Talk to us", featured: false },
] as const;

export const FAQS = [
  { q: "How long before anything changes?", a: "Most measurable movement shows up between weeks three and five, and only in the domains you actually trained. The retest report separates real gain from practice effect by re-scoring you on task variants you have never seen." },
  { q: "Is this backed by research?", a: "The drills are adapted from published adaptive n-back, task-switching and sustained-attention paradigms. We publish the exact protocol per track, plus our own aggregate outcomes, and we do not claim transfer beyond what we measure." },
  { q: "What does the adaptive engine actually change?", a: "Set length, inter-stimulus interval, distractor density and rule-switch frequency. It reads your last seven sessions, targets an 80% success rate, and rewrites the plan overnight if you plateau for three days." },
  { q: "Can I export my data?", a: "Yes. Every session writes a per-trial record — stimulus, response, latency in milliseconds. Personal exports as CSV, Lab exports the raw JSON stream." },
] as const;

export const FOOTER = {
  columns: [
    { title: "Train", links: ["Deep Focus", "Working Memory", "Processing Speed", "Cognitive Flexibility"] },
    { title: "Company", links: ["About", "Research", "Trainers", "Careers"] },
    { title: "Support", links: ["Help centre", "Contact", "Status", "Privacy"] },
  ],
} as const;
