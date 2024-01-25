let nomeField = document.getElementById("nome");
let cognomeField = document.getElementById("cognome");
let emailField = document.getElementById("email");
let telefonoField = document.getElementById("telefono");
let feed = document.getElementById("feed");
let demo = document.getElementById("demo");


function Contatto(nome, cognome, email, telefono){
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.telefono = telefono;
    this.cardColor = generateRandomColor();

    this.color = function(){
        let myRandom = Math.floor(Math.random() * 255);
        let myRandom2 = Math.floor(Math.random() * 255);
        let myRandom3 = Math.floor(Math.random() * 255);

        this.cardColor = `rgb(${myRandom},${myRandom2},${myRandom3})`

        return cardColor;
    }

    this.createCard = function(){
        let newCard = document.createElement("div");

        newCard.style.backgroundColor = this.cardColor;
        newCard.classList.add("flex-element");


        newCard.innerHTML += `<h4> Scheda contatto</h4>`;
        newCard.innerHTML += `<p> Nome: ${this.nome}</p>`;
        newCard.innerHTML += `<p> Cognome: ${this.cognome}</p>`;
        newCard.innerHTML += `<p> Email: <br> ${this.email}</p>`;
        newCard.innerHTML += `<p> Telefono: ${this.telefono}</p>`;

        demo.appendChild(newCard);
    }

    function generateRandomColor() {
        let myRandom = Math.floor(Math.random() * 255);
        let myRandom2 = Math.floor(Math.random() * 255);
        let myRandom3 = Math.floor(Math.random() * 255);

        return `rgb(${myRandom},${myRandom2},${myRandom3})`;
    }

}


let myRubrica = [];

function aggiungiContatto(){
    feed.innerHTML = "";
    demo.innerHTML = "";
    
    let myPersona = new Contatto(nomeField.value, cognomeField.value, emailField.value, telefonoField.value);

    let nomeVuoto = (nomeField.value ? '' : '<p> Il Nome Utente è vuoto</p>')
    let cognomeVuoto = (cognomeField.value ? '' : '<p> Il Cognome Utente è vuoto</p>')
    let emailVuoto = (emailField.value ? '' : '<p> La mail Utente è vuoto</p>')
    let telefonoVuoto = (telefonoField.value ? '' : '<p> Il telefono Utente è vuoto</p>')

    if(nomeField == "" || cognomeField.value == "" || emailField.value == "" || telefonoField.value == ""){
        feed.innerHTML += ("Attenzione, i seguenti campi sono errati:");
        feed.innerHTML += nomeVuoto;
        feed.innerHTML += cognomeVuoto;
        feed.innerHTML += emailVuoto;
        feed.innerHTML += telefonoVuoto;
    } else {
        feed.innerHTML = "Utente aggiunto";
        myRubrica.push(myPersona);

        nomeField.value = "";
        cognomeField.value = "";
        emailField.value = "";
        telefonoField.value = "";
    }

    for (let i = 0; i < myRubrica.length; i++) {
        myRubrica[i].createCard();
    }

}