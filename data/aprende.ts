/**
 * Contenido del recorrido "Aprende AED".
 *
 * Los títulos de las cinco lecciones controlan la barra lateral y la barra de
 * progreso; el cuerpo de cada lección vive en `app/aprende/page.tsx`, porque
 * tres de ellas incluyen piezas interactivas.
 */

export const titulosLecciones = [
  "¿Qué es el AED?",
  "Los conceptos clave",
  "Un método, paso a paso",
  "Laboratorio de decisiones",
  "Límites y preguntas",
];

/** Lección 2: glosario de conceptos. */
export const conceptos: [string, string][] = [
  [
    "Incentivos",
    "Consecuencias que vuelven una conducta más o menos atractiva. Un costo esperado de reparación puede incentivar la prevención.",
  ],
  [
    "Costo de oportunidad",
    "El valor de la mejor alternativa que dejamos de lado. Una hora dedicada a negociar no puede dedicarse al mismo tiempo a estudiar.",
  ],
  [
    "Externalidades",
    "Efectos sobre terceros que una decisión no incorpora plenamente. El ruido de una actividad puede afectar a los vecinos.",
  ],
  [
    "Costos de transacción",
    "Costos de buscar información, negociar y hacer cumplir un acuerdo. Pueden dificultar una solución que beneficiaría a las partes.",
  ],
  [
    "Asimetría de información",
    "Una parte dispone de información relevante que la otra no tiene. Por ejemplo, el vendedor puede conocer defectos que el comprador desconoce.",
  ],
  [
    "Eficiencia",
    "Conviene precisar el criterio: una mejora de Pareto beneficia a alguien sin perjudicar a nadie; otros criterios comparan beneficios y costos agregados y pueden admitir perdedores.",
  ],
];

/** Lección 3: los cuatro pasos del método. */
export const pasosMetodo: [string, string][] = [
  [
    "Delimita el problema",
    "Identifica a la empresa que decide, a las personas expuestas al daño y las conductas posibles.",
  ],
  [
    "Compara reglas",
    "Contrasta dos escenarios claros, por ejemplo asumir todo el daño o solo una parte. No confundas este supuesto con la legislación de un país.",
  ],
  [
    "Explica los incentivos",
    "Describe qué costos y beneficios espera cada actor bajo cada alternativa.",
  ],
  [
    "Examina los resultados",
    "Considera tanto el gasto en prevención como el daño esperado, y pregunta quién paga cada uno.",
  ],
  [
    "Contrasta con evidencia",
    "Busca datos sobre comportamiento, cumplimiento y daños. Revisa si tus supuestos son razonables antes de trasladar la conclusión al mundo real.",
  ],
];

/** Parámetros del laboratorio de decisiones (lección 4). */
export const laboratorio = {
  /** Costo del daño si llega a producirse, en unidades monetarias. */
  dano: 10000,
  costoPrevenirInicial: 2000,
  probabilidadInicial: 20,
  parteAsumidaInicial: 50,
};
