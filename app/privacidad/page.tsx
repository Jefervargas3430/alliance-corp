import type { Metadata } from "next";
import { sitio } from "@/data/sitio";
import { IntroPagina } from "@/components/tarjetas";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Cómo funcionan los medios de contacto de este sitio.",
};

export default function Privacidad() {
  return (
    <>
      <IntroPagina
        migas={[{ href: "/", texto: "Inicio" }, { texto: "Privacidad" }]}
        antetitulo="Privacidad"
        titulo="Información sobre tus consultas."
        bajada="Cómo funcionan los medios de contacto de este sitio."
      />

      <section className="container section narrow prose">
        <h2>Contacto por correo</h2>
        <p>
          Los formularios preparan un mensaje en tu aplicación de correo. El envío se realiza
          cuando tú lo confirmas allí. No se solicita DNI, comprobantes de pago ni documentos de
          identidad en esta web.
        </p>

        <h2>Solicitudes de novedades</h2>
        <p>
          La opción de recibir novedades prepara una solicitud por correo. Puedes pedir dejar de
          recibir comunicaciones escribiendo al mismo contacto.
        </p>

        <h2>Recursos externos</h2>
        <p>
          Las lecturas enlazadas se abren en las páginas de sus respectivos proveedores, que tienen
          sus propias condiciones y políticas.
        </p>

        <h2>Consultas</h2>
        <a href={`mailto:${sitio.correo}`}>{sitio.correo}</a>
      </section>
    </>
  );
}
