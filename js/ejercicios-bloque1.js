/* ==========================================================
   Bloque 1 · Banco de ejercicios (Temas 1, 2 y 3)
   - Tema 1 · Álgebra y lógica: 14 ejercicios
   - Tema 2 · Aritmética, conteo y casos: 11 ejercicios
   - Tema 3 · Geometría, trigonometría y patrones: 10 ejercicios
   Las fórmulas se muestran con KaTeX ($…$ y $$…$$).
   ========================================================== */

const EJERCICIOS_BLOQUE1 = [

  /* ================ TEMA 1 · Álgebra y lógica (14 ejercicios) ================ */

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
    aceptadas: ["2x-7", "2x - 7", "-7+2x"],
    solucion: "<ol><li>Distributiva: $3(2x) - 3(5) - 4(x) + 4(2) = 6x - 15 - 4x + 8$. Observa que $-4 \\cdot (-2) = +8$.</li><li>El $+0$ es el elemento neutro aditivo, así que no cambia la expresión.</li><li>Agrupamos términos semejantes: $(6x - 4x) + (-15 + 8) = 2x - 7$.</li></ol><p class=\"mb-0\"><strong>Resultado:</strong> $2x - 7$.</p>"
  },

  {
    clase: 1,
    grupo: "Evaluación de expresiones",
    n: 3,
    titulo: "Ejercicio 3 · Términos semejantes.",
    enunciado: "Reduce la expresión $5a - [2b - 3(a - 2b) + 4a]$.",
    tipo: "texto",
    aceptadas: ["4a-8b", "4a - 8b", "-8b+4a"],
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
    aceptadas: ["450", "450 puntos"],
    solucion: "<ol><li>Sea $x$ los puntos del equipo B. Entonces el equipo A tiene $2x - 150$.</li><li>Planteamos: $x + (2x - 150) = 1200$.</li><li>Resolvemos: $3x - 150 = 1200$, así que $3x = 1350$ y $x = 450$.</li></ol><p class=\"mb-0\"><strong>Resultado:</strong> el equipo B acumuló $450$ puntos. (El equipo A tiene $750$.)</p>"
  },

  {
    clase: 1,
    grupo: "Problemas verbales",
    n: 10,
    titulo: "Ejercicio 10.",
    enunciado: "Una reserva de memoria se reparte entre dos entidades. La primera almacena 40 elementos más que el triple de la segunda. Entre las dos suman 520 elementos. ¿Cuántos elementos almacena la segunda entidad?",
    tipo: "texto",
    aceptadas: ["120", "120 elementos"],
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
    aceptadas: ["P ∧ ¬Q", "P y no Q", "P ∧ NO Q", "entreno diariamente y no gano la competencia"],
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

  /* ================ TEMA 2 · Aritmética, conteo y casos (11 ejercicios) ================ */

  {
    clase: 2,
    grupo: "Ejercicios guiados",
    n: 1,
    titulo: "Ejercicio 1 · Paridad.",
    enunciado: "En una preparatoria de Guadalajara se organizó una colecta escolar de libros. Asistieron $N = 47$ estudiantes. La regla de donación establece: si $N$ es par, todos los estudiantes forman parejas de 2 personas y cada pareja dona 3 libros. Si $N$ es impar, el primer estudiante en llegar dona 5 libros y los $N - 1$ estudiantes restantes forman parejas, donando 3 libros por pareja. ¿Cuántos libros se recolectaron en total?",
    tipo: "texto",
    aceptadas: ["74", "74 libros"],
    solucion: "<ol><li>Analizar la paridad de $N$: el número 47 termina en 7, que es impar. Por tanto $N = 2k + 1$ y no es divisible entre 2.</li><li>Aplicar la regla del caso impar: el primer estudiante dona 5 libros. Quedan $N - 1 = 46$ estudiantes, cantidad par, así que forman $\\lfloor 46 / 2 \\rfloor = 23$ parejas.</li><li>Calcular la suma final: las 23 parejas donan $23 \\cdot 3 = 69$ libros. Al sumar la aportación inicial: $5 + 69 = 74$.</li><li>Resultado final: se recolectaron 74 libros.</li></ol>"
  },

  {
    clase: 2,
    grupo: "Ejercicios guiados",
    n: 2,
    titulo: "Ejercicio 2 · Piso, techo y módulo.",
    enunciado: "Un agricultor en Michoacán cosechó $N = 183$ kg de aguacate. Para transportarlos al mercado de abastos usa cajas con capacidad máxima de $K = 8$ kg cada una.<br>a) ¿Cuántas cajas llenará por completo?<br>b) ¿Cuántos kilogramos quedarán sueltos en la caja incompleta?<br>c) ¿Cuántas cajas necesita en total para llevar toda su cosecha?",
    tipo: "multi-texto",
    campos: [
      { etiqueta: "a) Cajas llenas", aceptadas: ["22", "22 cajas"] },
      { etiqueta: "b) Kilogramos sueltos", aceptadas: ["7", "7 kg"] },
      { etiqueta: "c) Cajas en total", aceptadas: ["23", "23 cajas"] }
    ],
    solucion: "<ol><li>Cajas llenas (función piso): $\\lfloor 183 / 8 \\rfloor = \\lfloor 22.875 \\rfloor = 22$.</li><li>Kilogramos sueltos (operación módulo): $183 = 8 \\cdot 22 + r$, entonces $r = 183 - 176 = 7$ kg. Es decir, $183 \\bmod 8 = 7$.</li><li>Total de cajas (techo con el truco discreto): $\\lceil 183 / 8 \\rceil = \\lfloor (183 + 8 - 1) / 8 \\rfloor = \\lfloor 190 / 8 \\rfloor = \\lfloor 23.75 \\rfloor = 23$.</li><li>Resultado final: llena 22 cajas completas, quedan 7 kg sueltos y necesita 23 cajas en total.</li></ol>"
  },

  {
    clase: 2,
    grupo: "Ejercicios guiados",
    n: 3,
    titulo: "Ejercicio 3 · Suma cerrada.",
    enunciado: "En un tianguis artesanal de Oaxaca, los puestos están acomodados en forma triangular: la primera fila tiene 1 puesto, la segunda 2, la tercera 3, y así sucesivamente hasta la fila 30. Cada puesto paga un consumo fijo de 100 pesos diarios por electricidad. ¿Cuál es el cobro total diario del tianguis?",
    tipo: "texto",
    aceptadas: ["46500", "46,500", "46500 pesos", "46,500 pesos"],
    solucion: "<ol><li>Número total de puestos: $S = 1 + 2 + 3 + \\dots + 30 = \\sum_{x=1}^{30} x$.</li><li>Fórmula cerrada: $S = \\frac{30 \\cdot 31}{2} = 15 \\cdot 31 = 465$ puestos.</li><li>Costo total: $465 \\cdot 100 = 46{,}500$ pesos.</li><li>Resultado final: el cobro diario de electricidad es de 46,500 pesos.</li></ol>"
  },

  {
    clase: 2,
    grupo: "Ejercicios guiados",
    n: 4,
    titulo: "Ejercicio 4 · Casos e Inclusión-Exclusión.",
    enunciado: "En un grupo de bachillerato de 50 estudiantes de la Ciudad de México se hizo un censo sobre su transporte diario:<br>• 28 estudiantes usan el Metro ($M$).<br>• 20 estudiantes usan el Metrobús ($B$).<br>• 8 estudiantes usan ambos medios ($M \\cap B$).<br>¿Cuántos estudiantes no usan ni el Metro ni el Metrobús?",
    tipo: "texto",
    aceptadas: ["10", "10 estudiantes"],
    solucion: "<ol><li>Universo y cardinalidades: $|U| = 50$, $|M| = 28$, $|B| = 20$ y $|M \\cap B| = 8$.</li><li>Inclusión-Exclusión: $|M \\cup B| = |M| + |B| - |M \\cap B| = 28 + 20 - 8 = 40$ estudiantes.</li><li>Complemento: los que no usan ninguno son $|U| - |M \\cup B| = 50 - 40 = 10$.</li><li>Resultado final: 10 estudiantes no usan ninguno de los dos medios.</li></ol>"
  },

  {
    clase: 2,
    grupo: "Ejercicios guiados",
    n: 5,
    titulo: "Ejercicio 5 · Combinado (aritmética, conteo y paridad).",
    enunciado: "Un estudiante ahorra monedas de 10 pesos durante $n = 15$ días consecutivos. Los días de número impar (día 1, 3, 5...) guarda 2 monedas de 10 pesos. Los días de número par (día 2, 4, 6...) guarda 3 monedas de 10 pesos. ¿Cuál es la cantidad total ahorrada, en pesos, al terminar los 15 días?",
    tipo: "texto",
    aceptadas: ["370", "370 pesos"],
    solucion: "<ol><li>Días impares en el intervalo $[1, 15]$: $\\lceil 15 / 2 \\rceil = 8$ días (1, 3, 5, 7, 9, 11, 13, 15).</li><li>Días pares: $\\lfloor 15 / 2 \\rfloor = 7$ días (2, 4, 6, 8, 10, 12, 14).</li><li>Monedas guardadas: $8 \\cdot 2 + 7 \\cdot 3 = 16 + 21 = 37$ monedas.</li><li>Cantidad en pesos: $37 \\cdot 10 = 370$ pesos.</li><li>Resultado final: el ahorro total es de 370 pesos.</li></ol>"
  },

  {
    clase: 2,
    grupo: "Ejercicios independientes",
    n: 6,
    titulo: "Ejercicio 6 · Divisibilidad y residuo.",
    enunciado: "En un club de robótica de Monterrey participan $N = 65$ estudiantes. La regla de inscripción indica: si $N$ es divisible entre 3, forman equipos de 3 integrantes; de lo contrario, se arman tantas parejas de 2 integrantes como sea posible y las personas sobrantes participan como jueces del evento. ¿Cuántas parejas de competidores se forman y cuántas personas actúan como jueces?",
    tipo: "multi-texto",
    campos: [
      { etiqueta: "Parejas", aceptadas: ["32", "32 parejas"] },
      { etiqueta: "Jueces", aceptadas: ["1", "1 juez"] }
    ],
    solucion: "<ol><li>Evaluar la divisibilidad entre 3: $65 \\bmod 3 = 2 \\neq 0$, así que no se forman equipos de 3.</li><li>Formar parejas: $\\lfloor 65 / 2 \\rfloor = 32$ parejas.</li><li>Calcular los jueces: $65 \\bmod 2 = 1$, es decir, queda 1 estudiante sin pareja que actúa como juez.</li><li>Resultado final: 32 parejas y 1 juez.</li></ol>"
  },

  {
    clase: 2,
    grupo: "Ejercicios independientes",
    n: 7,
    titulo: "Ejercicio 7 · Piso y módulo.",
    enunciado: "Un camión repartidor en Guadalajara transporta $N = 250$ refrescos empacados en rejas plásticas. Cada reja completa almacena $K = 12$ refrescos. ¿Cuántas rejas quedan llenas al 100% de su capacidad y cuántos refrescos sobran sin poder completar una reja adicional?",
    tipo: "multi-texto",
    campos: [
      { etiqueta: "Rejas llenas", aceptadas: ["20", "20 rejas"] },
      { etiqueta: "Refrescos sueltos", aceptadas: ["10", "10 refrescos"] }
    ],
    solucion: "<ol><li>Rejas completas (función piso): $\\lfloor 250 / 12 \\rfloor = \\lfloor 20.83 \\rfloor = 20$.</li><li>Refrescos sueltos (módulo): $250 = 12 \\cdot 20 + 10$, así que $250 \\bmod 12 = 10$.</li><li>Resultado final: 20 rejas llenas y 10 refrescos sueltos.</li></ol>"
  },

  {
    clase: 2,
    grupo: "Ejercicios independientes",
    n: 8,
    titulo: "Ejercicio 8 · Progresión aritmética.",
    enunciado: "En una biblioteca escolar de Puebla, un mueble acomoda sus libros en repisas. La primera repisa tiene 5 libros y cada repisa siguiente tiene 3 libros más que la anterior. Si el mueble tiene $n = 10$ repisas en total, ¿cuántos libros hay en todo el mueble?",
    tipo: "texto",
    aceptadas: ["185", "185 libros"],
    solucion: "<ol><li>Es una progresión aritmética con primer término $a = 5$, $n = 10$ términos y diferencia $d = 3$.</li><li>Último término: $b = 5 + 3 \\cdot (10 - 1) = 32$.</li><li>Suma cerrada: $\\frac{10 \\cdot (5 + 32)}{2} = 5 \\cdot 37 = 185$ libros.</li><li>Resultado final: hay 185 libros en el mueble.</li></ol>"
  },

  {
    clase: 2,
    grupo: "Ejercicios independientes",
    n: 9,
    titulo: "Ejercicio 9 · Inclusión-Exclusión.",
    enunciado: "En una unidad deportiva de Querétaro hay un grupo de 60 atletas. De ellos, 35 entrenan los 100 metros planos, 25 entrenan salto de longitud y 10 practican ambas disciplinas. ¿Cuántos atletas no practican ninguna de estas dos pruebas?",
    tipo: "texto",
    aceptadas: ["10", "10 atletas"],
    solucion: "<ol><li>Atletas que practican al menos una prueba: $|A \\cup B| = |A| + |B| - |A \\cap B| = 35 + 25 - 10 = 50$.</li><li>Complemento: $|U| - |A \\cup B| = 60 - 50 = 10$.</li><li>Resultado final: 10 atletas no practican ninguna de las dos pruebas.</li></ol>"
  },

  {
    clase: 2,
    grupo: "Ejercicios independientes",
    n: 10,
    titulo: "Ejercicio 10 · Progresión geométrica.",
    enunciado: "En una maratón de lectura escolar en Mérida, una estudiante lee un libro de 120 páginas. El primer día lee 1 página, el segundo lee 2, el tercero 4, y así sucesivamente, duplicando las páginas leídas cada día. ¿En cuántos días habrá leído la totalidad de las páginas del libro?",
    tipo: "texto",
    aceptadas: ["7", "7 días", "7 dias"],
    solucion: "<ol><li>Tras $d$ días, la suma acumulada es $1 + 2 + 4 + \\dots + 2^{d-1} = 2^d - 1$.</li><li>Para $d = 6$: $2^6 - 1 = 63$ páginas, insuficiente.</li><li>Para $d = 7$: $2^7 - 1 = 127$ páginas, que supera las 120 del libro.</li><li>Resultado final: la estudiante termina el libro en 7 días.</li></ol>"
  },

  {
    clase: 2,
    grupo: "Ejercicios independientes",
    n: 11,
    titulo: "Ejercicio 11 · Simulación en papel.",
    enunciado: "En una cafetería de Mazatlán, un contador de clientes empieza en 0. Cada vez que entra un cliente, el contador sube 1. Cada vez que sale un cliente, baja 1, pero nunca puede bajar de 0: si el contador está en 0 y sale alguien, se registra un error y el contador se queda en 0. Los eventos, en orden, son: entra, entra, entra, sale, sale, sale, sale, entra, sale. ¿Cuál es el valor final del contador y cuántos errores se registraron?",
    tipo: "multi-texto",
    campos: [
      { etiqueta: "Contador final", aceptadas: ["0"] },
      { etiqueta: "Errores", aceptadas: ["1", "1 error"] }
    ],
    solucion: "<div class=\"table-responsive\"><table class=\"table table-sm lectura-tabla\"><thead><tr><th class=\"text-center\">Evento</th><th>Acción</th><th class=\"text-center\">Contador</th><th class=\"text-center\">Errores acumulados</th></tr></thead><tbody><tr><td class=\"text-center\">0</td><td>Inicio</td><td class=\"text-center\">0</td><td class=\"text-center\">0</td></tr><tr><td class=\"text-center\">1</td><td>Entra</td><td class=\"text-center\">1</td><td class=\"text-center\">0</td></tr><tr><td class=\"text-center\">2</td><td>Entra</td><td class=\"text-center\">2</td><td class=\"text-center\">0</td></tr><tr><td class=\"text-center\">3</td><td>Entra</td><td class=\"text-center\">3</td><td class=\"text-center\">0</td></tr><tr><td class=\"text-center\">4</td><td>Sale</td><td class=\"text-center\">2</td><td class=\"text-center\">0</td></tr><tr><td class=\"text-center\">5</td><td>Sale</td><td class=\"text-center\">1</td><td class=\"text-center\">0</td></tr><tr><td class=\"text-center\">6</td><td>Sale</td><td class=\"text-center\">0</td><td class=\"text-center\">0</td></tr><tr><td class=\"text-center\">7</td><td>Sale (el contador ya está en 0)</td><td class=\"text-center\">0</td><td class=\"text-center\">1</td></tr><tr><td class=\"text-center\">8</td><td>Entra</td><td class=\"text-center\">1</td><td class=\"text-center\">1</td></tr><tr><td class=\"text-center\">9</td><td>Sale</td><td class=\"text-center\">0</td><td class=\"text-center\">1</td></tr></tbody></table></div><p class=\"mb-0\">Resultado final: el contador termina en 0 y se registró 1 error. Simular evento por evento permite detectar el caso límite del evento 7, que una cuenta rápida (\"entran 4 y salen 5\") no revela.</p>"
  },

  /* --- Subtemas nuevos · Ejercicios guiados (Tema 2) --- */

  {
    clase: 2,
    grupo: "Subtemas nuevos · Ejercicios guiados",
    n: 12,
    titulo: "Ejercicio 12 · Residuo de una expresión.",
    enunciado: "Calcula el residuo de $(123 + 456 \\cdot 789) \\bmod 10$.",
    tipo: "texto",
    placeholder: "Escribe tu respuesta (ej. 7)",
    aceptadas: ["7"],
    solucion: "<ol class=\"mb-2\"><li>Reducimos cada término módulo 10 usando su última cifra: $123 \\bmod 10 = 3$, $456 \\bmod 10 = 6$ y $789 \\bmod 10 = 9$.</li><li>Sustituimos: $(123 + 456 \\cdot 789) \\bmod 10 = (3 + 6 \\cdot 9) \\bmod 10$.</li><li>Multiplicamos: $6 \\cdot 9 = 54$, y $54 \\bmod 10 = 4$.</li><li>Sumamos: $(3 + 4) \\bmod 10 = 7$.</li><li>Resultado: el residuo es 7.</li></ol><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> 7</p>"
  },

  {
    clase: 2,
    grupo: "Subtemas nuevos · Ejercicios guiados",
    n: 13,
    titulo: "Ejercicio 13 · Días de la semana.",
    enunciado: "Si hoy es jueves, ¿qué día de la semana será dentro de 15 días? Usa 0 para el domingo, 1 para el lunes, y así sucesivamente hasta 6 para el sábado.",
    tipo: "texto",
    placeholder: "Escribe el día (ej. viernes)",
    aceptadas: ["viernes"],
    solucion: "<ol class=\"mb-2\"><li>Como la semana tiene 7 días, trabajamos módulo 7. El jueves es el día 4.</li><li>Calculamos $15 \\bmod 7 = 1$, porque $15 = 2 \\cdot 7 + 1$. Las dos semanas completas no cambian el día.</li><li>Sumamos el residuo: $(4 + 1) \\bmod 7 = 5$.</li><li>El día 5 es viernes.</li></ol><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> viernes</p>"
  },

  {
    clase: 2,
    grupo: "Subtemas nuevos · Ejercicios guiados",
    n: 14,
    titulo: "Ejercicio 14 · Paquetes idénticos.",
    enunciado: "Un club de ciencia tiene 120 tubos de ensayo y 144 portaobjetos. Quiere armar paquetes idénticos, con la misma cantidad de tubos y de portaobjetos en cada uno, sin que sobre material. ¿Cuál es el número máximo de paquetes que se pueden armar?",
    tipo: "texto",
    placeholder: "Escribe tu respuesta (ej. 24)",
    aceptadas: ["24", "24 paquetes"],
    solucion: "<ol class=\"mb-2\"><li>Como buscamos el máximo número de paquetes sin que sobre nada, calculamos el máximo común divisor, $\\text{mcd}(120, 144)$.</li><li>Factorizamos: $120 = 2^3 \\cdot 3 \\cdot 5$ y $144 = 2^4 \\cdot 3^2$.</li><li>Tomamos los primos comunes con su menor exponente: $\\text{mcd}(120, 144) = 2^3 \\cdot 3 = 24$.</li><li>Se pueden armar 24 paquetes. Cada uno tendrá $120 / 24 = 5$ tubos y $144 / 24 = 6$ portaobjetos.</li></ol><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> 24</p>"
  },

  {
    clase: 2,
    grupo: "Subtemas nuevos · Ejercicios guiados",
    n: 15,
    titulo: "Ejercicio 15 · Coincidencia de dos señales.",
    enunciado: "Una luz de señalización parpadea cada 15 segundos y una alarma suena cada 20 segundos. Si coinciden a las 8:00 a.m., ¿cuántos segundos pasan para que vuelvan a coincidir por primera vez?",
    tipo: "texto",
    placeholder: "Escribe tu respuesta (ej. 60)",
    aceptadas: ["60", "60 segundos"],
    solucion: "<ol class=\"mb-2\"><li>Buscamos el primer instante de encuentro, así que calculamos el mínimo común múltiplo, $\\text{mcm}(15, 20)$.</li><li>Factorizamos: $15 = 3 \\cdot 5$ y $20 = 2^2 \\cdot 5$.</li><li>Tomamos todos los primos con su mayor exponente: $\\text{mcm}(15, 20) = 2^2 \\cdot 3 \\cdot 5 = 60$.</li><li>Vuelven a coincidir después de 60 segundos, es decir, a las 8:01 a.m.</li></ol><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> 60, 60 segundos</p>"
  },

  /* --- Subtemas nuevos · Ejercicios independientes (Tema 2) --- */

  {
    clase: 2,
    grupo: "Subtemas nuevos · Ejercicios independientes",
    n: 16,
    titulo: "Ejercicio 16 · Residuo con resta negativa.",
    enunciado: "Determina el valor exacto de $(18 \\cdot 25 - 11) \\bmod 6$.",
    tipo: "texto",
    placeholder: "Escribe tu respuesta (ej. 1)",
    aceptadas: ["1"],
    solucion: "<p class=\"mb-2\"><strong>Procedimiento breve:</strong> reducimos cada término módulo 6: $18 \\bmod 6 = 0$, $25 \\bmod 6 = 1$ y $11 \\bmod 6 = 5$. Sustituimos: $(0 \\cdot 1 - 5) \\bmod 6$. Como el resultado intermedio es negativo, le sumamos el módulo para llevarlo al rango $[0, 5]$: $-5 + 6 = 1$.</p><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> 1</p>"
  },

  {
    clase: 2,
    grupo: "Subtemas nuevos · Ejercicios independientes",
    n: 17,
    titulo: "Ejercicio 17 · Hora en un reloj de 12 horas.",
    enunciado: "Un reloj analógico marca las 8 horas. ¿Qué hora marcará después de 50 horas? Responde con la hora del reloj de 12 horas.",
    tipo: "texto",
    placeholder: "Escribe la hora (ej. 10)",
    aceptadas: ["10", "10 horas", "las 10"],
    solucion: "<p class=\"mb-2\"><strong>Procedimiento breve:</strong> el reloj de 12 horas es un ciclo módulo 12. Calculamos $50 \\bmod 12 = 2$, porque $50 = 4 \\cdot 12 + 2$. Sumamos el residuo a la hora actual: $(8 + 2) \\bmod 12 = 10$.</p><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> 10, 10 horas, las 10</p>"
  },

  {
    clase: 2,
    grupo: "Subtemas nuevos · Ejercicios independientes",
    n: 18,
    titulo: "Ejercicio 18 · Tramos de alambre.",
    enunciado: "Un carpintero tiene dos alambres de 180 cm y 250 cm. Quiere cortarlos en trozos de la misma longitud, lo más largos posible, sin desperdiciar nada. ¿Cuál debe ser la longitud de cada trozo, en centímetros?",
    tipo: "texto",
    placeholder: "Escribe tu respuesta (ej. 10)",
    aceptadas: ["10", "10 cm"],
    solucion: "<p class=\"mb-2\"><strong>Procedimiento breve:</strong> buscamos el máximo común divisor. Factorizamos $180 = 2^2 \\cdot 3^2 \\cdot 5$ y $250 = 2 \\cdot 5^3$. Tomamos los primos comunes con su menor exponente: $\\text{mcd}(180, 250) = 2 \\cdot 5 = 10$.</p><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> 10, 10 cm</p>"
  },

  {
    clase: 2,
    grupo: "Subtemas nuevos · Ejercicios independientes",
    n: 19,
    titulo: "Ejercicio 19 · Autobuses que vuelven a coincidir.",
    enunciado: "Tres autobuses salen de la misma estación a las 6:00 a.m. El primero sale cada 8 minutos, el segundo cada 12 minutos y el tercero cada 15 minutos. ¿A qué hora volverán a salir juntos?",
    tipo: "texto",
    placeholder: "Escribe la hora (ej. 8:00 a.m.)",
    aceptadas: ["8:00", "8:00 am", "8:00 a.m.", "8 am"],
    solucion: "<p class=\"mb-2\"><strong>Procedimiento breve:</strong> calculamos $\\text{mcm}(8, 12, 15)$. Factorizamos: $8 = 2^3$, $12 = 2^2 \\cdot 3$ y $15 = 3 \\cdot 5$. Tomamos todos los primos con su mayor exponente: $2^3 \\cdot 3 \\cdot 5 = 120$ minutos, es decir, 2 horas. Como salen a las 6:00 a.m., volverán a coincidir a las 8:00 a.m.</p><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> 8:00, 8:00 am, 8:00 a.m., 8 am</p>"
  },

  /* ================ TEMA 3 · Geometría, trigonometría y patrones (14 ejercicios) ================ */

  {
    clase: 3,
    grupo: "Ejercicios guiados",
    n: 1,
    titulo: "Ejercicio 1 · Ángulos internos de un polígono (Subtema 9).",
    enunciado: "Un parque ecológico tiene forma de pentágono convexo regular. Desde uno de sus vértices se traza un sendero recto que divide un ángulo interno en dos partes. Si una de esas partes mide $42^\\circ$, ¿cuánto mide la otra parte? Además, ¿cuánto suman los ángulos internos del pentágono?",
    tipo: "multi-texto",
    campos: [
      { etiqueta: "Ángulo", aceptadas: ["66", "66°"] },
      { etiqueta: "Suma", aceptadas: ["540", "540°"] }
    ],
    solucion: "<ol><li>El pentágono tiene $n = 5$ lados.</li><li>La suma de sus ángulos internos es $S = (5 - 2) \\cdot 180^\\circ = 540^\\circ$.</li><li>Como es regular, sus 5 ángulos son iguales: $\\frac{540^\\circ}{5} = 108^\\circ$.</li><li>El ángulo de $108^\\circ$ se divide en $42^\\circ$ y $x$, así que $x + 42^\\circ = 108^\\circ$, y $x = 66^\\circ$.</li></ol>"
  },

  {
    clase: 3,
    grupo: "Ejercicios guiados",
    n: 2,
    titulo: "Ejercicio 2 · Pitágoras (Subtema 10).",
    enunciado: "Un poste de luz vertical mide 12 metros de altura. Un cable recto va desde la punta del poste hasta un anclaje en el suelo, a 9 metros de la base del poste. ¿Cuánto mide el cable?",
    tipo: "texto",
    aceptadas: ["15", "15 m", "15 metros"],
    solucion: "<ol><li>El poste y el suelo forman un ángulo recto. Los catetos son $a = 12$ y $b = 9$, y el cable es la hipotenusa $c$.</li><li>$c = \\sqrt{12^2 + 9^2} = \\sqrt{144 + 81} = \\sqrt{225}$.</li><li>Resultado: $c = 15$ metros.</li></ol>"
  },

  {
    clase: 3,
    grupo: "Ejercicios guiados",
    n: 3,
    titulo: "Ejercicio 3 · Distancia entre dos puntos (Subtema 10).",
    enunciado: "Un vehículo autónomo parte del punto $A(-3, 2)$ y avanza en línea recta hasta la estación $B(5, -4)$, en un plano cartesiano. ¿Qué distancia recorre?",
    tipo: "texto",
    aceptadas: ["10", "10 unidades"],
    solucion: "<ol><li>$\\Delta x = 5 - (-3) = 8$ y $\\Delta y = -4 - 2 = -6$.</li><li>$d = \\sqrt{8^2 + (-6)^2} = \\sqrt{64 + 36} = \\sqrt{100}$.</li><li>Resultado: $d = 10$ unidades.</li></ol>"
  },

  {
    clase: 3,
    grupo: "Ejercicios guiados",
    n: 4,
    titulo: "Ejercicio 4 · Razones trigonométricas (Subtema 11).",
    enunciado: "Un observador en el suelo ve la cima de una torre con un ángulo de elevación de $60^\\circ$. Está a 20 metros de la base de la torre. ¿Cuánto mide la torre?",
    tipo: "texto",
    aceptadas: ["20√3", "20 raíz de 3", "34.64", "34.64 metros"],
    solucion: "<ol><li>El cateto adyacente a $60^\\circ$ es la distancia horizontal, 20 metros. El cateto opuesto es la altura $h$.</li><li>Usamos la tangente: $\\tan 60^\\circ = \\frac{h}{20}$.</li><li>Despejamos: $h = 20 \\cdot \\tan 60^\\circ = 20\\sqrt{3}$ metros.</li><li>Aproximación: $20 \\cdot 1.73205 \\approx 34.64$ metros.</li></ol>"
  },

  {
    clase: 3,
    grupo: "Ejercicios guiados",
    n: 5,
    titulo: "Ejercicio 5 · Progresión aritmética y suma de impares (Subtema 12).",
    enunciado: "Un panel de luces LED tiene 15 filas. La primera fila tiene 1 luz, la segunda 3, la tercera 5, y así sucesivamente, aumentando de 2 en 2. ¿Cuántas luces tiene la última fila y cuántas luces hay en todo el panel?",
    tipo: "multi-texto",
    campos: [
      { etiqueta: "Última fila", aceptadas: ["29", "29 luces"] },
      { etiqueta: "Total", aceptadas: ["225", "225 luces"] }
    ],
    solucion: "<ol><li>$a_1 = 1$, $d = 2$ y $n = 15$.</li><li>Última fila: $a_{15} = 1 + (15 - 1) \\cdot 2 = 29$ luces.</li><li>Total: como es la suma de los primeros 15 impares, $15^2 = 225$ luces.</li><li>Comprobación: $S_{15} = \\frac{15 \\cdot (1 + 29)}{2} = \\frac{15 \\cdot 30}{2} = 225$.</li></ol>"
  },

  {
    clase: 3,
    grupo: "Ejercicios independientes",
    n: 6,
    titulo: "Ejercicio 6 · Ángulos de un octágono (Subtema 9).",
    enunciado: "Un octágono convexo tiene tres ángulos internos de $150^\\circ$ cada uno. Los otros cinco ángulos internos miden lo mismo entre sí. ¿Cuánto mide cada uno de esos cinco ángulos?",
    tipo: "texto",
    aceptadas: ["126", "126°"],
    solucion: "<p class=\"mb-0\"><strong>Procedimiento breve:</strong> la suma de los ángulos internos del octágono es $(8 - 2) \\cdot 180^\\circ = 1080^\\circ$. Los tres conocidos suman $450^\\circ$. Quedan $1080^\\circ - 450^\\circ = 630^\\circ$ para los cinco restantes, y cada uno mide $\\frac{630^\\circ}{5} = 126^\\circ$.</p>"
  },

  {
    clase: 3,
    grupo: "Ejercicios independientes",
    n: 7,
    titulo: "Ejercicio 7 · Distancia entre dos puntos (Subtema 10).",
    enunciado: "Calcula la distancia entre $P_1(-5, -2)$ y $P_2(3, 4)$.",
    tipo: "texto",
    aceptadas: ["10", "10 unidades"],
    solucion: "<p class=\"mb-0\"><strong>Procedimiento breve:</strong> $\\Delta x = 3 - (-5) = 8$ y $\\Delta y = 4 - (-2) = 6$. Entonces $d = \\sqrt{8^2 + 6^2} = \\sqrt{100} = 10$.</p>"
  },

  {
    clase: 3,
    grupo: "Ejercicios independientes",
    n: 8,
    titulo: "Ejercicio 8 · Razones trigonométricas (Subtema 11).",
    enunciado: "Un camión sube por una rampa de $30^\\circ$ de inclinación. La rampa mide 40 metros a lo largo de su superficie. ¿A qué altura vertical está el camión al llegar al extremo superior?",
    tipo: "texto",
    aceptadas: ["20", "20 m", "20 metros"],
    solucion: "<p class=\"mb-0\"><strong>Procedimiento breve:</strong> la altura es el cateto opuesto a $30^\\circ$, y la rampa es la hipotenusa. Con $\\sin 30^\\circ = \\frac{h}{40}$ y $\\sin 30^\\circ = \\frac{1}{2}$, tenemos $h = 40 \\cdot \\frac{1}{2} = 20$ metros.</p>"
  },

  {
    clase: 3,
    grupo: "Ejercicios independientes",
    n: 9,
    titulo: "Ejercicio 9 · Progresión aritmética (Subtema 12).",
    enunciado: "Una empresa de transporte resguarda 12 camiones el primer día, 16 el segundo, 20 el tercero, y así sucesivamente en una progresión aritmética. ¿Cuántos camiones resguarda el día 20 y cuántos suma en total durante los primeros 20 días?",
    tipo: "multi-texto",
    campos: [
      { etiqueta: "Día 20", aceptadas: ["88", "88 camiones"] },
      { etiqueta: "Total", aceptadas: ["1000", "1000 camiones"] }
    ],
    solucion: "<p class=\"mb-0\"><strong>Procedimiento breve:</strong> $a_1 = 12$, $d = 4$ y $n = 20$. Entonces $a_{20} = 12 + 19 \\cdot 4 = 88$. La suma es $S_{20} = \\frac{20 \\cdot (12 + 88)}{2} = 10 \\cdot 100 = 1000$.</p>"
  },

  {
    clase: 3,
    grupo: "Ejercicios independientes",
    n: 10,
    titulo: "Ejercicio 10 · Suma de impares (Subtema 12).",
    enunciado: "Un diseñador arma paneles de píxeles cuadrados. El primer panel tiene 1 píxel, el segundo tiene la suma de los dos primeros impares, el tercero la suma de los tres primeros impares, y así sucesivamente. Si la pantalla ya suma 144 píxeles en total, ¿cuántos impares se sumaron y cuál es el último?",
    tipo: "multi-texto",
    campos: [
      { etiqueta: "Cantidad", aceptadas: ["12", "12 impares"] },
      { etiqueta: "Último impar", aceptadas: ["23"] }
    ],
    solucion: "<p class=\"mb-0\"><strong>Procedimiento breve:</strong> la suma de los primeros $N$ impares es $N^2 = 144$, así que $N = 12$. El último impar es $a_{12} = 2 \\cdot 12 - 1 = 23$.</p>"
  },

  /* --- Subtemas nuevos · Ejercicios guiados (Tema 3) --- */

  {
    clase: 3,
    grupo: "Subtemas nuevos · Ejercicios guiados",
    n: 11,
    titulo: "Ejercicio 11 · Segmento paralelo a la base.",
    enunciado: "En un triángulo $ABC$, el lado $AB$ mide $15$ cm y el lado $AC$ mide $20$ cm. Se traza un segmento $DE$ paralelo a $BC$, con $D$ sobre $AB$ y $E$ sobre $AC$. Si $AD = 6$ cm, calcula la longitud de $AE$.",
    tipo: "texto",
    placeholder: "Escribe tu respuesta (ej. 8)",
    aceptadas: ["8", "8 cm"],
    solucion: "<ol class=\"mb-2\"><li>Como $DE \\parallel BC$, los triángulos $ADE$ y $ABC$ son semejantes (criterio AA).</li><li>Planteamos la proporción de lados correspondientes: $\\dfrac{AD}{AB} = \\dfrac{AE}{AC}$.</li><li>Sustituimos: $\\dfrac{6}{15} = \\dfrac{AE}{20}$.</li><li>Simplificamos $\\dfrac{6}{15} = \\dfrac{2}{5}$, así que $AE = \\dfrac{2 \\cdot 20}{5} = 8$ cm.</li></ol><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> 8, 8 cm</p>"
  },

  {
    clase: 3,
    grupo: "Subtemas nuevos · Ejercicios guiados",
    n: 12,
    titulo: "Ejercicio 12 · Altura de un edificio con su sombra.",
    enunciado: "Un edificio proyecta una sombra de $18$ m. En el mismo instante, una estaca vertical de $1.2$ m proyecta una sombra de $0.8$ m. Calcula la altura del edificio.",
    tipo: "texto",
    placeholder: "Escribe tu respuesta (ej. 27)",
    aceptadas: ["27", "27 m"],
    solucion: "<ol class=\"mb-2\"><li>Los rayos del sol son paralelos, así que los dos triángulos rectángulos son semejantes.</li><li>Planteamos la proporción: $\\dfrac{H}{1.2} = \\dfrac{18}{0.8}$.</li><li>Calculamos $\\dfrac{18}{0.8} = 22.5$.</li><li>Despejamos: $H = 22.5 \\cdot 1.2 = 27$ m.</li></ol><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> 27, 27 m</p>"
  },

  /* --- Subtemas nuevos · Ejercicios independientes (Tema 3) --- */

  {
    clase: 3,
    grupo: "Subtemas nuevos · Ejercicios independientes",
    n: 13,
    titulo: "Ejercicio 13 · Escala de un mapa.",
    enunciado: "En un mapa a escala $1:2500$, la distancia entre dos puntos mide $8.4$ cm. ¿Cuál es la distancia real, en metros?",
    tipo: "texto",
    placeholder: "Escribe tu respuesta (ej. 210)",
    aceptadas: ["210", "210 m"],
    solucion: "<p class=\"mb-2\"><strong>Procedimiento breve:</strong> $\\dfrac{1}{2500} = \\dfrac{8.4}{D}$, así que $D = 8.4 \\cdot 2500 = 21\\,000$ cm. Dividimos entre 100 y obtenemos $210$ m.</p><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> 210, 210 m</p>"
  },

  {
    clase: 3,
    grupo: "Subtemas nuevos · Ejercicios independientes",
    n: 14,
    titulo: "Ejercicio 14 · Segmentos en un triángulo PQR.",
    enunciado: "En el triángulo $PQR$, una recta paralela a $QR$ corta a $PQ$ en $M$ y a $PR$ en $N$. Si $PM = 4$ cm, $MQ = 6$ cm y $NR = 9$ cm, calcula $PN$.",
    tipo: "texto",
    placeholder: "Escribe tu respuesta (ej. 6)",
    aceptadas: ["6", "6 cm"],
    solucion: "<p class=\"mb-2\"><strong>Procedimiento breve:</strong> por el teorema de Tales, $\\dfrac{PM}{MQ} = \\dfrac{PN}{NR}$. Sustituimos: $\\dfrac{4}{6} = \\dfrac{PN}{9}$. Despejamos: $PN = \\dfrac{4 \\cdot 9}{6} = 6$ cm.</p><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> 6, 6 cm</p>"
  }
,

  /* ================ TEMA 4 · Redes y conexiones (14 ejercicios) ================ */

  {
    clase: 4,
    grupo: "Ejercicios guiados",
    n: 1,
    titulo: "Ejercicio 1 · Grado y conexidad (Subtema 14).",
    enunciado: "Un mapa logístico conecta cinco ciudades: A, B, C, D y E. Las rutas son de dos sentidos: A con B, B con C, C con D y D con E. (a) ¿Cuál es el grado de la ciudad C? (b) ¿La red está conectada? El ejercicio tiene dos recuadros: grado y conexidad.",
    tipo: "multi-texto",
    campos: [
      { etiqueta: "(a) Grado de C", aceptadas: ["2", "dos"] },
      { etiqueta: "(b) ¿Conectada?", aceptadas: ["sí", "si", "yes"] }
    ],
    solucion: "<ol class=\"mb-2\"><li>Contamos las rutas que llegan a C: se conecta con B y con D, así que su grado es $2$.</li><li>Verificamos la conexidad: de A a E podemos ir por $A \\to B \\to C \\to D \\to E$. Como se puede llegar de cualquier ciudad a cualquier otra, la red está conectada.</li></ol><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> Recuadro 1 (grado de C): 2 · Recuadro 2 (¿conectada?): sí, si, yes</p>"
  },

  {
    clase: 4,
    grupo: "Ejercicios guiados",
    n: 2,
    titulo: "Ejercicio 2 · Cables mínimos (Subtema 14).",
    enunciado: "Una red local de 6 computadoras debe quedar conectada, sin formar ningún ciclo de datos. ¿Cuántos cables se necesitan exactamente?",
    tipo: "texto",
    placeholder: "Escribe tu respuesta (ej. 5)",
    aceptadas: ["5", "5 cables", "cinco"],
    solucion: "<ol class=\"mb-2\"><li>Una red conectada sin ciclos es un árbol.</li><li>Con $n = 6$ puntos: $e = n - 1 = 6 - 1 = 5$.</li><li>Se necesitan 5 cables.</li></ol><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> 5, 5 cables</p>"
  },

  {
    clase: 4,
    grupo: "Ejercicios guiados",
    n: 3,
    titulo: "Ejercicio 3 · Rutas de A a D (Subtema 14).",
    enunciado: "En una red hay conexiones de dos sentidos entre A y B, entre B y C, entre C y D, y entre A y D. Un camino no debe repetir puntos. (a) ¿Cuántos caminos distintos hay de A a D? (b) ¿Cuántas conexiones tiene el camino más corto? El ejercicio tiene dos recuadros.",
    tipo: "multi-texto",
    campos: [
      { etiqueta: "(a) Caminos de A a D", aceptadas: ["2", "dos"] },
      { etiqueta: "(b) Conexiones del más corto", aceptadas: ["1", "uno"] }
    ],
    solucion: "<ol class=\"mb-2\"><li>El primer camino es directo: A → D, con 1 conexión.</li><li>El segundo camino da la vuelta: A → B → C → D, con 3 conexiones.</li><li>Hay 2 caminos, y el más corto tiene 1 conexión.</li></ol><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> Recuadro 1 (caminos de A a D): 2, dos · Recuadro 2 (conexiones del más corto): 1, uno</p>"
  },

  {
    clase: 4,
    grupo: "Ejercicios guiados",
    n: 4,
    titulo: "Ejercicio 4 · Grado en una cadena (Subtema 14).",
    enunciado: "Cuatro ciudades forman una cadena: A está conectada solo con B, B con A y C, C con B y D, y D solo con C. ¿Cuál es el grado de la ciudad B?",
    tipo: "texto",
    placeholder: "Escribe tu respuesta (ej. 2)",
    aceptadas: ["2", "dos"],
    solucion: "<ol class=\"mb-2\"><li>Contamos las conexiones que llegan a B o salen de B.</li><li>B se conecta con A y con C.</li><li>Su grado es $2$.</li></ol><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> 2, dos</p>"
  },

  {
    clase: 4,
    grupo: "Ejercicios guiados",
    n: 5,
    titulo: "Ejercicio 5 · Conexiones de un solo sentido (Subtema 14).",
    enunciado: "En una red de un solo sentido hay una conexión de A a B y otra de B a C. No hay ninguna otra conexión. ¿Existe un camino para ir de C a A? Responde sí o no.",
    tipo: "texto",
    placeholder: "Responde sí o no",
    aceptadas: ["no", "n"],
    solucion: "<ol class=\"mb-2\"><li>Las conexiones solo permiten ir de A a B y de B a C.</li><li>Desde C no sale ninguna conexión.</li><li>No hay camino de C a A.</li></ol><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> no, n</p>"
  },

  {
    clase: 4,
    grupo: "Ejercicios guiados",
    n: 6,
    titulo: "Ejercicio 6 · Cables de más (Subtema 14).",
    enunciado: "Cinco casas deben quedar conectadas con cables sin formar ciclos. Se instalaron 6 cables. El ejercicio tiene dos recuadros: (a) ¿cuántos cables son el mínimo necesario? (b) ¿cuántos cables sobran respecto de ese mínimo?",
    tipo: "multi-texto",
    campos: [
      { etiqueta: "(a) Mínimo necesario", aceptadas: ["4", "cuatro", "4 cables"] },
      { etiqueta: "(b) Cables sobrantes", aceptadas: ["2", "dos", "2 cables"] }
    ],
    solucion: "<ol class=\"mb-2\"><li>Para $n = 5$ puntos, el mínimo sin ciclos es $e = n - 1 = 4$ cables.</li><li>Se instalaron 6 cables.</li><li>Sobran $6 - 4 = 2$ cables, que crean ciclos.</li></ol><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> Recuadro 1 (mínimo): 4, cuatro · Recuadro 2 (sobrantes): 2, dos</p>"
  },

  {
    clase: 4,
    grupo: "Ejercicios guiados",
    n: 7,
    titulo: "Ejercicio 7 · Conteo por etapas (Subtema 14).",
    enunciado: "Entre A y B hay 4 conexiones, entre B y C hay 3, y entre C y D hay 2. ¿Cuántas rutas distintas hay de A a D que pasen por B y por C, en ese orden?",
    tipo: "texto",
    placeholder: "Escribe tu respuesta (ej. 24)",
    aceptadas: ["24", "24 rutas"],
    solucion: "<ol class=\"mb-2\"><li>Por etapas, multiplicamos las opciones: $4 \\cdot 3 \\cdot 2$.</li><li>$4 \\cdot 3 = 12$, y $12 \\cdot 2 = 24$.</li><li>Hay 24 rutas distintas.</li></ol><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> 24, 24 rutas</p>"
  },

  /* --- Ejercicios independientes (Tema 4) --- */

  {
    clase: 4,
    grupo: "Ejercicios independientes",
    n: 8,
    titulo: "Ejercicio 8 · Puntos de un árbol (Subtema 14).",
    enunciado: "Un árbol tiene 9 conexiones. ¿Cuántos puntos tiene?",
    tipo: "texto",
    placeholder: "Escribe tu respuesta (ej. 10)",
    aceptadas: ["10", "10 puntos"],
    solucion: "<p class=\"mb-2\"><strong>Procedimiento breve:</strong> como $e = n - 1$, tenemos $9 = n - 1$, así que $n = 10$.</p><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> 10, 10 puntos</p>"
  },

  {
    clase: 4,
    grupo: "Ejercicios independientes",
    n: 9,
    titulo: "Ejercicio 9 · ¿Árbol o ciclo? (Subtema 14).",
    enunciado: "Una red de 4 puntos, conectada, tiene 4 conexiones de dos sentidos. ¿Es un árbol? Responde sí o no.",
    tipo: "texto",
    placeholder: "Responde sí o no",
    aceptadas: ["no", "n"],
    solucion: "<p class=\"mb-2\"><strong>Procedimiento breve:</strong> un árbol de 4 puntos tiene $4 - 1 = 3$ conexiones. Como esta red tiene 4, contiene al menos un ciclo y no es un árbol.</p><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> no, n</p>"
  },

  {
    clase: 4,
    grupo: "Ejercicios independientes",
    n: 10,
    titulo: "Ejercicio 10 · Árbol con 8 puntos (Subtema 14).",
    enunciado: "Una red tiene 8 puntos y 7 conexiones, y está conectada. ¿Es un árbol? Responde sí o no.",
    tipo: "texto",
    placeholder: "Responde sí o no",
    aceptadas: ["sí", "si", "yes"],
    solucion: "<p class=\"mb-2\"><strong>Procedimiento breve:</strong> la red está conectada y $7 = 8 - 1$. Una red conectada con $n - 1$ conexiones no puede tener ciclos, así que es un árbol.</p><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> sí, si, yes</p>"
  },

  {
    clase: 4,
    grupo: "Ejercicios independientes",
    n: 11,
    titulo: "Ejercicio 11 · Caminos para unir nueve escuelas (Subtema 14).",
    enunciado: "Se quieren unir nueve escuelas de una zona con caminos de dos sentidos, de modo que todas se comuniquen y no haya ciclos. ¿Cuántos caminos se necesitan?",
    tipo: "texto",
    placeholder: "Escribe tu respuesta (ej. 8)",
    aceptadas: ["8", "8 caminos", "ocho"],
    solucion: "<p class=\"mb-2\"><strong>Procedimiento breve:</strong> con $n = 9$ puntos, $e = 9 - 1 = 8$.</p><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> 8, 8 caminos</p>"
  },

  {
    clase: 4,
    grupo: "Ejercicios independientes",
    n: 12,
    titulo: "Ejercicio 12 · ¿Es un ciclo? (Subtema 14).",
    enunciado: "En una red de un solo sentido hay conexiones de A a B, de B a C y de C a A. ¿Este recorrido forma un ciclo? Responde sí o no.",
    tipo: "texto",
    placeholder: "Responde sí o no",
    aceptadas: ["sí", "si", "yes"],
    solucion: "<p class=\"mb-2\"><strong>Procedimiento breve:</strong> el recorrido A → B → C → A empieza y termina en el mismo punto y no repite conexiones. Por definición, es un ciclo.</p><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> sí, si, yes</p>"
  },

  {
    clase: 4,
    grupo: "Ejercicios independientes",
    n: 13,
    titulo: "Ejercicio 13 · ¿Se puede regresar? (Subtema 14).",
    enunciado: "En una red de un solo sentido hay conexiones A → B, B → C y C → A. ¿Se puede ir de B a A? Responde sí o no.",
    tipo: "texto",
    placeholder: "Responde sí o no",
    aceptadas: ["sí", "si", "yes"],
    solucion: "<p class=\"mb-2\"><strong>Procedimiento breve:</strong> de B se puede ir a C, y de C se puede ir a A. Por lo tanto, existe el camino $B \\to C \\to A$.</p><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> sí, si, yes</p>"
  },

  {
    clase: 4,
    grupo: "Ejercicios independientes",
    n: 14,
    titulo: "Ejercicio 14 · Viaje por etapas (Subtema 14).",
    enunciado: "Un viajero tiene 5 rutas distintas de A a B y 2 rutas distintas de B a C. Debe pasar por B. ¿Cuántas formas distintas hay de ir de A a C?",
    tipo: "texto",
    placeholder: "Escribe tu respuesta (ej. 10)",
    aceptadas: ["10", "10 formas"],
    solucion: "<p class=\"mb-2\"><strong>Procedimiento breve:</strong> por etapas, $5 \\cdot 2 = 10$.</p><p class=\"mb-0\"><strong>Respuestas aceptadas:</strong> 10, 10 formas</p>"
  }

];


