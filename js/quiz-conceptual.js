/* ==========================================================
   Sección B · Quizz · Bloque 1
   - Tema 1: 10 preguntas con opciones A, B, C, D, calificación
     global ("Tu puntaje: X / 10"), aviso si hay preguntas sin
     responder, explicación de la clave en cada pregunta (incluso
     cuando el alumno acierta) y botón "Reintentar".
   - Renderizado matemático con KaTeX.
   - Sin almacenamiento en navegador ni servidor.
   ========================================================== */

(function () {

  const APROBAR_CON = 6;

  const QUIZ = {
    1: {
      titulo: "Tema 1 · Álgebra y lógica",
      preguntas: [
        {
          titulo: "1. Evaluación de expresiones.",
          q: "¿Cuál es el valor de $12 - 4 \\cdot 2 + 6 \\div 2$?",
          o: ["A) $7$", "B) $11$", "C) $15$", "D) $5$"],
          c: 0,
          e: "<strong>1. Respuesta: A.</strong> Primero se resuelven multiplicación y división: $4 \\cdot 2 = 8$ y $6 \\div 2 = 3$. Queda $12 - 8 + 3 = 7$. La opción B aparece al calcular de izquierda a derecha sin respetar la jerarquía de operaciones."
        },
        {
          titulo: "2. Propiedad distributiva.",
          q: "Al simplificar $-a(b - c)$, ¿qué expresión se obtiene?",
          o: ["A) $-ab - ac$", "B) $-ab + ac$", "C) $ab - ac$", "D) $-ab + c$"],
          c: 1,
          e: "<strong>2. Respuesta: B.</strong> El signo menos multiplica a cada término: $-a \\cdot b = -ab$ y $-a \\cdot (-c) = +ac$. La opción A olvida que un negativo por un negativo da positivo."
        },
        {
          titulo: "3. Ecuaciones de primer grado.",
          q: "¿Cuál es la solución de $3x + 5 = 20$?",
          o: ["A) $x = \\dfrac{25}{3}$", "B) $x = \\dfrac{20}{3}$", "C) $x = 5$", "D) $x = -5$"],
          c: 2,
          e: "<strong>3. Respuesta: C.</strong> Restamos $5$: $3x = 15$. Dividimos entre $3$: $x = 5$. La opción A resulta de sumar $5$ en lugar de restarlo."
        },
        {
          titulo: "4. Igualdad frente a asignación.",
          q: "¿Cuál es la diferencia conceptual entre una igualdad matemática ($A = B$) y la asignación de un valor a una variable?",
          o: [
            "A) No hay diferencia; ambas son la misma operación.",
            "B) La igualdad cambia el valor de $B$, mientras que la asignación mantiene $A$ constante.",
            "C) La asignación es una relación simétrica, mientras que la igualdad es una instrucción de un solo sentido.",
            "D) La igualdad afirma una relación simétrica entre dos expresiones, mientras que la asignación fija en un solo sentido el valor de una variable."
          ],
          c: 3,
          e: "<strong>4. Respuesta: D.</strong> La igualdad $A = B$ es simétrica: si $A = B$, entonces $B = A$. La asignación es una instrucción de un solo sentido que fija el valor de una variable."
        },
        {
          titulo: "5. Planteamiento verbal.",
          q: "¿Qué ecuación modela \"un número $y$ es igual al doble de un número $x$ más 5 unidades\"?",
          o: ["A) $y = 2x + 5$", "B) $y = 2(x + 5)$", "C) $x = 2y + 5$", "D) $y = x^2 + 5$"],
          c: 0,
          e: "<strong>5. Respuesta: A.</strong> \"El doble de $x$\" es $2x$, y \"más 5 unidades\" es $+5$. La opción B agrupa la suma dentro del factor, lo que cambia el significado."
        },
        {
          titulo: "6. Planteamiento verbal.",
          q: "Un presupuesto $P$ no puede superar el triple del costo base $C$ disminuido en 100 unidades. ¿Qué expresión describe esta restricción?",
          o: ["A) $P < 3(C - 100)$", "B) $P \\le 3C - 100$", "C) $P \\ge 3C - 100$", "D) $P = 3C + 100$"],
          c: 1,
          e: "<strong>6. Respuesta: B.</strong> \"No puede superar\" es un límite superior que incluye el valor, así que usamos $\\le$. \"El triple de $C$ disminuido en 100\" es $3C - 100$. La opción A usa desigualdad estricta y paréntesis mal ubicados."
        },
        {
          titulo: "7. Lógica.",
          q: "Si $A$ es verdadera ($V$) y $B$ es falsa ($F$), ¿cuál es el valor de $A \\land \\lnot B$?",
          o: ["A) $F$, solo si $A$ cambia de valor", "B) Indeterminado", "C) $V$", "D) $F$, porque aparece el operador NO"],
          c: 2,
          e: "<strong>7. Respuesta: C.</strong> Como $B$ es $F$, $\\lnot B$ es $V$. Entonces $A \\land \\lnot B = V \\land V = V$. La opción D confunde la presencia del operador NO con un resultado falso."
        },
        {
          titulo: "8. Negación del condicional.",
          q: "¿Cuál es la negación de \"Si entreno diariamente ($P$), entonces gano la competencia ($Q$)\"?",
          o: [
            "A) \"Si no entreno diariamente, entonces no gano la competencia.\"",
            "B) \"Si gano la competencia, entonces entreno diariamente.\"",
            "C) \"No entreno diariamente o gano la competencia.\"",
            "D) \"Entreno diariamente y no gano la competencia.\""
          ],
          c: 3,
          e: "<strong>8. Respuesta: D.</strong> La negación de $P \\rightarrow Q$ es $P \\land \\lnot Q$: afirmar la condición y negar el resultado. La opción A es la falacia de negar el antecedente."
        },
        {
          titulo: "9. Leyes de De Morgan.",
          q: "¿Qué expresión es equivalente a $\\lnot(P \\land Q)$?",
          o: ["A) $\\lnot P \\lor \\lnot Q$", "B) $\\lnot P \\land \\lnot Q$", "C) $P \\lor Q$", "D) $\\lnot(P \\lor Q)$"],
          c: 0,
          e: "<strong>9. Respuesta: A.</strong> La primera ley de De Morgan: la negación de una conjunción es la disyunción de las negaciones. La opción B no cambia el conector $\\land$ por $\\lor$."
        },
        {
          titulo: "10. Simplificación.",
          q: "Simplifica completamente $2x - [3x - (5x - 4)]$.",
          o: ["A) $-6x + 4$", "B) $4x - 4$", "C) $4x + 4$", "D) $-4x - 4$"],
          c: 1,
          e: "<strong>10. Respuesta: B.</strong> Dentro del corchete: $3x - 5x + 4 = -2x + 4$. Luego $2x - [-2x + 4] = 2x + 2x - 4 = 4x - 4$. La opción C olvida el signo negativo exterior sobre el $+4$."
        }
      ]
    },
    2: {
      titulo: "Tema 2 · Aritmética, conteo y casos",
      preguntas: [
        { q: "¿Cuál es el cociente y el residuo de $23 \\div 5$?",
          o: ["Cociente $4$, residuo $3$", "Cociente $5$, residuo $3$", "Cociente $4$, residuo $2$", "Cociente $3$, residuo $8$"], c: 0,
          e: "$23 = 5 \\cdot 4 + 3$. El cociente es $4$ y el residuo es $3$." },
        { q: "Si al repartir sobran objetos y hace falta un grupo más, ¿qué función se usa?",
          o: ["Piso $\\lfloor x \\rfloor$", "Techo $\\lceil x \\rceil$", "Redondeo al entero más cercano", "Multiplicación"], c: 1,
          e: "El techo redondea hacia arriba: $\\lceil 100 \\div 36 \\rceil = 3$ autobuses cuando sobran pasajeros." },
        { q: "Hay $3$ autobuses o $2$ trenes para viajar. ¿Qué operación da el total de opciones?",
          o: ["Suma: $3 + 2 = 5$", "Producto: $3 \\cdot 2 = 6$", "Resta: $3 - 2 = 1$", "División: $3 \\div 2$"], c: 0,
          e: "Las opciones no se mezclan (o uno o el otro), así que se suman." },
        { q: "Tienes $4$ camisas y $3$ pantalones, y cualquier combinación sirve. ¿Cuántos outfits hay?",
          o: ["$7$", "$12$", "$9$", "$24$"], c: 1,
          e: "Son decisiones independientes que se combinan: $4 \\cdot 3 = 12$." },
        { q: "Al elegir presidente y secretario distintos entre $5$ personas, ¿el orden importa?",
          o: ["Sí, porque los cargos son distintos", "No, nunca importa", "Depende del número de personas", "Solo si hay dos personas"], c: 0,
          e: "Ana presidenta y Luis secretario es distinto de Luis presidente y Ana secretaria. Por eso se multiplica $5 \\cdot 4 = 20$." },
        { q: "Al contar los números del $1$ al $20$ que son múltiplos de $2$ o de $5$ ($10 + 4 - 2$), ¿por qué se resta $2$?",
          o: ["Para no contar dos veces los que cumplen ambas condiciones", "Porque el $0$ no cuenta", "Por error de cálculo", "No se resta nada"], c: 0,
          e: "Los múltiplos de $10$ ($10$ y $20$) están en los dos casos. Se restan una vez para contarlos solo una vez." },
        { q: "¿Cuál es el residuo de $17 \\bmod 5$?",
          o: ["$2$", "$3$", "$5$", "$0$"], c: 0,
          e: "$5 \\cdot 3 = 15$ y $17 - 15 = 2$. El residuo siempre es menor que el divisor." },
        { q: "¿Es el $0$ un número par?",
          o: ["Sí, porque $0 = 2 \\cdot 0$", "No, porque no es positivo", "Depende del contexto", "No tiene paridad"], c: 0,
          e: "Al dividir $0$ entre $2$ el residuo es $0$, así que es par." }
      ]
    },
    3: {
      titulo: "Tema 3 · Geometría, trigonometría y patrones",
      preguntas: [
        { q: "¿Cuánto suman los ángulos interiores de un triángulo?",
          o: ["$90^\\circ$", "$180^\\circ$", "$270^\\circ$", "$360^\\circ$"], c: 1,
          e: "Los tres ángulos de cualquier triángulo suman $180^\\circ$. Los $360^\\circ$ corresponden a un cuadrilátero." },
        { q: "El teorema de Pitágoras $a^2 + b^2 = c^2$ se aplica a:",
          o: ["Cualquier triángulo", "Triángulos rectángulos", "Triángulos isósceles", "Triángulos equiláteros"], c: 1,
          e: "Solo funciona en triángulos rectángulos, donde $c$ es la hipotenusa." },
        { q: "¿Cuál es la distancia entre $(0, 0)$ y $(3, 4)$?",
          o: ["$5$", "$7$", "$12$", "$25$"], c: 0,
          e: "$d = \\sqrt{(3 - 0)^2 + (4 - 0)^2} = \\sqrt{25} = 5$." },
        { q: "En un triángulo rectángulo, $\\sin\\theta$ es igual a:",
          o: ["$\\dfrac{\\text{opuesto}}{\\text{adyacente}}$", "$\\dfrac{\\text{opuesto}}{\\text{hipotenusa}}$", "$\\dfrac{\\text{adyacente}}{\\text{hipotenusa}}$", "$\\dfrac{\\text{hipotenusa}}{\\text{opuesto}}$"], c: 1,
          e: "SOH: $\\sin\\theta = \\dfrac{\\text{opuesto}}{\\text{hipotenusa}}$." },
        { q: "¿Cuánto vale $\\sin 30^\\circ$?",
          o: ["$\\dfrac{1}{2}$", "$\\dfrac{\\sqrt{3}}{2}$", "$1$", "$0$"], c: 0,
          e: "$\\sin 30^\\circ = \\dfrac{1}{2}$. Conviene memorizar los valores de $30^\\circ$, $45^\\circ$ y $60^\\circ$." },
        { q: "Dos ángulos complementarios suman:",
          o: ["$90^\\circ$", "$180^\\circ$", "$360^\\circ$", "$45^\\circ$"], c: 0,
          e: "Los complementarios suman $90^\\circ$. Los suplementarios suman $180^\\circ$." },
        { q: "En la fórmula $a_n = a_1 + (n - 1)\\cdot d$, ¿qué representa $d$?",
          o: ["El primer término", "La diferencia constante entre términos consecutivos", "El número de términos", "La suma de la secuencia"], c: 1,
          e: "En una progresión aritmética, cada término se obtiene sumando la misma diferencia $d$ al anterior." },
        { q: "¿Cuánto vale la suma $1 + 3 + 5 + 7$?",
          o: ["$16$", "$14$", "$20$", "$12$"], c: 0,
          e: "La suma de los primeros $n$ impares es $n^2$. Aquí son $4$ impares: $4^2 = 16$." }
      ]
    }
  };

  const avanceTexto = document.getElementById("avance-quiz-texto");
  const aprobados = {};
  const avisoPendienteTema = {};

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

  function actualizarAvance() {
    if (!avanceTexto) return;
    const n = Object.values(aprobados).filter(Boolean).length;
    avanceTexto.textContent = n + " de 3";
  }

  /* Dibuja el quiz de un tema dentro de su contenedor. */
  function dibujar(tema, contenedor) {
    const datos = QUIZ[tema];
    let html = "";

    if (tema === 1) {
      html += '<p class="mb-3">Este cuestionario te ayuda a detectar errores de procedimiento antes de usar estas ideas en problemas más difíciles. Responde las 10 preguntas, elige una opción en cada una y después califica para ver tu puntaje y la explicación de cada respuesta.</p>';
      datos.preguntas.forEach(function (p, i) {
        const id = "cq-" + tema + "-" + i;
        html +=
          '<div class="tarjeta-pregunta" id="' + id + '">' +
            '<div class="d-flex justify-content-between align-items-start gap-2 mb-3">' +
              '<p class="mb-0"><span class="numero">' + (i + 1) + '</span><strong>' + p.titulo + '</strong> ' + p.q + '</p>' +
              '<span class="estado-pregunta-quiz" id="' + id + '-estado" hidden></span>' +
            '</div>' +
            '<div role="radiogroup" aria-label="Opciones de la pregunta ' + (i + 1) + '">' +
              p.o.map(function (op, j) {
                return '<div class="form-check">' +
                         '<input class="form-check-input" type="radio" name="' + id + '" id="' + id + '-' + j + '" value="' + j + '">' +
                         '<label class="form-check-label" for="' + id + '-' + j + '">' + op + '</label>' +
                       '</div>';
              }).join("") +
            '</div>' +
            '<div id="' + id + '-fb" aria-live="polite"></div>' +
          '</div>';
      });
      html +=
        '<div id="cq-1-aviso" aria-live="assertive"></div>' +
        '<div id="cq-1-resultado" aria-live="polite"></div>' +
        '<div class="d-flex flex-wrap gap-2 align-items-center mt-3">' +
          '<button type="button" class="btn btn-ocean btn-calificar-cq" data-tema="1" aria-label="Calificar quizz del Tema 1">' +
            '<i class="fa-solid fa-clipboard-check me-1" aria-hidden="true"></i> Calificar' +
          '</button>' +
          '<button type="button" class="btn btn-outline-secondary btn-reintentar-cq" data-tema="1" aria-label="Reintentar quizz del Tema 1">' +
            '<i class="fa-solid fa-rotate-right me-1" aria-hidden="true"></i> Reintentar' +
          '</button>' +
        '</div>';
    } else {
      datos.preguntas.forEach(function (p, i) {
        const id = "cq-" + tema + "-" + i;
        html +=
          '<div class="tarjeta-pregunta" id="' + id + '">' +
            '<p class="mb-3"><span class="numero">' + (i + 1) + '</span>' + p.q + '</p>' +
            p.o.map(function (op, j) {
              return '<div class="form-check">' +
                       '<input class="form-check-input" type="radio" name="' + id + '" id="' + id + '-' + j + '" value="' + j + '">' +
                       '<label class="form-check-label" for="' + id + '-' + j + '">' + op + '</label>' +
                     '</div>';
            }).join("") +
            '<button type="button" class="btn btn-sm btn-tide mt-3 btn-comprobar-cq" data-tema="' + tema + '" data-i="' + i + '">' +
              '<i class="fa-solid fa-check"></i> Comprobar</button>' +
            '<div id="' + id + '-fb"></div>' +
          '</div>';
      });
      html += '<div class="d-flex flex-wrap gap-2 align-items-center mt-2">' +
                '<button type="button" class="btn btn-ocean btn-calificar-cq" data-tema="' + tema + '">Calificar quiz</button>' +
                '<span class="small text-secondary">Aprueba con ' + APROBAR_CON + ' de ' + datos.preguntas.length + '</span>' +
              '</div>' +
              '<div id="cq-' + tema + '-resultado"></div>';
    }

    contenedor.innerHTML = html;
    tipografiar(contenedor);
  }

  /* Comprueba una pregunta individual (Temas 2 y 3). */
  function comprobar(tema, i) {
    const p = QUIZ[tema].preguntas[i];
    const id = "cq-" + tema + "-" + i;
    const sel = document.querySelector('input[name="' + id + '"]:checked');
    const caja = document.getElementById(id + "-fb");
    if (!sel) {
      caja.className = "retroalimentacion p-3 rounded bg-warning-subtle border border-warning";
      caja.innerHTML = "Elige una opción antes de comprobar.";
      return null;
    }
    const ok = Number(sel.value) === p.c;
    caja.className = "retroalimentacion p-3 rounded " + (ok
      ? "bg-success-subtle border border-success"
      : "bg-danger-subtle border border-danger");
    caja.innerHTML = (ok
      ? "<strong><i class='fa-solid fa-circle-check'></i> Correcto.</strong> "
      : "<strong><i class='fa-solid fa-circle-xmark'></i> No es esa.</strong> La respuesta es " + p.o[p.c] + ". ")
      + p.e;
    tipografiar(caja);
    return ok;
  }

  /* Ejecuta la calificación completa del Quizz del Tema 1. */
  function ejecutarCalificacionTema1() {
    const datos = QUIZ[1];
    let correctas = 0;
    const aviso = document.getElementById("cq-1-aviso");
    if (aviso) aviso.innerHTML = "";
    avisoPendienteTema[1] = false;

    datos.preguntas.forEach(function (p, i) {
      const id = "cq-1-" + i;
      const tarjeta = document.getElementById(id);
      const sel = document.querySelector('input[name="' + id + '"]:checked');
      const cajaFb = document.getElementById(id + "-fb");
      const estado = document.getElementById(id + "-estado");
      const acertada = !!sel && Number(sel.value) === p.c;
      if (acertada) correctas++;

      if (tarjeta) {
        tarjeta.classList.remove("pregunta-correcta", "pregunta-incorrecta");
        tarjeta.classList.add(acertada ? "pregunta-correcta" : "pregunta-incorrecta");
      }
      if (estado) {
        estado.hidden = false;
        estado.className = "estado-pregunta-quiz " + (acertada ? "correcta" : "incorrecta");
        estado.innerHTML = acertada
          ? '<i class="fa-solid fa-circle-check" aria-hidden="true"></i> Correcto'
          : '<i class="fa-solid fa-circle-xmark" aria-hidden="true"></i> Incorrecto';
      }
      if (cajaFb) {
        cajaFb.className = "retroalimentacion p-3 rounded " + (acertada
          ? "bg-success-subtle border border-success text-success-emphasis"
          : "bg-danger-subtle border border-danger text-danger-emphasis");
        cajaFb.innerHTML =
          '<p class="mb-1 fw-bold">' +
            (acertada
              ? '<i class="fa-solid fa-circle-check me-1" aria-hidden="true"></i> Correcto'
              : '<i class="fa-solid fa-circle-xmark me-1" aria-hidden="true"></i> Incorrecto' + (!sel ? ' (sin responder)' : '')) +
          '</p>' +
          '<div>' + p.e + '</div>';
        tipografiar(cajaFb);
      }
    });

    const total = datos.preguntas.length;
    const aprobado = correctas >= 7;
    aprobados[1] = aprobado;
    actualizarAvance();

    const cajaResultado = document.getElementById("cq-1-resultado");
    if (cajaResultado) {
      cajaResultado.innerHTML =
        '<div class="resultado-quiz ' + (aprobado ? "aprobado" : "no-aprobado") + ' mt-3">' +
          '<p class="puntaje-grande mb-1">Tu puntaje: ' + correctas + ' / ' + total + '</p>' +
          '<p class="mb-0 texto-suave">Revisa debajo de cada pregunta la explicación detallada de la clave.</p>' +
        '</div>';
    }
  }

  /* Limpia todas las respuestas y oculta los resultados del Quizz del Tema 1. */
  function reintentarTema1() {
    const datos = QUIZ[1];
    avisoPendienteTema[1] = false;
    aprobados[1] = false;
    actualizarAvance();

    datos.preguntas.forEach(function (p, i) {
      const id = "cq-1-" + i;
      const tarjeta = document.getElementById(id);
      if (tarjeta) {
        tarjeta.classList.remove("pregunta-correcta", "pregunta-incorrecta");
      }
      document.querySelectorAll('input[name="' + id + '"]').forEach(function (radio) {
        radio.checked = false;
      });
      const estado = document.getElementById(id + "-estado");
      if (estado) {
        estado.hidden = true;
        estado.innerHTML = "";
      }
      const cajaFb = document.getElementById(id + "-fb");
      if (cajaFb) {
        cajaFb.className = "";
        cajaFb.innerHTML = "";
      }
    });

    const aviso = document.getElementById("cq-1-aviso");
    if (aviso) aviso.innerHTML = "";
    const resultado = document.getElementById("cq-1-resultado");
    if (resultado) resultado.innerHTML = "";
  }

  /* Calcula la calificación final del quiz de un tema. */
  function calificar(tema, forzar) {
    const datos = QUIZ[tema];
    if (tema === 1) {
      let sin = 0;
      datos.preguntas.forEach(function (p, i) {
        const sel = document.querySelector('input[name="cq-1-' + i + '"]:checked');
        if (!sel) sin++;
      });

      if (sin > 0 && !forzar && !avisoPendienteTema[1]) {
        avisoPendienteTema[1] = true;
        const aviso = document.getElementById("cq-1-aviso");
        if (aviso) {
          aviso.innerHTML =
            '<div class="alerta-sin-responder p-3 rounded bg-warning-subtle border border-warning mt-3" role="alert">' +
              '<p class="fw-semibold mb-2"><i class="fa-solid fa-triangle-exclamation me-1" aria-hidden="true"></i> Tienes preguntas sin responder. ¿Calificar de todos modos?</p>' +
              '<div class="d-flex flex-wrap gap-2">' +
                '<button type="button" class="btn btn-sm btn-tide btn-confirmar-calificar" data-tema="1">Calificar de todos modos</button>' +
                '<button type="button" class="btn btn-sm btn-outline-secondary btn-cancelar-calificar" data-tema="1">Volver a las preguntas</button>' +
              '</div>' +
            '</div>';
        }
        return;
      }

      ejecutarCalificacionTema1();
      return;
    }

    let correctas = 0;
    let sin = 0;
    datos.preguntas.forEach(function (p, i) {
      const sel = document.querySelector('input[name="cq-' + tema + '-' + i + '"]:checked');
      if (!sel) { sin++; return; }
      if (Number(sel.value) === p.c) correctas++;
    });
    const caja = document.getElementById("cq-" + tema + "-resultado");
    const aprobado = correctas >= APROBAR_CON;
    const total = datos.preguntas.length;
    aprobados[tema] = aprobado && sin === 0;
    if (sin > 0) {
      caja.innerHTML = '<div class="resultado-quiz"><p class="mb-0">Responde las ' + sin + ' preguntas que faltan para calificar.</p></div>';
    } else {
      caja.innerHTML = '<div class="resultado-quiz ' + (aprobado ? "aprobado" : "no-aprobado") + '">' +
        '<p class="fw-semibold mb-1">' + (aprobado ? "Quiz aprobado" : "Quiz no aprobado") + ': ' + correctas + ' de ' + total + '</p>' +
        '<p class="mb-0 texto-suave">' + (aprobado
          ? "Buen trabajo. Puedes pasar a los ejercicios del tema."
          : "Repasa la presentación del tema y vuelve a intentarlo. Se requieren " + APROBAR_CON + " aciertos.") + '</p>' +
        '</div>';
    }
    actualizarAvance();
  }

  /* Eventos: comprobar pregunta, calificar quiz y reintentar, por delegación. */
  document.addEventListener("click", function (evento) {
    const btnPregunta = evento.target.closest(".btn-comprobar-cq");
    if (btnPregunta) {
      comprobar(Number(btnPregunta.dataset.tema), Number(btnPregunta.dataset.i));
      return;
    }
    const btnConfirmar = evento.target.closest(".btn-confirmar-calificar");
    if (btnConfirmar) {
      calificar(Number(btnConfirmar.dataset.tema), true);
      return;
    }
    const btnCancelar = evento.target.closest(".btn-cancelar-calificar");
    if (btnCancelar) {
      avisoPendienteTema[1] = false;
      const aviso = document.getElementById("cq-1-aviso");
      if (aviso) aviso.innerHTML = "";
      return;
    }
    const btnReintentar = evento.target.closest(".btn-reintentar-cq");
    if (btnReintentar) {
      reintentarTema1();
      return;
    }
    const btnQuiz = evento.target.closest(".btn-calificar-cq");
    if (btnQuiz) {
      calificar(Number(btnQuiz.dataset.tema), false);
    }
  });

  function iniciar() {
    document.querySelectorAll("[data-quiz]").forEach(function (contenedor) {
      dibujar(Number(contenedor.dataset.quiz), contenedor);
    });
    actualizarAvance();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
  window.addEventListener("load", function () {
    document.querySelectorAll("[data-quiz]").forEach(tipografiar);
  });

})();
