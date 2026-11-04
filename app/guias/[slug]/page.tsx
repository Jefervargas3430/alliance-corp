import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buscarGuia, guias } from "@/data/guias";
import { buscarArea } from "@/data/areas";
import { IntroPagina } from "@/components/tarjetas";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guias.map((guia) => ({ slug: guia.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guia = buscarGuia(slug);
  if (!guia) return {};
  return { title: guia.titulo, description: guia.bajada };
}

export default async function GuiaDetalle({ params }: Props) {
  const { slug } = await params;
  const guia = buscarGuia(slug);
  if (!guia) notFound();

  const area = buscarArea(guia.area);

  return (
    <>
      <IntroPagina
        migas={[{ href: "/", texto: "Inicio" }, { texto: "Claves para entender" }]}
        antetitulo="Claves para entender"
        titulo={guia.titulo}
        bajada={guia.bajada}
      />

      <section className="container article-layout">
        <aside className="article-sidebar">
          <span className="eyebrow">GUÍA INTRODUCTORIA</span>
          <p>{guia.minutosLectura} min de lectura</p>
          {area && <Link href={`/areas/${area.slug}/`}>{area.titulo} ↗</Link>}
          <hr />
          <span className="eyebrow">EN ESTA LECTURA</span>
          {guia.secciones.map((seccion) => (
            <a key={seccion.id} href={`#${seccion.id}`}>
              {seccion.encabezado}
            </a>
          ))}
        </aside>

        <article className="article-body">
          {guia.portada && <img className="article-cover" src={guia.portada} alt="" />}

          {guia.secciones.map((seccion) => (
            <section key={seccion.id} id={seccion.id}>
              <h2>{seccion.encabezado}</h2>
              {seccion.parrafos.map((parrafo, i) => (
                <p key={i}>{parrafo}</p>
              ))}
            </section>
          ))}

          {guia.fuente && (
            <div className="source-box">
              <span className="eyebrow">PARA PROFUNDIZAR</span>
              <a href={guia.fuente.url} target="_blank" rel="noreferrer">
                {guia.fuente.etiqueta} ↗
              </a>
              <p>{guia.fuente.nota}</p>
            </div>
          )}

          <Link className="text-link" href="/publicaciones/">
            ← Volver a las lecturas
          </Link>
        </article>
      </section>
    </>
  );
}
