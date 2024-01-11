let sentence = "Java Lorem ipsum sit dolor Java aliqua clara et pulcra sunt Java";
let myWord = "Java";

let keywordCounter = 0;
let sentenceArr = sentence.split(" ");

for(let i=0; i<sentenceArr.length; i++){
    if(sentenceArr[i] === myWord){
        console.log(myWord);
        keywordCounter++;
    }
}

console.log("La parola è contenuta " + keywordCounter + " volte");