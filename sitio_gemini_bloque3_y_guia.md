# Actualización del sitio para Gemini · Bloque 3 y guía de tipos de datos

**Sitio:** Programación Competitiva en C++ · Bug Squad
**Versión base:** `curso-cpp-web_2.zip` (la última que se publicó)
**Versión nueva:** el ZIP adjunto (`curso-cpp-web_guia_tipos.zip`), que ya trae todos los cambios hechos y probados
**Fecha:** 7 de noviembre de 2026

---

## 1. Qué te pido

Usa como base el ZIP adjunto. El contenido y la lógica ya están listos y probados. Tu trabajo es revisar que lo nuevo se vea igual que el resto del sitio y ajustar solo el diseño donde haga falta, sin cambiar textos ni contenido.

Este documento tiene tres partes:

1. La lista de cambios respecto a la versión anterior (sección 2).
2. Lo que puedes ajustar y lo que no debes tocar (secciones 3 y 4).
3. El contenido completo del Bloque 3 (Anexo), para que compruebes que en el sitio se ve el mismo texto, completo y en orden.

---

## 2. Cambios respecto a la versión anterior

### 2.1 Archivos nuevos

| Archivo | Qué es |
|---|---|
| `bloque3/index.html` | Página del Bloque 3 · Jueces automatizados y plataformas de entrenamiento. |
| `js/lecturas-bloque3.js` | Lecturas de los 4 temas del Bloque 3 (objeto `LECTURAS_BLOQUE3`, 43 subtemas). |
| `js/pestanas-bloque3.js` | Navegación del Bloque 3, visor de subtemas y contador "Subtemas leídos". |
| `bloque2/guia-tipos-de-datos.html` | Guía interactiva de tipos de datos en C++ (página independiente). |

### 2.2 Archivos modificados

| Archivo | Cambio |
|---|---|
| `index.html` (portada) | "Bloque 3" en el menú superior. La tarjeta del Bloque 3 pasó de "Próximamente" a "Disponible", con descripción nueva y enlace "Entrar al bloque". En "Cómo estudiar con este sitio" se agregó el punto: "El Bloque 3 es solo de lectura: lee cada tema en Aprender y haz los pasos directamente en omegaUp y Codeforces." |
| `bloque1/index.html` | Solo se agregó "Bloque 3" al menú superior. |
| `bloque2/index.html` | "Bloque 3" en el menú superior y, al final de la lectura del **Tema 2 · Variables, tipos y operadores**, el botón "Abrir la guía interactiva de tipos de datos", que abre `guia-tipos-de-datos.html` en otra pestaña. |
| `README.md` | Estructura de carpetas con los archivos nuevos. |

Ningún otro archivo cambió: CSS, imágenes, favicon, PDF, PPTX, presentaciones, ejercicios y quizzes de los Bloques 1 y 2 están igual que en la versión anterior.

### 2.3 Cómo funciona el Bloque 3

- Cuatro temas: 1 · ¿Qué es un juez automatizado? (9 subtemas), 2 · omegaUp (11), 3 · Codeforces (12) y 4 · Veredictos y errores al enviar (11).
- **Es solo de lectura.** Cada tema tiene únicamente la pestaña **Aprender**, sin Practicar ni Quiz. Es una decisión del profesor; no agregues esas pestañas.
- Funciona igual que el Bloque 2: tarjetas de subtemas, visor de lectura con "Subtema anterior / Ver tarjetas / Siguiente subtema" y casilla "Marcar como leída".
- La barra lateral tiene el índice de los 4 temas y un contador "Subtemas leídos" (0 de 43) con barra de progreso.
- Al final de las lecturas hay botones de recursos: Tema 2 → omegaUp; Tema 3 → Codeforces y el problema 4A; Tema 4 → la plantilla del curso y la descarga de `Plantilla_CP.cpp`.
- La página carga KaTeX para las fórmulas como $10^8$.
- Igual que en el resto del sitio, el avance no se guarda en el navegador.

### 2.4 La guía de tipos de datos

- Es un recurso independiente con diseño propio (Tailwind e íconos Phosphor): 5 pestañas (lenguaje binario, tipos y capacidades, selector de cotas, laboratorio de desbordamiento y tabla de referencia).
- Se abre desde el Tema 2 del Bloque 2 en una pestaña nueva.
- **No la integres al diseño del sitio ni le cambies el estilo.** El profesor la quiere tal como está.

---

## 3. Lo que sí puedes ajustar

- Que la página del Bloque 3 se vea consistente con la del Bloque 2: banner, chips de temas, barra lateral, tarjetas de subtemas y visor.
- La barra de pestañas con un solo botón (Aprender), si se ve rara. Ajusta solo su estilo en el Bloque 3, sin quitarla.
- Los bloques de código largos del Tema 4 (llevan un comentario en cada línea): deben desplazarse en horizontal dentro de su recuadro en celular, sin desbordar la página.
- Las tablas de las lecturas en celular (vienen dentro de `.table-responsive`).
- El estilo del botón nuevo del Tema 2 del Bloque 2, si no combina con el resto.
- Si agregas CSS, ponlo en `css/estilos.css`, usa las clases y variables que ya existen y limita los cambios a lo necesario.

## 4. Lo que no debes cambiar

- Los textos, títulos, tablas y código C++ de las lecturas del Bloque 3 (deben coincidir con el Anexo).
- La estructura de `js/lecturas-bloque3.js` ni la lógica de `js/pestanas-bloque3.js`.
- El contenido de `bloque2/guia-tipos-de-datos.html`.
- El contenido de los Bloques 1 y 2: lecturas, ejercicios, quizzes, presentaciones, PDF y PPTX.
- El favicon (`favicon.ico` y `assets/img/`) y el logo de la barra de navegación.
- La paleta de colores, las tipografías (Inter y JetBrains Mono) y el diseño general.
- El orden de los bloques: 1 Lógica y pensamiento matemático, 2 Primeros pasos en C++, 3 Jueces automatizados, 4 Ciclos y simulación, 5 Cadenas de texto, 6 Arreglos y ordenamiento, 7 Problemas constructivos, 8 Comunicación e interactivos.
- **NotebookLM:** el sitio no tiene nada del chatbot de NotebookLM. No lo agregues; el profesor avisará cuando regrese.

---

## 5. Al terminar

Regrésame el ZIP completo con la misma estructura de carpetas, listo para Vercel, y confirma estos puntos:

- (a) La portada muestra los Bloques 1, 2 y 3 como "Disponible" y del 4 al 8 como "Próximamente".
- (b) El menú superior tiene Inicio, Bloque 1, Bloque 2 y Bloque 3 en todas las páginas, y el bloque actual aparece marcado.
- (c) En el Bloque 3, los 4 temas abren sus tarjetas, el visor muestra cada subtema completo, "Marcar como leída" actualiza el contador de la barra lateral y las fórmulas se ven con KaTeX.
- (d) En celular (390 px de ancho), el Bloque 3 no se desborda a lo ancho y el código del Tema 4 se desplaza dentro de su recuadro.
- (e) En el Bloque 2, el botón del Tema 2 abre la guía de tipos de datos en otra pestaña y la guía funciona: sus 5 pestañas cambian y los controles responden.
- (f) No hay nada de NotebookLM en el sitio.

Además, enumera los archivos que modificaste y qué cambiaste en cada uno. Si tuviste que tocar algo fuera de lo indicado, dime qué y por qué.

---

# ANEXO · Contenido del Bloque 3 (referencia)

Este es el texto que el alumno debe ver en la pestaña Aprender de cada tema. Ya está dentro de `js/lecturas-bloque3.js`; no lo vuelvas a capturar. Úsalo solo para comprobar que no falte ni cambie nada. Las notas para el docente no aparecen en el sitio a propósito.

### Tema 1 · ¿Qué es un juez automatizado?

