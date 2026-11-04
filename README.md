# Alliance Corp

Sitio web de Alliance Corp, grupo de estudios de estudiantes de la UPC sobre
derecho corporativo, societario, empresarial y financiero.

En producción: https://alliance-corp-six.vercel.app

Next.js 15 (App Router) · React 19 · TypeScript · CSS propio · exportación estática.

## Empezar

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga automática. |
| `npm run build` | Genera el sitio estático en `out/`. |
| `npx tsc --noEmit` | Comprueba los tipos sin compilar. |

## Cómo está organizado

```
app/          Una carpeta por ruta (App Router de Next.js)
components/   Piezas de interfaz reutilizables
data/         El contenido del sitio, en archivos de TypeScript
lib/          Utilidades (el índice de búsqueda)
public/       Imágenes y favicon
```

El sitio se exporta como HTML estático (`output: "export"` en `next.config.ts`):
no hay servidor ni base de datos, y los formularios abren la aplicación de
correo del visitante en lugar de enviar nada.

### El contenido vive en `data/`

Esta es la parte importante: **para cambiar lo que dice el sitio casi nunca hay
que tocar el código**.

| Archivo | Qué contiene |
|---|---|
| `data/sitio.ts` | Nombre, correo de contacto, enlaces del menú y del pie. |
| `data/areas.ts` | Las cinco áreas de estudio. |
| `data/guias.ts` | Las guías de "Claves para entender", con sus secciones. |
| `data/eventos.ts` | Eventos y actividades, con su ficha. |
| `data/aprende.ts` | Conceptos y pasos del recorrido "Aprende AED". |

Añadir una guía nueva, por ejemplo, es agregar una entrada a `data/guias.ts`:
aparece sola en el índice de guías, en el listado de publicaciones, en las
lecturas de su área y en el buscador, y se genera su página en
`/guias/<slug>/`.

### Páginas

Inicio · Nosotros · Equipo y autores · Áreas de estudio (competencia,
sociedades, financiamiento, tecnología, compliance) · Publicaciones · Claves
para entender (4 guías) · Formación · Aprende AED · Eventos (Legal Trends 2026)
· Novedades · Colabora · Contacto · Criterios editoriales · Privacidad.

### Estilos

Todo el diseño está en `app/globals.css` con clases semánticas
(`.site-header`, `.area-card`, `.guide-grid`…). Los colores son variables CSS
definidas en `:root`:

| Variable | Uso |
|---|---|
| `--cream` `#f7f4eb` | Fondo |
| `--ink` `#282720` | Texto y bandas oscuras |
| `--coral` `#ed725f` | Acento principal |
| `--yellow` `#f3df5d` | Acento secundario |
| `--soft` `#eae5d7` | Fondos suaves |
| `--line` `#c9c3b5` | Bordes |

Tailwind está instalado y disponible para código nuevo, pero el diseño actual
no usa sus utilidades.

## De dónde viene este código

La primera versión del sitio se generó con una herramienta de IA y se desplegó
en Vercel con `vercel deploy --prebuilt`, sin repositorio de Git: solo se subió
la carpeta ya compilada, y el código fuente en React nunca llegó a Vercel.

Este proyecto se reconstruyó a partir de esa salida compilada, recuperada del
deployment `dpl_7D4yohqtk99FQyTxmmKTwpL1MUS4` del 19 de octubre de 2026. El
contenido, el diseño y el comportamiento se conservan: las 24 páginas generadas
tienen el mismo texto y la misma estructura HTML que el sitio original, y el
CSS mantiene todos sus selectores.

El sitio compilado original está en la rama `main` y en el historial de Git,
por si hace falta consultarlo.

## Desplegar

El proyecto genera HTML estático, así que funciona en cualquier hosting. En
Vercel, conectar este repositorio en **Settings → Git** basta: cada `push`
redespliega.
