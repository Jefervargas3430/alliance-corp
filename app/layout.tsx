import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Newsletter from "@/components/Newsletter";
import { sitio } from "@/data/sitio";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(sitio.url),
  title: {
    default: "Alliance Corp · Derecho, empresa y mercados",
    template: "%s · Alliance Corp",
  },
  description: sitio.descripcion,
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body id="top">
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <SiteHeader />
        <main id="contenido">{children}</main>
        <Newsletter />
        <SiteFooter />
      </body>
    </html>
  );
}