En los bloques 1 y 2 probabas tus programas a mano: abrías VS Code o Code::Blocks, ejecutabas, escribías un par de números con el teclado y revisabas con tus ojos si el resultado estaba bien. En una competencia nadie hace eso por ti. Tu código lo revisa un programa llamado **juez en línea** (o juez automatizado), y entender cómo trabaja te ahorra muchos corajes, sobre todo el clásico "en mi computadora sí funcionaba".

---

#### 1.1 Qué es un juez en línea y para qué sirve

Imagina que tu maestro aplica un examen y, en lugar de calificarlo él, mete las hojas en una máquina. La máquina tiene una hoja de respuestas que tú nunca ves. No lee tu procedimiento ni le importa si "ibas bien"; solo compara tu resultado con el de la hoja. Si coincide exacto, palomita. Si te falta un número o pusiste algo que no te pidieron, tache.

Un juez en línea funciona igual. Es un sistema que recibe tu código fuente, lo compila en sus servidores, lo ejecuta con datos de prueba que no conoces y compara lo que imprime tu programa con la respuesta correcta. También mide cuánto tiempo y cuánta memoria usó tu programa.

> **Ojo.** El juez no califica la idea ni lo bonito del código. Si tu algoritmo está "casi bien" pero imprime un número distinto en un solo caso, para el juez está mal.

---

#### 1.2 Qué pasa desde que envías tu código

Piensa en una fábrica de juguetes con cuatro estaciones:

1. **Revisión de piezas.** Una máquina checa que las piezas encajen según las instrucciones. Si una está rota, se detiene todo. Esto es la **compilación**.
2. **Cuarto de pruebas.** El juguete pasa a un cuarto cerrado donde lo prueban con situaciones que tú no ves. Son los **casos de prueba ocultos**.
3. **Comparación.** Se revisa si el juguete hizo exactamente lo que dice el molde.
4. **Etiqueta.** Al final le pegan una etiqueta: aprobado o el motivo por el que falló. Esa etiqueta es el **veredicto**.

En términos formales: el juez compila tu código; si compila, lo ejecuta en un entorno aislado (*sandbox*) con cada caso de prueba, guarda lo que imprime, lo compara con la salida esperada y emite un veredicto.

Este es el tipo de programa que el juez espera. Lee dos enteros y muestra su suma:

```cpp
#include <bits/stdc++.h>                                                    // Incluye todas las bibliotecas estándar de C++
#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL) // Macro que acelera la lectura y la escritura
using namespace std;                                                        // Permite escribir cin y cout sin el prefijo std::

int main(){                     // Aquí empieza la ejecución del programa
    FastIO;                     // Activa la entrada y salida rápida
    int a, b;                   // Dos variables enteras para los datos de entrada
    cin >> a >> b;              // Lee los dos números que manda el juez
    cout << a + b << "\n";      // Imprime solo la suma y un salto de línea
    return 0;                   // Le avisa al sistema que el programa terminó sin errores
}                               // Fin de main
```

> **Ojo.** No es lo mismo un error de compilación que una respuesta incorrecta. El error de compilación (CE) pasa antes de probar cualquier dato, porque el código rompe las reglas de C++. La respuesta incorrecta (WA) o el error de ejecución (RE) pasan después: el código sí compiló, pero falló con los datos.

---

#### 1.3 Entrada y salida estándar

Imagina que hablas con un robot a través de una rendija debajo de la puerta. Tú le pasas hojitas con números y él te regresa hojitas con respuestas. El robot no saluda ni entiende frases como "Hola, el resultado es 5". Si en tu hojita escribes algo extra, el robot la marca como incorrecta.

Así se comunica tu programa con el juez. El juez "teclea" los datos por ti a través de la **entrada estándar** (lo que lee `cin`) y lee lo que tu programa escribe en la **salida estándar** (lo que imprime `cout`). Después compara tu salida con la respuesta correcta, carácter por carácter. Cualquier texto que no se pidió hace que tu respuesta no coincida.

**Versión incorrecta**, como la hacíamos al probar a mano:

```cpp
#include <bits/stdc++.h>                                                    // Incluye todas las bibliotecas estándar
#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL) // Macro de entrada y salida rápida
using namespace std;                                                        // Evita escribir std:: en cada instrucción

int main(){                                         // Inicio del programa
    FastIO;                                         // Activa la entrada y salida rápida
    int num1, num2;                                 // Variables para los dos números
    cout << "Ingresa el primer numero: ";           // MAL: el juez no espera este texto en la salida
    cin >> num1;                                    // Lee el primer número
    cout << "Ingresa el segundo numero: ";          // MAL: otro texto que no se pidió
    cin >> num2;                                    // Lee el segundo número
    cout << "La suma es: " << num1 + num2 << "\n";  // MAL: la salida debe ser solo el número
    return 0;                                       // Fin sin errores
}                                                   // Fin de main
```

Si el juez manda `3 4`, este programa imprime `Ingresa el primer numero: Ingresa el segundo numero: La suma es: 7`, y el juez esperaba solo `7`. Veredicto: **Wrong Answer**.

**Versión correcta**, como la espera el juez:

```cpp
#include <bits/stdc++.h>                                                    // Incluye todas las bibliotecas estándar
#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL) // Macro de entrada y salida rápida
using namespace std;                                                        // Evita escribir std:: en cada instrucción

int main(){                         // Inicio del programa
    FastIO;                         // Activa la entrada y salida rápida
    int num1, num2;                 // Variables para los dos números
    cin >> num1 >> num2;            // Lee los dos números sin mensajes previos
    cout << num1 + num2 << "\n";    // Imprime únicamente el resultado
    return 0;                       // Fin sin errores
}                                   // Fin de main
```

> **Ojo.** Nada de "Dame un número:" ni "El resultado es:". Respeta también los espacios y los saltos de línea que pide el enunciado. Usa `"\n"` en lugar de `endl`: cuando imprimes miles de líneas, `endl` hace más lento el programa porque obliga a vaciar el búfer de salida cada vez.

---

#### 1.4 Límite de tiempo y de memoria

Imagina un concurso de rompecabezas con dos reglas: tienes 60 segundos y solo puedes usar una mesa del tamaño de tu cuaderno. Si tardas más, suena la alarma y quedas fuera. Si las piezas no te caben en la mesa y las pones en el piso, también quedas fuera.

El **límite de tiempo** es lo máximo que puede tardar tu programa en cada caso de prueba, casi siempre entre 1 y 2 segundos. Como regla práctica, en C++ caben alrededor de $10^8$ operaciones sencillas por segundo. El **límite de memoria** es la RAM máxima que puede usar tu programa; un valor común es 256 MB.

Cuando un enunciado dice "1 segundo, 256 MB", ya sabes que si tu idea necesita $10^{10}$ operaciones no va a pasar, aunque dé la respuesta correcta.

> **Ojo.** Un ciclo que nunca termina o que da demasiadas vueltas provoca **Time Limit Exceeded** (TLE). Guardar demasiados datos provoca **Memory Limit Exceeded** (MLE). Antes de programar, revisa los límites y haz la cuenta de cuántas operaciones va a hacer tu idea.

---

#### 1.5 Partes de un enunciado

Leer un problema se parece a leer la tarjeta de instrucciones de un juego de mesa: primero viene la historia, luego qué fichas recibes y cuál es la meta, después cuántas fichas puede haber como máximo y al final una jugada de ejemplo.

Un enunciado de programación competitiva casi siempre tiene estas partes:

| Parte | Qué te dice |
|---|---|
| **Descripción (historia)** | La situación del problema y qué hay que calcular. Muchas veces la historia es solo decoración. |
| **Entrada** | Qué datos recibe tu programa, de qué tipo son y en qué orden llegan. |
| **Salida** | Qué debes imprimir y en qué formato: espacios, saltos de línea, decimales. |
| **Límites** | Los valores mínimos y máximos de cada dato (por ejemplo, $1 \le N \le 10^5$), además del tiempo y la memoria. |
| **Ejemplos** | Una o más entradas con su salida correcta. Sirven para comprobar que entendiste el formato. |
| **Subtareas** | Solo en algunos concursos. Dividen los puntos en bloques con límites más pequeños, para que puedas sumar puntos aunque tu solución no sea la más rápida. |

