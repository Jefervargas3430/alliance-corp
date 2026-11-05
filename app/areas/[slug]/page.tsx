import type { Metadata } from "next";
import Link from "next/link";
import { recurso } from "@/lib/rutas";
import { notFound } from "next/navigation";
import { areas, buscarArea } from "@/data/areas";
import { eventosDelArea } from "@/data/eventos";
import FiltroLecturas from "@/components/FiltroLecturas";
import { TarjetaEvento, TituloSeccion } from "@/components/tarjetas";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = buscarArea(slug);
  if (!area) return {};
  return { title: area.titulo, description: area.descripcion };
}

export default async function AreaDetalle({ params }: Props) {
  const { slug } = await params;
  const area = buscarArea(slug);
  if (!area) notFound();

  const eventosRelacionados = eventosDelArea(area.slug);
  const [primeraLinea, segundaLinea] = area.encabezadoDescripcion.split("\n");

  return (
    <>
      <section className="area-hero">
        <div className="area-hero-copy">
          <div className="breadcrumbs">
            <Link href="/areas/">Áreas de estudio</Link>
            <span>/</span>
            <span>{area.numero}</span>
          </div>
          <span className="eyebrow">ÁREA DE ESTUDIO / {area.numero}</span>
          <h1>{area.titulo}</h1>
          <p>{area.bajada}</p>
        </div>
        <img src={recurso(area.imagen)} alt={area.imagenAlt} />
      </section>

      <section className="container section area-description">
        <div>
          <span className="eyebrow">QUÉ NOS INTERESA</span>
          <h2>
            {primeraLinea}
            {segundaLinea && (
              <>
                <br />
                {segundaLinea}
              </>
            )}
          </h2>
        </div>
        <div>
          <p>{area.descripcion}</p>
          <div className="tags">
            {area.etiquetas.map((etiqueta) => (
              <span key={etiqueta}>{etiqueta}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="question-band">
        <div className="container">
          <span className="eyebrow">UNA PREGUNTA PARA EMPEZAR</span>
          <h2>{area.pregunta}</h2>
          <Link className="text-link" href="/colabora/">
            Propón una investigación ↗
          </Link>
        </div>
      </section>

      <section className="container section">
        <TituloSeccion antetitulo="EXPLORA Y PROFUNDIZA" titulo="Lecturas del área" />
        <FiltroLecturas areaInicial={area.slug} />
      </section>

      {eventosRelacionados.length > 0 && (
        <section className="container section">
          <TituloSeccion titulo="Una conversación relacionada" />
          {eventosRelacionados.map((evento) => (
            <TarjetaEvento key={evento.slug} evento={evento} />
          ))}
        </section>
      )}
    </>
  );
}
