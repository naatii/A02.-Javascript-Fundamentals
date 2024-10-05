const ejercicio11 = document.getElementById("ejercicio11");
/**
 * Ejercicio 11
 * Escribe un script que simule el lanzamiento de 2 dados utilizando Math.random().
 * Haz 36,000 lanzamientos y muestra cuántas veces ha salido cada resultado.
 */

let resultadoDados = [];

function simularDados() {
    for (let i = 0; i < 36000; i++) {
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;
        resultadoDados.push(dado1);
        resultadoDados.push(dado2);
    }
    return resultadoDados;
}

ejercicio11.innerText = "Entrada: Simulando 36,000 lanzamientos de dados...\n"; // Mostrar entrada
simularDados();

let conteoResultados = resultadoDados.reduce((acumulador, current) => {
    acumulador[current] = (acumulador[current] || 0) + 1;
    return acumulador;
}, {});

ejercicio11.innerText += "Salida: Simulación de dados:\n";
for (let valor in conteoResultados) {
    ejercicio11.innerText += `El número ${valor} ha salido: ${conteoResultados[valor]} veces\n`;
}
