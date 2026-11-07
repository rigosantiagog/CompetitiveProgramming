/* ==========================================================
   Motor de práctica del Bloque 2 · Primeros pasos en C++
   Basado en el motor del Bloque 1 (quiz.js), con cuatro tipos:
   - "texto": una respuesta que se compara con la clave
     (por ejemplo, la salida de un programa).
   - "multi-texto": varias respuestas, una por recuadro.
   - "autoevaluacion": el alumno escribe su corrección, abre la
     solución y marca si la tuvo bien.
   - "programa": problema para resolver en VS Code con CPH; el
     alumno marca si su programa pasó todos los casos de prueba.
   Las salidas se comparan sin importar mayúsculas ni espacios de
   más; si hay varias líneas, se pueden escribir separadas por un
   espacio. En las respuestas de código se ignoran los espacios.
   El avance vive en memoria: se reinicia al recargar la página.
   ========================================================== */

(function () {

  const barra = document.getElementById("avance-ejercicios-barra");
  const textoAvance = document.getElementById("avance-ejercicios-texto");

  const total = EJERCICIOS_BLOQUE2.length;
  const resultados = {};   // id -> true (correcto) / false (incorrecto)

  function tipografiar(elemento) {
    if (!elemento) return;
    if (typeof window.renderMathInElement === "function") {
      try {
        window.renderMathInElement(elemento, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }
          ],
          throwOnError: false
        });
      } catch (e) {}
    }
  }

  /* Salidas de programa: sin mayúsculas, sin comillas y con los
     espacios y saltos de línea reducidos a un solo espacio. */
  function normalizarSalida(cadena) {
    return String(cadena || "")
      .toLowerCase()
      .replace(/−/g, "-")
      .replace(/[`"'«»“”]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  /* Líneas de código: se ignoran los espacios, el punto y coma final
     y un posible "int variable =" al inicio. */
  function normalizarCodigo(cadena) {
    let s = String(cadena || "")
      .toLowerCase()
      .replace(/−/g, "-")
      .replace(/`/g, "")
      .replace(/\s+/g, "");
    s = s.replace(/^int[a-z_][a-z0-9_]*=/, "");
    s = s.replace(/;+$/, "");
    return s;
  }

  function coincide(valor, aceptadas, esCodigo) {
    const norm = esCodigo ? normalizarCodigo : normalizarSalida;
    const usuario = norm(valor);
    if (usuario === "") return false;
    return aceptadas.some(function (a) { return norm(a) === usuario; });
  }

  function idDe(ej) {
    return "b2-ej-" + ej.clase + "-" + ej.n;
  }

  /* Controles de respuesta según el tipo de ejercicio. */
  function controlesDe(ej, id) {
    if (ej.tipo === "texto") {
      const inputId = id + "-in";
      const ayuda = ej.codigo
        ? "Escribe la línea de código"
        : "Escribe la salida exacta (si son varias líneas, sepáralas con un espacio)";
      return (
        '<label class="form-label visually-hidden" for="' + inputId + '">Respuesta del ejercicio ' + ej.n + '</label>' +
        '<input type="text" class="form-control mb-2 campo' + (ej.codigo ? ' campo-codigo' : '') + '" id="' + inputId + '" placeholder="' + ayuda + '" autocomplete="off" spellcheck="false">'
      );
    }
    if (ej.tipo === "multi-texto") {
      return (
        '<div class="row g-2 mb-1">' +
        ej.campos.map(function (c, i) {
          const inputId = id + "-" + i;
          return (
            '<div class="col-12 col-md-6">' +
              '<label class="form-label fw-semibold mb-1" for="' + inputId + '">' + c.etiqueta + '</label>' +
              '<input type="text" class="form-control mb-1 campo" id="' + inputId + '" placeholder="Salida exacta" autocomplete="off" spellcheck="false">' +
              '<div class="small estado-recuadro" id="' + inputId + '-fb" aria-live="polite"></div>' +
            '</div>'
          );
        }).join("") +
        '</div>'
      );
    }
    if (ej.tipo === "autoevaluacion") {
      const inputId = id + "-in";
      return (
        '<label class="form-label small text-secondary" for="' + inputId + '">Escribe aquí tu corrección y después compárala con la solución.</label>' +
        '<textarea class="form-control mb-2 campo-codigo" id="' + inputId + '" rows="3" spellcheck="false" placeholder="Tu respuesta"></textarea>'
      );
    }
    if (ej.tipo === "programa") {
      return (
        '<p class="small texto-suave mb-2"><i class="fa-solid fa-laptop-code me-1" aria-hidden="true"></i> ' +
        'Resuélvelo en VS Code con la plantilla del curso y prueba los casos en CPH. Cuando termines, marca cómo te fue.</p>'
      );
    }
    return "";
  }

  /* Botones de cada tarjeta según el tipo. */
  function accionesDe(ej, id) {
    const solId = id + "-sol";
    const verSolucion =
      '<button type="button" class="btn btn-sm btn-ver-solucion" data-toggle-solucion="' + solId + '" aria-expanded="false" aria-controls="' + solId + '">' +
        '<i class="fa-regular fa-lightbulb" aria-hidden="true"></i> Ver solución' +
      '</button>';

    if (ej.tipo === "texto" || ej.tipo === "multi-texto") {
      return (
        '<button type="button" class="btn btn-sm btn-tide btn-comprobar" data-id="' + id + '">' +
          '<i class="fa-solid fa-check" aria-hidden="true"></i> Comprobar' +
        '</button>' + verSolucion
      );
    }
    const textoBien = ej.tipo === "programa" ? "Pasó todos los casos" : "Lo tuve bien";
    const textoMal = ej.tipo === "programa" ? "Todavía no" : "Me equivoqué";
    return (
      verSolucion +
      '<button type="button" class="btn btn-sm btn-tide btn-autoevaluar" data-id="' + id + '" data-valor="1">' +
        '<i class="fa-solid fa-circle-check" aria-hidden="true"></i> ' + textoBien +
      '</button>' +
      '<button type="button" class="btn btn-sm btn-outline-secondary btn-autoevaluar" data-id="' + id + '" data-valor="0">' +
        '<i class="fa-solid fa-rotate-left" aria-hidden="true"></i> ' + textoMal +
      '</button>'
    );
  }

  function calificar(ej, id) {
    if (ej.tipo === "texto") {
      const input = document.getElementById(id + "-in");
      const ok = coincide(input ? input.value : "", ej.aceptadas, !!ej.codigo);
      if (input) {
        input.classList.remove("is-valid", "is-invalid");
        input.classList.add(ok ? "is-valid" : "is-invalid");
      }
      return ok;
    }
    if (ej.tipo === "multi-texto") {
      return ej.campos.map(function (c, i) {
        const inputId = id + "-" + i;
        const input = document.getElementById(inputId);
        const fb = document.getElementById(inputId + "-fb");
        const ok = coincide(input ? input.value : "", c.aceptadas, false);
        if (input) {
          input.classList.remove("is-valid", "is-invalid");
          input.classList.add(ok ? "is-valid" : "is-invalid");
        }
        if (fb) {
          fb.className = "small mt-1 fw-semibold " + (ok ? "text-success" : "text-danger");
          fb.innerHTML = ok
            ? '<i class="fa-solid fa-circle-check" aria-hidden="true"></i> Correcto'
            : '<i class="fa-solid fa-circle-xmark" aria-hidden="true"></i> Incorrecto';
        }
        return ok;
      }).every(Boolean);
    }
    return false;
  }

  function mostrarRetroalimentacion(ej, id, ok) {
    const caja = document.getElementById(id + "-fb");
    if (!caja) return;
    let textoOk = "Correcto";
    let textoMal = "Incorrecto. Revisa el programa línea por línea, como en una tabla de seguimiento.";
    if (ej.tipo === "autoevaluacion") {
      textoOk = "Registrado como correcto.";
      textoMal = "Registrado. Compara tu respuesta con la solución y vuelve a intentarlo.";
    }
    if (ej.tipo === "programa") {
      textoOk = "Registrado: tu programa pasó todos los casos.";
      textoMal = "Registrado. Revisa qué caso falla en CPH y compáralo con la idea de solución.";
    }
    caja.className = "retroalimentacion p-3 rounded " + (ok
      ? "bg-success-subtle border border-success text-success-emphasis"
      : "bg-danger-subtle border border-danger text-danger-emphasis");
    caja.innerHTML = ok
      ? "<strong><i class='fa-solid fa-circle-check'></i> " + textoOk + "</strong>"
      : "<strong><i class='fa-solid fa-circle-xmark'></i></strong> " + textoMal;
  }

  function actualizarAvance() {
    const respondidos = Object.keys(resultados).length;
    const porcentaje = Math.round((respondidos / total) * 100);
    if (barra) {
      barra.style.width = porcentaje + "%";
      if (barra.parentElement) barra.parentElement.setAttribute("aria-valuenow", porcentaje);
    }
    if (textoAvance) textoAvance.textContent = respondidos + " de " + total;

    [1, 2, 3].forEach(function (numTema) {
      const contador = document.getElementById("contador-aciertos-b2-tema" + numTema);
      if (!contador) return;
      const ejs = EJERCICIOS_BLOQUE2.filter(function (e) { return e.clase === numTema; });
      const aciertos = ejs.filter(function (e) { return resultados[idDe(e)] === true; }).length;
      contador.textContent = "Aciertos: " + aciertos + " de " + ejs.length;
    });
  }

  function dibujarTema(tema, contenedor) {
    const ejs = EJERCICIOS_BLOQUE2.filter(function (e) { return e.clase === tema; });
    const intro = (typeof INTRO_PRACTICA_BLOQUE2 !== "undefined" && INTRO_PRACTICA_BLOQUE2[tema]) || "";

    let html =
      '<div class="aviso-memoria mb-3" role="note">' +
        '<i class="fa-solid fa-circle-info me-2" aria-hidden="true"></i>' +
        '<span>Tu avance no se guarda. Si recargas la página, los resultados se reinician.</span>' +
      '</div>' +
      '<div class="cabecera-practica-tema1 mb-3">' +
        '<div class="texto-suave">' + intro + '</div>' +
        '<div class="contador-aciertos-badge" id="contador-aciertos-b2-tema' + tema + '" aria-live="polite">Aciertos: 0 de ' + ejs.length + '</div>' +
      '</div>';

    let grupoActual = null;
    ejs.forEach(function (ej) {
      if (ej.grupo !== grupoActual) {
        grupoActual = ej.grupo;
        html += '<h4 class="subtitulo-grupo-practica">' + ej.grupo + '</h4>';
        if (ej.introGrupo) html += '<div class="texto-suave mb-3">' + ej.introGrupo + '</div>';
      }
      const id = idDe(ej);
      const solId = id + "-sol";
      html +=
        '<div class="tarjeta-pregunta tarjeta-ejercicio-b2" id="' + id + '" data-tipo="' + ej.tipo + '">' +
          '<p class="mb-2"><span class="numero">' + ej.n + '</span><strong>' + ej.titulo + '</strong></p>' +
          '<div class="enunciado-ejercicio mb-3">' + ej.enunciado + '</div>' +
          controlesDe(ej, id) +
          '<div class="acciones-ejercicio d-flex flex-wrap gap-2 align-items-center mt-2">' + accionesDe(ej, id) + '</div>' +
          '<div id="' + id + '-fb" aria-live="polite"></div>' +
          '<div id="' + solId + '" class="solucion-desplegable mt-3" hidden>' +
            '<div class="solucion-cabecera"><i class="fa-solid fa-list-ol me-1" aria-hidden="true"></i> Solución</div>' +
            '<div class="solucion-cuerpo">' + ej.solucion + '</div>' +
          '</div>' +
        '</div>';
    });

    contenedor.innerHTML = html;
    tipografiar(contenedor);
  }

  document.addEventListener("click", function (evento) {
    const btnSolucion = evento.target.closest("[data-toggle-solucion]");
    if (btnSolucion) {
      const panel = document.getElementById(btnSolucion.getAttribute("data-toggle-solucion"));
      if (panel) {
        const abrir = panel.hidden;
        panel.hidden = !abrir;
        btnSolucion.setAttribute("aria-expanded", String(abrir));
        btnSolucion.classList.toggle("activa", abrir);
      }
      return;
    }

    const btnAuto = evento.target.closest(".btn-autoevaluar");
    if (btnAuto) {
      const id = btnAuto.getAttribute("data-id");
      const ej = EJERCICIOS_BLOQUE2.find(function (e) { return idDe(e) === id; });
      if (!ej) return;
      const ok = btnAuto.getAttribute("data-valor") === "1";
      resultados[id] = ok;
      mostrarRetroalimentacion(ej, id, ok);
      actualizarAvance();
      return;
    }

    const boton = evento.target.closest(".btn-comprobar");
    if (!boton) return;
    const id = boton.getAttribute("data-id");
    const ej = EJERCICIOS_BLOQUE2.find(function (e) { return idDe(e) === id; });
    if (!ej) return;
    const ok = calificar(ej, id);
    resultados[id] = ok;
    mostrarRetroalimentacion(ej, id, ok);
    actualizarAvance();
  });

  /* Comprobar con Enter en los campos de una sola línea */
  document.addEventListener("keydown", function (evento) {
    if (evento.key !== "Enter") return;
    const input = evento.target.closest(".tarjeta-pregunta input.campo");
    if (!input) return;
    const btn = input.closest(".tarjeta-pregunta").querySelector(".btn-comprobar");
    if (btn) {
      evento.preventDefault();
      btn.click();
    }
  });

  function iniciar() {
    document.querySelectorAll("[data-ejercicios]").forEach(function (contenedor) {
      dibujarTema(Number(contenedor.dataset.ejercicios), contenedor);
    });
    actualizarAvance();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }

})();
