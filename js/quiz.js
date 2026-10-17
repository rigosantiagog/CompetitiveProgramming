/* ==========================================================
   Motor de ejercicios interactivos con retroalimentación
   Lee EJERCICIOS_BLOQUE1 (ejercicios-bloque1.js) y dibuja
   las tarjetas, califica cada respuesta y actualiza el progreso.
   ========================================================== */

(function () {

  const contenedor = document.getElementById("lista-ejercicios");
  const barra = document.getElementById("barra-progreso");
  const textoProgreso = document.getElementById("texto-progreso");
  const textoAciertos = document.getElementById("texto-aciertos");
  const btnReiniciar = document.getElementById("btn-reiniciar");

  const total = EJERCICIOS_BLOQUE1.length;
  const resultados = {};   // id -> true (correcto) / false (incorrecto)
  const NOMBRES_CLASE = {
    1: "Clase 1 · Álgebra y lógica",
    2: "Clase 2 · Aritmética, conteo y casos",
    3: "Clase 3 · Geometría, trigonometría y patrones"
  };
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

  /* Construye los controles de respuesta según el tipo de ejercicio. */
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
    /* tipo "opc": opciones de selección única */
    return ej.opciones.map(function (op, i) {
      return '<div class="form-check">' +
               '<input class="form-check-input" type="radio" name="' + id + '" id="' + id + '-op' + i + '" value="' + i + '">' +
               '<label class="form-check-label" for="' + id + '-op' + i + '">' + op + '</label>' +
             '</div>';
    }).join("");
  }

  /* Texto de la respuesta correcta para mostrarla al alumno si se equivoca. */
  function respuestaCorrectaTexto(ej) {
    if (ej.tipo === "num") return String(ej.valor);
    if (ej.tipo === "multi") {
      return ej.campos.map(function (c) { return c.etiqueta + ": " + c.valor; }).join(", ");
    }
    return ej.opciones[ej.correcta];
  }

  /* Revisa la respuesta del alumno y devuelve true si es correcta. */
  function calificar(ej, id) {
    if (ej.tipo === "num") {
      const v = aNumero(document.getElementById(id + "-in").value);
      return !isNaN(v) && Math.abs(v - ej.valor) < 1e-6;
    }
    if (ej.tipo === "multi") {
      return ej.campos.every(function (c, i) {
        const v = aNumero(document.getElementById(id + "-" + i).value);
        return !isNaN(v) && Math.abs(v - c.valor) < 1e-6;
      });
    }
    const sel = document.querySelector('input[name="' + id + '"]:checked');
    if (!sel) return null;               // no eligió nada
    return Number(sel.value) === ej.correcta;
  }

  /* Muestra el mensaje de retroalimentación debajo de la tarjeta. */
  function mostrarRetroalimentacion(ej, id, ok) {
    const caja = document.getElementById(id + "-fb");
    if (ok === null) {
      caja.className = "retroalimentacion p-3 rounded mt-3 bg-warning-subtle border border-warning";
      caja.innerHTML = "<strong>Elige una opción</strong> antes de comprobar.";
      return;
    }
    if (ok) {
      caja.className = "retroalimentacion p-3 rounded mt-3 bg-success-subtle border border-success";
      caja.innerHTML = "<strong><i class='fa-solid fa-circle-check'></i> ¡Correcto!</strong> " + ej.explicacion;
    } else {
      caja.className = "retroalimentacion p-3 rounded mt-3 bg-danger-subtle border border-danger";
      caja.innerHTML = "<strong><i class='fa-solid fa-circle-xmark'></i> Revisa de nuevo.</strong> " +
                       "La respuesta correcta es: <strong>" + respuestaCorrectaTexto(ej) + "</strong>. " +
                       ej.explicacion;
    }
  }

  /* Actualiza la barra de progreso y el marcador de aciertos. */
  function actualizarMarcador() {
    const respondidos = Object.keys(resultados).length;
    const aciertos = Object.values(resultados).filter(Boolean).length;
    const porcentaje = Math.round((respondidos / total) * 100);
    barra.style.width = porcentaje + "%";
    barra.setAttribute("aria-valuenow", porcentaje);
    textoProgreso.textContent = respondidos + " de " + total + " respondidos";
    textoAciertos.textContent = "Aciertos: " + aciertos + " / " + total;
  }

  /* Dibuja todas las tarjetas, agrupadas por clase y parte. */
  function dibujar() {
    let claseActual = null;
    let parteActual = null;
    let html = "";

    EJERCICIOS_BLOQUE1.forEach(function (ej) {
      if (ej.clase !== claseActual) {
        claseActual = ej.clase;
        parteActual = null;
        html += '<h2 class="h4 mt-5 mb-2">' + NOMBRES_CLASE[ej.clase] + '</h2>';
      }
      if (ej.parte !== parteActual) {
        parteActual = ej.parte;
        html += '<p class="subtitulo-parte">' + NOMBRES_PARTE[ej.parte] + '</p>';
      }

      const id = idDe(ej);
      html += '' +
        '<div class="card ejercicio shadow-sm mb-4" id="' + id + '">' +
          '<div class="card-body p-4">' +
            '<p class="mb-3"><span class="numero">' + ej.n + '</span>' + ej.enunciado + '</p>' +
            controlesDe(ej, id) +
            '<div class="d-flex flex-wrap gap-2 mt-3">' +
              '<button type="button" class="btn btn-acento btn-comprobar" data-id="' + id + '">' +
                '<i class="fa-solid fa-check"></i> Comprobar</button>' +
            '</div>' +
            '<div id="' + id + '-fb"></div>' +
          '</div>' +
        '</div>';
    });

    contenedor.innerHTML = html;
  }

  /* Eventos: al pulsar "Comprobar" se califica esa tarjeta. */
  contenedor.addEventListener("click", function (evento) {
    const boton = evento.target.closest(".btn-comprobar");
    if (!boton) return;

    const id = boton.getAttribute("data-id");
    const ej = EJERCICIOS_BLOQUE1.find(function (e) { return idDe(e) === id; });
    const ok = calificar(ej, id);

    if (ok !== null) {
      resultados[id] = ok;
    }
    mostrarRetroalimentacion(ej, id, ok);
    actualizarMarcador();
  });

  /* Reinicia el ejercicio: limpia respuestas y retroalimentación. */
  btnReiniciar.addEventListener("click", function () {
    EJERCICIOS_BLOQUE1.forEach(function (ej) {
      const id = idDe(ej);
      delete resultados[id];
      document.getElementById(id + "-fb").innerHTML = "";
      document.getElementById(id + "-fb").className = "";
      const card = document.getElementById(id);
      card.querySelectorAll("input").forEach(function (campo) {
        if (campo.type === "radio") campo.checked = false;
        else campo.value = "";
      });
    });
    actualizarMarcador();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  dibujar();
  actualizarMarcador();

})();
