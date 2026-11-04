import Link from "next/link";
import Wordmark from "./Wordmark";
import { areas } from "@/data/areas";
import { columnasPie, sitio } from "@/data/sitio";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Wordmark />
          <p>
            Derecho, empresa
            <br />
            y nuevas perspectivas.
          </p>
        </div>

        {columnasPie.map((columna) => (
          <div key={columna.titulo}>
            <span className="eyebrow">{columna.titulo}</span>
            {columna.enlaces.map((enlace) => (
              <Link key={enlace.href} href={enlace.href}>
                {enlace.texto}
              </Link>
            ))}
          </div>
        ))}

        <div>
          <span className="eyebrow">ÁREAS DE ESTUDIO</span>
          {areas.map((area) => (
            <Link key={area.slug} href={`/areas/${area.slug}/`}>
              {area.titulo}
            </Link>
          ))}
        </div>

        <div>
          <span className="eyebrow">CONVERSEMOS</span>
          <a href={`mailto:${sitio.correo}`}>{sitio.correo} ↗</a>
          <Link href="/colabora/">Propón una contribución ↗</Link>
          <Link href="/equipo/">Equipo y colaboradores ↗</Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>{sitio.pieDerechos}</span>
        <div>
          <Link href="/criterios-editoriales/">Criterios editoriales</Link>
          <Link href="/privacidad/">Privacidad</Link>
          <a href="#top">Volver arriba ↑</a>
        </div>
      </div>
    </footer>
  );
}
