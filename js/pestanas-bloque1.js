/* ==========================================================
   Bloque 1 · Pestañas por tema (Aprender · Practicar · Quiz)
   - Muestra un panel a la vez, con la barra de pestañas.
   - Los enlaces de la barra lateral (#tema-N-aprender, etc.) abren la pestaña.
   - Dibuja la lectura interactiva y guarda, en este navegador,
     qué secciones ya marcaste como leídas.
   ========================================================== */

(function () {

  const CLAVE_LECTURA = "bloque1-lectura-leida";
  const PESTANA_HASH = /^tema-([1-3])-(aprender|practicar|quiz)$/;

  /* ---------- Utilidades ---------- */

  // Pide a MathJax que convierta las fórmulas del panel activo.
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

  /* ---------- Pestañas ---------- */

  function activarPestana(tema, nombre) {
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

    // La barra lateral marca la pestaña que se está viendo
    document.querySelectorAll(".indice-lista a").forEach(function (enlace) {
      enlace.classList.toggle("activo", enlace.getAttribute("href") === "#" + idActivo);
    });

    tipografiar(document.getElementById(idActivo));
  }

  // Enlaces de la barra lateral y del hash: abren la pestaña y llevan al tema
  function atenderHash() {
    const coincidencia = location.hash.slice(1).match(PESTANA_HASH);
    if (!coincidencia) return;
    activarPestana(coincidencia[1], coincidencia[2]);
    const seccion = document.getElementById("tema-" + coincidencia[1]);
    if (seccion) seccion.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function configurarPestanas() {
    document.querySelectorAll("[data-pestanas]").forEach(function (contenedor) {
      const tema = contenedor.dataset.pestanas;
      const barra = contenedor.querySelector(".tab-barra");

      // Clic: cambia de pestaña y actualiza la dirección sin saltar de lugar
      barra.addEventListener("click", function (evento) {
        const boton = evento.target.closest(".tab-btn");
        if (!boton) return;
        activarPestana(tema, boton.dataset.tab);
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
        activarPestana(tema, siguiente.dataset.tab);
      });
    });
  }

  /* ---------- Sección activa en la barra lateral ---------- */

  function resaltarGrupoActivo() {
    const enlacesGrupo = document.querySelectorAll(".grupo-enlace");
    const observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        enlacesGrupo.forEach(function (enlace) {
          enlace.classList.toggle("activo", enlace.getAttribute("href") === "#" + entrada.target.id);
        });
      });
    }, { rootMargin: "-35% 0px -55% 0px" });

    document.querySelectorAll("#tema-1, #tema-2, #tema-3, #pendientes").forEach(function (seccion) {
      observador.observe(seccion);
    });
  }

  /* ---------- Arranque ---------- */

  document.addEventListener("DOMContentLoaded", function () {
    dibujarLecturas();
    configurarPestanas();
    resaltarGrupoActivo();
    atenderHash();
  });
  window.addEventListener("hashchange", atenderHash);

})();
