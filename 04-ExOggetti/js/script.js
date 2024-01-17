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
    alunno1 = new Alunno("Simone", "Astore", false),
    alunno2 = new Alunno("Sofia", "Signa", false),
    alunno3 = new Alunno("Rose", "Beni", false),
    alunno4 = new Alunno("Paolo", "Carinola", false),
    alunno5 = new Alunno("Paolo", "Gippa", false),
    alunno6 = new Alunno("Paolo", "Carlini", false),
    alunno7 = new Alunno("Elena", "Soave", false),
    alunno8 = new Alunno("Alessandro", "Capraro", false),
    alunno9 = new Alunno("Marco", "Meola", false),
    alunno10 = new Alunno("Vania", "Villanueva", false),
    alunno11 = new Alunno("Kewin", "Montenegro", false),
    alunno12 = new Alunno("Tamara", "Sans", false),
    alunno13 = new Alunno("Munir", "Ghanam", false),
    alunno14 = new Alunno("Leonardo", "Stahl", false),
    alunno15 = new Alunno("Mayte", "Caci", false),
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

    alunnoButton.addEventListener("click", function(){
        alunno.switchPresence();
        alunnoP.innerHTML = alunno.toString();
        redDot.classList.toggle("green-dot");
    })

    listaAlunni.appendChild(redDot);
    listaAlunni.appendChild(alunnoP);
    listaAlunni.appendChild(alunnoButton);
    listaAlunni.appendChild(document.createElement("br"));
    
})