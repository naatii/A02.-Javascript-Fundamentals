const ejercicio10 = document.getElementById("ejercicio10");

/**
 * Ejercicio 10
 * Crea un script que pida al usuario un número entre 1 y 12 (representando los 
 * meses del año)
 * y devuelva el número de días en el mes correspondiente.
 * Considera que febrero tiene 28 días y los meses de abril, junio, septiembre y 
 * noviembre tienen 30.
 */

function obtenerMesDelUsuario() {
  const mes = prompt("> Introduzca el mes del año: ");
  return mes;
}

function calcularDiasDelMes(mes) {
  return new Date(new Date().getFullYear(), mes, 0).getDate();
}

function mostrarResultado(mes, dias) {
  ejercicio10.innerText = `Salida: El mes ${mes} tiene ${dias} días.`;
}

function diaDelMes() {
  try {
      const mesString = obtenerMesDelUsuario();
      const mes = parseInt(mesString);

      if (
          mesString !== "" &&
          mesString !== null &&
          !isNaN(mes) &&
          mes >= 1 &&
          mes <= 12
      ) {
          const diasDelMes = calcularDiasDelMes(mes);
          mostrarResultado(mes, diasDelMes);
      } else {
          mostrarResultado(mes, "invalido");
          throw new Error("Mes inválido.");
      }
  } catch (error) {
      console.error("Error: Se esperaba un mes entre [1-12]");
  }
}

ejercicio10.innerText = "Entrada: " + obtenerMesDelUsuario();
diaDelMes();