> **Ojo.** Saltarse los límites es de los errores más comunes. Si un dato puede valer más de $2 \times 10^9$, un `int` ya no alcanza y necesitas `long long`.

---

#### 1.6 Formatos de competencia: OMI, ICPC e IOI

Piensa en un videojuego con dos modos. En el **modo individual** (OMI e IOI) juegas solo, y si superas una parte difícil del nivel aunque no lo termines, te dan puntos. En el **modo por equipos** (ICPC) juegan tres personas con una sola computadora, y cada problema es todo o nada: o pasa todos los casos o vale cero, y cada intento fallido te suma minutos de castigo si al final lo resuelves.

| Característica | OMI | ICPC | IOI |
|---|---|---|---|
| Quién participa | Estudiantes de secundaria y preparatoria (la OMIPS es para primaria y secundaria) | Estudiantes universitarios | Estudiantes de preparatoria seleccionados por cada país |
| Modalidad | Individual | Equipos de 3 con una computadora | Individual |
| Puntuación | Puntos parciales por subtareas | Todo o nada por problema | Puntos parciales por subtareas |
| Penalización por tiempo | No | Sí: minutos desde el inicio hasta el acierto, más 20 minutos por cada envío rechazado en un problema que al final resuelves | No |
| Tabla de posiciones | Depende de la etapa | Se congela en la última hora | Depende de la organización |

> **Ojo.** No todos los concursos dan puntos parciales. En la OMI y la IOI conviene mandar una solución que resuelva las subtareas pequeñas. En el ICPC una solución que falla en 1 de 100 casos vale cero y además te cuesta 20 minutos.

---

#### 1.7 Jueces y plataformas de entrenamiento

Las plataformas son como gimnasios distintos. Uno está pensado para principiantes y te atienden en español (omegaUp). Otro es un estadio internacional con torneos cada semana (Codeforces). Otro es un cuaderno de ejercicios bien ordenado, de lo más fácil a lo más difícil (CSES).

| Plataforma | Para qué sirve | Dificultad | Idioma | Cómo la usaremos |
|---|---|---|---|---|
| **omegaUp** | Entrenamiento para la OMI y concursos en México y Latinoamérica | Desde muy básica | Español (también inglés y portugués) | Para empezar, dominar la entrada y salida y acostumbrarte al formato OMI |
| **Codeforces** | Rondas cortas casi cada semana y rating mundial | De básica a muy alta | Inglés y ruso | Para ganar velocidad, leer en inglés y competir en vivo |
| **CSES** | Lista fija de problemas clásicos ordenados por tema | Progresiva | Inglés | Para practicar un tema específico |
| **AtCoder** | Concursos con problemas muy cuidados y mucha matemática | Bien graduada | Japonés e inglés | Para practicar razonamiento lógico y matemático |

> **Ojo.** Meterse a rondas de Codeforces sin dominar la entrada y salida y la lógica básica frustra mucho. Primero omegaUp y CSES, después Codeforces.

---

#### Resumen del tema

1. Un juez en línea compila tu código, lo ejecuta con casos ocultos y compara tu salida con la correcta, sin importarle tu intención.
2. Un envío pasa por compilación, ejecución, comparación y veredicto.
3. Tu programa solo se comunica por `cin` y `cout`. Cualquier texto extra provoca un WA.
4. Antes de programar, revisa el límite de tiempo (cerca de $10^8$ operaciones por segundo) y el de memoria.
5. La OMI y la IOI dan puntos parciales; el ICPC es todo o nada y castiga los envíos fallidos.

---

### Tema 2 · omegaUp

---

#### 2.1 Qué es omegaUp

omegaUp es un juez en línea mexicano, gratuito y en español. Ahí se publican problemas, cursos y concursos de programación, y es la plataforma donde se aplican muchas etapas de la **OMI** (Olimpiada Mexicana de Informática) y de la **OMIPS** (la versión para primaria y secundaria).

Empezamos aquí por tres razones. La primera es el idioma: puedes concentrarte en la lógica sin pelearte con el inglés. La segunda es el formato: muchos problemas están escritos como los de la OMI, con subtareas y puntos parciales, y en el detalle de cada envío ves cuánto sacaste en cada parte. La tercera es que aquí aprendes la mecánica del juez (formato de entrada y salida, límites, veredictos) en un ambiente conocido, antes de pasar a Codeforces.

---

#### 2.2 Crear la cuenta

1. Entra a **omegaup.com**.
2. En la esquina superior derecha busca la opción para iniciar sesión o registrarte.
3. Elige cómo crear la cuenta:
   - con tu **cuenta de Google**, en un solo clic, o
   - con el **formulario**: nombre de usuario, correo y contraseña.
4. Si usaste el formulario, abre tu correo y da clic en el enlace de confirmación para activar la cuenta.

El nombre de usuario lo van a ver entrenadores, jueces y los comités de la OMI cuando revisen avances y listas de clasificados. Elige uno serio y fácil de reconocer, por ejemplo tu nombre y apellido (`rigo_santiago`), no un apodo como `xXdestructorXx`.

> **Ojo.** Usa un correo que revises seguido. Ahí te llegan la confirmación de la cuenta, las invitaciones a cursos y la recuperación de contraseña.

---

#### 2.3 Completar el perfil

Ya con la cuenta activa, abre el menú con tu nombre de usuario (arriba a la derecha) y entra a la opción para editar tu perfil. Llena estos datos:

| Campo | Para qué sirve |
|---|---|
| **Nombre completo** | Aparece en diplomas y constancias de concursos. |
| **País y estado** | Te coloca en los rankings de tu país y de tu estado. |
| **Escuela** | Te liga a tu preparatoria y suma tus puntos al ranking por escuelas. |

Con estos datos las delegaciones estatales de la OMI pueden ver cómo va cada alumno y cada escuela.

> **Ojo.** Comparte solo lo necesario. No pongas teléfono, dirección ni otros datos personales en la descripción pública de tu perfil.

---

#### 2.4 Recorrido por la página

En la barra superior de omegaUp vas a encontrar estas secciones:

| Sección | Qué hay ahí |
|---|---|
| **Problemas** | El catálogo completo de problemas para practicar por tu cuenta. |
| **Cursos** | Aulas virtuales que arman entrenadores y escuelas, con problemas en orden, lecturas y fechas de entrega. Aquí estará el curso del club. |
| **Concursos** | Concursos actuales, próximos y pasados, incluidos los de la OMI y la OMIPS. |
| **Rankings** | Tablas de posiciones de usuarios y de escuelas, según los puntos acumulados. |

Cuando entras a un concurso o a un curso, la pantalla cambia a la **arena**: ves la lista de problemas, el enunciado, tus envíos, el reloj y la tabla de posiciones, todo en un solo lugar.

> **Ojo.** No confundas practicar un problema desde **Problemas** con resolverlo dentro de un **curso**. Si tu entrenador te pide resolverlo en el curso, envíalo desde ahí; si lo resuelves en otro lado, no se registra en el avance del curso.

---

#### 2.5 Buscar problemas

Elegir problemas demasiado difíciles al principio desanima, y quedarse siempre en los fáciles no te hace avanzar. La sección **Problemas** tiene filtros para encontrar los de tu nivel:

- **Dificultad:** de principiante a avanzado.
- **Etiquetas:** temas como matemáticas, condicionales, ciclos, arreglos o grafos.

Para empezar, busca problemas de dificultad baja con temas que ya viste en el Bloque 2: entrada y salida, operaciones aritméticas, condicionales y ciclos.

> **Ojo.** Si un problema te tiene atorado más de una hora y ya probaste varias ideas, déjalo marcado y pasa a otro. Regresa cuando hayas visto el tema que te falta.

---

#### 2.6 Leer un problema en omegaUp

La página de un problema tiene estas partes:

