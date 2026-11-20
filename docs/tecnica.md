# Cómo se construye (fase 3)

Web estática: HTML, CSS y un poco de JavaScript. **Sin instalar nada**: ni Node, ni npm, ni frameworks.
Así funciona en cualquier ordenador, carga rápido, casi no tiene por dónde atacarla y se publica
arrastrando una carpeta.

## Archivos de `mi-web/`
```
index.html            la página
estilos.css           todo el diseño, con variables de color y letra arriba
script.js             solo lo imprescindible (menú del móvil, apariciones suaves)
imagenes/             fotos optimizadas (.webp o .jpg, máximo ~300 KB cada una)
fuentes/              las letras descargadas (ver abajo)
aviso-legal.html      ┐
privacidad.html       │ vienen de plantillas/base/ y se rellenan con la ficha
404.html              │
_headers              │ cabeceras de seguridad (Cloudflare las lee solas)
robots.txt            │
sitemap.xml           ┘ se completa cuando haya dominio
favicon.svg
ficha.md              la ficha del negocio (no se enlaza desde la web)
contenido-inventado.md
```
`ficha.md` y `contenido-inventado.md` no hacen daño publicados, pero no los enlaces. Si la persona
prefiere, se mueven fuera de `mi-web/` antes de subirla.

## HTML
- Semántico: `header`, `nav`, `main`, `section` con su `h2`, `footer`. Un solo `h1` (la portada).
- `lang="es"`, `meta viewport`, `title` y `meta description` escritos para personas (≤ 60 y ≤ 155 caracteres).
- Open Graph (`og:title`, `og:description`, `og:image` de 1200×630) para que se vea bien al compartir
  por WhatsApp.
- Datos estructurados JSON-LD de tipo `LocalBusiness` (o el subtipo: `Bakery`, `Dentist`, `HairSalon`…)
  con nombre, dirección, teléfono, horario y web. Solo datos reales de la ficha.
- Imágenes con `alt` descriptivo, `width` y `height`, y `loading="lazy"` salvo la de la portada.
- Enlaces externos con `rel="noopener"`.

## CSS
- Variables en `:root` para colores, letras y espacios. Escala de espacios de 4 en 4 px.
- Diseño pensado primero para el móvil (360 px) y luego para pantallas grandes.
- Contraste AA: texto normal 4,5:1, títulos grandes 3:1.
- Foco visible en enlaces y botones. Tamaño mínimo de lo que se toca: 44×44 px.
- `@media (prefers-reduced-motion: reduce)` quita los desplazamientos.

## Letras (privacidad incluida)
Descárgalas a `mi-web/fuentes/` en `.woff2` y decláralas con `@font-face`, en vez de enlazar a Google
Fonts: así la web no envía la dirección IP de cada visitante a Google y te ahorras explicarlo en la
política de privacidad. Cómo:
1. Pide el CSS de Google Fonts con un navegador moderno, por ejemplo
   `curl -A "Mozilla/5.0" "https://fonts.googleapis.com/css2?family=Fraunces:wght@400;700&display=swap"`.
2. Descarga cada `url(...)` `.woff2` del bloque `latin` a `mi-web/fuentes/`.
3. Escribe tus `@font-face` apuntando a esos archivos, con `font-display: swap`.
Si no se puede descargar, enlaza Google Fonts y avisa de que hay que mencionarlo en `privacidad.html`.

## Importante por la seguridad
El archivo `_headers` solo deja cargar estilos y scripts desde archivos propios. Por eso:
- Nada de `style="..."` dentro del HTML ni `<style>` en la página: todo en `estilos.css`.
- Nada de `<script>` con código dentro ni `onclick="..."`: todo en `script.js`.
- Los datos estructurados (`<script type="application/ld+json">`) sí van dentro: no son código.

## JavaScript
Mínimo y sin librerías externas. Que la web se lea entera aunque el JavaScript falle.
Nada de herramientas de analítica ni píxeles de publicidad sin preguntar: ponen cookies y obligan a
mostrar un aviso de cookies (ver `docs/legal.md`).

## Formularios
Mejor no. WhatsApp, teléfono y correo cubren a casi todos los negocios pequeños y no recogen datos en
la web. Si la persona insiste, ver `docs/seguridad.md` § Formularios.

## Rendimiento
- La página inicial, por debajo de 1 MB en total.
- Fotos redimensionadas al tamaño en que se ven (máximo 1600 px de ancho).
- Nada que bloquee la carga salvo el CSS.
