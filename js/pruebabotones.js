// Creamos las variables globales
var numeros = [];
var numerosUsuario = [];
var puntuacion = 0;
var pos = 0;
var ciclo = 'maquina';

/* Cuando se hace un click al boton de empezar se inicia la funcion que nos sirve tan para iniciar el
juego como para resetearlo */

document.getElementById('start').onclick = function () {
  numeros.splice(0, numeros.length - 1);
  generarObjeto();
  console.log(numeros);
  pos = 0;
  play();
}



/* Las siguientes 4 funciones controlan el comportamiento de los botones cuando el
usuario los presiona a nivel de sonido y color. También llevan unos bucles if/else
que regulan el comportamiento de los botones  */

document.getElementById('botonRojo').onclick = function () {
  document.getElementById('botonRojo').style.opacity = '1';
  document.getElementById('audioBotonRojo').play();
  setTimeout(function () {
    document.getElementById('botonRojo').style.opacity = '0.2';
  }, 500);

  if (ciclo == 'usuario') {
    console.log(ciclo);
    if (numeros[pos] == 1) {
      pos++;
      puntuacion = puntuacion + 1;


      if (pos == numeros.length) {
        ciclo = 'maquina';
        generarObjeto();
        pos = 0;
        setTimeout(play, 1500);

      } else {

      }
    } else {
      alert('Game over. Tu puntuación es de : ' + puntuacion + ' puntos');

    }
  } else {

  }
}

document.getElementById('botonVerde').onclick = function () {
  document.getElementById('botonVerde').style.opacity = '1';
  document.getElementById('audioBotonVerde').play();
  setTimeout(function () {
    document.getElementById('botonVerde').style.opacity = '0.2';
  }, 500);

  if (ciclo == 'usuario') {
    console.log(ciclo);
    if (numeros[pos] == 2) {
      pos++;
      puntuacion = puntuacion + 1;


      if (pos == numeros.length) {
        ciclo = 'maquina';
        generarObjeto();
        pos = 0;
        setTimeout(play, 1500);

      } else {

      }
    } else {
      alert('Game over. Tu puntuación es de : ' + puntuacion + ' puntos');

    }
  } else {

  }
}

document.getElementById('botonAzul').onclick = function () {
  document.getElementById('botonAzul').style.opacity = '1';
  document.getElementById('audioBotonAzul').play();
  setTimeout(function () {
    document.getElementById('botonAzul').style.opacity = '0.2';
  }, 500);

  if (ciclo == 'usuario') {
    console.log(ciclo);
    if (numeros[pos] == 3) {
      pos++;
      puntuacion = puntuacion + 1;


      if (pos == numeros.length) {
        ciclo = 'maquina';
        generarObjeto();
        pos = 0;
        setTimeout(play, 1500);

      } else {

      }
    } else {
      alert('Game over. Tu puntuación es de : ' + puntuacion + ' puntos');

    }
  } else {

  }
}

document.getElementById('botonAmarillo').onclick = function () {
  document.getElementById('botonAmarillo').style.opacity = '1';
  document.getElementById('audioBotonAmarillo').play();
  setTimeout(function () {
    document.getElementById('botonAmarillo').style.opacity = '0.2';
  }, 500);

  if (ciclo == 'usuario') {
    console.log(ciclo);
    if (numeros[pos] == 4) {
      pos++;
      puntuacion = puntuacion + 1;


      if (pos == numeros.length) {
        ciclo = 'maquina';
        generarObjeto();
        pos = 0;
        setTimeout(play, 1500);

      } else {

      }
    } else {
      alert('Game over. Tu puntuación es de : ' + puntuacion + ' puntos');

    }
  } else {

  }
}



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
        document.getElementById('botonRojo').click();
        break;
      case 2:
        // Se utiliza el metodo click para llamar al evento onclick
        document.getElementById('botonVerde').click();
        break;
      case 3:
        // Se utiliza el metodo click para llamar al evento onclick
        document.getElementById('botonAzul').click();
        break;
      case 4:
        // Se utiliza el metodo click para llamar al evento onclick
        document.getElementById('botonAmarillo').click();
        break;
    }
    pos++;
    setTimeout(play, 1000);
  } else if (pos == numeros.length) {
    pos = 0;
    ciclo = 'usuario';


  }

}