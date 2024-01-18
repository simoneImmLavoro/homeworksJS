let numberInput = document.getElementById("number")
let printBtn = document.getElementById("print")
let myList = document.getElementById("atList")


printBtn.addEventListener("click", function(){
        myList.innerHTML = "";
        let myNumber = Number(numberInput.value);
        let myString = "";
        for(let i = 1; i <= myNumber; i++){
            myString += "@";
            myList.innerHTML += `<p>${myString}</p>`;
        }
})