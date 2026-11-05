/**
 * Prefijo del sitio cuando no vive en la raíz del dominio.
 *
 * En GitHub Pages el sitio se publica en /alliance-corp/, así que las imágenes
 * necesitan ese prefijo. En desarrollo local y en Vercel la variable está
 * vacía y las rutas quedan como estaban.
 *
 * Los enlaces entre páginas no necesitan esto: `next/link` aplica el basePath
 * por su cuenta. Solo hace falta para los archivos de `public/`.
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function recurso(ruta: string): string {
  return `${BASE}${ruta}`;
}
