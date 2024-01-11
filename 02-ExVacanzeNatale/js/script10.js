let numberOf = document.querySelector("#numberOf");
let submitBtn = document.querySelector("#submit");
let myString = document.querySelector("#myString");


const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"


function generateString(){
    let randomAmount= numberOf.value;
    let randomStringArr = [];
    for(let i=0; i < randomAmount; i++){
        randomStringArr.push(charSet.charAt(Math.floor(Math.random()*charSet.length)))
    }

    let finalString = randomStringArr.join("");
    myString.innerHTML = finalString;
}

submitBtn.addEventListener("click", function(){

    generateString();
})