let submitButton = document.querySelector("#submit");
let resultSpan = document.querySelector("#result");
let yourInputY = document.querySelector("#yourY");
let yourInputC = document.querySelector("#currentY");

let yourYear;
let currentYear;

submitButton.addEventListener("click", function(){
    yourYear = parseInt(yourInputY.value);
    currentYear = parseInt(yourInputC.value);

    if((typeof yourYear !== "number" || typeof currentYear !== "number")||(isNaN(yourYear) || isNaN(currentYear))){
        resultSpan.innerHTML = "Per favore inserisci due anni validi e riprova";
    } else {
        if(yourYear>currentYear){
            resultSpan.innerHTML = "Non sei ancora nato";
        } else if(yourYear == currentYear){
            resultSpan.innerHTML = "Sei nato quest'anno";
        }else {
            resultSpan.innerHTML = currentYear - yourYear + " anni";
        }
    }
})