- **Límites de tiempo y memoria**, en la parte de arriba (por ejemplo, 1 s y 32 MB).
- **Descripción** con la historia.
- **Entrada y salida**, con el formato exacto y los rangos de cada dato.
- **Ejemplos** de entrada y su salida correcta.
- **Puntaje** del problema, casi siempre sobre 100 puntos.

Los ejemplos solo te confirman que entendiste el formato. Los casos ocultos incluyen valores muy grandes, muy chicos y casos raros que los ejemplos no muestran. Decide el tipo de dato con los límites del enunciado y no supongas nada que no esté escrito.

> **Ojo.** Recuerda la regla del tema 1: en 1 segundo caben unas $10^8$ operaciones. Si los límites dicen $N \le 10^6$ y tu idea hace $N^2$ operaciones, no va a pasar.

---

#### 2.7 Enviar una solución

1. Abre el problema y busca el botón para **enviar una solución**.
2. En la lista de **lenguajes**, elige C++ con la versión más reciente de g++ que aparezca.
3. Pega tu código en el editor o sube tu archivo `.cpp`.
4. Da clic en el botón para enviar.

Después del envío aparece una fila nueva en tus envíos. Primero dirá que está en espera o compilando, y unos segundos después mostrará el veredicto y los puntos.

**Antes de enviar**

| Revisa | Por qué |
|---|---|
| No hay mensajes como "Ingresa un número" | El juez compara tu salida exacta; un texto extra es WA. |
| El tipo de dato alcanza para los límites | Si un valor puede pasar de $2 \times 10^9$, usa `long long`. |
| Está tu plantilla completa | Con `bits/stdc++.h` y `FastIO` no te falta ninguna biblioteca y la lectura es rápida. |
| El formato de salida es idéntico | Espacios, saltos de línea, mayúsculas y decimales como lo pide el enunciado. |
| El lenguaje elegido es C++ | Si mandas código de C++ con otro lenguaje seleccionado, recibes un error de compilación. |

---

#### 2.8 Historial de envíos

Cada problema tiene una lista de tus envíos anteriores. Cada fila muestra la hora, el lenguaje, el tiempo y la memoria que usó tu programa, el veredicto y los puntos. Si das clic en un envío ves el detalle por caso o por grupo de casos.

Hay dos formas de repartir los puntos:

- **Por caso:** cada caso que pasas te da una parte de los 100 puntos.
- **Por subtareas:** los casos se agrupan en bloques, cada uno con límites distintos. Para ganar los puntos de una subtarea tienes que pasar **todos** sus casos; si fallas uno, esa subtarea vale cero.

Los veredictos más comunes son estos (en el tema 4 los vemos a fondo):

| Veredicto | Qué significa |
|---|---|
| **AC** (Accepted) | Pasaste todos los casos: 100 puntos. |
| **PA** (Partially Accepted) | Pasaste solo algunos casos o subtareas: entre 1 y 99 puntos. |
| **WA** (Wrong Answer) | Tu programa imprimió algo distinto a lo esperado. |
| **TLE** (Time Limit Exceeded) | Tu programa se pasó del tiempo. |
| **MLE** (Memory Limit Exceeded) | Tu programa usó más memoria de la permitida. |
| **RTE** (Runtime Error) | Tu programa se detuvo con un error mientras corría. |
| **CE** (Compilation Error) | Tu código no compiló. |

> **Ojo.** Mirar en qué grupo falló tu programa te dice mucho. Si pasas las subtareas pequeñas y fallas en la grande con TLE, tu idea es correcta pero lenta.

---

#### 2.9 Cursos y concursos

Para entrar a un curso o concurso hay dos caminos:

- **Enlace directo:** el entrenador te comparte una liga; la abres con tu sesión iniciada y entras.
- **Código de acceso:** buscas el curso o concurso en su sección y escribes el código que te dieron los organizadores.

Dentro de un concurso tienes tres herramientas:

1. **Reloj:** cuánto tiempo le queda al concurso. Úsalo para decidir cuánto le dedicas a cada problema.
2. **Tabla de posiciones (scoreboard):** los puntos de cada participante en vivo.
3. **Clarificaciones:** un canal para preguntarle a los jueces cuando un enunciado no se entiende. Responden "sí", "no" o "lee el enunciado" en la mayoría de los casos; no te van a decir cómo resolverlo.

---

#### 2.10 Tu primer envío completo

Vamos a resolver de principio a fin un problema clásico.

**Problema: Suma de dos números.** Lee dos enteros $A$ y $B$ y muestra su suma.

- Límite de tiempo: 1 s
- Límite de memoria: 32 MB
- Límites: $-10^8 \le A, B \le 10^8$

| Entrada de ejemplo | Salida esperada |
|---|---|
| `7 15` | `22` |

**¿Alcanza un `int`?** La suma más grande posible es $2 \times 10^8$ y la más chica $-2 \times 10^8$. Un `int` llega hasta $2^{31} - 1 = 2\,147\,483\,647$, así que sí alcanza. Si los datos pudieran llegar a $10^{10}$, tendríamos que usar `long long`.

```cpp
#include <bits/stdc++.h>                                                    // Incluye todas las bibliotecas estándar de C++
#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL) // Macro que acelera la lectura y la escritura
using namespace std;                                                        // Permite usar cin y cout sin std::

int main(){                 // Aquí empieza el programa
    FastIO;                 // Activa la entrada y salida rápida
    int a, b;               // Dos enteros; alcanzan porque los datos no pasan de 10^8
    cin >> a >> b;          // Lee A y B en el orden en que llegan
    int suma = a + b;       // Calcula la suma; el resultado cabe en un int
    cout << suma << "\n";   // Imprime solo la suma y un salto de línea
    return 0;               // Termina sin errores
}                           // Fin de main
```

Pruébalo primero en CPH con el ejemplo `7 15` y confirma que sale `22`. Luego entra al problema en omegaUp, elige C++, pega el código y envíalo. Unos segundos después tu envío debe aparecer con veredicto **AC** y **100 puntos**, junto con el tiempo y la memoria que usó.

**Antes de enviar este problema**

| Revisa | En este problema |
|---|---|
| Salida limpia | Solo se imprime el número, sin "La suma es:". |
| Tipo de dato | `int` alcanza porque la suma no pasa de $2 \times 10^8$. |
| Orden de lectura | `cin >> a >> b;` lee los datos en el orden del enunciado. |
| Fin de línea | El `"\n"` final no estorba; el juez acepta el salto de línea al final. |
| Lenguaje | C++ seleccionado en la lista antes de enviar. |

---

#### Resumen del tema

1. omegaUp es mexicano, gratuito, en español, y ahí se aplican etapas de la OMI y la OMIPS.
2. Crea tu cuenta con un nombre de usuario serio y completa país, estado y escuela.
3. Usa los filtros de dificultad y etiquetas para elegir problemas de tu nivel.
4. Para enviar: elige C++, pega o sube tu código y revisa el veredicto en tu historial.
5. En los problemas con subtareas, cada bloque se gana completo o no se gana.

---

### Tema 3 · Codeforces

---

#### 3.1 Qué es Codeforces y cuándo usarlo

Codeforces es una plataforma internacional con un catálogo enorme de problemas y concursos en vivo, llamados **rondas**, casi cada semana. Compiten miles de personas de todo el mundo al mismo tiempo, y todo está en inglés (también en ruso).

Si omegaUp es el gimnasio de tu colonia, Codeforces es el estadio. En omegaUp (tema 2) aprendes la mecánica en español y con problemas al estilo OMI. En Codeforces practicas leer en inglés, resolver rápido y medirte contra otros. Lo vamos a usar cuando ya domines la entrada y salida y los problemas sencillos de omegaUp.

---

#### 3.2 Crear la cuenta

1. Entra a **codeforces.com**.
2. Arriba a la derecha da clic en **Register** (Registrarse).
3. Llena el formulario:
   - **Handle** (nombre de usuario): tu nombre público en el sitio.
   - **Email** (correo).
   - **Password** y **Confirm Password** (contraseña y confirmación).
4. Da clic en **Register** al final del formulario.
5. Abre tu correo y da clic en el enlace de confirmación para activar la cuenta.

