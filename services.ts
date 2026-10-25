/* Textos de la sección SERVICIOS.
   Para editar un servicio, cambie su `name` o `blurb`. Para agregar otro,
   copie un bloque completo y asígnele un `id` único. */

export const SERVICES_SECTION = {
  label: "Servicios",
  title: "Nuevo enfoque ágil y profundo en las dificultades del Sistema de Seguridad Social",
  lede: "En GPE asesoramos a empresas y personas en la gestión integral de su seguridad social y sistema pensional colombiano. Analizamos su información para resolver inconsistencias y gestionar trámites ante Colpensiones o fondos privados, protegiendo sus intereses y previniendo contingencias. Cada caso se estudia con base en sus antecedentes, documentos disponibles y normativa aplicable.",
} as const;

export const SERVICES = [
  {
    id: "reconocimiento",
    name: "PLANEACIÓN Y GESTIÓN DEL RECONOCIMIENTO PENSIONAL",
    blurb:
      "Evaluamos la situación de cada afiliado y orientamos la preparación y gestión de solicitudes de pensión de vejez, invalidez y sobrevivientes, así como sustitución pensional, pensión familiar y otras prestaciones económicas que resulten aplicables. Revisamos requisitos, soportes y posibles alternativas —incluidas la indemnización sustitutiva o la devolución de saldos cuando legalmente procedan—, para ayudar al cliente a tomar decisiones con información clara.",
  },
  {
    id: "prestacion",
    name: "REVISIÓN Y OPTIMIZACIÓN DE LA PRESTACIÓN PENSIONAL",
    blurb:
      "Analizamos liquidaciones, factores relevantes para el cálculo y escenarios pensionales para detectar posibles inconsistencias u oportunidades de revisión. Cuando existen fundamentos y soportes suficientes, acompañamos la preparación y gestión de solicitudes de corrección o reliquidación conforme a las reglas aplicables, sin garantizar de antemano un aumento en la mesada.",
  },
  {
    id: "historia-laboral",
    name: "AUDITORÍA Y RECUPERACIÓN DE LA HISTORIA LABORAL",
    blurb:
      "Verificamos semanas cotizadas, periodos laborados, salarios reportados, tiempos de servicio y aportes registrados en la historia laboral. Identificamos periodos faltantes, diferencias o datos inconsistentes y organizamos los soportes para gestionar las aclaraciones y correcciones ante la administradora correspondiente. Una historia laboral revisada facilita la evaluación de los requisitos y la preparación del expediente pensional.",
  },
  {
    id: "capacidad-laboral",
    name: "ORIENTACIÓN EN PROCESOS DE PÉRDIDA DE CAPACIDAD LABORAL",
    blurb:
      "Brindamos orientación documental y acompañamiento administrativo en procesos relacionados con la calificación de pérdida de capacidad laboral, revisión de dictámenes y análisis de las alternativas disponibles según el caso. La actuación se desarrolla con base en los documentos aportados y los procedimientos aplicables; la calificación corresponde a las entidades o juntas competentes.",
  },
  {
    id: "deuda-presunta",
    name: "DEPURACIÓN DE APORTES Y CONTROVERSIAS POR DEUDA PRESUNTA",
    blurb:
      "Examinamos cobros, diferencias, periodos sin aplicar y reportes de mora, omisión o inexactitud asociados a aportes al sistema de seguridad social. Contrastamos la información disponible —incluidos registros de PILA y soportes de pago— para identificar inconsistencias y apoyar la elaboración y seguimiento de solicitudes de aclaración, corrección o depuración ante Colpensiones y las administradoras que correspondan.",
  },
  {
    id: "auditoria-empresas",
    name: "AUDITORÍA PREVENTIVA DE SEGURIDAD SOCIAL PARA EMPRESAS",
    blurb:
      "Revisamos procesos de afiliación, novedades, bases de cotización, pagos y soportes de aportes para identificar riesgos de omisión, mora o inexactitud y oportunidades de mejora. Entregamos hallazgos y recomendaciones prácticas para fortalecer los controles internos, organizar la documentación y apoyar el cumplimiento de las obligaciones del empleador frente al Sistema de Protección Social.",
  },
] as const;
