/* ==========================================================
   Quiz · Bloque 2 · Primeros pasos en C++ (Temas 1, 2 y 3)
   - 8 preguntas por tema; se aprueba con 6 o más.
   - Mismo motor que el quiz del Bloque 1 (quiz-conceptual.js),
     con los datos del Bloque 2 y preguntas que pueden incluir código.
   ========================================================== */

(function () {

  const APROBAR_CON = 6;

  const QUIZ = {
    "1": {
      "titulo": "Tema 1 · Tu primer programa y la plantilla de competencia",
      "intro": "Son 8 preguntas de opción múltiple sobre la estructura de un programa, la plantilla y la entrada y salida. Apruebas con 6 aciertos o más. Lee cada código con calma antes de contestar.",
      "preguntas": [
        {
          "titulo": "",
          "q": "<p>¿Para qué sirve <code>using namespace std;</code> en la plantilla?</p>",
          "o": [
            "A) Para no tener que escribir <code>std::</code> antes de <code>cin</code>, <code>cout</code>, <code>endl</code> y los demás nombres de la biblioteca estándar.",
            "B) Para que el compilador genere el programa más rápido.",
            "C) Para incluir todas las bibliotecas de C++ en un solo paso.",
            "D) Para desactivar la sincronización entre los flujos de C++ y los de C."
          ],
          "c": 0,
          "e": "<strong>1. Respuesta: A.</strong> <code>using namespace std;</code> permite usar los nombres de <code>std</code> sin el prefijo. Sobre la opción B: no cambia la velocidad del programa; solo ahorra escritura."
        },
        {
          "titulo": "",
          "q": "<p>¿Por qué en competencia se usa <code>\"\\n\"</code> en lugar de <code>endl</code> para el salto de línea?</p>",
          "o": [
            "A) Porque <code>endl</code> marca error de compilación cuando se usa FastIO.",
            "B) Porque <code>\"\\n\"</code> usa menos memoria en la computadora del juez.",
            "C) Porque <code>endl</code> vacía el búfer cada vez que se usa, y eso vuelve lento un programa que imprime muchas líneas.",
            "D) Porque <code>\"\\n\"</code> convierte los números en texto."
          ],
          "c": 2,
          "e": "<strong>2. Respuesta: C.</strong> <code>endl</code> hace un vaciado del búfer en cada uso; <code>\"\\n\"</code> solo pone el salto. Sobre la opción A: <code>endl</code> sí compila con FastIO; el problema es la lentitud."
        },
        {
          "titulo": "",
          "q": "<p>¿Qué es cierto sobre <code>#include &lt;bits/stdc++.h&gt;</code>?</p>",
          "o": [
            "A) Es la única biblioteca reconocida por el estándar oficial de C++.",
            "B) Incluye toda la biblioteca estándar en una línea, pero es propia del compilador GCC.",
            "C) Hace que el programa use mejor el procesador y evite el TLE.",
            "D) Sin ella no se puede usar el espacio de nombres <code>std</code>."
          ],
          "c": 1,
          "e": "<strong>3. Respuesta: B.</strong> Incluye toda la biblioteca estándar y es propia de GCC. Sobre la opción A: es justo al revés, no forma parte del estándar."
        },
        {
          "titulo": "",
          "q": "<p>Si la entrada es <code>3 4</code>, ¿qué imprime este programa?</p>\n<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin &gt;&gt; a &gt;&gt; b;\n    cout &lt;&lt; a &lt;&lt; &quot;\\n&quot; &lt;&lt; b &lt;&lt; a;\n    return 0;\n}\n</code></pre>",
          "o": [
            "A) <code>3 4 3</code> en una sola línea.",
            "B) <code>343</code> en una sola línea.",
            "C) <code>3</code> en la primera línea y <code>4 3</code> en la segunda.",
            "D) <code>3</code> en la primera línea y <code>43</code> en la segunda."
          ],
          "c": 3,
          "e": "<strong>4. Respuesta: D.</strong> Se imprime <code>3</code>, el salto de línea, y luego <code>4</code> y <code>3</code> sin nada entre ellos. Sobre la opción C: el código no pone ningún espacio entre <code>b</code> y <code>a</code>."
        },
        {
          "titulo": "",
          "q": "<p>Si la entrada es <code>7</code>, ¿qué imprime este programa?</p>\n<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int n;\n    cin &gt;&gt; n;\n    int ans = n + n * 2;\n    cout &lt;&lt; ans;\n    return 0;\n}\n</code></pre>",
          "o": [
            "A) <code>14</code>",
            "B) <code>28</code>",
            "C) <code>21</code>",
            "D) <code>49</code>"
          ],
          "c": 2,
          "e": "<strong>5. Respuesta: C.</strong> Primero la multiplicación: 7 + 7 · 2 = 7 + 14 = 21. Sobre la opción B: 28 sale de sumar primero, (7 + 7) · 2, sin respetar la jerarquía."
        },
        {
          "titulo": "",
          "q": "<p>Si la entrada es <code>5 4</code>, ¿qué imprime este programa?</p>\n<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int x, y;\n    cin &gt;&gt; x &gt;&gt; y;\n    cout &lt;&lt; x * 2 &lt;&lt; &quot; &quot; &lt;&lt; y + 5 &lt;&lt; &quot;\\n&quot;;\n    return 0;\n}\n</code></pre>",
          "o": [
            "A) <code>109</code>",
            "B) <code>10 9</code>",
            "C) <code>10</code> en una línea y <code>9</code> en la siguiente.",
            "D) <code>52 45</code>"
          ],
          "c": 1,
          "e": "<strong>6. Respuesta: B.</strong> Se imprime 10, el espacio <code>\" \"</code> y luego 9. Sobre la opción A: quien olvida el <code>\" \"</code> cree que los números salen pegados."
        },
        {
          "titulo": "",
          "q": "<p>Este fragmento da Compile Error. ¿Por qué?</p>\n<pre><code>int a, b;\ncin &lt;&lt; a &lt;&lt; b;\n</code></pre>",
          "o": [
            "A) Las variables <code>a</code> y <code>b</code> se deben declarar en líneas separadas.",
            "B) <code>cin</code> solo puede leer una variable por programa.",
            "C) Falta escribir <code>std::</code> antes de <code>cin</code>, aunque se haya puesto <code>using namespace std;</code>.",
            "D) <code>cin</code> necesita el operador <code>&gt;&gt;</code>, no <code>&lt;&lt;</code>."
          ],
          "c": 3,
          "e": "<strong>7. Respuesta: D.</strong> <code>cin</code> lee con <code>&gt;&gt;</code>; con <code>&lt;&lt;</code> el compilador no encuentra cómo hacerlo. Sobre la opción A: declarar varias variables en una línea, separadas por comas, es válido."
        },
        {
          "titulo": "",
          "q": "<p>¿Cuál es la forma correcta de activar la entrada y salida rápida de la plantilla?</p>",
          "o": [
            "A) <code>ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);</code>",
            "B) <code>using namespace std::fast_io;</code>",
            "C) <code>#include &lt;fastio.h&gt;</code>",
            "D) <code>std::endl(false); cin.flush(NULL);</code>"
          ],
          "c": 0,
          "e": "<strong>8. Respuesta: A.</strong> Son las instrucciones que guarda el <code>#define FastIO</code> de la plantilla. Sobre la opción C: <code>&lt;fastio.h&gt;</code> no existe."
        }
      ]
    },
    "2": {
      "titulo": "Tema 2 · Variables, tipos y operadores",
      "intro": "Son 8 preguntas de opción múltiple sobre tipos de datos y operadores. Apruebas con 6 aciertos o más.",
      "preguntas": [
        {
          "titulo": "",
          "q": "<p>Un programa tiene <code>const int DIAS = 7;</code> y más abajo la línea <code>DIAS = 8;</code>. ¿Qué pasa?</p>",
          "o": [
            "A) Desde esa línea, <code>DIAS</code> vale 8.",
            "B) La línea se ignora y <code>DIAS</code> sigue valiendo 7.",
            "C) El programa compila, pero falla al llegar a esa línea.",
            "D) El programa no compila."
          ],
          "c": 3,
          "e": "<strong>1. Respuesta: D.</strong> Cambiar una <code>const</code> es un error que detecta el compilador. Sobre la opción C: el error no espera a la ejecución; el programa ni siquiera se genera."
        },
        {
          "titulo": "",
          "q": "<p>Hay N alumnos y en cada mesa caben K. ¿Qué expresión da el número de mesas necesarias, para cualquier par de enteros positivos?</p>",
          "o": [
            "A) <code>N / K</code>",
            "B) <code>N / K + 1</code>",
            "C) <code>(N + K - 1) / K</code>",
            "D) <code>(N + K) / K</code>"
          ],
          "c": 2,
          "e": "<strong>2. Respuesta: C.</strong> Es el redondeo hacia arriba con enteros. Sobre la opción D: da una mesa de más cuando N es múltiplo de K (9 y 3 darían 4)."
        },
        {
          "titulo": "",
          "q": "<p>Si <code>x</code> vale 10, ¿cuál de estas expresiones es verdadera?</p>",
          "o": [
            "A) <code>x &gt; 5 &amp;&amp; x &lt; 10</code>",
            "B) <code>x &gt;= 10 &amp;&amp; x % 2 == 0</code>",
            "C) <code>!(x == 10)</code>",
            "D) <code>x &lt; 5 || x &gt; 10</code>"
          ],
          "c": 1,
          "e": "<strong>3. Respuesta: B.</strong> 10 ≥ 10 es verdadero y 10 % 2 == 0 también. Sobre la opción A: <code>x &lt; 10</code> es falso cuando x vale 10."
        },
        {
          "titulo": "",
          "q": "<p>¿Qué imprime este fragmento?</p>\n<pre><code>int x = 17, y = 5;\ncout &lt;&lt; x / y + x % y * 2;\n</code></pre>",
          "o": [
            "A) <code>7</code>",
            "B) <code>11</code>",
            "C) <code>6.4</code>",
            "D) <code>10</code>"
          ],
          "c": 0,
          "e": "<strong>4. Respuesta: A.</strong> 17 / 5 = 3, 17 % 5 = 2, 2 · 2 = 4 y 3 + 4 = 7. Sobre la opción D: 10 sale de sumar primero, (3 + 2) · 2, sin respetar que <code>*</code> va antes que <code>+</code>."
        },
        {
          "titulo": "",
          "q": "<p>¿Qué imprime este fragmento? (El carácter <code>'A'</code> vale 65 en la tabla ASCII.)</p>\n<pre><code>char c = 'A';\nbool b = true;\ncout &lt;&lt; c + b;\n</code></pre>",
          "o": [
            "A) <code>A1</code>",
            "B) <code>66</code>",
            "C) <code>true</code>",
            "D) Error de compilación."
          ],
          "c": 1,
          "e": "<strong>5. Respuesta: B.</strong> En una suma, <code>'A'</code> vale 65 y <code>true</code> vale 1: 65 + 1 = 66. Sobre la opción A: <code>cout</code> no pega los valores; primero se hace la suma."
        },
        {
          "titulo": "",
          "q": "<p>¿Qué imprime este fragmento?</p>\n<pre><code>double val = 5.5;\ncout &lt;&lt; fixed &lt;&lt; setprecision(3) &lt;&lt; val;\n</code></pre>",
          "o": [
            "A) <code>5.5</code>",
            "B) <code>5.50</code>",
            "C) <code>5.500</code>",
            "D) <code>005.5</code>"
          ],
          "c": 2,
          "e": "<strong>6. Respuesta: C.</strong> <code>fixed</code> con <code>setprecision(3)</code> pone exactamente tres decimales y rellena con ceros. Sobre la opción A: sin <code>fixed</code> sí saldría <code>5.5</code>."
        },
        {
          "titulo": "",
          "q": "<p>Este fragmento debería imprimir <code>1000000000000</code>, pero no lo hace. ¿Por qué?</p>\n<pre><code>int a = 1000000;\nint b = 1000000;\nlong long ans = a * b;\ncout &lt;&lt; ans;\n</code></pre>",
          "o": [
            "A) <code>ans</code> debería ser <code>double</code> para guardar un número tan grande.",
            "B) Falta incluir <code>&lt;cmath&gt;</code>.",
            "C) El operador <code>*</code> no acepta números mayores que 1000.",
            "D) <code>a * b</code> se calcula como <code>int</code>, se desborda y el resultado ya roto se guarda en <code>ans</code>."
          ],
          "c": 3,
          "e": "<strong>7. Respuesta: D.</strong> La multiplicación usa el tipo de sus operandos, <code>int</code>, y 10¹² no cabe. Sobre la opción A: <code>long long</code> sí alcanza; el problema es dónde se hace la cuenta."
        },
        {
          "titulo": "",
          "q": "<p>Este fragmento no compila. ¿Por qué?</p>\n<pre><code>double x = 10.5;\ndouble y = 2.5;\ncout &lt;&lt; x % y;\n</code></pre>",
          "o": [
            "A) El operador <code>%</code> solo funciona con enteros.",
            "B) <code>y</code> no puede tener decimales cuando se divide.",
            "C) <code>cout</code> no puede imprimir el resultado de una operación.",
            "D) Falta <code>cin.tie(NULL);</code>."
          ],
          "c": 0,
          "e": "<strong>8. Respuesta: A.</strong> <code>%</code> está definido solo para enteros. Sobre la opción B: los <code>double</code> sí se pueden dividir con <code>/</code>; lo que no se puede es usar <code>%</code>."
        }
      ]
    },
    "3": {
      "titulo": "Tema 3 · Condicionales",
      "intro": "Son 8 preguntas de opción múltiple sobre condicionales. Apruebas con 6 aciertos o más.",
      "preguntas": [
        {
          "titulo": "",
          "q": "<p>¿Cuánto vale en C++ la expresión <code>(5 &gt; 3) + !(2 == 4)</code>?</p>",
          "o": [
            "A) 0",
            "B) 1",
            "C) 2",
            "D) No compila, porque no se pueden sumar comparaciones."
          ],
          "c": 2,
          "e": "<strong>1. Respuesta: C.</strong> <code>5 &gt; 3</code> vale 1; <code>2 == 4</code> vale 0 y <code>!0</code> vale 1. 1 + 1 = 2. Sobre la opción D: en C++ las comparaciones son números y sí se pueden sumar."
        },
        {
          "titulo": "",
          "q": "<p>Por las leyes de De Morgan, ¿a qué expresión equivale <code>!(X &gt;= 10 || Y &lt; 5)</code>?</p>",
          "o": [
            "A) <code>X &lt; 10 || Y &gt;= 5</code>",
            "B) <code>X &lt; 10 &amp;&amp; Y &gt;= 5</code>",
            "C) <code>X &lt;= 10 &amp;&amp; Y &gt; 5</code>",
            "D) <code>!(X &gt;= 10) || !(Y &lt; 5)</code>"
          ],
          "c": 1,
          "e": "<strong>2. Respuesta: B.</strong> La negación de un \"O\" es un \"Y\" con cada parte negada: <code>X &lt; 10 &amp;&amp; Y &gt;= 5</code>. Sobre la opción A: niega cada parte, pero se le olvida cambiar <code>||</code> por <code>&amp;&amp;</code>."
        },
        {
          "titulo": "",
          "q": "<p>¿Qué pasa al ejecutar este fragmento?</p>\n<pre><code>int x = 0;\nif (x != 0 &amp;&amp; 10 / x &gt; 1) {\n    cout &lt;&lt; &quot;SI&quot;;\n}\n</code></pre>",
          "o": [
            "A) La condición es falsa y no se llega a calcular <code>10 / x</code>, así que no imprime nada y no hay error.",
            "B) El programa falla por dividir entre cero.",
            "C) No compila.",
            "D) Imprime <code>SI</code>."
          ],
          "c": 0,
          "e": "<strong>3. Respuesta: A.</strong> Por el cortocircuito, como <code>x != 0</code> es falso, <code>10 / x</code> nunca se calcula. Sobre la opción B: la división entre cero sí fallaría, pero no se llega a ejecutar."
        },
        {
          "titulo": "",
          "q": "<p>¿Qué imprime este fragmento?</p>\n<pre><code>int val = 15;\nif (val % 3 == 0) {\n    cout &lt;&lt; &quot;A&quot;;\n}\nif (val % 5 == 0) {\n    cout &lt;&lt; &quot;B&quot;;\n} else if (val % 15 == 0) {\n    cout &lt;&lt; &quot;C&quot;;\n}\n</code></pre>",
          "o": [
            "A) <code>A</code>",
            "B) <code>ABC</code>",
            "C) <code>AC</code>",
            "D) <code>AB</code>"
          ],
          "c": 3,
          "e": "<strong>4. Respuesta: D.</strong> Son dos <code>if</code> separados. El primero imprime <code>A</code>. En el segundo, <code>15 % 5 == 0</code> es verdadero, imprime <code>B</code> y el <code>else if</code> ya no se revisa. Sobre la opción B: el <code>else if</code> solo se revisa si la condición de su <code>if</code> fue falsa."
        },
        {
          "titulo": "",
          "q": "<p>¿Qué imprime este fragmento?</p>\n<pre><code>int k = 2;\nswitch (k) {\n    case 1:\n        cout &lt;&lt; &quot;1&quot;;\n    case 2:\n        cout &lt;&lt; &quot;2&quot;;\n    case 3:\n        cout &lt;&lt; &quot;3&quot;;\n        break;\n    default:\n        cout &lt;&lt; &quot;D&quot;;\n}\n</code></pre>",
          "o": [
            "A) <code>23</code>",
            "B) <code>2</code>",
            "C) <code>23D</code>",
            "D) <code>D</code>"
          ],
          "c": 0,
          "e": "<strong>5. Respuesta: A.</strong> Entra en <code>case 2</code>, imprime <code>2</code>, sigue de largo a <code>case 3</code> porque no hay <code>break</code>, imprime <code>3</code> y ahí sí hay <code>break</code>. Sobre la opción C: el <code>break</code> del <code>case 3</code> impide llegar al <code>default</code>."
        },
        {
          "titulo": "",
          "q": "<p>¿Qué imprime este fragmento?</p>\n<pre><code>int x = 4, y = 8;\nif (x * 2 == y) {\n    if (y % x == 0) {\n        if (x &gt; y) {\n            cout &lt;&lt; &quot;P&quot;;\n        } else {\n            cout &lt;&lt; &quot;Q&quot;;\n        }\n    } else {\n        cout &lt;&lt; &quot;R&quot;;\n    }\n} else {\n    cout &lt;&lt; &quot;S&quot;;\n}\n</code></pre>",
          "o": [
            "A) <code>P</code>",
            "B) <code>R</code>",
            "C) <code>S</code>",
            "D) <code>Q</code>"
          ],
          "c": 3,
          "e": "<strong>6. Respuesta: D.</strong> 4 · 2 == 8 es verdadero, 8 % 4 == 0 también, y 4 &gt; 8 es falso, así que imprime <code>Q</code>. Sobre la opción A: quien no revisa el tercer <code>if</code> cree que llega a <code>P</code>."
        },
        {
          "titulo": "",
          "q": "<p>¿Qué imprime este fragmento si la entrada es <code>5</code>?</p>\n<pre><code>int n;\ncin &gt;&gt; n;\nif (n = 10) {\n    cout &lt;&lt; &quot;DIEZ\\n&quot;;\n} else {\n    cout &lt;&lt; &quot;DIFERENTE\\n&quot;;\n}\n</code></pre>",
          "o": [
            "A) <code>DIFERENTE</code>, porque 5 no es igual a 10.",
            "B) No compila.",
            "C) <code>DIEZ</code>, porque <code>n = 10</code> guarda 10 en <code>n</code> y 10 cuenta como verdadero.",
            "D) El programa falla al ejecutarse."
          ],
          "c": 2,
          "e": "<strong>7. Respuesta: C.</strong> <code>=</code> asigna; <code>n</code> queda en 10 y 10 es distinto de 0, o sea verdadero. Sobre la opción A: es lo que el programador quería, pero no lo que escribió."
        },
        {
          "titulo": "",
          "q": "<p>Se quiere revisar que N esté fuera del intervalo [20, 80], es decir, que sea menor que 20 o mayor que 80. ¿Qué condición es la correcta?</p>",
          "o": [
            "A) <code>N &lt; 20 &amp;&amp; N &gt; 80</code>",
            "B) <code>N &lt; 20 || N &gt; 80</code>",
            "C) <code>N &lt;= 20 || N &gt;= 80</code>",
            "D) <code>!(N &gt;= 20 || N &lt;= 80)</code>"
          ],
          "c": 1,
          "e": "<strong>8. Respuesta: B.</strong> \"Menor que 20 o mayor que 80\" se traduce directo con <code>||</code>. Sobre la opción C: con <code>&lt;=</code> y <code>&gt;=</code> también aceptaría el 20 y el 80, que sí están en el intervalo."
        }
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
    let html = '<p class="mb-3">' + datos.intro + '</p>';
    let subtemaActual = null;

    datos.preguntas.forEach(function (p, i) {
      if (p.subtema && p.subtema !== subtemaActual) {
        subtemaActual = p.subtema;
        html += '<h4 class="subtitulo-grupo-practica">' + p.subtema + '</h4>';
      }
      const id = "cq-" + tema + "-" + i;
      const tituloHtml = p.titulo ? ('<strong>' + p.titulo + '</strong> ') : '';
      html +=
        '<div class="tarjeta-pregunta" id="' + id + '">' +
          '<div class="d-flex justify-content-between align-items-start gap-2 mb-3">' +
            '<div class="mb-0 enunciado-quiz"><span class="numero">' + (i + 1) + '</span>' + tituloHtml + p.q + '</div>' +
            '<span class="estado-pregunta-quiz" id="' + id + '-estado" hidden></span>' +
          '</div>' +
          '<div role="radiogroup" aria-label="Opciones de la pregunta ' + (i + 1) + ' del Tema ' + tema + '">' +
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
      '<div id="cq-' + tema + '-aviso" aria-live="assertive"></div>' +
      '<div id="cq-' + tema + '-resultado" aria-live="polite"></div>' +
      '<div class="d-flex flex-wrap gap-2 align-items-center mt-3">' +
        '<button type="button" class="btn btn-ocean btn-calificar-cq" data-tema="' + tema + '" aria-label="Calificar quiz del Tema ' + tema + '">' +
          '<i class="fa-solid fa-clipboard-check me-1" aria-hidden="true"></i> Calificar' +
        '</button>' +
        '<button type="button" class="btn btn-outline-secondary btn-reintentar-cq" data-tema="' + tema + '" aria-label="Reintentar quiz del Tema ' + tema + '">' +
          '<i class="fa-solid fa-rotate-right me-1" aria-hidden="true"></i> Reintentar' +
        '</button>' +
        '<span class="small text-secondary ms-1">Aprueba con ' + APROBAR_CON + ' o más de ' + datos.preguntas.length + '</span>' +
      '</div>';

    contenedor.innerHTML = html;
    tipografiar(contenedor);
  }

  /* Ejecuta la calificación completa del Quiz de un tema. */
  function ejecutarCalificacion(tema) {
    const datos = QUIZ[tema];
    let correctas = 0;
    const aviso = document.getElementById("cq-" + tema + "-aviso");
    if (aviso) aviso.innerHTML = "";
    avisoPendienteTema[tema] = false;

    datos.preguntas.forEach(function (p, i) {
      const id = "cq-" + tema + "-" + i;
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
    const aprobado = correctas >= APROBAR_CON;
    aprobados[tema] = aprobado;
    actualizarAvance();

    const cajaResultado = document.getElementById("cq-" + tema + "-resultado");
    if (cajaResultado) {
      cajaResultado.innerHTML =
        '<div class="resultado-quiz ' + (aprobado ? "aprobado" : "no-aprobado") + ' mt-3">' +
          '<div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-1">' +
            '<p class="puntaje-grande mb-0">Tu puntaje: ' + correctas + ' / ' + total + '</p>' +
            '<span class="estado-pregunta-quiz ' + (aprobado ? "correcta" : "incorrecta") + ' fs-6 px-3 py-1">' +
              (aprobado
                ? '<i class="fa-solid fa-circle-check" aria-hidden="true"></i> Aprobado'
                : '<i class="fa-solid fa-circle-xmark" aria-hidden="true"></i> No aprobado') +
            '</span>' +
          '</div>' +
          '<p class="mb-0 texto-suave">' +
            (aprobado
              ? "Aprobado. Revisa debajo de cada pregunta la explicación detallada de la clave."
              : "No aprobado (se requieren al menos " + APROBAR_CON + " aciertos). Revisa las explicaciones de cada pregunta y vuelve a intentarlo.") +
          '</p>' +
        '</div>';
    }
  }

  /* Limpia las respuestas y oculta los resultados del Quiz de un tema. */
  function reintentar(tema) {
    const datos = QUIZ[tema];
    avisoPendienteTema[tema] = false;
    aprobados[tema] = false;
    actualizarAvance();

    datos.preguntas.forEach(function (p, i) {
      const id = "cq-" + tema + "-" + i;
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

    const aviso = document.getElementById("cq-" + tema + "-aviso");
    if (aviso) aviso.innerHTML = "";
    const resultado = document.getElementById("cq-" + tema + "-resultado");
    if (resultado) resultado.innerHTML = "";
  }

  /* Verifica si hay preguntas sin responder antes de calificar. */
  function calificar(tema, forzar) {
    const datos = QUIZ[tema];
    let sin = 0;
    datos.preguntas.forEach(function (p, i) {
      const sel = document.querySelector('input[name="cq-' + tema + '-' + i + '"]:checked');
      if (!sel) sin++;
    });

    if (sin > 0 && !forzar && !avisoPendienteTema[tema]) {
      avisoPendienteTema[tema] = true;
      const aviso = document.getElementById("cq-" + tema + "-aviso");
      if (aviso) {
        aviso.innerHTML =
          '<div class="alerta-sin-responder p-3 rounded bg-warning-subtle border border-warning mt-3" role="alert">' +
            '<p class="fw-semibold mb-2"><i class="fa-solid fa-triangle-exclamation me-1" aria-hidden="true"></i> Tienes preguntas sin responder. ¿Calificar de todos modos?</p>' +
            '<div class="d-flex flex-wrap gap-2">' +
              '<button type="button" class="btn btn-sm btn-tide btn-confirmar-calificar" data-tema="' + tema + '">Calificar de todos modos</button>' +
              '<button type="button" class="btn btn-sm btn-outline-secondary btn-cancelar-calificar" data-tema="' + tema + '">Volver a las preguntas</button>' +
            '</div>' +
          '</div>';
      }
      return;
    }

    ejecutarCalificacion(tema);
  }

  /* Eventos delegados */
  document.addEventListener("click", function (evento) {
    const btnConfirmar = evento.target.closest(".btn-confirmar-calificar");
    if (btnConfirmar) {
      calificar(Number(btnConfirmar.dataset.tema), true);
      return;
    }
    const btnCancelar = evento.target.closest(".btn-cancelar-calificar");
    if (btnCancelar) {
      const t = Number(btnCancelar.dataset.tema);
      avisoPendienteTema[t] = false;
      const aviso = document.getElementById("cq-" + t + "-aviso");
      if (aviso) aviso.innerHTML = "";
      return;
    }
    const btnReintentar = evento.target.closest(".btn-reintentar-cq");
    if (btnReintentar) {
      reintentar(Number(btnReintentar.dataset.tema));
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