En Codeforces tu handle aparece en tu perfil, en cada envío y en las tablas de todas las rondas. Cambiarlo es difícil: el sitio solo lo permite en ocasiones especiales, como en temporada de Año Nuevo. Elígelo bien desde el principio, igual que en omegaUp.

---

#### 3.3 El perfil y el idioma

A veces la página aparece en ruso la primera vez. En la esquina superior derecha hay dos banderitas; da clic en la de inglés y todos los menús cambian.

En tu perfil vas a ver:

- **Rating:** un número que mide tu nivel según tus resultados en rondas oficiales. Sube o baja después de cada ronda.
- **Submissions** (envíos): la lista de todo lo que has enviado, con su veredicto, el tiempo en milisegundos y la memoria en kilobytes.
- **Gráfica de rating:** cómo ha cambiado tu rating de ronda en ronda.

> **Ojo.** Al principio tu perfil estará casi vacío y sin rating. El rating aparece hasta que participas en tu primera ronda oficial.

---

#### 3.4 El Problemset

En el menú superior, **Problemset** abre el catálogo de problemas. Cada problema tiene un nombre como **4A**: el número es el de la ronda donde salió y la letra indica su lugar dentro de esa ronda. La A suele ser la más fácil, la B un poco más difícil, y así sucesivamente.

Hay dos filtros que te sirven:

- **Dificultad (rating del problema):** va en múltiplos de 100 y empieza en 800. Entre más alto, más difícil.
- **Etiquetas (tags):** el tema del problema, por ejemplo `implementation` (implementación), `math` (matemáticas), `brute force` (fuerza bruta) o `sortings` (ordenamiento).

Para empezar, quédate entre **800 y 1000** de dificultad. Ahí la mayoría de los problemas se resuelven con condicionales, ciclos y buena lectura del enunciado.

> **Ojo.** Ver las etiquetas antes de resolver te da una pista de cómo hacerlo. Si un problema dice `math`, ya no tienes que descubrir que la clave es matemática. Cuando practiques en serio, oculta las etiquetas en la configuración del Problemset y adivina tú el tema.

---

#### 3.5 Leer un enunciado en inglés

Los enunciados de Codeforces repiten mucho el mismo vocabulario. Con estas palabras ya entiendes la mayor parte:

| En inglés | Qué significa |
|---|---|
| input | entrada: qué datos recibe tu programa y en qué orden |
| output | salida: qué debes imprimir y en qué formato |
| test case | caso de prueba |
| integer | número entero |
| print / output | imprime |
| separated by spaces | separados por espacios |
| it is guaranteed that... | se garantiza que... (una condición que los datos siempre cumplen) |
| the first line contains... | la primera línea contiene... |
| if there are multiple answers, print any | si hay varias respuestas, imprime cualquiera |

Puedes usar un traductor para entender la historia, pero ten cuidado con la parte de salida. Si el problema pide imprimir `YES` o `NO`, el traductor te lo puede cambiar a "Sí" o "No", y entonces tu programa imprime otra cosa y recibes WA aunque la lógica esté bien. Copia los textos de salida directamente del enunciado en inglés.

También revisa los límites escritos en notación matemática, como $10^9$ o $10^{18}$. Ahí decides si basta un `int` o si necesitas `long long`.

---

#### 3.6 Enviar una solución

1. Dentro del problema, da clic en **Submit** (Enviar), que está en el menú del problema o en el recuadro de la derecha.
2. En **Language** (lenguaje), elige la versión más reciente de **GNU G++** de 64 bits que aparezca (por ejemplo, G++20 o G++23).
3. Pega tu código en el cuadro o usa **Choose file** (Elegir archivo) para subir tu `.cpp`.
4. Da clic en **Submit**.
5. La página te lleva a **My Submissions** (Mis envíos). Ahí verás el veredicto cuando termine de evaluarse. En **Status** (Estado) aparecen los envíos de todos los usuarios.

> **Ojo.** En la lista de lenguajes hay muchos parecidos (C, C++, versiones viejas de G++, Clang). Si eliges C en lugar de C++, tu código no compila.

---

#### 3.7 Problemas con varios casos de prueba

Muchos problemas de Codeforces empiezan así: *"The first line contains an integer t, the number of test cases"*. Eso significa que la primera línea trae un número $t$, y después vienen $t$ casos que tu programa debe resolver uno tras otro en la misma ejecución.

La forma más común de leerlos es con `while (t--)`. Este ejemplo lee $t$ casos, cada uno con dos números, e imprime su suma:

```cpp
#include <bits/stdc++.h>                                                    // Incluye todas las bibliotecas estándar de C++
#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL) // Macro de entrada y salida rápida
using namespace std;                                                        // Permite usar cin y cout sin std::

int main(){                     // Aquí empieza el programa
    FastIO;                     // Activa la entrada y salida rápida; importa cuando hay miles de casos
    int t;                      // Cantidad de casos de prueba
    cin >> t;                   // Lee t de la primera línea
    while (t--) {               // Repite el bloque t veces; t baja en 1 en cada vuelta
        long long a, b;         // Variables del caso actual; se crean de nuevo en cada vuelta
        cin >> a >> b;          // Lee los datos de este caso
        cout << a + b << "\n";  // Imprime la respuesta de este caso en su propia línea
    }                           // Fin del ciclo de casos
    return 0;                   // Termina sin errores
}                               // Fin de main
```

Con la entrada

```
3
1 2
10 20
-5 5
```

el programa imprime

```
3
30
0
```

> **Ojo.** Si usas una variable que acumula (un contador o una suma), declárala o ponla en cero **dentro** del ciclo. Si la dejas afuera, el segundo caso empieza con lo que sobró del primero y tu respuesta sale mal desde el caso 2.

---

#### 3.8 Las rondas

Las rondas aparecen en la pestaña **Contests** (Concursos). Para participar, da clic en **Register** en la ronda que te interese; el registro abre desde horas o días antes del inicio.

| Tipo de ronda | Para quién |
|---|---|
| **Div. 4** | Principiantes. Es la mejor para empezar. |
| **Div. 3** | Principiantes con algo de experiencia. |
| **Div. 2** | Nivel intermedio. |
| **Div. 1** | Los competidores más fuertes. |
| **Educational Round** | Problemas pensados para practicar técnicas clásicas; similares a Div. 2. |

Una ronda dura casi siempre entre 2 y 2 horas y media. Durante la ronda, tus envíos se prueban solo con unos casos iniciales llamados **pretests**. Si los pasas, ves el veredicto *Pretests passed*. Al terminar la ronda se corren los **system tests**, con todos los casos, y hasta entonces sabes si tu solución es *Accepted*. Pasar los pretests no garantiza nada, por eso conviene probar casos extremos antes de enviar.

En algunas rondas existen los **hacks**: puedes ver el código de otros participantes y, si encuentras un caso que lo haga fallar, mandarlo para "hackearlo" y ganar puntos. Al principio no te preocupes por esto.

---

#### 3.9 Rating y colores

El rating se calcula con un sistema parecido al del ajedrez: si te va mejor de lo que se esperaba para tu nivel, sube; si te va peor, baja. Cada rango tiene un nombre y un color que se ve en tu handle:

| Rating | Título | Color |
|---|---|---|
| menos de 1200 | Newbie | gris |
| 1200 a 1399 | Pupil | verde |
| 1400 a 1599 | Specialist | cian |
| 1600 a 1899 | Expert | azul |
| 1900 a 2099 | Candidate Master | morado |
| 2100 a 2399 | Master e International Master | naranja |
| 2400 o más | Grandmaster y superiores | rojo |

No te obsesiones con el rating al principio. Todos bajan alguna vez. Lo que de verdad cuenta es cuántos problemas nuevos aprendes a resolver y qué tan bien entiendes tus errores.

---

#### 3.10 Otras herramientas útiles

