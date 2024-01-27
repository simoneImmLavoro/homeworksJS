let boxSaluto = document.querySelector(".saluto");
let nomeInput = document.querySelector("#nome");
let cognomeInput = document.querySelector("#cognome");
let button = document.querySelector("#btn");

button.addEventListener("click", function(){
    boxSaluto.innerHTML = ""
    let nome = nomeInput.value;
    let cognome = cognomeInput.value;
    let newWave = document.createElement("p")

    let regexPattern = /[A-Za-z ]+$/;

    if(nome.match(regexPattern) && cognome.match(regexPattern)){
        newWave.textContent = `Ciao ${nome} ${cognome}!`
        nomeInput.value = "";
        cognomeInput.value = "";
    }else{
        newWave.textContent = `Per favore, inserisci un nome e un cognome validi.`       
    }
    
    boxSaluto.appendChild(newWave);        
})
