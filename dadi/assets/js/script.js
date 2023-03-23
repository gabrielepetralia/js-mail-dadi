let lancioUser;
let lancioComputer;
let numUtente = document.getElementById("num-utente");
let numComputer = document.getElementById("num-computer");

const arrow = document.getElementById("freccia")
const btnLancia = document.getElementById("lancia");
const userIcon = document.getElementById("user-icon");
const computerIcon = document.getElementById("computer-icon");

btnLancia.addEventListener("click", function(){
  lancioUser = Math.floor(Math.random() * 6) + 1;
  lancioComputer= Math.floor(Math.random() * 6) + 1;

  // Assegnazione immagine dado User
  if(lancioUser==1) {
    numUtente.className="dado-1";
  } else if(lancioUser==2) {
    numUtente.className="dado-2";
  } else if(lancioUser==3) {
    numUtente.className="dado-3";
  } else if(lancioUser==4) {
    numUtente.className="dado-4";
  } else if(lancioUser==5) {
    numUtente.className="dado-5";
  } else {
    numUtente.className="dado-6";
  }

  // Assegnazione immagine dado Computer
  if(lancioComputer==1) {
    numComputer.className="dado-1";
  } else if(lancioComputer==2) {
    numComputer.className="dado-2";
  } else if(lancioComputer==3) {
    numComputer.className="dado-3";
  } else if(lancioComputer==4) {
    numComputer.className="dado-4";
  } else if(lancioComputer==5) {
    numComputer.className="dado-5";
  } else {
    numComputer.className="dado-6";
  }

  // Gestione rotazione freccia e background icone
  if(lancioUser > lancioComputer){
    if(arrow.classList.contains("dx")){
      arrow.classList.remove("dx");
      arrow.classList.add("sx");
    } else {
      arrow.classList.add("sx");
    }

    userIcon.classList.remove("lose");
    userIcon.classList.remove("pareggio");
    userIcon.classList.add("win");

    computerIcon.classList.remove("win");
    computerIcon.classList.remove("pareggio");
    computerIcon.classList.add("lose");
  } else if (lancioUser < lancioComputer){
    if(arrow.classList.contains("sx")){
      arrow.classList.remove("sx");
      arrow.classList.add("dx");
    } else {
      arrow.classList.add("dx");
    }

    userIcon.classList.remove("win");
    userIcon.classList.remove("pareggio");
    userIcon.classList.add("lose");

    computerIcon.classList.remove("lose");
    computerIcon.classList.remove("pareggio");
    computerIcon.classList.add("win");
  } else {
    if(arrow.classList.contains("sx")){
      arrow.classList.remove("sx");
    } else if (arrow.classList.contains("dx")) {
      arrow.classList.remove("dx");
    }

    userIcon.classList.remove("win");
    userIcon.classList.remove("lose");
    userIcon.classList.add("pareggio");

    computerIcon.classList.remove("win");
    computerIcon.classList.remove("lose");
    computerIcon.classList.add("pareggio");
  }
})
