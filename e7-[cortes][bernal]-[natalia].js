const ejercicio7 = document.getElementById("ejercicio7");

/**
 * ejercicio 7
 * Define una clase Animal con propiedades como nombre y edad, y un método hablar().
 * Crea dos subclases: Perro y Gato, que hereden de Animal y sobreescriban el método
 * hablar().
 */

class Animal {
    constructor(nombre, edad) {
      (this.nombre = nombre), (this.edad = edad);
    }
    hablar() {
      return;
    }
  }
  class Perro extends Animal {
    hablar() {
      return "guau";
    }
  }
  class Gato extends Animal {
    hablar() {
      return "miau";
    }
  }
  const perro = new Perro("pepe", 22);
  const gato = new Gato("pepe", 22);
  
  ejercicio7.innerText = `perro dice: ${perro.hablar()}\ngato dice: ${gato.hablar()}`;