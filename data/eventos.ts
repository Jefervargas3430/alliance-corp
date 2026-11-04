/**
 * Eventos y actividades.
 *
 * Un evento con `archivado: true` aparece bajo "Archivo"; el resto, en la
 * agenda de próximas actividades.
 */

export type Evento = {
  slug: string;
  titulo: string;
  bajada: string;
  /** Mismo subtítulo partido en las líneas con que se muestra en la portada del evento. */
  subtituloHero: string[];
  /** Rango de días tal como se imprime en la tarjeta, p. ej. "03—04". */
  dias: string;
  /** Mes y año en mayúsculas, p. ej. "SEPTIEMBRE 2026". */
  mesAnio: string;
  horario: string;
  modalidad: string;
  etiqueta: string;
  archivado: boolean;
  /** Slugs de las áreas en cuya página se muestra como "conversación relacionada". */
  areasRelacionadas: string[];
  imagen: string;
  imagenAlt: string;
  /** Párrafos de la sección "acerca del seminario". */
  descripcion: string[];
  temas: string[];
  /** Nota al cierre del cuerpo del artículo. */
  notaArchivo: string;
  /** Filas de la ficha lateral. */
  ficha: { termino: string; definicion: string[] }[];
  notaFicha: string;
};

export const eventos: Evento[] = [
  {
    slug: "legal-trends-2026",
    titulo: "Legal Trends 2026",
    bajada: "Mercado de Capitales, Compliance e Inteligencia Artificial",
    subtituloHero: ["Mercado de Capitales,", "Compliance e Inteligencia Artificial"],
    dias: "03—04",
    mesAnio: "SEPTIEMBRE 2026",
    horario: "4:00 p. m. — 7:00 p. m.",
    modalidad: "Modalidad virtual",
    etiqueta: "SEMINARIO ACADÉMICO · ARCHIVO",
    archivado: true,
    areasRelacionadas: ["financiamiento", "tecnologia", "compliance"],
    imagen: "/images/ciudad.jpg",
    imagenAlt: "Collage de la ciudad en coral y amarillo",
    descripcion: [
      "La convocatoria de Legal Trends 2026 propuso un seminario académico de actualización jurídica para analizar tendencias y desafíos del derecho corporativo.",
      "El programa anunciado contemplaba la participación de especialistas invitados en mercado de capitales, finanzas corporativas, compliance, inteligencia artificial y protección de datos.",
    ],
    temas: [
      "Mercado de capitales",
      "Finanzas corporativas",
      "Compliance",
      "Inteligencia artificial",
      "Protección de datos",
    ],
    notaArchivo:
      "Esta ficha recoge los datos de la convocatoria, programada para el jueves 3 y viernes 4 de septiembre de 2026. Para consultar sobre certificación, grabaciones o materiales académicos, contacta al equipo organizador.",
    ficha: [
      { termino: "Organiza", definicion: ["Alliance Corp UPC"] },
      { termino: "Fechas anunciadas", definicion: ["3 y 4 de septiembre de 2026"] },
      { termino: "Horario anunciado", definicion: ["4:00 p. m. — 7:00 p. m.", "Hora de Perú"] },
      { termino: "Modalidad", definicion: ["Virtual"] },
      { termino: "Inscripciones", definicion: ["Convocatoria de septiembre de 2026"] },
    ],
    notaFicha:
      "La información sobre certificación y acceso a recursos debe consultarse con la organización.",
  },
];

export function buscarEvento(slug: string): Evento | undefined {
  return eventos.find((evento) => evento.slug === slug);
}

export const eventosArchivados = eventos.filter((evento) => evento.archivado);

/** Eventos que deben aparecer en la página de un área. */
export function eventosDelArea(areaSlug: string): Evento[] {
  return eventos.filter((evento) => evento.areasRelacionadas.includes(areaSlug));
}
export const eventosProximos = eventos.filter((evento) => !evento.archivado);
