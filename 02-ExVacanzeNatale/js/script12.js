let yourWordInput = document.querySelector("#yourWordInput");
let reversed = document.querySelector("#reverse");
let button = document.querySelector("#submitBtn");


function revertWord(){
    let yourWord = yourWordInput.value.split("");
    let yourRevertedWordArr = [];
    
    for(let i = 0; i < yourWord.length; i++){
        yourRevertedWordArr.unshift(yourWord[i]);
    }

    let yourRevertedWord = yourRevertedWordArr.join("");

    reversed.innerHTML = yourRevertedWord;
}

button.addEventListener("click", function(){
    reversed.innerHTML = "";
    revertWord()
})