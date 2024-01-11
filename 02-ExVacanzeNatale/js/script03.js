let submitButton = document.querySelector("#submit");
let resultSpan = document.querySelector("#result");
let firstInput = document.querySelector("#firstN");
let secondInput = document.querySelector("#secondN");

let firstN;
let secondN;

submitButton.addEventListener("click", function(){
    firstN = parseFloat(firstInput.value);
    secondN = parseFloat(secondInput.value);

    if((typeof firstN !== "number" || typeof secondN !== "number")||(isNaN(firstN) || isNaN(secondN))){
        resultSpan.innerHTML = "Per favore inserisci due numeri validi e riprova";
    } else {
        resultSpan.innerHTML = firstN*secondN;
    }
})


