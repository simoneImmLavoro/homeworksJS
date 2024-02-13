let parolaInput = document.querySelector("#word");
let btnInsert = document.querySelector("#btnIns");
let btnReset = document.querySelector("#btnReset");
let grid = document.querySelector("#griglia")
let message = document.querySelector("#message")


let parolaDelGiorno = "MAGIA";
let parolaDelGiornoArray = parolaDelGiorno.split("");

let tentativi = 0;

function creaRiga(){
    let puntiVittoria = 0;
    tentativi++;

    if(tentativi > 5){
        message.textContent = "Mi dispiace HAI PERSO"
        btnInsert.setAttribute("disabled", "true");
        parolaInput.setAttribute("disabled", "true");
    }    


        let myParola = parolaInput.value;
        let charArray = myParola.toUpperCase().split("");
        
        if(charArray.length != 5){
            message.textContent = "Devi inserire una parola di 5 lettere! Riprova"
            tentativi--;
        } else {
            
            
            
            let nuovaRiga = document.createElement("div");
            nuovaRiga.classList.add("rowparola");
            nuovaRiga.setAttribute("id", "newRow" + tentativi);
            grid.appendChild(nuovaRiga)
            
            
            for(let i = 0; i < charArray.length; i++){
                let myRiga = document.querySelector("#newRow" + tentativi);
                let nuovaCasella = document.createElement("div");
                nuovaCasella.classList.add("boxlett");
                myRiga.appendChild(nuovaCasella);
                
                nuovaCasella.innerHTML = charArray[i];
                
                if(parolaDelGiornoArray.includes(charArray[i])){
                    if(charArray[i] == parolaDelGiornoArray[i]){
                        nuovaCasella.classList.add("bgGreen");
                        puntiVittoria++;
                        if(puntiVittoria = 5){
                            message.textContent = "SEI PAZZESC*, HAI VINTO!";
                            btnInsert.setAttribute("disabled", "true");
                            parolaInput.setAttribute("disabled", "true");
                        }
                    } else {
                nuovaCasella.classList.add("bgYellow");
            }
        }
    }
}

parolaInput.value = ""
}


btnInsert.addEventListener("click", creaRiga)

btnReset.addEventListener("click", function(){
    tentativi = 0;
    grid.innerHTML = "";
    message.textContent = "";
})