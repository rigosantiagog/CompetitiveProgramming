/* ==========================================================
   Quiz · Bloque 1 (Temas 1, 2 y 3)
   - Tema 1: 10 preguntas
   - Tema 2: 8 preguntas agrupadas en Subtemas 5 a 8
   - Tema 3: 8 preguntas agrupadas en Subtemas 9 a 12
   - Al calificar: muestra "Tu puntaje: X / N", "Aprobado" (verde, >= 6)
     o "No aprobado" (rojo, < 6), marca cada pregunta como correcta
     o incorrecta y despliega la explicación de la clave debajo de
     cada pregunta aunque el alumno haya acertado.
   - Si hay preguntas sin responder, avisa antes de calificar:
     "Tienes preguntas sin responder. ¿Calificar de todos modos?".
   - Botón "Reintentar" limpia las respuestas y oculta resultados.
   ========================================================== */

(function () {

  const APROBAR_CON = 6;

  const QUIZ = {
    1: {
      titulo: "Tema 1 · Álgebra y lógica",
      intro: "Este cuestionario te ayuda a detectar errores de procedimiento antes de usar estas ideas en problemas más difíciles. Responde las 10 preguntas, elige una opción en cada una y después califica para ver tu puntaje y la explicación de cada respuesta.",
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
      intro: "Responde las 12 preguntas de opción múltiple y pulsa Calificar para conocer tu puntaje y revisar la explicación de cada respuesta. Se aprueba con 6 o más aciertos.",
      preguntas: [
        {
          subtema: "Subtema 5 · Paridad y divisibilidad",
          titulo: "",
          q: "Si $a$ y $b$ son enteros impares, ¿cuál de las siguientes proposiciones es siempre verdadera?",
          o: [
            "(A) La suma $a + b$ es impar.",
            "(B) El producto $a \\cdot b$ es par.",
            "(C) La suma $a + b$ es par.",
            "(D) $(a + b) \\bmod 2 = 1$."
          ],
          c: 2,
          e: "<strong>Respuesta correcta: (C).</strong> Sean $a = 2k + 1$ y $b = 2m + 1$. Entonces $a + b = 2k + 2m + 2 = 2(k + m + 1)$, que es múltiplo de 2 y, por tanto, par. (A) supone erróneamente que la suma de impares es impar; (B) olvida que impar $\\cdot$ impar = impar; (D) afirma que una suma par deja residuo 1 al dividirse entre 2."
        },
        {
          subtema: "Subtema 5 · Paridad y divisibilidad",
          titulo: "",
          q: "En una competencia escolar se reparten equitativamente 83 dulces entre 4 alumnos. ¿Cuántos dulces quedan sobrantes sin poderse repartir en partes iguales?",
          o: ["(A) 0", "(B) 3", "(C) 20", "(D) 21"],
          c: 1,
          e: "<strong>Respuesta correcta: (B).</strong> $83 = 4 \\cdot 20 + 3$, así que $83 \\bmod 4 = 3$ dulces sobrantes. (C) reporta el cociente $\\lfloor 83 / 4 \\rfloor = 20$ en lugar del residuo; (D) suma 1 al cociente sin justificación."
        },
        {
          subtema: "Subtema 6 · Aritmética con enteros",
          titulo: "",
          q: "Una fábrica empaqueta 45 componentes electrónicos. Cada caja tiene un límite máximo de 6 componentes. ¿Cuál es la cantidad mínima de cajas necesarias para transportar la totalidad de los componentes?",
          o: [
            "(A) $\\lfloor 45 / 6 \\rfloor = 7$",
            "(B) $\\lceil 45 / 6 \\rceil = 8$",
            "(C) $45 \\bmod 6 = 3$",
            "(D) $\\lfloor 45 / 6 \\rfloor + 3 = 10$"
          ],
          c: 1,
          e: "<strong>Respuesta correcta: (B).</strong> Para transportar todos los componentes sin dejar ninguno, usamos el techo: $\\lceil 45 / 6 \\rceil = 8$. (A) trunca con piso y deja 3 componentes fuera; (C) da solo los componentes sobrantes; (D) suma 3 cajas sin justificación."
        },
        {
          subtema: "Subtema 6 · Aritmética con enteros",
          titulo: "",
          q: "¿Cuál es el valor exacto de la expresión $\\lfloor -4.2 \\rfloor + \\lceil 3.1 \\rceil$?",
          o: [
            "(A) $-4 + 4 = 0$",
            "(B) $-5 + 3 = -2$",
            "(C) $-5 + 4 = -1$",
            "(D) $-4 + 5 = 1$"
          ],
          c: 2,
          e: "<strong>Respuesta correcta: (C).</strong> El piso redondea hacia $-\\infty$, así que $\\lfloor -4.2 \\rfloor = -5$. El techo redondea hacia $+\\infty$, así que $\\lceil 3.1 \\rceil = 4$. La suma es $-5 + 4 = -1$. (A) trunca $-4.2$ hacia cero (obteniendo $-4$), aunque el techo de 3.1 sí es 4; (B) aplica piso a 3.1 en vez de techo; (D) trunca $-4.2$ hacia cero y suma un 5 sin justificación."
        },
        {
          subtema: "Subtema 7 · Conteo básico (suma, producto, orden)",
          titulo: "",
          q: "¿Cuántos enteros existen en el intervalo cerrado de días $[12, 35]$?",
          o: [
            "(A) $35 - 12 = 23$",
            "(B) $35 - 12 + 1 = 24$",
            "(C) $35 - 12 - 1 = 22$",
            "(D) $35 + 12 = 47$"
          ],
          c: 1,
          e: "<strong>Respuesta correcta: (B).</strong> El número de enteros en un intervalo cerrado $[a, b]$ es $b - a + 1$. Aquí, $35 - 12 + 1 = 24$. (A) es el error off-by-one de no incluir el extremo inicial (la \"cerca de madera\"); (C) resta un elemento de más."
        },
        {
          subtema: "Subtema 7 · Conteo básico (suma, producto, orden)",
          titulo: "",
          q: "¿Cuál es el valor exacto de la sumatoria de los primeros 50 enteros positivos, $\\sum_{x=1}^{50} x$?",
          o: ["(A) 1225", "(B) 2550", "(C) 2500", "(D) 1275"],
          c: 3,
          e: "<strong>Respuesta correcta: (D).</strong> Con $\\frac{n(n+1)}{2}$ y $n = 50$: $\\frac{50 \\cdot 51}{2} = 25 \\cdot 51 = 1275$. (A) = 1225 usa $(n - 1)$ en la fórmula; (B) = 2550 es $50 \\cdot 51$ sin dividir entre 2; (C) = 2500 es $50^2$, que confunde la fórmula."
        },
        {
          subtema: "Subtema 8 · Razonamiento por casos y simulación",
          titulo: "",
          q: "Un club de ciencias tiene 30 alumnos que estudian Ajedrez, 25 que estudian Danza y 10 que cursan ambas actividades. ¿Cuántos alumnos integran el club si cada integrante participa en al menos una de las dos actividades?",
          o: [
            "(A) $30 + 25 = 55$",
            "(B) $30 + 25 + 10 = 65$",
            "(C) $30 + 25 - 10 = 45$",
            "(D) $30 \\cdot 25 / 10 = 75$"
          ],
          c: 2,
          e: "<strong>Respuesta correcta: (C).</strong> Por Inclusión-Exclusión, $|A \\cup B| = 30 + 25 - 10 = 45$. (A) suma ambas cantidades sin restar los 10 que están en la intersección (sobreconteo); (B) suma la intersección en lugar de restarla; (D) no corresponde a ninguna regla de conteo."
        },
        {
          subtema: "Subtema 8 · Razonamiento por casos y simulación",
          titulo: "",
          q: "Al aplicar el Principio de Inclusión-Exclusión a dos conjuntos $A$ y $B$ totalmente disjuntos ($A \\cap B = \\emptyset$), ¿a qué expresión se reduce $|A \\cup B|$?",
          o: [
            "(A) $|A| + |B|$",
            "(B) $|A| + |B| - 1$",
            "(C) $|A| \\cdot |B|$",
            "(D) $0$"
          ],
          c: 0,
          e: "<strong>Respuesta correcta: (A).</strong> Si $A \cap B = \emptyset$, entonces $|A \cap B| = 0$ y $|A \cup B| = |A| + |B| - 0 = |A| + |B|$, lo que coincide con la regla de la suma para eventos excluyentes. (B), (C) y (D) no corresponden a la fórmula."
        },
        {
          subtema: "Ampliación del subtema 5 · Divisibilidad, mcd y mcm",
          titulo: "",
          q: "Si aplicamos el Algoritmo de Euclides para calcular $\\text{mcd}(a, b)$, ¿en qué principio se apoya para reducir los números en cada paso?",
          o: [
            "(A) $\\text{mcd}(a, b) = \\text{mcd}(b, a \\bmod b)$",
            "(B) $\\text{mcd}(a, b) = \\text{mcd}(a - b, a + b)$",
            "(C) $\\text{mcd}(a, b) = \\text{mcd}(a \\cdot b, a / b)$",
            "(D) $\\text{mcd}(a, b) = \\text{mcd}(a + b, a \\bmod b)$"
          ],
          c: 0,
          e: "<strong>Respuesta correcta: (A).</strong> El Algoritmo de Euclides se apoya en la identidad $\\text{mcd}(a, b) = \\text{mcd}(b, a \\bmod b)$. (B) y (C) no son identidades válidas, y (D) cambia $a$ por $a + b$ sin justificación."
        },
        {
          subtema: "Ampliación del subtema 5 · Divisibilidad, mcd y mcm",
          titulo: "",
          q: "Se sabe que $\\text{mcd}(a, b) = 6$ y que $a \\cdot b = 432$. ¿Cuál es el valor de $\\text{mcm}(a, b)$?",
          o: [
            "(A) $36$",
            "(B) $2592$",
            "(C) $108$",
            "(D) $72$"
          ],
          c: 3,
          e: "<strong>Respuesta correcta: (D).</strong> Con $\\text{mcd}(a, b) \\cdot \\text{mcm}(a, b) = a \\cdot b$ tenemos $6 \\cdot \\text{mcm}(a, b) = 432$, así que $\\text{mcm}(a, b) = 72$. (A) es $432 / 12$; (B) es $432 \\cdot 6$; (C) es $432 / 4$, y no corresponde a la relación."
        },
        {
          subtema: "Subtema 9 · Aritmética modular",
          titulo: "",
          q: "¿Cuál de las siguientes afirmaciones sobre la congruencia $a \\equiv b \\pmod m$ es correcta?",
          o: [
            "(A) La diferencia $a - b$ es un múltiplo entero exacto de $m$.",
            "(B) Significa que $a$ y $b$, al dividirse entre $m$, dan el mismo cociente entero.",
            "(C) Implica que el residuo de la división siempre es igual a $m$.",
            "(D) Permite dividir ambos lados sin ninguna restricción."
          ],
          c: 0,
          e: "<strong>Respuesta correcta: (A).</strong> $a \\equiv b \\pmod m$ significa que $m$ divide a $a - b$. (B) confunde el residuo con el cociente; (C) es falsa porque el residuo debe ser menor que $m$; (D) es un error frecuente, porque la división no preserva la congruencia."
        },
        {
          subtema: "Subtema 9 · Aritmética modular",
          titulo: "",
          q: "¿Cuál es la última cifra del resultado de $2^9$?",
          o: [
            "(A) $4$",
            "(B) $8$",
            "(C) $6$",
            "(D) $2$"
          ],
          c: 3,
          e: "<strong>Respuesta correcta: (D).</strong> La última cifra es $2^9 \\bmod 10$. Las potencias de 2 terminan en el ciclo 2, 4, 8, 6, que se repite cada 4 pasos. Como $9 \\bmod 4 = 1$, la última cifra es la de $2^1$, es decir, 2. (A) y (B) corresponden a $2^2$ y $2^3$; (C) es la última cifra de $2^4$."
        }
      ]
    },

    3: {
      titulo: "Tema 3 · Geometría, trigonometría y patrones",
      intro: "Responde las 10 preguntas de opción múltiple y pulsa Calificar para conocer tu puntaje y revisar la explicación de cada respuesta. Se aprueba con 6 o más aciertos.",
      preguntas: [
        {
          subtema: "Subtema 9 · Ángulos y triángulos",
          titulo: "",
          q: "¿Cuál es el valor del ángulo complementario de un ángulo de $35^\\circ$?",
          o: ["(A) $55^\\circ$", "(B) $145^\\circ$", "(C) $65^\\circ$", "(D) $90^\\circ$"],
          c: 0,
          e: "<strong>Respuesta correcta: (A).</strong> Dos ángulos son complementarios si suman $90^\\circ$. Entonces $90^\\circ - 35^\\circ = 55^\\circ$. La opción (B) es el suplementario, $180^\\circ - 35^\\circ = 145^\\circ$, que se confunde con frecuencia."
        },
        {
          subtema: "Subtema 9 · Ángulos y triángulos",
          titulo: "",
          q: "Si la suma de los ángulos internos de un polígono convexo es $1260^\\circ$, ¿cuántos lados tiene?",
          o: ["(A) 7 lados", "(B) 9 lados", "(C) 8 lados", "(D) 10 lados"],
          c: 1,
          e: "<strong>Respuesta correcta: (B).</strong> $1260 = (n - 2) \\cdot 180$. Como $1260 / 180 = 7$, entonces $n - 2 = 7$ y $n = 9$."
        },
        {
          subtema: "Subtema 10 · Pitágoras y distancia entre dos puntos",
          titulo: "",
          q: "En un triángulo rectángulo, los catetos miden 5 cm y 12 cm. ¿Cuánto mide la hipotenusa?",
          o: ["(A) 17 cm", "(B) 15 cm", "(C) 13 cm", "(D) 169 cm"],
          c: 2,
          e: "<strong>Respuesta correcta: (C).</strong> $c = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$ cm. La opción (D) olvida sacar la raíz cuadrada final."
        },
        {
          subtema: "Subtema 10 · Pitágoras y distancia entre dos puntos",
          titulo: "",
          q: "¿Cuál es la distancia exacta entre los puntos $P_1(1, 1)$ y $P_2(4, 5)$?",
          o: ["(A) 7", "(B) $\\sqrt{7}$", "(C) 25", "(D) 5"],
          c: 3,
          e: "<strong>Respuesta correcta: (D).</strong> $d = \\sqrt{(4 - 1)^2 + (5 - 1)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$. La opción (A) suma $3 + 4$ sin elevar al cuadrado; la opción (C) olvida sacar la raíz."
        },
        {
          subtema: "Subtema 11 · Razones trigonométricas",
          titulo: "",
          q: "En un triángulo rectángulo con hipotenusa $H = 10$ y un ángulo de referencia $\\theta = 30^\\circ$, ¿cuánto mide el cateto adyacente?",
          o: ["(A) $5\\sqrt{3}$", "(B) 5", "(C) $10\\sqrt{3}$", "(D) $\\frac{5}{\\sqrt{3}}$"],
          c: 0,
          e: "<strong>Respuesta correcta: (A).</strong> $\\cos 30^\\circ = \\frac{\\text{adyacente}}{10}$, así que el adyacente es $10 \\cdot \\frac{\\sqrt{3}}{2} = 5\\sqrt{3}$. La opción (D) confunde el coseno con la tangente."
        },
        {
          subtema: "Subtema 11 · Razones trigonométricas",
          titulo: "",
          q: "Un estudiante calcula $\\cos(60^\\circ)$ en su calculadora y obtiene $-0.9524$. ¿A qué se debe?",
          o: [
            "(A) Confundió el cateto opuesto con la hipotenusa.",
            "(B) La calculadora está en modo Radianes (RAD) en lugar de Grados (DEG).",
            "(C) Dividió erróneamente la tangente entre el seno.",
            "(D) La calculadora está en modo Grados (DEG) y debía estar en Radianes."
          ],
          c: 1,
          e: "<strong>Respuesta correcta: (B).</strong> Un resultado negativo al calcular el coseno de un ángulo agudo como $60^\\circ$ indica que la calculadora procesa el número 60 en radianes. Debe estar en grados (DEG)."
        },
        {
          subtema: "Subtema 12 · Patrones y secuencias",
          titulo: "",
          q: "¿Cuál es la suma exacta de los primeros 50 enteros positivos, $1 + 2 + 3 + \\dots + 50$?",
          o: ["(A) 2500", "(B) 1225", "(C) 1275", "(D) 2550"],
          c: 2,
          e: "<strong>Respuesta correcta: (C).</strong> $S_{50} = \\frac{50 \\cdot 51}{2} = 25 \\cdot 51 = 1275$. La opción (A) aplica $n^2$, fórmula que solo sirve para impares."
        },
        {
          subtema: "Subtema 12 · Patrones y secuencias",
          titulo: "",
          q: "¿Cuál es la suma de los primeros 20 números impares, $1 + 3 + 5 + \\dots + 39$?",
          o: ["(A) 200", "(B) 380", "(C) 420", "(D) 400"],
          c: 3,
          e: "<strong>Respuesta correcta: (D).</strong> La suma de los primeros $n$ impares es $n^2$. Con $n = 20$, $S_{20} = 20^2 = 400$. La opción (C) es un error de cálculo."
        },
        {
          subtema: "Subtema 13 · Proporcionalidad y teorema de Tales",
          titulo: "",
          q: "En un triángulo $ABC$ se traza $DE$ paralelo a $BC$, con $D$ en $AB$ y $E$ en $AC$. Si $AD = 3$ cm y $DB = 9$ cm, ¿cuál es la razón de semejanza entre el triángulo menor $ADE$ y el triángulo mayor $ABC$?",
          o: [
            "(A) $1:4$",
            "(B) $1:3$",
            "(C) $3:4$",
            "(D) $1:2$"
          ],
          c: 0,
          e: "<strong>Respuesta correcta: (A).</strong> $AB = AD + DB = 3 + 9 = 12$ cm. Los lados homólogos dan $\\dfrac{AD}{AB} = \\dfrac{3}{12} = \\dfrac{1}{4}$, es decir, $1:4$. (B) compara $AD$ con $DB$ ($1:3$) en lugar de los lados homólogos; (C) y (D) no corresponden a los datos."
        },
        {
          subtema: "Subtema 13 · Proporcionalidad y teorema de Tales",
          titulo: "",
          q: "¿Por qué las razones trigonométricas de un ángulo agudo permanecen iguales sin importar el tamaño del triángulo rectángulo?",
          o: [
            "(A) Porque la suma de los lados del triángulo permanece constante.",
            "(B) Porque se aplica directamente el recíproco del teorema de Tales.",
            "(C) Porque el área del triángulo crece en proporción directa a la base.",
            "(D) Porque todos los triángulos rectángulos con ese ángulo agudo son semejantes por el criterio AA."
          ],
          c: 3,
          e: "<strong>Respuesta correcta: (D).</strong> Al compartir el ángulo recto y el ángulo agudo, los triángulos rectángulos tienen dos ángulos iguales y son semejantes por el criterio AA, así que sus razones se mantienen. (A) y (C) son afirmaciones falsas; (B) menciona el recíproco del teorema de Tales, que no es el fundamento de esta invariancia."
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
    avanceTexto.textContent = n + " de 4";
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
            '<p class="mb-0"><span class="numero">' + (i + 1) + '</span>' + tituloHtml + p.q + '</p>' +
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
