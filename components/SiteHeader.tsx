"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Wordmark from "./Wordmark";
import { menuPrincipal, menuSecundario, sitio } from "@/data/sitio";
import { buscar } from "@/lib/busqueda";

type Overlay = null | "menu" | "busqueda";

export default function SiteHeader() {
  const [overlay, setOverlay] = useState<Overlay>(null);
  const [consulta, setConsulta] = useState("");
  const ruta = usePathname();

  // Al cambiar de página, cerrar lo que esté abierto.
  useEffect(() => {
    setOverlay(null);
    setConsulta("");
  }, [ruta]);

  // Escape cierra; mientras hay overlay, el fondo no debe desplazarse.
  useEffect(() => {
    if (!overlay) return;
    const alPulsar = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOverlay(null);
    };
    document.addEventListener("keydown", alPulsar);
    const overflowPrevio = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", alPulsar);
      document.body.style.overflow = overflowPrevio;
    };
  }, [overlay]);

  const resultados = buscar(consulta);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Wordmark />
          <span className="header-caption">
            {sitio.lemaCabecera[0]}
            <br />
            {sitio.lemaCabecera[1]}
          </span>
          <div className="header-actions">
            <button
              className="icon-button"
              aria-label="Buscar en el sitio"
              onClick={() => setOverlay("busqueda")}
            >
              <svg width="25" height="25" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="10.5" cy="10.5" r="7.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="m16 16 6 6" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <button
              className="menu-button"
              aria-label="Abrir menú"
              aria-expanded={overlay === "menu"}
              onClick={() => setOverlay("menu")}
            >
              <span>Explorar</span>
              <i aria-hidden="true">
                <b />
                <b />
                <b />
              </i>
            </button>
          </div>
        </div>
      </header>

      {overlay === "menu" && (
        <div className="overlay" role="dialog" aria-modal="true" aria-label="Menú de navegación">
          <div className="overlay-top">
            <Wordmark />
            <button className="close-button" aria-label="Cerrar menú" onClick={() => setOverlay(null)}>
              ×
            </button>
          </div>

          <div className="menu-columns">
            <section>
              <h2>Explora</h2>
              {menuPrincipal.map((enlace) => (
                <Link
                  key={enlace.href}
                  href={enlace.href}
                  aria-current={ruta === enlace.href ? "page" : undefined}
                >
                  {enlace.titulo}
                  {enlace.nota && <small>{enlace.nota}</small>}
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </section>

            <nav aria-label="Secciones adicionales">
              <span className="eyebrow">MÁS DEL PROYECTO</span>
              {menuSecundario.map((enlace) => (
                <Link
                  key={enlace.href}
                  href={enlace.href}
                  aria-current={ruta === enlace.href ? "page" : undefined}
                >
                  {enlace.titulo}
                </Link>
              ))}
              <Link className="menu-aed" href="/aprende/">
                Aprende AED ↗
              </Link>
            </nav>
          </div>

          <div className="overlay-bottom">
            <span>{sitio.pieDerechos}</span>
            <a href={`mailto:${sitio.correo}`}>{sitio.correo} ↗</a>
          </div>
        </div>
      )}

      {overlay === "busqueda" && (
        <div className="overlay" role="dialog" aria-modal="true" aria-label="Buscar en el sitio">
          <div className="overlay-top">
            <Wordmark />
            <button
              className="close-button"
              aria-label="Cerrar búsqueda"
              onClick={() => setOverlay(null)}
            >
              ×
            </button>
          </div>

          <div className="search-inner">
            <h2>¿Qué estás buscando?</h2>
            <input
              type="search"
              autoFocus
              placeholder="Un área, una guía, una actividad…"
              aria-label="Buscar en el sitio"
              value={consulta}
              onChange={(e) => setConsulta(e.target.value)}
            />
            <span className="eyebrow">
              {consulta.trim()
                ? `${resultados.length} ${resultados.length === 1 ? "RESULTADO" : "RESULTADOS"}`
                : "SECCIONES DEL SITIO"}
            </span>
            <div className="search-results">
              {(consulta.trim() ? resultados : buscar("")).length === 0 && consulta.trim() ? (
                <p>No encontramos nada con esa palabra. Prueba con otro término.</p>
              ) : null}
              {(consulta.trim() ? resultados : [...menuPrincipal, ...menuSecundario].map((e) => ({
                href: e.href,
                titulo: e.titulo,
                seccion: "Sitio",
              }))).map((item) => (
                <Link key={item.href + item.titulo} href={item.href}>
                  <span>{item.titulo}</span>
                  <small>{item.seccion}</small>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
