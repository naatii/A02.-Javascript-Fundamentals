const ejercicio14 = document.getElementById("ejercicio14");

/**
 * Ejercicio 14
 * Implementa una función isLeapYear() que acepte dos años entre 2001 y 2500 y
 * muestre todos los años bisiestos en ese rango. Incluye validaciones para las
 * entradas.
 */

const bisiestos = [];
function isLeapYear(year1, year2) {
  try {
    if (
      ![year1, year2].every(
        (year) => Number.isInteger(year) && year >= 2001 && year <= 2500
      )
    ) {
      throw new Error();
    }

    for (let year = year1; year <= year2; year++) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        bisiestos.push(year);
      }
    }
    return bisiestos;
  } catch (error) {
    console.error("Los años deben ser enteros entre 2001 y 2500.");
  }
}
ejercicio14.innerText = "Años bisiestos: " + isLeapYear(2001, 2024);