# Seguridad (fase 5)

Una web pequeña no es un objetivo menor: los ataques son automáticos y prueban millones de webs y
cuentas a la vez. La buena noticia es que con cuatro hábitos te proteges de casi todo.

## 1. Tus cuentas (lo que más se ataca)
Las cuentas que importan: el **correo**, el **registrador del dominio** (por ejemplo IONOS),
**Cloudflare** y **GitHub** si lo usas. Quien entra en una de ellas se queda con tu web.
- Contraseña distinta en cada una, larga, guardada en un gestor de contraseñas (el del móvil o el
  navegador ya sirve).
- **Verificación en dos pasos** activada en todas (con una app de códigos o una llave, mejor que SMS).
- Un correo de recuperación que controles tú.
- Si trabajas para otra persona: nunca le pidas su contraseña. Que te invite como miembro o usuario
  desde su cuenta, y que te quite el acceso cuando terminéis.

## 2. Cuidado con los correos falsos
El engaño más común con dominios: un correo que dice «tu dominio va a caducar, renueva aquí» o
«problema con tu web», con un enlace a una página falsa. Regla: **nunca pagues ni entres desde un
enlace de un correo**. Abre tú la web del registrador escribiendo su dirección.

## 3. Nada secreto dentro de la web
Todo lo que hay en `mi-web/` lo puede ver cualquiera. Antes de publicar, comprueba:
- Ninguna contraseña, clave de API, token ni código. (Búscalo: `grep -riE "key|token|secret|password|contraseña" mi-web`.)
- Ningún dato personal que no deba estar: DNI, teléfono personal, dirección de casa, datos de clientes.
- Ningún archivo olvidado: borradores, `.env`, copias, fotos sin permiso.
- Si la web se guarda en GitHub, el repositorio de un cliente, privado.

## 4. La web, bien cerrada
- **HTTPS (el candado)** siempre. Cloudflare lo pone gratis; activa «Usar siempre HTTPS» (Always Use HTTPS).
- El archivo `_headers` de la plantilla añade cabeceras de seguridad: impide que otra web meta la tuya
  dentro de un marco, que el navegador ejecute cosas raras y que se filtren datos al salir a otras webs.
  No lo borres. Si añades algo externo (un vídeo de YouTube, por ejemplo), hay que permitirlo en su línea
  `Content-Security-Policy`.
- Sin scripts de terceros que no sean imprescindibles: cada uno es una puerta más.
- Copia de seguridad de la carpeta `mi-web` en otro sitio. Si algo pasa, se vuelve a subir en un minuto.

## Formularios (si de verdad hacen falta)
- Un servicio de formularios conocido, con protección contra spam (casilla trampa oculta o
  verificación sin cookies).
- Pedir solo lo necesario (nombre, forma de contacto, mensaje).
- Casilla de aceptación de la política de privacidad y texto informativo al lado (ver `docs/legal.md`).

## Con Claude Code y con kits como este
- Lee lo que te pide antes de darle permiso. Si no entiendes un comando, pregúntale qué hace.
- No ejecutes kits o comandos de desconocidos sin mirar qué hacen. Este kit es abierto: puedes leer
  cada archivo.
- Nunca pegues contraseñas en el chat.

## Lista para la fase 5
| Comprobación | ✔ / ✖ |
|---|---|
| Verificación en dos pasos en correo, registrador y Cloudflare | |
| Ningún secreto ni dato personal indebido en `mi-web/` | |
| `_headers` presente y sin cambios peligrosos | |
| Sin scripts externos innecesarios | |
| HTTPS forzado tras publicar | |
| Copia de seguridad de `mi-web/` | |
