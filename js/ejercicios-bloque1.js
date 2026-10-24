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
];


/* ==========================================================
   Problemario del Bloque 1 · 15 ejercicios (sin clave)
   ========================================================== */

const PROBLEMARIO_INTRO_TEMAS = {
  "Tema 1 · Álgebra y Lógica": "¡Bienvenido al primer bloque de tu entrenamiento de razonamiento! Antes de resolver cualquier problema, necesitas afinar el motor principal de todo buen razonador: la capacidad de pensar de manera formal y estructurada. La matemática nos permite abstraer la realidad separando los objetos de sus magnitudes; en nuestro contexto distinguimos las cantidades discretas o discontinuas (elementos contables y finitos como variables booleanas, permisos o paquetes de insumos) para construir modelos formales rigurosos. La lógica formal y el modelado lineal son los cimientos sobre los cuales construirás estructuras de decisión impecables y condiciones precisas. Cuando te enfrentas a un problema, tu primer desafío consiste en abstraer las reglas del mundo real, como las restricciones de un horario escolar, los permisos de acceso a un sistema o las condiciones de clasificación en un torneo, y traducirlas a proposiciones matemáticas evaluables mediante tablas de verdad.</p><p class=\"texto-suave mb-3\">¿Por qué es fundamental dominar esto? Porque en un concurso, una falla en la evaluación de una condición lógica lleva a tomar un camino equivocado o a dar respuestas incorrectas ante casos límite. Evaluar cómo se transforman proposiciones simples mediante los operadores de negación ($\\neg$), conjunción ($\\wedge$), disyunción ($\\vee$), implicación ($\\Rightarrow$) y equivalencia ($\\Leftrightarrow$) te permite garantizar la solidez de cualquier sistema de reglas antes de usarlo para tomar una decisión.",
  "Tema 2 · Aritmética, Conteo y Casos": "El dominio de la aritmética discreta, la divisibilidad y las técnicas combinatorias es indispensable para analizar sistemas con un número finito de estados, ciclos modulares y búsquedas exhaustivas sin necesidad de revisar cada caso uno por uno. Distinguimos las cantidades discretas (pluralidades discontinuas como el número de alumnos, sillas o turnos) de las cantidades continuas (como distancias o masas); los problemas de concursos trabajan casi siempre con cantidades discretas. Comprender cómo operan los números enteros $\\mathbb{Z}$, sus residuos y la forma en que se combinan los elementos de un conjunto permite diseñar razonamientos matemáticos sólidos y predecir el comportamiento de los procesos que se repiten.</p><p class=\"texto-suave mb-3\">Los principios fundamentales del conteo (suma y multiplicación) y la aritmética modular ($a \\pmod b$) te permiten calcular la escala de un problema, determinar la periodicidad de eventos recurrentes y manejar restricciones superpuestas en escenarios de organización cotidiana. Al aprender a contar de manera estructurada y a descomponer problemas en casos disjuntos, desarrollas la intuición necesaria para evaluar la eficiencia de tus razonamientos.",
  "Tema 3 · Geometría, Trigonometría y Patrones": "El razonamiento espacial, la geometría plana y las progresiones numéricas proporcionan la base para comprender distancias, distribuciones en cuadrículas y patrones de crecimiento. En este dominio pasamos del estudio de cantidades discretas al de cantidades continuas (longitudes, superficies, ángulos y trayectorias directas), que frecuentemente deben aproximarse con valores enteros al contar o medir. Interpretar la estructura espacial de un problema y abstraerla mediante expresiones algebraicas o sucesiones recurrentes resulta vital cuando se analizan mapas, planos o secuencias que crecen de forma constante o exponencial.</p><p class=\"texto-suave mb-3\">A través del modelado de planos, terrenos y tablas de crecimiento numérico, puedes transformar disposiciones físicas en ecuaciones precisas. La aplicación formal de progresiones aritméticas, progresiones geométricas, el Teorema de Pitágoras y las razones trigonométricas te permite resolver problemas sobre trayectos mínimos, relaciones de proporcionalidad y escalabilidad espacial de manera rigurosa."
};