- **Virtual participation** (participación virtual): te deja hacer una ronda pasada como si fuera en vivo, con reloj y tabla de posiciones de ese día, sin afectar tu rating. Es la mejor forma de simular un concurso.
- **Gym:** colección de concursos de universidades, selectivos de ICPC y otras competencias. Sirve para entrenar en equipo o practicar temas más avanzados.
- **Soluciones de otros:** cuando termina una ronda, puedes ver el código de los demás participantes. Si un problema te costó trabajo, revisa cómo lo resolvió alguien con más rating. Vas a encontrar formas más cortas y limpias de escribir lo mismo.

---

#### 3.11 Tu primer envío en Codeforces: 4A "Watermelon"

Este es el problema con el que casi todos empiezan en Codeforces.

**De qué trata.** Dos amigos compraron una sandía que pesa $w$ kilos y quieren partirla en dos pedazos. Los dos son fanáticos de los números pares, así que cada pedazo debe pesar un número par de kilos (mayor que cero). Los pedazos no tienen que pesar lo mismo. Hay que decir si se puede.

- **Entrada:** un entero $w$ con $1 \le w \le 100$.
- **Salida:** `YES` si se puede partir así, `NO` si no.

**La idea.** Si $w$ es impar, no se puede: dos pares siempre suman par. Si $w$ es par y mayor que 2, siempre se puede; por ejemplo, $2 + (w - 2)$. El caso tramposo es $w = 2$: es par, pero la única forma de partirlo en dos pedazos enteros positivos es $1 + 1$, y 1 es impar. Entonces la respuesta es `YES` solo si $w$ es par **y** $w > 2$.

```cpp
#include <bits/stdc++.h>                                                    // Incluye todas las bibliotecas estándar de C++
#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL) // Macro de entrada y salida rápida
using namespace std;                                                        // Permite usar cin y cout sin std::

int main(){                             // Aquí empieza el programa
    FastIO;                             // Activa la entrada y salida rápida
    int w;                              // Peso de la sandía; como mucho vale 100
    cin >> w;                           // Lee el peso
    if (w % 2 == 0 && w > 2) {          // Es par y mayor que 2: se puede partir en dos pares
        cout << "YES" << "\n";          // Imprime YES en mayúsculas, como lo pide el enunciado
    } else {                            // Es impar o vale 2: no se puede
        cout << "NO" << "\n";           // Imprime NO en mayúsculas
    }                                   // Fin del if
    return 0;                           // Termina sin errores
}                                       // Fin de main
```

Prueba en CPH con $w = 8$ (debe dar `YES`), $w = 2$ (`NO`) y $w = 7$ (`NO`). Luego entra al problema 4A, da clic en **Submit**, elige G++, pega el código y envía. En **My Submissions** aparecerá tu envío con el veredicto **Accepted** en verde, junto con el tiempo y la memoria.

---

#### Resumen del tema

1. Codeforces es internacional y en inglés; lo usaremos después de omegaUp para ganar velocidad y competir en rondas.
2. Elige bien tu handle: casi no se puede cambiar.
3. En el Problemset empieza con dificultad 800 a 1000 y, cuando practiques, oculta las etiquetas.
4. Para problemas con $t$ casos usa `while (t--)` y reinicia tus variables en cada caso.
5. Pasar los pretests no es lo mismo que un Accepted; la Div. 4 es la ronda para empezar.

---

### Tema 4 · Veredictos y errores al enviar

---

#### 4.1 Qué es un veredicto

El **veredicto** es la respuesta que te da el juez después de evaluar tu envío. Te dice si tu solución pasó y, si no, qué tipo de problema tuvo. Leerlo bien te ahorra tiempo: cada veredicto apunta a un tipo de error distinto, así que antes de cambiar una sola línea, fíjate qué te dijo el juez. Mandar cambios a ciegas es la forma más rápida de juntar envíos fallidos y, en el ICPC, minutos de castigo.

| Veredicto | En omegaUp | En Codeforces | Qué significa |
|---|---|---|---|
| Accepted | AC | Accepted | Pasó todos los casos dentro de los límites. |
| Parcial | PA | no se usa | Pasó solo algunos casos o subtareas. |
| Wrong Answer | WA | Wrong answer on test N | Terminó, pero imprimió algo distinto a lo esperado. |
| Time Limit Exceeded | TLE | Time limit exceeded on test N | Tardó más del tiempo permitido. |
| Memory Limit Exceeded | MLE | Memory limit exceeded on test N | Usó más memoria de la permitida. |
| Runtime Error | RTE | Runtime error on test N | Se detuvo con un error mientras corría. |
| Compilation Error | CE | Compilation error | El código no compiló. |

En Codeforces el mensaje te dice en qué caso falló (*on test N*). Si falla en el test 1, casi siempre es un problema de formato o de lectura, porque el test 1 suele ser el primer ejemplo del enunciado.

---

#### 4.2 Accepted (AC) y puntaje parcial (PA)

**Accepted** quiere decir que tu programa pasó todos los casos, con la respuesta correcta y dentro de los límites de tiempo y memoria. En omegaUp, si pasas solo algunos casos o subtareas, recibes **PA** con los puntos que ganaste.

Una trampa muy común: pensar que si pasas los ejemplos del enunciado ya tienes AC. Los ejemplos solo sirven para que entiendas el formato. Los casos ocultos incluyen cosas que los ejemplos casi nunca muestran:

- **Valores en los extremos:** el número más chico permitido (0, 1, negativos) y el más grande.
- **Entradas enormes:** la cantidad máxima de datos, donde una solución lenta se nota.
- **Casos especiales:** todos los números iguales, ya ordenados o en orden inverso.

---

#### 4.3 Wrong Answer (WA)

Imagina que haces un pastel siguiendo la receta. No quemaste la cocina ni rompiste el horno, pero le pusiste sal en vez de azúcar, o lo entregaste en una caja redonda cuando pedían una cuadrada. Terminaste, pero el resultado no es el que se pidió. Eso es un WA: tu programa corrió completo, pero lo que imprimió no coincide con la respuesta esperada.

**Causas más comunes**

1. **Texto extra o formato distinto:** mensajes como "La suma es:", espacios de más, mayúsculas cambiadas (`Yes` en lugar de `YES`).
2. **Desbordamiento:** usar `int` cuando el resultado pasa de $2\,147\,483\,647$. El número "da la vuelta" y sale negativo o con basura.
3. **Lógica incompleta:** un caso especial que no consideraste, como el $w = 2$ de Watermelon.

**Ejemplo 1: texto extra.** El problema pide leer dos números e imprimir su suma.

```cpp
#include <bits/stdc++.h>                                                    // Incluye todas las bibliotecas estándar
#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL) // Macro de entrada y salida rápida
using namespace std;                                                        // Permite usar cin y cout sin std::

int main(){                                 // Inicio del programa
    FastIO;                                 // Activa la entrada y salida rápida
    int a, b;                               // Los dos números de la entrada
    cin >> a >> b;                          // Lee los dos números
    cout << "La suma es: " << a + b << "\n"; // AQUÍ ESTÁ EL ERROR: el juez solo esperaba el número
    return 0;                               // Fin sin errores
}                                           // Fin de main
```

```cpp
#include <bits/stdc++.h>                                                    // Incluye todas las bibliotecas estándar
#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL) // Macro de entrada y salida rápida
using namespace std;                                                        // Permite usar cin y cout sin std::

int main(){                     // Inicio del programa
    FastIO;                     // Activa la entrada y salida rápida
    int a, b;                   // Los dos números de la entrada
    cin >> a >> b;              // Lee los dos números
    cout << a + b << "\n";      // Corregido: imprime solo la suma
    return 0;                   // Fin sin errores
}                               // Fin de main
```

**Ejemplo 2: desbordamiento.** El problema pide el área de un terreno rectangular de $a \times b$ metros, con $1 \le a, b \le 10^5$. El área puede llegar a $10^{10}$, que no cabe en un `int`.

