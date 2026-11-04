"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { areas } from "@/data/areas";
import { guias } from "@/data/guias";
import { formatos } from "@/data/sitio";
import { normalizar } from "@/lib/busqueda";
import { TarjetaLectura } from "./tarjetas";

/**
 * Listado de lecturas con filtros por área, formato y texto libre.
 *
 * Se usa en `/publicaciones` (sin área fijada) y en cada `/areas/[slug]`
 * (con `areaInicial`). Hoy todas las lecturas son guías; cuando se incorporen
 * artículos o análisis de casos bastará con añadirlos al origen de datos y
 * darles su `formato`.
 */
export default function FiltroLecturas({ areaInicial = "all" }: { areaInicial?: string }) {
  const [area, setArea] = useState(areaInicial);
  const [formato, setFormato] = useState("all");
  const [consulta, setConsulta] = useState("");

  const lecturas = useMemo(() => {
    const q = normalizar(consulta.trim());
    return guias.filter((guia) => {
      if (area !== "all" && guia.area !== area) return false;
      if (formato !== "all" && formato !== "guia") return false;
      if (q && !normalizar(`${guia.titulo} ${guia.bajada}`).includes(q)) return false;
      return true;
    });
  }, [area, formato, consulta]);

  function verTodas() {
    setArea("all");
    setFormato("all");
    setConsulta("");
  }

  return (
    <>
      <div className="filters">
        <label>
          Área
          <select value={area} onChange={(e) => setArea(e.target.value)}>
            <option value="all">Todas las áreas</option>
            {areas.map((a) => (
              <option key={a.slug} value={a.slug}>
                {a.titulo}
              </option>
            ))}
          </select>
        </label>
        <label>
          Formato
          <select value={formato} onChange={(e) => setFormato(e.target.value)}>
            <option value="all">Todos los formatos</option>
            {formatos.map((f) => (
              <option key={f.valor} value={f.valor}>
                {f.etiqueta}
              </option>
            ))}
          </select>
        </label>
        <label>
          Buscar
          <input
            type="search"
            placeholder="Título o palabra clave"
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
          />
        </label>
      </div>

      <p className="result-count" aria-live="polite">
        {lecturas.length} {lecturas.length === 1 ? "lectura disponible" : "lecturas disponibles"}
      </p>

      <div className="reading-grid">
        {lecturas.map((guia) => (
          <TarjetaLectura key={guia.slug} guia={guia} />
        ))}
      </div>

      {lecturas.length === 0 && (
        <div className="empty-state">
          <span className="eyebrow">UNA CONVERSACIÓN POR ABRIR</span>
          <h3>Aquí puede empezar una nueva pregunta.</h3>
          <p>
            Todavía no hay publicaciones con estos filtros. Puedes explorar las guías disponibles o
            proponer una contribución.
          </p>
          <div className="button-row">
            <button className="button" onClick={verTodas}>
              Ver todas las lecturas ↗
            </button>
            <Link className="text-link" href="/colabora/">
              Proponer un texto ↗
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
