/* Banco de ejercicios del Bloque 2 · 10 por tema (5 guiados y 5 independientes).
   Generado desde las guías revisadas de claude/bloque2/. */
const INTRO_PRACTICA_BLOQUE2 = {
 "1": "<p>La práctica tiene dos partes. En la parte A trabajan en parejas leyendo, siguiendo y corrigiendo programas cortos, para perderle el miedo a la sintaxis y a los mensajes del compilador. En la parte B cada quien escribe sus propios programas.</p>\n<p>Solo se vale usar lo que ya vimos: variables <code>int</code>, suma, resta y multiplicación, <code>cin</code> y <code>cout</code>. Nada de <code>if</code>, ciclos, arreglos, vectores, <code>string</code> ni funciones propias.</p>",
 "2": "<p>En la parte A trabajan en parejas siguiendo y corrigiendo programas. En la parte B cada quien escribe los suyos. Todo se resuelve con fórmulas: nada de <code>if</code>, ciclos, arreglos, vectores, <code>string</code> ni funciones propias. Todos los programas usan la plantilla oficial del curso.</p>",
 "3": "<p>En la parte A trabajan en parejas siguiendo y corrigiendo programas. En la parte B cada quien escribe los suyos. Se vale todo lo visto hasta ahora más los condicionales; nada de ciclos, arreglos, vectores, <code>string</code> ni funciones propias. Todos los programas usan la plantilla oficial del curso.</p>"
};

