const ejercicio16 = document.getElementById("ejercicio16");
const ejercicio18 = document.getElementById("ejercicio18");

/**
 * Ejercicio 16
 * La empresa "Aventuras Fantásticas S.L." está desarrollando un juego de aventura
 * en el que los jugadores explorarán un mundo lleno de criaturas mágicas. Necesitan
 * crear una estructura de datos para representar a los personajes del juego.
 *
 * La estructura de datos en esta fase del desarrollo será la de un objeto, en el
 * que se necesitará de cada personaje las siguientes propiedades:
 *
 * Nombre
 * Raza (por ejemplo, "Humano", "Elfo", "Enano")
 * Nivel (comenzará en 1)
 * Puntos de Vida (comenzará en 100)
 *
 * Además, para hacer pruebas, se almacenarán los personajes en un array.
 * Inicialmente habrá 2 personajes precargados en el sistema.
 *
 * Se deberán crear métodos para gestionar el combate:
 *
 * Atacar: Cuando un personaje ataque, se deberá restar una cantidad de puntos de
 * vida al enemigo (por ejemplo, 10 puntos por ataque).
 *
 * Recuperar Vida: Se deberá crear un método que permita al personaje recuperar
 * vida. Al recuperar, se sumarán 20 puntos de vida, pero no se podrá exceder el
 * máximo de 100 puntos.
 *
 * Subir Nivel: Cada vez que un personaje alcance 0 puntos de vida, se deberá
 * mostrar un alerta indicando que el personaje ha sido derrotado y restablecerlo a
 * su estado inicial (nivel 1 y 100 puntos de vida).
 */

class Personaje {
  #raza;
  #nivel;
  #vida;
  constructor(nombre, raza) {
    this.nombre = nombre;
    this.#raza = raza;
    this.#nivel = 1;
    this.#vida = 100;
  }
  getRaza() {
    return this.#raza;
  }

  getNivel() {
    return this.#nivel;
  }

  getPuntosDeVida() {
    return this.#vida;
  }

  atacar(enemigo) {
    if (enemigo.#vida > 0) {
      enemigo.#vida -= 10;
      if (enemigo.#vida <= 0) {
        enemigo.#vida = 0;
        this.subirNivel();
        enemigo.resetPersonaje();
        return { atacante: this, enemigo, estado: "derrotado" };
      } else {
        return { atacante: this, enemigo, estado: "en combate" };
      }
    } else {
      return { atacante: this, enemigo, estado: "ya derrotado" };
    }
  }

  recuperarVida() {
    if (this.#vida < 100) {
      this.#vida += 20;
      return true;
    }
    if (this.#vida > 100) {
      this.#vida = 100;
      return false;
    }
    return false;
  }

  subirNivel() {
    this.#nivel++;
  }

  resetPersonaje() {
    this.#nivel = 1;
    this.#vida = 100;
  }

  getInfo() {
    return {
      nombre: this.nombre,
      raza: this.#raza,
      nivel: this.#nivel,
      puntosDeVida: this.#vida,
    };
  }
}

function mostrarEstadoPersonaje(personaje) {
  const { nombre, raza, nivel, puntosDeVida } = personaje.getInfo();
  ejercicio16.innerText += `Personaje: ${nombre}, Raza: ${raza}, Nivel: ${nivel}, Puntos de Vida: ${puntosDeVida}\n\n`;
}

function mostrarResultadoAtaque(resultado) {
  const { atacante, enemigo, estado } = resultado;
  let mensaje = "";

  switch (estado) {
    case "derrotado":
      mensaje = `¡${atacante.nombre} ha derrotado a ${enemigo.nombre}!\n`;
      mensaje += `${enemigo.nombre} ha sido reiniciado a su estado inicial.\n`;
      break;
    case "en combate":
      mensaje = `${atacante.nombre} atacó a ${enemigo.nombre}, restándole 10 puntos de vida.\n`;
      mensaje += `A ${
        enemigo.nombre
      } le quedan ${enemigo.getPuntosDeVida()} puntos de vida.\n`;
      break;
    case "ya derrotado":
      mensaje = `${enemigo.nombre} ya está derrotado.\n`;
      break;
    default:
      mensaje = `Estado desconocido para el personaje ${enemigo.nombre}.\n`;
  }

  const span = document.createElement("span");
  if (estado === "en combate") {
    span.style.color = "gray"; // Daño en gris
  } else if (estado === "derrotado") {
    span.style.color = "red"; // Muerte en rojo
  }
  span.innerText = mensaje;
  ejercicio16.appendChild(span);
}

function mostrarRecuperacion(personaje, seRecupero) {
  const span = document.createElement("span");
  if (seRecupero) {
    span.style.color = "green"; // Curación en verde
    span.innerText = `\n${
      personaje.nombre
    } ha recuperado vida. Puntos de vida actuales: ${personaje.getPuntosDeVida()}.\n\n`;
  } else {
    span.innerText = `\n${personaje.nombre} ya tiene 100 puntos de vida. No se puede recuperar más vida.\n\n`;
  }
  ejercicio16.appendChild(span);
}

const personaje1 = new Personaje("Aragorn", "Humano");
const personaje2 = new Personaje("Legolas", "Elfo");

mostrarEstadoPersonaje(personaje1);
mostrarEstadoPersonaje(personaje2);

for (let i = 0; i < 8; i++) {
  const resultadoAtaque = personaje1.atacar(personaje2);
  mostrarResultadoAtaque(resultadoAtaque);
}

mostrarRecuperacion(personaje2, personaje2.recuperarVida());

for (let i = 0; i < 4; i++) {
  const resultado3 = personaje1.atacar(personaje2);
  mostrarResultadoAtaque(resultado3);
}
mostrarRecuperacion(personaje2, personaje2.recuperarVida());
