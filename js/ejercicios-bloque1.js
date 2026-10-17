/* ==========================================================
   Bloque 1 · Banco de ejercicios
   Fuente: temas 1, 2 y 3 (clase1_ejercicios.md, clase2_ejercicios.md, clase3_ejercicios.md)
   Las fórmulas van en LaTeX entre $…$ y se muestran con MathJax.
   Tipos de respuesta:
     "num"   -> el alumno escribe un número (campo: valor)
     "opc"   -> el alumno elige una opción (campos: opciones, correcta = índice)
     "multi" -> varios números (campo: campos = [{etiqueta, valor}, ...])
   ========================================================== */

const EJERCICIOS_BLOQUE1 = [

  /* ---------------- TEMA 1 · Álgebra y lógica ---------------- */

  { clase: 1, parte: "A", n: 1, tipo: "num", valor: 13,
    enunciado: "Evalúa $3x - 2$ cuando $x = 5$.",
    explicacion: "$3 \\cdot 5 - 2 = 15 - 2 = 13$." },

  { clase: 1, parte: "A", n: 2, tipo: "num", valor: 11,
    enunciado: "Resuelve $x + 9 = 20$.",
    explicacion: "Restamos $9$ a ambos lados: $x = 11$. Comprobación: $11 + 9 = 20$." },

  { clase: 1, parte: "A", n: 3, tipo: "opc",
    enunciado: "Simplifica $4(x + 2) - 3x$.",
    opciones: ["$x + 8$", "$x + 2$", "$7x + 8$", "$x - 8$"], correcta: 0,
    explicacion: "Distribuimos: $4x + 8 - 3x = x + 8$." },

  { clase: 1, parte: "A", n: 4, tipo: "opc",
    enunciado: "Escribe la negación de: «Si tengo tarea, entonces no salgo».",
    opciones: ["Tengo tarea $\\land$ salgo.", "No tengo tarea $\\land$ salgo.", "Tengo tarea $\\lor$ salgo.", "No tengo tarea $\\lor$ no salgo."], correcta: 0,
    explicacion: "$\\neg(p \\rightarrow \\neg q) \\equiv p \\land q$. Con $p$ = tengo tarea y $q$ = salgo, la negación es «tengo tarea y salgo»." },

  { clase: 1, parte: "A", n: 5, tipo: "opc",
    enunciado: "Sean $p = V$, $q = F$, $r = V$. ¿Cuál es el valor de $(p \\lor q) \\land \\neg r$?",
    opciones: ["Verdadero", "Falso"], correcta: 1,
    explicacion: "$p \\lor q = V$, $\\neg r = F$, y $V \\land F = F$." },

  { clase: 1, parte: "B", n: 6, tipo: "num", valor: 14,
    enunciado: "Evalúa $2 + 3 \\cdot 4$. Escribe el resultado (explica por qué no es $20$).",
    explicacion: "Primero se multiplica: $3 \\cdot 4 = 12$. Después se suma: $2 + 12 = 14$. Si se sumara primero, se obtendría $20$, pero eso no respeta la jerarquía de operaciones." },

  { clase: 1, parte: "B", n: 7, tipo: "num", valor: 5,
    enunciado: "Resuelve $5x - 7 = 18$.",
    explicacion: "$5x = 25$, entonces $x = 5$. Comprobación: $5 \\cdot 5 - 7 = 18$." },

  { clase: 1, parte: "B", n: 8, tipo: "opc",
    enunciado: "Expande y simplifica $3(2x + 5) - 4x$.",
    opciones: ["$2x + 15$", "$10x + 15$", "$2x + 5$", "$6x + 15$"], correcta: 0,
    explicacion: "$3(2x + 5) = 6x + 15$. Luego $6x + 15 - 4x = 2x + 15$." },

  { clase: 1, parte: "B", n: 9, tipo: "opc",
    enunciado: "Verdadero o falso: «$x + 3 = 3x$ para todo $x$».",
    opciones: ["Verdadero", "Falso"], correcta: 1,
    explicacion: "Es falso. Con $x = 1$: $1 + 3 = 4$, pero $3 \\cdot 1 = 3$. Basta un contraejemplo para refutar una afirmación «para todo»." },

  { clase: 1, parte: "B", n: 10, tipo: "opc",
    enunciado: "Escribe la negación de: «Hoy llueve y hace frío».",
    opciones: ["Llueve $\\lor$ no hace frío.", "No llueve $\\lor$ no hace frío.", "No llueve $\\land$ no hace frío.", "No llueve $\\lor$ hace frío."], correcta: 1,
    explicacion: "Ley de De Morgan: $\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$." },

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
