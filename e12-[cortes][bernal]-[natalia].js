const ejercicio12 = document.getElementById("ejercicio12");

/**
 * Ejercicio 12
 * Implementa una función  que acepte dos números entre 1 y 100 y calcule
 * todos los números pares en ese rango. Incluye validaciones para las entradas y
 * muestra los resultados.
 */

function findPairs(num) {
    try {
      let resultadoPares = [];
  
      if (num !== "" && num !== null && !isNaN(num) && num >= 1 && num <= 100) {
        for (let i = 0; i <= parseInt(num); i++) {
          if (i % 2 === 0 && i !== 0) {
            resultadoPares.push(i);
          }
        }
        return resultadoPares;
  
        console.log("Números pares encontrados:", resultadoPares);
      } else {
        throw new Error("El número no es válido o no está en el rango [1-100]");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  ejercicio12.innerText = `los números pares: ${findPairs(10)}`;