/* ==========================================================
   Problemario del Bloque 1 · 20 ejercicios con clave desplegable
   ========================================================== */

const PROBLEMARIO_INTRO_TEMAS = {
  "Tema 1 · Álgebra y Lógica": "La lógica proposicional y las ecuaciones algebraicas son la base para razonar con condiciones, tomar decisiones correctas y revisar que una respuesta cumpla todas las reglas. Una condición mal planteada o una ecuación mal simplificada conduce a resultados incorrectos. Modelar en papel mediante tablas de verdad, implicaciones y cuantificadores te permite revisar que tu razonamiento cubra el 100% de los casos posibles.",
  "Tema 2 · Aritmética, Conteo y Casos": "La aritmética modular, la divisibilidad y los principios de conteo son herramientas clave para resolver problemas sin revisar caso por caso. En lugar de contar uno por uno todas las posibilidades, el Máximo Común Divisor ($\\text{MCD}$), el Mínimo Común Múltiplo ($\\text{MCM}$), el Principio de Inclusión-Exclusión y las permutaciones permiten calcular cantidades y periodos de forma directa. Comprender el comportamiento de los residuos y las agrupaciones te permitirá transformar conteos largos en operaciones aritméticas sencillas.",
  "Tema 3 · Geometría, Trigonometría y Patrones": "La identificación de progresiones algebraicas y la modelación geométrica permiten sintetizar comportamientos acumulativos o espaciales en expresiones cerradas de tiempo constante. Un problema que a primera vista parece requerir contar paso a paso miles de eventos se resuelve con una sola fórmula cuando descubres que sigue una progresión aritmética, una progresión geométrica o una propiedad geométrica fundamental (como el Teorema de Pitágoras o las relaciones de semejanza). Esta sección entrena tu ojo analítico para abstraer patrones numéricos y espaciales a partir de observaciones concretas.",
  "Tema 4 · Redes y Conexiones": "Las redes de comunicación, los mapas de transporte y las relaciones entre personas se pueden representar como puntos unidos por conexiones (en matemáticas, a este modelo se le llama grafo). Analizar cuántos caminos existen entre dos puntos, verificar si una red está conectada o dividida en partes aisladas, y calcular la cantidad mínima de conexiones necesarias para unir todo sin ciclos ($n - 1$ conexiones en un árbol) son habilidades imprescindibles. Dominar esta idea en papel te permite razonar sobre cualquier red antes de dibujarla con detalle."
};

