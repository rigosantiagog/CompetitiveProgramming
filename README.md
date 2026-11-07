# Programación Competitiva en C++ · Bug Squad

Sitio estático (HTML5, CSS3, Bootstrap 5, Font Awesome, Google Fonts y KaTeX) del curso.
No requiere compilación: Vercel lo publica tal cual.

Diseñado y organizado por Prof. Rigoberto Santiago Garzón.

## Estructura

```
curso-cpp-web/
├── index.html                  Portada, ruta de bloques y guía de estudio
├── bloque1/
│   ├── index.html              Bloque 1: Aprender, Practicar y Quiz de 3 temas, y problemario
│   ├── presentacion-tema1.html Presentación interactiva del Tema 1
│   ├── presentacion-tema2.html Presentación interactiva del Tema 2
│   └── presentacion-tema3.html Presentación interactiva del Tema 3
├── bloque2/
│   ├── index.html              Bloque 2: Aprender, Practicar y Quiz de 3 temas, y plantilla del curso
│   └── guia-tipos-de-datos.html Guía interactiva de tipos de datos en C++ (enlazada desde el Tema 2)
├── bloque3/
│   └── index.html              Bloque 3: lecturas de 4 temas (juez en línea, omegaUp, Codeforces y veredictos)
├── css/
│   └── estilos.css             Paleta, tipografía y diseño responsivo del sitio
├── js/
│   ├── lecturas-bloque1.js     Lecturas de los temas del Bloque 1
│   ├── ejercicios-bloque1.js   Banco de ejercicios y problemario del Bloque 1
│   ├── quiz-conceptual.js      Quizzes del Bloque 1
│   ├── quiz.js                 Motor de práctica del Bloque 1
│   ├── pestanas-bloque1.js     Navegación del Bloque 1 y renderizado matemático con KaTeX
│   ├── lecturas-bloque2.js     Lecturas de los temas del Bloque 2
│   ├── ejercicios-bloque2.js   32 ejercicios del Bloque 2 (10, 12 y 10)
│   ├── quiz-bloque2.js         Quizzes del Bloque 2 (8 preguntas por tema)
│   ├── practica-bloque2.js     Motor de práctica del Bloque 2 (salidas, código, autoevaluación y problemas para CPH)
│   ├── pestanas-bloque2.js     Navegación del Bloque 2
│   ├── lecturas-bloque3.js     Lecturas de los 4 temas del Bloque 3 (43 subtemas)
│   └── pestanas-bloque3.js     Navegación del Bloque 3 y contador de subtemas leídos
└── assets/
    └── docs/                   Presentaciones (PPTX), PDF de ejercicios y plantilla oficial (Plantilla_CP.cpp y versión comentada)
```

## Privacidad y funcionamiento en memoria

- Todo el avance de la práctica y la calificación del quiz se procesan únicamente en la memoria de la página.
- No se guarda información en el navegador ni en ningún servidor.
