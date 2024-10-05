const ejercicio17 = document.getElementById("ejercicio17");
/**
 * Ejercicio 17 
 * La empresa "Tienda de Fantasía S.L." está desarrollando un sistema de gestión de inventario para sus productos mágicos. Necesitan una estructura de datos para representar cada producto.

Crea una clase Producto con las siguientes propiedades:

Nombre
Categoría (por ejemplo, "Poción", "Varita", "Libro")
Precio
Cantidad en Stock (comenzará en 0)

Crea un método actualizarStock(cantidad) que permita aumentar o disminuir la cantidad en stock de un producto. Si la cantidad resultante es menor que 0, la cantidad debe establecerse en 0.

Implementa una clase Inventario que contenga un array de objetos Producto. Esta clase debe tener métodos para:

Agregar un nuevo producto al inventario.
Eliminar un producto por su nombre.
Buscar un producto por su nombre y mostrar su información.

Implementa validaciones para asegurarte de que los datos de entrada (como el precio y la cantidad en stock) sean válidos y no provoquen errores inesperados.

 */

class Producto {
  constructor(nombre, categoria, precio, stock) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.stock = stock >= 0 ? stock : 0; // Asegura que el stock no sea negativo
  }

  actualizarStock(cantidad) {
    this.stock += cantidad; // Aumenta o disminuye el stock
    if (this.stock < 0) {
      this.stock = 0; // Evita que el stock sea negativo
    }
  }

  getProducto() {
    return {
      nombre: this.nombre,
      categoria: this.categoria,
      precio: this.precio,
      stock: this.stock,
    };
  }
}

class Inventario {
  constructor() {
    this.productos = []; // Inicializa un array vacío para los productos
  }

  agregar(producto) {
    // Verifica si el producto ya existe en el inventario
    if (this.productos.some(p => p.nombre === producto.nombre)) {
      return null; // Si el producto ya existe, no se agrega
    } else {
      this.productos.push(producto); // Agrega el producto al inventario
    }
  }

  eliminar(nombre) {
    const index = this.productos.findIndex(p => p.nombre === nombre); // Busca el índice del producto
    if (index !== -1) {
      this.productos.splice(index, 1); // Elimina el producto si se encuentra
    } else {
      return null; // Si el producto no existe, no se elimina
    }
  }

  buscar(nombre) {
    const producto = this.productos.find(p => p.nombre === nombre); // Busca el producto
    return producto ? producto.getProducto() : null; // Devuelve la información del producto o null
  }
}

// Inicializando productos
const producto1 = new Producto("calabaza", "fruta", 22.9, 10);
const producto2 = new Producto("platano", "fruta", 10.0, 10);
const producto3 = new Producto("fresa", "fruta", 9.0, 10);

// Inicializando inventario
const inventario = new Inventario();
inventario.agregar(producto1);
inventario.agregar(producto2);
inventario.agregar(producto3);

// Muestra el resultado de buscar un producto
ejercicio17.innerText = JSON.stringify(inventario.buscar("calabaza"), null, 2);

// Elimina un producto
ejercicio17.innerText += `\n\nProducto Eliminado: ${JSON.stringify(inventario.buscar("platano").nombre, null, 2)}`; // Muestra que el producto fue eliminado
inventario.eliminar("platano");

// Muestra el resultado de buscar el producto eliminado
const resultadoBusquedaEliminado = inventario.buscar("platano");
ejercicio17.innerText += `\n\nResultado de búsqueda para "platano": ${JSON.stringify(resultadoBusquedaEliminado, null, 2)}`; // Muestra que el producto fue eliminado

