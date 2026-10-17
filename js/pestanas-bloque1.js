/* ==========================================================
   Bloque 1 · Navegación por temas y pestañas internas
   - Muestra un único tema/sección a la vez (Tema 1, Tema 2,
     Tema 3, Tareas en PDF o Próximamente) como pestañas.
   - Dentro de cada tema muestra un panel a la vez
     (Aprender · Practicar · Quiz).
   - Dibuja la lectura interactiva y guarda, en este navegador,
     qué secciones ya marcaste como leídas.
   ========================================================== */

(function () {

  const CLAVE_LECTURA = "bloque1-lectura-leida";
  const PESTANA_HASH = /^tema-([1-3])-(aprender|practicar|quiz)$/;
  const TEMA_HASH = /^(tema-[1-3]|tareas-pdf|pendientes)$/;
  const SECCIONES_VALIDAS = ["tema-1", "tema-2", "tema-3", "tareas-pdf", "pendientes"];

  /* ---------- Utilidades ---------- */

  // Pide a MathJax que convierta las fórmulas del elemento visible.
  function tipografiar(elemento) {
    if (elemento && window.MathJax && MathJax.startup && MathJax.typesetPromise) {
      MathJax.startup.promise
        .then(function () { return MathJax.typesetPromise([elemento]); })
        .catch(function () {});
    }
  }

  // Lectura guardada en este navegador (si el navegador lo bloquea, no falla).
  function leerProgreso() {
    try { return JSON.parse(localStorage.getItem(CLAVE_LECTURA) || "{}"); }
    catch (e) { return {}; }
  }
  function guardarProgreso(datos) {
    try { localStorage.setItem(CLAVE_LECTURA, JSON.stringify(datos)); }
    catch (e) { /* sin almacenamiento: el progreso solo dura mientras la página esté abierta */ }
  }

  /* ---------- Lectura interactiva ---------- */

  function actualizarProgresoLectura(contenedor) {
    const casillas = contenedor.querySelectorAll("input[data-leer]");
    const leidas = Array.prototype.filter.call(casillas, function (c) { return c.checked; }).length;
    const texto = contenedor.querySelector(".lectura-progreso");
    if (texto) texto.textContent = leidas + " de " + casillas.length + " secciones leídas";
  }

  function dibujarLecturas() {
    const progreso = leerProgreso();

    document.querySelectorAll("[data-lectura]").forEach(function (contenedor) {
      const lectura = (typeof LECTURAS_BLOQUE1 !== "undefined") && LECTURAS_BLOQUE1[contenedor.dataset.lectura];
      if (!lectura) return;

      contenedor.innerHTML =
        '<div class="lectura">' +
          '<p class="lectura-progreso small text-secondary mb-3"></p>' +
          lectura.html +
        '</div>';

      contenedor.querySelectorAll("input[data-leer]").forEach(function (casilla) {
        casilla.checked = !!progreso[casilla.dataset.leer];
        casilla.addEventListener("change", function () {
          const datos = leerProgreso();
          datos[casilla.dataset.leer] = casilla.checked;
          guardarProgreso(datos);
          actualizarProgresoLectura(contenedor);
        });
      });

      actualizarProgresoLectura(contenedor);
    });
  }

  /* ---------- Mostrar un solo tema/sección a la vez ---------- */

  function activarSeccion(idSeccion, hacerScroll) {
    if (SECCIONES_VALIDAS.indexOf(idSeccion) === -1) return;

    // Oculta todas las secciones y muestra únicamente la elegida
    document.querySelectorAll(".seccion[data-vista-seccion]").forEach(function (sec) {
      sec.hidden = sec.id !== idSeccion;
    });

    // Actualiza el estado activo en la barra lateral (grupos y enlace de Próximamente)
    document.querySelectorAll(".grupo-enlace, .indice-enlace").forEach(function (enlace) {
      const objetivo = enlace.getAttribute("data-seccion") || (enlace.getAttribute("href") || "").slice(1);
      enlace.classList.toggle("activo", objetivo === idSeccion);
    });

    // Actualiza el estado activo en los chips del encabezado
    document.querySelectorAll(".chips-banner .chip[data-seccion]").forEach(function (chip) {
      chip.classList.toggle("activo", chip.getAttribute("data-seccion") === idSeccion);
    });

    // Si es uno de los 3 temas, sincroniza el sub-enlace activo (Aprender / Practicar / Quiz)
    const matchTema = idSeccion.match(/^tema-([1-3])$/);
    if (matchTema) {
      const numTema = matchTema[1];
      const contenedor = document.querySelector('[data-pestanas="' + numTema + '"]');
      const btnActivo = contenedor && contenedor.querySelector(".tab-btn.activa");
      const tabActiva = btnActivo ? btnActivo.dataset.tab : "aprender";
      const hashSub = "#tema-" + numTema + "-" + tabActiva;
      document.querySelectorAll(".indice-lista a").forEach(function (enlace) {
        enlace.classList.toggle("activo", enlace.getAttribute("href") === hashSub);
      });
    } else {
      document.querySelectorAll(".indice-lista a").forEach(function (enlace) {
        enlace.classList.remove("activo");
      });
    }

    const seccionActiva = document.getElementById(idSeccion);
    tipografiar(seccionActiva);

    if (hacerScroll && seccionActiva) {
      const contenedorPrincipal = document.getElementById("contenido-bloque") || seccionActiva;
      contenedorPrincipal.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  /* ---------- Pestañas internas (Aprender · Practicar · Quiz) ---------- */

  function activarPestana(tema, nombre, hacerScroll) {
    const idSeccion = "tema-" + tema;
    activarSeccion(idSeccion, false);

    const contenedor = document.querySelector('[data-pestanas="' + tema + '"]');
    if (!contenedor) return;

    contenedor.querySelectorAll(".tab-btn").forEach(function (boton) {
      const activa = boton.dataset.tab === nombre;
      boton.classList.toggle("activa", activa);
      boton.setAttribute("aria-selected", String(activa));
      boton.tabIndex = activa ? 0 : -1;
    });

    const idActivo = "tema-" + tema + "-" + nombre;
    contenedor.querySelectorAll(".tab-panel").forEach(function (panel) {
      panel.hidden = panel.id !== idActivo;
    });

    // La barra lateral marca la sub-pestaña que se está viendo
    document.querySelectorAll(".indice-lista a").forEach(function (enlace) {
      enlace.classList.toggle("activo", enlace.getAttribute("href") === "#" + idActivo);
    });

    const panelActivo = document.getElementById(idActivo);
    tipografiar(panelActivo);

    if (hacerScroll) {
      const seccion = document.getElementById(idSeccion);
      if (seccion) seccion.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // Atiende cambios en el hash (#tema-1, #tema-2-practicar, #tareas-pdf, #pendientes)
  function atenderHash(hacerScroll) {
    const hash = location.hash.slice(1);
    if (!hash) return;

    if ( hash === "tema-3-tareas" ) {
      activarSeccion("tareas-pdf", hacerScroll);
      return;
    }

    const coincidenciaPestana = hash.match(PESTANA_HASH);
    if (coincidenciaPestana) {
      activarPestana(coincidenciaPestana[1], coincidenciaPestana[2], hacerScroll);
      return;
    }

    const coincidenciaTema = hash.match(TEMA_HASH);
    if (coincidenciaTema) {
      activarSeccion(coincidenciaTema[1], hacerScroll);
    }
  }

  function configurarNavegacionTemas() {
    document.addEventListener("click", function (evento) {
      // Clic en enlaces con data-seccion (barra lateral, chips del banner, botones Anterior/Siguiente)
      const enlaceSeccion = evento.target.closest("[data-seccion]");
      if (enlaceSeccion) {
        evento.preventDefault();
        const destino = enlaceSeccion.getAttribute("data-seccion");
        activarSeccion(destino, true);
        history.replaceState(null, "", "#" + destino);
        return;
      }

      // Clic en sub-enlaces de la barra lateral (#tema-1-aprender, etc.)
      const enlaceSub = evento.target.closest(".indice-lista a");
      if (enlaceSub) {
        const href = (enlaceSub.getAttribute("href") || "").slice(1);
        const m = href.match(PESTANA_HASH);
        if (m) {
          evento.preventDefault();
          activarPestana(m[1], m[2], true);
          history.replaceState(null, "", "#" + href);
        }
      }
    });
  }

  function configurarPestanas() {
    document.querySelectorAll("[data-pestanas]").forEach(function (contenedor) {
      const tema = contenedor.dataset.pestanas;
      const barra = contenedor.querySelector(".tab-barra");

      // Clic: cambia de pestaña y actualiza la dirección sin saltar de lugar
      barra.addEventListener("click", function (evento) {
        const boton = evento.target.closest(".tab-btn");
        if (!boton) return;
        activarPestana(tema, boton.dataset.tab, false);
        history.replaceState(null, "", "#tema-" + tema + "-" + boton.dataset.tab);
      });

      // Teclado: flechas izquierda y derecha, como en las pestañas del sistema
      barra.addEventListener("keydown", function (evento) {
        if (evento.key !== "ArrowRight" && evento.key !== "ArrowLeft") return;
        const botones = Array.prototype.slice.call(barra.querySelectorAll(".tab-btn"));
        const actual = botones.indexOf(document.activeElement);
        if (actual < 0) return;
        const paso = evento.key === "ArrowRight" ? 1 : -1;
        const siguiente = botones[(actual + paso + botones.length) % botones.length];
        siguiente.focus();
        activarPestana(tema, siguiente.dataset.tab, false);
        history.replaceState(null, "", "#tema-" + tema + "-" + siguiente.dataset.tab);
      });
    });
  }

  /* ---------- Arranque ---------- */

  document.addEventListener("DOMContentLoaded", function () {
    dibujarLecturas();
    configurarPestanas();
    configurarNavegacionTemas();
    if (location.hash) {
      atenderHash(false);
    } else {
      activarSeccion("tema-1", false);
    }
  });
  window.addEventListener("hashchange", function () {
    atenderHash(true);
  });

})();
