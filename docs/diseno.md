# El diseño (fase 2)

La meta: que el dueño abra la web en su móvil y piense «esto somos nosotros, y mejor de lo que
imaginaba». Eso solo pasa si el diseño sale **de su negocio**, no de una plantilla.

## La prueba de oro
Si cambias el nombre del negocio por otro y la web sigue valiendo, el diseño está mal.

## De dónde sale cada decisión
| Decisión | Sale de… |
|---|---|
| Colores | Su logo, su local, sus productos (la corteza del pan, la madera del taller, el uniforme) |
| Letras | La personalidad: cálida y artesanal → una serif con carácter; directa y moderna → una sans ancha; precisa y técnica → una sans sobria + números monoespaciados |
| Portada | Lo que le hace distinto, dicho en grande |
| Firma visual | **Un** elemento propio del negocio que se repite con intención (una forma, un color, un gesto) |
| Tono de los textos | Cómo habla él con sus clientes (de tú o de usted, en toda la web igual) |

## Las dos direcciones que propones
Tienen que ser **claramente distintas**, no una buena y otra de relleno. Para cada una:
- La idea en una frase.
- Paleta: 1 color oscuro, 1 claro, 1 o 2 de acento, con su código (#…).
- Letras: título + texto (de Google Fonts, ver `docs/tecnica.md`).
- Cómo será la portada, en dos líneas.
- Por qué sale de su negocio.

## Prohibido (huele a IA)
- Degradados morado-azul, brillos y cristales por todas partes.
- Todo centrado. Tres tarjetas iguales con un icono en un círculo.
- Inter, Roboto, Arial, Poppins, Montserrat, Open Sans como letra principal.
- Fotos de banco de gente sonriendo a cámara. Sin fotos reales, mejor buena tipografía y color.
- Emojis como iconos. Estrellitas decorativas. Contadores de «+5.000 clientes felices» sin dato real.
- Sombras enormes y esquinas muy redondeadas en todo.

## Lo que hace que parezca de estudio
- Una retícula clara: alineaciones que se repiten, columnas asimétricas.
- Tamaños de letra con contraste de verdad: títulos grandes, texto tranquilo.
- Mucho espacio en blanco y un ritmo vertical constante.
- Las fotos reales, tratadas igual (mismo recorte, misma luz).
- Detalles de oficio: horarios con números alineados, foco visible al navegar con teclado, enlaces
  con subrayado cuidado.

## Movimiento
Poco y con sentido: aparecer suave al bajar, nunca bailando. Duraciones cortas (200-500 ms),
curva `cubic-bezier(0.23, 1, 0.32, 1)`. Siempre con versión sin movimiento para quien la pide
(`prefers-reduced-motion`).
