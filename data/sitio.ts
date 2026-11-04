/**
 * Datos transversales del sitio: identidad, contacto y navegación.
 *
 * Cambiar un enlace del menú o del pie de página se hace aquí, una sola vez.
 */

export const sitio = {
  nombre: "Alliance Corp",
  lema: "Derecho, empresa y nuevas perspectivas.",
  lemaCabecera: ["DERECHO, EMPRESA", "Y NUEVAS PERSPECTIVAS"],
  descripcion:
    "Un grupo de estudios integrado por estudiantes de la UPC. Investigación, publicaciones y actividades sobre derecho, empresa, economía, finanzas y tecnología.",
  correo: "jefervargas3430@gmail.com",
  url: "https://alliance-corp-six.vercel.app",
  pieDerechos:
    "© 2026 Alliance Corp · Grupo de estudios integrado por estudiantes de la UPC.",
};

export type EnlaceMenu = {
  href: string;
  titulo: string;
  /** Texto gris a la derecha del título, en el menú desplegable. */
  nota?: string;
};

/** Secciones principales, en el orden del menú desplegable. */
export const menuPrincipal: EnlaceMenu[] = [
  { href: "/nosotros/", titulo: "Nosotros", nota: "Quiénes somos y cómo pensamos" },
  { href: "/areas/", titulo: "Áreas de estudio", nota: "Cinco líneas de investigación" },
  { href: "/publicaciones/", titulo: "Publicaciones", nota: "Guías, artículos y análisis" },
  { href: "/formacion/", titulo: "Formación", nota: "Leer, escribir e investigar" },
  { href: "/eventos/", titulo: "Eventos y actividades", nota: "Seminarios y encuentros" },
];

/** Enlaces secundarios de la columna derecha del menú. */
export const menuSecundario: EnlaceMenu[] = [
  { href: "/guias/", titulo: "Claves para entender" },
  { href: "/novedades/", titulo: "Novedades" },
  { href: "/equipo/", titulo: "Equipo y autores" },
  { href: "/colabora/", titulo: "Colabora" },
  { href: "/criterios-editoriales/", titulo: "Criterios editoriales" },
  { href: "/contacto/", titulo: "Contacto" },
];

/** Columnas del pie de página. */
export const columnasPie = [
  {
    titulo: "EXPLORA ALLIANCE CORP",
    enlaces: [
      { href: "/nosotros/", texto: "Nosotros" },
      { href: "/publicaciones/", texto: "Publicaciones" },
      { href: "/formacion/", texto: "Formación" },
      { href: "/eventos/", texto: "Eventos y actividades" },
      { href: "/novedades/", texto: "Novedades" },
    ],
  },
];

/** Formatos de publicación usados por los filtros de lecturas. */
export const formatos = [
  { valor: "guia", etiqueta: "Guías introductorias", corto: "GUÍA" },
  { valor: "articulo", etiqueta: "Artículos y ensayos", corto: "ARTÍCULO" },
  { valor: "caso", etiqueta: "Análisis de casos", corto: "CASO" },
  { valor: "nota", etiqueta: "Notas de investigación", corto: "NOTA" },
  { valor: "debate", etiqueta: "Debates", corto: "DEBATE" },
  { valor: "conversacion", etiqueta: "Conversaciones", corto: "CONVERSACIÓN" },
];
