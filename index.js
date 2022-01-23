// Crear una funcion que desvuelva al azar PIEDRA, PAPEL O TIJERA

// Variables globales a usar
let puntajeJugador = 0;
let puntajeMaquina = 0;
let playerSelection;



// Creando una funcion para iniciar el prompt
function emergente() {
  var mensaje;
  var opcion = prompt("Introduzca su nombre por favor:", "Abraham José Mendoza");

  if (opcion == null || opcion == "") {
    mensaje = "Debes escribir un Nombre para identificarte";
    alert(mensaje)
    location.reload();
  } 
  else {
    mensaje = opcion;
    document.getElementById("usuario").innerHTML = mensaje;
    return ocultar()
  }
}


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
    document.querySelector(".per").innerHTML = "Estan empatados ambos han seleccionado " + playerSelection

  }
  else if (playerSelection == "Piedra") {
    if (computerSelection == "Papel") {
      document.querySelector(".per").innerHTML = "Has PERDIDO! " + computerSelection + " gana a " + playerSelection;
      document.querySelector(".per").innerHTML = "Has perdido" + puntajeMaquina + " "
      puntajeMaquina++;

    }
    if (computerSelection == "Tijera") {
      document.querySelector(".per").innerHTML = "Has GANADO! " + playerSelection + " gana a " + computerSelection
      document.querySelector(".per").innerHTML = "Has ganado, tu puntaje es " + puntajeJugador + " "
      puntajeJugador++;
      
    }
  }
  else if (playerSelection == "Papel") {
    if (computerSelection == "Tijera") {
      document.querySelector(".per").innerHTML = "Has PERDIDO! " + computerSelection + " gana a " + playerSelection;
      document.querySelector(".per").innerHTML = "Has perdido" + puntajeMaquina + " "
      puntajeMaquina++;

    }
    if (computerSelection == "Piedra") {
      document.querySelector(".per").innerHTML = "Has GANADO! " + playerSelection + " gana a " + computerSelection;
      document.querySelector(".per").innerHTML = "Has ganado, tu puntaje es " + puntajeJugador + " "
      puntajeJugador++;

    }
  }
  else if (playerSelection == "Tijera") {
    if (computerSelection == "Piedra") {
      document.querySelector(".per").innerHTML = "Has PERDIDO! " + computerSelection + " gana a " + playerSelection;
      document.querySelector(".per").innerHTML = "Has perdido" + puntajeMaquina + " "
      puntajeMaquina++;

    }
    if (computerSelection == "Papel") {
      document.querySelector(".per").innerHTML = "Has GANADO! " + playerSelection + " gana a " + computerSelection;
      document.querySelector(".per").innerHTML = "Has ganado, tu puntaje es " + puntajeJugador + " "
      puntajeJugador++;

    }
  }
  let cajaPuntuacionPropia = document.getElementById("puntuacionPropia");
  cajaPuntuacionPropia.textContent = ""
  let cajaPuntuacionOrdenador = document.getElementById("puntuacionOrdenador");
  cajaPuntuacionOrdenador.textContent = ""

  let puntuacionPropia = document.createTextNode("Tu puntuación: " + puntajeJugador);
  let puntuacionOrdenador = document.createTextNode("Puntuación ordenador: " + puntajeMaquina);
  

  
  cajaPuntuacionPropia.appendChild(puntuacionPropia);
  cajaPuntuacionOrdenador.appendChild(puntuacionOrdenador);
}

/* Escriba una NUEVA función llamada game(). Utilice la función anterior dentro de este para jugar un juego de 5 rondas que mantiene la puntuación e informa un ganador o perdedor al final. */

function game() {
  let computerSelection = computerPlay();
  let ronda = playRound(playerSelection, computerSelection)
  console.log(ronda)
  
  if (puntajeJugador >= 2 && puntajeMaquina < 2) {
    console.log("el juego a terminado player")
    return gen()
  } else if (puntajeMaquina >= 2 && puntajeJugador < 2) {
    console.log("el juego a terminado computer")
    return gen()
  }
}

/** Modal **/

function gen() {
  let cerrar = document.querySelectorAll(".cerrar")[0]
  let modal = document.querySelectorAll(".modal")[0]
  let modalCont = document.querySelectorAll(".modal-container")[0]
  

  modalCont.style.visibility = "visible"
  modal.classList.toggle("close-modal")


  cerrar.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.toggle("close-modal")
    setTimeout(function () {
      modalCont.style.visibility = "hidden"
    }, 1000)
  })

  window.addEventListener("click", function (e) {
    e.target
    if (e.target === modalCont) {
      modal.classList.toggle("close-modal")
      setTimeout(function () {
        modalCont.style.visibility = "hidden"
      }, 1000)
    }
  })
}
/* FIn modal */

/** Modal SAW **/

function saw() {
  let modal = document.querySelectorAll(".modal-saw")[0]
  let modalCont = document.querySelectorAll(".modal-container-saw")[0]

  modalCont.style.visibility = "visible"
  modal.classList.toggle("close-modal-saw")
  setTimeout(() => {
    modal.style.transition = "transform 1s";
    modal.style.transform = "translateY(-300%)";
    setTimeout(() => {
      modalCont.style.visibility = "hidden"
    }, 500);
  }, 4500);

}
/* FIn modal */

/* Ocultar bloque */
/*
Contenedor con la clase ocultar para luego dejar visualizar los elementor de 
"Piedra, Papel y Tijera"
 */
function ocultar() {
  let ocultar = document.querySelectorAll(".ocultar")[0]
  let mostrar = document.querySelectorAll(".botones-mostrar")[0]
  let puntaje = document.querySelectorAll(".botones-mostrar-puntaje")[0]

  /* mostrar.addEventListener("click", function(e) {
    e.preventDefault();

  }) */
  
  ocultar.style.display = "none";

  mostrar.style.visibility= "visible"
  puntaje.style.visibility= "visible"

  saw()
  setTimeout(() => {
    sonido.play()
  }, 2500);

}
/* FIn ocultar */

/* Efecto de sonido */
const cargarSonido = function (fuente) {
  const sonido = document.createElement("audio");
  sonido.src = fuente;
  sonido.setAttribute("preload", "auto");
  sonido.setAttribute("controls", "none");
  sonido.style.display = "none"; // <-- oculto
  document.body.appendChild(sonido);
  return sonido;
};

const sonido = cargarSonido("/audio/queComienceElJuego2.mp3");

/* Fin efecto de sonido */



