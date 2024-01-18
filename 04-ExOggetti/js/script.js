let listaAlunni = document.querySelector(".listaAlunni");


function Alunno(nome, cognome, presenza){
    this.nome = nome;
    this.cognome = cognome;
    this.presenza = presenza;

    this.toString = function(){
        let isPresent; 
        
        if(this.presenza){
            isPresent = "è presente a lezione.";
        } else {
            isPresent = "risulta assente.";
        }
        let description = `${this.cognome} ${this.nome} ${isPresent}`;
        return description;
    };

    this.switchPresence = function(){
        this.presenza = !this.presenza;
    }

}


let unorderedMyClass = [
    new Alunno("Simone", "Astore", false),
    new Alunno("Sofia", "Signa", false),
    new Alunno("Rose", "Beni", false),
    new Alunno("Paolo", "Carinola", false),
    new Alunno("Paolo", "Gippa", false),
    new Alunno("Paolo", "Carlini", false),
    new Alunno("Elena", "Soave", false),
    new Alunno("Alessandro", "Capraro", false),
    new Alunno("Marco", "Meola", false),
    new Alunno("Vania", "Villanueva", false),
    new Alunno("Kewin", "Montenegro", false),
    new Alunno("Tamara", "Sans", false),
    new Alunno("Munir", "Ghanam", false),
    new Alunno("Leonardo", "Stahl", false),
    new Alunno("Mayte", "Caci", false),
]

function ordinaCognome(a,b){
    let cognome1 = a.cognome;
    let cognome2 = b.cognome;

    if(cognome1 < cognome2){
        return -1;
    } else {
        return 1;
    }

}

let myClass = unorderedMyClass.sort(ordinaCognome)

myClass.forEach(alunno => {
    let redDot = document.createElement("span");
    let alunnoP = document.createElement("p");
    let alunnoButton = document.createElement("button");
    
    redDot.classList.add("red-dot");
    alunnoP.innerHTML = alunno.toString();
    alunnoButton.innerHTML = "Presenza";
    
    listaAlunni.appendChild(redDot);
    listaAlunni.appendChild(alunnoP);
    listaAlunni.appendChild(alunnoButton);
    listaAlunni.appendChild(document.createElement("br"));
    
    alunnoButton.addEventListener("click", function(){
        alunno.switchPresence();
        alunnoP.innerHTML = alunno.toString();
        redDot.classList.toggle("green-dot");
    })
})