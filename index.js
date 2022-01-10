// Crear una funcion que desvuelva al azar PIEDRA, PAPEL O TIJERA

// Variables globales a usar
let puntajeJugador = 0;
let puntajeMaquina = 0;
let playerSelection = "Tijera";
let computerSelection = computerPlay();


function computerPlay() {
  let opcionAzar = Math.floor(Math.random() * 3)
  switch (opcionAzar) {
    case 0:
      return 'Piedra'
    case 1:
      return 'Papel'
    case 2:
      return 'Tijera'
  }
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection == computerSelection) {
    document.write("<p class='texto'>Estan empatados ambos han seleccionado <span>" + playerSelection + "</span></p>")
  }
  else if (playerSelection == "Piedra") {
    if (computerSelection == "Papel") {
      document.write("<p class='texto'>Has perdido tu has selecionado <span>" + playerSelection + "</span> y la maquina ha seleccionado <span>" + computerSelection + "</span></p>")
       puntajeMaquina++;
    }
    if (computerSelection == "Tijera") {
      document.write("<p class='texto'>Has GANADO! tu has selecionado <span>" + playerSelection + "</span> y la maquina ha seleccionado <span>" + computerSelection + "</span></p>");
      puntajeJugador++;
    }
  }
  else if (playerSelection == "Papel") {
    if (computerSelection == "Tijera") {
      document.write("<p class='texto'>Has perdido tu has selecionado <span>" + playerSelection + "</span> y la maquina ha seleccionado <span>" + computerSelection + "</span></p>")
       puntajeMaquina++;
    }
    if (computerSelection == "Piedra") {
      document.write("<p class='texto'>Has GANADO! tu has selecionado <span>" + playerSelection + "</span> y la maquina ha seleccionado <span>" + computerSelection + "</span></p>");
       puntajeJugador++;
      
    }
  }
  else if (playerSelection == "Tijera") {
    if (computerSelection == "Piedra") {
      document.write("<p class='texto'>Has perdido tu has selecionado <span>" + playerSelection + "</span> y la maquina ha seleccionado <span>" + computerSelection + "</span></p>")
       puntajeMaquina++;
    }
    if (computerSelection == "Papel") {
      document.write("<p class='texto'>Has GANADO! tu has selecionado <span>" + playerSelection + "</span> y la maquina ha seleccionado <span>" + computerSelection + "</span></p>");
       puntajeJugador++;
      
    }
  }
}

/* Escriba una NUEVA función llamada game(). Utilice la función anterior dentro de este para jugar un juego de 5 rondas que mantiene la puntuación e informa un ganador o perdedor al final. */

function game(seleccion) {
  let ronda = playRound(playerSelection, computerSelection) 
  /* if (ronda.search("Tiempo")) {
    document.write("<p class='texto'>Tu puntaje es <span>" + puntajeJugador + "</span></p>")
     puntajeJugador++
  } else if (roundResult.search("Has perdido tu has selecionado ")) {
     puntajeMaquina++;
  } */
}

document.write(playRound(playerSelection, computerSelection))
document.write("<br> Tu puntaje ahora es "+puntajeJugador+" <br> ")
document.write("El puntaje de la Maquina es "+puntajeMaquina+" ")