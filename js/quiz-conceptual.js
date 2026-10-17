/* ==========================================================
   Quiz conceptual · Bloque 1
   Ocho preguntas de opción múltiple por tema. Las fórmulas se
   escriben en LaTeX (entre $…$) y se muestran con MathJax.
   Cada respuesta se comprueba al momento; al final se califica.
   Aprobación: 6 de 8.
   ========================================================== */

(function () {

  const APROBAR_CON = 6;

  const QUIZ = {
    1: {
      titulo: "Tema 1 · Álgebra y lógica",
      preguntas: [
        { q: "¿Cuál es el valor de $2 + 3 \\cdot 4$?",
          o: ["$20$", "$14$", "$24$", "$10$"], c: 1,
          e: "Primero se multiplica: $3 \\cdot 4 = 12$. Después se suma: $2 + 12 = 14$." },
        { q: "Si $x = 4$, ¿cuánto vale $3x + 2$?",
          o: ["$12$", "$14$", "$9$", "$11$"], c: 1,
          e: "$3 \\cdot 4 + 2 = 12 + 2 = 14$." },
        { q: "¿Qué propiedad dice que $a(b + c) = ab + ac$?",
          o: ["Conmutativa", "Asociativa", "Distributiva", "Identidad"], c: 2,
          e: "El factor de afuera multiplica a cada término de adentro: es la propiedad distributiva." },
        { q: "Para despejar $x$ de $x + 9 = 20$, ¿qué se hace en ambos lados?",
          o: ["Sumar $9$", "Restar $9$", "Multiplicar por $9$", "Dividir entre $9$"], c: 1,
          e: "Para eliminar el $+9$ se resta $9$ en ambos lados: $x = 11$." },
        { q: "¿Cuál de estas frases es una proposición?",
          o: ["¿Cuántos años tienes?", "¡Qué día tan bonito!", "Mazatlán está en Sinaloa.", "Estudia para el examen."], c: 2,
          e: "Una proposición es una afirmación que puede ser verdadera o falsa. La pregunta, la exclamación y la orden no tienen valor de verdad." },
        { q: "¿Cuál es la negación de $p \\land q$?",
          o: ["$\\neg p \\land \\neg q$", "$\\neg p \\lor \\neg q$", "$p \\lor q$", "$\\neg p \\land q$"], c: 1,
          e: "Ley de De Morgan: $\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$." },
        { q: "El condicional $p \\rightarrow q$ es falso solo cuando:",
          o: ["$p$ es V y $q$ es F", "$p$ es F y $q$ es V", "$p$ es V y $q$ es V", "$p$ es F y $q$ es F"], c: 0,
          e: "La promesa «si $p$, entonces $q$» solo se rompe cuando $p$ se cumple y $q$ falla." },
        { q: "En C++, la línea <code>x = x + 1;</code> significa:",
          o: ["$x$ es igual a $x + 1$ (afirmación)", "Tomar $x$, sumarle $1$ y guardar el resultado en $x$", "Comparar $x$ con $x + 1$", "Un error de sintaxis"], c: 1,
          e: "En programación el signo $=$ es una asignación: se calcula la parte derecha y el resultado se guarda en la variable de la izquierda." }
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

  /* Pide a MathJax que convierta las fórmulas LaTeX dentro del elemento. */
  function tipografiar(elemento) {
    if (window.MathJax && MathJax.startup && MathJax.typesetPromise) {
      MathJax.startup.promise
        .then(function () { return MathJax.typesetPromise([elemento]); })
        .catch(function () {});
    }
  }

  function actualizarAvance() {
    const n = Object.values(aprobados).filter(Boolean).length;
    avanceTexto.textContent = n + " de 3";
  }

  /* Dibuja el quiz de un tema dentro de su contenedor. */
  function dibujar(tema, contenedor) {
    const datos = QUIZ[tema];
    let html = "";
    datos.preguntas.forEach(function (p, i) {
      const id = "cq-" + tema + "-" + i;
      html += '' +
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
    contenedor.innerHTML = html;
    tipografiar(contenedor);
  }

  /* Comprueba una pregunta y muestra su explicación. */
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

  /* Calcula la calificación final del quiz de un tema. */
  function calificar(tema) {
    const datos = QUIZ[tema];
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

  /* Eventos: comprobar pregunta y calificar quiz, por delegación. */
  document.addEventListener("click", function (evento) {
    const btnPregunta = evento.target.closest(".btn-comprobar-cq");
    if (btnPregunta) {
      comprobar(Number(btnPregunta.dataset.tema), Number(btnPregunta.dataset.i));
      return;
    }
    const btnQuiz = evento.target.closest(".btn-calificar-cq");
    if (btnQuiz) {
      calificar(Number(btnQuiz.dataset.tema));
    }
  });

  document.querySelectorAll("[data-quiz]").forEach(function (contenedor) {
    dibujar(Number(contenedor.dataset.quiz), contenedor);
  });
  actualizarAvance();

})();
