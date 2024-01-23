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