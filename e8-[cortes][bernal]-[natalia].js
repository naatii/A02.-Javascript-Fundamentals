const ejercicio8 = document.getElementById("ejercicio8");

/**
 * Ejercicio 8
 * Crea una clase Estudiante que contenga propiedades como nombre, edad, y notas.
 * Incluye métodos para agregar una nota, calcular el promedio y determinar si ha
 * aprobado. Crea un objeto Estudiante y utiliza sus métodos para realizar pruebas.
 */
class Estudiante {
    constructor(nombre, edad, notas) {
      (this.nombre = nombre), (this.edad = edad), (this.notas = notas);
    }
    agregarNota(nota) {
      try {
        if (!Array.isArray(this.notas) || !Number.isInteger(nota)) {
          this.notas = [];
          throw new Error();
        }
        this.notas.push(nota);
      } catch (error) {
        console.error("Se esperaba un array");
      }
    }
    promedio() {
      try {
        if (this.notas.length == 0) {
          return null;
        }
        return this.notas.reduce(
          (acumulator, current) => acumulator + current,
          0
        ) /
          this.notas.length >=
          5
          ? true
          : false;
      } catch (error) {
        console.error("El array no es correcto o no tiene datos.");
      }
    }
  }
  const estudiante = new Estudiante("pablo", 22, []);
  estudiante.agregarNota(2);
  estudiante.agregarNota(3);
  estudiante.agregarNota(3);
  estudiante.agregarNota(5);
  estudiante.agregarNota(7);
  estudiante.agregarNota(10);
  
  if (estudiante.promedio() !== null) {
    ejercicio8.innerText = `${estudiante.nombre}, con ${
      estudiante.edad
    } años, está ${
      estudiante.promedio() ? "aprobado" : "suspenso"
    } y estas son sus notas [${estudiante.notas.join(", ")}]`;
  } else {
    ejercicio8.innerText = `No es posible calcular el promedio para ${estudiante.nombre}.`;
  }