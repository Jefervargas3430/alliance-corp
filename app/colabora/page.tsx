import type { Metadata } from "next";
import Link from "next/link";
import { IntroPagina } from "@/components/tarjetas";

export const metadata: Metadata = {
  title: "Colabora",
  description:
    "Cómo proponer un artículo, un análisis de caso o una nota de investigación a Alliance Corp.",
};

const pasos = [
  "Formula la pregunta que quieres responder.",
  "Explica por qué importa y qué podría aportar tu texto.",
  "Identifica las fuentes y el enfoque que utilizarías.",
  "Incluye tu nombre, una breve presentación y tus datos de contacto.",
];

export default function Colabora() {
  return (
    <>
      <IntroPagina
        migas={[{ href: "/", texto: "Inicio" }, { texto: "Colabora" }]}
        antetitulo="Colabora"
        titulo="Tu pregunta puede abrir una conversación."
        bajada="Proponemos un espacio para investigar problemas delimitados, discutir argumentos y compartir distintas perspectivas."
      />

      <section className="container section editorial-layout">
        <article className="prose">
          <h2>Qué puedes proponer</h2>
          <p>
            Un artículo o ensayo, un análisis de caso, una nota de investigación, una lectura
            comentada, una conversación o una respuesta a un debate.
          </p>

          <h2>Cómo presentar tu idea</h2>
          <ol>
            {pasos.map((paso) => (
              <li key={paso}>{paso}</li>
            ))}
          </ol>

          <h2>Un proceso para mejorar el texto</h2>
          <p>
            La propuesta editorial contempla revisar la claridad del argumento, sus fuentes y las
            objeciones relevantes antes de publicar. La recepción de una propuesta abre una
            conversación sobre su desarrollo.
          </p>

          <Link className="button" href="/contacto/">
            Presentar una propuesta <span>↗</span>
          </Link>
        </article>

        <aside className="side-note">
          <span className="eyebrow">ANTES DE ESCRIBIR</span>
          <h3>Una pregunta concreta vale más que un tema demasiado amplio.</h3>
          <p>
            Por ejemplo: identifica una decisión empresarial y pregunta qué incentivos explican la
            conducta de sus participantes.
          </p>
          <Link className="text-link" href="/criterios-editoriales/">
            Criterios editoriales ↗
          </Link>
        </aside>
      </section>
    </>
  );
}
