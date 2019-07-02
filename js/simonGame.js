// Creamos las variables globales
var numeros = [];
var puntuacion = 0;
var pos = 0;
var ciclo = "maquina";
var player = prompt('¿Cómo te llamas?');
let highScores = document.getElementById('highScores');




/* Cuando se hace un click al boton de empezar se inicia la funcion que nos sirve tan para iniciar el
juego como para resetearlo */

document.getElementById("start").onclick = function () {
  numeros.splice(0, numeros.length);
  generarObjeto();
  pos = 0;
  puntuacion = 0;
  document.getElementById('contador').innerHTML = "0" + puntuacion;
  document.getElementById('start').innerHTML = "RESET";
  ciclo = "maquina";
  play();
};

/* Las siguientes 4 funciones controlan el comportamiento de los botones cuando el
usuario los presiona a nivel de sonido y color. También llevan unos bucles if/else
que regulan el comportamiento de los botones y pintan la puntuación del usuario en
el HTML */

document.getElementById("rojo").onclick = function rojoF() {
  document.getElementById("rojo").style.opacity = "1";
  document.getElementById("audioBotonRojo").play();
  setTimeout(function () {
    document.getElementById("rojo").style.opacity = "0.5";
  }, 500);

  if (ciclo == "usuario") {

    if (numeros[pos] == 1) {
      pos++;


      if (pos == numeros.length) {
        ciclo = "maquina";
        puntuacion = puntuacion + 1;
        document.getElementById('contador').innerHTML = "0" + puntuacion;
        generarObjeto();
        pos = 0;
        setTimeout(play, 1500);
      } else {}
    } else {
      printhighScores();
      document.getElementById('contador').innerHTML = "0" + puntuacion;
      document.getElementById('start').innerHTML = "START";

      alert("GAME OVER");

    }
  } else {}
};

document.getElementById("verde").onclick = function verdeF() {
  document.getElementById("verde").style.opacity = "1";
  document.getElementById("audioBotonVerde").play();
  setTimeout(function () {
    document.getElementById("verde").style.opacity = "0.5";
  }, 500);

  if (ciclo == "usuario") {
    if (numeros[pos] == 2) {
      pos++;


      if (pos == numeros.length) {
        ciclo = "maquina";
        puntuacion = puntuacion + 1;
        document.getElementById('contador').innerHTML = "0" + puntuacion;
        generarObjeto();
        pos = 0;
        setTimeout(play, 1500);
      } else {}
    } else {
      printhighScores();
      document.getElementById('contador').innerHTML = "0" + puntuacion;
      document.getElementById('start').innerHTML = "START";
      alert("GAME OVER");
    }
  } else {}
};

document.getElementById("azul").onclick = function azulF() {
  document.getElementById("azul").style.opacity = "1";
  document.getElementById("audioBotonAzul").play();
  setTimeout(function () {
    document.getElementById("azul").style.opacity = "0.5";
  }, 500);

  if (ciclo == "usuario") {

    if (numeros[pos] == 3) {
      pos++;


      if (pos == numeros.length) {
        ciclo = "maquina";
        puntuacion = puntuacion + 1;
        document.getElementById('contador').innerHTML = "0" + puntuacion;
        generarObjeto();
        pos = 0;
        setTimeout(play, 1500);
      } else {}
    } else {
      printhighScores();
      document.getElementById('contador').innerHTML = "0" + puntuacion;
      document.getElementById('start').innerHTML = "START";
      alert("GAME OVER");
    }
  } else {}
};

document.getElementById("amarillo").onclick = function amarilloF() {
  document.getElementById("amarillo").style.opacity = "1";
  document.getElementById("audioBotonAmarillo").play();
  setTimeout(function () {
    document.getElementById("amarillo").style.opacity = "0.5";
  }, 500);

  if (ciclo == "usuario") {

    if (numeros[pos] == 4) {
      pos++;


      if (pos == numeros.length) {
        ciclo = "maquina";
        puntuacion = puntuacion + 1;
        document.getElementById('contador').innerHTML = "0" + puntuacion;
        generarObjeto();
        pos = 0;
        setTimeout(play, 1500);
      } else {}
    } else {
      printhighScores();
      document.getElementById('contador').innerHTML = "0" + puntuacion;
      document.getElementById('start').innerHTML = "START";
      alert("GAME OVER");
    }
  } else {}
};

/* Función para generar números aleatotios entre 1 y 4 */
function generarObjeto() {
  let numero = Math.floor(Math.random() * 4) + 1;
  numeros.push(numero);
}

// Funcion que recorre el array y reproduce la secuencia de sonidos

function play() {

  if (pos < numeros.length) {
    switch (numeros[pos]) {
      case 1:
        // Se utiliza el metodo click para llamar al evento onclick
        document.getElementById("rojo").click();
        break;
      case 2:
        // Se utiliza el metodo click para llamar al evento onclick
        document.getElementById("verde").click();
        break;
      case 3:
        // Se utiliza el metodo click para llamar al evento onclick
        document.getElementById("azul").click();
        break;
      case 4:
        // Se utiliza el metodo click para llamar al evento onclick
        document.getElementById("amarillo").click();
        break;
    }
    pos++;
    setTimeout(play, 1000);
  } else if (pos == numeros.length) {
    pos = 0;
    ciclo = "usuario";
  }
}


function printhighScores() {
  let score = (player + ' ' + puntuacion + ' puntos');
  let listElem = document.createElement('li');
  let listElemText = document.createTextNode(score);
  listElem.appendChild(listElemText);
  highScores.appendChild(listElem);
}