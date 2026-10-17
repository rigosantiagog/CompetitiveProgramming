/* ==========================================================
   Motor de ejercicios con retroalimentación
   Lee EJERCICIOS_BLOQUE1 (ejercicios-bloque1.js), dibuja los
   ejercicios dentro de cada tema y actualiza el avance de la
   barra lateral.
   ========================================================== */

(function () {

  const barra = document.getElementById("avance-ejercicios-barra");
  const textoAvance = document.getElementById("avance-ejercicios-texto");

  const total = EJERCICIOS_BLOQUE1.length;
  const resultados = {};   // id -> true (correcto) / false (incorrecto)
  const NOMBRES_PARTE = {
    A: "Parte A · Ejercicios guiados (en parejas)",
    B: "Parte B · Ejercicios independientes"
  };

  /* Convierte el texto del alumno a número (acepta coma decimal). */
  function aNumero(texto) {
    const limpio = String(texto || "").trim().replace(",", ".");
    if (limpio === "") return NaN;
    return Number(limpio);
  }

  /* Identificador único para cada ejercicio. */
  function idDe(ej) {
    return "ej-" + ej.clase + "-" + ej.parte + "-" + ej.n;
  }

  /* Controles de respuesta según el tipo de ejercicio. */
  function controlesDe(ej, id) {
    if (ej.tipo === "num") {
      return '<input type="text" inputmode="decimal" class="form-control mb-2 campo" id="' + id + '-in" placeholder="Escribe tu respuesta">';
    }
    if (ej.tipo === "multi") {
      return ej.campos.map(function (c, i) {
        return '<label class="form-label fw-semibold mb-1" for="' + id + '-' + i + '">' + c.etiqueta + '</label>' +
               '<input type="text" inputmode="decimal" class="form-control mb-2 campo" id="' + id + '-' + i + '" placeholder="Escribe tu respuesta">';
      }).join("");
    }
    return ej.opciones.map(function (op, i) {
      return '<div class="form-check">' +
               '<input class="form-check-input" type="radio" name="' + id + '" id="' + id + '-op' + i + '" value="' + i + '">' +
               '<label class="form-check-label" for="' + id + '-op' + i + '">' + op + '</label>' +
             '</div>';
    }).join("");
  }

  /* Texto de la respuesta correcta para mostrarla si el alumno se equivoca. */
  function respuestaCorrectaTexto(ej) {
    if (ej.tipo === "num") return String(ej.valor);
    if (ej.tipo === "multi") {
      return ej.campos.map(function (c) { return c.etiqueta + ": " + c.valor; }).join(", ");
    }
    return ej.opciones[ej.correcta];
  }

  /* Revisa la respuesta. Devuelve true, false o null (sin respuesta). */
  function calificar(ej, id) {
    if (ej.tipo === "num") {
      const v = aNumero(document.getElementById(id + "-in").value);
      if (isNaN(v)) return null;
      return Math.abs(v - ej.valor) < 1e-6;
    }
    if (ej.tipo === "multi") {
      const valores = ej.campos.map(function (c, i) {
        return aNumero(document.getElementById(id + "-" + i).value);
      });
      if (valores.some(isNaN)) return null;
      return ej.campos.every(function (c, i) { return Math.abs(valores[i] - c.valor) < 1e-6; });
    }
    const sel = document.querySelector('input[name="' + id + '"]:checked');
    if (!sel) return null;
    return Number(sel.value) === ej.correcta;
  }

  /* Mensaje de retroalimentación debajo de la tarjeta. */
  function mostrarRetroalimentacion(ej, id, ok) {
    const caja = document.getElementById(id + "-fb");
    if (ok === null) {
      caja.className = "retroalimentacion p-3 rounded bg-warning-subtle border border-warning";
      caja.innerHTML = "Escribe o elige una respuesta antes de comprobar.";
      return;
    }
    if (ok) {
      caja.className = "retroalimentacion p-3 rounded bg-success-subtle border border-success";
      caja.innerHTML = "<strong><i class='fa-solid fa-circle-check'></i> Correcto.</strong> " + ej.explicacion;
    } else {
      caja.className = "retroalimentacion p-3 rounded bg-danger-subtle border border-danger";
      caja.innerHTML = "<strong><i class='fa-solid fa-circle-xmark'></i> Revisa de nuevo.</strong> " +
                       "La respuesta correcta es: <strong>" + respuestaCorrectaTexto(ej) + "</strong>. " +
                       ej.explicacion;
    }
    tipografiar(caja);
  }

  /* Pide a MathJax que convierta las fórmulas LaTeX dentro del elemento. */
  function tipografiar(elemento) {
    if (window.MathJax && MathJax.startup && MathJax.typesetPromise) {
      MathJax.startup.promise
        .then(function () { return MathJax.typesetPromise([elemento]); })
        .catch(function () {});
    }
  }

  /* Actualiza la barra lateral de avance. */
  function actualizarAvance() {
    const respondidos = Object.keys(resultados).length;
    const porcentaje = Math.round((respondidos / total) * 100);
    barra.style.width = porcentaje + "%";
    barra.parentElement.setAttribute("aria-valuenow", porcentaje);
    textoAvance.textContent = respondidos + " de " + total;
  }

  /* Dibuja los ejercicios de un tema dentro de su contenedor. */
  function dibujarTema(tema, contenedor) {
    let html = "";
    let parteActual = null;
    EJERCICIOS_BLOQUE1.filter(function (e) { return e.clase === tema; }).forEach(function (ej) {
      if (ej.parte !== parteActual) {
        parteActual = ej.parte;
        html += '<p class="subtitulo-parte">' + NOMBRES_PARTE[ej.parte] + '</p>';
      }
      const id = idDe(ej);
      html += '' +
        '<div class="tarjeta-pregunta" id="' + id + '">' +
          '<p class="mb-3"><span class="numero">' + ej.n + '</span>' + ej.enunciado + '</p>' +
          controlesDe(ej, id) +
          '<button type="button" class="btn btn-sm btn-tide mt-3 btn-comprobar" data-id="' + id + '">' +
            '<i class="fa-solid fa-check"></i> Comprobar</button>' +
          '<div id="' + id + '-fb"></div>' +
        '</div>';
    });
    contenedor.innerHTML = html;
    tipografiar(contenedor);
  }

  /* Al pulsar "Comprobar" se califica ese ejercicio. */
  document.addEventListener("click", function (evento) {
    const boton = evento.target.closest(".btn-comprobar");
    if (!boton) return;

    const id = boton.getAttribute("data-id");
    const ej = EJERCICIOS_BLOQUE1.find(function (e) { return idDe(e) === id; });
    const ok = calificar(ej, id);

    if (ok !== null) {
      resultados[id] = ok;
    }
    mostrarRetroalimentacion(ej, id, ok);
    actualizarAvance();
  });

  document.querySelectorAll("[data-ejercicios]").forEach(function (contenedor) {
    dibujarTema(Number(contenedor.dataset.ejercicios), contenedor);
  });
  actualizarAvance();

})();
