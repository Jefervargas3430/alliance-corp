import type { Metadata } from "next";
import FormularioContacto from "@/components/FormularioContacto";
import { sitio } from "@/data/sitio";
import { IntroPagina } from "@/components/tarjetas";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Una pregunta, una propuesta de publicación o una idea para una actividad: escríbenos.",
};

export default function Contacto() {
  return (
    <>
      <IntroPagina
        migas={[{ href: "/", texto: "Inicio" }, { texto: "Contacto" }]}
        antetitulo="Contacto"
        titulo="Conversemos."
        bajada="Una pregunta, una propuesta de publicación o una idea para una actividad. Cuéntanos qué tienes en mente."
      />

      <section className="container section contact-grid">
        <div>
          <span className="eyebrow">CONTACTO DEL PROYECTO</span>
          <h2>
            El siguiente paso
            <br />
            empieza aquí.
          </h2>
          <a href={`mailto:${sitio.correo}`} className="contact-email">
            {sitio.correo} ↗
          </a>
          <p>
            Para consultas sobre Legal Trends 2026, indica el nombre del seminario y el motivo de
            tu consulta.
          </p>
        </div>

        <FormularioContacto />
      </section>
    </>
  );
}
