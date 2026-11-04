import Link from "next/link";

export default function NoEncontrado() {
  return (
    <>
      <section className="page-intro container">
        <div className="breadcrumbs">
          <Link href="/">Inicio</Link>
          <span>/</span>
          <span>Página no encontrada</span>
        </div>
        <span className="eyebrow">Página no encontrada</span>
        <h1>Sigamos explorando.</h1>
        <p>Esta página no está disponible. Puedes volver al inicio o explorar las áreas de estudio.</p>
      </section>

      <section className="container section">
        <Link className="button" href="/">
          Volver al inicio ↗
        </Link>
      </section>
    </>
  );
}
