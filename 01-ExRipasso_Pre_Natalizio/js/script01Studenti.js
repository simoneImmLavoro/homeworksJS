let listaStudenti = document.getElementById("listaStudenti");
let submit = document.getElementById("submit");

let alunni = [
    "Paolo Carinola",
    "Paolo Carlini",
    "Marco Meola",
    "Simone Astore",
    "Mounir Ghanam",
    "Elena Soave",
    "Alessandro Capraro",
    "Leonardo Stahl",
    "Tamara Sans",
    "Vania Villanueva",
    "Paolo Gippa"
];

for(let i = 0; i < alunni.length; i++){
    listaStudenti.innerHTML += `<li> ${alunni[i]} </li>`;
}

if(alunni.length < 8){
    statusCorso.innerHTML = "Il corso è sospeso !"
}else{
    statusCorso.innerHTML = "Il corso è attivo !"
}


function contaStud(){
    let contaLettere = document.getElementById("contaLettere");
    let letterInput = document.getElementById("letter");

    let lettera = letterInput.value.toUpperCase();

    let numStud = 0;
    let studFiltered = [];
    
    for(let i = 0; i < alunni.length; i++){
        if(alunni[i].charAt(0) == lettera){
            numStud++;
            studFiltered.push(alunni[i]);
        }
    }

    if(numStud == 0){
        contaLettere.innerHTML = "Non ci sono studenti con questa iniziale"
    } else if(numStud == 1){
        contaLettere.innerHTML = `Lo studente che comincia con la ${lettera} è ${numStud} e nello specifico è ${studFiltered}`
    } else {
        contaLettere.innerHTML = `Gli studenti che cominciano con la ${lettera} sono ${numStud} e nello specifico sono ${studFiltered}` 
    }
    
}

submit.addEventListener("click", function(){
    contaStud();
})