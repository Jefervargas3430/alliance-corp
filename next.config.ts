import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exportacion estatica: el sitio se sirve como HTML plano, igual que el original.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
