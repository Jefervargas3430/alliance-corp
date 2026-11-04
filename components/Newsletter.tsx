"use client";

import { useState } from "react";
import { sitio } from "@/data/sitio";

/**
 * Bloque de suscripción del pie. No envía nada a un servidor: compone un
 * correo y lo abre en la aplicación del visitante, igual que el sitio original.
 */
export default function Newsletter() {
  const [enviado, setEnviado] = useState(false);

  function alEnviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const datos = new FormData(e.currentTarget);
    const nombre = String(datos.get("name") ?? "");
    const correo = String(datos.get("email") ?? "");

    const asunto = "Solicitud de novedades · Alliance Corp";
    const cuerpo = [
      "Hola Alliance Corp:",
      "",
      "Me gustaría recibir información sobre nuevas publicaciones y actividades académicas.",
      "",
      `Nombre: ${nombre}`,
      `Correo: ${correo}`,
    ].join("\n");

    window.location.href = `mailto:${sitio.correo}?subject=${encodeURIComponent(
      asunto,
    )}&body=${encodeURIComponent(cuerpo)}`;
    setEnviado(true);
  }

  return (
    <section className="newsletter">
      <div className="container newsletter-inner">
        <div>
          <span className="eyebrow">SIGAMOS EN CONVERSACIÓN</span>
          <h2>
            Ideas que vale
            <br />
            la pena seguir.
          </h2>
          <p>
            Solicita información sobre nuevas publicaciones
            <br />y actividades académicas.
          </p>
        </div>

        <form className="newsletter-form" onSubmit={alEnviar}>
          <div className="form-row">
            <label>
              Nombre
              <input autoComplete="name" required placeholder="Tu nombre" name="name" />
            </label>
            <label>
              Correo electrónico
              <input
                type="email"
                autoComplete="email"
                required
                placeholder="tu@correo.com"
                name="email"
              />
            </label>
          </div>
          <button className="button yellow" type="submit">
            Solicitar novedades<span>↗</span>
          </button>
          {enviado ? (
            <p className="form-status" role="status">
              Preparamos el correo. Revísalo y envíalo desde tu aplicación.
            </p>
          ) : (
            <p className="form-hint">
              Se abrirá tu aplicación de correo para que envíes la solicitud.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
