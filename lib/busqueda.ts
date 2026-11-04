import { areas } from "@/data/areas";
import { guias } from "@/data/guias";
import { eventos } from "@/data/eventos";
import { menuPrincipal, menuSecundario } from "@/data/sitio";

export type ResultadoBusqueda = {
  href: string;
  titulo: string;
  seccion: string;
};

/**
 * Índice de búsqueda del sitio. Es pequeño y se arma en memoria a partir de
 * los mismos datos que generan las páginas, así que nunca queda desfasado.
 */
export const indiceBusqueda: ResultadoBusqueda[] = [
  { href: "/", titulo: "Inicio", seccion: "Sitio" },
  ...menuPrincipal.map((e) => ({ href: e.href, titulo: e.titulo, seccion: "Sitio" })),
  ...menuSecundario.map((e) => ({ href: e.href, titulo: e.titulo, seccion: "Sitio" })),
  ...areas.map((a) => ({
    href: `/areas/${a.slug}/`,
    titulo: a.titulo,
    seccion: "Área de estudio",
  })),
  ...guias.map((g) => ({
    href: `/guias/${g.slug}/`,
    titulo: g.titulo,
    seccion: "Guía",
  })),
  ...eventos.map((e) => ({
    href: `/eventos/${e.slug}/`,
    titulo: e.titulo,
    seccion: "Evento",
  })),
];

/** Quita tildes y pasa a minúsculas, para comparar sin acentos. */
export function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export function buscar(consulta: string): ResultadoBusqueda[] {
  const q = normalizar(consulta.trim());
  if (!q) return [];
  return indiceBusqueda.filter(
    (item) => normalizar(item.titulo).includes(q) || normalizar(item.seccion).includes(q),
  );
}