```cpp
#include <bits/stdc++.h>                                                    // Incluye todas las bibliotecas estándar
#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL) // Macro de entrada y salida rápida
using namespace std;                                                        // Permite usar cin y cout sin std::

int main(){                     // Inicio del programa
    FastIO;                     // Activa la entrada y salida rápida
    int a, b;                   // AQUÍ ESTÁ EL ERROR: a * b puede llegar a 10^10 y no cabe en int
    cin >> a >> b;              // Lee las medidas del terreno
    cout << a * b << "\n";      // Con a = b = 100000 imprime un número equivocado
    return 0;                   // Fin sin errores
}                               // Fin de main
```

```cpp
#include <bits/stdc++.h>                                                    // Incluye todas las bibliotecas estándar
#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL) // Macro de entrada y salida rápida
using namespace std;                                                        // Permite usar cin y cout sin std::

int main(){                     // Inicio del programa
    FastIO;                     // Activa la entrada y salida rápida
    long long a, b;             // Corregido: long long llega hasta unos 9 * 10^18
    cin >> a >> b;              // Lee las medidas del terreno
    cout << a * b << "\n";      // Con a = b = 100000 imprime 10000000000
    return 0;                   // Fin sin errores
}                               // Fin de main
```

**Cómo encontrar el error**

1. Compara tu salida con la del ejemplo carácter por carácter: espacios, saltos de línea, mayúsculas.
2. Revisa los límites. Si una suma o multiplicación puede pasar de $2 \times 10^9$, cambia a `long long`.
3. Para revisar valores intermedios sin ensuciar la salida, imprime con `cerr` en lugar de `cout`. El juez no lee `cerr`. De todos modos, bórralos antes de enviar.

---

#### 4.4 Time Limit Exceeded (TLE)

Imagina que en un examen te piden contar un millón de granos de arroz uno por uno en cinco minutos. Sabes contar perfecto, pero ese método es demasiado lento y suena la campana antes de que acabes. Un TLE es eso: tu programa no necesariamente calculó mal, pero tardó más del tiempo permitido.

**Causas más comunes**

1. **Ciclo infinito:** la variable que controla el ciclo nunca cambia, así que la condición nunca se vuelve falsa.
2. **Demasiadas operaciones:** tu idea funciona, pero hace muchas más de las $10^8$ operaciones que caben en un segundo.
3. **Entrada y salida lenta:** olvidar `FastIO` o usar `endl` cuando hay que leer o imprimir cientos de miles de datos.

**Ejemplo.** El problema pide cuántas cifras tiene un número $n$, con $1 \le n \le 10^{18}$.

```cpp
#include <bits/stdc++.h>                                                    // Incluye todas las bibliotecas estándar
#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL) // Macro de entrada y salida rápida
using namespace std;                                                        // Permite usar cin y cout sin std::

int main(){                         // Inicio del programa
    FastIO;                         // Activa la entrada y salida rápida
    long long n;                    // El número puede llegar a 10^18
    cin >> n;                       // Lee el número
    int cifras = 0;                 // Contador de cifras
    while (n > 0) {                 // Repite mientras queden cifras
        cifras++;                   // Cuenta una cifra
    }                               // AQUÍ ESTÁ EL ERROR: n nunca cambia, el ciclo no termina
    cout << cifras << "\n";         // Nunca llega a esta línea
    return 0;                       // Fin sin errores
}                                   // Fin de main
```

```cpp
#include <bits/stdc++.h>                                                    // Incluye todas las bibliotecas estándar
#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL) // Macro de entrada y salida rápida
using namespace std;                                                        // Permite usar cin y cout sin std::

int main(){                         // Inicio del programa
    FastIO;                         // Activa la entrada y salida rápida
    long long n;                    // El número puede llegar a 10^18
    cin >> n;                       // Lee el número
    int cifras = 0;                 // Contador de cifras
    while (n > 0) {                 // Repite mientras queden cifras
        cifras++;                   // Cuenta una cifra
        n /= 10;                    // Corregido: quita la última cifra, así el ciclo avanza
    }                               // El ciclo da como mucho 19 vueltas
    cout << cifras << "\n";         // Con 12345 imprime 5
    return 0;                       // Fin sin errores
}                                   // Fin de main
```

**Cómo encontrar el error**

1. Revisa que cada ciclo cambie la variable de su condición.
2. Haz la cuenta de operaciones antes de programar. Si $N = 10^5$ y tu idea recorre todos los pares, son $10^{10}$ operaciones: no va a pasar y necesitas otra idea.
3. Asegúrate de tener `FastIO` y de usar `"\n"` en lugar de `endl`.

---

#### 4.5 Memory Limit Exceeded (MLE)

Imagina que te dan una mochila chica para tus útiles y tú intentas meter todos los libros de la biblioteca. No cierra, el cierre se rompe y no puedes ni levantarla. Un MLE es eso: tu programa pidió más memoria de la que el juez le permite (casi siempre entre 64 y 512 MB).

Para el ejemplo vamos a usar un **arreglo**, que es una fila de muchas variables del mismo tipo guardadas una tras otra en la memoria. Lo verás a fondo más adelante; por ahora basta saber que `int numeros[100000001];` crea cien millones de enteros.

**Causas más comunes**

1. **Guardar datos que no hacen falta:** almacenar todos los números cuando basta con ir sumándolos.
2. **Arreglos enormes:** cada `int` ocupa 4 bytes, así que $10^7$ enteros ya son unos 40 MB y $10^8$ son unos 400 MB.

**Ejemplo.** El problema pide la suma de $1 + 2 + \dots + n$, con $1 \le n \le 10^8$ y límite de memoria de 256 MB.

```cpp
#include <bits/stdc++.h>                                                    // Incluye todas las bibliotecas estándar
#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL) // Macro de entrada y salida rápida
using namespace std;                                                        // Permite usar cin y cout sin std::

int numeros[100000001];             // AQUÍ ESTÁ EL ERROR: cien millones de int ocupan unos 400 MB

int main(){                         // Inicio del programa
    FastIO;                         // Activa la entrada y salida rápida
    int n;                          // Hasta dónde hay que sumar
    cin >> n;                       // Lee n
    for (int i = 1; i <= n; i++) {  // Recorre del 1 al n
        numeros[i] = i;             // Guarda cada número en el arreglo, aunque no hace falta
    }                               // Fin del primer ciclo
    long long suma = 0;             // Acumulador de la suma
    for (int i = 1; i <= n; i++) {  // Recorre otra vez del 1 al n
        suma += numeros[i];         // Suma lo que guardó antes
    }                               // Fin del segundo ciclo
    cout << suma << "\n";           // Imprime la suma
    return 0;                       // Fin sin errores
}                                   // Fin de main
```

```cpp
#include <bits/stdc++.h>                                                    // Incluye todas las bibliotecas estándar
#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL) // Macro de entrada y salida rápida
using namespace std;                                                        // Permite usar cin y cout sin std::

int main(){                         // Inicio del programa
    FastIO;                         // Activa la entrada y salida rápida
    int n;                          // Hasta dónde hay que sumar
    cin >> n;                       // Lee n
    long long suma = 0;             // Acumulador; la suma llega a unos 5 * 10^15, no cabe en int
    for (int i = 1; i <= n; i++) {  // Recorre del 1 al n
        suma += i;                  // Corregido: suma directo, sin guardar cada número
    }                               // Fin del ciclo
    cout << suma << "\n";           // Con n = 10 imprime 55
    return 0;                       // Fin sin errores
}                                   // Fin de main
```

**Cómo encontrar el error**

1. Antes de programar, calcula cuánta memoria vas a usar: cantidad de datos × bytes por dato.
2. Compara con el límite del problema. Con 64 MB caben unos $1.5 \times 10^7$ enteros `int`, como mucho.
3. Pregúntate si de verdad necesitas guardar todo o si puedes ir calculando conforme lees.

---

#### 4.6 Runtime Error (RTE o RE)

Imagina que estás leyendo un libro de 10 páginas y alguien te dice "abre la página menos tres". O que te piden repartir 10 manzanas entre 0 amigos. No hay forma de hacerlo y te quedas trabado. Un Runtime Error es eso: el programa intentó hacer algo imposible y el sistema lo detuvo en seco.

