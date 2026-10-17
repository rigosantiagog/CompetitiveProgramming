# Curso de Programación Competitiva en C++

Sitio estático (HTML5, CSS3, Bootstrap 5 y Font Awesome) del curso.
No requiere compilación: Vercel lo publica tal cual.

## Estructura

```
curso-cpp-web/
├── index.html                  Inicio y temario
├── bloque1/
│   ├── index.html              Bloque 1: resumen de clases y recursos
│   └── ejercicios.html         30 ejercicios interactivos con retroalimentación
├── css/
│   └── estilos.css             Paleta y estilos del sitio
├── js/
│   ├── ejercicios-bloque1.js   Banco de ejercicios (respuestas y explicaciones)
│   └── quiz.js                 Motor que califica y muestra la retroalimentación
└── assets/
    └── docs/                   PDF y PPTX del bloque (ver lista abajo)
```

## Archivos que debes colocar en `assets/docs/`

Los enlaces del Bloque 1 apuntan a estos nombres. Ya están incluidos en el zip:

| Nombre en el sitio | Archivo de origen |
|---|---|
| `Clase1_Algebra_y_logica.pptx` | Presentación del tema 1 |
| `Clase2_Aritmetica_conteo_y_casos.pptx` | Presentación del tema 2 |
| `Clase3_Geometria_trigonometria_y_patrones.pptx` | Presentación del tema 3 |
| `Ejercicios_y_tareas_Bloque1.pdf` | PDF de ejercicios de práctica, tareas por tema y clave docente |

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
   No hay que configurar nada: es un sitio estático. Vercel publicará `index.html` como página de inicio.
4. Cada cambio que subas a GitHub se publicará solo.

## Notas

- La paleta está en `css/estilos.css`, en las variables de `:root`. Cambia los colores ahí y se aplican a todo el sitio.
- Las respuestas de los ejercicios están en `js/ejercicios-bloque1.js`. Como es un sitio público, cualquiera puede verlas en el código fuente de la página. Si prefieres que no se vean, dime y lo ajustamos.
- Pendiente en el Bloque 1: ejemplos resueltos en C++ y problemas tipo OMI, ICPC e IOI.
