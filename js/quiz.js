/* ==========================================================
   Motor de ejercicios con retroalimentación (Practicar · Temas 1, 2 y 3)
   - Comprobación en pantalla por cada recuadro y por ejercicio completo.
   - Normalización de mayúsculas/minúsculas, espacios, símbolo $,
     comas de miles, unidades escritas, grados (°), raíces y
     prefijo "x =". En lógica acepta "y", "o", "no" y ∧, ∨, ¬.
   - Contador "Aciertos: X de N" en cada tema.
   - Botón "Ver solución" (mostrar/ocultar) siempre disponible.
   - Manejo en memoria de la página.
   ========================================================== */

(function () {

  const barra = document.getElementById("avance-ejercicios-barra");
  const textoAvance = document.getElementById("avance-ejercicios-texto");

  const total = EJERCICIOS_BLOQUE1.length;
  const resultados = {};   // id -> true (correcto) / false (incorrecto)

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

  /* Normaliza una respuesta antes de comparar:
     - Ignora mayúsculas/minúsculas, espacios, $, comas de miles,
       símbolo de grados (°), unidades escritas y el prefijo "x =".
     - En lógica acepta "y", "o", "no" además de ∧, ∨, ¬. */
  function normalizarTexto(cadena, esLogica) {
    let s = String(cadena || "")
      .toLowerCase()
      .replace(/−/g, "-")
      .trim();

    if (esLogica) {
      if (s.indexOf("entreno") !== -1 && s.indexOf("gano") !== -1) {
        return s.replace(/[.,;:"'«»]/g, "").replace(/\s+/g, " ").trim();
      }
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

    // Normalizar raíces como "20 raíz de 3" o "20\sqrt{3}" -> "20√3"
    s = s
      .replace(/\\sqrt\s*\{\s*(\d+)\s*\}/g, "√$1")
      .replace(/ra[íi]z\s*(cuadrada\s*)?de\s*/g, "√");

    // Quitar símbolo de dólar, comas de miles y símbolo de grados
    s = s
      .replace(/\$/g, "")
      .replace(/(\d),(\d{3})\b/g, "$1$2")
      .replace(/°|\\circ|\bgrados?\b/g, "");

    // Quitar unidades comunes al final cuando acompañan a un número
    s = s.replace(/\b(pesos?|libros?|kilogramos?|kg|cajas?|estudiantes?|parejas?|jueces|juez|rejas?\s*llenas?|rejas?|refrescos?\s*sueltos?|refrescos?|atletas?|d[íi]as?|errores?|error|metros?|unidades?|luces|camiones?|impares?|p[íi]xeles?|puntos?|elementos?)\b/g, "");

    // Si es un número seguido de "m" o "cm" como unidad de longitud (ej. "15 m", "20 m")
    s = s.replace(/^([+-]?\d+(?:\.\d+)?)\s*(?:m|cm)$/, "$1");

    // Quitar espacios y prefijo "x="
    s = s.replace(/\s+/g, "");
    s = s.replace(/^x=/, "");

    return s;
  }

  function coincideRespuesta(valorUsuario, listaAceptadas, esLogica) {
    const normUsuario = normalizarTexto(valorUsuario, esLogica);
    if (normUsuario === "") return false;
    return listaAceptadas.some(function (ac) {
      return normalizarTexto(ac, esLogica) === normUsuario;
    });
  }

  /* Identificador único para cada ejercicio. */
  function idDe(ej) {
    return "ej-" + ej.clase + "-A-" + ej.n;
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
      const colClass = ej.campos.length === 3 ? "col-12 col-md-4" : "col-12 col-md-6";
      return (
        '<div class="row g-2 mb-1">' +
        ej.campos.map(function (c, i) {
          const inputId = id + "-" + i;
          return (
            '<div class="' + colClass + '">' +
              '<label class="form-label fw-semibold mb-1" for="' + inputId + '">' + c.etiqueta + '</label>' +
              (ej.botonesSimbolos ? barraSimbolosDe(inputId, c.etiqueta) : "") +
              '<input type="text" class="form-control mb-1 campo" id="' + inputId + '" placeholder="Respuesta (' + c.etiqueta + ')" aria-label="Respuesta para ' + c.etiqueta + '" autocomplete="off">' +
              '<div class="small estado-recuadro" id="' + inputId + '-fb" aria-live="polite"></div>' +
            '</div>'
          );
        }).join("") +
        '</div>'
      );
    }
    return "";
  }

  /* Revisa la respuesta de cada recuadro y devuelve true si todos son correctos. */
  function calificar(ej, id) {
    if (ej.tipo === "texto") {
      const input = document.getElementById(id + "-in");
      const ok = coincideRespuesta(input ? input.value : "", ej.aceptadas, !!ej.esLogica);
      if (input) {
        input.classList.remove("is-valid", "is-invalid");
        input.classList.add(ok ? "is-valid" : "is-invalid");
      }
      return ok;
    }
    if (ej.tipo === "multi-texto") {
      const estados = ej.campos.map(function (c, i) {
        const inputId = id + "-" + i;
        const input = document.getElementById(inputId);
        const fbRecuadro = document.getElementById(inputId + "-fb");
        const okCampo = coincideRespuesta(input ? input.value : "", c.aceptadas, !!ej.esLogica);
        if (input) {
          input.classList.remove("is-valid", "is-invalid");
          input.classList.add(okCampo ? "is-valid" : "is-invalid");
        }
        if (fbRecuadro) {
          fbRecuadro.className = "small mt-1 fw-semibold " + (okCampo ? "text-success" : "text-danger");
          fbRecuadro.innerHTML = okCampo
            ? '<i class="fa-solid fa-circle-check" aria-hidden="true"></i> Correcto'
            : '<i class="fa-solid fa-circle-xmark" aria-hidden="true"></i> Incorrecto';
        }
        return okCampo;
      });
      return estados.every(Boolean);
    }
    return false;
  }

  /* Mensaje de retroalimentación debajo de la tarjeta (sin revelar la respuesta si es incorrecto). */
  function mostrarRetroalimentacion(ej, id, ok) {
    const caja = document.getElementById(id + "-fb");
    if (!caja) return;
    if (ok) {
      caja.className = "retroalimentacion p-3 rounded bg-success-subtle border border-success text-success-emphasis";
      caja.innerHTML = "<strong><i class='fa-solid fa-circle-check'></i> Correcto</strong>";
    } else {
      caja.className = "retroalimentacion p-3 rounded bg-danger-subtle border border-danger text-danger-emphasis";
      caja.innerHTML = "<strong><i class='fa-solid fa-circle-xmark'></i> Incorrecto.</strong> Revisa tu procedimiento.";
    }
  }

  /* Actualiza el contador "Aciertos: X de N" de cada tema y la barra lateral. */
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

    [1, 2, 3].forEach(function (numTema) {
      const contadorTema = document.getElementById("contador-aciertos-tema" + numTema);
      if (contadorTema) {
        const ejsTema = EJERCICIOS_BLOQUE1.filter(function (e) { return e.clase === numTema; });
        const aciertos = ejsTema.filter(function (e) { return resultados[idDe(e)] === true; }).length;
        contadorTema.textContent = "Aciertos: " + aciertos + " de " + ejsTema.length;
      }
    });
  }

  /* Dibuja los ejercicios de un tema dentro de su contenedor. */
  function dibujarTema(tema, contenedor) {
    const ejsTema = EJERCICIOS_BLOQUE1.filter(function (e) { return e.clase === tema; });
    let introExtra = "";
    if (tema === 1) {
      introExtra =
        '<p class="mb-2">Intenta resolver cada ejercicio por tu cuenta antes de ver la solución. Escribe tu respuesta final en el recuadro y comprueba. Después revisa el procedimiento paso a paso para consolidar lo aprendido.</p>' +
        '<p class="mb-0 texto-suave">Para escribir las respuestas en el sitio, usa este formato: números como <code>70</code>, expresiones como <code>2x-7</code> o <code>4a-8b</code>, y en lógica usa <code>Y</code> para "y", <code>O</code> para "o" y <code>NO</code> para "no" (o los símbolos $\\land$, $\\lor$, $\\lnot$ con los botones del sitio).</p>';
    } else {
      introExtra =
        '<p class="mb-0 texto-suave">Intenta resolver cada ejercicio por tu cuenta antes de ver la solución. Escribe tu respuesta final en el recuadro y pulsa <strong>Comprobar</strong>.</p>';
    }

    let html =
      '<div class="aviso-memoria mb-3" role="note">' +
        '<i class="fa-solid fa-circle-info me-2" aria-hidden="true"></i>' +
        '<span>Tu avance no se guarda. Si recargas la página, los resultados se reinician.</span>' +
      '</div>' +
      '<div class="cabecera-practica-tema1 mb-3">' +
        '<div>' + introExtra + '</div>' +
        '<div class="contador-aciertos-badge" id="contador-aciertos-tema' + tema + '" aria-live="polite">Aciertos: 0 de ' + ejsTema.length + '</div>' +
      '</div>';

    let grupoActual = null;
    ejsTema.forEach(function (ej) {
      if (ej.grupo && ej.grupo !== grupoActual) {
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
            '<button type="button" class="btn btn-sm btn-tide btn-comprobar" data-id="' + id + '" aria-label="Comprobar respuesta del ejercicio ' + ej.n + ' del Tema ' + tema + '">' +
              '<i class="fa-solid fa-check" aria-hidden="true"></i> Comprobar' +
            '</button>' +
            '<button type="button" class="btn btn-sm btn-ver-solucion" data-toggle-solucion="' + solId + '" aria-expanded="false" aria-controls="' + solId + '" aria-label="Ver solución del ejercicio ' + ej.n + ' del Tema ' + tema + '">' +
              '<i class="fa-regular fa-lightbulb" aria-hidden="true"></i> Ver solución' +
            '</button>' +
          '</div>' +
          '<div id="' + id + '-fb" aria-live="polite"></div>' +
          '<div id="' + solId + '" class="solucion-desplegable mt-3" hidden>' +
            '<div class="solucion-cabecera"><i class="fa-solid fa-list-ol me-1" aria-hidden="true"></i> Solución paso a paso</div>' +
            '<div class="solucion-cuerpo">' + ej.solucion + '</div>' +
          '</div>' +
        '</div>';
    });

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

    resultados[id] = ok;
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


  /* Dibuja los 15 ejercicios de la Tarea del Bloque 1 con su botón "Ver clave" oculto al inicio. */
  function dibujarTarea(contenedor) {
    if (typeof TAREA_BLOQUE1 === "undefined" || !contenedor) return;
    let html =
      '<div class="bloque-pestana mb-4">' +
        '<h3><span class="icono-bloque sky"><i class="fa-solid fa-pen-to-square" aria-hidden="true"></i></span> Ejercicios</h3>' +
        '<p class="mb-2">¡Bienvenido al primer bloque de entrenamiento! Antes de resolver cualquier problema, lo más importante es aprender a traducir una situación del entorno real a un modelo matemático claro. Lee con atención cada problema, identifica los datos y construye tu procedimiento con lenguaje matemático exacto.</p>' +
        '<p class="mb-0 texto-suave">Revisa cada planteamiento y cada operación. Respalda cada paso con su justificación antes de comparar tu resultado con la clave.</p>' +
      '</div>';

    let temaActual = null;
    TAREA_BLOQUE1.forEach(function (item) {
      if (item.tema !== temaActual) {
        temaActual = item.tema;
        html += '<h3 class="subtitulo-grupo-practica">' + item.tema + '</h3>';
      }
      const claveId = "tarea-b1-clave-" + item.n;
      html +=
        '<div class="tarjeta-pregunta" id="tarea-b1-' + item.n + '">' +
          '<div class="mb-3"><span class="numero">' + item.n + '</span><strong>' + item.titulo + '</strong> ' + item.enunciado + '</div>' +
          '<div class="d-flex flex-wrap gap-2 align-items-center mt-2">' +
            '<button type="button" class="btn btn-sm btn-ver-solucion btn-ver-clave" data-toggle-solucion="' + claveId + '" aria-expanded="false" aria-controls="' + claveId + '" aria-label="Ver clave del ejercicio ' + item.n + ' de la tarea">' +
              '<i class="fa-solid fa-key" aria-hidden="true"></i> Ver clave' +
            '</button>' +
          '</div>' +
          '<div id="' + claveId + '" class="solucion-desplegable mt-3" hidden>' +
            '<div class="solucion-cabecera"><i class="fa-solid fa-check-double me-1" aria-hidden="true"></i> Clave de respuesta · Ejercicio ' + item.n + '</div>' +
            '<div class="solucion-cuerpo">' +
              '<p class="mb-2"><strong>Respuesta final:</strong> ' + item.respuestaFinal + '</p>' +
              '<p class="mb-1"><strong>Procedimiento breve:</strong></p>' +
              item.procedimiento +
            '</div>' +
          '</div>' +
        '</div>';
    });

    contenedor.innerHTML = html;
    tipografiar(contenedor);
  }

  function iniciar() {
    document.querySelectorAll("[data-ejercicios]").forEach(function (contenedor) {
      dibujarTema(Number(contenedor.dataset.ejercicios), contenedor);
    });
    document.querySelectorAll("[data-tarea-bloque1]").forEach(function (contenedor) {
      dibujarTarea(contenedor);
    });
    actualizarAvance();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
  window.addEventListener("load", function () {
    document.querySelectorAll("[data-ejercicios], [data-tarea-bloque1]").forEach(tipografiar);
  });

})();
