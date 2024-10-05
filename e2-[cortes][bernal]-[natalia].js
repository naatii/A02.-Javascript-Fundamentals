const ejercicio2 = document.getElementById("ejercicio2");

/**
 * Ejercicio 2
 * Implementa una función recursiva que reciba un parámetro n y repita n
 * veces el string “bauuuba”.
 */
const recursiva = (n) => {
  if (n === 0) {
    return;
  }
  ejercicio2.innerText += "bauuuba\n";
  recursiva(n - 1);
};

const realizarRepeticiones = () => {
  recursiva(4);
};

realizarRepeticiones();