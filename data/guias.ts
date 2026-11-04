/**
 * Guías introductorias ("Claves para entender").
 *
 * Para publicar una guía nueva: agrega una entrada aquí. La página
 * `/guias/[slug]`, el índice `/guias`, el listado de `/publicaciones` y las
 * lecturas de cada área se construyen a partir de este archivo.
 */

export type SeccionGuia = {
  /** Ancla usada por el índice lateral "En esta lectura". */
  id: string;
  encabezado: string;
  parrafos: string[];
};

export type Guia = {
  slug: string;
  /** Número de orden mostrado en las tarjetas. */
  numero: string;
  titulo: string;
  /** Frase que resume la guía; se reutiliza en las tarjetas. */
  bajada: string;
  /** Slug del área a la que pertenece (ver `data/areas.ts`). */
  area: string;
  minutosLectura: number;
  portada: string;
  secciones: SeccionGuia[];
  fuente?: { url: string; etiqueta: string; nota: string };
};

export const guias: Guia[] = [
  {
    "slug": "competencia-en-los-mercados",
    "numero": "01",
    "titulo": "¿Qué significa competir en un mercado?",
    "bajada": "Precios, calidad, innovación y alternativas: una primera mirada al proceso competitivo.",
    "area": "competencia",
    "minutosLectura": 4,
    "portada": "/images/competencia.jpg",
    "secciones": [
      {
        "id": "parte-0",
        "encabezado": "La pregunta de partida",
        "parrafos": [
          "Para comprender la competencia conviene mirar qué opciones tienen los compradores y cómo reaccionan las empresas entre sí. El precio es una dimensión; la calidad, el servicio y la innovación también pueden ser relevantes."
        ]
      },
      {
        "id": "parte-1",
        "encabezado": "Un ejemplo para discutir",
        "parrafos": [
          "Imagina dos cafeterías en una misma calle. Una mejora su café y atrae clientes. La otra responde con nuevos productos. Para analizar ese proceso, pregunta qué alternativas existen, qué facilita la entrada de otro negocio y cómo se informan los consumidores."
        ]
      },
      {
        "id": "parte-2",
        "encabezado": "De la intuición al análisis",
        "parrafos": [
          "Una investigación necesita definir el mercado y la conducta que estudia, comparar explicaciones y examinar evidencia. El tamaño de una empresa, por sí solo, no responde todas esas preguntas. Las conclusiones jurídicas requieren analizar el ordenamiento y los hechos del caso."
        ]
      },
      {
        "id": "parte-3",
        "encabezado": "Para continuar",
        "parrafos": [
          "Elige un mercado que conozcas. Identifica sus participantes, las alternativas disponibles y dos formas de competir distintas del precio. Formula después una pregunta que puedas contrastar con datos."
        ]
      }
    ],
    "fuente": {
      "url": "https://www.ftc.gov/advice-guidance/competition-guidance/guide-antitrust-laws",
      "etiqueta": "FTC · Guide to Antitrust Laws (introducción al sistema estadounidense)",
      "nota": "Recurso externo para ampliar la lectura. Los ejemplos de esta guía son didácticos."
    }
  },
  {
    "slug": "gobierno-corporativo",
    "numero": "02",
    "titulo": "¿Quién toma las decisiones en una empresa?",
    "bajada": "Propiedad, administración y conflictos de interés explicados desde una pregunta sencilla.",
    "area": "sociedades",
    "minutosLectura": 4,
    "portada": "/images/sociedades.jpg",
    "secciones": [
      {
        "id": "parte-0",
        "encabezado": "Propiedad y decisiones",
        "parrafos": [
          "Una empresa puede reunir a personas que aportan capital, administran sus recursos y desarrollan su actividad. Sus funciones y sus intereses no siempre coinciden. El gobierno corporativo estudia las relaciones y mecanismos mediante los que se dirige y supervisa la organización."
        ]
      },
      {
        "id": "parte-1",
        "encabezado": "Un problema de incentivos",
        "parrafos": [
          "Imagina que una persona administra recursos aportados por otras. ¿Qué información deben recibir quienes aportaron el capital? ¿Cómo se evalúa la gestión? ¿Qué ocurre cuando una decisión beneficia personalmente a quien la adopta?"
        ]
      },
      {
        "id": "parte-2",
        "encabezado": "Qué observar",
        "parrafos": [
          "Para estudiar una organización, identifica quién decide, quién supervisa y quién soporta las consecuencias. Examina los mecanismos de información, los conflictos de interés y las posibilidades de cuestionar una decisión. La distribución jurídica de funciones depende de la forma societaria y del marco aplicable."
        ]
      },
      {
        "id": "parte-3",
        "encabezado": "Una lectura crítica",
        "parrafos": [
          "Un mecanismo puede mejorar la supervisión y al mismo tiempo generar costos. Analizar sus ventajas y límites requiere explicar el problema que intenta resolver y las condiciones en las que funciona."
        ]
      }
    ],
    "fuente": {
      "url": "https://www.oecd.org/es/publications/2023/09/g20-oecd-principles-of-corporate-governance-2023_60836fcb.html",
      "etiqueta": "OCDE · Principios de Gobierno Corporativo de la OCDE y del G20 2023",
      "nota": "Recurso externo para ampliar la lectura. Los ejemplos de esta guía son didácticos."
    }
  },
  {
    "slug": "financiar-una-empresa",
    "numero": "03",
    "titulo": "¿Cómo se financia una empresa?",
    "bajada": "Una introducción a la deuda, al capital y a las decisiones que acompañan al financiamiento.",
    "area": "financiamiento",
    "minutosLectura": 4,
    "portada": "/images/financiamiento.jpg",
    "secciones": [
      {
        "id": "parte-0",
        "encabezado": "Una decisión con varias dimensiones",
        "parrafos": [
          "Crecer, adquirir equipos o desarrollar un proyecto exige recursos. La pregunta por el financiamiento conecta el dinero disponible con el plazo, el riesgo y las condiciones bajo las que se obtiene."
        ]
      },
      {
        "id": "parte-1",
        "encabezado": "Deuda y capital",
        "parrafos": [
          "En términos generales, la deuda supone una obligación de devolución en condiciones pactadas. Un aporte de capital vincula al aportante con la propiedad y con los resultados de la empresa. Los derechos concretos dependen del instrumento y de sus términos."
        ]
      },
      {
        "id": "parte-2",
        "encabezado": "Un ejemplo para comparar",
        "parrafos": [
          "Una empresa quiere abrir un nuevo local. Puede reinvertir recursos, buscar un préstamo o incorporar a un socio. Compara cuánto necesita, cuándo espera generar ingresos, qué compromisos puede asumir y cómo cambiaría la toma de decisiones."
        ]
      },
      {
        "id": "parte-3",
        "encabezado": "La pregunta jurídica",
        "parrafos": [
          "Además del costo financiero, importan los derechos de información, las garantías, las restricciones contractuales y la distribución del control. Para estudiar una operación hay que leer sus documentos y entender el marco jurídico correspondiente."
        ]
      }
    ],
    "fuente": {
      "url": "https://www.investor.gov/introduction-investing",
      "etiqueta": "SEC · Investor.gov: Introduction to Investing (recurso educativo estadounidense)",
      "nota": "Recurso externo para ampliar la lectura. Los ejemplos de esta guía son didácticos."
    }
  },
  {
    "slug": "innovacion-y-propiedad-intelectual",
    "numero": "04",
    "titulo": "¿Qué conecta a la innovación con el derecho?",
    "bajada": "Ideas, información y creación: preguntas para entender la relación entre tecnología y reglas.",
    "area": "tecnologia",
    "minutosLectura": 4,
    "portada": "/images/tecnologia.jpg",
    "secciones": [
      {
        "id": "parte-0",
        "encabezado": "El punto de encuentro",
        "parrafos": [
          "Una nueva tecnología cambia lo que personas y empresas pueden hacer. También plantea preguntas sobre quién puede usar una creación, cómo circula la información y quién asume los efectos de su utilización."
        ]
      },
      {
        "id": "parte-1",
        "encabezado": "Distinguir las preguntas",
        "parrafos": [
          "Propiedad intelectual, protección de datos y regulación de la inteligencia artificial abordan problemas distintos que pueden coincidir en una misma actividad. Conviene identificar primero el objeto: una invención, una obra, información sobre personas o una decisión automatizada."
        ]
      },
      {
        "id": "parte-2",
        "encabezado": "Un ejemplo para explorar",
        "parrafos": [
          "Imagina una empresa que desarrolla una herramienta de IA. Un análisis puede preguntar de dónde proceden sus datos, cómo se reparten los derechos sobre sus resultados y qué mecanismos permiten detectar errores. Cada pregunta exige fuentes y evidencia propias."
        ]
      },
      {
        "id": "parte-3",
        "encabezado": "Evaluar alternativas",
        "parrafos": [
          "Las reglas pueden afectar los incentivos para crear y las posibilidades de acceder a nuevas herramientas. Una buena investigación precisa qué efecto estudia, a quién alcanza y qué evidencia podría confirmar o cuestionar su explicación."
        ]
      }
    ],
    "fuente": {
      "url": "https://www.wipo.int/en/web/about-ip",
      "etiqueta": "OMPI · What is Intellectual Property?",
      "nota": "Recurso externo para ampliar la lectura. Los ejemplos de esta guía son didácticos."
    }
  }
];

export function buscarGuia(slug: string): Guia | undefined {
  return guias.find((guia) => guia.slug === slug);
}

export function guiasDelArea(areaSlug: string): Guia[] {
  return guias.filter((guia) => guia.area === areaSlug);
}
