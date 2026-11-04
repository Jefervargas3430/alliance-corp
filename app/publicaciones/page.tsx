import type { Metadata } from "next";
import Link from "next/link";
import FiltroLecturas from "@/components/FiltroLecturas";
import { IntroPagina } from "@/components/tarjetas";

export const metadata: Metadata = {
  title: "Publicaciones",
  description:
    "Guías introductorias, artículos y análisis de Alliance Corp. Filtra por área o por formato.",
};

export default function Publicaciones() {
  return (
    <>
      <IntroPagina
        migas={[{ href: "/", texto: "Inicio" }, { texto: "Publicaciones" }]}
        antetitulo="Publicaciones"
        titulo="Ideas para pensar la empresa."
        bajada="Explora guías introductorias y encuentra un punto de partida para tus propias preguntas. Filtra por área o formato."
      />

      <section className="container section">
        <FiltroLecturas />

        <div className="inline-callout">
          <div>
            <span className="eyebrow">LA PUBLICACIÓN ESTÁ CRECIENDO</span>
            <p>
              Los artículos, análisis de casos y debates se incorporarán conforme estén
              disponibles.
            </p>
          </div>
          <Link className="text-link" href="/colabora/">
            Cómo contribuir ↗
          </Link>
        </div>
      </section>
    </>
  );
}
