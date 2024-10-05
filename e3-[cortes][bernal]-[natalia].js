const ejercicio3 = document.getElementById("ejercicio3");

/**
 * Ejercicio 3
 * Crea un array que contenga al menos cinco números e implementa operaciones
 * de filtrado, reducción y recolección.
 */
function generarArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 10));
  }
  return array;
}

const size = 5;
const numeros = generarArray(size);

const biggerThanFive = numeros.filter((number) => number > 5);

const additionArray = numeros.reduce(
  (acumulator, current) => acumulator + current,
  0
);

const dupes = numeros.map((number) => number * 2);

ejercicio3.innerText =
  "Generated array: " +
  numeros +
  " | bigger than 5: " +
  biggerThanFive +
  " | Total addition (reduce): " +
  additionArray +
  " | duplicate numbers (map): " +
  dupes;
