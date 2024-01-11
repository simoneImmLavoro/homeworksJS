//prendo gli elementi dal DOM
let firstInput = document.querySelector("#firstN");
let secondInput = document.querySelector("#secondN");
let submitButton = document.querySelector("#submit");
let resultSpanMoltiplication = document.querySelector("#resultMoltiplication");
let resultSpanDivision = document.querySelector("#resultDivision");
let checkMolt = document.querySelector("#moltiplication");
let checkDiv = document.querySelector("#division");
let moltParagraph = document.querySelector("#moltDeclaration");
let divParagraph = document.querySelector("#divDeclaration");
let errDeclaration = document.querySelector("#errorDeclaration");

//inizializzo le variabili contenitori dei valori dell'utente
let firstN;
let secondN;


//creo un evento click che si riaggiorna nascondendo i risultati
submitButton.addEventListener("click", function(){
    firstN = parseFloat(firstInput.value);
    secondN = parseFloat(secondInput.value);

    moltParagraph.style.display = "none";
    divParagraph.style.display = "none";
    errDeclaration.style.display = "none";

    if (isNaN(firstN) || isNaN(secondN)) {
        errDeclaration.innerHTML = "Per favore inserisci due numeri validi e riprova.";
        errDeclaration.style.display = "block";
    } else if (!checkMolt.checked && !checkDiv.checked) {
        errDeclaration.innerHTML = "Per favore seleziona almeno una delle due opzioni.";
        errDeclaration.style.display = "block";
    } else {
        if (checkMolt.checked) {
            resultSpanMoltiplication.innerHTML = firstN * secondN;
            moltParagraph.style.display = "block";
        } 
        
        if (checkDiv.checked) {
            resultSpanDivision.innerHTML = firstN / secondN;
            divParagraph.style.display = "block";
        }
    }
});


