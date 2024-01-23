//aggiungere un utente alla lista di utenti solo se tutti sono corretti altrimenti mostra nel div feed un avviso specificando quale dei campi è errato

let nomeField = document.getElementById("nome");
let cognomeField = document.getElementById("cognome");
let emailField = document.getElementById("email");
let telefonoField = document.getElementById("telefono");
let feed = document.getElementById("feed");
let demo = document.getElementById("demo");

let myRubrica = []
//ora voglio che dentro demo per ogni utente venga creato un box ben ordinato con nome, cognome, email e numero di telefono


function Contatto(nome, cognome, email, telefono){
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.telefono = telefono;

    this.descrizione = function(){
        let myContact = `${this.nome} ${this.cognome} - ${this.email} - ${this.telefono}`;

        return myContact
    }
}


function aggiungiContatto(){
    feed.innerHTML = "";
    
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
        myRubrica.push(myPersona.descrizione());

        createCard(myPersona)

    }
    
}

function createCard(contatto){
        let newCard = document.createElement("div");
        let myRandom = Math.floor(Math.random() * 255)
        let myRandom2 = Math.floor(Math.random() * 255)
        let myRandom3 = Math.floor(Math.random() * 255)

        newCard.style.backgroundColor = `rgb(${myRandom},${myRandom2},${myRandom3})`
        newCard.classList.add("flex-element");

        newCard.innerHTML += `<p> Nome: ${contatto.nome}</p>`
        newCard.innerHTML += `<p> Cognome: ${contatto.cognome}</p>`
        newCard.innerHTML += `<p> Email: ${contatto.email}</p>`
        newCard.innerHTML += `<p> Telefono: ${contatto.telefono}</p>`

        demo.appendChild(newCard) 
}