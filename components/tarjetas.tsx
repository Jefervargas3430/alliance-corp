import { Fragment } from "react";
import Link from "next/link";
import type { Area } from "@/data/areas";
import type { Guia } from "@/data/guias";
import type { Evento } from "@/data/eventos";
import { buscarArea } from "@/data/areas";

/** Tarjeta grande de un área, con imagen y número. */
export function TarjetaArea({ area }: { area: Area }) {
  return (
    <Link className={`area-card area-${area.slug}`} href={`/areas/${area.slug}/`}>
      <div className="area-image">
        <img src={area.imagen} alt="" loading="lazy" />
        <span>{area.numero}</span>
      </div>
      <div className="area-caption">
        <h3>{area.titulo}</h3>
        <span aria-hidden="true">↗</span>
      </div>
    </Link>
  );
}

/** Tarjeta numerada de una guía, usada en "Claves para entender". */
export function TarjetaGuia({ guia }: { guia: Guia }) {
  return (
    <Link className="guide-card" href={`/guias/${guia.slug}/`}>
      <span className="guide-number">{guia.numero}</span>
      <div>
        <span className="eyebrow">CLAVES PARA ENTENDER</span>
        <h3>{guia.titulo}</h3>
        <p>{guia.bajada}</p>
        <span className="text-link">
          Leer la guía <b>↗</b>
        </span>
      </div>
    </Link>
  );
}

/** Tarjeta de lectura: la misma guía vista desde los listados con filtros. */
export function TarjetaLectura({ guia }: { guia: Guia }) {
  const area = buscarArea(guia.area);
  return (
    <Link className="reading-card" href={`/guias/${guia.slug}/`}>
      <div className="reading-image">
        <img src={guia.portada} alt="" loading="lazy" />
      </div>
      <div className="reading-body">
        <span className="eyebrow">{area?.etiquetaCorta} · GUÍA</span>
        <h3>{guia.titulo}</h3>
        <p>{guia.bajada}</p>
        <span className="reading-meta">
          {guia.minutosLectura} min de lectura <b>↗</b>
        </span>
      </div>
    </Link>
  );
}

/** Tarjeta horizontal de un evento, con la fecha a la izquierda. */
export function TarjetaEvento({ evento }: { evento: Evento }) {
  return (
    <Link className="event-card" href={`/eventos/${evento.slug}/`}>
      <div className="event-date">
        <strong>{evento.dias}</strong>
        <span>{evento.mesAnio}</span>
      </div>
      <div>
        <span className="eyebrow">{evento.etiqueta}</span>
        <h3>{evento.titulo}</h3>
        <p>{evento.bajada}</p>
        <small>
          {evento.modalidad} · {evento.horario}
        </small>
      </div>
      <span className="event-arrow">↗</span>
    </Link>
  );
}

/** Cabecera estándar de página interior: miga de pan, antetítulo, título y bajada. */
export function IntroPagina({
  migas,
  antetitulo,
  titulo,
  bajada,
}: {
  migas: { href?: string; texto: string }[];
  antetitulo: string;
  titulo: React.ReactNode;
  bajada: string;
}) {
  return (
    <section className="page-intro container">
      <div className="breadcrumbs">
        {migas.map((miga, i) => (
          <Fragment key={miga.texto}>
            {miga.href ? <Link href={miga.href}>{miga.texto}</Link> : <span>{miga.texto}</span>}
            {i < migas.length - 1 && <span>/</span>}
          </Fragment>
        ))}
      </div>
      <span className="eyebrow">{antetitulo}</span>
      <h1>{titulo}</h1>
      <p>{bajada}</p>
    </section>
  );
}

/** Título de sección con antetítulo y, opcionalmente, un enlace a la derecha. */
export function TituloSeccion({
  antetitulo,
  titulo,
  enlace,
}: {
  antetitulo?: string;
  titulo: string;
  enlace?: { href: string; texto: string };
}) {
  return (
    <div className="section-title">
      <div>
        {antetitulo && <span className="eyebrow">{antetitulo}</span>}
        <h2>{titulo}</h2>
      </div>
      {enlace && (
        <Link className="text-link" href={enlace.href}>
          {enlace.texto} <span>↗</span>
        </Link>
      )}
    </div>
  );
}
