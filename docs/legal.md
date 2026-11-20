# Lo legal en España (fase 5)

Esto es una guía práctica, no asesoría legal. Ante cualquier duda, que lo revise su gestoría.

## Aviso legal (obligatorio si la web es de un negocio)
La Ley de Servicios de la Sociedad de la Información (LSSI, art. 10) pide que la web muestre, de forma
fácil de encontrar:
- Nombre del titular o razón social.
- NIF o CIF.
- Domicilio.
- Correo electrónico de contacto.
- Si es una sociedad: datos de inscripción en el Registro Mercantil.
- Si es una profesión regulada (dentista, fisio, abogado…): colegio profesional y número de colegiado.
La plantilla `plantillas/base/aviso-legal.html` trae los huecos. Se rellenan con la ficha.

## Privacidad
Si la web recoge datos (un formulario, una suscripción) o si el negocio va a tratar los datos de quien
le escribe, hace falta una política de privacidad (Reglamento General de Protección de Datos): quién es
el responsable, para qué usa los datos, cuánto tiempo los guarda y cómo pedir que se borren.
La plantilla `plantillas/base/privacidad.html` trae una base para una web sin formularios.

## Cookies
- Si la web **no usa cookies que no sean imprescindibles** (sin analítica, sin publicidad, sin mapas o
  vídeos incrustados, con las letras descargadas), no hace falta banner de cookies. Esta es la opción
  del kit.
- Si se añade analítica, un mapa de Google incrustado, YouTube o un píxel de redes, hace falta un aviso
  de cookies con opción de rechazar tan fácil como aceptar. Mejor evitarlo.

## Reseñas, fotos y textos
- **Reseñas inventadas: prohibido.** La ley de consumidores prohíbe publicar reseñas falsas o
  presentarlas como reales sin comprobarlas. Solo reales, copiadas tal cual.
- Fotos: propias o con licencia que permita usarlas. Una foto copiada de Google puede acabar en una
  reclamación.
- Logotipos de otras marcas (proveedores, aseguradoras): solo con permiso.

## Precios
Si se publican, con IVA incluido y claros. Si cambian a menudo, mejor «desde» o «pide presupuesto».

## Accesibilidad
Hazla accesible siempre (contraste, textos alternativos, navegable con teclado): es lo correcto y cada
vez más una obligación para muchos negocios.

## Lista para la fase 5
| Comprobación | ✔ / ✖ |
|---|---|
| Aviso legal con nombre, NIF, domicilio y correo reales | |
| Política de privacidad acorde a lo que hace la web | |
| Sin cookies no imprescindibles (o con aviso correcto) | |
| `contenido-inventado.md` vacío o aceptado | |
| Fotos y logos con permiso | |
| Enlaces a «Aviso legal» y «Privacidad» en el pie | |
