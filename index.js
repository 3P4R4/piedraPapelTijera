// Crear una funcion que desvuelva al azar PIEDRA, PAPEL O TIJERA

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
//console.log(computerPlay())

function playRound(playerSelection, computerSelection) {

  if (playerSelection == computerSelection) {
    document.write("Estan empatados")
  }
  else if (playerSelection == "Piedra") {
    if (computerSelection == "Papel") {
      document.write("Has perdido")
    }
    if (computerSelection == "Tijera") {
      document.write("Has GANADO!")
    }
  }
  else if (playerSelection == "Papel") {
    if (computerSelection == "Tijera") {
      document.write("Has perdido")
    }
    if (computerSelection == "Piedra") {
      document.write("Has GANADO!")
    }
  }
  else if (playerSelection == "Tijera") {
    if (computerSelection == "Piedra") {
      document.write("Has perdido")
    }
    if (computerSelection == "Papel") {
      document.write("Has GANADO!")
    }
  }
}


const playerSelection = "Piedra";
const computerSelection = computerPlay();
//console.log("La computadora a seleccionado: " + computerSelection)
//console.log(playRound(playerSelection, computerSelection));

/* Escriba una NUEVA función llamada game(). Utilice la función anterior dentro de este para jugar un juego de 5 rondas que mantiene la puntuación e informa un ganador o perdedor al final. */

function game() {
  let ronda = playRound(playerSelection, computerSelection)
  //llame a su playRoundfunción 5 veces seguidas. Los bucles se tratan en la siguiente lección.
  for (let i = 0; i <= 5; i++) {
    return ronda
    document.write(ronda + "<br>")
  }
}