const TAREA_BLOQUE1 = [
  {
    tema: "Tema 1 · Álgebra y Lógica",
    n: 1,
    dificultad: "Básico",
    titulo: "Ejercicio 1 · Reparto de Libretas Escolares",
    enunciado: "La mesa directiva de la preparatoria compró un lote de 240 cuadernos para distribuirlos equitativamente entre los alumnos del club de matemáticas. Si se inscribieran 4 alumnos más al club, a cada integrante le corresponderían 3 cuadernos menos. Modela la ecuación de reparto para determinar cuántos alumnos $n$ forman parte actualmente del club de matemáticas.",
    respuestaFinal: "16 alumnos",
    procedimiento: "<p class=\"mb-0\">Sea $n$ el número actual de alumnos. La cuota inicial por alumno es $\\frac{240}{n}$. Con 4 alumnos más, la nueva cuota es $\\frac{240}{n+4}$. Planteamos la ecuación $\\frac{240}{n} - \\frac{240}{n+4} = 3$, que equivale a $240(n+4) - 240n = 3n(n+4)$, es decir, $960 = 3n^2 + 12n$. Dividiendo entre 3: $n^2 + 4n - 320 = 0$, o bien $(n+20)(n-16) = 0$. Como $n > 0$, concluimos que actualmente hay $n = 16$ alumnos.</p>"
  },
  {
    tema: "Tema 1 · Álgebra y Lógica",
    n: 2,
    dificultad: "Básico",
    titulo: "Ejercicio 2 · Criterio Lógico de Aprobación del Curso",
    enunciado: "Para aprobar la asignatura de pensamiento computacional se evalúan dos condiciones lógicas: $P$ representa \"El alumno entregó más del $80\\%$ de las tareas\" y $Q$ representa \"El alumno obtuvo una calificación mayor o igual a 70 en el examen final\". El reglamento establece que un alumno aprueba si cumple $(P \\wedge Q)$ o si obtiene una mención honorífica representada por $R$, resultando en la expresión $(P \\wedge Q) \\vee R$. Si un alumno entregó el $85\\%$ de sus tareas $(P = 1)$, obtuvo 65 en el examen final $(Q = 0)$ y no tiene mención honorífica $(R = 0)$, evalúa el valor de verdad final de su estado de aprobación.",
    respuestaFinal: "Falso (0) / No aprueba",
    procedimiento: "<p class=\"mb-0\">Sustituimos los valores dados $P = 1$, $Q = 0$ y $R = 0$ en la expresión condicional $(P \\wedge Q) \\vee R$: $(1 \\wedge 0) \\vee 0 = 0 \\vee 0 = 0$. El valor de verdad es 0, por lo que el alumno no cumple el criterio de aprobación.</p>"
  },
  {
    tema: "Tema 1 · Álgebra y Lógica",
    n: 3,
    dificultad: "Medio",
    titulo: "Ejercicio 3 · Evaluación del Reglamento Escolar",
    enunciado: "Analiza la regla escolar representada por la implicación lógica $A \\Rightarrow B$, donde $A$ es \"El estudiante porta el uniforme completo\" y $B$ es \"El estudiante tiene permitido el ingreso al aula\". Construye la tabla de verdad completa para la proposición $A \\Rightarrow B$ utilizando los valores de verdad 1 (verdadero) y 0 (falso), y determina en qué único escenario la regla del reglamento se considera violada.",
    respuestaFinal: "Violada/Falsa $(0)$ únicamente cuando $A = 1$ y $B = 0$",
    procedimiento: "<p class=\"mb-2\">Completamos la tabla de verdad para la implicación $A \\Rightarrow B$:</p><div class=\"table-responsive my-2\"><table class=\"table table-sm table-bordered text-center align-middle mb-2\"><thead><tr><th>$A$</th><th>$B$</th><th>$A \\Rightarrow B$</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1</td></tr></tbody></table></div><p class=\"mb-0\">La regla se rompe exclusivamente en el caso $A = 1$ (porta uniforme) y $B = 0$ (se le niega la entrada).</p>"
  },
  {
    tema: "Tema 1 · Álgebra y Lógica",
    n: 4,
    dificultad: "Medio",
    titulo: "Ejercicio 4 · Control de Acceso al Laboratorio de Cómputo",
    enunciado: "El acceso al laboratorio de cómputo está regulado por tres proposiciones: $A$ (\"Tiene credencial vigente\"), $B$ (\"Tiene reserva de equipo\") y $C$ (\"Tiene un reporte de sanción\"). El sistema autoriza el acceso si el alumno cuenta con credencial o reserva, y además no tiene un reporte de sanción. Expresa esta regla mediante la fórmula condicional $(A \\vee B) \\wedge \\neg C$. Posteriormente, evalúa el valor de verdad del acceso para el caso en que el estudiante tiene credencial $(A = 1)$, no tiene reserva $(B = 0)$ y tiene un reporte de sanción $(C = 1)$.",
    respuestaFinal: "Falso (0) / El acceso es denegado",
    procedimiento: "<p class=\"mb-0\">Evaluamos la expresión $(A \\vee B) \\wedge \\neg C$ con los valores $A = 1$, $B = 0$ y $C = 1$: $\\neg C = \\neg(1) = 0$, así que $(1 \\vee 0) \\wedge 0 = 1 \\wedge 0 = 0$. Dado que $C = 1$ (tiene sanción), la negación invalida la conjunción y el acceso resulta denegado $(0)$.</p>"
  },
  {
    tema: "Tema 1 · Álgebra y Lógica",
    n: 5,
    dificultad: "Avanzado",
    titulo: "Ejercicio 5 · Asignación Formal de Partidas en Torneos",
    enunciado: "Para organizar un torneo de ajedrez escolar, se define el predicado $T(x, y)$, que indica que el alumno $x$ se enfrenta al alumno $y$. La regla de organización exige que, para todo participante $x$ del conjunto de jugadores $J$, exista al menos un rival $y \\in J$ con $x \\neq y$ tal que $T(x, y)$ sea verdadero. Esta regla se escribe así:<p class=\"my-2\">$$\\forall x \\in J \\; \\big(\\exists y \\in J \\; (x \\neq y \\wedge T(x, y))\\big)$$</p>Si el total de partidas jugadas en la primera ronda es $P$ y se sabe que cada jugador dispute exactamente 3 partidas con rivales distintos dentro del grupo, establece la ecuación de restricción lineal que relaciona el número total de jugadores $N = |J|$ con el total de partidas $P$, y calcula el valor de $N$ si en total se coordinaron 36 partidas.",
    respuestaFinal: "$N = 24$ jugadores",
    procedimiento: "<p class=\"mb-0\">Cada partida conecta a 2 jugadores. Si cada uno de los $N$ participantes disputa 3 partidas, la suma de grados es $3N$. Por el principio de conteo doble, $2P = 3N$, así que $N = \\frac{2P}{3}$. Sustituyendo $P = 36$: $N = \\frac{2(36)}{3} = \\frac{72}{3} = 24$ jugadores.</p>"
  },
  {
    tema: "Tema 2 · Aritmética, Conteo y Casos",
    n: 6,
    dificultad: "Básico",
    titulo: "Ejercicio 6 · Coincidencia Periódica de Rutas de Autobús",
    enunciado: "Tres rutas de transporte escolar $(R_1, R_2, R_3)$ salen simultáneamente de la parada principal a las 6:00 a.m. La ruta $R_1$ regresa a la estación cada 12 minutos, la ruta $R_2$ cada 15 minutos y la ruta $R_3$ cada 20 minutos. Utiliza el Mínimo Común Múltiplo $(\\text{MCM})$ para determinar a qué hora exacta volverán a coincidir las tres rutas por primera vez en la estación principal.",
    respuestaFinal: "7:00 a.m. (coincidencia a los 60 minutos)",
    procedimiento: "<p class=\"mb-0\">Descomponemos en factores primos: $12 = 2^2 \\cdot 3$, $15 = 3 \\cdot 5$, $20 = 2^2 \\cdot 5$. Entonces $\\text{MCM}(12, 15, 20) = 2^2 \\cdot 3 \\cdot 5 = 60$ minutos. Sumando 60 minutos a la hora de salida (6:00 a.m.), las tres rutas coinciden a las 7:00 a.m.</p>"
  },
  {
    tema: "Tema 2 · Aritmética, Conteo y Casos",
    n: 7,
    dificultad: "Básico",
    titulo: "Ejercicio 7 · Rotación de Turnos de Limpieza en Talleres",
    enunciado: "El sistema de guardia del laboratorio de cómputo opera en un ciclo rotativo de 7 días (días 0 a 6, donde 0 corresponde al Lunes). Si el día de hoy es Lunes $(0)$ y el sistema programa el mantenimiento preventivo para dentro de 100 días, utiliza la aritmética modular (cálculo del residuo $100 \\pmod 7$) para determinar qué día de la semana se ejecutará dicho mantenimiento.",
    respuestaFinal: "Miércoles (día 2)",
    procedimiento: "<p class=\"mb-0\">Calculamos el residuo de la división modular de 100 entre 7: $100 = 7 \\times 14 + 2 \\implies 100 \\equiv 2 \\pmod 7$. Avanzando 2 días en el ciclo a partir del Lunes (día 0): $0 \\rightarrow \\text{Lunes}, 1 \\rightarrow \\text{Martes}, 2 \\rightarrow \\text{Miércoles}$.</p>"
  },
  {
    tema: "Tema 2 · Aritmética, Conteo y Casos",
    n: 8,
    dificultad: "Medio",
    titulo: "Ejercicio 8 · Elección del Comité Estudiantil",
    enunciado: "Se desea formar un comité escolar integrado por 1 presidente, 1 secretario y 1 vocal. Hay 6 candidatos de sexto semestre y 4 candidatos de cuarto semestre. Por reglamento, el cargo de presidente debe ser ocupado por un alumno de sexto semestre, mientras que la secretaría y la vocalía pueden ser asignadas a cualquier alumno restante de cualquier semestre. Aplica el principio fundamental del conteo para calcular el número total de maneras distintas en las que se puede integrar este comité ordenado.",
    respuestaFinal: "432 maneras distintas",
    procedimiento: "<p class=\"mb-0\">Para el cargo de Presidente hay 6 opciones (alumnos de sexto semestre). Para el cargo de Secretario quedan 9 candidatos disponibles (5 de sexto semestre y 4 de cuarto semestre). Para el cargo de Vocal quedan 8 candidatos disponibles. Aplicando el principio multiplicativo para roles distintos: $6 \\times 9 \\times 8 = 432$ maneras.</p>"
  },
  {
    tema: "Tema 2 · Aritmética, Conteo y Casos",
    n: 9,
    dificultad: "Medio",
    titulo: "Ejercicio 9 · Distribución de Deportistas en el Club Escolar",
    enunciado: "En un club deportivo escolar compuesto por 100 estudiantes, se determinó que 55 alumnos juegan fútbol, 45 juegan básquetbol y 20 practican ambos deportes. Aplica el Principio de Inclusión-Exclusión para calcular cuántos alumnos practican al menos uno de estos dos deportes y cuántos no practican ninguno.",
    respuestaFinal: "80 practican al menos uno; 20 no practican ninguno",
    procedimiento: "<p class=\"mb-0\">Aplicamos el Principio de Inclusión-Exclusión para la unión de conjuntos: $|F \\cup B| = |F| + |B| - |F \\cap B| = 55 + 45 - 20 = 80 \\text{ alumnos}$. La cantidad de alumnos que no practican ningún deporte es $100 - 80 = 20$.</p>"
  },
  {
    tema: "Tema 2 · Aritmética, Conteo y Casos",
    n: 10,
    dificultad: "Avanzado",
    titulo: "Ejercicio 10 · Acomodo Restringido de Equipos en el Autobús",
    enunciado: "Un grupo de 6 estudiantes (entre los cuales están Ana y Beto) van a ocupar una fila de 6 asientos individuales contiguos en el autobús de la selección escolar. Determina el número total de permutaciones posibles para sentar a los 6 estudiantes bajo la condición estricta de que Ana y Beto siempre deben sentarse en asientos contiguos.",
    respuestaFinal: "240 permutaciones",
    procedimiento: "<p class=\"mb-0\">Consideramos a Ana y Beto como un solo bloque unido. Esto reduce el problema a ordenar 5 elementos (el bloque más los otros 4 alumnos), lo cual se hace de $5!$ formas. A su vez, dentro del bloque, Ana y Beto pueden intercambiar posiciones de $2!$ formas. Total: $5! \\times 2! = 120 \\times 2 = 240$ permutaciones.</p>"
  },
  {
    tema: "Tema 3 · Geometría, Trigonometría y Patrones",
    n: 11,
    dificultad: "Básico",
    titulo: "Ejercicio 11 · Plan Incremental de Lectura",
    enunciado: "Un alumno establece un plan de estudio incremental para su próxima competencia de matemáticas: el primer día lee 5 páginas de un libro de teoría ($a = 5$) y cada día posterior lee 3 páginas más que el día anterior (diferencia constante $d = 3$). Calcula cuántas páginas leerá el día 15 ($b$) y aplica la fórmula de la suma de una progresión aritmética: $S_n = \\frac{n(a+b)}{2}$ para determinar el total acumulado de páginas leídas durante los 15 días.",
    respuestaFinal: "Día 15: 47 páginas; Total acumulado: 390 páginas",
    procedimiento: "<p class=\"mb-0\">El término 15 es $b = a + (n-1)d = 5 + (15-1) \\cdot 3 = 5 + 42 = 47$. Aplicamos la fórmula de la suma de la progresión aritmética: $S_{15} = \\frac{15(5 + 47)}{2} = \\frac{15(52)}{2} = 15 \\times 26 = 390$ páginas.</p>"
  },
  {
    tema: "Tema 3 · Geometría, Trigonometría y Patrones",
    n: 12,
    dificultad: "Básico",
    titulo: "Ejercicio 12 · Diseño Geométrico de una Plaza Escolar",
    enunciado: "El comité de infraestructura está diseñando una plaza interior con forma de polígono regular de 8 lados (octágono regular). Determina la suma total de los ángulos internos del polígono y calcula la medida del ángulo interno individual en cada una de sus esquinas.",
    respuestaFinal: "Suma total: $1080^\\circ$; Ángulo interno: $135^\\circ$",
    procedimiento: "<p class=\"mb-0\">La suma de los ángulos internos de un polígono regular de $n = 8$ lados viene dada por: $S = (n-2) \\times 180^\\circ = (8-2) \\times 180^\\circ = 6 \\times 180^\\circ = 1080^\\circ$. El ángulo interno individual mide $\\frac{1080^\\circ}{8} = 135^\\circ$.</p>"
  },
  {
    tema: "Tema 3 · Geometría, Trigonometría y Patrones",
    n: 13,
    dificultad: "Medio",
    titulo: "Ejercicio 13 · Distancia Euclidiana en la Retícula Escolar",
    enunciado: "El plano del campus escolar se ubica sobre un sistema de coordenadas cartesianas. La biblioteca se encuentra en las coordenadas $P_1 = (2, 3)$ y el laboratorio de física en $P_2 = (8, 11)$, donde cada unidad representa metros. Aplica el Teorema de Pitágoras para calcular la distancia recta directa (distancia euclidiana) entre ambos puntos del campus: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.",
    respuestaFinal: "10 metros",
    procedimiento: "<p class=\"mb-0\">Calculamos las diferencias de las coordenadas: $\\Delta x = 8 - 2 = 6$ y $\\Delta y = 11 - 3 = 8$. Aplicamos la fórmula de la distancia euclidiana: $d = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ metros.</p>"
  },
  {
    tema: "Tema 3 · Geometría, Trigonometría y Patrones",
    n: 14,
    dificultad: "Medio",
    titulo: "Ejercicio 14 · Crecimiento de una Cadena de Mensajes",
    enunciado: "Para difundir un aviso urgente, el director envía el mensaje a 3 profesores ($a = 3$). En la siguiente etapa, cada uno reenvía el mensaje a 2 profesores nuevos, de modo que en la segunda etapa hay 6 receptores nuevos. La secuencia de nuevos receptores en cada etapa sigue una progresión geométrica: $3, 6, 12, 24, \\dots$ con razón $k = 2$. Calcula cuántos receptores nuevos habrá en la etapa 5 ($b$) y utiliza la fórmula de la suma de una progresión geométrica: $S = \\frac{bk - a}{k - 1}$ para hallar el número total acumulado de personas que habrán recibido el mensaje tras completarse las 5 etapas.",
    respuestaFinal: "Etapa 5: 48 receptores; Total acumulado: 93 personas",
    procedimiento: "<p class=\"mb-0\">El término de la etapa 5 en la progresión geométrica es $b = a \\cdot k^{n-1} = 3 \\cdot 2^4 = 48$. Aplicamos la fórmula de la suma acumulada con $a = 3$, $b = 48$ y $k = 2$: $S = \\frac{bk - a}{k - 1} = \\frac{48(2) - 3}{2 - 1} = \\frac{96 - 3}{1} = 93$ personas.</p>"
  },
  {
    tema: "Tema 3 · Geometría, Trigonometría y Patrones",
    n: 15,
    dificultad: "Avanzado",
    titulo: "Ejercicio 15 · Patrón Fractal de Acomodo de Baldosas",
    enunciado: "En la remodelación del patio central escolar se colocan baldosas cuadradas siguiendo una secuencia en niveles: el nivel 1 consiste en un cuadrado central con lado $L_1 = 16\\text{ m}$. En cada nivel sucesivo $n$, el lado de las baldosas se reduce a la mitad $(L_n = \\frac{L_{n-1}}{2})$ y la cantidad de baldosas colocadas en ese nivel es $4^{n-1}$. Demuestra analíticamente que el área total cubierta en el nivel $n$ dada por $A_n = 4^{n-1} \\cdot (L_n)^2$ permanece constante, calcula el área del nivel 4 y determina la suma del área acumulada considerando la adición de los niveles 1, 2, 3 y 4.",
    respuestaFinal: "Área del nivel 4: $256\\text{ m}^2$; área total acumulada: $1024\\text{ m}^2$",
    procedimiento: "<p class=\"mb-0\">Para cualquier nivel $n$, el lado de la baldosa es $L_n = \\frac{16}{2^{n-1}}\\text{ m}$, y su área individual es $(L_n)^2 = \\frac{256}{4^{n-1}}\\text{ m}^2$. El área total del nivel $n$ es $A_n = 4^{n-1} \\cdot \\frac{256}{4^{n-1}} = 256\\text{ m}^2$, constante para todo $n$. Por lo tanto, para el nivel 4 el área es $256\\text{ m}^2$. La suma acumulada tras 4 niveles es $4 \\times 256 = 1024\\text{ m}^2$.</p>"
  },
  {
    tema: "Tema 4 · Redes y Conexiones",
    n: 16,
    dificultad: "Básico",
    titulo: "Ejercicio 16 · Conteo de Rutas entre Esquinas",
    enunciado: "La red de calles entre cuatro esquinas (A, B, C, D) de una colonia vecina a la escuela está conectada de la siguiente manera:<ul class=\"mt-2 mb-2\"><li>De A a B hay 2 caminos directos distintos.</li><li>De A a C hay 1 camino directo.</li><li>De B a D hay 3 caminos directos distintos.</li><li>De C a D hay 2 caminos directos distintos.</li><li>No hay conexión directa entre A y D.</li></ul>Calcula el número total de trayectorias distintas que se pueden seguir para ir desde la esquina A hasta la esquina D pasando exactamente por una esquina intermedia (B o C).",
    respuestaFinal: "8 caminos posibles",
    procedimiento: "<p class=\"mb-1\">Calculamos las rutas posibles según la esquina intermedia:</p><ul class=\"mb-2\"><li>Vía $B$: $(\\text{caminos } A \\rightarrow B) \\times (\\text{caminos } B \\rightarrow D) = 2 \\times 3 = 6$.</li><li>Vía $C$: $(\\text{caminos } A \\rightarrow C) \\times (\\text{caminos } C \\rightarrow D) = 1 \\times 2 = 2$.</li></ul><p class=\"mb-0\">Total de trayectorias $= 6 + 2 = 8$.</p>"
  },
  {
    tema: "Tema 4 · Redes y Conexiones",
    n: 17,
    dificultad: "Básico",
    titulo: "Ejercicio 17 · Análisis de Conectividad en una Red Social Escolar",
    enunciado: "Se analiza una red de mensajería entre 5 alumnos $(V = \\{1, 2, 3, 4, 5\\})$. Las conexiones existentes (conexiones de dos sentidos) son las siguientes: $(1, 2), (2, 3)$ y $(4, 5)$. Determina formalmente si la red social está completamente conectada o si se encuentra dividida en partes aisladas, indicando los grupos de alumnos que forman cada parte de la red.",
    respuestaFinal: "Red no conectada; dividida en 2 partes aisladas: $\\{1, 2, 3\\}$ y $\\{4, 5\\}$",
    procedimiento: "<p class=\"mb-0\">Las conexiones $(1, 2)$ y $(2, 3)$ permiten la comunicación entre los puntos $1$, $2$ y $3$. La conexión $(4, 5)$ une los puntos $4$ y $5$. Al no existir ninguna conexión que vincule a un elemento del conjunto $\\{1, 2, 3\\}$ con el conjunto $\\{4, 5\\}$, la red se encuentra desconectada y dividida en dos partes independientes.</p>"
  },
  {
    tema: "Tema 4 · Redes y Conexiones",
    n: 18,
    dificultad: "Medio",
    titulo: "Ejercicio 18 · Red Mínima de Cableado en el Laboratorio",
    enunciado: "Se requiere interconectar un conjunto de $V = 12$ equipos en el laboratorio escolar para que todas puedan comunicarse entre sí (directa o indirectamente). Por restricciones de presupuesto y para evitar bucles de datos, la red debe formar una estructura de árbol (una red conectada sin ciclos). Utiliza la propiedad fundamental de los árboles para determinar la cantidad exacta de cables de red $(E)$ que se deben instalar.",
    respuestaFinal: "11 cables",
    procedimiento: "<p class=\"mb-0\">Por definición, todo árbol con $V$ puntos tiene exactamente $E = V - 1$ conexiones. Sustituyendo $V = 12$: $E = 12 - 1 = 11$ cables de red.</p>"
  },
  {
    tema: "Tema 4 · Redes y Conexiones",
    n: 19,
    dificultad: "Medio",
    titulo: "Ejercicio 19 · Grados de Conexión en la Red de Agua Escolar",
    enunciado: "Una red interna de distribución de agua posee 6 puntos de conexión. La suma de los grados de todos los puntos (donde el grado de un punto es el número de tuberías conectadas a él) es igual a 14. Utiliza la regla de la suma de grados: la suma de los grados de todos los puntos es igual al doble del número de conexiones, $\\sum \\text{grado}(v) = 2|E|$, para determinar el número total de tramos de tubería $(|E|)$ que integran dicha red.",
    respuestaFinal: "7 tramos de tubería",
    procedimiento: "<p class=\"mb-0\">Sustituimos en la regla de la suma de grados $\\sum \\text{grado}(v) = 2|E|$: $14 = 2|E|$, así que $|E| = \\frac{14}{2} = 7$ tramos de tubería.</p>"
  },
  {
    tema: "Tema 4 · Redes y Conexiones",
    n: 20,
    dificultad: "Avanzado",
    titulo: "Ejercicio 20 · Costo Mínimo de Interconexión en la Red del Vecindario",
    enunciado: "Se planea enlazar 4 módulos de la escuela $(M_1, M_2, M_3, M_4)$ mediante fibra óptica. Los costos de instalación en miles de pesos para cada tramo posible se detallan a continuación:<div class=\"table-responsive my-2\"><table class=\"table table-sm table-bordered text-center align-middle mb-2\"><thead><tr><th>Tramo de Conexión</th><th>Costo (miles de MXN)</th></tr></thead><tbody><tr><td>$(M_1, M_2)$</td><td>4</td></tr><tr><td>$(M_1, M_3)$</td><td>2</td></tr><tr><td>$(M_2, M_3)$</td><td>1</td></tr><tr><td>$(M_2, M_4)$</td><td>5</td></tr><tr><td>$(M_3, M_4)$</td><td>3</td></tr></tbody></table></div>Identifica la combinación de tramos que permite conectar los 4 módulos sin formar ciclos y con el costo total más bajo posible, y calcula dicho costo.",
    respuestaFinal: "Tramos $(M_2, M_3), (M_1, M_3)$ y $(M_3, M_4)$; Costo total $= 6$ mil pesos",
    procedimiento: "<p class=\"mb-1\">Ordenamos los tramos por costo de menor a mayor: $(M_2, M_3): 1, (M_1, M_3): 2, (M_3, M_4): 3, (M_1, M_2): 4, (M_2, M_4): 5$. Seleccionamos siempre la conexión más barata que no forme ciclos, hasta completar $V - 1 = 3$ conexiones:</p><ol class=\"mb-2\"><li>Elegimos $(M_2, M_3)$ con costo 1.</li><li>Elegimos $(M_1, M_3)$ con costo 2.</li><li>Elegimos $(M_3, M_4)$ con costo 3.</li></ol><p class=\"mb-0\">Los 4 puntos quedan integrados. Costo total: $1 + 2 + 3 = 6$ (miles de MXN).</p>"
  }
];
