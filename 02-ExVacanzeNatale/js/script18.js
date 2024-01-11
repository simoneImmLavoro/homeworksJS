let firstInput = document.querySelector("#firstN");
let secondInput = document.querySelector("#secondN");
let submitButton = document.querySelector("#submit");
let resultSpanMoltiplication = document.querySelector("#resultMoltiplication");
let resultSpanDivision = document.querySelector("#resultDivision");

submitButton.addEventListener("click", function(){
    firstN = parseFloat(firstInput.value);
    secondN = parseFloat(secondInput.value);


            resultSpanMoltiplication.innerHTML = firstN * secondN;
            resultSpanDivision.innerHTML = firstN / secondN;
});