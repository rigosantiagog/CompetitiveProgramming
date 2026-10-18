/* ==========================================================
   Bloque 1 · Banco de ejercicios
   Tema 1 actualizado con 14 ejercicios de respuesta abierta,
   normalización simbólica/algebraica y solución desplegable.
   Las fórmulas se muestran con KaTeX ($…$ y $$…$$).
   ========================================================== */

const EJERCICIOS_BLOQUE1 = [

  /* ---------------- TEMA 1 · Álgebra y lógica (14 ejercicios) ---------------- */

  {
    clase: 1,
    grupo: "Evaluación de expresiones",
    n: 1,
    titulo: "Ejercicio 1 · Evaluación de expresiones.",
    enunciado: "Evalúa la expresión $f(x, y) = 2x^2 - 3xy + y^2$ para $x = -3$ y $y = 4$.",
    tipo: "texto",
    aceptadas: ["70"],
    solucion: "<ol><li>Sustituimos: $f(-3, 4) = 2(-3)^2 - 3(-3)(4) + (4)^2$.</li><li>Potencias: $(-3)^2 = 9$ y $4^2 = 16$. Recuerda que una potencia par de un número negativo es positiva.</li><li>Multiplicaciones: $-3 \\cdot (-3) \\cdot 4 = +36$. Entonces $2(9) = 18$.</li><li>Suma final: $f(-3, 4) = 18 + 36 + 16 = 70$.</li></ol><p class=\"mb-0\"><strong>Resultado:</strong> $70$.</p>"
  },

  {
    clase: 1,
    grupo: "Evaluación de expresiones",
    n: 2,
    titulo: "Ejercicio 2 · Propiedades de las operaciones.",
    enunciado: "Simplifica la expresión $3(2x - 5) - 4(x - 2) + 0$, agrupando términos semejantes.",
    tipo: "texto",
    aceptadas: ["2x-7", "-7+2x"],
    solucion: "<ol><li>Distributiva: $3(2x) - 3(5) - 4(x) + 4(2) = 6x - 15 - 4x + 8$. Observa que $-4 \\cdot (-2) = +8$.</li><li>El $+0$ es el elemento neutro aditivo, así que no cambia la expresión.</li><li>Agrupamos términos semejantes: $(6x - 4x) + (-15 + 8) = 2x - 7$.</li></ol><p class=\"mb-0\"><strong>Resultado:</strong> $2x - 7$.</p>"
  },

  {
    clase: 1,
    grupo: "Evaluación de expresiones",
    n: 3,
    titulo: "Ejercicio 3 · Términos semejantes.",
    enunciado: "Reduce la expresión $5a - [2b - 3(a - 2b) + 4a]$.",
    tipo: "texto",
    aceptadas: ["4a-8b", "-8b+4a"],
    solucion: "<ol><li>Distribuimos el $-3$ dentro del paréntesis: $5a - [2b - 3a + 6b + 4a]$.</li><li>Agrupamos dentro del corchete: $(-3a + 4a) = a$ y $(2b + 6b) = 8b$. Queda $5a - [a + 8b]$.</li><li>Distribuimos el signo negativo del corchete: $5a - a - 8b$.</li><li>Reducimos: $4a - 8b$.</li></ol><p class=\"mb-0\"><strong>Resultado:</strong> $4a - 8b$.</p>"
  },

  {
    clase: 1,
    grupo: "Evaluación de expresiones",
    n: 4,
    titulo: "Ejercicio 4 · Evaluación con signos.",
    enunciado: "Calcula el valor de $E = -2(a - b) + 3(ab - c)$ para $a = -2$, $b = -5$ y $c = 3$.",
    tipo: "texto",
    aceptadas: ["15"],
    solucion: "<ol><li>Evaluamos por bloques: $a - b = -2 - (-5) = 3$, y $ab - c = (-2)(-5) - 3 = 10 - 3 = 7$.</li><li>Sustituimos: $E = -2(3) + 3(7)$.</li><li>Calculamos: $E = -6 + 21 = 15$.</li></ol><p class=\"mb-0\"><strong>Resultado:</strong> $15$.</p>"
  },

  {
    clase: 1,
    grupo: "Ecuaciones de primer grado",
    n: 5,
    titulo: "Ejercicio 5.",
    enunciado: "Resuelve $4x - 7 = 13$. Piensa en la balanza: haz lo mismo en ambos lados.",
    tipo: "texto",
    aceptadas: ["5", "x=5"],
    solucion: "<ol><li>Sumamos $7$ en ambos lados: $4x = 20$.</li><li>Dividimos entre $4$: $x = 5$.</li></ol><p class=\"mb-0\"><strong>Resultado:</strong> $x = 5$.</p>"
  },

  {
    clase: 1,
    grupo: "Ecuaciones de primer grado",
    n: 6,
    titulo: "Ejercicio 6.",
    enunciado: "Resuelve $2(3x - 4) = 3(x + 2) + 1$.",
    tipo: "texto",
    aceptadas: ["5", "x=5"],
    solucion: "<ol><li>Distributiva en ambos lados: $6x - 8 = 3x + 6 + 1$.</li><li>Simplificamos el lado derecho: $6x - 8 = 3x + 7$.</li><li>Restamos $3x$: $3x - 8 = 7$.</li><li>Sumamos $8$: $3x = 15$, y dividimos entre $3$: $x = 5$.</li></ol><p class=\"mb-0\"><strong>Resultado:</strong> $x = 5$.</p>"
  },

  {
    clase: 1,
    grupo: "Ecuaciones de primer grado",
    n: 7,
    titulo: "Ejercicio 7.",
    enunciado: "Resuelve $7x - 3 = 2x + 12$, con la variable en ambos lados.",
    tipo: "texto",
    aceptadas: ["3", "x=3"],
    solucion: "<ol><li>Restamos $2x$: $5x - 3 = 12$.</li><li>Sumamos $3$: $5x = 15$.</li><li>Dividimos entre $5$: $x = 3$.</li></ol><p class=\"mb-0\"><strong>Resultado:</strong> $x = 3$.</p>"
  },

  {
    clase: 1,
    grupo: "Ecuaciones de primer grado",
    n: 8,
    titulo: "Ejercicio 8 · Comprobación.",
    enunciado: "Resuelve $5(x - 2) = 2(x + 4) - 3$ y comprueba tu solución sustituyéndola en la ecuación original.",
    tipo: "texto",
    aceptadas: ["5", "x=5"],
    solucion: "<ol><li>Distributiva: $5x - 10 = 2x + 8 - 3$, es decir, $5x - 10 = 2x + 5$.</li><li>Restamos $2x$ y sumamos $10$: $3x = 15$, así que $x = 5$.</li><li>Comprobación: en el lado izquierdo, $5(5 - 2) = 15$. En el derecho, $2(5 + 4) - 3 = 15$. Como $15 = 15$, la solución es correcta.</li></ol><p class=\"mb-0\"><strong>Resultado:</strong> $x = 5$.</p>"
  },

  {
    clase: 1,
    grupo: "Problemas verbales",
    n: 9,
    titulo: "Ejercicio 9.",
    enunciado: "En una competencia de lógica, el equipo A acumuló el doble de los puntos del equipo B menos 150. Entre los dos sumaron 1 200 puntos. ¿Cuántos puntos acumuló el equipo B?",
    tipo: "texto",
    aceptadas: ["450"],
    solucion: "<ol><li>Sea $x$ los puntos del equipo B. Entonces el equipo A tiene $2x - 150$.</li><li>Planteamos: $x + (2x - 150) = 1200$.</li><li>Resolvemos: $3x - 150 = 1200$, así que $3x = 1350$ y $x = 450$.</li></ol><p class=\"mb-0\"><strong>Resultado:</strong> el equipo B acumuló $450$ puntos. (El equipo A tiene $750$.)</p>"
  },

  {
    clase: 1,
    grupo: "Problemas verbales",
    n: 10,
    titulo: "Ejercicio 10.",
    enunciado: "Una reserva de memoria se reparte entre dos entidades. La primera almacena 40 elementos más que el triple de la segunda. Entre las dos suman 520 elementos. ¿Cuántos elementos almacena la segunda entidad?",
    tipo: "texto",
    aceptadas: ["120"],
    solucion: "<ol><li>Sea $y$ los elementos de la segunda entidad. La primera tiene $3y + 40$.</li><li>Planteamos: $y + (3y + 40) = 520$.</li><li>Resolvemos: $4y + 40 = 520$, así que $4y = 480$ y $y = 120$.</li></ol><p class=\"mb-0\"><strong>Resultado:</strong> la segunda entidad almacena $120$ elementos (la primera, $360$).</p>"
  },

  {
    clase: 1,
    grupo: "Problemas verbales",
    n: 11,
    titulo: "Ejercicio 11.",
    enunciado: "En una olimpiada, Ana, Beto y Carla resuelven en conjunto 45 problemas. Beto resolvió 3 más que Ana, y Carla resolvió el doble que Beto. ¿Cuántos problemas resolvió cada uno?",
    tipo: "multi-texto",
    campos: [
      { etiqueta: "Ana", aceptadas: ["9"] },
      { etiqueta: "Beto", aceptadas: ["12"] },
      { etiqueta: "Carla", aceptadas: ["24"] }
    ],
    solucion: "<ol><li>Sea $x$ los problemas de Ana. Beto tiene $x + 3$ y Carla tiene $2(x + 3) = 2x + 6$.</li><li>Planteamos: $x + (x + 3) + (2x + 6) = 45$.</li><li>Simplificamos: $4x + 9 = 45$, así que $4x = 36$ y $x = 9$.</li><li>Entonces Ana resolvió $9$, Beto $12$ y Carla $24$. Comprobación: $9 + 12 + 24 = 45$.</li></ol><p class=\"mb-0\"><strong>Resultado:</strong> Ana 9, Beto 12, Carla 24.</p>"
  },

  {
    clase: 1,
    grupo: "Lógica",
    n: 12,
    titulo: "Ejercicio 12 · Tablas de verdad.",
    enunciado: "Sean $P$ verdadera ($V$) y $Q$ falsa ($F$). Determina el valor de verdad de $(\\lnot P \\lor Q) \\land \\lnot(P \\land Q)$.",
    tipo: "texto",
    esLogica: true,
    aceptadas: ["F", "falso"],
    solucion: "<ol><li>Primer bloque: $\\lnot P = \\lnot V = F$, y $F \\lor Q = F \\lor F = F$.</li><li>Segundo bloque: $P \\land Q = V \\land F = F$, y $\\lnot(F) = V$.</li><li>Resultado: $F \\land V = F$.</li></ol><p class=\"mb-0\"><strong>Resultado:</strong> falso ($F$).</p>"
  },

  {
    clase: 1,
    grupo: "Lógica",
    n: 13,
    titulo: "Ejercicio 13 · Negación del condicional.",
    enunciado: "Sea la proposición \"Si entreno diariamente ($P$), entonces gano la competencia ($Q$)\". Escribe su negación en forma simbólica.",
    tipo: "texto",
    esLogica: true,
    botonesSimbolos: true,
    aceptadas: ["P ∧ ¬Q", "P y no Q", "P ∧ NO Q"],
    solucion: "<ol><li>El condicional $P \\rightarrow Q$ solo es falso cuando $P$ es verdadera y $Q$ es falsa. Por eso, su negación es $\\lnot(P \\rightarrow Q) \\equiv P \\land \\lnot Q$.</li><li>En palabras: \"Entreno diariamente y no gano la competencia\".</li><li>Cuidado: \"Si no entreno, no gano\" <strong>no</strong> es la negación. Es un error común llamado falacia de negar el antecedente.</li></ol><p class=\"mb-0\"><strong>Resultado:</strong> $P \\land \\lnot Q$, es decir, \"entreno diariamente y no gano la competencia\".</p>"
  },

  {
    clase: 1,
    grupo: "Lógica",
    n: 14,
    titulo: "Ejercicio 14 · Leyes de De Morgan.",
    enunciado: "Aplica las leyes de De Morgan para simplificar $\\lnot(\\lnot P \\lor Q)$ y $\\lnot(P \\land \\lnot Q)$.",
    tipo: "multi-texto",
    esLogica: true,
    botonesSimbolos: true,
    campos: [
      { etiqueta: "Parte 1: ¬(¬P ∨ Q)", aceptadas: ["P ∧ ¬Q", "P y no Q", "P ∧ NO Q"] },
      { etiqueta: "Parte 2: ¬(P ∧ ¬Q)", aceptadas: ["¬P ∨ Q", "NO P o Q", "no P o Q", "¬P o Q", "no P ∨ Q"] }
    ],
    solucion: "<p>Las leyes de De Morgan son:</p><ul><li>$\\lnot(A \\lor B) \\equiv \\lnot A \\land \\lnot B$</li><li>$\\lnot(A \\land B) \\equiv \\lnot A \\lor \\lnot B$</li></ul><ol><li>$\\lnot(\\lnot P \\lor Q) \\equiv \\lnot(\\lnot P) \\land \\lnot Q \\equiv P \\land \\lnot Q$. La doble negación se anula: $\\lnot(\\lnot P) \\equiv P$.</li><li>$\\lnot(P \\land \\lnot Q) \\equiv \\lnot P \\lor \\lnot(\\lnot Q) \\equiv \\lnot P \\lor Q$.</li></ol><p class=\"mb-0\"><strong>Resultado:</strong> $\\lnot(\\lnot P \\lor Q) \\equiv P \\land \\lnot Q$ y $\\lnot(P \\land \\lnot Q) \\equiv \\lnot P \\lor Q$.</p>"
  },

  /* ---------------- TEMA 2 · Aritmética, conteo y casos ---------------- */

  { clase: 2, parte: "A", n: 1, tipo: "multi",
    enunciado: "Calcula el cociente y el residuo de $23 \\div 5$.",
    campos: [{ etiqueta: "Cociente", valor: 4 }, { etiqueta: "Residuo", valor: 3 }],
    explicacion: "$23 = 5 \\cdot 4 + 3$. El cociente es $4$ y el residuo es $3$." },

  { clase: 2, parte: "A", n: 2, tipo: "num", valor: 3,
    enunciado: "¿Cuántos autobuses de $40$ asientos se necesitan para $95$ personas?",
    explicacion: "$\\lceil 95 \\div 40 \\rceil = 3$. Dos autobuses solo llevan $80$ personas." },

  { clase: 2, parte: "A", n: 3, tipo: "num", valor: 12,
    enunciado: "Un restaurante ofrece $4$ sopas y $3$ tortas. ¿Cuántas combinaciones hay de una sopa y una torta?",
    explicacion: "Principio del producto: $4 \\cdot 3 = 12$." },

  { clase: 2, parte: "A", n: 4, tipo: "num", valor: 5,
    enunciado: "Puedes elegir una fruta ($3$ opciones) o una verdura ($2$ opciones). ¿Cuántas opciones tienes?",
    explicacion: "Son opciones que no se mezclan (o una o la otra), así que se suman: $3 + 2 = 5$." },

  { clase: 2, parte: "A", n: 5, tipo: "num", valor: 90,
    enunciado: "¿Cuántos números de dos dígitos hay (del $10$ al $99$)?",
    explicacion: "$99 - 10 + 1 = 90$." },

  { clase: 2, parte: "B", n: 6, tipo: "num", valor: 15,
    enunciado: "¿Cuál es $\\lceil 100 \\div 7 \\rceil$?",
    explicacion: "$100 \\div 7 = 14.28\\ldots$, y el techo (redondeo hacia arriba) es $15$. Otra forma: $\\dfrac{100 + 6}{7} = 15$." },

  { clase: 2, parte: "B", n: 7, tipo: "num", valor: 8,
    enunciado: "Un par ordenado $(x, y)$ tiene $x \\in \\{1, 2, 3, 4\\}$ y $y \\in \\{A, B\\}$. ¿Cuántos pares distintos hay?",
    explicacion: "$4$ opciones para $x$ y $2$ para $y$: $4 \\cdot 2 = 8$." },

  { clase: 2, parte: "B", n: 8, tipo: "num", valor: 120,
    enunciado: "Un equipo de $6$ personas asigna $3$ roles distintos: capitán, portero y delantero. ¿De cuántas formas?",
    explicacion: "El orden importa: $6 \\cdot 5 \\cdot 4 = 120$." },

  { clase: 2, parte: "B", n: 9, tipo: "num", valor: 30,
    enunciado: "De $6$ estudiantes hay que elegir presidente y vicepresidente distintos. ¿De cuántas formas?",
    explicacion: "Presidente: $6$ opciones. Vicepresidente: $5$ restantes. $6 \\cdot 5 = 30$." },

  { clase: 2, parte: "B", n: 10, tipo: "num", valor: 180,
    enunciado: "¿Cuántos números de tres dígitos son múltiplos de $5$?",
    explicacion: "El tercer dígito solo puede ser $0$ o $5$ (2 opciones). El primero tiene $9$ opciones ($1$ a $9$) y el segundo $10$. Entonces $9 \\cdot 10 \\cdot 2 = 180$." },

  /* ---------------- TEMA 3 · Geometría, trigonometría y patrones ---------------- */

  { clase: 3, parte: "A", n: 1, tipo: "num", valor: 65,
    enunciado: "Un triángulo tiene ángulos de $40^\\circ$ y $75^\\circ$. ¿Cuánto mide el tercero (en grados)?",
    explicacion: "La suma de los ángulos de un triángulo es $180^\\circ$: $180^\\circ - 40^\\circ - 75^\\circ = 65^\\circ$." },

  { clase: 3, parte: "A", n: 2, tipo: "num", valor: 13,
    enunciado: "Un triángulo rectángulo tiene catetos de $5$ y $12$. ¿Cuánto mide la hipotenusa?",
    explicacion: "$5^2 + 12^2 = 25 + 144 = 169$, y $\\sqrt{169} = 13$." },

  { clase: 3, parte: "A", n: 3, tipo: "num", valor: 5,
    enunciado: "Calcula la distancia entre los puntos $(2, 3)$ y $(5, 7)$.",
    explicacion: "Diferencias $3$ y $4$. Distancia: $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$." },

  { clase: 3, parte: "A", n: 4, tipo: "num", valor: 10,
    enunciado: "En un triángulo rectángulo, la hipotenusa mide $20$ y un ángulo es de $30^\\circ$. ¿Cuánto mide el cateto opuesto a ese ángulo?",
    explicacion: "Cateto opuesto $= 20 \\cdot \\sin 30^\\circ = 20 \\cdot \\tfrac{1}{2} = 10$." },

  { clase: 3, parte: "A", n: 5, tipo: "num", valor: 48,
    enunciado: "La secuencia $3, 8, 13, \\ldots$ ¿cuánto vale su décimo término?",
    explicacion: "Es aritmética con diferencia $5$: $a_{10} = 3 + 9 \\cdot 5 = 48$." },

  { clase: 3, parte: "B", n: 6, tipo: "num", valor: 55,
    enunciado: "Un triángulo rectángulo tiene un ángulo de $35^\\circ$. ¿Cuánto mide el otro ángulo agudo (en grados)?",
    explicacion: "Los dos ángulos agudos suman $90^\\circ$: $90^\\circ - 35^\\circ = 55^\\circ$." },

  { clase: 3, parte: "B", n: 7, tipo: "num", valor: 90,
    enunciado: "Un cuadrilátero tiene ángulos de $90^\\circ$, $100^\\circ$ y $80^\\circ$. ¿Cuánto mide el cuarto (en grados)?",
    explicacion: "La suma de los ángulos interiores de un cuadrilátero es $360^\\circ$: $360^\\circ - 90^\\circ - 100^\\circ - 80^\\circ = 90^\\circ$." },

  { clase: 3, parte: "B", n: 8, tipo: "num", valor: 5,
    enunciado: "Calcula la distancia entre $(-1, -1)$ y $(2, 3)$.",
    explicacion: "Diferencias $3$ en $x$ y $4$ en $y$. Distancia: $\\sqrt{3^2 + 4^2} = 5$." },

  { clase: 3, parte: "B", n: 9, tipo: "num", valor: 7,
    enunciado: "Un triángulo rectángulo tiene hipotenusa de $14$ y un ángulo de $60^\\circ$. ¿Cuánto mide el cateto adyacente a ese ángulo? (Pista: $\\cos 60^\\circ = \\tfrac{1}{2}$).",
    explicacion: "Cateto adyacente $= 14 \\cdot \\cos 60^\\circ = 14 \\cdot \\tfrac{1}{2} = 7$." },

  { clase: 3, parte: "B", n: 10, tipo: "num", valor: 8,
    enunciado: "Una escalera de $10$ m se apoya en una pared. Su base queda a $6$ m de la pared. ¿A qué altura llega (en metros)?",
    explicacion: "Pitágoras: $h^2 = 10^2 - 6^2 = 100 - 36 = 64$, así que $h = 8$ m." }
];
