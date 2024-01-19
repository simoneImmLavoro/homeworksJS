let elementsInput = document.getElementById("elements")
let printBtn = document.getElementById("print")
let myList = document.getElementById("myList")

let myElementsArray = [];


printBtn.addEventListener("click", function(){
    myList.innerHTML = "";
    let element = elementsInput.value;
    myElementsArray.push(element);

    myList.innerHTML = myElementsArray;
})