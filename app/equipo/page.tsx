import type { Metadata } from "next";
import Link from "next/link";
import { recurso } from "@/lib/rutas";
import { IntroPagina } from "@/components/tarjetas";

export const metadata: Metadata = {
  title: "Equipo y autores",
  description:
    "Estudiantes de la UPC interesados en investigar, escribir y conversar sobre derecho, empresa y mercados.",
};

export default function Equipo() {
  return (
    <>
      <IntroPagina
        migas={[{ href: "/", texto: "Inicio" }, { texto: "Equipo y autores" }]}
        antetitulo="Equipo y autores"
        titulo="Una comunidad que se construye compartiendo."
        bajada="Estudiantes de la UPC interesados en investigar, escribir y conversar sobre derecho, empresa y mercados."
      />

      <section className="container section about-grid">
        <img
          className="team-image"
          src={recurso("/images/sociedades.jpg")}
          alt="Collage de personas conectadas con una organización"
        />
        <div className="prose">
          <span className="eyebrow">PARTICIPA EN EL PROYECTO</span>
          <h2>
            Distintas perspectivas.
            <br />
            Una pregunta común.
          </h2>
          <p>
            El proyecto conecta la investigación y la redacción con la discusión, la revisión y la
            difusión de ideas.
          </p>
          <p>
            Los perfiles individuales se incorporarán junto con las contribuciones y la información
            del equipo. Cada publicación identificará su autoría.
          </p>
          <h3>Colaboradores</h3>
          <p>
            Las propuestas de colaboración académica pueden incluir lecturas comentadas,
            entrevistas y sesiones de discusión sobre preguntas concretas.
          </p>
          <Link className="button" href="/colabora/">
            Cómo contribuir <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
