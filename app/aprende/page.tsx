"use client";

import Link from "next/link";
import { useState } from "react";
import Slider from "@/components/Slider";
import { conceptos, laboratorio, pasosMetodo, titulosLecciones } from "@/data/aprende";

const formatoMoneda = new Intl.NumberFormat("es", { maximumFractionDigits: 0 });

export default function Aprende() {
  const [leccion, setLeccion] = useState(0);
  const [costoPrevenir, setCostoPrevenir] = useState(laboratorio.costoPrevenirInicial);
  const [probabilidad, setProbabilidad] = useState(laboratorio.probabilidadInicial);
  const [parteAsumida, setParteAsumida] = useState(laboratorio.parteAsumidaInicial);
  const [respuesta, setRespuesta] = useState<number | null>(null);

  // Daño esperado para el conjunto de afectados, y la fracción que recae en la empresa.
  const danoEsperado = (probabilidad / 100) * laboratorio.dano;
  const costoEmpresa = (danoEsperado * parteAsumida) / 100;

  const money = (n: number) => formatoMoneda.format(n);
  const veredicto = (costoDelDano: number) =>
    costoPrevenir < costoDelDano
      ? "Conviene prevenir"
      : costoPrevenir === costoDelDano
        ? "Ambas opciones cuestan lo mismo"
        : "No conviene prevenir";

  function irA(indice: number) {
    setLeccion(indice);
    setRespuesta(null);
  }

  return (
    <div className="wrap">
      <div>
        <section className="academy-intro">
          <span className="eyebrow">APRENDE AED / DESDE CERO</span>
          <h1>De la regla a sus efectos.</h1>
          <p>
            Una primera ruta por el análisis económico del derecho. Sin conocimientos previos de
            economía.
          </p>
        </section>

        <div className="academy-grid">
          <aside>
            <div className="eyebrow">TU RECORRIDO</div>
            <div className="progressline">
              <span style={{ width: `${(leccion + 1) * 20}%` }} />
            </div>
            <nav className="lesson-list" aria-label="Lecciones">
              {titulosLecciones.map((titulo, i) => (
                <button
                  key={titulo}
                  className={i === leccion ? "active" : ""}
                  aria-current={i === leccion ? "step" : undefined}
                  onClick={() => irA(i)}
                >
                  {String(i + 1).padStart(2, "0")} · {titulo}
                </button>
              ))}
            </nav>
          </aside>

          <article className="lesson">
            <span className="eyebrow">LECCIÓN {leccion + 1} DE 5</span>
            <h2>{titulosLecciones[leccion]}</h2>

            {leccion === 0 && (
              <>
                <p>
                  El análisis económico del derecho estudia cómo las reglas jurídicas influyen en
                  la conducta y en los resultados. También permite evaluar esos efectos, haciendo
                  explícito qué criterios usamos para juzgarlos.
                </p>
                <div className="example">
                  <h3>Empieza con una pregunta</h3>
                  <p>
                    Si una empresa debe asumir los daños que causa, ¿cambia su interés en
                    prevenirlos?
                  </p>
                  <p>
                    El AED invita a comparar alternativas y observar sus incentivos. La respuesta
                    depende de los costos, de la probabilidad del daño y de si la responsabilidad
                    se hace efectiva.
                  </p>
                </div>
                <p>
                  No hace falta empezar con fórmulas. Primero identifica quién decide, qué opciones
                  tiene y qué cambia para esa persona con cada regla.
                </p>
                <p className="source">
                  Lectura de referencia:{" "}
                  <a
                    href="https://www.law.uchicago.edu/lawecon/coaseinmemoriam/problemofsocialcost"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Universidad de Chicago: The Problem of Social Cost, de Ronald Coase ↗
                  </a>
                </p>
              </>
            )}

            {leccion === 1 && (
              <>
                <p>
                  Estas herramientas te ayudarán a formular mejores preguntas. Los ejemplos son
                  hipotéticos.
                </p>
                {conceptos.map(([titulo, texto]) => (
                  <div className="example" key={titulo}>
                    <h3>{titulo}</h3>
                    <p>{texto}</p>
                  </div>
                ))}
                <p className="source">
                  Para profundizar en negociación y costos de transacción:{" "}
                  <a
                    href="https://www.law.uchicago.edu/lawecon/coaseinmemoriam/problemofsocialcost"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Universidad de Chicago sobre The Problem of Social Cost, de Ronald Coase ↗
                  </a>
                </p>
              </>
            )}

            {leccion === 2 && (
              <>
                <p>
                  Prueba este método con una pregunta concreta: ¿qué cambia cuando quien causa un
                  daño debe asumir su costo?
                </p>
                {pasosMetodo.map(([titulo, texto], i) => (
                  <div className="example" key={titulo}>
                    <h3>
                      {i + 1}. {titulo}
                    </h3>
                    <p>{texto}</p>
                  </div>
                ))}
              </>
            )}

            {leccion === 3 && (
              <>
                <p>
                  Una empresa puede eliminar por completo un riesgo mediante una medida preventiva.
                  Si ocurre el daño, su costo es de {money(laboratorio.dano)} unidades monetarias.
                  Cambia los valores y compara las decisiones.
                </p>
                <div className="sim">
                  <label id="cost-label">Costo de prevenir: {money(costoPrevenir)}</label>
                  <Slider
                    aria-labelledby="cost-label"
                    value={[costoPrevenir]}
                    min={0}
                    max={10000}
                    step={100}
                    onValueChange={(v) => setCostoPrevenir(v[0])}
                  />

                  <label id="prob-label">
                    Probabilidad del daño sin prevención: {probabilidad}%
                  </label>
                  <Slider
                    aria-labelledby="prob-label"
                    value={[probabilidad]}
                    min={0}
                    max={100}
                    step={5}
                    onValueChange={(v) => setProbabilidad(v[0])}
                  />

                  <label id="share-label">
                    Parte del daño que asume la empresa: {parteAsumida}%
                  </label>
                  <Slider
                    aria-labelledby="share-label"
                    value={[parteAsumida]}
                    min={0}
                    max={100}
                    step={10}
                    onValueChange={(v) => setParteAsumida(v[0])}
                  />

                  <div className="result" aria-live="polite">
                    <span>PARA LA EMPRESA</span>
                    <strong>{veredicto(costoEmpresa)}</strong>
                    <p>
                      Costo esperado sin prevenir: {money(costoEmpresa)}. Costo de prevenir:{" "}
                      {money(costoPrevenir)}.
                    </p>
                  </div>

                  <div className="example">
                    <h3>Para el conjunto de afectados</h3>
                    <p>
                      <b>{veredicto(danoEsperado)}</b> al comparar solo estos costos: el daño total
                      esperado es {money(danoEsperado)} y prevenir cuesta {money(costoPrevenir)}.
                    </p>
                    <p>
                      {costoEmpresa < costoPrevenir && costoPrevenir < danoEsperado
                        ? "Aquí aparece una diferencia: prevenir reduce el costo total, pero la empresa no asume suficiente daño para tener ese incentivo."
                        : "Prueba reducir la parte del daño que asume la empresa. Su incentivo puede cambiar aunque el daño total esperado siga igual."}
                    </p>
                  </div>

                  <small>
                    Daño esperado = probabilidad × {money(laboratorio.dano)}. Costo esperado de la
                    empresa = daño esperado × proporción asumida.
                  </small>
                </div>
                <p className="source">
                  Modelo simplificado: actores neutrales al riesgo, pago efectivo de la parte
                  indicada, prevención completamente eficaz y sin otros costos ni beneficios. No
                  describe una regla jurídica vigente.
                </p>
              </>
            )}

            {leccion === 4 && (
              <>
                <p>
                  Un resultado calculado depende de sus supuestos. El AED ayuda a razonar sobre
                  consecuencias; para evaluar una regla también debemos explicar qué valoramos y a
                  quién afecta.
                </p>
                <div className="example">
                  <h3>Tres preguntas para no perder de vista</h3>
                  <p>
                    ¿Quién gana y quién pierde? ¿Qué efectos no medimos? ¿Qué evidencia permitiría
                    comprobar nuestra explicación?
                  </p>
                </div>
                <p>
                  <b>Comprueba tu comprensión:</b> si una medida reduce el costo total, ¿eso prueba
                  por sí solo que es justa para todas las personas?
                </p>
                <div className="quiz">
                  <button onClick={() => setRespuesta(0)}>Sí, es suficiente</button>
                  <button onClick={() => setRespuesta(1)}>
                    No, falta examinar otros criterios
                  </button>
                </div>
                {respuesta !== null && (
                  <div className="example" role="status">
                    <h3>{respuesta === 1 ? "Exacto." : "Revisemos esa conclusión."}</h3>
                    <p>
                      Una reducción del costo total no muestra cómo se distribuyen los beneficios y
                      las cargas. Debemos considerar los derechos involucrados, los efectos
                      distributivos y los criterios de justicia que adoptemos.
                    </p>
                  </div>
                )}
                <p style={{ marginTop: 24 }}>
                  Ya tienes una primera herramienta: formular una pregunta, comparar reglas,
                  identificar incentivos y revisar los efectos y los supuestos.
                </p>
              </>
            )}

            <div className="lesson-controls">
              <button disabled={leccion === 0} onClick={() => irA(leccion - 1)}>
                ← Anterior
              </button>
              <span>{leccion + 1} / 5</span>
              {leccion < 4 ? (
                <button onClick={() => irA(leccion + 1)}>Siguiente →</button>
              ) : (
                <Link href="/">Volver a Alliance Corp →</Link>
              )}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
