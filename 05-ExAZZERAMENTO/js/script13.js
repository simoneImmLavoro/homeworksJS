//Es5 Scrivi un programma che accetta (da input) un numero come input e inserisce un dash (-) tra due numeri pari. Es ( 823486 -> 8-234-8-6 )

let myNumb = document.getElementById("myNumbers");
let printBttn = document.getElementById("print");
let demo = document.getElementById("demo");

let myNumbersArray = [];


printBttn.addEventListener("click", function(){
    demo.innerHTML = "";
    let element = Number(myNumb.value);
    
    if(element % 2 == 0 && myNumbersArray[myNumbersArray.length-1] % 2 == 0){
        myNumbersArray.push("-");
    }
    
    myNumbersArray.push(element);
    demo.innerHTML = myNumbersArray.join(" ");
})