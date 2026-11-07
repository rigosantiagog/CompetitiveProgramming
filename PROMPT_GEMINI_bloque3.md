# Prompt para Gemini · Actualización del sitio con el Bloque 3

Te paso el zip completo del sitio del curso **Programación Competitiva en C++ · Bug Squad**. Ya trae todo el contenido nuevo. Tu trabajo es solo de diseño: revisa que lo nuevo se vea igual de bien que el resto del sitio, sin cambiar textos ni contenido.

## Qué cambió en esta versión

1. **Bloque 3 activado: "Jueces automatizados y plataformas de entrenamiento".**
   - Página nueva: `bloque3/index.html`.
   - Cuatro temas: ¿Qué es un juez automatizado?, omegaUp, Codeforces, y Veredictos y errores al enviar (43 subtemas en total).
   - Este bloque es **solo de lectura**: cada tema tiene únicamente la pestaña **Aprender**, sin Practicar ni Quiz. Es intencional; no agregues esas pestañas.
   - Las lecturas están en `js/lecturas-bloque3.js` y la navegación en `js/pestanas-bloque3.js`. Funcionan igual que las del Bloque 2: tarjetas de subtemas, visor de lectura y casilla "Marcar como leída".
   - La barra lateral tiene un contador de "Subtemas leídos" con barra de progreso, en lugar del avance de quizzes y ejercicios de los otros bloques.
   - Los temas 2, 3 y 4 tienen botones de recursos al final de la lectura: enlaces a omegaUp, a Codeforces, al problema 4A y a la plantilla del curso.
   - La página carga KaTeX, porque las lecturas tienen fórmulas como $10^8$.
2. **Portada (`index.html`):** la tarjeta del Bloque 3 pasó de "Próximamente" a "Disponible", con su descripción nueva y el botón "Entrar al bloque". En "Cómo estudiar con este sitio" se agregó un punto que explica que el Bloque 3 es solo de lectura.
3. **Menú superior:** se agregó "Bloque 3" en la portada, el Bloque 1, el Bloque 2 y el Bloque 3.
4. **NotebookLM:** el sitio ya no tiene nada relacionado con el chatbot de NotebookLM. **No lo vuelvas a agregar.** El profesor le está haciendo ajustes y él avisará cuando regrese.
5. `README.md` actualizado con los archivos nuevos.

## Qué te pido

- Conserva el diseño actual: colores, tipografías (Inter y JetBrains Mono), tarjetas, sombras, degradados, banner, barra lateral y comportamiento responsivo. Usa las clases y variables CSS que ya existen en `css/estilos.css`.
- Revisa que el Bloque 3 se vea consistente con el Bloque 2. Hay una sola pestaña (**Aprender**) en cada tema; si la barra de pestañas se ve rara con un solo botón, ajusta solo su estilo dentro del Bloque 3, sin quitarla.
- Las lecturas del Tema 4 tienen bloques de código largos, con comentarios en cada línea. Comprueba que se lean bien y que en celular se desplacen horizontalmente dentro de su recuadro, sin desbordar la página.
- Revisa las tablas de las lecturas en celular (envueltas en `.table-responsive`).
- Si agregas reglas de CSS, ponlas en `css/estilos.css` y limítalas a lo necesario.

## Qué no debes cambiar

- Ningún texto de las lecturas, títulos, descripciones ni código C++ de ejemplo.
- La estructura de datos de `js/lecturas-bloque3.js` (objeto `LECTURAS_BLOQUE3`) ni la lógica de `js/pestanas-bloque3.js`.
- El contenido de los Bloques 1 y 2.
- El orden de los bloques: 1 Lógica, 2 Primeros pasos en C++, 3 Jueces automatizados, 4 Ciclos y simulación, 5 Cadenas, 6 Arreglos, 7 Constructivos, 8 Comunicación e interactivos.

## Cómo entregarlo

Regrésame el zip completo con la misma estructura de carpetas, listo para subir a Vercel, y una lista corta de los archivos que modificaste y qué cambiaste en cada uno.
