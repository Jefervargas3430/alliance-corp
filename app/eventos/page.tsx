import type { Metadata } from "next";
import Link from "next/link";
import { eventosArchivados, eventosProximos } from "@/data/eventos";
import { IntroPagina, TarjetaEvento, TituloSeccion } from "@/components/tarjetas";

export const metadata: Metadata = {
  title: "Eventos y actividades",
  description:
    "Seminarios y encuentros de Alliance Corp: un espacio para conectar preguntas académicas con la práctica profesional.",
};

export default function Eventos() {
  return (
    <>
      <IntroPagina
        migas={[{ href: "/", texto: "Inicio" }, { texto: "Eventos y actividades" }]}
        antetitulo="Eventos y actividades"
        titulo="Las ideas también se encuentran."
        bajada="Un espacio para conectar preguntas académicas con perspectivas de la práctica profesional."
      />

      <section className="container section">
        <TituloSeccion antetitulo="AGENDA" titulo="Próximas actividades" />

        {eventosProximos.length > 0 ? (
          eventosProximos.map((evento) => <TarjetaEvento key={evento.slug} evento={evento} />)
        ) : (
          <div className="upcoming-note">
            <span className="status-dot" />
            Las nuevas fechas se anunciarán en esta sección.
            <Link href="/contacto/">Recibir información ↗</Link>
          </div>
        )}

        <TituloSeccion antetitulo="SEMINARIOS Y ENCUENTROS" titulo="Archivo 2026" />
        {eventosArchivados.map((evento) => (
          <TarjetaEvento key={evento.slug} evento={evento} />
        ))}
      </section>
    </>
  );
}
