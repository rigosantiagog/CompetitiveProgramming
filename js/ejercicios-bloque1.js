/* ==========================================================
   Bloque 1 · Banco de ejercicios
   Fuente: clase1_ejercicios.md, clase2_ejercicios.md y clase3_ejercicios.md
   Tipos de respuesta:
     "num"   -> el alumno escribe un número (campo: valor)
     "opc"   -> el alumno elige una opción (campos: opciones, correcta = índice)
     "multi" -> varios números (campo: campos = [{etiqueta, valor}, ...])
   ========================================================== */

const EJERCICIOS_BLOQUE1 = [

  /* ---------------- CLASE 1 · Álgebra y lógica ---------------- */

  { clase: 1, parte: "A", n: 1, tipo: "num", valor: 13,
    enunciado: "Evalúa 3x − 2 cuando x = 5.",
    explicacion: "3 · 5 − 2 = 15 − 2 = 13." },

  { clase: 1, parte: "A", n: 2, tipo: "num", valor: 11,
    enunciado: "Resuelve x + 9 = 20.",
    explicacion: "Restamos 9 a ambos lados: x = 11. Comprobación: 11 + 9 = 20." },

  { clase: 1, parte: "A", n: 3, tipo: "opc",
    enunciado: "Simplifica 4(x + 2) − 3x.",
    opciones: ["x + 8", "x + 2", "7x + 8", "x − 8"], correcta: 0,
    explicacion: "Distribuimos: 4x + 8 − 3x = x + 8." },

  { clase: 1, parte: "A", n: 4, tipo: "opc",
    enunciado: "Escribe la negación de: «Si tengo tarea, entonces no salgo».",
    opciones: ["Tengo tarea y salgo.", "No tengo tarea y salgo.", "Tengo tarea o salgo.", "No tengo tarea o no salgo."], correcta: 0,
    explicacion: "La negación de «si p entonces q» es «p y no q». Aquí p = tengo tarea y q = no salgo, así que la negación es «tengo tarea y salgo»." },

  { clase: 1, parte: "A", n: 5, tipo: "opc",
    enunciado: "Sean p = V, q = F, r = V. ¿Cuál es el valor de (p O q) Y NO r?",
    opciones: ["Verdadero", "Falso"], correcta: 1,
    explicacion: "p O q = V. NO r = F. V Y F = F." },

  { clase: 1, parte: "B", n: 6, tipo: "num", valor: 14,
    enunciado: "Evalúa 2 + 3 · 4. Escribe el resultado (explica por qué no es 20).",
    explicacion: "Primero se multiplica: 3 · 4 = 12. Después se suma: 2 + 12 = 14. Si se sumara primero, se obtendría 20, pero eso no respeta la jerarquía de operaciones." },

  { clase: 1, parte: "B", n: 7, tipo: "num", valor: 5,
    enunciado: "Resuelve 5x − 7 = 18.",
    explicacion: "5x = 25, entonces x = 5. Comprobación: 5 · 5 − 7 = 18." },

  { clase: 1, parte: "B", n: 8, tipo: "opc",
    enunciado: "Expande y simplifica 3(2x + 5) − 4x.",
    opciones: ["2x + 15", "10x + 15", "2x + 5", "6x + 15"], correcta: 0,
    explicacion: "3(2x + 5) = 6x + 15. Luego 6x + 15 − 4x = 2x + 15." },

  { clase: 1, parte: "B", n: 9, tipo: "opc",
    enunciado: "Verdadero o falso: «x + 3 = 3x para todo x».",
    opciones: ["Verdadero", "Falso"], correcta: 1,
    explicacion: "Es falso. Contraejemplo con x = 1: 1 + 3 = 4, pero 3 · 1 = 3. Basta un solo caso que no cumpla para refutar una afirmación «para todo»." },

  { clase: 1, parte: "B", n: 10, tipo: "opc",
    enunciado: "Escribe la negación de: «Hoy llueve y hace frío».",
    opciones: ["Llueve o no hace frío.", "No llueve o no hace frío.", "No llueve y no hace frío.", "No llueve o hace frío."], correcta: 1,
    explicacion: "La negación de «p y q» es «no p o no q» (ley de De Morgan). Por eso la respuesta es «no llueve o no hace frío»." },

  /* ---------------- CLASE 2 · Aritmética, conteo y casos ---------------- */

  { clase: 2, parte: "A", n: 1, tipo: "multi",
    enunciado: "Calcula el cociente y el residuo de 23 entre 5.",
    campos: [{ etiqueta: "Cociente", valor: 4 }, { etiqueta: "Residuo", valor: 3 }],
    explicacion: "23 = 5 · 4 + 3. El cociente es 4 y el residuo es 3." },

  { clase: 2, parte: "A", n: 2, tipo: "num", valor: 3,
    enunciado: "¿Cuántos autobuses de 40 asientos se necesitan para 95 personas?",
    explicacion: "Dividimos y redondeamos hacia arriba: ⌈95 ÷ 40⌉ = 3. Dos autobuses solo llevan 80 personas." },

  { clase: 2, parte: "A", n: 3, tipo: "num", valor: 12,
    enunciado: "Un restaurante ofrece 4 sopas y 3 tortas. ¿Cuántas combinaciones hay de una sopa y una torta?",
    explicacion: "Principio de multiplicación: 4 · 3 = 12." },

  { clase: 2, parte: "A", n: 4, tipo: "num", valor: 5,
    enunciado: "Puedes elegir una fruta (3 opciones) o una verdura (2 opciones). ¿Cuántas opciones tienes?",
    explicacion: "Son opciones que no se mezclan (o una o la otra), así que se suman: 3 + 2 = 5." },

  { clase: 2, parte: "A", n: 5, tipo: "num", valor: 90,
    enunciado: "¿Cuántos números de dos dígitos hay (del 10 al 99)?",
    explicacion: "99 − 10 + 1 = 90." },

  { clase: 2, parte: "B", n: 6, tipo: "num", valor: 15,
    enunciado: "¿Cuál es ⌈100 ÷ 7⌉?",
    explicacion: "100 ÷ 7 = 14.28…, y el techo (redondeo hacia arriba) es 15. Otra forma: (100 + 6) ÷ 7 = 106 ÷ 7 = 15." },

  { clase: 2, parte: "B", n: 7, tipo: "num", valor: 8,
    enunciado: "Un par ordenado (x, y) tiene x en {1, 2, 3, 4} y y en {A, B}. ¿Cuántos pares distintos hay?",
    explicacion: "4 opciones para x y 2 para y: 4 · 2 = 8." },

  { clase: 2, parte: "B", n: 8, tipo: "num", valor: 120,
    enunciado: "Un equipo de 6 personas asigna 3 roles distintos: capitán, portero y delantero. ¿De cuántas formas?",
    explicacion: "El orden importa: 6 · 5 · 4 = 120." },

  { clase: 2, parte: "B", n: 9, tipo: "num", valor: 30,
    enunciado: "De 6 estudiantes hay que elegir presidente y vicepresidente distintos. ¿De cuántas formas?",
    explicacion: "Presidente: 6 opciones. Vicepresidente: 5 opciones restantes. 6 · 5 = 30." },

  { clase: 2, parte: "B", n: 10, tipo: "num", valor: 180,
    enunciado: "¿Cuántos números de tres dígitos son múltiplos de 5?",
    explicacion: "El tercer dígito solo puede ser 0 o 5 (2 opciones). El primero tiene 9 opciones (1 a 9) y el segundo 10. 9 · 10 · 2 = 180." },

  /* ---------------- CLASE 3 · Geometría, trigonometría y patrones ---------------- */

  { clase: 3, parte: "A", n: 1, tipo: "num", valor: 65,
    enunciado: "Un triángulo tiene ángulos de 40° y 75°. ¿Cuánto mide el tercero (en grados)?",
    explicacion: "La suma de los ángulos de un triángulo es 180°: 180 − 40 − 75 = 65." },

  { clase: 3, parte: "A", n: 2, tipo: "num", valor: 13,
    enunciado: "Un triángulo rectángulo tiene catetos de 5 y 12. ¿Cuánto mide la hipotenusa?",
    explicacion: "5² + 12² = 25 + 144 = 169, y √169 = 13." },

  { clase: 3, parte: "A", n: 3, tipo: "num", valor: 5,
    enunciado: "Calcula la distancia entre los puntos (2, 3) y (5, 7).",
    explicacion: "Diferencias: 3 y 4. Distancia = √(3² + 4²) = √25 = 5." },

  { clase: 3, parte: "A", n: 4, tipo: "num", valor: 10,
    enunciado: "En un triángulo rectángulo, la hipotenusa mide 20 y un ángulo es de 30°. ¿Cuánto mide el cateto opuesto a ese ángulo?",
    explicacion: "Cateto opuesto = hipotenusa · sen 30° = 20 · 0.5 = 10." },

  { clase: 3, parte: "A", n: 5, tipo: "num", valor: 48,
    enunciado: "La secuencia 3, 8, 13, … ¿cuánto vale su décimo término?",
    explicacion: "Es aritmética con diferencia 5: a₁₀ = 3 + 9 · 5 = 48." },

  { clase: 3, parte: "B", n: 6, tipo: "num", valor: 55,
    enunciado: "Un triángulo rectángulo tiene un ángulo de 35°. ¿Cuánto mide el otro ángulo agudo (en grados)?",
    explicacion: "En un triángulo rectángulo los dos ángulos agudos suman 90°: 90 − 35 = 55." },

  { clase: 3, parte: "B", n: 7, tipo: "num", valor: 90,
    enunciado: "Un cuadrilátero tiene ángulos de 90°, 100° y 80°. ¿Cuánto mide el cuarto (en grados)?",
    explicacion: "La suma de los ángulos interiores de un cuadrilátero es 360°: 360 − 90 − 100 − 80 = 90." },

  { clase: 3, parte: "B", n: 8, tipo: "num", valor: 5,
    enunciado: "Calcula la distancia entre (−1, −1) y (2, 3).",
    explicacion: "Diferencias: 3 en x y 4 en y. Distancia = √(3² + 4²) = 5." },

  { clase: 3, parte: "B", n: 9, tipo: "num", valor: 7,
    enunciado: "Un triángulo rectángulo tiene hipotenusa de 14 y un ángulo de 60°. ¿Cuánto mide el cateto adyacente a ese ángulo? (Pista: cos 60° = 1/2).",
    explicacion: "Cateto adyacente = hipotenusa · cos 60° = 14 · 0.5 = 7." },

  { clase: 3, parte: "B", n: 10, tipo: "num", valor: 8,
    enunciado: "Una escalera de 10 m se apoya en una pared. Su base queda a 6 m de la pared. ¿A qué altura llega? (en metros)",
    explicacion: "Pitágoras: altura² = 10² − 6² = 100 − 36 = 64, así que la altura es 8 m." }
];
