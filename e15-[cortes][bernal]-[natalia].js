const ejercicio15 = document.getElementById("ejercicio15");
/**
 * Ejercicio 15
 * Toma uno de los ejercicios anteriores y añade comentarios explicativos en cada
 * parte del código. Realiza pruebas en diferentes escenarios y documenta si el
 * comportamiento es el esperado.
 */

const bisiestos2 = []; // creación de la constante donde guardaremos los datos.
function isLeapYear2(year1, year2) {
  // Bloque try catch para la captura de errores.
  try {
    // Estructura de control para la validación de datos.
    // Si los años son distinto de números o no están comprendidos entre 2001 y 2500 se lanza un error.
    if (
      ![year1, year2].every(
        (year) => Number.isInteger(year) && year >= 2001 && year <= 2500
      )
    ) {
      throw new Error();
    }
    // recorremos todo el rango de años comprendido entre las fechas antes mencionadas.
    for (let year = year1; year <= year2; year++) {
      // Estructura de control para la comprobación del año bisiesto, con el módulo de 4 se comprueba si es bisiesto o no,
      // con el módulo de 100, se comprueban años como 1900 que es divisible por 4 pero también por 100
      // Por último se comprueba el módulo de 400 porque años como 2000 es divisible por 4, por 100 pero si por 400
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        bisiestos2.push(year); // se agrega el año visiesto al array para luego imprimirlo
      }
    }
    return bisiestos2; // devolvemos la lista actualizada
  } catch (error) {
    // lanzamos el error anteriormente mencionado.
    console.error("Los años deben ser enteros entre 2001 y 2500.");
  }
}
// usamos un párrafo del dom para mostrar la salido por pantalla en el html.
ejercicio15.innerText = "Años bisiestos: " + isLeapYear2(2001, 2024);

