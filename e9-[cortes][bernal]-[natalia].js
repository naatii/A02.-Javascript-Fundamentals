const ejercicio9 = document.getElementById("ejercicio9");

/**
 * Ejercicio 9
 * Implementa un script que tome una cadena codificada en ROT13 como entrada y devuelva la cadena decodificada. Los caracteres no alfabéticos deben permanecer sin cambios.
 */

function descifrado(cadenaCifrada) {
    return cadenaCifrada.split("").map((letra) => {
      const code = letra.charCodeAt(letra);
  
      switch (true) {
        case code < 65 || code > 90:
          return String.fromCharCode(code).toLowerCase();
        case code < 78:
          return String.fromCharCode(code + 13).toLowerCase();
        default:
          return String.fromCharCode(code - 13).toLowerCase();
      }
    });
  }
  const palabraCifrada = "TBBQ ZBEAVAT"
  ejercicio9.innerText = `Palabra descifrada: ${descifrado(palabraCifrada).join(
    ""
  )}`;