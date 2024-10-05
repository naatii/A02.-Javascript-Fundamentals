const ejercicio13 = document.getElementById("ejercicio13");
/**
 * Ejercicio 13
 * Implementa una función calcularSumaPrecios() que reciba un array de objetos con
 * propiedades nombre y precio, y devuelva la suma total de todos los precios
 * utilizando reduce().
 */

function calcularSumaPrecios(productos) {
    try {
      if (
        !Array.isArray(productos) ||
        !productos.every(
          (producto) => producto && typeof producto.precio === "number"
        )
      ) {
        throw new Error();
      }
      return productos.reduce((a, { precio }) => a + precio, 0);
    } catch (error) {
      console.error("Error: datos de entrada inválidos");
      return null;
    }
  }
  
  const listaProductos = [
    { nombre: "Manzana", precio: 2 },
    { nombre: "Pan", precio: 1.5 },
    { nombre: "Leche", precio: 3.2 },
    { nombre: "Queso", precio: 5.8 },
  ];
  
  const sumaTotal = calcularSumaPrecios(listaProductos);
  ejercicio13.innerText =
    sumaTotal !== null
      ? `La suma total de los precios es: ${sumaTotal} €`
      : "Error: datos de entrada inválidos";
  