**Causas más comunes**

1. **División entre cero:** usar `/` o `%` con un divisor que vale 0.
2. **Salirse de un arreglo:** usar una posición que no existe (lo verás cuando estudies arreglos).
3. **Recursión sin fin:** una función que se llama a sí misma sin detenerse (también lo verás más adelante).

**Ejemplo.** El problema dice: hay $d$ dulces y $a$ amigos, con $0 \le d \le 10^9$ y $0 \le a \le 10^9$. Imprime cuántos dulces le tocan a cada amigo si se reparten en partes iguales. Si no hay amigos, imprime 0.

```cpp
#include <bits/stdc++.h>                                                    // Incluye todas las bibliotecas estándar
#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL) // Macro de entrada y salida rápida
using namespace std;                                                        // Permite usar cin y cout sin std::

int main(){                         // Inicio del programa
    FastIO;                         // Activa la entrada y salida rápida
    int d, a;                       // Dulces y amigos
    cin >> d >> a;                  // Lee los dos datos
    cout << d / a << "\n";          // AQUÍ ESTÁ EL ERROR: si a vale 0, divide entre cero y el programa truena
    return 0;                       // Fin sin errores
}                                   // Fin de main
```

```cpp
#include <bits/stdc++.h>                                                    // Incluye todas las bibliotecas estándar
#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL) // Macro de entrada y salida rápida
using namespace std;                                                        // Permite usar cin y cout sin std::

int main(){                         // Inicio del programa
    FastIO;                         // Activa la entrada y salida rápida
    int d, a;                       // Dulces y amigos
    cin >> d >> a;                  // Lee los dos datos
    if (a == 0) {                   // Corregido: primero revisa si no hay amigos
        cout << 0 << "\n";          // El enunciado pide imprimir 0 en ese caso
    } else {                        // Si hay al menos un amigo
        cout << d / a << "\n";      // Ya es seguro dividir
    }                               // Fin del if
    return 0;                       // Fin sin errores
}                                   // Fin de main
```

**Cómo encontrar el error**

1. Busca cada `/` y cada `%` y pregúntate si el divisor puede valer 0 según los límites.
2. Si el enunciado dice que un dato puede ser 0, lee qué pide imprimir en ese caso.
3. Prueba en CPH con los valores más chicos permitidos, incluido el 0.

---

#### 4.7 Compilation Error (CE)

Imagina que le escribes una carta a un amigo sin puntos ni comas y con palabras inventadas. Tu amigo ni siquiera puede empezar a leerla. Un CE es eso: el compilador no entiende tu código y no puede convertirlo en un programa. Ningún caso se llega a probar.

**Causas más comunes**

1. **Errores de escritura:** falta un `;`, sobra o falta una llave `{ }`, o escribiste mal una palabra (`cot` en lugar de `cout`).
2. **Lenguaje equivocado:** elegiste C, Python o una versión vieja de C++ en la lista del juez.

```cpp
#include <bits/stdc++.h>                                                    // Incluye todas las bibliotecas estándar
#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL) // Macro de entrada y salida rápida
using namespace std;                                                        // Permite usar cin y cout sin std::

int main(){                         // Inicio del programa
    FastIO;                         // Activa la entrada y salida rápida
    int n                           // AQUÍ ESTÁ EL ERROR: falta el punto y coma
    cin >> n;                       // Lee el número
    cout << n << "\n";              // Lo imprime
    return 0;                       // Fin sin errores
}                                   // Fin de main
```

```cpp
#include <bits/stdc++.h>                                                    // Incluye todas las bibliotecas estándar
#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL) // Macro de entrada y salida rápida
using namespace std;                                                        // Permite usar cin y cout sin std::

int main(){                         // Inicio del programa
    FastIO;                         // Activa la entrada y salida rápida
    int n;                          // Corregido: la declaración termina con punto y coma
    cin >> n;                       // Lee el número
    cout << n << "\n";              // Lo imprime
    return 0;                       // Fin sin errores
}                                   // Fin de main
```

**Cómo encontrar el error**

1. Da clic en el veredicto CE para ver el mensaje del compilador.
2. Busca el número de línea que menciona. Ojo: cuando falta un `;`, el compilador suele marcar la línea siguiente.
3. Revisa que en la lista de lenguajes esté seleccionado C++ (G++ moderno, como G++17, G++20 o más reciente).
4. Si tu código compila en CPH y en el juez no, casi siempre es el lenguaje elegido.

---

#### 4.8 Otros veredictos

- **Output Limit Exceeded (OLE):** tu programa imprimió demasiado. Pasa casi siempre por un `cout` dentro de un ciclo que no termina, o por impresiones de prueba que olvidaste borrar.
- **Idleness Limit Exceeded (ILE):** aparece en Codeforces, sobre todo en problemas **interactivos** (donde el juez y tu programa platican pregunta por pregunta). Significa que tu programa se quedó esperando sin hacer nada; muchas veces porque olvidaste vaciar la salida con `cout.flush()` después de cada pregunta. Lo verás cuando lleguemos a los problemas interactivos.
- **Pretests passed:** veredicto provisional en las rondas de Codeforces. Pasaste los casos iniciales, pero el veredicto final llega después de los system tests.
- **Hacked:** en algunas rondas de Codeforces, otro participante encontró un caso que hace fallar tu solución. Revisa ese caso, porque te muestra exactamente qué no consideraste.
- **Judge Error (JE):** falla del juez, no de tu código. Espera unos minutos y vuelve a enviar, o avisa a los organizadores si es un concurso.

---

#### 4.9 Probar antes de enviar con CPH

La extensión **CPH** (Competitive Programming Helper) de VS Code te deja hacer en tu computadora lo mismo que hace el juez: correr tu programa con varios casos y comparar la salida con la esperada. Probar ahí antes de enviar te evita la mayoría de los veredictos de este tema.

1. **Corre los ejemplos del enunciado.** Puedes escribirlos a mano en CPH, o descargarlos en automático si instalas en tu navegador la extensión **Competitive Companion** y das clic en ella dentro del problema. CPH te marca en verde los casos que coinciden y en rojo los que no.
2. **Agrega casos tuyos.** Inventa entradas que pasen por todas las ramas de tus `if`.
3. **Prueba los extremos.** Siempre que el enunciado lo permita:
   - el valor más chico (0 o 1),
   - el valor más grande (por ejemplo $10^9$ o $10^{18}$, para detectar desbordamientos),
   - el cero, para detectar divisiones entre cero,
   - números negativos.

---

#### 4.10 Lista de verificación antes de cada envío

1. ¿La salida tiene exactamente el formato pedido, sin textos extra?
2. ¿Usé `long long` donde un valor puede pasar de $2 \times 10^9$?
3. ¿Mis contadores y sumas empiezan en cero, y se reinician en cada caso si hay $t$ casos?
4. ¿Borré los `cout` y `cerr` que usé para revisar valores?
5. ¿Está la plantilla con `FastIO` y uso `"\n"` en lugar de `endl`?
6. ¿Elegí C++ con una versión moderna de G++ en el juez?
7. ¿Probé el valor más chico, el más grande, el cero y los negativos?
8. ¿Ninguna división ni residuo puede tener divisor 0?
9. ¿Hice la cuenta de operaciones (menos de unas $10^8$ por segundo) y de memoria?
10. ¿Pasaron todos los ejemplos y mis casos propios en CPH?

---

#### Resumen del tema y del bloque

1. Cada veredicto apunta a un tipo de error. Léelo antes de cambiar el código.
2. Pasar los ejemplos no garantiza AC; los casos ocultos prueban extremos y entradas enormes.
3. WA casi siempre es formato, desbordamiento o un caso que no consideraste.
4. TLE es lentitud o ciclo infinito; MLE es guardar de más; RTE es una operación imposible, como dividir entre cero; CE es código que no compila.
5. Probar en CPH con la lista de verificación antes de enviar te ahorra envíos fallidos.