let myString = document.getElementById("myString");
let rotateBttn = document.getElementById("rotate");
let demo = document.getElementById("demo");


function rotateString() {
    let sentence = myString.value;
    demo.innerHTML = "";
    let lastLetter = sentence.charAt(sentence.length - 1);

    let counter = 1;
    let createInterval = setInterval(function () {
        if (counter < sentence.length) {
            let splitLastLetter = sentence.charAt(sentence.length - 1 - counter);
            var letterSpan = document.createElement('span');
            letterSpan.innerHTML = splitLastLetter;
            demo.appendChild(letterSpan);
            counter++;
        } else {
            var lastLetterSpan = document.createElement('span');
            lastLetterSpan.innerHTML = lastLetter;
            demo.appendChild(lastLetterSpan);
            clearInterval(createInterval); // Interrompi l'intervallo dopo l'ultima iterazione
        }
    }, 1000); // Imposta il ritardo a 1000 millisecondi (1 secondo)
}

rotateBttn.addEventListener("click", function(){
    rotateString()
})
