import type { Metadata } from "next";
import Link from "next/link";
import { recurso } from "@/lib/rutas";
import { IntroPagina, TituloSeccion } from "@/components/tarjetas";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Un proyecto estudiantil para conectar el derecho, la economía y las finanzas con preguntas de la realidad peruana.",
};

const principios = [
  {
    numero: "01",
    titulo: "Preguntas concretas",
    texto: "Delimitamos el problema antes de proponer una respuesta.",
  },
  {
    numero: "02",
    titulo: "Argumentos y evidencia",
    texto: "Examinamos las normas, las explicaciones y la información disponible.",
  },
  {
    numero: "03",
    titulo: "Perspectivas en diálogo",
    texto:
      "Conectamos el análisis jurídico con la economía, las finanzas y otras herramientas pertinentes.",
  },
  {
    numero: "04",
    titulo: "Crítica y revisión",
    texto:
      "Entendemos la lectura, la discusión y la escritura como prácticas que se perfeccionan.",
  },
];

export default function Nosotros() {
  return (
    <>
      <IntroPagina
        migas={[{ href: "/", texto: "Inicio" }, { texto: "Nosotros" }]}
        antetitulo="Nosotros"
        titulo="La empresa se entiende mejor desde distintas perspectivas."
        bajada="Un proyecto estudiantil para conectar el derecho, la economía y las finanzas con preguntas de la realidad peruana."
      />

      <section className="container section about-grid">
        <div className="about-image">
          <img
            src={recurso("/images/sociedades.jpg")}
            alt="Collage de una organización y las personas que influyen en ella"
          />
        </div>
        <div className="prose">
          <span className="eyebrow">QUIÉNES SOMOS</span>
          <h2>Una conversación que empieza en las aulas.</h2>
          <p>
            Alliance Corp es un grupo de estudios integrado por estudiantes de la Universidad
            Peruana de Ciencias Aplicadas, dedicado al estudio del derecho corporativo, societario,
            empresarial y financiero.
          </p>
          <p>
            Buscamos comprender cómo las reglas jurídicas influyen en la organización de las
            empresas, sus decisiones y el funcionamiento de los mercados.
          </p>
          <p>
            Creemos en la importancia de formar profesionales con una visión integral, capaces de
            desenvolverse en entornos corporativos complejos y en constante evolución.
          </p>
        </div>
      </section>

      <section className="purpose-section">
        <div className="container purpose-grid">
          <div>
            <span className="eyebrow">01 · NUESTRA MISIÓN</span>
            <h2>
              Estudiar.
              <br />
              Compartir.
              <br />
              Conectar.
            </h2>
            <p>
              Promover el estudio del derecho de la empresa y los mercados mediante la
              investigación, la publicación y la organización de actividades académicas. Conectamos
              el análisis jurídico con la economía, las finanzas y la tecnología para desarrollar
              una comprensión crítica de los problemas empresariales y contribuir a la formación de
              estudiantes interesados en estas áreas.
            </p>
          </div>
          <div>
            <span className="eyebrow">02 · NUESTRA VISIÓN</span>
            <h2>
              Una comunidad
              <br />
              que aporte
              <br />
              nuevas miradas.
            </h2>
            <p>
              Consolidar una comunidad estudiantil de investigación y debate cuya producción
              contribuya a comprender y mejorar el entorno jurídico de las empresas y los mercados
              en el Perú, en diálogo con la experiencia internacional.
            </p>
          </div>
        </div>
      </section>

      <section className="container section" id="enfoque">
        <TituloSeccion antetitulo="CÓMO PENSAMOS" titulo="Nuestro enfoque" />
        <div className="principle-grid">
          {principios.map((principio) => (
            <article key={principio.numero}>
              <span className="eyebrow">{principio.numero}</span>
              <h3>{principio.titulo}</h3>
              <p>{principio.texto}</p>
            </article>
          ))}
        </div>
        <div className="inline-callout">
          <p>Conoce qué buscamos en una contribución y cómo se presenta una propuesta.</p>
          <Link className="text-link" href="/criterios-editoriales/">
            Criterios editoriales ↗
          </Link>
        </div>
      </section>
    </>
  );
}
