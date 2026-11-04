import type { Metadata } from "next";
import Link from "next/link";
import { guias } from "@/data/guias";
import { IntroPagina, TarjetaGuia, TituloSeccion } from "@/components/tarjetas";

export const metadata: Metadata = {
  title: "Formación",
  description:
    "Lectura, investigación y escritura para desarrollar una mirada más amplia sobre el derecho de la empresa.",
};

const pasos = [
  { numero: "01", etiqueta: "Reglas" },
  { numero: "02", etiqueta: "Incentivos" },
  { numero: "03", etiqueta: "Decisiones" },
  { numero: "04", etiqueta: "Resultados" },
];

const competencias = [
  {
    titulo: "Leer y discutir",
    texto:
      "Identifica la tesis de un texto, reconstruye el argumento y formula una objeción fundamentada.",
  },
  {
    titulo: "Escribir e investigar",
    texto:
      "Delimita una pregunta, organiza fuentes y revisa la relación entre evidencia y conclusiones.",
  },
  {
    titulo: "Explorar datos",
    texto: "Pregunta qué mide un conjunto de datos, qué deja fuera y qué permite afirmar.",
  },
];

export default function Formacion() {
  const primerasGuias = guias.slice(0, 2);

  return (
    <>
      <IntroPagina
        migas={[{ href: "/", texto: "Inicio" }, { texto: "Formación" }]}
        antetitulo="Formación"
        titulo="Aprender a preguntar también se aprende."
        bajada="Lectura, investigación y escritura para desarrollar una mirada más amplia sobre el derecho de la empresa."
      />

      <section className="container section">
        <div className="formation-main">
          <div>
            <span className="eyebrow">GUÍA INTERACTIVA · DISPONIBLE</span>
            <h2>
              De la regla
              <br />a sus efectos.
            </h2>
            <p>
              Una primera ruta por el análisis económico del derecho. Explora cinco lecciones, un
              laboratorio de decisiones y una pregunta para poner a prueba tu comprensión.
            </p>
            <Link className="button" href="/aprende/">
              Comenzar el recorrido <span>↗</span>
            </Link>
          </div>
          <div className="rule-diagram" aria-label="Reglas, incentivos, decisiones y resultados">
            {pasos.map((paso, i) => (
              <div key={paso.numero}>
                <small>{paso.numero}</small>
                <span>{paso.etiqueta}</span>
                {i < pasos.length - 1 && <b>↓</b>}
              </div>
            ))}
          </div>
        </div>

        <div className="principle-grid formation-lines">
          {competencias.map((competencia) => (
            <article key={competencia.titulo}>
              <h3>{competencia.titulo}</h3>
              <p>{competencia.texto}</p>
            </article>
          ))}
        </div>

        <div className="inline-callout">
          <p>¿Te gustaría proponer una lectura o una sesión de discusión?</p>
          <Link className="text-link" href="/contacto/">
            Conversemos ↗
          </Link>
        </div>
      </section>

      <section className="container section">
        <TituloSeccion titulo="Claves para empezar" />
        <div className="guide-grid">
          {primerasGuias.map((guia) => (
            <TarjetaGuia key={guia.slug} guia={guia} />
          ))}
        </div>
      </section>
    </>
  );
}
