/**
 * Áreas de estudio de Alliance Corp.
 *
 * Para añadir un área nueva: agrega una entrada aquí y una imagen en
 * `public/images/`. La página `/areas/[slug]` y el índice `/areas` se generan
 * automáticamente a partir de este archivo.
 */

export type Area = {
  slug: string;
  /** Número de orden que se muestra en la tarjeta y en la miga de pan. */
  numero: string;
  titulo: string;
  /** Frase corta bajo el título en la cabecera del área. */
  bajada: string;
  imagen: string;
  imagenAlt: string;
  /** Encabezado de la sección "qué nos interesa"; el salto de línea se respeta. */
  encabezadoDescripcion: string;
  descripcion: string;
  etiquetas: string[];
  /** Pregunta destacada en la banda de color. */
  pregunta: string;
  /** Nombre corto usado en los filtros de lecturas. */
  etiquetaCorta: string;
};

export const areas: Area[] = [
  {
    "slug": "competencia",
    "numero": "01",
    "titulo": "Competencia y consumidores",
    "bajada": "Las reglas del juego en los mercados.",
    "imagen": "/images/competencia.jpg",
    "imagenAlt": "Collage editorial de competencia y consumidores",
    "encabezadoDescripcion": "Entender el problema.\nExaminar sus efectos.",
    "descripcion": "Estudiamos la competencia, el poder de mercado y la relación entre empresas y consumidores, con atención a los incentivos y a los efectos de las decisiones regulatorias.",
    "etiquetas": [
      "Libre competencia",
      "Control de concentraciones",
      "Protección al consumidor",
      "Publicidad y mercados digitales"
    ],
    "pregunta": "¿Cómo distinguir una ventaja competitiva de una barrera que limita la competencia?",
    "etiquetaCorta": "Competencia"
  },
  {
    "slug": "sociedades",
    "numero": "02",
    "titulo": "Sociedades y gobierno corporativo",
    "bajada": "Quién decide. Para quién. Con qué incentivos.",
    "imagen": "/images/sociedades.jpg",
    "imagenAlt": "Collage editorial de sociedades y gobierno corporativo",
    "encabezadoDescripcion": "Entender el problema.\nExaminar sus efectos.",
    "descripcion": "Exploramos cómo se organizan las empresas y cómo se distribuyen la propiedad, el control y la responsabilidad entre accionistas, administradores y otros participantes.",
    "etiquetas": [
      "Gobierno corporativo",
      "Accionistas y directorios",
      "Fusiones y adquisiciones",
      "Contratos empresariales"
    ],
    "pregunta": "¿Qué incentivos ayudan a alinear las decisiones del directorio con los intereses de la sociedad?",
    "etiquetaCorta": "Sociedades"
  },
  {
    "slug": "financiamiento",
    "numero": "03",
    "titulo": "Financiamiento y mercados de capitales",
    "bajada": "El capital detrás de las decisiones.",
    "imagen": "/images/financiamiento.jpg",
    "imagenAlt": "Collage editorial de financiamiento y mercados de capitales",
    "encabezadoDescripcion": "Entender el problema.\nExaminar sus efectos.",
    "descripcion": "Conectamos el derecho y las finanzas para comprender el financiamiento empresarial, la banca y los mercados de capitales, desde la estructura de una operación hasta sus riesgos.",
    "etiquetas": [
      "Finanzas corporativas",
      "Banca y regulación financiera",
      "Mercado de valores",
      "Crédito privado"
    ],
    "pregunta": "¿Qué explica la elección de una empresa entre deuda, capital y otras fuentes de financiamiento?",
    "etiquetaCorta": "Financiamiento"
  },
  {
    "slug": "tecnologia",
    "numero": "04",
    "titulo": "Tecnología, innovación y propiedad intelectual",
    "bajada": "Nuevas ideas. Nuevas preguntas jurídicas.",
    "imagen": "/images/tecnologia.jpg",
    "imagenAlt": "Collage editorial de tecnología, innovación y propiedad intelectual",
    "encabezadoDescripcion": "Entender el problema.\nExaminar sus efectos.",
    "descripcion": "Examinamos las relaciones entre innovación, regulación y actividad empresarial: inteligencia artificial, datos, propiedad intelectual y modelos de negocio digitales.",
    "etiquetas": [
      "Inteligencia artificial",
      "Protección de datos",
      "Propiedad intelectual",
      "Innovación y plataformas"
    ],
    "pregunta": "¿Cómo pueden las reglas promover la innovación y atender sus efectos sobre otras personas?",
    "etiquetaCorta": "Tecnología"
  },
  {
    "slug": "compliance",
    "numero": "05",
    "titulo": "Compliance, integridad y gestión de riesgos",
    "bajada": "De las reglas a la cultura de la organización.",
    "imagen": "/images/ciudad.jpg",
    "imagenAlt": "Collage editorial de compliance, integridad y gestión de riesgos",
    "encabezadoDescripcion": "Entender el problema.\nExaminar sus efectos.",
    "descripcion": "Una línea de estudio sobre prevención, cumplimiento y decisiones dentro de la empresa, conectada con los riesgos de la transformación tecnológica y la actividad financiera.",
    "etiquetas": [
      "Cumplimiento empresarial",
      "Integridad y prevención",
      "Gestión de riesgos",
      "Compliance e IA"
    ],
    "pregunta": "¿Qué hace que un programa de cumplimiento cambie las decisiones cotidianas de una organización?",
    "etiquetaCorta": "Compliance"
  }
];

export function buscarArea(slug: string): Area | undefined {
  return areas.find((area) => area.slug === slug);
}
