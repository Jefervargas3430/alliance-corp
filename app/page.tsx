import Link from "next/link";
import { areas } from "@/data/areas";
import { guias } from "@/data/guias";
import { eventosArchivados } from "@/data/eventos";
import { TarjetaArea, TarjetaEvento, TarjetaGuia, TituloSeccion } from "@/components/tarjetas";

export default function Inicio() {
  const eventoDestacado = eventosArchivados[0];

  return (
    <>
      <section className="home-hero">
        <div className="hero-art">
          <img
            src="/images/ciudad.jpg"
            alt="Collage de edificios en amarillo, coral y negro"
            fetchPriority="high"
          />
          <div className="art-label">
            UN PUNTO DE ENCUENTRO
            <br />
            PARA NUEVAS PERSPECTIVAS
          </div>
        </div>
        <div className="hero-copy">
          <span className="eyebrow">ALLIANCE CORP · ESTUDIANTES UPC</span>
          <h1>
            Derecho,
            <br />
            empresa <em>&amp;</em>
            <br />
            mercados<span>.</span>
          </h1>
          <p>
            Comprender la empresa desde el derecho,
            <br className="desktop-break" /> la economía y las finanzas.
          </p>
          <Link className="button" href="/nosotros/">
            Conoce Alliance Corp <span>↗</span>
          </Link>
        </div>
        <a href="#areas" className="hero-scroll" aria-label="Explorar las áreas de estudio">
          EXPLORAR <span>↓</span>
        </a>
      </section>

      <section id="areas" className="section container">
        <TituloSeccion
          antetitulo="PREGUNTAS QUE NOS CONECTAN"
          titulo="Áreas de estudio"
          enlace={{ href: "/areas/", texto: "Todas las áreas" }}
        />
        <div className="area-grid">
          {areas.map((area) => (
            <TarjetaArea key={area.slug} area={area} />
          ))}
        </div>
      </section>

      <section className="community-band">
        <div className="container community-inner">
          <span className="eyebrow">UNA COMUNIDAD EN CONSTRUCCIÓN</span>
          <h2>
            Las buenas ideas
            <br />
            empiezan con
            <br />
            <em>una pregunta.</em>
          </h2>
          <div>
            <p>
              Un grupo de estudios de Derecho Corporativo, Societario, Empresarial y Financiero
              integrado por estudiantes de la UPC.
            </p>
            <p>
              Investigamos, compartimos lecturas y abrimos conversaciones sobre las reglas que
              rodean a la empresa.
            </p>
            <Link className="button yellow" href="/equipo/">
              Conoce el proyecto <span>↗</span>
            </Link>
          </div>
          <span className="community-asterisk" aria-hidden="true">
            ✳
          </span>
        </div>
      </section>

      <section className="section container events-home">
        <TituloSeccion
          antetitulo="EL DERECHO EN CONVERSACIÓN"
          titulo="Eventos y actividades"
          enlace={{ href: "/eventos/", texto: "Ver actividades" }}
        />
        {eventoDestacado && <TarjetaEvento evento={eventoDestacado} />}
      </section>

      <section className="education-feature">
        <div className="education-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <span className="education-word">
            ¿POR
            <br />
            QUÉ<span>?</span>
          </span>
          <span className="art-bottom">REGLAS → INCENTIVOS → DECISIONES</span>
        </div>
        <div className="education-copy">
          <span className="eyebrow">FORMACIÓN · AULA ABIERTA</span>
          <h2>
            Una nueva
            <br />
            forma de mirar
            <br />
            <em>el derecho.</em>
          </h2>
          <p>
            Empieza con una pregunta, compara alternativas y explora sus efectos. Descubre el
            análisis económico del derecho con una guía interactiva desde cero.
          </p>
          <Link className="button" href="/aprende/">
            Aprende AED <span>↗</span>
          </Link>
          <Link className="text-link" href="/formacion/">
            Explora formación ↗
          </Link>
        </div>
      </section>

      <section className="section container">
        <TituloSeccion
          antetitulo="IDEAS CLARAS PARA PREGUNTAS COMPLEJAS"
          titulo="Claves para entender"
          enlace={{ href: "/guias/", texto: "Todas las guías" }}
        />
        <div className="guide-grid">
          {guias.map((guia) => (
            <TarjetaGuia key={guia.slug} guia={guia} />
          ))}
        </div>
      </section>

      <section className="publications-band">
        <div className="container">
          <TituloSeccion
            antetitulo="LEER · PENSAR · ESCRIBIR"
            titulo="La publicación"
            enlace={{ href: "/publicaciones/", texto: "Explorar lecturas" }}
          />
          <div className="publication-columns">
            <h3>
              Argumentos que
              <br />
              abren conversaciones.
            </h3>
            <div>
              <p>
                Artículos y ensayos, análisis de casos, notas de investigación, conversaciones y
                debates. Un espacio para estudiar problemas concretos y contrastar perspectivas.
              </p>
              <p>
                Empieza con nuestras guías introductorias o propón una pregunta para investigar.
              </p>
              <Link className="button" href="/colabora/">
                Propón una contribución <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <TituloSeccion
          antetitulo="LA VIDA DEL PROYECTO"
          titulo="Novedades"
          enlace={{ href: "/novedades/", texto: "Ver novedades" }}
        />
        <div className="news-grid">
          <Link className="news-item" href="/eventos/legal-trends-2026/">
            <span className="eyebrow">EVENTOS · 2026</span>
            <h3>Legal Trends: una agenda entre finanzas, compliance y tecnología.</h3>
            <span className="text-link">Consulta la ficha ↗</span>
          </Link>
          <Link className="news-item" href="/colabora/">
            <span className="eyebrow">PARTICIPA</span>
            <h3>¿Tienes una pregunta que merece convertirse en un artículo?</h3>
            <span className="text-link">Cómo contribuir ↗</span>
          </Link>
          <Link className="news-item" href="/nosotros/#enfoque">
            <span className="eyebrow">NUESTRO ENFOQUE</span>
            <h3>Leer con curiosidad. Escribir con argumentos. Revisar con criterio.</h3>
            <span className="text-link">Conoce nuestro propósito ↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
