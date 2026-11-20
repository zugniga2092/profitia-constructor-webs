// La Espiga · lo imprescindible: menú del móvil, apariciones suaves y «abierto ahora».
// Si este archivo falla, la web se lee entera igual.
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  // ----- Menú del móvil -----
  var boton = document.querySelector('.menu-boton');
  var menu = document.getElementById('menu');

  function cerrarMenu() {
    menu.classList.remove('menu--abierto');
    boton.setAttribute('aria-expanded', 'false');
    boton.textContent = 'Menú';
  }

  if (boton && menu) {
    boton.addEventListener('click', function () {
      var abierto = menu.classList.toggle('menu--abierto');
      boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
      boton.textContent = abierto ? 'Cerrar' : 'Menú';
    });

    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) { cerrarMenu(); }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('menu--abierto')) {
        cerrarMenu();
        boton.focus();
      }
    });
  }

  // ----- Apariciones suaves al bajar -----
  var bloques = document.querySelectorAll('.aparece');
  var sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (sinMovimiento || !('IntersectionObserver' in window)) {
    bloques.forEach(function (b) { b.classList.add('visible'); });
  } else {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visible');
          observador.unobserve(entrada.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    bloques.forEach(function (b) { observador.observe(b); });
  }

  // ----- «Abierto ahora» según el horario de la ficha (hora de Valencia) -----
  // Minutos desde medianoche. 0 = domingo … 6 = sábado.
  var HORARIO = {
    0: [],
    1: [[450, 840], [1020, 1230]],
    2: [[450, 840], [1020, 1230]],
    3: [[450, 840], [1020, 1230]],
    4: [[450, 840], [1020, 1230]],
    5: [[450, 840], [1020, 1230]],
    6: [[450, 870]]
  };
  var DIAS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  var CORTOS = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

  function hora(minutos) {
    var m = minutos % 60;
    return Math.floor(minutos / 60) + ':' + (m < 10 ? '0' : '') + m;
  }

  function ahoraEnValencia() {
    var partes = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Madrid', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false
    }).formatToParts(new Date());
    var d = {};
    partes.forEach(function (p) { d[p.type] = p.value; });
    return { dia: CORTOS[d.weekday], minutos: (parseInt(d.hour, 10) % 24) * 60 + parseInt(d.minute, 10) };
  }

  function estado() {
    var ahora = ahoraEnValencia();
    var hoy = HORARIO[ahora.dia];
    var i;

    for (i = 0; i < hoy.length; i++) {
      if (ahora.minutos >= hoy[i][0] && ahora.minutos < hoy[i][1]) {
        return 'Ahora está abierto, hasta las ' + hora(hoy[i][1]) + '.';
      }
    }
    for (i = 0; i < hoy.length; i++) {
      if (ahora.minutos < hoy[i][0]) {
        return 'Ahora está cerrado. Abrimos hoy a las ' + hora(hoy[i][0]) + '.';
      }
    }
    for (i = 1; i <= 7; i++) {
      var dia = (ahora.dia + i) % 7;
      if (HORARIO[dia].length) {
        var cuando = i === 1 ? 'mañana' : 'el ' + DIAS[dia];
        return 'Ahora está cerrado. Abrimos ' + cuando + ' a las ' + hora(HORARIO[dia][0][0]) + '.';
      }
    }
    return '';
  }

  try {
    var texto = estado();
    if (texto) {
      document.querySelectorAll('[data-estado]').forEach(function (el) {
        el.textContent = texto;
        el.hidden = false;
      });
    }
  } catch (e) {
    // Sin esto, el horario completo sigue en la tabla.
  }
})();