const TAREA_BLOQUE1 = [
  {
    tema: "Tema 1 · Álgebra y Lógica",
    n: 1,
    dificultad: "Básico",
    titulo: "Ejercicio 1 · Compra de libretas y lápices",
    enunciado: "<p>En la papelería del colegio, un estudiante adquiere paquetes de libretas y lápices para el club de matemáticas. El costo total en pesos de comprar $x$ libretas de costo unitario fijo y $y$ lápices a un precio de cinco pesos cada uno, más un costo fijo de envío de doce pesos, está dado por la relación lineal $C(x, y) = 25x + 5y + 12$. Si el presupuesto total asignado para la compra es de 312 pesos, modela la ecuación lineal que representa el consumo exacto de dicho presupuesto y determina la expresión algebraica para la cantidad de lápices $y$ que se pueden adquirir en función del número de libretas $x$, asegurando que $x, y \\in \\mathbb{N}$.</p>"
  },
  {
    tema: "Tema 1 · Álgebra y Lógica",
    n: 2,
    dificultad: "Básico",
    titulo: "Ejercicio 2 · Negación de proposiciones de acceso",
    enunciado: "<p>Considera las siguientes proposiciones simples sobre el acceso a la biblioteca del plantel:</p><ul><li>$A$: \"El estudiante está inscrito en el club de informática.\"</li><li>$B$: \"El estudiante tiene credencial vigente.\"</li></ul><p>Determina el valor de verdad ($1$ o $0$) de las proposiciones simples y de sus negaciones en el escenario donde un alumno no está inscrito en el club de informática ($A = 0$), pero sí posee credencial vigente ($B = 1$). Escribe formalmente la negación de cada proposición con el operador $\\neg$ ($\\neg A$ y $\\neg B$) e indica el valor numérico de verdad resultante para cada una.</p>"
  },
  {
    tema: "Tema 1 · Álgebra y Lógica",
    n: 3,
    dificultad: "Medio",
    titulo: "Ejercicio 3 · Criterios de clasificación para la final",
    enunciado: "<p>Para que un competidor califique a la fase final del torneo escolar, la comisión organizadora ha establecido dos condiciones representadas por las proposiciones:</p><ul><li>$P$: \"El alumno obtuvo un puntaje mayor a 80 en el examen preliminar.\"</li><li>$Q$: \"El alumno entregó todos los ejercicios del problemario.\"</li></ul><p>Analiza las reglas de clasificación bajo dos esquemas:</p><ol><li>El esquema estricto requiere que se cumplan ambas condiciones simultáneamente ($P \\wedge Q$).</li><li>El esquema flexible requiere que se cumpla al menos una de las dos condiciones ($P \\vee Q$).</li></ol><p>Calcula el valor de verdad ($1$ o $0$) de cada esquema en los cuatro casos posibles:</p><ul><li>Competidor 1: $P = 1$, $Q = 1$</li><li>Competidor 2: $P = 1$, $Q = 0$</li><li>Competidor 3: $P = 0$, $Q = 1$</li><li>Competidor 4: $P = 0$, $Q = 0$</li></ul>"
  },
  {
    tema: "Tema 1 · Álgebra y Lógica",
    n: 4,
    dificultad: "Medio",
    titulo: "Ejercicio 4 · Reglamento del laboratorio de cómputo",
    enunciado: "<p>El reglamento del laboratorio establece la siguiente norma condicional: \"Si el estudiante realiza una modificación no autorizada en la configuración del equipo ($A$), entonces se le suspende el acceso al laboratorio ($B$)\", expresada formalmente como la implicación $A \\Rightarrow B$.</p><p>Completa la tabla de verdad para las proposiciones $A$, $B$, sus negaciones $\\neg A$, $\\neg B$ y la condicional $A \\Rightarrow B$. Con base en la tabla terminada, determina bajo qué combinaciones de valores de verdad de las premisas la regla del laboratorio resulta verdadera ($1$) o falsa ($0$).</p><table class=\"table table-sm\"><thead><tr><th>$A$</th><th>$B$</th><th>$\\neg A$</th><th>$\\neg B$</th><th>$A \\Rightarrow B$</th></tr></thead><tbody><tr><td>$0$</td><td>$0$</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>$0$</td><td>$1$</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>$1$</td><td>$0$</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>$1$</td><td>$1$</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table>"
  },
  {
    tema: "Tema 1 · Álgebra y Lógica",
    n: 5,
    dificultad: "Avanzado",
    titulo: "Ejercicio 5 · Acceso multinivel del administrador",
    enunciado: "<p>El administrador de la red del vecindario escolar requiere validar una regla de acceso multinivel basada en tres proposiciones:</p><ul><li>$A$: \"El usuario es administrador.\"</li><li>$B$: \"El usuario tiene autorización especial.\"</li><li>$C$: \"El sistema está en modo de mantenimiento.\"</li></ul><p>La condición formal de acceso $E$ está definida por la expresión lógica compuesta $E = (A \\vee B) \\wedge \\neg (C \\Leftrightarrow A)$.</p><p>Determina el valor de verdad final ($1$ o $0$) del acceso $E$ para las $2^3 = 8$ combinaciones posibles de los valores de $A$, $B$ y $C$. Analiza el comportamiento de la subexpresión bicondicional $(C \\Leftrightarrow A)$ e indica de qué manera el estado de mantenimiento activo ($C = 1$) condiciona el permiso final del administrador ($A = 1$).</p>"
  },
  {
    tema: "Tema 2 · Aritmética, Conteo y Casos",
    n: 6,
    dificultad: "Básico",
    titulo: "Ejercicio 6 · Rutas periódicas de transporte",
    enunciado: "<p>Tres rutas de transporte escolar salen de la estación central del plantel a intervalos periódicos. La ruta A sale cada 12 minutos, la ruta B cada 18 minutos y la ruta C cada 30 minutos. Si las tres rutas coinciden en su salida a las 7:00 a. m., utiliza el Máximo Común Divisor (MCD) y el Mínimo Común Múltiplo (MCM) para determinar cuántos minutos transcurrirán para que las tres rutas vuelvan a salir simultáneamente por primera vez, y calcula el MCD de los tres intervalos para determinar la mayor unidad de tiempo común en que se pueden dividir sus frecuencias.</p>"
  },
  {
    tema: "Tema 2 · Aritmética, Conteo y Casos",
    n: 7,
    dificultad: "Básico",
    titulo: "Ejercicio 7 · Turno de vigilancia en el internado",
    enunciado: "<p>En el internado escolar, los turnos de vigilancia se asignan mediante un ciclo repetitivo de 7 días, numerados de $0$ a $6$, donde $0$ corresponde al domingo. Si hoy es martes ($2$) y a un estudiante le toca cumplir su turno dentro de $100$ días, aplica la aritmética modular $a \\equiv b \\pmod{m}$ para determinar el día exacto de la semana en que le tocará su guardia. Expresa formalmente la congruencia e indica el número y el nombre del día resultante.</p>"
  },
  {
    tema: "Tema 2 · Aritmética, Conteo y Casos",
    n: 8,
    dificultad: "Medio",
    titulo: "Ejercicio 8 · Caminos entre campus y menú de la cafetería",
    enunciado: "<p>Un estudiante debe planear su trayecto entre tres campus escolares ($X$, $Y$, $Z$) y la elección de su almuerzo. Para viajar del campus $X$ al campus $Y$ existen 4 caminos diferentes, y para ir del campus $Y$ al campus $Z$ existen 3 caminos distintos. Alternativamente, existe un trayecto directo del campus $X$ al campus $Z$ mediante 2 rutas expresas. Por otro lado, la cafetería del campus $Z$ ofrece 5 opciones de platillo principal y 3 tipos de bebida. Utilizando los principios de la suma y de la multiplicación, calcula:</p><ol><li>El número total de formas distintas de viajar del campus $X$ al campus $Z$.</li><li>El número total de combinaciones de almuerzo (un platillo y una bebida) disponibles.</li></ol>"
  },
  {
    tema: "Tema 2 · Aritmética, Conteo y Casos",
    n: 9,
    dificultad: "Medio",
    titulo: "Ejercicio 9 · Orden de las sillas en la premiación",
    enunciado: "<p>En la ceremonia de premiación de una competencia, un grupo de $n = 6$ competidores destacados debe sentarse en una fila de sillas individuales. El número de arreglos posibles sin repetición se modela con el factorial: $n! = \\prod_{x=1}^{n} x = 1 \\cdot 2 \\cdot 3 \\cdots n$.</p><p>Calcula el número total de ordenamientos en que pueden sentarse los 6 competidores. Después, calcula cuántos arreglos son posibles si el competidor con la mayor puntuación debe ocupar obligatoriamente la primera silla.</p>"
  },
  {
    tema: "Tema 2 · Aritmética, Conteo y Casos",
    n: 10,
    dificultad: "Avanzado",
    titulo: "Ejercicio 10 · Participación en clubes académicos",
    enunciado: "<p>En una encuesta realizada a un grupo de 100 estudiantes del vecindario escolar sobre su participación en tres clubes académicos (Matemáticas, $A$; Informática, $B$; y Robótica, $C$) se obtuvieron los siguientes datos:</p><ul><li>$|A| = 45$, $|B| = 40$, $|C| = 35$</li><li>$|A \\cap B| = 15$, $|A \\cap C| = 12$, $|B \\cap C| = 10$</li><li>$|A \\cap B \\cap C| = 5$</li></ul><p>Aplica el principio de inclusión-exclusión para conjuntos finitos: $|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$.</p><p>Determina el número exacto de estudiantes que participan en al menos uno de los tres clubes ($|A \\cup B \\cup C|$) y calcula cuántos estudiantes no participan en ninguno de los tres.</p>"
  },
  {
    tema: "Tema 3 · Geometría, Trigonometría y Patrones",
    n: 11,
    dificultad: "Básico",
    titulo: "Ejercicio 11 · Filas de asientos del auditorio",
    enunciado: "<p>Las filas de asientos del auditorio del colegio están dispuestas según una progresión aritmética. La primera fila ($a$) cuenta con 15 asientos, y cada fila siguiente incrementa su capacidad en una cantidad constante $d = 4$ asientos respecto a la anterior.</p><p>Utiliza las fórmulas para progresiones aritméticas:</p><ul><li>Término general: $u_n = a + (n-1)d$</li><li>Suma de los $n$ primeros términos: $S_n = \\frac{n(a + u_n)}{2}$, donde $u_n$ es el último término y $n$ el número total de filas.</li></ul><p>Calcula el número de asientos de la fila $12$ ($u_{12}$) y determina la capacidad total del auditorio considerando las 12 filas acumuladas ($S_{12}$).</p>"
  },
  {
    tema: "Tema 3 · Geometría, Trigonometría y Patrones",
    n: 12,
    dificultad: "Básico",
    titulo: "Ejercicio 12 · Propagación de un aviso en la red estudiantil",
    enunciado: "<p>Un aviso urgente sobre el torneo de matemáticas se difunde en una red de comunicación estudiantil organizada como una progresión geométrica de razón constante $k = 2$. En el paso inicial ($n = 1$), una persona envía la notificación a $a = 3$ coordinadores. En cada paso siguiente, cada receptor retransmite la información a $k = 2$ nuevos estudiantes.</p><p>La suma acumulada de estudiantes notificados hasta el término $b$ se calcula con la fórmula $S = a + ak + ak^2 + \\dots + b = \\frac{bk - a}{k - 1}$.</p><p>Considera la siguiente tabla, que registra la propagación término a término:</p><table class=\"table table-sm\"><thead><tr><th>Paso ($n$)</th><th>Término ($u_n$)</th><th>Expresión geométrica</th></tr></thead><tbody><tr><td>$1$</td><td>$3$</td><td>$a$</td></tr><tr><td>$2$</td><td>$6$</td><td>$ak$</td></tr><tr><td>$3$</td><td>$12$</td><td>$ak^2$</td></tr><tr><td>$4$</td><td>$24$</td><td>$ak^3$</td></tr></tbody></table><p>Determina el valor del término $b$ correspondiente al paso $n = 5$ y calcula la suma total acumulada de estudiantes $S$ que habrán recibido el mensaje al finalizar dicho quinto paso.</p>"
  },
  {
    tema: "Tema 3 · Geometría, Trigonometría y Patrones",
    n: 13,
    dificultad: "Medio",
    titulo: "Ejercicio 13 · Diagonal del patio central",
    enunciado: "<p>El patio central de la escuela tiene forma de rectángulo con vértices $A$, $B$, $C$, $D$. El largo está dado por el segmento $AB = 40$ m y el ancho por el segmento $BC = 30$ m.</p><p>Un estudiante desea desplazarse desde la esquina $A$ hasta la esquina opuesta $C$ siguiendo la menor distancia posible en línea recta (trayecto $AC$). Aplica el Teorema de Pitágoras $a^2 + b^2 = c^2$, donde $a = AB$, $b = BC$ y $c = AC$.</p><p>Calcula la longitud exacta del segmento $AC$. Adicionalmente, determina la suma de los ángulos internos del rectángulo $ABCD$ y verifica que la suma de los ángulos internos del triángulo $ABC$ sea $180^\\circ$.</p>"
  },
  {
    tema: "Tema 3 · Geometría, Trigonometría y Patrones",
    n: 14,
    dificultad: "Medio",
    titulo: "Ejercicio 14 · Altura de la asta bandera",
    enunciado: "<p>Para medir la altura inaccesible de la asta bandera del plantel, un grupo de alumnos utiliza la proporcionalidad de segmentos establecida por el Teorema de Tales. A una misma hora del día, una regla vertical de longitud $h_1 = 1.5$ m proyecta una sombra en el suelo de $s_1 = 2.0$ m. Simultáneamente, la asta bandera proyecta una sombra de $s_2 = 16.0$ m.</p><p>Utilizando la relación de proporcionalidad $\\frac{h_1}{s_1} = \\frac{h_2}{s_2}$, calcula la altura $h_2$ de la asta bandera y explica cómo la conservación de razones entre lados homólogos de triángulos semejantes permite determinar dimensiones que no podemos medir directamente.</p>"
  },
  {
    tema: "Tema 3 · Geometría, Trigonometría y Patrones",
    n: 15,
    dificultad: "Avanzado",
    titulo: "Ejercicio 15 · Distancias en el vecindario",
    enunciado: "<p>En el plano cartesiano del vecindario del colegio, la biblioteca se ubica en el punto $P_1 = (2, 3)$ y el laboratorio de robótica en el punto $P_2 = (8, 11)$, con coordenadas expresadas en kilómetros.</p><p>Analiza las dos formas de medir el recorrido entre $P_1$ y $P_2$:</p><ol><li>Distancia Manhattan ($d_M$): suma de las diferencias absolutas de las coordenadas horizontal y vertical, $d_M = |x_2 - x_1| + |y_2 - y_1|$, que corresponde al recorrido por calles perpendiculares.</li><li>Distancia euclidiana ($d_E$): longitud del segmento en línea recta que une ambos puntos, $d_E = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.</li></ol><p>Calcula el valor numérico exacto de ambas distancias ($d_M$ y $d_E$). Adicionalmente, aplica la razón trigonométrica de la tangente, $\\tan \\theta = \\frac{y_2 - y_1}{x_2 - x_1}$, para calcular la pendiente de la trayectoria directa respecto al eje horizontal.</p><p>El dominio de estas herramientas (lógica formal, conteo discreto, aritmética modular y modelado geométrico) es la base del razonamiento matemático que sostendrá los problemas más avanzados del curso.</p>"
  }
];
