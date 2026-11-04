import type { Metadata } from "next";
import Link from "next/link";
import { IntroPagina } from "@/components/tarjetas";

export const metadata: Metadata = {
  title: "Criterios editoriales",
  description:
    "Principios de la propuesta editorial de Alliance Corp para orientar contribuciones y conversaciones.",
};

const criterios = [
  {
    titulo: "Una pregunta y un argumento",
    texto:
      "Cada texto debe explicar qué pregunta aborda, qué sostiene y cómo fundamenta su respuesta.",
  },
  {
    titulo: "Fuentes identificables",
    texto:
      "Las normas, decisiones, datos y trabajos citados deben poder localizarse. Se distinguirán las fuentes de la interpretación del autor.",
  },
  {
    titulo: "Discusión de alternativas",
    texto:
      "Una contribución debe tomar en serio las objeciones y las explicaciones que podrían cuestionar su conclusión.",
  },
  {
    titulo: "Autoría y transparencia",
    texto:
      "Las publicaciones identificarán a sus autores. Las colaboraciones, posibles conflictos de interés y apoyos relevantes deberán comunicarse al presentar el texto.",
  },
  {
    titulo: "Uso de materiales de terceros",
    texto:
      "Las contribuciones deben identificar los materiales ajenos y contar con los permisos que correspondan para su reproducción o traducción.",
  },
  {
    titulo: "Correcciones",
    texto:
      "Si encuentras un error, comunícalo indicando el texto, el pasaje y la fuente que permite contrastarlo. Las modificaciones sustantivas se identificarán en la publicación.",
  },
];

export default function CriteriosEditoriales() {
  return (
    <>
      <IntroPagina
        migas={[{ href: "/", texto: "Inicio" }, { texto: "Criterios editoriales" }]}
        antetitulo="Criterios editoriales"
        titulo="La calidad se construye revisando."
        bajada="Principios de la propuesta editorial de Alliance Corp para orientar contribuciones y conversaciones."
      />

      <section className="container section narrow prose">
        {criterios.map((criterio) => (
          <section key={criterio.titulo}>
            <h2>{criterio.titulo}</h2>
            <p>{criterio.texto}</p>
          </section>
        ))}
        <Link className="button" href="/contacto/">
          Proponer un texto o comunicar un error ↗
        </Link>
      </section>
    </>
  );
}
