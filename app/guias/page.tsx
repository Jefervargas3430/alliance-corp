import type { Metadata } from "next";
import Link from "next/link";
import { guias } from "@/data/guias";
import { IntroPagina, TarjetaGuia } from "@/components/tarjetas";

export const metadata: Metadata = {
  title: "Claves para entender",
  description:
    "Guías introductorias para acercarte a conceptos complejos con ejemplos y rutas para seguir leyendo.",
};

export default function Guias() {
  return (
    <>
      <IntroPagina
        migas={[{ href: "/", texto: "Inicio" }, { texto: "Claves para entender" }]}
        antetitulo="Claves para entender"
        titulo="Empieza por una buena pregunta."
        bajada="Guías introductorias para acercarte a conceptos complejos con ejemplos y rutas para seguir leyendo."
      />

      <section className="container section">
        <div className="guide-grid">
          {guias.map((guia) => (
            <TarjetaGuia key={guia.slug} guia={guia} />
          ))}
        </div>
      </section>

      <section className="question-band">
        <div className="container">
          <h2>¿Cómo cambian las decisiones cuando cambian las reglas?</h2>
          <Link className="button" href="/aprende/">
            Explora el laboratorio AED ↗
          </Link>
        </div>
      </section>
    </>
  );
}
