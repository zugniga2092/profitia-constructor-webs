# Publicar gratis (fase 6)

**Alojamiento** (o hosting) es el sitio donde vive la web para que cualquiera la vea: como el local
donde abres tu negocio. Para una web como esta no hace falta pagarlo.

## La opción del kit: Cloudflare Pages
Gratis, con el candado de seguridad incluido, muy rápida en todo el mundo, y su plan gratuito no
prohíbe usarla para un negocio. Además, en Cloudflare gestionaremos el dominio (ver `docs/dominio.md`).

Guía a la persona paso a paso (los nombres de los botones pueden cambiar un poco):
1. Crear una cuenta gratis en **cloudflare.com** y activar la verificación en dos pasos.
2. En el panel: **Workers y Pages** → **Crear** → pestaña **Pages** → **Subir recursos**
   (Upload assets / direct upload).
3. Poner un nombre al proyecto (será `nombre.pages.dev`) y **arrastrar la carpeta `mi-web`**.
4. **Implementar**. En un minuto la web está en `https://nombre.pages.dev`. Ábrela en el móvil.
5. Para cambios: en el proyecto, **Crear nueva implementación** y arrastrar otra vez la carpeta.

## Otras opciones, para que sepas elegir
| Servicio | Plan gratis | Ojo con |
|---|---|---|
| **Cloudflare Pages** | Web + candado + dominio propio | Nada relevante para una web así |
| **Vercel** | Muy cómodo, muy usado | Su plan gratuito es para proyectos personales, no comerciales; para un negocio piden el plan Pro |
| **Netlify** | Arrastrar y soltar también | Límites de uso mensuales |
| **GitHub Pages** | Gratis con GitHub | Pensado para proyectos personales y de código abierto |
| **Lovable** (otra forma de crear la web) | Publica en `nombre.lovable.app` | El dominio propio pide plan de pago |

Revisa siempre las condiciones actuales de cada servicio: cambian.

## Si la web es de otra persona
La cuenta de Cloudflare, a nombre del dueño del negocio. Que te invite como miembro para que tú
puedas subirla, y quítate cuando acabéis.
