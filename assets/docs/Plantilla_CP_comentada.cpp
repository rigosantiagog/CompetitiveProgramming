// =====================================================================
//  Plantilla oficial · Curso de Programación Competitiva en C++
//  Versión comentada para estudiar qué hace cada línea.
//  Para concursar o practicar usa Plantilla_CP.cpp (la versión limpia).
// =====================================================================

#include <bits/stdc++.h>   // Incluye de una vez toda la biblioteca estándar: iostream, cmath, string, algorithm, vector...
                           // No es parte del estándar de C++: es propia del compilador GCC (el que trae MinGW).

// FastIO es un atajo: donde escribas FastIO, el compilador pega estas tres instrucciones.
#define FastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL)
//   ios_base::sync_with_stdio(false)  -> separa cin/cout de scanf/printf (las funciones de C) y los hace mucho más rápidos.
//                                        Desde ese momento no mezcles cin/cout con scanf/printf en el mismo programa.
//   cin.tie(NULL)                     -> cin deja de vaciar la salida de cout antes de cada lectura; ahorra tiempo
//                                        cuando el programa lee e imprime muchas veces.
//   cout.tie(NULL)                    -> no cambia nada, porque cout no está atado a ningún otro flujo.
//                                        Se deja por costumbre; no estorba ni acelera.

using namespace std;       // Permite escribir cout, cin o string sin poner std:: delante cada vez.

int main(){                // El programa empieza a ejecutarse aquí.

    FastIO;                // Activa la entrada y salida rápida. Va antes de la primera lectura o escritura.

    // Aquí va tu solución: leer los datos con cin, resolver e imprimir con cout.

    return 0;              // Le avisa al sistema (y al juez) que el programa terminó sin errores.
}

// Nota para más adelante: en los problemas interactivos (al final del curso) cin ya no vacía cout por ti,
// así que tendrás que hacerlo tú con cout << flush o con endl.
