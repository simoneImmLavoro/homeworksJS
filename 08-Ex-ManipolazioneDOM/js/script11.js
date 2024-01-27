let myText = document.querySelector("#toChange")
let randBtn = document.querySelector("#random")


let myFonts = [
    "Arial",
    "Comic Sans",
    "Courier New",
    "Garamond",
    "Georgia",
    "Helvetica",
    "Impact",
    "Lucida Console",
    "Palatino",
    "Tahoma",
    "Times New Roman",
    "Trebuchet MS",
    "Verdana"
]



function randomizeText(){
    let myRandom = Math.floor(Math.random() * 255);
    let myRandom2 = Math.floor(Math.random() * 255);
    let myRandom3 = Math.floor(Math.random() * 255);
    
    let randomFontSize = Math.floor(Math.random() * (32 - 18 +1) + 18);
    let myRandomFontN = Math.floor(Math.random() * myFonts.length)
    let randomColor = `rgb(${myRandom}, ${myRandom2}, ${myRandom3})`;

    myText.style.fontSize = randomFontSize + "px";
    myText.style.color = randomColor;
    myText.style.fontFamily = myFonts[myRandomFontN];
  }

randBtn.addEventListener("click", function(){
    randomizeText()
})