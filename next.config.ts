import type { NextConfig } from "next";

/**
 * En GitHub Pages el sitio no vive en la raíz del dominio, sino en
 * /alliance-corp/, así que las rutas necesitan ese prefijo. Se pasa por
 * variable de entorno para que el desarrollo local y Vercel no cambien.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Exportacion estatica: el sitio se sirve como HTML plano, igual que el original.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
