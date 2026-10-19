/* ==========================================================
   Bloque 1 · Navegación por temas y pestañas internas
   - Muestra un único tema/sección a la vez (Tema 1, Tema 2,
     Tema 3, Tareas en PDF o Próximamente) como pestañas.
   - Dentro de cada tema muestra un panel a la vez
     (Aprender · Practicar · Quiz).
   - En la sección Aprender, agrupa los subtemas en tarjetas
     interactivas; al hacer clic en una tarjeta se abre la
     lectura completa de ese subtema.
   ========================================================== */

(function () {

  const PESTANA_HASH = /^tema-([1-3])-(aprender|practicar|quiz)$/;
  const TEMA_HASH = /^(tema-[1-3]|tareas-pdf|pendientes)$/;
  const SECCIONES_VALIDAS = ["tema-1", "tema-2", "tema-3", "tareas-pdf", "pendientes"];

  // Estado en memoria mientras la página permanece abierta
  let memoriaLectura = {};

  /* ---------- Utilidades ---------- */

  // Pide a KaTeX que convierta las fórmulas del elemento visible.
  function tipografiar(elemento) {
    if (!elemento) return;
    if (typeof window.renderMathInElement === "function") {
      try {
        window.renderMathInElement(elemento, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true }
          ],
          throwOnError: false
        });
      } catch (e) {}
    }
  }

  function leerProgreso() {
    return memoriaLectura;
  }
  function guardarProgreso(datos) {
    memoriaLectura = datos || {};
  }

  /* ---------- Lectura interactiva por tarjetas de subtemas ---------- */

  function iconoParaSubtema(titulo, idx) {
    const t = titulo.toLowerCase();
    if (t.indexOf("errores") !== -1) return "fa-triangle-exclamation";
    if (t.indexOf("resumen") !== -1) return "fa-list-check";
    if (t.indexOf("reflexión") !== -1 || t.indexOf("reflexion") !== -1) return "fa-lightbulb";
    if (t.indexOf("fuentes") !== -1) return "fa-book-bookmark";
    const iconos = ["fa-book-open", "fa-sliders", "fa-scale-balanced", "fa-diagram-project"];
    return iconos[idx % iconos.length] || "fa-book-open";
  }

  function etiquetaCortaSubtema(titulo, idx) {
    const partes = titulo.split("·");
    if (partes.length > 1) {
      return partes[0].trim();
    }
    const t = titulo.toLowerCase();
    if (t.indexOf("errores") !== -1) return "Repaso";
    if (t.indexOf("resumen") !== -1) return "Síntesis";
    if (t.indexOf("reflexión") !== -1 || t.indexOf("reflexion") !== -1) return "Reflexión";
    if (t.indexOf("fuentes") !== -1) return "Fuentes";
    return "Subtema " + (idx + 1);
  }

  function tituloLimpioSubtema(titulo) {
    const partes = titulo.split("·");
    return partes.length > 1 ? partes.slice(1).join("·").trim() : titulo.trim();
  }

  function extraerSubtemas(htmlCrudo, idTema) {
    const temp = document.createElement("div");
    temp.innerHTML = htmlCrudo;
    const bloques = temp.querySelectorAll("details.lectura-seccion");
    const lista = [];

    bloques.forEach(function (det, idx) {
      const summary = det.querySelector("summary");
      const cuerpo = det.querySelector(".lectura-cuerpo");
      const input = det.querySelector("input[data-leer]");
      const tituloCompleto = summary ? summary.textContent.trim() : ("Subtema " + (idx + 1));
      const clave = input ? input.getAttribute("data-leer") : (idTema + "-" + (idx + 1));
      const cuerpoHtml = cuerpo ? cuerpo.innerHTML : "";

      let resumen = "";
      if (cuerpo) {
        const primerParrafo = cuerpo.querySelector("p, li");
        const textoBase = primerParrafo ? primerParrafo.textContent : cuerpo.textContent;
        resumen = textoBase.replace(/\s+/g, " ").trim();
        if (resumen.length > 115) {
          resumen = resumen.slice(0, 112).trim() + "…";
        }
      }

      lista.push({
        indice: idx,
        clave: clave,
        etiqueta: etiquetaCortaSubtema(tituloCompleto, idx),
        titulo: tituloLimpioSubtema(tituloCompleto),
        tituloCompleto: tituloCompleto,
        icono: iconoParaSubtema(tituloCompleto, idx),
        resumen: resumen,
        cuerpoHtml: cuerpoHtml
      });
    });

    return lista;
  }

  function dibujarLecturas() {
    document.querySelectorAll("[data-lectura]").forEach(function (contenedor) {
      const idTema = contenedor.dataset.lectura;
      const lectura = (typeof LECTURAS_BLOQUE1 !== "undefined") && LECTURAS_BLOQUE1[idTema];
      if (!lectura) return;

      const subtemas = extraerSubtemas(lectura.html, idTema);
      let indiceActual = null; // null = vista de tarjetas; número = subtema abierto

      function contarLeidos() {
        const prog = leerProgreso();
        return subtemas.filter(function (s) { return !!prog[s.clave]; }).length;
      }

      function renderizarVistaTarjetas() {
        indiceActual = null;
        const prog = leerProgreso();
        const leidos = contarLeidos();

        let tarjetasHtml = subtemas.map(function (s) {
          const estaLeido = !!prog[s.clave];
          return (
            '<button type="button" class="tarjeta-subtema' + (estaLeido ? " leida" : "") + '" data-abrir-subtema="' + s.indice + '">' +
              '<div>' +
                '<div class="tarjeta-subtema-top">' +
                  '<span class="tarjeta-subtema-badge"><i class="fa-solid ' + s.icono + '"></i> ' + s.etiqueta + '</span>' +
                  '<span class="tarjeta-subtema-estado">' +
                    (estaLeido
                      ? '<i class="fa-solid fa-circle-check"></i> Leída'
                      : '<i class="fa-regular fa-circle"></i> Pendiente') +
                  '</span>' +
                '</div>' +
                '<h3 class="tarjeta-subtema-titulo">' + s.titulo + '</h3>' +
                '<p class="tarjeta-subtema-resumen">' + s.resumen + '</p>' +
              '</div>' +
              '<span class="tarjeta-subtema-cta">' +
                (estaLeido ? 'Repasar lectura' : 'Leer subtema') +
                ' <i class="fa-solid fa-arrow-right"></i>' +
              '</span>' +
            '</button>'
          );
        }).join("");

        contenedor.innerHTML =
          '<div class="lectura">' +
            '<div class="lectura-cabecera">' +
              '<p class="lectura-instruccion"><i class="fa-solid fa-layer-group me-1 text-secondary"></i> Selecciona una tarjeta para abrir la lectura del subtema:</p>' +
              '<span class="lectura-progreso small">' + leidos + ' de ' + subtemas.length + ' subtemas leídos</span>' +
            '</div>' +
            '<div class="subtemas-grid">' +
              tarjetasHtml +
            '</div>' +
          '</div>';

        tipografiar(contenedor);
      }

      function renderizarVisorSubtema(idx) {
        const s = subtemas[idx];
        if (!s) return;
        indiceActual = idx;
        const prog = leerProgreso();
        const estaLeido = !!prog[s.clave];
        const leidos = contarLeidos();

        const tieneAnterior = idx > 0;
        const tieneSiguiente = idx < subtemas.length - 1;

        contenedor.innerHTML =
          '<div class="lectura">' +
            '<div class="lectura-cabecera">' +
              '<button type="button" class="btn-volver-subtemas" data-volver-subtemas="1">' +
                '<i class="fa-solid fa-arrow-left"></i> Volver a los subtemas' +
              '</button>' +
              '<span class="lectura-progreso small" data-progreso-visor="1">' + leidos + ' de ' + subtemas.length + ' subtemas leídos</span>' +
            '</div>' +
            '<article class="visor-subtema">' +
              '<div class="visor-subtema-barra">' +
                '<span class="visor-subtema-contador">' + s.etiqueta + ' · (' + (idx + 1) + ' de ' + subtemas.length + ')</span>' +
                '<label class="lectura-leida">' +
                  '<input type="checkbox" data-leer="' + s.clave + '"' + (estaLeido ? " checked" : "") + '> Marcar como leída' +
                '</label>' +
              '</div>' +
              '<h3 class="visor-subtema-titulo">' + s.tituloCompleto + '</h3>' +
              '<div class="lectura-cuerpo">' +
                s.cuerpoHtml +
              '</div>' +
              '<div class="visor-subtema-pie">' +
                '<button type="button" class="btn-nav-subtema" data-ir-subtema="' + (idx - 1) + '"' + (!tieneAnterior ? " disabled" : "") + '>' +
                  '<i class="fa-solid fa-chevron-left"></i> Subtema anterior' +
                '</button>' +
                '<button type="button" class="btn-nav-subtema" data-volver-subtemas="1">' +
                  '<i class="fa-solid fa-grip"></i> Ver tarjetas' +
                '</button>' +
                '<button type="button" class="btn-nav-subtema" data-ir-subtema="' + (idx + 1) + '"' + (!tieneSiguiente ? " disabled" : "") + '>' +
                  'Siguiente subtema <i class="fa-solid fa-chevron-right"></i>' +
                '</button>' +
              '</div>' +
            '</article>' +
          '</div>';

        const casilla = contenedor.querySelector("input[data-leer]");
        if (casilla) {
          casilla.addEventListener("change", function () {
            const datos = leerProgreso();
            datos[s.clave] = casilla.checked;
            guardarProgreso(datos);
            const indicador = contenedor.querySelector("[data-progreso-visor]");
            if (indicador) {
              indicador.textContent = contarLeidos() + " de " + subtemas.length + " subtemas leídos";
            }
          });
        }

        tipografiar(contenedor);
      }

      contenedor.addEventListener("click", function (evento) {
        const btnAbrir = evento.target.closest("[data-abrir-subtema]");
        if (btnAbrir) {
          const idx = Number(btnAbrir.getAttribute("data-abrir-subtema"));
          renderizarVisorSubtema(idx);
          contenedor.scrollIntoView({ behavior: "smooth", block: "nearest" });
          return;
        }

        const btnVolver = evento.target.closest("[data-volver-subtemas]");
        if (btnVolver) {
          renderizarVistaTarjetas();
          contenedor.scrollIntoView({ behavior: "smooth", block: "nearest" });
          return;
        }

        const btnIr = evento.target.closest("[data-ir-subtema]");
        if (btnIr && !btnIr.disabled) {
          const destino = Number(btnIr.getAttribute("data-ir-subtema"));
          if (destino >= 0 && destino < subtemas.length) {
            renderizarVisorSubtema(destino);
            contenedor.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }
        }
      });

      contenedor._mostrarTarjetasSubtemas = function () {
        if (indiceActual !== null) {
          renderizarVistaTarjetas();
        }
      };

      renderizarVistaTarjetas();
    });
  }

  /* ---------- Mostrar un solo tema/sección a la vez ---------- */

  function activarSeccion(idSeccion, hacerScroll) {
    if (SECCIONES_VALIDAS.indexOf(idSeccion) === -1) return;

    document.querySelectorAll(".seccion[data-vista-seccion]").forEach(function (sec) {
      sec.hidden = sec.id !== idSeccion;
    });

    document.querySelectorAll(".grupo-enlace, .indice-enlace").forEach(function (enlace) {
      const objetivo = enlace.getAttribute("data-seccion") || (enlace.getAttribute("href") || "").slice(1);
      enlace.classList.toggle("activo", objetivo === idSeccion);
    });

    document.querySelectorAll(".chips-banner .chip[data-seccion]").forEach(function (chip) {
      chip.classList.toggle("activo", chip.getAttribute("data-seccion") === idSeccion);
    });

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

    // Si el usuario selecciona "Aprender", mostramos las tarjetas de subtemas
    if (nombre === "aprender") {
      const contLectura = document.querySelector('[data-lectura="' + tema + '"]');
      if (contLectura && typeof contLectura._mostrarTarjetasSubtemas === "function") {
        contLectura._mostrarTarjetasSubtemas();
      }
    }

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

    if (hash === "tema-3-tareas") {
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
      const enlaceSeccion = evento.target.closest("[data-seccion]");
      if (enlaceSeccion) {
        evento.preventDefault();
        const destino = enlaceSeccion.getAttribute("data-seccion");
        activarSeccion(destino, true);
        history.replaceState(null, "", "#" + destino);
        return;
      }

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

      barra.addEventListener("click", function (evento) {
        const boton = evento.target.closest(".tab-btn");
        if (!boton) return;
        activarPestana(tema, boton.dataset.tab, false);
        history.replaceState(null, "", "#tema-" + tema + "-" + boton.dataset.tab);
      });

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

  function iniciar() {
    dibujarLecturas();
    configurarPestanas();
    configurarNavegacionTemas();
    if (location.hash) {
      atenderHash(false);
    } else {
      activarSeccion("tema-1", false);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
  window.addEventListener("load", function () {
    tipografiar(document.body);
  });
  window.addEventListener("hashchange", function () {
    atenderHash(true);
  });

})();
