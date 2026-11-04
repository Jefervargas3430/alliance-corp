"use client";

import { useState } from "react";
import { sitio } from "@/data/sitio";

const asuntos = [
  "Quiero proponer una publicación",
  "Consulta sobre eventos y certificación",
  "Propuesta de colaboración",
  "Comunicar una corrección",
  "Otra consulta",
];

/**
 * Formulario de contacto. Igual que el del sitio original, no envía nada a un
 * servidor: arma un `mailto:` y deja que la persona confirme el envío desde su
 * propia aplicación de correo.
 */
export default function FormularioContacto() {
  const [preparado, setPreparado] = useState(false);

  function alEnviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const datos = new FormData(e.currentTarget);
    const nombre = String(datos.get("name") ?? "");
    const correo = String(datos.get("email") ?? "");
    const asunto = String(datos.get("subject") ?? "");
    const mensaje = String(datos.get("message") ?? "");

    const cuerpo = [
      mensaje,
      "",
      "—",
      `Nombre: ${nombre}`,
      `Correo: ${correo}`,
    ].join("\n");

    window.location.href = `mailto:${sitio.correo}?subject=${encodeURIComponent(
      asunto,
    )}&body=${encodeURIComponent(cuerpo)}`;
    setPreparado(true);
  }

  return (
    <form className="contact-form" onSubmit={alEnviar}>
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

      <label>
        Asunto
        <select name="subject" defaultValue={asuntos[0]}>
          {asuntos.map((asunto) => (
            <option key={asunto}>{asunto}</option>
          ))}
        </select>
      </label>

      <label>
        Mensaje
        <textarea name="message" rows={5} required placeholder="Cuéntanos tu idea o consulta…" />
      </label>

      <button className="button" type="submit">
        Preparar correo<span>↗</span>
      </button>

      {preparado ? (
        <p className="form-status" role="status">
          Preparamos el correo. Revísalo y envíalo desde tu aplicación.
        </p>
      ) : (
        <p className="form-hint">Se abrirá tu aplicación de correo para que envíes la solicitud.</p>
      )}
    </form>
  );
}
