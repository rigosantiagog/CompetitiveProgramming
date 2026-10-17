# Programación Competitiva en C++ · Bug Squad

Sitio estático (HTML5, CSS3, Bootstrap 5, Font Awesome y Google Fonts) del curso.
No requiere compilación: Vercel lo publica tal cual.

Diseñado y organizado por Prof. Rigoberto Santiago Garzón.

## Estructura

```
curso-cpp-web/
├── index.html                  Portada, temario y acceso al Bloque 1
├── bloque1/
│   └── index.html              Bloque 1: Aprender, quiz conceptual y ejercicios por tema
├── css/
│   └── estilos.css             Paleta, tipografía y diseño del sitio
├── js/
│   ├── ejercicios-bloque1.js   Banco de 30 ejercicios (respuestas y explicaciones)
│   ├── quiz-conceptual.js      Quiz conceptual por tema (8 preguntas, aprueba con 6)
│   └── quiz.js                 Motor de ejercicios con retroalimentación
└── assets/
    └── docs/                   Presentaciones (PPTX) y PDF de ejercicios para alumnos
```

## Archivos en `assets/docs/`

| Archivo | Uso |
|---|---|
| `Tema2_Aritmetica_conteo_y_casos.pptx` | Presentación del tema 2 (descarga) |
| `Tema3_Geometria_trigonometria_y_patrones.pptx` | Presentación del tema 3 (descarga) |
| `Ejercicios_y_tareas_Bloque1.pdf` | Ejercicios y tareas para alumnos (sin clave) |

La presentación del tema 1 no es un archivo: se abre desde un enlace externo en una ventana dentro de la página (`bloque1/index.html`, atributo `data-src`).

## Subir a GitHub y publicar en Vercel

1. Crea un repositorio nuevo en GitHub (por ejemplo, `curso-cpp-web`).
2. Sube todo el contenido de esta carpeta:
   ```bash
   cd curso-cpp-web
   git init
   git add .
   git commit -m "Bloque 1 del curso"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/curso-cpp-web.git
   git push -u origin main
   ```
3. En [vercel.com](https://vercel.com), elige **Add New → Project**, importa el repositorio y pulsa **Deploy**.
   No hay que configurar nada.

## Notas

- Colores y tipografía están en `css/estilos.css`, en las variables de `:root`.
- Las respuestas de los ejercicios y del quiz están en los archivos de `js/`. Como el sitio es público, se pueden ver en el código fuente de la página.
- Si la presentación del tema 1 no se muestra dentro de la ventana, el botón **Abrir en otra pestaña** del mismo modal la abre en una pestaña nueva.
- En preparación: ejemplos resueltos en C++ y problemas tipo OMI, ICPC e IOI.
