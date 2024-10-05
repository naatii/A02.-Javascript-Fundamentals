const ejercicio4 = document.getElementById("ejercicio4");
/**
 * Ejercicio 4
 * Dada una matriz bidimensional de enteros, crea una función que:

        Aplane la matriz sin utilizar Array.flat().
        Calcule el promedio de los elementos de la matriz.

 */
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function aplanarYPromedio(matriz) {
  let matrizAplanada = [];
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      matrizAplanada.push(matriz[i][j]);
    }
  }
  const suma = matrizAplanada.reduce(
    (acumulator, current) => acumulator + current,
    0
  );
  const promedio = suma / matrizAplanada.length;
  return {
    aplanado: matrizAplanada,
    promedio: promedio,
  };
}

const resultado = aplanarYPromedio(matriz);
ejercicio4.innerText =
  "Matriz aplanada: " +
  resultado.aplanado +
  " | Promedio: " +
  resultado.promedio;
