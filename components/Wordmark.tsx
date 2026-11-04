import Link from "next/link";

/** Logotipo tipográfico "ALLIANCE CORP. UPC", enlazado al inicio. */
export default function Wordmark() {
  return (
    <Link className="wordmark" aria-label="Alliance Corp, inicio" href="/">
      <span>ALLIANCE</span>
      <span>
        CORP<span className="brand-dot">.</span>
        <small>UPC</small>
      </span>
    </Link>
  );
}
