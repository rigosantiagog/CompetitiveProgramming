/* ==========================================================
   Motor de ejercicios con retroalimentación (Sección A · Práctica)
   - Tema 1: 14 ejercicios con respuesta abierta, normalización,
     botones de símbolos lógicos (¬, ∧, ∨), botón "Ver solución"
     (mostrar/ocultar) y contador "Aciertos: X de 14".
   - No guarda nada en almacenamiento del navegador ni servidor.
   ========================================================== */

(function () {

  const barra = document.getElementById("avance-ejercicios-barra");
  const textoAvance = document.getElementById("avance-ejercicios-texto");

  const total = EJERCICIOS_BLOQUE1.length;
  const resultados = {};   // id -> true (correcto) / false (incorrecto), solo en memoria
  const NOMBRES_PARTE = {
    A: "Parte A · Ejercicios guiados (en parejas)",
    B: "Parte B · Ejercicios independientes"
  };

  /* Renderiza las fórmulas con KaTeX ($...$ en línea y $$...$$ en bloque). */
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

  /* Convierte el texto del alumno a número (para temas 2 y 3). */
  function aNumero(texto) {
    const limpio = String(texto || "").trim().replace(",", ".");
    if (limpio === "") return NaN;
    return Number(limpio);
  }

  /* Normaliza respuestas de texto/álgebra/lógica (Tema 1):
     - Ignora mayúsculas/minúsculas y espacios.
     - Elimina el prefijo "x=" (por ejemplo, "x = 5" -> "5").
     - En lógica acepta "y", "o", "no" en lugar de ∧, ∨, ¬. */
  function normalizarTexto(cadena, esLogica) {
    let s = String(cadena || "")
      .toLowerCase()
      .replace(/−/g, "-")
      .trim();

    if (esLogica) {
      s = s
        .replace(/\\lnot\b|\\neg\b/g, "¬")
        .replace(/\\land\b/g, "∧")
        .replace(/\\lor\b/g, "∨")
        .replace(/\bno\b/g, "¬")
        .replace(/\by\b/g, "∧")
        .replace(/\bo\b/g, "∨")
        .replace(/[~!]/g, "¬")
        .replace(/&&|&/g, "∧")
        .replace(/\|\||\|/g, "∨")
        .replace(/\s+/g, "");
      if (s === "falso") return "f";
      if (s === "verdadero") return "v";
      return s;
    }

    s = s.replace(/\s+/g, "");
    s = s.replace(/^x=/, "");
    return s;
  }

  function coincideRespuesta(valorUsuario, listaAceptadas, esLogica) {
    const normUsuario = normalizarTexto(valorUsuario, esLogica);
    if (normUsuario === "") return null;
    return listaAceptadas.some(function (ac) {
      return normalizarTexto(ac, esLogica) === normUsuario;
    });
  }

  /* Identificador único para cada ejercicio. */
  function idDe(ej) {
    return "ej-" + ej.clase + "-" + (ej.parte || "A") + "-" + ej.n;
  }

  /* Botones pequeños para insertar ¬, ∧ y ∨ en un campo de texto. */
  function barraSimbolosDe(inputId, etiquetaCampo) {
    return (
      '<div class="barra-simbolos mb-2" role="group" aria-label="Insertar símbolos lógicos en ' + etiquetaCampo + '">' +
        '<span class="barra-simbolos-etiqueta small text-secondary me-1">Insertar símbolo:</span>' +
        '<button type="button" class="btn btn-sm btn-simbolo" data-insertar-simbolo="¬" data-target-input="' + inputId + '" aria-label="Insertar negación ¬ en ' + etiquetaCampo + '">¬</button>' +
        '<button type="button" class="btn btn-sm btn-simbolo" data-insertar-simbolo="∧" data-target-input="' + inputId + '" aria-label="Insertar conjunción ∧ en ' + etiquetaCampo + '">∧</button>' +
        '<button type="button" class="btn btn-sm btn-simbolo" data-insertar-simbolo="∨" data-target-input="' + inputId + '" aria-label="Insertar disyunción ∨ en ' + etiquetaCampo + '">∨</button>' +
      '</div>'
    );
  }

  /* Controles de respuesta según el tipo de ejercicio. */
  function controlesDe(ej, id) {
    if (ej.tipo === "texto") {
      const inputId = id + "-in";
      const labelTexto = "Respuesta del ejercicio " + ej.n;
      return (
        '<div class="campo-respuesta-bloque">' +
          '<label class="form-label visually-hidden" for="' + inputId + '">' + labelTexto + '</label>' +
          (ej.botonesSimbolos ? barraSimbolosDe(inputId, "ejercicio " + ej.n) : "") +
          '<input type="text" class="form-control mb-2 campo" id="' + inputId + '" placeholder="Escribe tu respuesta final" aria-label="' + labelTexto + '" autocomplete="off">' +
        '</div>'
      );
    }
    if (ej.tipo === "multi-texto") {
      return (
        '<div class="row g-2 mb-1">' +
        ej.campos.map(function (c, i) {
          const inputId = id + "-" + i;
          return (
            '<div class="col-12 col-md-4">' +
              '<label class="form-label fw-semibold mb-1" for="' + inputId + '">' + c.etiqueta + '</label>' +
              (ej.botonesSimbolos ? barraSimbolosDe(inputId, c.etiqueta) : "") +
              '<input type="text" class="form-control mb-2 campo" id="' + inputId + '" placeholder="Respuesta (' + c.etiqueta + ')" aria-label="Respuesta para ' + c.etiqueta + '" autocomplete="off">' +
            '</div>'
          );
        }).join("") +
        '</div>'
      );
    }
    if (ej.tipo === "num") {
      return (
        '<label class="form-label visually-hidden" for="' + id + '-in">Respuesta del ejercicio ' + ej.n + '</label>' +
        '<input type="text" inputmode="decimal" class="form-control mb-2 campo" id="' + id + '-in" placeholder="Escribe tu respuesta" aria-label="Respuesta del ejercicio ' + ej.n + '">'
      );
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

  /* Texto de la respuesta correcta para Temas 2 y 3. */
  function respuestaCorrectaTexto(ej) {
    if (ej.tipo === "num") return String(ej.valor);
    if (ej.tipo === "multi") {
      return ej.campos.map(function (c) { return c.etiqueta + ": " + c.valor; }).join(", ");
    }
    if (ej.opciones) return ej.opciones[ej.correcta];
    return "";
  }

  /* Revisa la respuesta. Devuelve true, false o null (sin respuesta). */
  function calificar(ej, id) {
    if (ej.tipo === "texto") {
      const val = document.getElementById(id + "-in").value;
      if (String(val || "").trim() === "") return false;
      return coincideRespuesta(val, ej.aceptadas, !!ej.esLogica);
    }
    if (ej.tipo === "multi-texto") {
      const respuestas = ej.campos.map(function (c, i) {
        return document.getElementById(id + "-" + i).value;
      });
      if (respuestas.some(function (r) { return String(r || "").trim() === ""; })) {
        return false;
      }
      return ej.campos.every(function (c, i) {
        return coincideRespuesta(respuestas[i], c.aceptadas, !!ej.esLogica) === true;
      });
    }
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
    if (ej.clase === 1) {
      if (ok) {
        caja.className = "retroalimentacion p-3 rounded bg-success-subtle border border-success text-success-emphasis";
        caja.innerHTML = "<strong><i class='fa-solid fa-circle-check'></i> Correcto</strong>";
      } else {
        caja.className = "retroalimentacion p-3 rounded bg-danger-subtle border border-danger text-danger-emphasis";
        caja.innerHTML = "<strong><i class='fa-solid fa-circle-xmark'></i> Incorrecto.</strong> Revisa tu procedimiento.";
      }
      return;
    }

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

  /* Actualiza el contador "Aciertos: X de 14" del Tema 1 y la barra lateral. */
  function actualizarAvance() {
    const respondidos = Object.keys(resultados).length;
    const porcentaje = Math.round((respondidos / total) * 100);
    if (barra) {
      barra.style.width = porcentaje + "%";
      if (barra.parentElement) barra.parentElement.setAttribute("aria-valuenow", porcentaje);
    }
    if (textoAvance) {
      textoAvance.textContent = respondidos + " de " + total;
    }

    const contadorTema1 = document.getElementById("contador-aciertos-tema1");
    if (contadorTema1) {
      const ejerciciosTema1 = EJERCICIOS_BLOQUE1.filter(function (e) { return e.clase === 1; });
      const aciertosTema1 = ejerciciosTema1.filter(function (e) { return resultados[idDe(e)] === true; }).length;
      contadorTema1.textContent = "Aciertos: " + aciertosTema1 + " de " + ejerciciosTema1.length;
    }
  }

  /* Dibuja los ejercicios de un tema dentro de su contenedor. */
  function dibujarTema(tema, contenedor) {
    let html = "";
    if (tema === 1) {
      html +=
        '<div class="aviso-memoria mb-3" role="note">' +
          '<i class="fa-solid fa-circle-info me-2" aria-hidden="true"></i>' +
          '<span>Tu avance no se guarda. Si recargas la página, los resultados se reinician.</span>' +
        '</div>' +
        '<div class="cabecera-practica-tema1 mb-3">' +
          '<div>' +
            '<p class="mb-2">Intenta resolver cada ejercicio por tu cuenta antes de ver la solución. Escribe tu respuesta final en el recuadro y comprueba. Después revisa el procedimiento paso a paso para consolidar lo aprendido.</p>' +
            '<p class="mb-0 texto-suave">Para escribir las respuestas en el sitio, usa este formato: números como <code>70</code>, expresiones como <code>2x-7</code> o <code>4a-8b</code>, y en lógica usa <code>Y</code> para "y", <code>O</code> para "o" y <code>NO</code> para "no" (o los símbolos $\\land$, $\\lor$, $\\lnot$ con los botones del sitio).</p>' +
          '</div>' +
          '<div class="contador-aciertos-badge" id="contador-aciertos-tema1" aria-live="polite">Aciertos: 0 de 14</div>' +
        '</div>';

      let grupoActual = null;
      EJERCICIOS_BLOQUE1.filter(function (e) { return e.clase === 1; }).forEach(function (ej) {
        if (ej.grupo !== grupoActual) {
          grupoActual = ej.grupo;
          html += '<h4 class="subtitulo-grupo-practica">' + ej.grupo + '</h4>';
        }
        const id = idDe(ej);
        const solId = id + "-sol";
        html +=
          '<div class="tarjeta-pregunta" id="' + id + '">' +
            '<p class="mb-3"><span class="numero">' + ej.n + '</span><strong>' + ej.titulo + '</strong> ' + ej.enunciado + '</p>' +
            controlesDe(ej, id) +
            '<div class="acciones-ejercicio d-flex flex-wrap gap-2 align-items-center mt-2">' +
              '<button type="button" class="btn btn-sm btn-tide btn-comprobar" data-id="' + id + '" aria-label="Comprobar respuesta del ejercicio ' + ej.n + '">' +
                '<i class="fa-solid fa-check" aria-hidden="true"></i> Comprobar' +
              '</button>' +
              '<button type="button" class="btn btn-sm btn-ver-solucion" data-toggle-solucion="' + solId + '" aria-expanded="false" aria-controls="' + solId + '" aria-label="Ver solución del ejercicio ' + ej.n + '">' +
                '<i class="fa-regular fa-lightbulb" aria-hidden="true"></i> Ver solución' +
              '</button>' +
            '</div>' +
            '<div id="' + id + '-fb" aria-live="polite"></div>' +
            '<div id="' + solId + '" class="solucion-desplegable mt-3" hidden>' +
              '<div class="solucion-cabecera"><i class="fa-solid fa-list-ol me-1" aria-hidden="true"></i> Procedimiento y solución paso a paso</div>' +
              '<div class="solucion-cuerpo">' + ej.solucion + '</div>' +
            '</div>' +
          '</div>';
      });
    } else {
      let parteActual = null;
      EJERCICIOS_BLOQUE1.filter(function (e) { return e.clase === tema; }).forEach(function (ej) {
        if (ej.parte !== parteActual) {
          parteActual = ej.parte;
          html += '<p class="subtitulo-parte">' + NOMBRES_PARTE[ej.parte] + '</p>';
        }
        const id = idDe(ej);
        html +=
          '<div class="tarjeta-pregunta" id="' + id + '">' +
            '<p class="mb-3"><span class="numero">' + ej.n + '</span>' + ej.enunciado + '</p>' +
            controlesDe(ej, id) +
            '<button type="button" class="btn btn-sm btn-tide mt-3 btn-comprobar" data-id="' + id + '">' +
              '<i class="fa-solid fa-check"></i> Comprobar</button>' +
            '<div id="' + id + '-fb"></div>' +
          '</div>';
      });
    }

    contenedor.innerHTML = html;
    tipografiar(contenedor);
  }

  /* Eventos delegados: comprobar, ver/ocultar solución e insertar símbolos lógicos. */
  document.addEventListener("click", function (evento) {
    const btnSimbolo = evento.target.closest("[data-insertar-simbolo]");
    if (btnSimbolo) {
      const simbolo = btnSimbolo.getAttribute("data-insertar-simbolo");
      const inputId = btnSimbolo.getAttribute("data-target-input");
      const input = document.getElementById(inputId);
      if (input) {
        const start = typeof input.selectionStart === "number" ? input.selectionStart : input.value.length;
        const end = typeof input.selectionEnd === "number" ? input.selectionEnd : input.value.length;
        input.value = input.value.slice(0, start) + simbolo + input.value.slice(end);
        input.focus();
        const pos = start + simbolo.length;
        if (typeof input.setSelectionRange === "function") {
          input.setSelectionRange(pos, pos);
        }
      }
      return;
    }

    const btnSolucion = evento.target.closest("[data-toggle-solucion]");
    if (btnSolucion) {
      const solId = btnSolucion.getAttribute("data-toggle-solucion");
      const panelSol = document.getElementById(solId);
      if (panelSol) {
        const abrir = panelSol.hidden;
        panelSol.hidden = !abrir;
        btnSolucion.setAttribute("aria-expanded", String(abrir));
        btnSolucion.classList.toggle("activa", abrir);
        if (abrir) {
          tipografiar(panelSol);
        }
      }
      return;
    }

    const boton = evento.target.closest(".btn-comprobar");
    if (!boton) return;

    const id = boton.getAttribute("data-id");
    const ej = EJERCICIOS_BLOQUE1.find(function (e) { return idDe(e) === id; });
    if (!ej) return;
    const ok = calificar(ej, id);

    if (ok !== null) {
      resultados[id] = ok;
    }
    mostrarRetroalimentacion(ej, id, ok);
    actualizarAvance();
  });

  /* Permitir comprobar con Enter dentro de un campo de texto */
  document.addEventListener("keydown", function (evento) {
    if (evento.key !== "Enter") return;
    const input = evento.target.closest(".tarjeta-pregunta input.campo");
    if (!input) return;
    const tarjeta = input.closest(".tarjeta-pregunta");
    const btn = tarjeta && tarjeta.querySelector(".btn-comprobar");
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
  window.addEventListener("load", function () {
    document.querySelectorAll("[data-ejercicios]").forEach(tipografiar);
  });

})();
