const ejercicio5 = document.getElementById("ejercicio5");

/**
 * Ejercicio 5
 * Define un objeto Libro con propiedades como título, autor, y paginas. Incluye un
 * método resumen() que devuelva una descripción del libro. Crea un array de objetos
 * Libro, recorrelo y utiliza el método en cada uno para mostrar su descripción en
 * la página.
 */

function Libro(titulo, autor, paginas) {
  this.titulo = titulo;
  this.autor = autor;
  this.paginas = paginas;
  this.resumen = function () {
      return `${this.titulo} escrito por ${this.autor}, tiene ${this.paginas} páginas.\n`;
  };
}

// Array de datos de libros
const libros = [
  new Libro("Cien años de soledad", "Gabriel García Márquez", 471),
  new Libro("Don Quijote de la Mancha", "Miguel de Cervantes", 863),
  new Libro("1984", "George Orwell", 328),
  new Libro("El principito", "Antoine de Saint-Exupéry", 96),
];

// Crear una entrada para mostrar los resúmenes
ejercicio5.innerText = "Resumen de libros:\n";

// Recorrer el array y mostrar el resumen de cada libro en la página
libros.forEach((libro, i) => {
  ejercicio5.innerText += `Libro ${i + 1}: ${libro.resumen()}`;
});
