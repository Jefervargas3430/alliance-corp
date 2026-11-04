import type { Metadata } from "next";
import Link from "next/link";
import { IntroPagina } from "@/components/tarjetas";

export const metadata: Metadata = {
  title: "Novedades",
  description: "Actividades, recursos y maneras de participar en Alliance Corp.",
};

const novedades = [
  {
    antetitulo: "EVENTOS · ARCHIVO 2026",
    titulo: "Legal Trends 2026",
    texto:
      "Consulta la convocatoria del seminario sobre mercado de capitales, compliance e inteligencia artificial.",
    href: "/eventos/legal-trends-2026/",
    enlace: "Ver la ficha ↗",
  },
  {
    antetitulo: "FORMACIÓN",
    titulo: "Una primera ruta por el AED",
    texto:
      "Explora conceptos, ejemplos y un laboratorio interactivo para comparar decisiones.",
    href: "/aprende/",
    enlace: "Comenzar a aprender ↗",
  },
  {
    antetitulo: "PUBLICACIONES",
    titulo: "De una pregunta a una contribución",
    texto: "Conoce los formatos y la información necesaria para proponer un texto.",
    href: "/colabora/",
    enlace: "Conoce cómo participar ↗",
  },
];

export default function Novedades() {
  return (
    <>
      <IntroPagina
        migas={[{ href: "/", texto: "Inicio" }, { texto: "Novedades" }]}
        antetitulo="Novedades"
        titulo="El proyecto, en movimiento."
        bajada="Actividades, recursos y maneras de participar en Alliance Corp."
      />

      <section className="container section news-list">
        {novedades.map((novedad) => (
          <article key={novedad.titulo}>
            <span className="eyebrow">{novedad.antetitulo}</span>
            <h2>{novedad.titulo}</h2>
            <p>{novedad.texto}</p>
            <Link className="text-link" href={novedad.href}>
              {novedad.enlace}
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
