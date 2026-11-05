import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { recurso } from "@/lib/rutas";
import { notFound } from "next/navigation";
import { buscarEvento, eventos } from "@/data/eventos";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return eventos.map((evento) => ({ slug: evento.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const evento = buscarEvento(slug);
  if (!evento) return {};
  return { title: evento.titulo, description: evento.bajada };
}

export default async function EventoDetalle({ params }: Props) {
  const { slug } = await params;
  const evento = buscarEvento(slug);
  if (!evento) notFound();

  const [titulo, anio] = evento.titulo.split(/\s(?=\d{4}$)/);

  return (
    <>
      <section className="event-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/eventos/">Eventos y actividades</Link>
            <span>/</span>
            <span>{evento.archivado ? "Archivo 2026" : "Agenda"}</span>
          </div>
          <span className="eyebrow">ALLIANCE CORP UPC · SEMINARIO ACADÉMICO</span>
          <h1>
            {titulo}
            {anio && (
              <>
                <br />
                <em>{anio}.</em>
              </>
            )}
          </h1>
          <h2>
            {evento.subtituloHero.map((linea, i) => (
              <Fragment key={i}>
                {i > 0 && <br />}
                {linea}
              </Fragment>
            ))}
          </h2>
          <div className="event-facts">
            <span>
              {evento.dias} {evento.mesAnio.split(" ")[0]}
            </span>
            <span>{evento.horario.toUpperCase()}</span>
            <span>{evento.modalidad.toUpperCase()}</span>
          </div>
        </div>
        <img src={recurso(evento.imagen)} alt={evento.imagenAlt} />
      </section>

      <section className="container section event-detail-grid">
        <article className="prose">
          <span className="eyebrow">ACERCA DEL SEMINARIO</span>
          <h2>Las tendencias que conectan al derecho y la empresa.</h2>
          {evento.descripcion.map((parrafo, i) => (
            <p key={i}>{parrafo}</p>
          ))}

          <h3>Temas del encuentro</h3>
          <div className="tags">
            {evento.temas.map((tema) => (
              <span key={tema}>{tema}</span>
            ))}
          </div>

          <h3>Información del archivo</h3>
          <p>{evento.notaArchivo}</p>

          <Link className="button" href="/contacto/">
            Consultar sobre este evento <span>↗</span>
          </Link>
        </article>

        <aside className="event-side">
          <span className="eyebrow">FICHA DEL EVENTO</span>
          <dl>
            {evento.ficha.map((fila) => (
              <Fragment key={fila.termino}>
                <dt>{fila.termino}</dt>
                <dd>
                  {fila.definicion.map((linea, i) => (
                    <Fragment key={i}>
                      {i > 0 && <br />}
                      {linea}
                    </Fragment>
                  ))}
                </dd>
              </Fragment>
            ))}
          </dl>
          <p className="small-note">{evento.notaFicha}</p>
        </aside>
      </section>
    </>
  );
}
