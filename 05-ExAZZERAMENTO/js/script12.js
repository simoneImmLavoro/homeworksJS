let myString = document.getElementById("myString");
let rotateBttn = document.getElementById("rotate");
let demo = document.getElementById("demo");

function rotateString(word) {
    demo.innerHTML = "";
    
    let counter = 1;
    
    let createInterval = setInterval(function() {
        if(counter < word.length){
            let splitLastLetter = word.charAt(word.length - 1 - counter);
            let letterSpan = document.createElement("span");
            letterSpan.innerHTML = splitLastLetter;
            demo.appendChild(letterSpan);
            counter++;
        } else {
            let lastChar = word.charAt(word.length -1);
            let lastLetterSpan = document.createElement("span");
            lastLetterSpan.innerHTML = lastChar;
            demo.appendChild(lastLetterSpan);
            clearInterval(createInterval);
        }

    }, 1000)
}

rotateBttn.addEventListener("click", function(){
    rotateString(myString.value)
})