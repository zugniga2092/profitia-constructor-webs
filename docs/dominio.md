# El dominio, de principio a fin

El **dominio** es la dirección de la web (`panaderialaespiga.es`). Se alquila por años a un
**registrador** (IONOS, Cloudflare, Dinahosting, Namecheap…). No es el alojamiento: la dirección y el
local son cosas distintas, y se pueden tener en sitios diferentes.

## 1. Elegir un buen nombre
- Corto, fácil de decir por teléfono y de escribir sin dudas. Sin guiones ni números.
- `.es` si el negocio es de España y vende aquí. `.com` si es internacional. Evita terminaciones raras
  y baratas que nadie reconoce.
- Comprueba que el nombre no es una marca de otro (búscalo en Google y en la OEPM).
- Mira si ese nombre está libre también en Instagram.

## 2. Comprarlo (ejemplo con IONOS)
Muchos registradores tienen ofertas para el primer año (IONOS anuncia el `.es` por 1 €). Antes de pagar:
- **Mira el precio de renovación**, el del segundo año. Es el que de verdad vas a pagar.
- **Desmarca los extras** que vengan añadidos (correo, alojamiento, creador de webs, protección extra):
  con este kit no los necesitas.
- **A nombre del dueño del negocio**, con sus datos reales. El titular del dominio es el dueño legal.
- Activa la **verificación en dos pasos** en la cuenta nada más crearla.
- Si tiene activado **DNSSEC**, desactívalo antes del paso 3 (luego se vuelve a activar desde Cloudflare).

## 3. Pasar el dominio a Cloudflare (la gestión, no la compra)
Le decimos al dominio que sus «indicaciones» (los DNS) las da Cloudflare. Así el candado, el alojamiento
y el correo se conectan solos y gratis.
1. En Cloudflare: **Añadir un dominio** → escribirlo → elegir el plan **Free**.
2. Cloudflare te da **dos servidores de nombres** (por ejemplo `ana.ns.cloudflare.com` y `bob.ns.cloudflare.com`).
3. En IONOS: **Dominios** → tu dominio → **Servidores de nombres** → usar **servidores personalizados**
   → pegar los dos de Cloudflare → guardar.
4. Esperar. Suele tardar de minutos a unas horas (como mucho, un día). Cloudflare te avisa por correo
   cuando el dominio está **Activo**.

## 4. Conectar el dominio a la web
En Cloudflare, en tu proyecto de Pages → **Dominios personalizados** → **Configurar un dominio** →
escribir el dominio. Como el dominio ya está en Cloudflare, se configura solo. Repite con `www.` delante
si quieres que funcione también así. En unos minutos: `https://tudominio.es` con candado.
Después, actualiza `sitemap.xml`, `robots.txt` y las etiquetas `canonical` y `og:url` con el dominio.

## 5. Un correo con tu dominio, gratis
Con **Cloudflare Email Routing** puedes recibir en tu Gmail lo que escriban a `hola@tudominio.es`:
Cloudflare → tu dominio → **Correo electrónico** → **Enrutamiento** → crear la dirección y poner tu
correo de destino (te pedirá confirmarlo). Recibir es gratis; enviar desde esa dirección necesita
otro servicio.

## 6. El año que viene (que no te pille)
- Apunta en el calendario la fecha de renovación, con un mes de margen.
- Al renovar te cobrarán el precio normal. Tienes tres caminos:
  1. **Renovar** donde está, sabiendo el precio.
  2. **Trasladarlo** a otro registrador más barato (por ejemplo, Cloudflare vende a precio de coste las
     terminaciones que admite: comprueba si está la tuya). Las normas de ICANN no permiten trasladar
     un dominio en los 60 días siguientes a registrarlo, así que se hace con tiempo antes de la renovación.
  3. **Dejarlo caducar** si ya no lo quieres. Ojo: cualquiera podrá comprarlo después.
- Revisa si la renovación es automática y con qué tarjeta. Que no te cobren lo que no quieres, ni se
  te caduque lo que sí quieres.

## 7. Cuidado con los correos falsos
Te llegarán correos de «renueva tu dominio» de empresas que no son tu registrador, o directamente
fraudes. Renueva solo entrando tú en la web de tu registrador.

## Lo que cuesta de verdad
| Concepto | Coste |
|---|---|
| Dominio | Lo que cobre tu registrador (oferta el primer año, precio normal después) |
| Alojamiento en Cloudflare Pages | 0 € |
| Candado HTTPS | 0 € |
| Recibir correo con tu dominio | 0 € |
| Construir la web con este kit | 0 € (necesitas tu plan de Claude) |
