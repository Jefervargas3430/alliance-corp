# Alliance Corp

Sitio web de Alliance Corp, grupo de estudios de estudiantes de la UPC sobre
derecho corporativo, empresa, mercados y economía.

En producción: https://alliance-corp-six.vercel.app

## Qué es este repositorio

Este repositorio contiene el sitio **recuperado desde el deployment de Vercel**
(`dpl_7D4yohqtk99FQyTxmmKTwpL1MUS4`, del 19 de octubre de 2026).

El sitio original se generó con una herramienta de IA y se subió a Vercel con
`vercel deploy --prebuilt`, es decir, solo se subió el resultado ya compilado.
Por eso **el código fuente en React/TypeScript no existe en Vercel** y no forma
parte de este repositorio.

### Contenido

| Carpeta | Qué contiene |
|---|---|
| `site/` | El sitio estático completo y funcional: el HTML de las 24 páginas, el CSS, los chunks de JavaScript y las imágenes. Se puede desplegar tal cual. |
| `deployment-meta/` | Metadatos del deployment original: `config.json` (rutas), `builds.json` y diagnósticos. Solo como referencia. |

### Qué se puede editar y qué no

- **El HTML de `site/`**: editable. El texto, los títulos y la estructura de cada
  página se pueden cambiar a mano. Los estilos son clases de Tailwind escritas
  dentro del propio HTML.
- **Las imágenes de `site/images/`**: reemplazables.
- **Los archivos de `site/_next/static/chunks/`**: JavaScript minificado. No es
  editable de forma práctica. Controla la interactividad (menú móvil, buscador).
- **Los archivos `__next.*.txt` e `index.txt`**: datos internos de Next.js
  generados automáticamente. No tocar.

## Ver el sitio en local

```bash
cd site
python3 -m http.server 3000
```

Luego abrir http://localhost:3000

## Páginas

Inicio · Nosotros · Equipo · Áreas (competencia, compliance, financiamiento,
sociedades, tecnología) · Guías (competencia en los mercados, financiar una
empresa, gobierno corporativo, innovación y propiedad intelectual) · Eventos
(Legal Trends 2026) · Publicaciones · Novedades · Formación · Aprende ·
Colabora · Contacto · Criterios editoriales · Privacidad

## Siguiente paso recomendado

Para poder añadir funcionalidades cómodamente conviene reconstruir un proyecto
Next.js limpio a partir del HTML de `site/`: el contenido y el diseño están
todos ahí, lo que falta son los componentes de React. Una vez hecho eso, cada
cambio se hace en un `.tsx` y no en HTML compilado.

Si aún existe la conversación con la IA que generó el sitio, el código fuente
original está ahí y conviene exportarlo antes de reconstruir nada.
