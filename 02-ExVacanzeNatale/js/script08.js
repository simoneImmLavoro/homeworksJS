let yourWordInput = document.querySelector("#yourWordInput");
let reversed = document.querySelector("#reverse");
let button = document.querySelector("#submitBtn");


function revertWord(){
    let yourWord = yourWordInput.value
    let yourRevertedWord = yourWord.split("").reverse().join("");
    reversed.innerHTML = yourRevertedWord;
}

button.addEventListener("click", function(){
    reversed.innerHTML = "";
    revertWord()
})