const EJERCICIOS_BLOQUE2 = [
 {
  "clase": 1,
  "grupo": "Parte A · Ejercicios guiados (en parejas)",
  "n": 1,
  "titulo": "Ejercicio 1 · ¿Qué imprime este programa?",
  "enunciado": "<p>Si la entrada es <code>8 5</code>, ¿qué aparece exactamente en la pantalla?</p>\n<pre><code>#include &lt;iostream&gt;\n\nint main() {\n    int a, b;\n    std::cin &gt;&gt; a &gt;&gt; b;\n    int r = a * b;\n    std::cout &lt;&lt; r;\n    return 0;\n}\n</code></pre>",
  "tipo": "texto",
  "aceptadas": [
   "40"
  ],
  "solucion": "<p class=\"mb-2\"><strong>Respuesta:</strong> <code>40</code></p><p class=\"mb-0\">Se leen a = 8 y b = 5; 8 × 5 = 40 se imprime sin espacio ni salto de línea.</p>"
 },
 {
  "clase": 1,
  "grupo": "Parte A · Ejercicios guiados (en parejas)",
  "n": 2,
  "titulo": "Ejercicio 2 · Lectura en dos líneas.",
  "enunciado": "<p>La entrada trae <code>12</code> en la primera línea y <code>4</code> en la segunda. ¿Qué imprime el programa, línea por línea?</p>\n<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int x, y;\n    cin &gt;&gt; x;\n    cin &gt;&gt; y;\n    cout &lt;&lt; x + y &lt;&lt; &quot;\\n&quot; &lt;&lt; x - y &lt;&lt; &quot;\\n&quot;;\n    return 0;\n}\n</code></pre>",
  "tipo": "texto",
  "aceptadas": [
   "16 8"
  ],
  "solucion": "<p class=\"mb-2\"><strong>Respuesta:</strong> <code>16</code> en la primera línea y <code>8</code> en la segunda</p><p class=\"mb-0\">Se leen x = 12 y y = 4. Se imprime la suma, el salto de línea y la resta.</p>"
 },
 {
  "clase": 1,
  "grupo": "Parte A · Ejercicios guiados (en parejas)",
  "n": 3,
  "titulo": "Ejercicio 3 · Encuentra y corrige los dos errores.",
  "enunciado": "<p>Este programa debería imprimir el doble de un número, pero no compila. Encuentra los dos errores y escribe las líneas correctas.</p>\n<pre><code>#include &lt;iostream&gt;\n\nint main() {\n    int numero;\n    std::cin &lt;&lt; numero;\n    int doble = numero * 2;\n    std::cout &gt;&gt; doble &gt;&gt; &quot;\\n&quot;;\n    return 0;\n}\n</code></pre>",
  "tipo": "autoevaluacion",
  "solucion": "<p class=\"mb-2\"><strong>Respuesta:</strong> <code>std::cin &gt;&gt; numero;</code> y <code>std::cout &lt;&lt; doble &lt;&lt; \"\\n\";</code></p><p class=\"mb-0\">Los dos operadores estaban volteados: <code>cin</code> usa <code>&gt;&gt;</code> y <code>cout</code> usa <code>&lt;&lt;</code>.</p>"
 },
 {
  "clase": 1,
  "grupo": "Parte A · Ejercicios guiados (en parejas)",
  "n": 4,
  "titulo": "Ejercicio 4 · Corrige el formato para el juez.",
  "enunciado": "<p>Un compañero envió este programa a un problema que pide el triple de las canicas recibidas, y el juez le respondió Wrong Answer. ¿Por qué falla y cómo debe quedar?</p>\n<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int canicas;\n    cout &lt;&lt; &quot;Ingresa la cantidad de canicas: &quot;;\n    cin &gt;&gt; canicas;\n    cout &lt;&lt; &quot;El triple es: &quot; &lt;&lt; canicas * 3 &lt;&lt; endl;\n    return 0;\n}\n</code></pre>",
  "tipo": "autoevaluacion",
  "solucion": "<p class=\"mb-2\"><strong>Respuesta:</strong> Quitar la línea <code>cout &lt;&lt; \"Ingresa la cantidad de canicas: \";</code> y dejar la salida como <code>cout &lt;&lt; canicas * 3 &lt;&lt; \"\\n\";</code></p><p class=\"mb-0\">El juez compara carácter por carácter. Con la entrada <code>4</code> espera <code>12</code>, no <code>Ingresa la cantidad de canicas: El triple es: 12</code>.</p>"
 },
 {
  "clase": 1,
  "grupo": "Parte A · Ejercicios guiados (en parejas)",
  "n": 5,
  "titulo": "Ejercicio 5 · Completa la línea que falta.",
  "enunciado": "<p>El programa calcula los kilogramos de mariscos descargados en el puerto a partir del número de cajas y el peso de cada caja. Falta la línea que lee los datos.</p>\n<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    int cajas, kg_por_caja;\n    // Escribe aquí la línea que lee los dos datos\n\n    int peso_total = cajas * kg_por_caja;\n    cout &lt;&lt; peso_total &lt;&lt; &quot;\\n&quot;;\n    return 0;\n}\n</code></pre>",
  "tipo": "texto",
  "codigo": true,
  "aceptadas": [
   "cin >> cajas >> kg_por_caja;",
   "cin >> cajas; cin >> kg_por_caja;"
  ],
  "solucion": "<p class=\"mb-2\"><strong>Respuesta:</strong> <code>cin &gt;&gt; cajas &gt;&gt; kg_por_caja;</code></p><p class=\"mb-0\">Se leen los dos datos antes de multiplicarlos.</p>"
 },
 {
  "clase": 1,
  "grupo": "Parte B · Ejercicios independientes",
  "n": 6,
  "titulo": "Ejercicio 6 · Carretas en el malecón.",
  "enunciado": "<p>Los fines de semana se instalan carretas de artesanías a lo largo del malecón de Mazatlán. Cada carreta paga la misma cuota al municipio, y los inspectores quieren saber cuánto se junta en un día.</p>\n<p>Se conocen C, el número de carretas instaladas, y M, la cuota en pesos que paga cada una. Imprime cuánto se recauda en total.</p>\n<p>Restricciones: 1 ≤ C ≤ 1000; 1 ≤ M ≤ 500.</p>\n<div class=\"table-responsive\"><table class=\"table table-sm lectura-tabla\">\n<thead>\n<tr>\n<th>Caso</th>\n<th>Entrada</th>\n<th>Salida</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td><code>15 200</code></td>\n<td><code>3000</code></td>\n</tr>\n<tr>\n<td>2</td>\n<td><code>50 150</code></td>\n<td><code>7500</code></td>\n</tr>\n<tr>\n<td>3 (valores mínimos)</td>\n<td><code>1 1</code></td>\n<td><code>1</code></td>\n</tr>\n</tbody>\n</table></div>",
  "tipo": "programa",
  "solucion": "<p class=\"mb-2\"><strong>Idea de solución:</strong> Leer C y M, multiplicarlos e imprimir el resultado con salto de línea.</p><p class=\"mb-1\"><strong>Código de referencia:</strong></p><pre><code>// Ejercicio 6 · Carretas en el malecón\n#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;                       // Entrada y salida rápida\n    int C, M;                     // Carretas y cuota por carreta\n    cin &gt;&gt; C &gt;&gt; M;                // Se leen en la misma línea\n    cout &lt;&lt; C * M &lt;&lt; &quot;\\n&quot;;        // Recaudación total\n    return 0;\n}</code></pre>",
  "introGrupo": "<p>Todos se resuelven con la plantilla oficial del curso.</p>"
 },
 {
  "clase": 1,
  "grupo": "Parte B · Ejercicios independientes",
  "n": 7,
  "titulo": "Ejercicio 7 · Boletos para los Venados.",
  "enunciado": "<p>Un grupo de bachillerato va al estadio Teodoro Mariscal a ver a los Venados de Mazatlán. Compran boletos en dos zonas: lateral y general.</p>\n<p>Se conocen L, el número de boletos de zona lateral; P_L, el precio de cada boleto lateral; G, el número de boletos de zona general, y P_G, el precio de cada boleto general. Los cuatro datos vienen en una línea, en ese orden. Imprime cuánto pagó el grupo en total.</p>\n<p>Restricciones: 0 ≤ L, G ≤ 100; 1 ≤ P_L, P_G ≤ 1000.</p>\n<div class=\"table-responsive\"><table class=\"table table-sm lectura-tabla\">\n<thead>\n<tr>\n<th>Caso</th>\n<th>Entrada</th>\n<th>Salida</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td><code>4 250 6 100</code></td>\n<td><code>1600</code></td>\n</tr>\n<tr>\n<td>2</td>\n<td><code>2 300 0 120</code></td>\n<td><code>600</code></td>\n</tr>\n<tr>\n<td>3 (nadie compra en una zona)</td>\n<td><code>0 500 5 200</code></td>\n<td><code>1000</code></td>\n</tr>\n</tbody>\n</table></div>",
  "tipo": "programa",
  "solucion": "<p class=\"mb-2\"><strong>Idea de solución:</strong> Leer los cuatro datos, calcular L · P_L + G · P_G e imprimirlo. Sirve para recordar la jerarquía de operaciones del Bloque 1: las multiplicaciones van antes que la suma, sin necesidad de paréntesis.</p><p class=\"mb-1\"><strong>Código de referencia:</strong></p><pre><code>// Ejercicio 7 · Boletos para los Venados\n#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;                            // Entrada y salida rápida\n    int L, PL, G, PG;                  // Boletos y precios de cada zona\n    cin &gt;&gt; L &gt;&gt; PL &gt;&gt; G &gt;&gt; PG;         // Los cuatro datos en orden\n    cout &lt;&lt; L * PL + G * PG &lt;&lt; &quot;\\n&quot;;   // Primero las multiplicaciones, luego la suma\n    return 0;\n}</code></pre>"
 },
 {
  "clase": 1,
  "grupo": "Parte B · Ejercicios independientes",
  "n": 8,
  "titulo": "Ejercicio 8 · La fila al revés.",
  "enunciado": "<p>En la fila de la cafetería hay tres alumnos y el prefecto anotó sus números de credencial en el orden en que llegaron. A la hora de entregar las órdenes se atiende primero al último que llegó.</p>\n<p>Se conocen A, B y C, los números de credencial en el orden de llegada, todos en una línea. Imprime los tres números en orden inverso, cada uno en su propia línea.</p>\n<p>Restricciones: 1 ≤ A, B, C ≤ 1000.</p>\n<div class=\"table-responsive\"><table class=\"table table-sm lectura-tabla\">\n<thead>\n<tr>\n<th>Caso</th>\n<th>Entrada</th>\n<th>Salida</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td><code>4 7 1</code></td>\n<td><code>1</code><br><code>7</code><br><code>4</code></td>\n</tr>\n<tr>\n<td>2</td>\n<td><code>100 25 300</code></td>\n<td><code>300</code><br><code>25</code><br><code>100</code></td>\n</tr>\n<tr>\n<td>3 (los tres iguales)</td>\n<td><code>1 1 1</code></td>\n<td><code>1</code><br><code>1</code><br><code>1</code></td>\n</tr>\n</tbody>\n</table></div>",
  "tipo": "programa",
  "solucion": "<p class=\"mb-2\"><strong>Idea de solución:</strong> Leer A, B y C e imprimir C, B y A, cada uno seguido de <code>\"\\n\"</code>. No hay que calcular nada; lo que se practica es el formato de salida.</p><p class=\"mb-1\"><strong>Código de referencia:</strong></p><pre><code>// Ejercicio 8 · La fila al revés\n#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;                       // Entrada y salida rápida\n    int A, B, C;                  // Credenciales en orden de llegada\n    cin &gt;&gt; A &gt;&gt; B &gt;&gt; C;           // Se leen las tres\n    cout &lt;&lt; C &lt;&lt; &quot;\\n&quot;;            // Primero el último que llegó\n    cout &lt;&lt; B &lt;&lt; &quot;\\n&quot;;            // Luego el de en medio\n    cout &lt;&lt; A &lt;&lt; &quot;\\n&quot;;            // Al final el primero\n    return 0;\n}</code></pre>"
 },
 {
  "clase": 1,
  "grupo": "Parte B · Ejercicios independientes",
  "n": 9,
  "titulo": "Ejercicio 9 · El clavadista de Olas Altas.",
  "enunciado": "<p>En Olas Altas los clavadistas se lanzan al mar desde la roca. Los entrenadores calculan la altura del salto con el tiempo de caída, usando la fórmula simplificada D = 5 · t · t, donde D es la altura en metros y t el tiempo en segundos.</p>\n<p>Se conoce t, los segundos que el clavadista pasa en el aire. Imprime la altura D.</p>\n<p>Restricciones: 1 ≤ t ≤ 10.</p>\n<div class=\"table-responsive\"><table class=\"table table-sm lectura-tabla\">\n<thead>\n<tr>\n<th>Caso</th>\n<th>Entrada</th>\n<th>Salida</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td><code>2</code></td>\n<td><code>20</code></td>\n</tr>\n<tr>\n<td>2</td>\n<td><code>3</code></td>\n<td><code>45</code></td>\n</tr>\n<tr>\n<td>3 (tiempo mínimo)</td>\n<td><code>1</code></td>\n<td><code>5</code></td>\n</tr>\n</tbody>\n</table></div>",
  "tipo": "programa",
  "solucion": "<p class=\"mb-2\"><strong>Idea de solución:</strong> Leer t e imprimir <code>5 * t * t</code>.</p><p class=\"mb-1\"><strong>Código de referencia:</strong></p><pre><code>// Ejercicio 9 · El clavadista de Olas Altas\n#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;                       // Entrada y salida rápida\n    int t;                        // Segundos en el aire\n    cin &gt;&gt; t;                     // Se lee el tiempo\n    cout &lt;&lt; 5 * t * t &lt;&lt; &quot;\\n&quot;;    // Altura con D = 5 · t · t\n    return 0;\n}</code></pre>"
 },
 {
  "clase": 1,
  "grupo": "Parte B · Ejercicios independientes",
  "n": 10,
  "titulo": "Ejercicio 10 · Bloques de hielo para los camaroneros.",
  "enunciado": "<p>Una fábrica de hielo del parque industrial de Mazatlán surte a la flota camaronera. Tiene dos líneas de producción, y en cada una las barras se cortan en cierto número de bloques iguales.</p>\n<p>Se conocen B_1, las barras procesadas en la línea 1; K_1, los bloques que salen de cada barra en la línea 1; B_2, las barras de la línea 2, y K_2, los bloques por barra en la línea 2. Los cuatro datos vienen en una línea, en ese orden. Imprime el total de bloques producidos.</p>\n<p>Restricciones: 0 ≤ B_1, B_2 ≤ 5000; 1 ≤ K_1, K_2 ≤ 100.</p>\n<div class=\"table-responsive\"><table class=\"table table-sm lectura-tabla\">\n<thead>\n<tr>\n<th>Caso</th>\n<th>Entrada</th>\n<th>Salida</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td><code>10 12 5 20</code></td>\n<td><code>220</code></td>\n</tr>\n<tr>\n<td>2</td>\n<td><code>100 8 200 8</code></td>\n<td><code>2400</code></td>\n</tr>\n<tr>\n<td>3 (la línea 1 no produjo)</td>\n<td><code>0 15 50 10</code></td>\n<td><code>500</code></td>\n</tr>\n</tbody>\n</table></div>",
  "tipo": "programa",
  "solucion": "<p class=\"mb-2\"><strong>Idea de solución:</strong> Leer los cuatro datos, calcular B_1 · K_1 + B_2 · K_2 e imprimirlo.</p><p class=\"mb-1\"><strong>Código de referencia:</strong></p><pre><code>// Ejercicio 10 · Bloques de hielo para los camaroneros\n#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;                                // Entrada y salida rápida\n    int B1, K1, B2, K2;                    // Barras y bloques por barra de cada línea\n    cin &gt;&gt; B1 &gt;&gt; K1 &gt;&gt; B2 &gt;&gt; K2;           // Los cuatro datos en orden\n    cout &lt;&lt; B1 * K1 + B2 * K2 &lt;&lt; &quot;\\n&quot;;     // Bloques de la línea 1 más los de la línea 2\n    return 0;\n}</code></pre>"
 },
 {
  "clase": 2,
  "grupo": "Parte A · Ejercicios guiados (en parejas)",
  "n": 1,
  "titulo": "Ejercicio 1 · ¿Qué imprime? Precedencia.",
  "enunciado": "<p>La entrada es <code>7 2</code>. ¿Qué imprime el programa?</p>\n<pre><code>#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;\n    int a, b;\n    cin &gt;&gt; a &gt;&gt; b;\n    int res = a + b * a / b - a;\n    cout &lt;&lt; res &lt;&lt; &quot;\\n&quot;;\n    return 0;\n}\n</code></pre>",
  "tipo": "texto",
  "aceptadas": [
   "7"
  ],
  "solucion": "<p class=\"mb-2\"><strong>Respuesta:</strong> <code>7</code></p><p class=\"mb-0\">b · a = 14, 14 / 2 = 7, y luego 7 + 7 − 7 = 7.</p>"
 },
 {
  "clase": 2,
  "grupo": "Parte A · Ejercicios guiados (en parejas)",
  "n": 2,
  "titulo": "Ejercicio 2 · ¿Qué imprime? Residuo de un negativo.",
  "enunciado": "<p>La entrada es <code>-13 5</code>. ¿Qué imprime el programa?</p>\n<pre><code>#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;\n    int x, y;\n    cin &gt;&gt; x &gt;&gt; y;\n    cout &lt;&lt; x / y &lt;&lt; &quot; &quot; &lt;&lt; x % y &lt;&lt; &quot;\\n&quot;;\n    return 0;\n}\n</code></pre>",
  "tipo": "texto",
  "aceptadas": [
   "-2 -3"
  ],
  "solucion": "<p class=\"mb-2\"><strong>Respuesta:</strong> <code>-2 -3</code></p><p class=\"mb-0\">C++ corta el cociente hacia el cero: −13 / 5 = −2. Comprobación: (−2) · 5 + (−3) = −13.</p>"
 },
 {
  "clase": 2,
  "grupo": "Parte A · Ejercicios guiados (en parejas)",
  "n": 3,
  "titulo": "Ejercicio 3 · Corrige el error: el terreno gigante.",
  "enunciado": "<p>El programa calcula el área de un terreno rectangular. Con la entrada <code>1000000 1000000</code> debería imprimir <code>1000000000000</code>, pero imprime un número negativo. Encuentra el error y corrígelo.</p>\n<pre><code>#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;\n    int ancho, alto;\n    cin &gt;&gt; ancho &gt;&gt; alto;\n    long long area = ancho * alto;\n    cout &lt;&lt; area &lt;&lt; &quot;\\n&quot;;\n    return 0;\n}\n</code></pre>",
  "tipo": "autoevaluacion",
  "solucion": "<p class=\"mb-2\"><strong>Respuesta:</strong> <code>long long area = (long long)ancho * alto;</code></p><p class=\"mb-0\">La multiplicación se hacía en <code>int</code> y se desbordaba antes de guardarse. También se vale declarar <code>ancho</code> y <code>alto</code> como <code>long long</code>.</p>"
 },
 {
  "clase": 2,
  "grupo": "Parte A · Ejercicios guiados (en parejas)",
  "n": 4,
  "titulo": "Ejercicio 4 · Corrige el error: el promedio sin decimales.",
  "enunciado": "<p>El programa calcula el promedio de dos calificaciones. Con la entrada <code>15 8</code> debería imprimir <code>11.5</code>, pero imprime <code>11</code>. Corrígelo.</p>\n<pre><code>#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;\n    int nota1, nota2;\n    cin &gt;&gt; nota1 &gt;&gt; nota2;\n    double promedio = (nota1 + nota2) / 2;\n    cout &lt;&lt; promedio &lt;&lt; &quot;\\n&quot;;\n    return 0;\n}\n</code></pre>",
  "tipo": "autoevaluacion",
  "solucion": "<p class=\"mb-2\"><strong>Respuesta:</strong> <code>double promedio = (nota1 + nota2) / 2.0;</code></p><p class=\"mb-0\">Con <code>2.0</code> la división ya es con decimales. También se vale <code>(double)(nota1 + nota2) / 2</code>.</p>"
 },
 {
  "clase": 2,
  "grupo": "Parte A · Ejercicios guiados (en parejas)",
  "n": 5,
  "titulo": "Ejercicio 5 · Completa la línea: los contenedores.",
  "enunciado": "<p>Hay N objetos y en cada contenedor caben K. Completa la línea para calcular cuántos contenedores se necesitan, sin usar decimales. Con la entrada <code>10 3</code> debe imprimir <code>4</code>.</p>\n<pre><code>#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;\n    int N, K;\n    cin &gt;&gt; N &gt;&gt; K;\n    int contenedores = 0; // Cambia el 0 por la fórmula\n    cout &lt;&lt; contenedores &lt;&lt; &quot;\\n&quot;;\n    return 0;\n}\n</code></pre>",
  "tipo": "texto",
  "codigo": true,
  "aceptadas": [
   "(N + K - 1) / K",
   "(K + N - 1) / K",
   "(N - 1 + K) / K",
   "(N - 1) / K + 1"
  ],
  "solucion": "<p class=\"mb-2\"><strong>Respuesta:</strong> <code>int contenedores = (N + K - 1) / K;</code></p><p class=\"mb-0\">Es el redondeo hacia arriba con enteros: (10 + 2) / 3 = 4 y (9 + 2) / 3 = 3.</p>"
 },
 {
  "clase": 2,
  "grupo": "Parte B · Ejercicios independientes",
  "n": 6,
  "titulo": "Ejercicio 6 · El reloj del faro.",
  "enunciado": "<p>En el Faro de Mazatlán, uno de los más altos del mundo, un guía revisa el reloj de 24 horas de la caseta. El reloj marca la hora H, en horas cerradas, y el guía quiere saber qué hora marcará dentro de M horas.</p>\n<p>Se conocen H y M. Imprime la hora que marcará el reloj, un número entre 0 y 23.</p>\n<p>Restricciones: 0 ≤ H ≤ 23; 0 ≤ M ≤ 10⁹.</p>\n<div class=\"table-responsive\"><table class=\"table table-sm lectura-tabla\">\n<thead>\n<tr>\n<th>Caso</th>\n<th>Entrada</th>\n<th>Salida</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td><code>10 5</code></td>\n<td><code>15</code></td>\n</tr>\n<tr>\n<td>2</td>\n<td><code>23 2</code></td>\n<td><code>1</code></td>\n</tr>\n<tr>\n<td>3 (dos días exactos)</td>\n<td><code>0 48</code></td>\n<td><code>0</code></td>\n</tr>\n</tbody>\n</table></div>",
  "tipo": "programa",
  "solucion": "<p class=\"mb-2\"><strong>Idea de solución:</strong> Declarar <code>const int HORAS = 24;</code>, leer H y M e imprimir <code>(H + M) % HORAS</code>. Como M llega a 10⁹, H + M todavía cabe en <code>int</code>.</p><p class=\"mb-1\"><strong>Código de referencia:</strong></p><pre><code>// Ejercicio 6 · El reloj del faro\n#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;                              // Entrada y salida rápida\n    const int HORAS = 24;                // Horas que tiene el reloj; no cambia\n    int H, M;                            // Hora actual y horas que pasan\n    cin &gt;&gt; H &gt;&gt; M;                       // Se leen los dos datos\n    cout &lt;&lt; (H + M) % HORAS &lt;&lt; &quot;\\n&quot;;     // El residuo regresa la hora al rango 0 a 23\n    return 0;\n}</code></pre>",
  "introGrupo": "<p>Van de menor a mayor dificultad.</p>"
 },
 {
  "clase": 2,
  "grupo": "Parte B · Ejercicios independientes",
  "n": 7,
  "titulo": "Ejercicio 7 · El tiempo del maratón.",
  "enunciado": "<p>En el Maratón Internacional de Mazatlán, el cronómetro de cada corredor registra el tiempo total en segundos. Los resultados se publican en horas, minutos y segundos.</p>\n<p>Se conoce S, el tiempo de un corredor en segundos. Imprime en una línea las horas, los minutos y los segundos, separados por un espacio.</p>\n<p>Restricciones: 0 ≤ S ≤ 86399.</p>\n<div class=\"table-responsive\"><table class=\"table table-sm lectura-tabla\">\n<thead>\n<tr>\n<th>Caso</th>\n<th>Entrada</th>\n<th>Salida</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td><code>3725</code></td>\n<td><code>1 2 5</code></td>\n</tr>\n<tr>\n<td>2</td>\n<td><code>14400</code></td>\n<td><code>4 0 0</code></td>\n</tr>\n<tr>\n<td>3 (un segundo antes de completar el día)</td>\n<td><code>86399</code></td>\n<td><code>23 59 59</code></td>\n</tr>\n</tbody>\n</table></div>",
  "tipo": "programa",
  "solucion": "<p class=\"mb-2\"><strong>Idea de solución:</strong> Horas = S / 3600. Lo que sobra de las horas es S % 3600; de ahí, minutos = (S % 3600) / 60 y segundos = S % 60.</p><p class=\"mb-1\"><strong>Código de referencia:</strong></p><pre><code>// Ejercicio 7 · El tiempo del maratón\n#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;                              // Entrada y salida rápida\n    const int SEG_HORA = 3600;           // Segundos en una hora\n    const int SEG_MIN = 60;              // Segundos en un minuto\n    int S;                               // Tiempo total en segundos\n    cin &gt;&gt; S;                            // Se lee el tiempo\n    int horas = S / SEG_HORA;            // Horas completas\n    int resto = S % SEG_HORA;            // Segundos que sobran después de las horas\n    int minutos = resto / SEG_MIN;       // Minutos completos de lo que sobró\n    int segundos = S % SEG_MIN;          // Segundos sueltos\n    cout &lt;&lt; horas &lt;&lt; &quot; &quot; &lt;&lt; minutos &lt;&lt; &quot; &quot; &lt;&lt; segundos &lt;&lt; &quot;\\n&quot;;  // Formato pedido\n    return 0;\n}</code></pre>"
 },
 {
  "clase": 2,
  "grupo": "Parte B · Ejercicios independientes",
  "n": 8,
  "titulo": "Ejercicio 8 · Calificación ponderada.",
  "enunciado": "<p>En la materia de Pensamiento Computacional, la calificación final se forma con tres evaluaciones: la primera vale 20 %, la segunda 30 % y la tercera 50 %.</p>\n<p>Se conocen N₁, N₂ y N₃, las tres calificaciones. Imprime la calificación final con exactamente dos decimales.</p>\n<p>Restricciones: 0 ≤ N₁, N₂, N₃ ≤ 100, enteros.</p>\n<div class=\"table-responsive\"><table class=\"table table-sm lectura-tabla\">\n<thead>\n<tr>\n<th>Caso</th>\n<th>Entrada</th>\n<th>Salida</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td><code>80 90 100</code></td>\n<td><code>93.00</code></td>\n</tr>\n<tr>\n<td>2</td>\n<td><code>50 60 70</code></td>\n<td><code>63.00</code></td>\n</tr>\n<tr>\n<td>3</td>\n<td><code>10 20 33</code></td>\n<td><code>24.50</code></td>\n</tr>\n</tbody>\n</table></div>",
  "tipo": "programa",
  "solucion": "<p class=\"mb-2\"><strong>Idea de solución:</strong> Calcular (2 · N₁ + 3 · N₂ + 5 · N₃) / 10.0 e imprimir con <code>fixed</code> y <code>setprecision(2)</code>. Lo delicado es dividir entre <code>10.0</code> y no entre <code>10</code>: con <code>10</code>, el tercer caso daría <code>24.00</code>.</p><p class=\"mb-1\"><strong>Código de referencia:</strong></p><pre><code>// Ejercicio 8 · Calificación ponderada\n#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;                                          // Entrada y salida rápida\n    int N1, N2, N3;                                  // Las tres calificaciones\n    cin &gt;&gt; N1 &gt;&gt; N2 &gt;&gt; N3;                           // Se leen en una línea\n    double calif = (2 * N1 + 3 * N2 + 5 * N3) / 10.0;  // Pesos 2, 3 y 5 de un total de 10; el 10.0 evita la división entera\n    cout &lt;&lt; fixed &lt;&lt; setprecision(2) &lt;&lt; calif &lt;&lt; &quot;\\n&quot;;   // Exactamente dos decimales\n    return 0;\n}</code></pre>"
 },
 {
  "clase": 2,
  "grupo": "Parte B · Ejercicios independientes",
  "n": 9,
  "titulo": "Ejercicio 9 · Camiones para la excursión.",
  "enunciado": "<p>La preparatoria organiza una excursión a la isla de la Piedra y debe rentar camiones para llevar a N alumnos. En cada camión caben K alumnos.</p>\n<p>Se conocen N y K. Imprime el mínimo de camiones que hay que rentar.</p>\n<p>Restricciones: 1 ≤ N, K ≤ 10⁹.</p>\n<div class=\"table-responsive\"><table class=\"table table-sm lectura-tabla\">\n<thead>\n<tr>\n<th>Caso</th>\n<th>Entrada</th>\n<th>Salida</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td><code>10 3</code></td>\n<td><code>4</code></td>\n</tr>\n<tr>\n<td>2 (división exacta)</td>\n<td><code>12 4</code></td>\n<td><code>3</code></td>\n</tr>\n<tr>\n<td>3 (caben todos en uno)</td>\n<td><code>1 5</code></td>\n<td><code>1</code></td>\n</tr>\n</tbody>\n</table></div>",
  "tipo": "programa",
  "solucion": "<p class=\"mb-2\"><strong>Idea de solución:</strong> Imprimir <code>(N + K - 1) / K</code>. N + K − 1 llega a casi 2·10⁹: todavía cabe en <code>int</code>, pero queda pegado al límite. Conviene usar <code>long long</code> para no arriesgarse si las restricciones cambian un poco.</p><p class=\"mb-1\"><strong>Código de referencia:</strong></p><pre><code>// Ejercicio 9 · Camiones para la excursión\n#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;                              // Entrada y salida rápida\n    long long N, K;                      // N + K - 1 queda cerca del límite de int; long long da margen\n    cin &gt;&gt; N &gt;&gt; K;                       // Alumnos y cupo por camión\n    cout &lt;&lt; (N + K - 1) / K &lt;&lt; &quot;\\n&quot;;     // Redondeo hacia arriba de N / K\n    return 0;\n}</code></pre>"
 },
 {
  "clase": 2,
  "grupo": "Parte B · Ejercicios independientes",
  "n": 10,
  "titulo": "Ejercicio 10 · La suma gigante.",
  "enunciado": "<p>En el Bloque 1 viste que la suma de los números de A a B se calcula sin sumar uno por uno: S = N · (A + B) / 2, donde N = B − A + 1 es la cantidad de números.</p>\n<p>Se conocen A y B. Imprime la suma de todos los enteros desde A hasta B, incluyendo a los dos.</p>\n<p>Restricciones: 1 ≤ A ≤ B ≤ 10⁹.</p>\n<div class=\"table-responsive\"><table class=\"table table-sm lectura-tabla\">\n<thead>\n<tr>\n<th>Caso</th>\n<th>Entrada</th>\n<th>Salida</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td><code>1 10</code></td>\n<td><code>55</code></td>\n</tr>\n<tr>\n<td>2</td>\n<td><code>3 7</code></td>\n<td><code>25</code></td>\n</tr>\n<tr>\n<td>3 (valores máximos)</td>\n<td><code>1 1000000000</code></td>\n<td><code>500000000500000000</code></td>\n</tr>\n</tbody>\n</table></div>",
  "tipo": "programa",
  "solucion": "<p class=\"mb-2\"><strong>Idea de solución:</strong> Con <code>long long</code>, N = B − A + 1 y S = N · (A + B) / 2. N · (A + B) llega a unos 10¹⁸: cabe en <code>long long</code>, pero no en <code>int</code>. Se multiplica antes de dividir: N · (A + B) siempre es par, así que la división entre 2 es exacta.</p><p class=\"mb-1\"><strong>Código de referencia:</strong></p><pre><code>// Ejercicio 10 · La suma gigante\n#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;                              // Entrada y salida rápida\n    long long A, B;                      // long long desde la lectura para que toda la cuenta sea de 64 bits\n    cin &gt;&gt; A &gt;&gt; B;                       // Extremos del intervalo\n    long long N = B - A + 1;             // Cantidad de números de A a B\n    long long S = N * (A + B) / 2;       // Fórmula de la progresión; el producto es par, la división es exacta\n    cout &lt;&lt; S &lt;&lt; &quot;\\n&quot;;                   // Puede llegar a 5·10^17\n    return 0;\n}</code></pre>"
 },
 {
  "clase": 2,
  "grupo": "Parte C · Operadores a nivel de bits",
  "n": 11,
  "titulo": "Ejercicio 11 · ¿Qué imprime? Bits.",
  "enunciado": "<p>La entrada es <code>13 -7</code>. ¿Qué imprime el programa?</p>\n<pre><code>#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;\n    int a, b;\n    cin &gt;&gt; a &gt;&gt; b;\n    cout &lt;&lt; (a &amp; 1) &lt;&lt; &quot; &quot; &lt;&lt; (a &gt;&gt; 1) &lt;&lt; &quot; &quot; &lt;&lt; (a &lt;&lt; 1) &lt;&lt; &quot;\\n&quot;;\n    cout &lt;&lt; (b &amp; 1) &lt;&lt; &quot; &quot; &lt;&lt; (b &gt;&gt; 1) &lt;&lt; &quot; &quot; &lt;&lt; b / 2 &lt;&lt; &quot;\\n&quot;;\n    return 0;\n}\n</code></pre>",
  "tipo": "texto",
  "aceptadas": [
   "1 6 26 1 -4 -3"
  ],
  "solucion": "<p class=\"mb-2\"><strong>Respuesta:</strong> <code>1 6 26</code> en la primera línea y <code>1 -4 -3</code> en la segunda</p><p class=\"mb-0\">13 es <code>1101</code>: termina en 1, así que es impar; <code>1101 &gt;&gt; 1</code> es <code>110</code> (6) y <code>1101 &lt;&lt; 1</code> es <code>11010</code> (26). Con −7, <code>&amp; 1</code> da 1 porque es impar; <code>&gt;&gt; 1</code> redondea hacia abajo (−4) y <code>/ 2</code> corta hacia el cero (−3).</p>"
 },
 {
  "clase": 2,
  "grupo": "Parte C · Operadores a nivel de bits",
  "n": 12,
  "titulo": "Ejercicio 12 · Memorias USB.",
  "enunciado": "<p>Las memorias USB y las tarjetas de memoria vienen en capacidades que son potencias de 2: 8, 16, 32, 64 GB, y así. Un vendedor del centro quiere una calculadora rápida de capacidades.</p>\n<p>Se conoce k. Imprime 2ᵏ, usando el corrimiento de bits en lugar de multiplicar.</p>\n<p>Restricciones: 0 ≤ k ≤ 62.</p>\n<div class=\"table-responsive\"><table class=\"table table-sm lectura-tabla\">\n<thead>\n<tr>\n<th>Caso</th>\n<th>Entrada</th>\n<th>Salida</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1 (2⁰)</td>\n<td><code>0</code></td>\n<td><code>1</code></td>\n</tr>\n<tr>\n<td>2</td>\n<td><code>10</code></td>\n<td><code>1024</code></td>\n</tr>\n<tr>\n<td>3 (el máximo, solo cabe en long long)</td>\n<td><code>62</code></td>\n<td><code>4611686018427387904</code></td>\n</tr>\n</tbody>\n</table></div>",
  "tipo": "programa",
  "solucion": "<p class=\"mb-2\"><strong>Idea de solución:</strong> Imprimir <code>1LL &lt;&lt; k</code>. Con <code>1 &lt;&lt; k</code> la cuenta se hace en <code>int</code> y a partir de k = 31 se desborda.</p><p class=\"mb-1\"><strong>Código de referencia:</strong></p><pre><code>// Ejercicio 12 · Memorias USB\n#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;                              // Entrada y salida rápida\n    int k;                               // Exponente de la potencia de 2\n    cin &gt;&gt; k;                            // Se lee k\n    long long capacidad = 1LL &lt;&lt; k;      // 1LL es un 1 de tipo long long; correrlo k lugares da 2^k\n    cout &lt;&lt; capacidad &lt;&lt; &quot;\\n&quot;;           // Con 1 &lt;&lt; k (int) se desbordaría a partir de k = 31\n    return 0;\n}</code></pre>"
 },
 {
  "clase": 3,
  "grupo": "Parte A · Ejercicios guiados (en parejas)",
  "n": 1,
  "titulo": "Ejercicio 1 · ¿Qué imprime? Condicionales anidados.",
  "enunciado": "<p>¿Qué imprime el programa con la entrada <code>14 9</code>? ¿Y con <code>7 7</code>?</p>\n<pre><code>#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;\n    int a, b;\n    cin &gt;&gt; a &gt;&gt; b;\n    if (a &gt; b) {\n        if (a % 2 == 0) {\n            cout &lt;&lt; &quot;A-PAR\\n&quot;;\n        } else {\n            cout &lt;&lt; &quot;A-IMPAR\\n&quot;;\n        }\n    } else if (b &gt; a) {\n        if (b % 2 == 0) {\n            cout &lt;&lt; &quot;B-PAR\\n&quot;;\n        } else {\n            cout &lt;&lt; &quot;B-IMPAR\\n&quot;;\n        }\n    } else {\n        cout &lt;&lt; &quot;IGUALES\\n&quot;;\n    }\n    return 0;\n}\n</code></pre>",
  "tipo": "multi-texto",
  "campos": [
   {
    "etiqueta": "Salida con 14 9",
    "aceptadas": [
     "A-PAR"
    ]
   },
   {
    "etiqueta": "Salida con 7 7",
    "aceptadas": [
     "IGUALES"
    ]
   }
  ],
  "solucion": "<p class=\"mb-2\"><strong>Respuesta:</strong> <code>A-PAR</code> con <code>14 9</code>; <code>IGUALES</code> con <code>7 7</code></p><p class=\"mb-0\">14 &gt; 9 y 14 es par. Con 7 y 7, ni <code>a &gt; b</code> ni <code>b &gt; a</code> son verdaderas y se llega al <code>else</code>.</p>"
 },
 {
  "clase": 3,
  "grupo": "Parte A · Ejercicios guiados (en parejas)",
  "n": 2,
  "titulo": "Ejercicio 2 · ¿Qué imprime? El cuadrante.",
  "enunciado": "<p>¿Qué imprime el programa con la entrada <code>-5 12</code>? ¿Y con <code>0 8</code>?</p>\n<pre><code>#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;\n    int x, y;\n    cin &gt;&gt; x &gt;&gt; y;\n    if (x &gt; 0 &amp;&amp; y &gt; 0) {\n        cout &lt;&lt; &quot;Cuadrante 1\\n&quot;;\n    } else if (x &lt; 0 &amp;&amp; y &gt; 0) {\n        cout &lt;&lt; &quot;Cuadrante 2\\n&quot;;\n    } else if (x &lt; 0 &amp;&amp; y &lt; 0) {\n        cout &lt;&lt; &quot;Cuadrante 3\\n&quot;;\n    } else if (x &gt; 0 &amp;&amp; y &lt; 0) {\n        cout &lt;&lt; &quot;Cuadrante 4\\n&quot;;\n    } else {\n        cout &lt;&lt; &quot;Eje\\n&quot;;\n    }\n    return 0;\n}\n</code></pre>",
  "tipo": "multi-texto",
  "campos": [
   {
    "etiqueta": "Salida con -5 12",
    "aceptadas": [
     "Cuadrante 2"
    ]
   },
   {
    "etiqueta": "Salida con 0 8",
    "aceptadas": [
     "Eje"
    ]
   }
  ],
  "solucion": "<p class=\"mb-2\"><strong>Respuesta:</strong> <code>Cuadrante 2</code> con <code>-5 12</code>; <code>Eje</code> con <code>0 8</code></p><p class=\"mb-0\">−5 &lt; 0 y 12 &gt; 0 cumple la segunda condición. Con x = 0 ninguna se cumple.</p>"
 },
 {
  "clase": 3,
  "grupo": "Parte A · Ejercicios guiados (en parejas)",
  "n": 3,
  "titulo": "Ejercicio 3 · Corrige el error: mayor de edad.",
  "enunciado": "<p>El programa debería imprimir \"Es mayor de edad\" solo si la edad es 18 o más. Con la entrada <code>12</code> también lo imprime. Encuentra el error.</p>\n<pre><code>#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;\n    int edad;\n    cin &gt;&gt; edad;\n    if (edad &gt;= 18); {\n        cout &lt;&lt; &quot;Es mayor de edad\\n&quot;;\n    }\n    return 0;\n}\n</code></pre>",
  "tipo": "autoevaluacion",
  "solucion": "<p class=\"mb-2\"><strong>Respuesta:</strong> Quitar el <code>;</code> después de <code>if (edad &gt;= 18)</code></p><p class=\"mb-0\">El <code>;</code> termina el <code>if</code> con una instrucción vacía y el bloque de llaves se ejecuta siempre.</p>"
 },
 {
  "clase": 3,
  "grupo": "Parte A · Ejercicios guiados (en parejas)",
  "n": 4,
  "titulo": "Ejercicio 4 · Corrige el error: la calificación.",
  "enunciado": "<p>El programa debe imprimir \"Excelente\" si la nota es 90 o más, \"Aprobado\" si es 60 o más y \"Reprobado\" si es menor que 60. Con la nota <code>95</code> imprime \"Aprobado\". Corrígelo.</p>\n<pre><code>#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;\n    int nota;\n    cin &gt;&gt; nota;\n    if (nota &gt;= 60) {\n        cout &lt;&lt; &quot;Aprobado\\n&quot;;\n    } else if (nota &gt;= 90) {\n        cout &lt;&lt; &quot;Excelente\\n&quot;;\n    } else {\n        cout &lt;&lt; &quot;Reprobado\\n&quot;;\n    }\n    return 0;\n}\n</code></pre>",
  "tipo": "autoevaluacion",
  "solucion": "<p class=\"mb-2\"><strong>Respuesta:</strong> Poner primero <code>if (nota &gt;= 90)</code> y después <code>else if (nota &gt;= 60)</code></p><p class=\"mb-0\">Toda nota de 90 o más también es de 60 o más, así que la primera condición se la llevaba.</p>"
 },
 {
  "clase": 3,
  "grupo": "Parte A · Ejercicios guiados (en parejas)",
  "n": 5,
  "titulo": "Ejercicio 5 · Completa la condición: año bisiesto.",
  "enunciado": "<p>Un año es bisiesto si es divisible entre 4 y no entre 100, o si es divisible entre 400. Completa la condición.</p>\n<pre><code>#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;\n    int a;\n    cin &gt;&gt; a;\n    if (false /* Cambia false por la condición */) {\n        cout &lt;&lt; &quot;BISIESTO\\n&quot;;\n    } else {\n        cout &lt;&lt; &quot;NO BISIESTO\\n&quot;;\n    }\n    return 0;\n}\n</code></pre>",
  "tipo": "autoevaluacion",
  "solucion": "<p class=\"mb-2\"><strong>Respuesta:</strong> <code>(a % 4 == 0 &amp;&amp; a % 100 != 0) || a % 400 == 0</code></p><p class=\"mb-0\">Los paréntesis separan las dos formas de ser bisiesto.</p>"
 },
 {
  "clase": 3,
  "grupo": "Parte B · Ejercicios independientes",
  "n": 6,
  "titulo": "Ejercicio 6 · El elevador del hotel.",
  "enunciado": "<p>En un hotel de la Zona Dorada, el tablero del elevador marca el piso con un número entero N: los números positivos son pisos arriba del lobby, los negativos son niveles del estacionamiento y el 0 es el lobby. En los pisos pares hay máquinas de hielo.</p>\n<p>Se conoce N. Imprime <code>POSITIVO PAR</code> si N es mayor que cero y par, <code>POSITIVO IMPAR</code> si es mayor que cero e impar, <code>NEGATIVO</code> si es menor que cero y <code>CERO</code> si es exactamente cero.</p>\n<p>Restricciones: −10⁹ ≤ N ≤ 10⁹.</p>\n<div class=\"table-responsive\"><table class=\"table table-sm lectura-tabla\">\n<thead>\n<tr>\n<th>Caso</th>\n<th>Entrada</th>\n<th>Salida</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td><code>12</code></td>\n<td><code>POSITIVO PAR</code></td>\n</tr>\n<tr>\n<td>2</td>\n<td><code>7</code></td>\n<td><code>POSITIVO IMPAR</code></td>\n</tr>\n<tr>\n<td>3</td>\n<td><code>-15</code></td>\n<td><code>NEGATIVO</code></td>\n</tr>\n<tr>\n<td>4 (el lobby)</td>\n<td><code>0</code></td>\n<td><code>CERO</code></td>\n</tr>\n</tbody>\n</table></div>",
  "tipo": "programa",
  "solucion": "<p class=\"mb-2\"><strong>Idea de solución:</strong> Cadena <code>if (N &gt; 0)</code> / <code>else if (N &lt; 0)</code> / <code>else</code>; dentro del primero, un <code>if</code> anidado para la paridad. Casos que hay que cubrir: positivo par, positivo impar, negativo y cero.</p><p class=\"mb-1\"><strong>Código de referencia:</strong></p><pre><code>// Ejercicio 6 · El elevador del hotel\n#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;                                  // Entrada y salida rápida\n    int n;                                   // Número de piso\n    cin &gt;&gt; n;                                // Se lee el piso\n    if (n &gt; 0) {                             // Pisos arriba del lobby\n        if (n % 2 == 0) {                    // Revisamos la paridad solo si es positivo\n            cout &lt;&lt; &quot;POSITIVO PAR\\n&quot;;        // Positivo y par\n        } else {\n            cout &lt;&lt; &quot;POSITIVO IMPAR\\n&quot;;      // Positivo e impar\n        }\n    } else if (n &lt; 0) {                      // Niveles del estacionamiento\n        cout &lt;&lt; &quot;NEGATIVO\\n&quot;;\n    } else {                                 // Lo único que queda es el cero\n        cout &lt;&lt; &quot;CERO\\n&quot;;\n    }\n    return 0;\n}</code></pre>",
  "introGrupo": "<p>Van de menor a mayor dificultad. Cada uno trae casos de prueba que, entre todos, pasan por todos los caminos del programa.</p>"
 },
 {
  "clase": 3,
  "grupo": "Parte B · Ejercicios independientes",
  "n": 7,
  "titulo": "Ejercicio 7 · Marcos triangulares.",
  "enunciado": "<p>Un taller de herrería arma marcos triangulares con tres barras de longitudes A, B y C. Tres barras forman un triángulo solo si cada lado es menor que la suma de los otros dos: A + B &gt; C, A + C &gt; B y B + C &gt; A.</p>\n<p>Se conocen A, B y C. Si no forman un triángulo, imprime <code>INVALIDO</code>. Si lo forman, imprime <code>EQUILATERO</code> si los tres lados son iguales, <code>ISOSCELES</code> si exactamente dos son iguales y <code>ESCALENO</code> si los tres son distintos.</p>\n<p>Restricciones: 1 ≤ A, B, C ≤ 1000.</p>\n<div class=\"table-responsive\"><table class=\"table table-sm lectura-tabla\">\n<thead>\n<tr>\n<th>Caso</th>\n<th>Entrada</th>\n<th>Salida</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td><code>5 5 5</code></td>\n<td><code>EQUILATERO</code></td>\n</tr>\n<tr>\n<td>2</td>\n<td><code>5 5 8</code></td>\n<td><code>ISOSCELES</code></td>\n</tr>\n<tr>\n<td>3</td>\n<td><code>3 4 5</code></td>\n<td><code>ESCALENO</code></td>\n</tr>\n<tr>\n<td>4 (las barras quedan acostadas, sin formar triángulo)</td>\n<td><code>1 2 3</code></td>\n<td><code>INVALIDO</code></td>\n</tr>\n</tbody>\n</table></div>",
  "tipo": "programa",
  "solucion": "<p class=\"mb-2\"><strong>Idea de solución:</strong> Primero se revisa la desigualdad del triángulo; si no se cumple, <code>INVALIDO</code>. Si se cumple, primero se pregunta si los tres son iguales y después si hay al menos dos iguales; ese orden es el que hace que \"exactamente dos\" funcione. Casos: equilátero, isósceles, escaleno e inválido. Con lados de hasta 1000, las sumas caben sin problema en <code>int</code>.</p><p class=\"mb-1\"><strong>Código de referencia:</strong></p><pre><code>// Ejercicio 7 · Marcos triangulares\n#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;                                          // Entrada y salida rápida\n    int a, b, c;                                     // Longitudes de las tres barras\n    cin &gt;&gt; a &gt;&gt; b &gt;&gt; c;                              // Se leen en una línea\n    if (a + b &gt; c &amp;&amp; a + c &gt; b &amp;&amp; b + c &gt; a) {       // Desigualdad del triángulo\n        if (a == b &amp;&amp; b == c) {                      // Los tres iguales\n            cout &lt;&lt; &quot;EQUILATERO\\n&quot;;\n        } else if (a == b || b == c || a == c) {     // Al menos dos iguales (ya sabemos que no son tres)\n            cout &lt;&lt; &quot;ISOSCELES\\n&quot;;\n        } else {                                     // Ninguno igual\n            cout &lt;&lt; &quot;ESCALENO\\n&quot;;\n        }\n    } else {                                         // No cumple la desigualdad\n        cout &lt;&lt; &quot;INVALIDO\\n&quot;;\n    }\n    return 0;\n}</code></pre>"
 },
 {
  "clase": 3,
  "grupo": "Parte B · Ejercicios independientes",
  "n": 8,
  "titulo": "Ejercicio 8 · Los días del mes.",
  "enunciado": "<p>El comité del Carnaval de Mazatlán arma su calendario y necesita saber cuántos días tiene cada mes. Febrero tiene 29 días en año bisiesto y 28 en los demás.</p>\n<p>Se conocen M, el número del mes, y Y, el año. Usando <code>switch</code> para el mes, imprime cuántos días tiene. Si M no está entre 1 y 12, imprime <code>ERROR</code>.</p>\n<p>Restricciones: 0 ≤ M ≤ 100; 1 ≤ Y ≤ 9999.</p>\n<div class=\"table-responsive\"><table class=\"table table-sm lectura-tabla\">\n<thead>\n<tr>\n<th>Caso</th>\n<th>Entrada</th>\n<th>Salida</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td><code>1 2023</code></td>\n<td><code>31</code></td>\n</tr>\n<tr>\n<td>2</td>\n<td><code>4 2023</code></td>\n<td><code>30</code></td>\n</tr>\n<tr>\n<td>3 (febrero bisiesto)</td>\n<td><code>2 2024</code></td>\n<td><code>29</code></td>\n</tr>\n<tr>\n<td>4 (febrero normal)</td>\n<td><code>2 2023</code></td>\n<td><code>28</code></td>\n</tr>\n<tr>\n<td>5 (mes inválido)</td>\n<td><code>13 2023</code></td>\n<td><code>ERROR</code></td>\n</tr>\n</tbody>\n</table></div>",
  "tipo": "programa",
  "solucion": "<p class=\"mb-2\"><strong>Idea de solución:</strong> <code>switch</code> con los meses de 31 días agrupados, los de 30 agrupados, febrero con un <code>if</code> de bisiesto y <code>default</code> para <code>ERROR</code>. Casos: mes de 31, mes de 30, febrero bisiesto, febrero normal y mes inválido.</p><p class=\"mb-1\"><strong>Código de referencia:</strong></p><pre><code>// Ejercicio 8 · Los días del mes\n#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;                                                    // Entrada y salida rápida\n    int m, y;                                                  // Mes y año\n    cin &gt;&gt; m &gt;&gt; y;                                             // Se leen los dos datos\n    switch (m) {                                               // Se compara el mes contra valores exactos\n        case 1: case 3: case 5: case 7: case 8: case 10: case 12:\n            cout &lt;&lt; 31 &lt;&lt; &quot;\\n&quot;;                                // Meses de 31 días\n            break;                                             // Sin break seguiría con los de 30\n        case 4: case 6: case 9: case 11:\n            cout &lt;&lt; 30 &lt;&lt; &quot;\\n&quot;;                                // Meses de 30 días\n            break;\n        case 2:                                                // Febrero depende del año\n            if ((y % 4 == 0 &amp;&amp; y % 100 != 0) || y % 400 == 0) {\n                cout &lt;&lt; 29 &lt;&lt; &quot;\\n&quot;;                            // Año bisiesto\n            } else {\n                cout &lt;&lt; 28 &lt;&lt; &quot;\\n&quot;;                            // Año normal\n            }\n            break;\n        default:                                               // Cualquier otro número no es un mes\n            cout &lt;&lt; &quot;ERROR\\n&quot;;\n            break;\n    }\n    return 0;\n}</code></pre>"
 },
 {
  "clase": 3,
  "grupo": "Parte B · Ejercicios independientes",
  "n": 9,
  "titulo": "Ejercicio 9 · Reservaciones en el Centro de Cómputo.",
  "enunciado": "<p>En el Centro de Cómputo de la Biblioteca Central, dos grupos reservaron el laboratorio: el primero de la hora A a la hora B y el segundo de la hora C a la hora D. Si uno termina justo a la hora en que empieza el otro, también se considera que se empalman, porque necesitan tiempo para cambiar de grupo.</p>\n<p>Se conocen A, B, C y D. Imprime <code>SOLAPADOS</code> si las dos reservaciones se empalman y <code>DISJUNTOS</code> si no.</p>\n<p>Restricciones: 0 ≤ A ≤ B ≤ 23; 0 ≤ C ≤ D ≤ 23.</p>\n<div class=\"table-responsive\"><table class=\"table table-sm lectura-tabla\">\n<thead>\n<tr>\n<th>Caso</th>\n<th>Entrada</th>\n<th>Salida</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td><code>1 5 4 8</code></td>\n<td><code>SOLAPADOS</code></td>\n</tr>\n<tr>\n<td>2 (el segundo va después)</td>\n<td><code>1 3 5 8</code></td>\n<td><code>DISJUNTOS</code></td>\n</tr>\n<tr>\n<td>3 (el segundo va antes)</td>\n<td><code>6 9 1 4</code></td>\n<td><code>DISJUNTOS</code></td>\n</tr>\n<tr>\n<td>4 (se tocan en una hora)</td>\n<td><code>1 5 5 10</code></td>\n<td><code>SOLAPADOS</code></td>\n</tr>\n<tr>\n<td>5 (uno dentro del otro)</td>\n<td><code>2 10 3 6</code></td>\n<td><code>SOLAPADOS</code></td>\n</tr>\n</tbody>\n</table></div>",
  "tipo": "programa",
  "solucion": "<p class=\"mb-2\"><strong>Idea de solución:</strong> Es más fácil pensar cuándo NO se empalman: cuando el primero termina antes de que empiece el segundo (B &lt; C) o cuando el segundo termina antes de que empiece el primero (D &lt; A). Por De Morgan, se empalman cuando <code>B &gt;= C &amp;&amp; D &gt;= A</code>. Casos: empalme parcial, segundo después, segundo antes, contacto en un punto y uno dentro del otro.</p><p class=\"mb-1\"><strong>Código de referencia:</strong></p><pre><code>// Ejercicio 9 · Reservaciones en el Centro de Cómputo\n#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;                                  // Entrada y salida rápida\n    int a, b, c, d;                          // [a, b] primer grupo, [c, d] segundo grupo\n    cin &gt;&gt; a &gt;&gt; b &gt;&gt; c &gt;&gt; d;                 // Se leen las cuatro horas\n    if (b &gt;= c &amp;&amp; d &gt;= a) {                  // Negación de (b &lt; c || d &lt; a), por De Morgan\n        cout &lt;&lt; &quot;SOLAPADOS\\n&quot;;\n    } else {\n        cout &lt;&lt; &quot;DISJUNTOS\\n&quot;;\n    }\n    return 0;\n}</code></pre>"
 },
 {
  "clase": 3,
  "grupo": "Parte B · Ejercicios independientes",
  "n": 10,
  "titulo": "Ejercicio 10 · El portal del videojuego.",
  "enunciado": "<p>En un videojuego, el personaje está en la posición (X, Y) de un plano cartesiano. Un portal se abre solo si se cumplen todas estas condiciones:</p>\n<ol>\n<li>X + Y es par.</li>\n<li>El personaje no está en el origen (0, 0).</li>\n<li>El personaje está en el primer cuadrante (X &gt; 0 y Y &gt; 0) o en el tercero (X &lt; 0 y Y &lt; 0).</li>\n<li>X es distinto de Y.</li>\n</ol>\n<p>Se conocen X y Y. Imprime <code>PORTAL ABIERTO</code> si se cumplen las cuatro condiciones y <code>PORTAL CERRADO</code> si falla cualquiera.</p>\n<p>Restricciones: −10⁶ ≤ X, Y ≤ 10⁶.</p>\n<div class=\"table-responsive\"><table class=\"table table-sm lectura-tabla\">\n<thead>\n<tr>\n<th>Caso</th>\n<th>Entrada</th>\n<th>Salida</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td><code>2 4</code></td>\n<td><code>PORTAL ABIERTO</code></td>\n</tr>\n<tr>\n<td>2 (tercer cuadrante)</td>\n<td><code>-1 -3</code></td>\n<td><code>PORTAL ABIERTO</code></td>\n</tr>\n<tr>\n<td>3 (suma impar)</td>\n<td><code>1 2</code></td>\n<td><code>PORTAL CERRADO</code></td>\n</tr>\n<tr>\n<td>4 (coordenadas iguales)</td>\n<td><code>3 3</code></td>\n<td><code>PORTAL CERRADO</code></td>\n</tr>\n<tr>\n<td>5 (segundo cuadrante)</td>\n<td><code>-2 4</code></td>\n<td><code>PORTAL CERRADO</code></td>\n</tr>\n<tr>\n<td>6 (el origen)</td>\n<td><code>0 0</code></td>\n<td><code>PORTAL CERRADO</code></td>\n</tr>\n</tbody>\n</table></div>",
  "tipo": "programa",
  "solucion": "<p class=\"mb-2\"><strong>Idea de solución:</strong> Se juntan las cuatro condiciones con <code>&amp;&amp;</code>. Hay un detalle que vale la pena comentar en clase: la condición 2 sobra, porque si el punto está en el primer o el tercer cuadrante, ya no puede ser el origen. Otro detalle: <code>(X + Y) % 2 == 0</code> funciona también con negativos, porque el residuo de un par negativo es 0. Casos: abierto en el primer cuadrante, abierto en el tercero, falla de paridad, falla por coordenadas iguales, falla por cuadrante y el origen.</p><p class=\"mb-1\"><strong>Código de referencia:</strong></p><pre><code>// Ejercicio 10 · El portal del videojuego\n#include &lt;bits/stdc++.h&gt;\n#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)\nusing namespace std;\n\nint main(){\n    FastIO;                                                // Entrada y salida rápida\n    int x, y;                                              // Posición del personaje\n    cin &gt;&gt; x &gt;&gt; y;                                         // Se leen las coordenadas\n    bool sumaPar = (x + y) % 2 == 0;                       // Condición 1: funciona también con negativos\n    bool noOrigen = (x != 0 || y != 0);                    // Condición 2: por De Morgan, no (x == 0 &amp;&amp; y == 0)\n    bool cuadrante = (x &gt; 0 &amp;&amp; y &gt; 0) || (x &lt; 0 &amp;&amp; y &lt; 0); // Condición 3: primer o tercer cuadrante\n    bool distintos = (x != y);                             // Condición 4\n    if (sumaPar &amp;&amp; noOrigen &amp;&amp; cuadrante &amp;&amp; distintos) {   // Se deben cumplir las cuatro\n        cout &lt;&lt; &quot;PORTAL ABIERTO\\n&quot;;\n    } else {                                               // Basta con que falle una\n        cout &lt;&lt; &quot;PORTAL CERRADO\\n&quot;;\n    }\n    return 0;\n}</code></pre>"
 }
];
