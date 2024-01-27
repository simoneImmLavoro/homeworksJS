let boxSaluto = document.querySelector(".saluto");
let nomeInput = document.querySelector("#nome");
let cognomeInput = document.querySelector("#cognome");
let button = document.querySelector("#btn");

button.addEventListener("click", function(){
    boxSaluto.innerHTML = ""
    let nome = nomeInput.value;
    let cognome = cognomeInput.value;
    let newWave = document.createElement("p")

    let regexPattern = /^[A-Za-z][A-Za-z\s]*$/;

    if(!regexPattern.test(nome) && !regexPattern.test(cognome)){
        newWave.textContent = `Per favore, inserisci un nome e un cognome validi.`
    } else if(!regexPattern.test(nome)){
        newWave.textContent = `Il nome inserito non è valido.`
        nomeInput.value = "";
    }else if(!regexPattern.test(cognome)){
        newWave.textContent = `Il cognome inserito non è valido.`
        cognomeInput.value = "";
    } else {
        newWave.textContent = `Ciao ${nome} ${cognome}!`
        nomeInput.value = "";
        cognomeInput.value = "";
    }

    
    boxSaluto.appendChild(newWave);        
})
