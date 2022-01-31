// Variables globales a usar
/* let piedra = document.querySelectorAll("#piedra")[0];
let papel = document.querySelectorAll("#papel")[0]
let tijera = document.querySelectorAll("#tijera")[0] */
let imagenes = document.querySelectorAll(".imagenes")
let puntajeJugador = 0;
let puntajeMaquina = 0;
let playerSelection;
let computerSelection;

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
  mostrar.style.visibility = "visible";
  mostrar.style.marginTop = "0px";
  puntaje.style.visibility = "visible"

  saw()
  setTimeout(() => {
    sonido.play()
  }, 2500);

  /* playRound(playerSelection, computerSelection) */

}
/* FIn ocultar */

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

  btn()

}
/* FIn modal */

/* Botones PIEDRA, PAPEL, TIJERA */
function btn() {
  imagenes.forEach((i) => {
    i.addEventListener('click', () => {
      if (i.classList.contains('btn-piedra')) {
        playerSelection = "piedra"
      } else if (i.classList.contains('btn-papel')) {
        playerSelection = 'papel';
      } else {
        playerSelection = 'tijera';
      }
      game(playerSelection)

    });

  });
}
/* FIN BOTONES */

function game(playerS) {
  let computerSelection = computerPlay();
  let playerSelection = playerS;

  playRound(playerSelection, computerSelection);
  console.log("La computadora: " + computerSelection)
  console.log("Tu seleccionaste: " + playerSelection)

  if (puntajeJugador >= 2 && puntajeMaquina < 2) {
    console.log("el juego a terminado player")
    return console.log(hazGanado())
  } else if (puntajeMaquina >= 2 && puntajeJugador < 2) {
    console.log("el juego a terminado computer")
    return console.log(hazPerdido())
  }
}

/* Escriba una NUEVA función llamada game(). Utilice la función anterior dentro de este para jugar un juego de 5 rondas que mantiene la puntuación e informa un ganador o perdedor al final. */

// Crear una funcion que desvuelva al azar PIEDRA, PAPEL O TIJERA

function computerPlay() {

  let opcionAzar = Math.floor(Math.random() * 3)
  switch (opcionAzar) {
    case 0:
      return "piedra"
    case 1:
      return "papel"

    case 2:
      return "tijera"
  }
  console.log("dentro de computerPlay")
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection == computerSelection) {
    document.querySelector(".per").innerHTML = "Estan empatados ambos han seleccionado " + "<span id='spn'>" + computerSelection + "</span>" + " "
    setTimeout(function () {
      document.querySelector(".per").innerHTML = " "
    },2000)
       
  }
  else if (playerSelection == "piedra") {
    if (computerSelection == "papel") {
      puntajeMaquina++;
      
    }
    if (computerSelection == "tijera") {
      puntajeJugador++;

    }
  }
  else if (playerSelection == "papel") {
    if (computerSelection == "tijera") {
      puntajeMaquina++;

    }
    if (computerSelection == "piedra") {
      puntajeJugador++;

    }
  }
  else if (playerSelection == "tijera") {
    if (computerSelection == "piedra") {
      puntajeMaquina++;

    }
    if (computerSelection == "papel") {
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


/** Modal hazGanado**/

function hazGanado() {
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

/** Modal hazPerdido**/

function hazPerdido() {
  let cerrar = document.querySelectorAll(".cerrar-hazPerdido")[0]
  let modal = document.querySelectorAll(".modal-hazPerdido")[0]
  let modalCont = document.querySelectorAll(".modal-container-hazPerdido")[0]


  modalCont.style.visibility = "visible"
  modal.classList.toggle("close-modal-hazPerdido")


  cerrar.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.toggle("close-modal-hazPerdido")
    setTimeout(function () {
      modalCont.style.visibility = "hidden"
    }, 1000)
  })

  window.addEventListener("click", function (e) {
    e.target
    if (e.target === modalCont) {
      modal.classList.toggle("close-modal-hazPerdido")
      setTimeout(function () {
        modalCont.style.visibility = "hidden"
      }, 1000)
    }
  })
}
/* FIn modal */



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



