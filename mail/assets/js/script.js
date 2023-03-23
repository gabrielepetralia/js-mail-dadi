const listaMail = [
  "gabri@gmail.com",
  "mario@gmail.com",
  "giuseppe@gmail.com",
  "giulia@gmail.com",
  "marta@gmail.com",
];

let btnAccedi = document.getElementById("accedi");
let btnRegistrati = document.getElementById("registrati");
let btnLista = document.getElementById("btnLista");
let message = document.getElementById("messaggio");
let output;
const list = document.getElementById("lista");

// Creazione lista email nell'HTML
for(let i=0; i < listaMail.length; i++)
{
    const utente= document.createElement("li")
    utente.append(listaMail[i]);
    list.append(utente);
}

// Evento bottone Mostra/Nascondi lista utenti
btnLista.addEventListener("click", function(){
  if (list.classList.contains("hide")){
    btnLista.innerHTML = "Nascondi lista utenti";
    list.classList.remove("hide");
  } else{
    btnLista.innerHTML = "Mostra lista utenti";
    list.classList.add("hide");
  }
})

// Evento bottone Accedi
btnAccedi.addEventListener("click", function(){
  const email = document.getElementById("email").value;
  let registrato = false;

  let i=0;
  do{
    if(email==listaMail[i]){
      registrato=true;
    } 
    i++;
  }while(i < listaMail.length && registrato==false)

  if(registrato==true){
    output=" Accesso effettuato";
    message.classList.remove("deny");
    message.classList.remove("warning");
    message.classList.add("admit");
    document.getElementById("email").value="";
  } else{
    message.classList.remove("admit");
    message.classList.remove("warning");
    message.classList.add("deny");
    output=" Utente non registrato, effettua la registrazione";
  }

  message.innerHTML = output;
})

// Evento bottone Registrati
btnRegistrati.addEventListener("click", function(){
  const email = document.getElementById("email").value;
  let registrato = false;

  let i=0;
  do {
    if(email==listaMail[i]){
      registrato=true;
    }
    i++;
  }while(i < listaMail.length && registrato==false)

  if(registrato==true){
    output=" Utente già registrato, effettua l'accesso";
    message.classList.remove("deny");
    message.classList.remove("admit");
    message.classList.add("warning");
  } else{
    listaMail.push(email);
    message.classList.remove("deny");
    message.classList.remove("warning");
    message.classList.add("admit");
    const utente= document.createElement("li")
    utente.append(listaMail[i]);
    list.append(utente);
    output=" Registrazione effettuata";
  }

  message.innerHTML = output;
})