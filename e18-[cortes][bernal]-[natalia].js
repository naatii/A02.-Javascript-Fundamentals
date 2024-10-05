const ejercicio18 = document.getElementById("ejercicio18");

/**
 * Ejercicio 18
 * La empresa "Descuentos Mágicos S.L." quiere implementar un sistema para calcular descuentos en productos. El sistema debe permitir calcular el precio final de un producto después de aplicar uno o varios descuentos.

Crea una función calcularPrecioFinal(precioBase, descuentos) que reciba dos parámetros:

precioBase: un número que representa el precio original del producto.
descuentos: un array de números que representan los porcentajes de descuento a aplicar.

La función debe aplicar cada descuento secuencialmente sobre el precio base. Por ejemplo, si el precio base es 100 y se aplican descuentos del 10% y 20%, el cálculo debería ser:

Aplicar el 10%: 100 - (100 * 0.10) = 90
Aplicar el 20%: 90 - (90 * 0.20) = 72

La función debe validar que el precio base sea un número positivo y que cada descuento esté en el rango de 0 a 100. Si algún descuento no es válido, debe lanzar un error con un mensaje adecuado.

Además, crea una función adicional mostrarPrecioFinal(precioBase, descuentos) que llame a calcularPrecioFinal y muestre el resultado en la consola con un mensaje amigable, por ejemplo: "El precio final después de aplicar los descuentos es: X".

 */

function calcularPrecioFinal(precioBase, descuentos) {
    let precioFinal = descuentos.reduce((total, descuento) => {
        return total * (1 - descuento / 100);
    }, precioBase);
    return precioFinal.toFixed(2);
}

function mostrarPrecioFinal(precioBase, descuentos) {
    const precioFinal = calcularPrecioFinal(precioBase, descuentos);
    return `El precio final después de aplicar los descuentos es: ${precioFinal} €`;
}

const precioBase = 10;
const descuentos = [10, 20, 50];

ejercicio18.innerText = mostrarPrecioFinal(precioBase, descuentos);
