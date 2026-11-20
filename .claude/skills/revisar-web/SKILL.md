---
name: revisar-web
description: >
  Revisión completa de la web antes de publicarla: calidad, seguridad y lo legal en España. Úsala en la
  fase 5, antes de cada publicación y cuando la persona pregunte «¿está lista?» o «¿le falta algo?».
---

# Revisar la web antes de publicar

Tres listas, en este orden. Todas tienen que salir bien antes de publicar.

1. **Calidad** — `docs/revision.md`
2. **Seguridad** — `docs/seguridad.md` (lista final)
3. **Legal** — `docs/legal.md` (lista final)

## Cómo hacerlo
1. Comprueba tú todo lo que se puede comprobar mirando los archivos:
   - Busca secretos: `grep -riE "api[_-]?key|token|secret|password|contraseña|sk-|pk_" mi-web`
   - Busca huecos sin rellenar: `grep -rn "\[" mi-web/*.html` (los `[NIF]`, `[CORREO]`, `[DOMINIO]`…)
   - Comprueba que existe `mi-web/_headers` y que nadie ha quitado sus líneas.
   - Comprueba que no hay `style="` ni `<script>` con código dentro del HTML (la seguridad los bloquea).
   - Mira el peso de `mi-web/imagenes/` y de la página.
   - Revisa `mi-web/contenido-inventado.md`.
   - Busca enlaces externos sin `rel="noopener"`.
   - Comprueba en el CSS que, en pantallas estrechas, el botón principal sigue visible sin bajar
     (en la cabecera o en una barra fija), aunque el menú se pliegue.
2. Arregla lo que dependa de ti.
3. Lo que dependa de la persona (su NIF, su dirección, fotos reales, activar la verificación en dos
   pasos), pídeselo en una lista corta y clara.
4. Enséñale una tabla final con ✔ hecho y ✖ falta, y qué hacer con cada ✖.

No publiques si queda alguna reseña inventada, algún secreto o el aviso legal sin datos reales en la
web de un negocio. Explica por qué en una frase.
