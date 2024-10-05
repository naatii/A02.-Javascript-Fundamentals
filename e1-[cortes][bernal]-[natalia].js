const ejercicio1 = document.getElementById("ejercicio1");

/**
 * Ejercicio 1
 * Crea una función que reciba dos números como parámetros y devuelve su suma.
 * Investiga y utiliza al menos tres funciones predefinidas del lenguaje
 * (por ejemplo, Math.random(), parseInt(), toFixed()).
 */

const sumar = (a, b) => {
  return a + b;
};

const obtenerNumeroAleatorio = () => {
  const random = Math.random() * 10;
  return parseInt(random.toFixed(0));
};

const mostrarResultado = (resultado) => {
  ejercicio1.innerText = "Ejercicio 1 resultado ➡️ " + resultado;
};

const realizarSuma = () => {
  const numeroAleatorio = obtenerNumeroAleatorio();
  const resultado = sumar(5, numeroAleatorio);
  mostrarResultado(resultado);
};

realizarSuma();

