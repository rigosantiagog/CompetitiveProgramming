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

  /* ================ TEMA 3 · Geometría, trigonometría y patrones (10 ejercicios) ================ */

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
  }

];


/* ==========================================================
   Tarea del Bloque 1 · 15 ejercicios con clave desplegable
   ========================================================== */

const TAREA_BLOQUE1 = [
  {
    tema: "Tema 1 · Álgebra y lógica (ejercicios 1 a 5)",
    n: 1,
    titulo: "Ejercicio 1 · Evaluación de expresiones y propiedades.",
    enunciado: "En la cooperativa de la preparatoria, el encargado arma paquetes de útiles para el inicio de semestre. Cada paquete contiene 5 cuadernos y 3 lápices. Durante el receso se venden 8 de estos paquetes completos y, además, 4 cuadernos sueltos.<ul class=\"mt-2 mb-0\"><li>a) Plantea la expresión numérica sin simplificar que representa el total de artículos vendidos, usando paréntesis, multiplicación y suma, y evalúala respetando el orden de las operaciones.</li><li>b) Aplica la propiedad distributiva para separar el cálculo en cuadernos y lápices, y verifica que obtienes el mismo resultado final.</li></ul>",
    respuestaFinal: "68 artículos en total.",
    procedimiento: "<ol class=\"mb-0\"><li>Expresión sin simplificar: $8 \\cdot (5 + 3) + 4 = 8 \\cdot 8 + 4$.</li><li>Multiplicación y suma: $64 + 4 = 68$.</li><li>Con la propiedad distributiva: $8 \\cdot 5 + 8 \\cdot 3 + 4 = 40 + 24 + 4 = 68$.</li></ol>"
  },
  {
    tema: "Tema 1 · Álgebra y lógica (ejercicios 1 a 5)",
    n: 2,
    titulo: "Ejercicio 2 · Ecuaciones de primer grado con paréntesis.",
    enunciado: "En el tianguis cercano a la escuela, dos puestos de fruta venden guayabas del mismo proveedor. En el puesto A, el costo de comprar $x$ kilogramos con empaque especial es $3(x + 4)$ pesos. En el puesto B, el costo por una compra equivalente es $2(x - 1) + 26$ pesos. Si el gasto es el mismo en ambos puestos:<ul class=\"mt-2 mb-0\"><li>Plantea y resuelve la ecuación $3(x + 4) = 2(x - 1) + 26$.</li><li>Indica cuántos kilogramos se compraron.</li></ul>",
    respuestaFinal: "$x = 12$ kilogramos.",
    procedimiento: "<ol class=\"mb-0\"><li>Distributiva en ambos lados: $3x + 12 = 2x - 2 + 26$.</li><li>Simplificamos: $3x + 12 = 2x + 24$.</li><li>Agrupamos: $3x - 2x = 24 - 12$, así que $x = 12$.</li></ol>"
  },
  {
    tema: "Tema 1 · Álgebra y lógica (ejercicios 1 a 5)",
    n: 3,
    titulo: "Ejercicio 3 · Planteamiento verbal.",
    enunciado: "En el torneo intercolegial de básquetbol, el equipo acumuló su puntaje así: obtuvo el triple del número de partidos ganados $g$, sumó un punto por cada partido empatado $e$ y tuvo una penalización fija de 2 puntos por faltas técnicas.<ul class=\"mt-2 mb-0\"><li>Traduce la descripción a una expresión algebraica reducida para el puntaje total $P$.</li><li>Calcula $P$ si el equipo ganó $g = 5$ partidos y empató $e = 3$.</li></ul>",
    respuestaFinal: "$P = 3g + e - 2$; con $g = 5$ y $e = 3$, $P = 16$ puntos.",
    procedimiento: "<ol class=\"mb-0\"><li>Expresión: $P = 3g + e - 2$.</li><li>Sustituimos: $P = 3(5) + 3 - 2$.</li><li>Resultado: $P = 15 + 3 - 2 = 16$.</li></ol>"
  },
  {
    tema: "Tema 1 · Álgebra y lógica (ejercicios 1 a 5)",
    n: 4,
    titulo: "Ejercicio 4 · Tablas de verdad.",
    enunciado: "Para tener tarifa preferencial en el Metro, un estudiante debe cumplir una regla lógica. Sean las proposiciones:<ul class=\"mt-2 mb-2\"><li>$p$: \"El estudiante porta credencial escolar vigente.\"</li><li>$q$: \"El viaje se realiza en domingo.\"</li></ul>La regla de acceso es $E = (p \\lor q) \\land \\lnot(p \\land q)$. Determina el valor de verdad de $E$ en el caso en que el estudiante porta credencial ($p$ es V) pero el viaje no es en domingo ($q$ es F).",
    respuestaFinal: "V (verdadero).",
    procedimiento: "<ol class=\"mb-0\"><li>Con $p$ = V y $q$ = F: $p \\lor q = V \\lor F = V$.</li><li>$p \\land q = V \\land F = F$, y su negación es $\\lnot F = V$.</li><li>Resultado: $V \\land V = V$.</li></ol>"
  },
  {
    tema: "Tema 1 · Álgebra y lógica (ejercicios 1 a 5)",
    n: 5,
    titulo: "Ejercicio 5 · Negación del condicional.",
    enunciado: "El reglamento de becas establece: \"Si entregas todas las tareas a tiempo ($A$), entonces obtienes la beca de excelencia ($B$)\", es decir, $A \\Rightarrow B$.<ul class=\"mt-2 mb-0\"><li>Redacta en lenguaje natural la negación de esta proposición, $\\lnot(A \\Rightarrow B)$.</li><li>Demuestra que $\\lnot(A \\Rightarrow B)$ es equivalente a $A \\land \\lnot B$, y explica en qué único caso de valores de verdad para $A$ y $B$ ambas expresiones son verdaderas.</li></ul>",
    respuestaFinal: "\"Entregas todas las tareas a tiempo y no obtienes la beca de excelencia.\"",
    procedimiento: "<ol class=\"mb-0\"><li>Por la equivalencia $A \\Rightarrow B \\equiv \\lnot A \\lor B$, tenemos $\\lnot(A \\Rightarrow B) \\equiv \\lnot(\\lnot A \\lor B)$.</li><li>Por las leyes de De Morgan: $\\lnot(\\lnot A \\lor B) \\equiv \\lnot(\\lnot A) \\land \\lnot B \\equiv A \\land \\lnot B$.</li><li>En la tabla de verdad, $A \\land \\lnot B$ es V solo cuando $A$ = V y $B$ = F, que es el único caso donde $A \\Rightarrow B$ es falsa.</li></ol>"
  },
  {
    tema: "Tema 2 · Aritmética, conteo y casos (ejercicios 6 a 10)",
    n: 6,
    titulo: "Ejercicio 6 · Paridad y división con residuo.",
    enunciado: "Un pesero aborda a 47 pasajeros. Sus asientos están distribuidos en parejas (filas de 2 asientos).<ul class=\"mt-2 mb-0\"><li>Realiza la división entera $47 \\div 2$ para hallar el cociente $q$ (parejas completamente ocupadas) y el residuo $r$ (pasajeros sin pareja de asiento).</li><li>Determina si el número total de pasajeros es par o impar, argumentando con la forma $2q + r$.</li></ul>",
    respuestaFinal: "cociente $q = 23$, residuo $r = 1$; el número de pasajeros es impar.",
    procedimiento: "<ol class=\"mb-0\"><li>División entera: $47 = 2 \\cdot 23 + 1$.</li><li>Con la forma $2q + r$, el número es $2 \\cdot 23 + 1$.</li><li>Como $r = 1 \\neq 0$, el número 47 es impar.</li></ol>"
  },
  {
    tema: "Tema 2 · Aritmética, conteo y casos (ejercicios 6 a 10)",
    n: 7,
    titulo: "Ejercicio 7 · Piso y techo.",
    enunciado: "Para remodelar un salón se requieren 14.3 litros de pintura. La tienda solo vende cubetas cerradas de 3 litros.<ul class=\"mt-2 mb-0\"><li>Usa la función techo para calcular cuántas cubetas se deben comprar.</li><li>Usa la función piso para calcular cuántos litros completos se consumen, y después calcula cuántos litros comprados quedan sin usar.</li></ul>",
    respuestaFinal: "se compran 5 cubetas; quedan 0.7 litros sin usar.",
    procedimiento: "<ol class=\"mb-0\"><li>Techo: $\\left\\lceil 14.3 / 3 \\right\\rceil = \\lceil 4.77 \\rceil = 5$ cubetas, que son $5 \\cdot 3 = 15$ litros.</li><li>Piso: $\\lfloor 14.3 \\rfloor = 14$ litros completos se consumen.</li><li>Sobrante: $15 - 14.3 = 0.7$ litros comprados que no se usan.</li></ol>"
  },
  {
    tema: "Tema 2 · Aritmética, conteo y casos (ejercicios 6 a 10)",
    n: 8,
    titulo: "Ejercicio 8 · Suma y producto.",
    enunciado: "Un estudiante va de su casa a la preparatoria y de ahí al gimnasio. Para el primer trayecto puede elegir entre 2 rutas independientes de camión o 1 línea de metro. Para el segundo trayecto hay 2 rutas distintas de pesero.<ul class=\"mt-2 mb-0\"><li>Usa el principio de la suma para contar las opciones del primer trayecto.</li><li>Usa el principio del producto para contar los trayectos completos distintos de la casa al gimnasio.</li></ul>",
    respuestaFinal: "6 trayectos distintos.",
    procedimiento: "<ol class=\"mb-0\"><li>Principio de la suma para el primer trayecto: $2 + 1 = 3$ opciones.</li><li>Segundo trayecto: 2 opciones de pesero.</li><li>Principio del producto: $3 \\cdot 2 = 6$ trayectos completos.</li></ol>"
  },
  {
    tema: "Tema 2 · Aritmética, conteo y casos (ejercicios 6 a 10)",
    n: 9,
    titulo: "Ejercicio 9 · Inclusión-exclusión.",
    enunciado: "En una encuesta a 50 estudiantes sobre dos talleres extracurriculares, Música y Robótica, 22 participan en Música, 19 en Robótica y 8 en ambos talleres.<ul class=\"mt-2 mb-0\"><li>¿Cuántos estudiantes participan en al menos uno de los dos talleres?</li><li>¿Cuántos estudiantes no participan en ninguno?</li></ul>",
    respuestaFinal: "33 estudiantes participan en al menos un taller; 17 no participan en ninguno.",
    procedimiento: "<ol class=\"mb-0\"><li>Inclusión-exclusión: $|M \\cup R| = 22 + 19 - 8 = 33$.</li><li>Los que participan en al menos uno son 33.</li><li>Los que no participan en ninguno son $50 - 33 = 17$.</li></ol>"
  },
  {
    tema: "Tema 2 · Aritmética, conteo y casos (ejercicios 6 a 10)",
    n: 10,
    titulo: "Ejercicio 10 · Conteo de múltiplos en un rango.",
    enunciado: "En una kermés de la escuela, las fichas de rifa están numeradas del 1 al 200. Las fichas cuyo número es múltiplo de 7 ganan un premio.<ul class=\"mt-2 mb-0\"><li>¿Cuántas fichas ganan premio?</li><li>¿Cuál es el número de la última ficha premiada?</li></ul>",
    respuestaFinal: "28 fichas premiadas; la última premiada es la 196.",
    procedimiento: "<ol class=\"mb-0\"><li>Cantidad de múltiplos de 7 entre 1 y 200: $\\lfloor 200 / 7 \\rfloor = \\lfloor 28.57 \\rfloor = 28$.</li><li>Comprobación: $7 \\cdot 28 = 196 \\le 200$, y $7 \\cdot 29 = 203 > 200$.</li><li>Resultado: 28 fichas premiadas, y la última es la 196.</li></ol>"
  },
  {
    tema: "Tema 3 · Geometría, trigonometría y patrones (ejercicios 11 a 15)",
    n: 11,
    titulo: "Ejercicio 11 · Ángulos de un polígono.",
    enunciado: "El área de juegos del patio tiene forma de pentágono convexo. Al trazar la cancha se midieron cuatro de sus ángulos internos: $100^\\circ$, $110^\\circ$, $120^\\circ$ y $90^\\circ$.<ul class=\"mt-2 mb-0\"><li>Calcula la suma de los ángulos internos del pentágono usando $S = (n - 2) \\cdot 180^\\circ$.</li><li>Determina la medida del quinto ángulo interno.</li></ul>",
    respuestaFinal: "la suma es $540^\\circ$; el quinto ángulo mide $120^\\circ$.",
    procedimiento: "<ol class=\"mb-0\"><li>Para $n = 5$: $S = (5 - 2) \\cdot 180^\\circ = 540^\\circ$.</li><li>Los cuatro ángulos conocidos suman $100^\\circ + 110^\\circ + 120^\\circ + 90^\\circ = 420^\\circ$.</li><li>Quinto ángulo: $540^\\circ - 420^\\circ = 120^\\circ$.</li></ol>"
  },
  {
    tema: "Tema 3 · Geometría, trigonometría y patrones (ejercicios 11 a 15)",
    n: 12,
    titulo: "Ejercicio 12 · Pitágoras y distancia.",
    enunciado: "Un alumno cruza en línea recta la plaza del municipio desde la esquina $A(1, 2)$ hasta la esquina opuesta $B(7, 10)$, medidas en metros.<ul class=\"mt-2 mb-0\"><li>Aplica la fórmula de distancia $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.</li><li>Calcula la distancia recorrida en metros.</li></ul>",
    respuestaFinal: "10 metros.",
    procedimiento: "<ol class=\"mb-0\"><li>$\\Delta x = 7 - 1 = 6$ y $\\Delta y = 10 - 2 = 8$.</li><li>$d = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64}$.</li><li>$d = \\sqrt{100} = 10$ metros.</li></ol>"
  },
  {
    tema: "Tema 3 · Geometría, trigonometría y patrones (ejercicios 11 a 15)",
    n: 13,
    titulo: "Ejercicio 13 · Razones trigonométricas en ángulos notables.",
    enunciado: "Un asta bandera proyecta una sombra de $6\\sqrt{3}$ metros sobre el suelo plano, cuando el ángulo de elevación del sol es de $30^\\circ$.<ul class=\"mt-2 mb-0\"><li>Usa $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$ para plantear la relación con la altura $h$ del asta.</li><li>Calcula el valor exacto de $h$, sin aproximaciones decimales.</li></ul>",
    respuestaFinal: "$h = 6$ metros.",
    procedimiento: "<ol class=\"mb-0\"><li>$\\tan 30^\\circ = \\frac{h}{6\\sqrt{3}}$.</li><li>Sustituimos $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$: $\\frac{1}{\\sqrt{3}} = \\frac{h}{6\\sqrt{3}}$.</li><li>Despejamos: $h = \\frac{6\\sqrt{3}}{\\sqrt{3}} = 6$ metros.</li></ol>"
  },
  {
    tema: "Tema 3 · Geometría, trigonometría y patrones (ejercicios 11 a 15)",
    n: 14,
    titulo: "Ejercicio 14 · Progresión aritmética.",
    enunciado: "Un estudiante inicia un entrenamiento físico con 10 lagartijas diarias en la primera semana. Cada semana aumenta 4 lagartijas diarias respecto a la semana anterior.<ul class=\"mt-2 mb-0\"><li>Calcula $a_{10}$, la cantidad diaria de lagartijas en la décima semana.</li><li>Calcula la suma de las cantidades diarias de las 10 semanas (un valor por semana) con la fórmula $S_n = \\frac{n(a_1 + a_n)}{2}$.</li></ul>",
    respuestaFinal: "$a_{10} = 46$ lagartijas diarias; la suma de las 10 semanas es 280.",
    procedimiento: "<ol class=\"mb-0\"><li>$a_{10} = a_1 + (10 - 1) \\cdot d = 10 + 9 \\cdot 4 = 46$.</li><li>$S_{10} = \\frac{10 (10 + 46)}{2}$.</li><li>$S_{10} = 5 \\cdot 56 = 280$.</li></ol>"
  },
  {
    tema: "Tema 3 · Geometría, trigonometría y patrones (ejercicios 11 a 15)",
    n: 15,
    titulo: "Ejercicio 15 · Suma de impares.",
    enunciado: "Para una ceremonia escolar, las sillas se acomodan en un arreglo piramidal. La primera fila tiene 1 silla, la segunda 3, la tercera 5, y así sucesivamente. La fila $k$ tiene $2k - 1$ sillas.<ul class=\"mt-2 mb-0\"><li>Demuestra que $\\sum_{k=1}^{n} (2k - 1) = n^2$.</li><li>Calcula el total de sillas si el arreglo tiene 8 filas completas.</li></ul>",
    respuestaFinal: "64 sillas.",
    procedimiento: "<ol class=\"mb-0\"><li>Demostración: $\\sum_{k=1}^{n} (2k - 1) = 2 \\sum_{k=1}^{n} k - \\sum_{k=1}^{n} 1 = 2 \\cdot \\frac{n(n+1)}{2} - n = n^2 + n - n = n^2$.</li><li>Para $n = 8$: $S_8 = 8^2 = 64$.</li><li>Comprobación: $1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 = 64$.</li></ol>"
  }
];
