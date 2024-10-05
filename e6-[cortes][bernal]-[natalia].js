const ejercicio6 = document.getElementById("ejercicio6");

/**
 * Ejericicio 6
 * Crea una función filtrarYTransformar() que reciba un array de números y devuelva
 * un nuevo array que contenga solo los números impares, multiplicados por 2. Utiliza filter() y map().
 */
function filtrarYTransformar(array) {
  try {
    if (!Array.isArray(array) || !array.every((num) => Number.isInteger(num))) {
      throw new Error();
    }
    return array.filter((num) => num % 2 !== 0).map((num) => num * 2);
  } catch (error) {
    console.error("Error: se esperaba un array");
    return []; // Retorna un array vacío en caso de error
  }
}

const arrayGenerado = generarArray2(10); // Generar el array de entrada
ejercicio6.innerText = "Array generado: " + arrayGenerado + "\n" +
                        "Resultado: " + filtrarYTransformar(arrayGenerado);

function generarArray2(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 10));
  }
  return array;
}

