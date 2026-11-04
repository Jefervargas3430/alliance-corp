import type { Metadata } from "next";
import { areas } from "@/data/areas";
import { IntroPagina, TarjetaArea } from "@/components/tarjetas";

export const metadata: Metadata = {
  title: "Áreas de estudio",
  description:
    "Las cinco líneas de investigación de Alliance Corp: competencia, sociedades, financiamiento, tecnología y compliance.",
};

export default function Areas() {
  return (
    <>
      <IntroPagina
        migas={[
          { href: "/", texto: "Inicio" },
          { texto: "Áreas de estudio" },
        ]}
        antetitulo="Áreas de estudio"
        titulo="Una empresa. Muchas preguntas."
        bajada="Explora nuestros temas de interés. El análisis económico y el trabajo empírico son herramientas que pueden conectar distintas áreas."
      />

      <section className="container section">
        <div className="area-grid">
          {areas.map((area) => (
            <TarjetaArea key={area.slug} area={area} />
          ))}
        </div>
      </section>
    </>
  );
}
